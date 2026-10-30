---
id: heat-exchangers
type: concept
title: "Heat exchangers: plate-and-frame, shell-and-tube, LMTD, and BAS control sequences"
summary: "Plate-and-frame, shell-and-tube, and brazed-plate heat exchangers: log mean temperature difference (LMTD), approach temperature, NTU effectiveness, waterside economizers, district energy isolation, and fouling monitoring."
review: verified
related:
  - absorption-chillers
  - chilled-beams
  - chiller-part-load-performance
  - control-strategies
  - control-valves
  - cooling-towers
  - differential-pressure-sensors
  - discharge-air-temperature-reset
  - economizer-control
  - efficiency-metrics
  - electric-chillers
  - energy-conservation-strategies
  - gages-and-local-instrumentation
  - geothermal-ground-source
  - heat-pumps
  - hydronic-system-control
  - io-points
  - switches-and-safeties
  - temperature-sensors
  - variable-frequency-drives
  - york-optiview
sources:
  - https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
  - https://www.energy.gov/sites/prod/files/2014/05/f16/steam14_chillers.pdf
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Installation%20Operation%20and%20Maintenance/BAS-SVX065F-EN_05132023.pdf
---

## Overview and Thermal Engineering Fundamentals

A **heat exchanger (HX)** transfers thermal energy between two isolated fluid streams without allowing the fluids to mix. In commercial HVAC and district energy systems, heat exchangers isolate different fluid chemistry (such as separating an open cooling tower water loop from a clean closed building chilled water loop), isolate high static head pressures in high-rise buildings, or convert high-pressure steam into low-pressure heating hot water.

```
                    Counter-Flow Plate Heat Exchanger
                    
      Hot In (Th,in) ───────────────────────────┐
                                                │
                     ┌──────────────────────────┴──────────────────────────┐
                     │ ┌───┐   ┌───┐   ┌───┐   ┌───┐   ┌───┐   ┌───┐   ┌───┐│
  Cold Out (Tc,out) ◄┼─┤   ├───┤   ├───┤   ├───┤   ├───┤   ├───┤   ├───┤   ├┼─◄ Cold In (Tc,in)
                     │ │ H │ C │ H │ C │ H │ C │ H │ C │ H │ C │ H │ C │ H ││
                     │ └───┘   └───┘   └───┘   └───┘   └───┘   └───┘   └───┘│
                     └──────────────────────────┬──────────────────────────┘
                                                │
                                                ▼
                                         Hot Out (Th,out)
```

### Governing Heat Transfer Equations

Thermal heat transfer across a heat exchanger is governed by the heat capacity rates of the two fluids and the physical conductance of the heat exchange surface:

$$Q = \dot{m}_h c_{p,h} (T_{h,\text{in}} - T_{h,\text{out}}) = \dot{m}_c c_{p,c} (T_{c,\text{out}} - T_{c,\text{in}})$$

For pure water systems:

$$Q\text{ (Btu/hr)} = 500 \times \text{GPM}_h \times (T_{h,\text{in}} - T_{h,\text{out}}) = 500 \times \text{GPM}_c \times (T_{c,\text{out}} - T_{c,\text{in}})$$

The heat transfer capacity through the exchanger wall is:

$$Q = U \times A \times \text{LMTD} \times F$$

where:
- $U$ = Overall heat transfer coefficient ($\text{Btu}/(\text{hr}\cdot\text{ft}^2\cdot^\circ\text{F})$ or $\text{W}/(\text{m}^2\cdot\text{K})$).
- $A$ = Total heat transfer surface area ($\text{ft}^2$ or $\text{m}^2$).
- $\text{LMTD}$ = Logarithmic Mean Temperature Difference ($^\circ\text{F}$ or $\text{K}$).
- $F$ = Correction factor ($F = 1.0$ for true counter-current flow; $F < 1.0$ for cross-flow or multi-pass configurations).

### Log Mean Temperature Difference (LMTD)

In a pure counter-flow heat exchanger, the driving temperature difference varies continuously along the length of the plates or tubes. The true effective driving force is the **Log Mean Temperature Difference (LMTD)**:

$$\text{LMTD} = \frac{\Delta T_1 - \Delta T_2}{\ln\left(\frac{\Delta T_1}{\Delta T_2}\right)}$$

where for counter-current flow:
- $\Delta T_1 = T_{h,\text{in}} - T_{c,\text{out}}$ (temperature difference at the hot fluid inlet end)
- $\Delta T_2 = T_{h,\text{out}} - T_{c,\text{in}}$ (temperature difference at the cold fluid inlet end)

If $\Delta T_1 = \Delta T_2$, then $\text{LMTD} = \Delta T_1 = \Delta T_2$.

### Approach Temperature

In heat exchanger sizing, **approach** is the temperature difference between the exiting process fluid and the entering source fluid:
- For cooling service (e.g., waterside economizer): $\text{Approach} = T_{c,\text{out}} - T_{h,\text{in}}$.
- For heating service (e.g., steam converter): $\text{Approach} = T_{h,\text{in}} - T_{c,\text{out}}$.

