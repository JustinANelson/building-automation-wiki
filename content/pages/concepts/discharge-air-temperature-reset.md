---
id: discharge-air-temperature-reset
type: concept
title: "Discharge and supply air temperature reset"
summary: "Air-handling and rooftop unit control sequences that dynamically reset discharge air temperature (DAT / SAT) based on outdoor air temperature, zone cooling requests, and humidity limits to minimize simultaneous VAV reheat, extend airside economizer free cooling, and balance fan vs. chiller energy."
review: draft
images:
  - path: images/concepts/discharge-air-temperature-reset.svg
    alt: "Technical diagram (drawn illustration) of VAV discharge air temperature (DAT) reset schedule vs. outdoor air temperature, cooling trim-and-respond requests, dehumidification clamp, and SZVAV integration"
    source: "Own work (BASWiki technical diagram based on York Smart Equipment SSE-50 Sequence of Operations, Trane Tracer SC+ BAS-PRD038K-EN, Trane Symbio 500 VAV BAS-SVX091B-EN, and Siemens PTEC A6V10445888)"
    license: CC0-1.0
related:
  - apogee-tec-vav
  - chilled-beams
  - control-strategies
  - economizer-control
  - energy-conservation-strategies
  - heat-pumps
  - humidity-sensors
  - hydronic-system-control
  - static-pressure-reset
  - symbio-500
  - symbio-700
  - symbio-800
  - temperature-sensors
  - tracer-sc-plus
  - vav-control
  - vz8250
  - york-sse-controller
sources:
  - https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/tech-corner/documents/engineering/sequence-of-operations-sse--50.pdf
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/controls/building-management/Tracer-SC/BAS-PRD038K-EN_08012022.pdf
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Installation%20Operation%20and%20Maintenance/BAS-SVX091B-EN_04082023.pdf
  - https://sid.siemens.com/v/u/A6V10445888
---

## Overview and the VAV Thermal-Airflow Tradeoff

In a multi-zone variable-air-volume (`VAV`) air handling unit (`AHU`), the central cooling coil and [airside economizer](economizer-control.html) deliver primary conditioned air at a controlled **discharge air temperature (`DAT`)**—also called **supply air temperature (`SAT`)**—measured downstream of the supply fan and cooling/heating coils by an averaging duct [temperature sensor](temperature-sensors.html).

The sensible cooling delivered to any zone is governed by the fundamental airside sensible heat transfer equation:

$$Q_{\text{sensible}}\text{ (Btu/hr)} = 1.08 \times \text{CFM} \times (T_{\text{room}} - T_{\text{DAT}})$$

Holding a fixed, cold `55 °F` (`12.8 °C`) discharge air temperature year-round creates two competing energy effects during mild and cold weather:

1. **Fan vs. Chiller Energy Balance (Dominant in Warm/Humid Weather)**: Raising `DAT` (for example, to `60–65 °F`) reduces the temperature differential $(T_{\text{room}} - T_{\text{DAT}})$, which requires warm interior zones to open their VAV dampers wider and draw more `CFM`. Because fan power scales with the cube of airflow ($P \propto \text{CFM}^3$, see [static pressure reset](static-pressure-reset.html)), resetting `DAT` too high during warm weather or high cooling loads can increase supply fan kW more than it saves in chiller/reheat kW, and can sacrifice latent dehumidification if the coil surface rises above the air dewpoint.
2. **Simultaneous Reheat Penalty (Dominant in Mild/Cold Weather)**: Exterior and lightly loaded interior VAV zones must maintain a minimum primary airflow ($Q_{\min}$) for ventilation. If primary air enters the VAV box at `55 °F` when the zone needs neither cooling nor heating, the box overcools the space unless the terminal reheat coil heats that `55 °F` air back up to `70–85 °F`—Simultaneously spending central chiller/economizer energy to cool the air and boiler/electric energy to reheat it.

**Discharge air temperature reset** resolves this tradeoff by raising $T_{\text{DAT,sp}}$ from `55 °F` up toward `60–65 °F` when outdoor temperatures and zone cooling loads are low, and resetting $T_{\text{DAT,sp}}$ back down to `53–55 °F` whenever multiple zones call for high cooling or when latent dehumidification is required.

## Discharge Air Temperature Reset Methods Compared

| Reset Strategy | Control Inputs | Operating Principle | Typical Applications & Codes |
| :--- | :--- | :--- | :--- |
| **Outdoor Air Temperature (`OAT`) Linear Reset** | Outdoor air temperature sensor | Linearly resets $T_{\text{DAT,sp}}$ from `55 °F` at `OAT >= 70 °F` up to `62–65 °F` at `OAT <= 50 °F`. | Simple standalone AHUs; meets basic ASHRAE 90.1 supply air temperature reset requirement when zone polling is unavailable. |
| **Return Air Temperature (`RAT`) Reset** | Return air duct temperature sensor | Resets $T_{\text{DAT,sp}}$ inversely with `RAT` (e.g., `55 °F` at `RAT = 75 °F`, rising to `63 °F` at `RAT = 70 °F`). | Reflects average building sensible load, though insensitive to a single solar-loaded perimeter zone. |
| **Zone Cooling Request Trim-and-Respond (`T&R`)** | BACnet cooling requests from VAV boxes ([PTEC](../product/apogee-tec-vav.html), [Symbio 500](../product/symbio-500.html), [DXR2](../product/dxr2.html)) | Resets $T_{\text{DAT,sp}}$ upward by `+0.2 to +0.5 °F` every `2–5 min` when few zones call for full cooling ($R \le I$), and responds downward by `-0.5 to -1.0 °F` toward `55 °F` when zones request colder air ($R > I$). | High-performance multi-zone VAV systems ([Trane Tracer SC+](../product/tracer-sc-plus.html), Siemens Desigo/APOGEE). |
| **Hybrid `OAT` Upper-Limit + Zone Cooling `T&R` (Guideline 36)** | `OAT` + Zone Cooling Requests + Space/Return Dewpoint (`RH`) | Uses `OAT` to define the *maximum allowable* $T_{\text{DAT,max}}$ (`55 °F` in summer to `65 °F` in winter) so fan power never spikes in warm weather, then uses zone `T&R` to reset between `55 °F` and $T_{\text{DAT,max}}$. | ASHRAE Guideline 36 best practice for multi-zone VAV air handlers. |

