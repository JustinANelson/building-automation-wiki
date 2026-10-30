---
id: energy-conservation-strategies
type: concept
title: "BAS energy conservation strategies and ASHRAE 90.1 / Guideline 36 sequences"
summary: "High-performance building automation energy conservation measures (ECMs): dual-maximum VAV reheat, optimal start/stop, unoccupied setback and morning warm-up, demand-controlled ventilation, air and hydronic resets, and automated fault detection and diagnostics (FDD)."
review: verified
images:
  - path: images/concepts/energy-conservation-strategies.svg
    alt: "Technical diagram (drawn illustration) comparing legacy single-minimum VAV reheat against ASHRAE Guideline 36 dual-maximum VAV sequencing alongside optimal start, CO2 demand-controlled ventilation, resets, and automated FDD"
    source: "Own work (BASWiki technical diagram based on York Smart Equipment SSE-50, Trane Tracer SC+ BAS-PRD038K-EN, Viconics VT8000/VT7000 028-6100-13, and Siemens Desigo CC A6V11852691)"
    license: CC0-1.0
related:
  - absorption-chillers
  - chilled-beams
  - chiller-part-load-performance
  - co2-sensors
  - control-strategies
  - desigo-cc
  - discharge-air-temperature-reset
  - economizer-control
  - efficiency-metrics
  - electric-chillers
  - energy-savings-and-payback-calculations
  - fan-and-pump-power-calculations
  - geothermal-ground-source
  - heat-pumps
  - hydronic-system-control
  - laboratory-and-fume-hood-control
  - measurement-and-verification
  - natural-ventilation
  - psychrometric-calculations
  - static-pressure-reset
  - supervisory-controllers
  - tracer-sc-plus
  - variable-frequency-drives
  - vav-control
  - vt8650
  - york-sse-controller
sources:
  - https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/tech-corner/documents/engineering/sequence-of-operations-sse--50.pdf
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/controls/building-management/Tracer-SC/BAS-PRD038K-EN_08012022.pdf
  - https://www.veris.com/ASSETS/DOCUMENTS/CMS/EN/028-6100-13_Catalog-VT8000-VT7000_A4_EN_RH20250520.pdf
  - https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
---

## Overview

In commercial and institutional buildings, HVAC systems account for `40–60%` of total site energy consumption. Modern energy codes—most notably **ASHRAE Standard 90.1** and **ASHRAE Guideline 36 (*High-Performance Sequences of Operation for HVAC Systems*)**—replace static, fixed-setpoint equipment operation with coordinated supervisory and terminal-level **Energy Conservation Measures (`ECMs`)** that dynamically match fan power, pump power, ventilation outdoor air, and thermal plant temperatures to real-time zone demand.

## Summary of Core BAS Energy Conservation Strategies

| Energy Conservation Strategy | Subsystem Targeted | Typical Subsystem Savings | Primary Mechanism & Code Basis |
| :--- | :--- | :--- | :--- |
| **Dual-Maximum VAV Reheat Logic** | Terminal VAV boxes & reheat coils | `30–50%` reheat & fan savings | Lowers deadband minimum airflow to `10–15%`; stages reheat discharge temperature first before increasing heating airflow (ASHRAE 90.1 / Guideline 36). |
| **[Duct Static & Hydronic $\Delta P$ Reset](static-pressure-reset.html)** | Supply fans & distribution pumps | `30–50%` VFD fan/pump kW | Resets $\Delta P_{\text{sp}}$ via Trim-and-Respond (`T&R`) until the most loaded damper/valve is `~90%` open ($P \propto N^3$). |
| **[Discharge Air Temperature (`DAT`) Reset](discharge-air-temperature-reset.html)** | Central VAV AHUs & rooftop units | `15–35%` chiller & reheat energy | Resets `DAT` upward (`55 °F → 62–65 °F`) in mild weather while clamping to `55 °F` for latent dehumidification or peak sensible load. |
| **[Airside & Waterside Economizers](economizer-control.html)** | AHU mixing box & chiller plant | `20–40%` mechanical cooling kW | Substitutes cool outdoor air or cooling-tower water for mechanical refrigeration when outdoor dry-bulb/enthalpy is favorable. |
| **[Demand-Controlled Ventilation (`DCV`)](economizer-control.html)** | Outdoor air ventilation intake | `15–35%` heating/cooling OA load | Modulates outdoor air between ASHRAE 62.1 area minimum ($R_a A_z$) and design occupancy using zone `CO2` (`400–1000 ppm`) and PIR occupancy sensors. |
| **Optimal Start/Stop & Night Setback** | Building-wide schedules | `10–25%` runtime energy | Adaptively calculates pre-occupancy recovery time (`°F/hr`) and holds outdoor air dampers closed (`0%`) during morning warm-up/cool-down. |
| **[Hydronic Plant & Condensing Reset](hydronic-system-control.html)** | Boilers, chillers, heat pumps | `8–20%` central plant energy | Resets hot water (`180 °F → 110 °F`) to keep boiler return water `< 130 °F` (flue-gas condensation) and resets chilled/condenser water to reduce compressor lift. |
| **VAV Fume Hood & Lab Sash Setback** | [Research laboratories](laboratory-and-fume-hood-control.html) | `40–70%` make-up air energy | Modulates hood exhaust with sash height and resets face velocity from `100 fpm` to `60 fpm` when zone presence sensors detect no operator. |