A smaller approach indicates higher thermal performance but requires exponentially larger plate surface area ($A$) and higher capital cost. In waterside economizers, standard design approach is **`2.0 °F to 4.0 °F` (`1.1 °C` to `2.2 °C`)**.

### Heat Exchanger Effectiveness ($\varepsilon$) and NTU

The **Number of Transfer Units (NTU)** is a dimensionless measure of heat transfer size:

$$\text{NTU} = \frac{U \times A}{C_{\min}}$$

where $C_{\min} = \min(\dot{m}_h c_{p,h},\; \dot{m}_c c_{p,c})$ is the smaller of the two fluid heat capacity rates.

The thermal **effectiveness ($\varepsilon$)** is the ratio of actual heat transferred to the maximum thermodynamically possible heat transfer:

$$\varepsilon = \frac{Q}{Q_{\max}} = \frac{C_h (T_{h,\text{in}} - T_{h,\text{out}})}{C_{\min} (T_{h,\text{in}} - T_{c,\text{in}})} = \frac{C_c (T_{c,\text{out}} - T_{c,\text{in}})}{C_{\min} (T_{h,\text{in}} - T_{c,\text{in}})}$$

For a counter-flow heat exchanger with equal heat capacity rates ($C_r = C_{\min}/C_{\max} = 1.0$):

$$\varepsilon = \frac{\text{NTU}}{1 + \text{NTU}}$$

---

## Mechanical Types of HVAC Heat Exchangers

### 1. Gasketed Plate-and-Frame Heat Exchangers (PHE)

Gasketed plate heat exchangers consist of a pack of corrugated, stamped stainless-steel (`304` or `316L`) or titanium plates compressed between a fixed head and movable follower frame with tie bolts:
- **Chevron Corrugations**: Corrugated ridges induce high fluid turbulence even at low Reynolds numbers ($\text{Re} < 50$), yielding extremely high overall heat transfer coefficients ($U = \mathbf{600\text{ to }1{,}200\text{ Btu}/(\text{hr}\cdot\text{ft}^2\cdot^\circ\text{F})}$ vs. `100 to 300` for shell-and-tube).
- **Close Approach**: Capable of economically achieving approaches as tight as **`1.5 °F to 3.0 °F` (`0.8 °C` to `1.7 °C`)** with counter-current flow.
- **Maintainability**: Frames can be unbolted in the mechanical room for manual plate cleaning, inspection, or future expansion by adding additional plates.
- **Limitations**: Elastomeric gaskets (NBR, EPDM, Viton) limit operating pressure to `150–300 psig` (`1.0–2.0 MPa`) and operating temperature to `< 300 °F` (`150 °C`).

### 2. Brazed-Plate Heat Exchangers (BPHE)

Brazed-plate heat exchangers eliminate gaskets and external frame bolts by permanently vacuum-brazing corrugated stainless steel plates with copper or nickel filler:
- **High Pressure & Compactness**: Rated for pressures up to `450–650 psig` (`3.1–4.5 MPa`) and temperatures up to `400 °F` (`204 °C`).
- **Applications**: Standard in water-source heat pumps, refrigerant evaporators/condensers, cleanroom sub-cooling loops, and domestic hot water generation.
- **Limitations**: Cannot be mechanically disassembled; cleaning requires chemical Clean-In-Place (CIP) circulation or unit replacement.

### 3. Shell-and-Tube Heat Exchangers

Consist of a cylindrical pressure vessel (shell) containing a bundle of parallel tubes (U-tube or straight-tube with floating tube sheet):
- **High-Pressure Steam & Thermal Shock**: Ideal for high-pressure campus district steam (`15–125 psig`) to heating hot water converters where gasketed plates would blow out under steam hammer.
- **Centrifugal Chiller Barrels**: Standard geometry for centrifugal chiller evaporators and condensers ([York OptiView](../product/york-optiview.html)), where refrigerant boils or condenses on the shell side while water circulates through internally enhanced copper tubes.
- **Lower Heat Transfer Density**: Overall $U$-values are significantly lower (`150 to 350 Btu/(hr·ft²·°F)`), requiring larger footprints and mechanical clearance for tube bundle pulling.

---

## Primary Applications in Building Automation

### 1. Waterside Economizers ("Free-Cooling Plates")

A waterside economizer uses cold [cooling tower](cooling-towers.html) condenser water to cool the building chilled water loop via a gasketed plate-and-frame heat exchanger, bypassing or reducing runtime on electric chiller compressors ([economizer control](economizer-control.html)):

- **Non-Integrated (Full Free-Cooling)**: When ambient wet-bulb drops below `38–42 °F` (`3.3–5.6 °C`), the cooling tower generates `42–44 °F` condenser water. Across a plate with a `3 °F` approach, the heat exchanger produces `45–47 °F` chilled water, allowing **all chillers to be shut down completely**.
- **Integrated (Partial Free-Cooling / Pre-Cooling)**: When wet-bulb is between `42 °F` and `55 °F`, the heat exchanger pre-cools returning chilled water ($58\text{ °F} \to 50\text{ °F}$) before it enters the operating chiller evaporator barrel. The chiller only provides the final trim lift ($50\text{ °F} \to 44\text{ °F}$), drastically reducing compressor lift and electrical power.

