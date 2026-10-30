---
id: economizer-control
type: concept
title: "Airside and waterside economizer control and demand-controlled ventilation"
summary: "Free-cooling and ventilation control strategies: coordinated outdoor/return/relief air damper modulation, dry-bulb and enthalpy changeover high limits, building static pressure relief, ASHRAE 62.1 CO2 demand-controlled ventilation (DCV), and plate-and-frame waterside economizers."
review: verified
images:
  - path: images/concepts/economizer-control.svg
    alt: "Technical diagram (drawn illustration) of a 3-damper airside economizer mixing box, dry-bulb and enthalpy changeover high limits, plate-and-frame waterside economizer, and ASHRAE 62.1 CO2 demand-controlled ventilation"
    source: "Own work (BASWiki technical diagram based on York Smart Equipment SSE-50 Sequence of Operations, LIT-12011998 SE-ECO1001-0, Belimo NMB24-3, and Vaisala GMW90/HMDW110 documentation)"
    license: CC0-1.0
related:
  - co2-sensors
  - control-strategies
  - cooling-towers
  - damper-actuators
  - dampers-and-louvers
  - discharge-air-temperature-reset
  - energy-conservation-strategies
  - gmd20
  - gmw90
  - heat-exchangers
  - hmdw110
  - humidity-sensors
  - hydronic-system-control
  - natural-ventilation
  - nmb24-3
  - static-pressure-reset
  - switches-and-safeties
  - temperature-sensors
  - york-sse-controller
sources:
  - https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/tech-corner/documents/engineering/sequence-of-operations-sse--50.pdf
  - https://docs.johnsoncontrols.com/api/khub/documents/f_C2S8fA5i5hW2K1qX0hTw/content
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_NMB24-3_datasheet_en-us.pdf
  - https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - https://www.esis.com.au/wp/wp-content/uploads/2019/01/HMDW110-Datasheet.pdf
---

## Overview

Many commercial buildings require sensible cooling even when outdoor air temperatures are cool (`35–65 °F` / `2–18 °C`) because internal heat gains from occupants, lighting, laboratory equipment, and solar radiation exceed envelope heat loss. Running mechanical refrigeration (chillers or DX compressors) while cool outdoor air is freely available outside wastes substantial electrical energy.

An **economizer** reduces or eliminates mechanical cooling runtime by rejecting building heat directly to the outdoors via two primary mechanisms:
1. **Airside Economizer**: Modulates the air-handling unit (`AHU`) or rooftop unit (`RTU`) mixing-box [dampers](dampers-and-louvers.html) to bring in up to `100%` cool outdoor air (`OA`) in place of warm return air (`RA`).
2. **Waterside Economizer**: Routes cold cooling-tower condenser water through a plate-and-frame heat exchanger to cool the building chilled water (`CHW`) loop without running chiller compressors.

Simultaneously, when outdoor weather is too cold or too hot/humid for free cooling, **Demand-Controlled Ventilation (`DCV`)** modulates the minimum outdoor air intake to match real-time occupant breathing demand rather than conditioning fixed design-occupancy outdoor air all day.

## Airside Economizer Damper Sequencing

An airside economizer mixing box coordinates three motorized [opposed-blade dampers](dampers-and-louvers.html) driven by proportional (`0–10 VDC` or `2–10 VDC`) actuators ([Belimo LMB24-3](../product/lmb24-3.html), [NMB24-3](../product/nmb24-3.html), [AMB24-3](../product/amb24-3.html)) and Dedicated Economizer Boards such as the [York Smart Equipment `SE-ECO1001-0`](../product/york-sse-controller.html) (`SSE-50`):

1. **Outdoor Air Damper (`OAD`, Direct-Acting)**: Opens from its minimum ventilation position ($D_{\min}$, e.g., `15–25%`) up to `100%` open as the economizer cooling loopout rises from `0%` to `100%`. Spring-return fail-closed actuators ensure the `OAD` closes upon fan shutdown or power loss.
2. **Relief / Exhaust Air Damper (`EAD`) & Building Static Pressure Control**: When the `OAD` opens beyond minimum ventilation (`> 25–30%`), up to `100%` of the supply fan airflow enters from outdoors. Without proportional relief, the building would over-pressurize (`> +0.15 in. w.c.`), preventing exterior entrance doors from closing. High-performance AHUs measure **building static pressure** relative to an outdoor static pressure hood using a bidirectional low-range transducer ([Setra Model 264](../product/setra-264.html), `±0.25 in. w.c.`) and modulate the motorized relief damper and/or return/relief fan VFD to hold `+0.03 to +0.08 in. w.c.` (`+7.5 to +20 Pa`).
3. **Return Air Damper (`RAD`, Reverse-Acting / Complementary)**: Closes inversely from `85%` down to `0%` as the `OAD` opens so that total mixed air volume remains constant and cool outdoor air is drawn into the unit.

