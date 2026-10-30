---
id: hydronic-system-control
type: concept
title: "Hydronic plant and loop control: chillers, boilers, pumping topologies, and resets"
summary: "Central chilled water (CHW), condenser water (CW), and heating hot water (HHW) plant automation: constant primary / variable secondary vs. variable-primary flow (VPF), chiller and condensing boiler sequencing, minimum evaporator flow bypass, and supply water temperature resets."
review: draft
images:
  - path: images/concepts/hydronic-system-control.svg
    alt: "Technical diagram (drawn illustration) of a variable-primary flow (VPF) chiller plant with minimum flow bypass, condensing boiler outdoor hot water reset below 130 degrees F, and hydronic heat transfer equations"
    source: "Own work (BASWiki technical diagram based on York OptiView Control Center Form 160.75-PW4, Trane Tracer SC+ BAS-PRD038K-EN, Trane UC400 WSHP BAS-SVX065F-EN, and Belimo 22PDP-18 documentation)"
    license: CC0-1.0
related:
  - absorption-chillers
  - belimo-22pdp-18
  - chilled-beams
  - chiller-part-load-performance
  - control-strategies
  - control-valves
  - differential-pressure-sensors
  - discharge-air-temperature-reset
  - economizer-control
  - efficiency-metrics
  - electric-chillers
  - energy-conservation-strategies
  - gages-and-local-instrumentation
  - geothermal-ground-source
  - heat-pumps
  - static-pressure-reset
  - switches-and-safeties
  - tracer-sc-plus
  - variable-frequency-drives
  - york-optiview
sources:
  - https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/controls/building-management/Tracer-SC/BAS-PRD038K-EN_08012022.pdf
  - https://belimo.com/mam/general-documents/datasheets/en-gb/belimo_22PDP-18.._datasheet_en-gb.pdf
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Installation%20Operation%20and%20Maintenance/BAS-SVX065F-EN_05132023.pdf
---

## Overview and Hydronic Heat Transfer Equations

Hydronic distribution systems use water (or an aqueous propylene/ethylene glycol solution) to transport thermal energy between central plant equipment—chillers, cooling towers, boilers, and [geothermal ground-source](geothermal-ground-source.html) or water-source [heat pumps](heat-pumps.html)—and terminal air-handling coils, VAV reheat coils, fan coils, and [chilled beams](chilled-beams.html).

Because water has a volumetric heat capacity more than **3,400 times greater than air**, hydronic piping transfers large thermal loads with a fraction of the parasitic transport power and architectural shaft space required by all-air systems. For standard water near `60 °F`, thermal capacity ($Q$) and cooling tonnage are governed by:

$$Q\text{ (Btu/hr)} = 500 \times \text{GPM} \times \Delta T = 500 \times \text{GPM} \times |T_{\text{return}} - T_{\text{supply}}|$$

$$\text{Cooling Load (Tons)} = \frac{Q\text{ (Btu/hr)}}{12{,}000} = \frac{\text{GPM} \times (T_{\text{CHWR}} - T_{\text{CHWS}})}{24}$$

At the standard nominal chiller rating of `2.4 GPM/ton`, a `10 °F` temperature differential ($\Delta T = 54\text{ °F} - 44\text{ °F}$) delivers exactly `1.0 ton` (`12,000 Btu/hr`). High-performance campus plants design for `12 to 16 °F` chilled water $\Delta T$ (`1.5 to 2.0 GPM/ton`) and `30 to 40 °F` heating hot water $\Delta T$ to reduce pipe sizes and VFD pumping power.

## Hydronic Pumping Topologies Compared