## ASHRAE Guideline 36 Hybrid DAT Reset Sequence

Under ASHRAE Guideline 36, the AHU discharge air temperature setpoint is governed by a two-stage envelope:

### 1. Dynamic Upper Limit ($T_{\text{DAT,max}}$) from Outdoor Air Temperature
First, the controller calculates the maximum permissible discharge air temperature $T_{\text{DAT,max}}$ as a linear function of outdoor air dry-bulb temperature (`OAT`):
- When $\text{OAT} \ge 70\text{ °F}$ (`21.1 °C`): $T_{\text{DAT,max}} = 55\text{ °F}$ (`12.8 °C`) — locks `DAT` at design cooling temperature in warm weather so interior zones do not drive the supply fan to high cubic fan power.
- When $\text{OAT} \le 50\text{ °F}$ (`10.0 °C`): $T_{\text{DAT,max}} = 65\text{ °F}$ (`18.3 °C`) — allows full `10 °F` upward reset during cool economizer and heating weather.
- Between `50 °F` and `70 °F` `OAT`: $T_{\text{DAT,max}}$ interpolates linearly between `65 °F` and `55 °F`.

### 2. Zone Cooling Request Polling & Dehumidification Override
Each VAV terminal box generates `1`, `2`, or `3` **Cooling SAT Requests** when its cooling loopout is `>= 95%` (or space temperature exceeds the cooling setpoint by `> 3 °F` / `> 5 °F` while in full cooling):
- **Downward Response ($R > I$)**: When total weighted cooling requests $R > I$: $T_{\text{DAT,sp}}$ responds downward (colder) toward `55 °F` (`T_DAT,min`) so heavily loaded zones can satisfy their sensible cooling loads without driving the supply fan to maximum speed.
- **Latent Dehumidification Clamp**: If any critical space [humidity sensor](humidity-sensors.html) exceeds its high-limit threshold (typically `55–60% RH`) or outdoor/return air dewpoint exceeds `55 °F` (`12.8 °C`), the controller overrides the upward reset and clamps $T_{\text{DAT,sp}}$ to `53–55 °F` to ensure latent moisture condensation on the cooling coil. Conversely, in [chilled beam](chilled-beams.html) systems, primary dedicated outdoor air system (`DOAS`) dewpoint is held strictly below the chilled beam secondary water temperature (`48–52 °F` dewpoint) so room dewpoint stays at least `2–3 °F` below the chilled beam surface.
- **Upward Trim ($R \le I$)**: When total weighted cooling requests $R \le I$: $T_{\text{DAT,sp}}$ trims upward (warmer) toward $T_{\text{DAT,max}}$ in `+0.2 °F` steps every `2 minutes`, maximizing [airside economizer](economizer-control.html) free cooling and slashing VAV terminal reheat.

## Terminal Reheat Discharge Air Temperature Cap (`ASHRAE 55`)

Discharge air temperature control also applies at the **terminal VAV box reheat coil** ([vav-control](vav-control.html)):

- When a VAV box with a hot water or electric reheat coil enters heating mode, discharging overly hot air (`> 95–110 °F`) from ceiling diffusers at low airflow causes buoyancy-driven **thermal stratification**: the hot air pools at the ceiling and short-circuits directly into the ceiling return plenum without reaching the occupied breathing zone (`3–6 ft` above the floor).
- Modern VAV controllers ([Trane Symbio 500 VAV](../product/symbio-500.html) `BAS-SVX091B-EN`, [Siemens Desigo DXR2](../product/dxr2.html)) include a downstream **Box Discharge Air Temperature (`DAT`) sensor** (`10 kΩ Type II/III` thermistor) and cascade the space heating PID loop into a terminal `DAT` loop that limits maximum leaving air temperature to **no more than `15 °F` (`8.3 °C`) above the space heating setpoint** (typically `85 °F` max leaving air temperature per ASHRAE Standard 55 and Guideline 36).

## Single-Zone VAV (`SZVAV`) Packaged Rooftop DAT Control

In commercial packaged rooftop units, split systems, and heat pumps equipped with variable-speed supply fans and multi-stage or variable-capacity compressors—such as the [York Smart Equipment (`SSE` / `SEC`)](../product/york-sse-controller.html) (`IntelliSpeed` sequence in `SSE-50`), [Trane Symbio 700](../product/symbio-700.html) / [Symbio 800](../product/symbio-800.html), and [Viconics VZ8250](../product/vz8250.html)—**Single-Zone VAV (`SZVAV`)** decouples fan speed from compressor staging using discharge air temperature reset:

1. **Compressor / Economizer Loop Controls `DAT`**: As zone cooling demand increases from `0%` to `100%`, the controller resets the target `DAT` setpoint downward from roughly `68 °F` (light load) to `55 °F` (full load) and stages/modulates the economizer and DX compressors to hold that `DAT` setpoint.
2. **Supply Fan VFD/ECM Controls Zone Load**: Simultaneously, the supply fan modulates between minimum speed (`40–50%` airflow during deadband and light cooling) and `100%` speed as zone cooling error increases, delivering quiet, dehumidified part-load air while saving `40–60%` fan energy compared to constant-volume rooftop operation.