## 1. Dual-Maximum VAV Terminal Reheat Sequence

In legacy **single-minimum VAV reheat** control, a VAV box minimum airflow setpoint ($Q_{\min}$) was set high (`30–50%` of design cooling CFM) to prevent stratification during heating. Because the box remained at `30–50%` flow across the entire deadband and heating range, it continuously delivered a large volume of `55 °F` primary air that had to be reheated whenever the space was cool.

**Dual-Maximum VAV control** (supported by pressure-independent DDC controllers with low-flow velocity transducers such as the [Siemens Desigo DXR2](../product/dxr2.html), [Siemens BACnet PTEC](../product/apogee-tec-vav.html), and [Trane Symbio 500 / 210](../product/symbio-210.html)) defines three distinct airflow setpoints—Cooling Maximum ($Q_{\text{clg,max}}$), a much lower Minimum Ventilation Flow ($Q_{\min}$, typically `10–15%` or the ASHRAE 62.1 breathing-zone minimum), and Heating Maximum ($Q_{\text{htg,max}}$, typically `30–50%`):

1. **Cooling Mode**: Modulates airflow from $Q_{\text{clg,max}}$ down to $Q_{\min}$ as space temperature drops toward the cooling setpoint; reheat valve is `0%`.
2. **Deadband Mode**: Holds airflow at the low $Q_{\min}$ (`10–15%`) with `0%` reheat.
3. **Heating Stage 1 (Temperature Ramp at Low Airflow)**: While holding airflow at $Q_{\min}$, modulates the hot water reheat valve (or stages electric heat) to raise box discharge air temperature (`DAT`) up to the maximum stratification limit ($T_{\text{DAT,max}} = T_{\text{room}} + 15\text{ °F}$, typically `85 °F`).
4. **Heating Stage 2 (Airflow Ramp at Capped DAT)**: Once box `DAT` reaches `85 °F`, further heating demand ramps the airflow setpoint from $Q_{\min}$ up to $Q_{\text{htg,max}}$ while the inner reheat PID loop modulates the reheat valve to maintain `85 °F` leaving air.

## 2. Occupancy Scheduling, Optimal Start/Stop, and Morning Warm-Up

Supervisory controllers ([Siemens Desigo CC](../product/desigo-cc.html), [Desigo PXC4/5/7](../product/pxc4.html), [Trane Tracer SC+](../product/tracer-sc-plus.html)) and room controllers with onboard passive infrared (`PIR`) motion detectors ([Viconics VT8650 / VT7200](../product/vt8650.html) `028-6100-13`, [Siemens QMX3](../product/qmx3.html)) minimize unoccupied conditioning through four coordinated sequences:

- **Adaptive Optimal Start / Optimal Stop**: Instead of starting every air handler at a fixed early hour (`5:00 AM` year-round), the **Optimal Start** algorithm learns the thermal mass recovery rate of each zone (`°F/minute` in heating and cooling) as a function of outdoor air temperature (`OAT`). Each morning, it computes the exact lead time required for the worst-case zone to reach occupied setpoint right at scheduled occupancy (`8:00 AM`), bounded by a maximum pre-start window (`2–3 hours`). **Optimal Stop** turns off mechanical cooling/heating `15–30 minutes` before scheduled vacancy while coasting on building thermal mass with ventilation maintained.
- **Local PIR Occupancy Standby Setback**: When a conference room, classroom, or office is scheduled `Occupied` but its local PIR motion sensor ([Viconics VT8650](../product/vt8650.html)) detects no occupants for `15–30 minutes`, the zone enters **Occupied Standby**: relaxing setpoints by `±2–3 °F` (`72 °F → 75 °F` cooling, `70 °F → 68 °F` heating) and reducing VAV minimum ventilation airflow (`DCV`) until motion is detected again.
- **Morning Warm-Up and Pre-Cool Mode**: During the pre-occupancy Optimal Start window, the AHU runs in **Morning Warm-Up** or **Morning Pre-Cool** mode with the **outdoor air (`OA`) damper held 100% closed** (unless outdoor air is favorable for free cooling). Eliminating cold winter outdoor air intake during morning warm-up cuts pre-heat boiler load by `40–60%`.
- **Night Purge (Pre-Cooling with Cool Night Air)**: During summer mornings when outdoor air is cool and dry (`OAT < Space Temp - 5 °F` and outdoor dewpoint `< 55 °F`), the AHU opens its economizer damper to `100% OA` before occupancy to flush accumulated heat from the building structure prior to mechanical cooling hours.
- **Unoccupied Night Setback / Setup & Cycling**: Outside scheduled occupancy hours (`BACnet Schedule` & `Calendar` objects, with holiday exceptions), zone setpoints relax to wide unoccupied limits (for example, `60 °F` heating setback and `82–85 °F` cooling setup). Central air handlers shut down completely, cycling on for brief `30–60 minute` bursts with `0%` outdoor air only if a representative zone breaches its unoccupied limit.

## 3. Hybrid Passive / Low-Lift Conditioning Integration

Energy conservation sequences also coordinate low-exergy architectural and hydronic systems:
- **[Active and Passive Chilled Beams](chilled-beams.html)**: Delivers sensible cooling via relatively warm `57–61 °F` (`14–16 °C`) secondary chilled water—improving chiller efficiency (`kW/ton`) and expanding waterside free-cooling hours—while a dedicated outdoor air system (`DOAS`) handles latent dehumidification and ventilation, protected by condensation sensors (`DI`) and dewpoint clamps.
- **[Heat Pumps](heat-pumps.html) & [Geothermal Ground-Source Loops](geothermal-ground-source.html)**: Recovers rejected heat from interior cooling-dominant zones to heat perimeter zones on a shared condenser water loop (`60–90 °F`) or ground heat exchanger borefield, eliminating fossil-fuel combustion and supplemental boiler runtime across broad intermediate seasons.
- **[Natural Ventilation & Mixed-Mode Interlocks](natural-ventilation.html)**: Window contact switches (`DI`) or motorized clerestory actuators ([Belimo damper/window actuators](../product/nmb24-3.html)) interlock with the zone controller so mechanical heating/cooling is locked out (or relaxed to wide protection limits) whenever operable windows are open, and green/amber/red enthalpy-permissive indicator lights signal occupants when outdoor weather favors natural ventilation.

## 4. Automated Fault Detection and Diagnostics (`FDD`)

Even the best control sequences lose their energy savings if sensors drift, control valves leak through, or dampers bind. **Automated Fault Detection and Diagnostics (`FDD`)**—mandated for airside economizers by ASHRAE 90.1 / IECC and implemented in hardware such as the [York Smart Equipment FDD Expansion Board (`SE-FDD1001-0`)](../product/york-sse-controller.html), [Trane Tracer SC+](../product/tracer-sc-plus.html), and [Siemens Desigo CC](../product/desigo-cc.html)—evaluates hierarchical rules against live trend data:

1. **Economizer Faults (ASHRAE 90.1 Mandatory FDD)**:
   - *Damper Not Modulating / Stuck*: Mixed air temperature (`MAT`) fails to track between `RAT` and `OAT` as the damper actuator command (`0–10 V`) changes.
   - *Excess Outdoor Air*: Calculated outdoor air fraction `%OA = (MAT - RAT) / (OAT - RAT)` significantly exceeds the commanded ventilation setpoint.
   - *Unit Economizing When It Should Not*: Outdoor air damper open above minimum ventilation when `OAT` or enthalpy exceeds the high-limit changeover.
   - *Unit Not Economizing When It Should*: Mechanical DX/chilled water cooling active while outdoor conditions are valid for `100%` free cooling.
2. **Persistent Rogue Zone Fault**: Identifies any VAV terminal box that generates continuous static pressure or cooling `DAT` requests for `> 80%` of occupied hours so technicians can fix the undersized coil or restricted ductwork and exclude the rogue box from penalizing the rest of the building.
3. **Simultaneous Heating and Cooling Fault**: Flags an alarm if a chilled water valve (`> 5%`) and hot water valve (`> 5%`) on the same AHU are open simultaneously, or if `DAT` rises `> 2 °F` across a heating coil whose valve is commanded `0%` closed (indicating a leaking hot water valve).