| Pumping Topology | Plant Architecture | Coil Valve Type | Control Characteristics & Best Use |
| :--- | :--- | :--- | :--- |
| **Constant-Flow (3-Way Valves)** | Single constant-speed pump set; excess flow bypasses around coils via 3-way mixing/diverting valves. | 3-way modulating ([control valves](control-valves.html)) | Zero pumping energy savings at part load; constant flow through chillers/boilers. Used only on small legacy loops or end-of-line minimum-flow bypasses. |
| **Primary-Secondary (Decoupled Loop)** | Constant-speed **primary pumps** dedicated to chillers/boilers separated by a zero-pressure-drop **common decoupler (bypass) pipe** from VFD **secondary distribution pumps**. | 2-way equal-percentage (`EQL`) or `PICV` | Decouples constant chiller evaporator flow from variable building loop flow. Suffers from **"Low $\Delta T$ Syndrome"** if coil valves fail to maintain design $\Delta T$, causing return water to mix backward across the decoupler. |
| **Variable-Primary Flow (`VPF`)** | Single VFD headered pump set pumps variable flow directly through the chillers/boilers and out to the building loop, with a controlled **minimum-flow bypass valve** across the plant header. | 2-way `EQL` or `PICV` | Eliminates secondary pumps and decoupler mixing losses; saves `25–40%` plant pumping energy. Requires modern chillers ([York YK OptiView](../product/york-optiview.html), Trane CenTraVac) rated for variable evaporator flow (`3–11 ft/s` tube velocity). |
| **Distributed Pumping (`Primary-Only Variable` / Load Pumps)** | Variable-speed pumps at each building or AHU draw from a low-loss central header. | 2-way or dedicated coil pump | Eliminates throttling across balance valves on sprawling university district energy loops. |

## Chilled Water (`CHW`) & Condenser Water (`CW`) Plant Sequencing

In a central chilled water plant managed by a supervisory controller (such as [Trane Tracer SC+ Chiller Plant Control](../product/tracer-sc-plus.html) `BAS-PRD038K-EN` or [Siemens Desigo PXC5 / PXC7](../product/pxc7.html)) communicating with chiller unit panels ([York OptiView Control Center](../product/york-optiview.html) `Form 160.75-PW4` over BACnet/Modbus):

### 1. Chiller Start / Stop Sequence & Interlocks
Before a chiller compressor is permitted to start, the BAS executes a strict hardware/software safety sequence:
1. Command the chiller's dedicated motorized evaporator and condenser **isolation butterfly valves** `Open` and wait for their end-switch (`DI`) proof of full travel (`30–90 s`).
2. Start (or ramp up) the **chilled water pump** and **condenser water pump** so water flows through both barrels.
3. Verify closed **evaporator and condenser water flow switches** ([paddle or differential pressure switches](switches-and-safeties.html) wired directly to the chiller safety circuit, e.g., `OptiView` terminals) and verify plant magnetic/ultrasonic flowmeter reading exceeds the chiller's minimum evaporator flow rate ($Q_{\min,\text{evap}}$).
4. Enable the chiller (`Run Enable DO` / BACnet command) and write the active **Leaving Chilled Water Temperature Setpoint (`CHWST`)** and **Current Limit Setpoint (`4–20 mA` / `0–10 VDC` or BACnet `40–100% FLA`)**.

### 2. Multi-Chiller Staging Up and Down
In a multi-chiller Variable-Primary Flow (`VPF`) plant, adding or shedding a lag chiller is governed by three criteria:
- **Maximum Evaporator Flow Limit**: Even if thermal load is moderate (due to degraded loop $\Delta T$), stage up a lag chiller if loop `GPM` approaches the maximum tube velocity limit (`100%` max `GPM`) of the running chillers.
- **Minimum Flow Bypass Control**: A fast-acting linear modulating bypass valve (`15–30 s` actuator) in a decoupler bridge between the `CHWS` and `CHWR` headers remains `0%` closed during normal operation, and modulates open via a dedicated PID loop only when total building `GPM` drops below the sum of active chillers' minimum evaporator flow limits ($\sum Q_{\min,\text{evap}}$).
- **Smooth Unloading During Stage-Up**: Before opening the incoming lag chiller's isolation valve, the VFD pumps and/or running chiller current limit are smoothly coordinated so cold evaporator flow does not drop below $Q_{\min,\text{evap}}$ on the online chiller (`< 30% per minute` max flow rate of change).
- **Thermal Load & Current Threshold**: Stage up the next lag chiller when active chillers exceed `85–90%` of design cooling tonnage ($\text{GPM} \times \Delta T / 24$) or `85–90%` Rated Load Amps (`% RLA`), **and** leaving chilled water temperature rises `> 1.5–2.0 °F` above setpoint continuously for a staging delay (`10–15 minutes`).