### Integrated vs. Non-Integrated Economizer Staging

An **integrated economizer** (required by ASHRAE 90.1 in most climate zones) operates in two seamless stages when outdoor air is below the economizer changeover limit ($T_{\text{DAT,sp}} < \text{OAT} < T_{\text{high-limit}}$):

- **Economizer Lockout (`OAT > T_high-limit` or `h_OA > h_RA`)**: Once outdoor air contains more sensible or total heat (enthalpy) than return air, the `OAD` immediately returns to its minimum ventilation position ($D_{\min}$) and mechanical cooling handles `100%` of the load.
- **Low-Limit Freeze Protection**: If the mixed air temperature drops below `40–42 °F` (`4.4–5.6 °C`), a low-limit PID override throttles the `OAD` back toward minimum position before the hardwired `38 °F` (`3.3 °C`) serpentine [freeze stat](switches-and-safeties.html) trips the supply fan.
- **Stage 1 (100% Free Cooling — `OAT <= T_DAT,sp`)**: The `OAD` and `RAD` modulate between minimum ventilation and `100% OA` to hold the [discharge air temperature (`DAT`)](discharge-air-temperature-reset.html) or mixed air temperature (`MAT`) setpoint (`55–65 °F`) with mechanical cooling `Off` (`0%`).
- **Stage 2 (Integrated Mechanical Assist — `T_DAT,sp < OAT < T_high-limit`)**: When `OAT` is `60 °F`, outdoor air alone cannot achieve a `55 °F` `DAT`, yet `60 °F` outdoor air is still `15 °F` cooler than `75 °F` return air! An integrated economizer holds the `OAD` locked at `100%` open while modulating the chilled water valve or staging DX compressors (`SSE-50`) to trim the `60 °F` air down to `55 °F`.

## Economizer High-Limit Changeover Controls (ASHRAE 90.1)

To prevent bringing warm, humid outdoor air into the building—which would spike latent dehumidification loads on the cooling coil—the BAS evaluates one of four changeover criteria using outdoor and return [temperature](temperature-sensors.html) and [humidity transmitters](humidity-sensors.html) ([Vaisala HMD60](../product/hmd60.html) / [HMDW110](../product/hmdw110.html)):

| Changeover Type | Sensors Required | Typical Changeover Threshold (ASHRAE 90.1) | Best Climate Fit & Characteristics |
| :--- | :--- | :--- | :--- |
| **Fixed Dry-Bulb** | Outdoor air temp (`OAT`) | `OAT > 65 °F` (humid climates) to `75 °F` (arid climates `3B/4B/5B`) | High reliability; ideal for dry and marine climates where outdoor humidity is low. |
| **Differential Dry-Bulb** | `OAT` + Return air temp (`RAT`) | `OAT > RAT` (typically with `1–2 °F` deadband: lock out when `OAT > RAT - 1 °F`) | Captures extra free cooling when space/return temp floats up; prohibited in humid climate zones `1A–4A` without enthalpy limit. |
| **Fixed Enthalpy + Fixed Dry-Bulb** | `OAT` + Outdoor `RH` ([HMD60](../product/hmd60.html)) | $h_{\text{OA}} > 28\text{ Btu/lb}_{\text{da}}$ (`65 kJ/kg`) **or** $\text{OAT} > 75\text{ °F}$ | Prevents high-humidity outdoor air intake in warm/moist climates (`1A–4A`); requires periodic `RH` sensor calibration verification. |
| **Differential Enthalpy + Fixed Dry-Bulb** | `OAT` + `OA RH` + `RAT` + `RA RH` | $h_{\text{OA}} > h_{\text{RA}}$ **or** $\text{OAT} > 75\text{ °F}$ | Theoretical maximum energy savings across humid/mixed climates, but relies on two high-accuracy `±1.5–2% RH` transmitters ([Vaisala HMDW110](../product/hmdw110.html)). |