```
                  Waterside Economizer Flow Configuration
                  
  From Cooling Tower (42°F CWS) ────────┐
                                        │
                         ┌──────────────┴──────────────┐
                         │ Gasketed Plate-and-Frame    │
                         │ Heat Exchanger (Free-Cool)  │
                         └──────────────┬──────────────┘
                                        │
  To Cooling Tower (52°F CWR) ◄─────────┘
  ════════════════════════════════════════════════════════════════
  To Building (45°F CHWS) ◄─────────────┐
                                        │
                         ┌──────────────┴──────────────┐
                         │ Heat Exchanger Cold Side    │
                         │ (ΔT_approach = 3°F)         │
                         └──────────────┬──────────────┘
                                        │
  From Building (55°F CHWR) ────────────┘
```

### 2. High-Rise Hydronic Pressure Interceptors (Static Head Isolation)

In skyscrapers (40+ stories), static head water pressure increases by **`0.433 psi per foot of height`** (`9.8 kPa/m`):
- A 60-story building (`800 ft.` / `244 m`) generates **`346 psi` of static pressure** at the ground-level central chiller plant.
- Sourcing valves, coils, and fittings rated for `400+ psi` throughout the building is prohibitively expensive.
- **Pressure Interceptor Solution**: A plate-and-frame heat exchanger is installed on an intermediate mechanical floor (e.g., Level 30). The ground-floor chillers pump to the primary side of the heat exchanger, while a secondary pump on Level 30 circulates water to upper floors. This limits operating pressures on both sides of the plate to standard `150 psi` (`1.0 MPa`) piping classes.

### 3. District Energy Stations (Campus Steam / HTHW to HHW)

Campus central distribution networks pipe High-Temperature Hot Water (`HTHW`, `250–350 °F`) or steam (`60–125 psig`) underground:
- Building mechanical rooms utilize shell-and-tube or brazed-plate heat exchangers to convert campus steam/HTHW into low-temperature building heating water (`120–180 °F`).
- DDC field controllers modulate high-pressure steam globe valves on the primary inlet to maintain secondary leaving water temperature setpoint ([discharge air temperature reset](discharge-air-temperature-reset.html)).

---

## DDC Control Sequences and Instrumentation

### 1. Temperature Control and Modulating Valve Selection

- **Primary Control Valve**: A modulating 2-way equal-percentage [control valve](control-valves.html) is installed on the **primary return outlet** (or steam supply inlet). Locating water valves on the return side exposes the valve body and actuator to lower temperatures, extending packing seal life.
- **Piping Orientation**: Piping must maintain **strict counter-current flow**. Accidentally piping a plate heat exchanger in parallel-flow cuts thermal capacity by `30% to 50%` and prevents the secondary leaving temperature from ever crossing the primary leaving temperature.
- **Cascade Secondary Reset**: The leaving secondary water temperature setpoint ($T_{c,\text{out}}$) is reset dynamically based on outdoor air temperature or zone demand requests ([control strategies](control-strategies.html)).

### 2. Differential Pressure and Fouling Monitoring

Because plate heat exchangers feature narrow plate flow channels (`2.0 to 4.0 mm` gap), they are highly susceptible to scaling, biological fouling, and particulate clogging from open cooling tower loops:

- **Four-Point Temperature & Differential Pressure Arrays**: The BAS must monitor four temperature sensors ($T_{h,\text{in}}, T_{h,\text{out}}, T_{c,\text{in}}, T_{c,\text{out}}$) and two [differential pressure sensors](differential-pressure-sensors.html) ($\Delta P_{\text{primary}}$ across plates, $\Delta P_{\text{secondary}}$ across plates).
- **Fouling Diagnostics**:
  - As plates foul, the overall heat transfer coefficient ($U$) degrades, causing the **approach temperature to increase** under design flow conditions.
  - Simultaneously, plate channel clogging causes **$\Delta P$ across the plate pack to increase** above baseline commissioning values.
  - When $\Delta P$ increases by `> 50%` above design, the BAS triggers an automated **Clean-In-Place (CIP) Maintenance Alarm**.

### 3. Freeze Protection on Steam/Water Converters

During sudden shutdown of building heating pumps in winter:
- If cold secondary water remains trapped in a plate exchanger while steam continues to enter, thermal shock can buckle plates.
- Conversely, if primary steam cuts off while freezing outdoor air passes across an economizer plate, water can freeze instantly and rupture plate welds.
- The field controller hardwires a low-temperature cutout ([switches and safeties](switches-and-safeties.html)) and closes the primary steam valve immediately upon loss of secondary pump flow.

See [Hydronic system control](hydronic-system-control.html) for plant pumping topologies, [Cooling towers](cooling-towers.html) for condenser water optimization, and [Control valves](control-valves.html) for valve sizing equations.