### 3. Chilled Water (`CHWST`) & Condenser Water (`CWST`) Temperature Resets
Centrifugal and screw chiller efficiency improves by approximately **`1.5% to 2.5%` per `1 °F` (`0.56 °C`) reduction in refrigerant pressure lift** ($T_{\text{condenser}} - T_{\text{evaporator}}$):

- **Chilled Water Supply Temperature (`CHWST`) Reset**: Using [Trim-and-Respond (`T&R`)](static-pressure-reset.html) on AHU cooling coil valve positions and space humidity, the plant resets `CHWST` upward from `42–44 °F` (`5.6–6.7 °C`) at peak summer design load up to `48–52 °F` (`8.9–11.1 °C`) during mild/dry part-load weather, provided no AHU coil valve exceeds `90–95%` open and no space dewpoint/humidity limit is violated.
- **Condenser Water Supply Temperature (`CWST`) Wet-Bulb Approach Reset**: Rather than holding a fixed `85 °F` (`29.4 °C`) cooling tower leaving water setpoint, the BAS measures outdoor air **wet-bulb temperature** ($T_{\text{WB}}$, computed from outdoor dry-bulb and relative humidity via a [Vaisala HMDW110](../product/hmdw110.html)) and resets the cooling tower VFD fan setpoint to $T_{\text{CWST,sp}} = \text{clamp}(T_{\text{WB}} + \text{Approach},\; 60\text{ °F},\; 85\text{ °F})$, where `Approach` is typically `5 to 7 °F` (`2.8 to 3.9 °C`), respecting the chiller's minimum condenser water entering temperature limit ([York OptiView](../product/york-optiview.html)).

## Heating Hot Water (`HHW`) & Condensing Boiler Control

In heating hot water plants serving VAV reheat coils, perimeter fin-tube radiation, and AHU preheat coils:

1. **Condensing vs. Non-Condensing Flue-Gas Dewpoint (`130 °F` Threshold)**: Natural gas combustion produces water vapor in the flue gas with a dewpoint around `130–135 °F` (`54–57 °C`).
   - **High-Efficiency Condensing Boilers** (`316L` stainless steel or cast aluminum-silicon heat exchangers) achieve **`92–98%` thermal efficiency** only when the **entering return water temperature (`HHWR`) is below `130 °F`** (`< 110 °F` ideal), condensing the latent heat of vaporization from the exhaust flue gas.
   - **Legacy Non-Condensing Cast-Iron / Steel Boilers** must be protected by a primary/secondary blend pump or 3-way mixing valve so return water *never* drops below `140 °F` (`60 °C`), which would otherwise cause acidic flue-gas condensation and rapid heat-exchanger corrosion.
2. **Loop Differential Pressure ($\Delta P$) Control**: VFD hot water pumps modulate to maintain a reset differential pressure setpoint (`4 to 15 psi`) measured by a wet-to-wet differential pressure sensor ([Belimo 22PDP-18](../product/belimo-22pdp-18.html)) at the remote index circuit (see [static pressure reset](static-pressure-reset.html)).
3. **Outdoor Air + Valve-Request Hot Water Reset Schedule**: To keep condensing boilers in deep condensing mode across most of the heating season, the BAS resets the hot water supply temperature (`HHWST`) linearly with outdoor air temperature (`OAT`), trimmed by terminal hot water valve positions:
   - At design winter `OAT <= 0 °F` (`-17.8 °C`): $\text{HHWST}_{\text{sp}} = 160\text{ to }180\text{ °F}$ (`71 to 82 °C`).
   - At mild `OAT >= 60 °F` (`15.6 °C`): $\text{HHWST}_{\text{sp}} = 105\text{ to }120\text{ °F}$ (`41 to 49 °C`).
4. **Parallel Modulation for Condensing Boilers**: Because condensing boiler efficiency *increases* as firing rate *decreases* (larger heat-exchanger surface area per Btu/hr at low fire), multiple condensing boilers are staged into **parallel unison modulation** (`2` or `3` boilers firing together at `30–40%` modulation rather than `1` boiler pinned at `100%` fire) once total plant load exceeds the minimum turndown threshold.