## Demand-Controlled Ventilation (`DCV`) with $\text{CO}_2$ Sensing

Under **ASHRAE Standard 62.1 (*Ventilation for Acceptable Indoor Air Quality*)**, the required breathing-zone outdoor airflow ($V_{bz}$) for a zone is the sum of a **people-related component** and a **building-area component**:

$$V_{bz} = (R_p \times P_z) + (R_a \times A_z)$$

where:
- $A_z$: Zone net occupiable floor area (`ft²`).
- $P_z$: Zone population (number of occupants currently present).
- $R_a$: Outdoor airflow rate required per unit floor area to dilute building material off-gassing (e.g., `0.06 CFM/ft²` for offices, `0.12 CFM/ft²` for classrooms).
- $R_p$: Outdoor airflow rate required per person (e.g., `5 CFM/person` for offices, `7.5–10 CFM/person` for classrooms/lecture halls).

In spaces with high or variable occupant density (auditoriums, lecture halls, classrooms, conference rooms, dining halls, gymnasiums), conditioning full design $V_{bz}$ when the room is only `10%` full wastes enormous heating and cooling energy.

**Demand-Controlled Ventilation (`DCV`)** uses a non-dispersive infrared (`NDIR`) [carbon dioxide ($\text{CO}_2$) sensor](co2-sensors.html)—such as the wall-mounted [Vaisala GMW90](../product/gmw90.html) (`400–2000 ppm`), duct-mounted [Vaisala GMD20](../product/gmd20.html), or integrated [Viconics VT8000 $\text{CO}_2$ module](../product/vt8650.html)—to reset the active outdoor air requirement dynamically:

1. **Multi-Zone VAV `DCV` (ASHRAE Guideline 36)**: In a VAV box serving a high-occupancy zone, when space $\text{CO}_2$ approaches `1000 ppm` (`loopout 0–100%`), the VAV controller resets its own minimum primary airflow setpoint $Q_{\min}$ from the base area rate ($R_a A_z$) up to the design ventilation rate ($V_{bz}$), and simultaneously sends a ventilation request to the central AHU outdoor airflow controller (`OA CFM` station).
2. **Single-Zone Rooftop / AHU `DCV` ([York `SE-ECO1001-0`](../product/york-sse-controller.html), [Trane Symbio 700](../product/symbio-700.html))**: At baseline $\text{CO}_2$ (`<= 400–600 ppm`), the outdoor air damper holds its base building-area minimum position ($D_{\min,\text{area}}$, corresponding to $R_a \times A_z$). As space $\text{CO}_2$ rises from `600 ppm` to the design setpoint (`1000 ppm`, i.e., `~600 ppm` differential above `400 ppm` outdoor air), the controller linearly resets the minimum `OAD` position up to the full design occupancy position ($D_{\min,\text{design}}$).

## Waterside Economizer (`Plate-and-Frame Free Cooling`)

In buildings without full-capacity airside economizer ductwork (such as high-rise towers, data centers, or hydronic [chilled beam](chilled-beams.html) / fan-coil plants), a **waterside economizer** installs a stainless-steel **plate-and-frame heat exchanger (`HX`)** between the open cooling tower condenser water (`CW`) loop and the closed chilled water (`CHW`) loop ([hydronic system control](hydronic-system-control.html)):

- **100% Free-Cooling (Chiller Bypass) Mode**: When outdoor wet-bulb falls below `36–40 °F` (`2–4 °C`), the cooling tower can supply `41–42 °F` condenser water. Across a `2 °F` heat-exchanger approach temperature, the plate-and-frame `HX` produces `43–44 °F` chilled water directly, allowing the BAS to shut off the mechanical chillers completely (`0 kW` compressor power) and cool the building using only cooling tower fans and circulation pumps.
- **Integrated (Series) Precooling Mode**: When outdoor wet-bulb temperature drops low enough that cooling tower leaving water (`CWST`, e.g., `47 °F`) is at least `2–3 °F` colder than the returning chilled water (`CHWR`, e.g., `54 °F`), motorized changeover valves divert return chilled water through the plate-and-frame `HX` upstream of the chiller evaporator, pre-cooling the return water before the chiller finishes cooling it to `44 °F`.
