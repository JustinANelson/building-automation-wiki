---
id: cooling-towers
type: concept
title: "Cooling towers: thermodynamics, range and approach, fan control, and condenser water optimization"
summary: "Cooling tower heat rejection thermodynamics, open vs. closed circuit towers, range vs. approach, dynamic wet-bulb reset sequences, fan staging with VFDs, bypass valve control, and winter freeze protection."
review: verified
related:
  - absorption-chillers
  - chiller-part-load-performance
  - control-strategies
  - control-valves
  - differential-pressure-sensors
  - economizer-control
  - efficiency-metrics
  - electric-chillers
  - energy-conservation-strategies
  - gages-and-local-instrumentation
  - heat-exchangers
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
  - https://www.ahrinet.org/system/files/2023-06/AHRI%20Standard%20550-590%202020%20%28I-P%29%20with%20Addendum%201.pdf
---

## Overview and Thermodynamic Heat Rejection

A **cooling tower** is a specialized evaporative heat rejection device that extracts waste heat from water-cooled chiller condensers, water-source heat pumps, or industrial processes and discharges it into the ambient atmosphere.

In a central plant, an [electric chiller](electric-chillers.html) absorbs heat from the building chilled water loop ($Q_{\text{evap}}$) and adds compressor motor electrical work ($W_{\text{comp}}$). The cooling tower must reject the sum of both:

$$Q_{\text{tower}} = Q_{\text{evap}} + W_{\text{comp}} = Q_{\text{evap}} \left(1 + \frac{1}{\text{COP}}\right)$$

For a standard electric centrifugal chiller operating at `0.60 kW/ton` (`COP ≈ 5.85`), the heat rejected to the tower is approximately **`15,000 Btu/hr per ton of refrigeration`** (composed of `12,000 Btu/hr` of cooling effect plus `~3,000 Btu/hr` of heat of compression). For steam or gas-fired [absorption chillers](absorption-chillers.html), heat rejection is significantly higher—typically `24,000 to 36,000 Btu/hr per ton`—demanding much larger cooling towers and condenser water flow rates.

```
                  Warm Condenser Water from Chiller (95°F)
                                  │
                                  ▼
                     ┌──────────────────────────┐
                     │ Water Distribution Basin │
                     │ & Spray Nozzle Grid      │
                     └────────────┬─────────────┘
                                  │ Spray Droplets
    Air Inlet  ═════════>  ┌──────┴──────┐  <═════════  Air Inlet
   (Ambient Twb = 78°F)   │ PVC Fill    │             (Ambient Twb = 78°F)
                          │ Wet Packing │
    Air Exhaust <════════  └──────┬──────┘  ════════=>  Air Exhaust
   (Near Saturation)              │ Cooled Water (85°F)
                                  ▼
                     ┌──────────────────────────┐
                     │ Cold Water Collection    │
                     │ Basin (Sump)             │
                     └────────────┬─────────────┘
                                  │
                                  ▼
                  Cool Condenser Water to Chiller (85°F)
```

### Evaporative Cooling vs. Sensible Heat Transfer

Unlike dry air-cooled condensers whose heat transfer is limited by the outdoor dry-bulb temperature ($T_{\text{db}}$), a cooling tower operates primarily via **latent heat of vaporization**:
- Approximately **`80%` of the total heat rejection** occurs through the evaporation of a small fraction (typically `1–2%`) of the circulating water into the airflow.
- The latent heat of vaporization of water is approximately **`1,000 Btu per pound`** (`2,326 kJ/kg`) of water evaporated.
- The remaining `~20%` occurs via sensible heat transfer (convective heating of the air stream).
- Consequently, the **theoretical lowest water temperature achievable by a cooling tower is the ambient outdoor wet-bulb temperature ($T_{\text{wb}}$)**, which is typically `10 °F to 30 °F` lower than the dry-bulb temperature during summer peak cooling conditions.

---

## Cooling Tower Operating Metrics: Range and Approach

The thermal performance of a cooling tower is characterized by two fundamental parameters defined by the Cooling Technology Institute (CTI STD-201):

### 1. Cooling Tower Range

**Range** is the temperature drop of the condenser water as it passes through the cooling tower:

$$\text{Range} = T_{\text{CWR}} - T_{\text{CWS}}$$

where:
- $T_{\text{CWR}}$ = Entering Condenser Water Temperature (hot return water from chiller condenser)
- $T_{\text{CWS}}$ = Leaving Condenser Water Temperature (cold supply water leaving the basin to chiller)

Range is determined solely by the heat load imposed by the chiller and the condenser water circulation rate ($\text{GPM}_{\text{CW}}$):

$$\text{Range (°F)} = \frac{Q_{\text{tower}}\text{ (Btu/hr)}}{500 \times \text{GPM}_{\text{CW}}}$$

### 2. Cooling Tower Approach

**Approach** is the temperature difference between the cold water leaving the tower basin and the ambient wet-bulb temperature:

$$\text{Approach} = T_{\text{CWS}} - T_{\text{wb}}$$

Approach reflects the physical size, heat-transfer surface area (fill density), and airflow of the tower. An infinitely large cooling tower would have an approach of `0 °F`. Practical, economically sized cooling towers achieve an approach between **`5 °F and 10 °F` (`2.8 °C` to `5.6 °C`)** at design conditions.

### Standard Rating Conditions

Under standard CTI STD-201 and AHRI Standard 550/590 conditions, nominal commercial cooling tower capacities are rated at:
- **Entering Water Temperature ($T_{\text{CWR}}$)**: `95.0 °F` (`35.0 °C`)
- **Leaving Water Temperature ($T_{\text{CWS}}$)**: `85.0 °F` (`29.4 °C`)
- **Entering Air Wet-Bulb ($T_{\text{wb}}$)**: `78.0 °F` (`25.6 °C`)
- **Nominal Flow Rate**: **`3.0 GPM per nominal ton`** of refrigeration (`0.054 L/s·kW`)
- Yields a standard **`10.0 °F` Range** and **`7.0 °F` Approach**.

---

## Mechanical Configurations: Open vs. Closed Circuit

| Parameter | Open-Circuit Cooling Tower | Closed-Circuit Fluid Cooler |
| :--- | :--- | :--- |
| **Hydronic Circuitry** | Open loop: condenser water is pumped directly over the fill packing and exposed to the ambient atmosphere | Closed loop: clean fluid (water or glycol) circulates inside sealed copper or stainless steel tube bundles |
| **Secondary Water** | None: process water is the evaporative water | Continuous recirculating spray pump cascades water over the exterior of the tube coil |
| **Waterside Economizer Compatibility** | Requires an intermediate stainless steel [plate-and-frame heat exchanger](heat-exchangers.html) to prevent open-loop contaminants from fouling building coils | Directly connects to the building chilled water loop without an intermediate plate heat exchanger |
| **Water Quality & Maintenance** | Higher fouling, scale, and biological accumulation; requires heavy chemical water treatment and automated blowdown | Clean internal fluid circuit protects chillers and building coils; external spray loop requires chemical treatment |
| **Thermal Efficiency & Size** | Highest efficiency; smaller footprint for equivalent heat rejection | Larger footprint and higher fan/pump horsepower due to internal coil conductive resistance |
| **Pumping Head** | Lower internal pressure drop; static lift from basin to spray header | Higher internal pressure drop through coil bundle |

### Airflow Draft Topologies

1. **Induced Draft**: Axial fans mounted at the top of the tower pull air upward through the fill pack against or across falling water droplets. Produces high discharge air velocity, preventing moist discharge plume recirculation into the intake louvers. Standard on large campus plants.
2. **Forced Draft**: Centrifugal blowers mounted at the base push air into the tower plenum. Operates with dry incoming air over the fan blades, facilitating quiet indoor installations or ducted configurations.
3. **Crossflow**: Air travels horizontally through the fill packing while water drops vertically. Features gravity-fed distribution basins, easy visual inspection of nozzles during operation, and lower fan static pressure.
4. **Counterflow**: Air travels vertically upward directly opposing falling water droplets. Maximizes thermal driving force, resulting in a smaller footprint for the same heat rejection capacity.

---

## DDC Sequences and Condenser Water Optimization

Modern building automation systems optimize cooling tower operation to minimize total plant energy (chiller compressor kW + cooling tower fan kW + condenser pump kW).

### 1. Dynamic Wet-Bulb Condenser Water Supply Reset

Chiller compressor efficiency improves significantly as the entering condenser water temperature drops. On centrifugal chillers ([York OptiView](../product/york-optiview.html)), every **`1.0 °F` drop in entering condenser water temperature reduces compressor power by `1.5% to 2.5%`** ([chiller part-load performance](chiller-part-load-performance.html)).

However, running cooling tower fans at full speed to drive water temperature down consumes fan power that can exceed compressor energy savings. A BAS controller ([Trane Tracer SC+](../product/tracer-sc-plus.html), [Siemens PXC](../product/pxc7.html)) implements a dynamic wet-bulb reset:

$$T_{\text{CWS,setpoint}} = \text{clamp}(T_{\text{wb}} + \text{Approach}_{\text{design}},\; T_{\text{CWS,min}},\; T_{\text{CWS,max}})$$

where:
- $T_{\text{wb}}$ is the outdoor wet-bulb temperature calculated from outdoor dry-bulb and relative humidity sensors ([humidity sensors](humidity-sensors.html)).
- $\text{Approach}_{\text{design}}$ is typically `5.0 °F to 7.0 °F` (`2.8 °C` to `3.9 °C`).
- $T_{\text{CWS,max}}$ is the high clamp, typically `85.0 °F` (`29.4 °C`).
- $T_{\text{CWS,min}}$ is the chiller manufacturer's **minimum entering condenser water temperature limit**, typically **`55.0 °F to 65.0 °F` (`12.8 °C` to `18.3 °C`)**. Operating below this threshold can cause low head pressure, insufficient oil differential pressure in semi-hermetic compressors, and expansion valve starvation.

### 2. Multi-Cell Fan Speed Modulation and Staging (The Cube Law)

Cooling tower axial fans obey the **fan affinity laws**, where shaft power varies with the cube of fan speed ($P \propto \text{RPM}^3$):

$$\frac{P_1}{P_2} = \left(\frac{\text{RPM}_1}{\text{RPM}_2}\right)^3$$

Operating a fan at `50%` speed requires only $(0.50)^3 = \mathbf{12.5\%}$ of full-load power.

**Optimal Multi-Cell Staging Rule**:
Rather than running one cooling tower cell at `100%` fan speed while keeping a second identical cell off (`100%` power total), the plant controller distributes condenser water across both cells and runs both fans simultaneously at `50%` speed:

$$P_{\text{total}} = 2 \times 12.5\% = \mathbf{25.0\%}\text{ of full-load power}$$

Operating two cells in parallel at half speed delivers identical heat rejection while consuming **`75%` less fan electrical energy**.

### Resonant Frequency Skip Bands

Gear-drive and direct-drive cooling tower fan assemblies exhibit mechanical resonant frequencies. When commissioning VFDs on cooling towers ([variable frequency drives](variable-frequency-drives.html)), the drive must be programmed with **skip frequency bands** (typically `18–22 Hz` and `38–42 Hz` depending on manufacturer vibration tests) to prevent structural tower resonance, blade flutter, and gear reducer failure.

### 3. Modulating Condenser Water Bypass Valve Control

During cold weather startups or low-load operation, ambient wet-bulb temperatures can drive basin water below safe chiller operating limits. A 3-way modulating bypass valve (or 2-way butterfly valve across supply and return headers) blends hot condenser water return ($T_{\text{CWR}}$) directly into the cold supply line ($T_{\text{CWS}}$):
- When $T_{\text{CWS}} < T_{\text{CWS,setpoint}}$, the bypass valve modulates open to divert water directly back to the chiller condenser, bypassing the cooling tower spray distribution nozzles.
- Once the bypass valve is `100%` closed to bypass, the cooling tower fans are enabled and modulated via their PID speed loop.

```
                     Tower Bypass Valve Control Architecture
                     
   From Chiller Condenser (Hot Return) ──────────────────────┐
                                                             │
                              ┌──────────────────────────────┴──────────────┐
                              ▼                                             ▼
                 ┌──────────────────────────┐                  ┌──────────────────────────┐
                 │ Cooling Tower Cells      │                  │ 3-Way Modulating         │
                 │ (Spray Nozzles & Fill)   │                  │ Bypass Valve             │
                 └────────────┬─────────────┘                  └────────────┬─────────────┘
                              │                                             │
                              ▼                                             │
                 ┌──────────────────────────┐                               │
                 │ Cold Water Basin (Sump)  │                               │
                 └────────────┬─────────────┘                               │
                              │                                             │
                              ├─────────────────────────────────────────────┘
                              ▼
   To Chiller Condenser (Cold Supply Header, Tcws)
```

---

## Cold Weather Operation and Freeze Protection

In sub-freezing climates, operating cooling towers for year-round data center cooling or waterside economizers requires strict freeze prevention:

1. **Basin Sump Electric Immersion Heaters**: Low-watt-density electric heating elements (`10–15 kW` per cell) installed in the cold water collection basin maintain water above `40 °F` (`4.4 °C`) when the plant is idle. Interlocked with a low-water level float switch to prevent dry-firing the heater elements.
2. **Reverse Fan De-Icing Cycle**: When ice accumulates on air intake louvers during freezing conditions, the DDC controller commands the tower VFD into **reverse rotation at low speed (`~25–30%` RPM) for 15 to 30 minutes**. Warm, saturated air from the tower interior is forced outward through the louvers, melting ice dams.
3. **Dry Sump / Remote Sump Piping**: In extreme northern climates, outdoor basin water is drained by gravity continuously into an indoor collection tank located in a heated mechanical room. The outdoor cooling tower basin remains completely dry when the system stops, eliminating freeze risks.

---

## Water Treatment, Blowdown, and Cycles of Concentration

Evaporation removes pure water vapor ($H_2O$), leaving dissolved mineral solids (calcium, magnesium, silica, chlorides) behind in the recirculating basin water. Without blowdown, dissolved solids precipitate onto chiller condenser tubes, causing scale accumulation that degrades heat transfer efficiency (`0.001 in.` of scale increases chiller power consumption by `~10%`).

### Cycles of Concentration ($CoC$)

**Cycles of concentration** measures the accumulation of dissolved solids in the basin relative to fresh municipal makeup water:

$$CoC = \frac{\text{Conductivity}_{\text{basin}}}{\text{Conductivity}_{\text{makeup}}} = \frac{\text{Chlorides}_{\text{basin}}}{\text{Chlorides}_{\text{makeup}}}$$

Typical target $CoC$ is **`4.0 to 6.0`**. Running at low cycles ($CoC < 3.0$) wastes large volumes of treated water and chemicals; running at high cycles ($CoC > 8.0$) causes scaling and severe corrosion.

### Automated Blowdown and Water Treatment Controls

1. **Conductivity Controller**: A toroidal or contact-type electrical conductivity sensor continuously monitors basin water. When conductivity exceeds setpoint (e.g., `1,800 to 2,200 µS/cm`), the controller opens a motorized blowdown drain valve to dump concentrated water to sewer.
2. **Automated Makeup Water**: An ultrasonic or conductivity probe level controller senses basin water level drop, opening a solenoid valve to supply fresh city water.
3. **Chemical Biocide Dosing**: Alternating oxidizing biocides (chlorine/bromine) and non-oxidizing biocides are automatically injected to control microbiological slime and **Legionella pneumophila** bacteria in strict accordance with **ASHRAE Standard 188** and **Guideline 12**.
4. **Water Metering (Evaporation Credits)**: Dedicated pulse water meters on the makeup water pipe and blowdown drain line track water consumption. The difference ($Q_{\text{evap}} = Q_{\text{makeup}} - Q_{\text{blowdown}}$) is submitted to municipal water utilities to claim sewer fee rebates for evaporated water.

See [Hydronic system control](hydronic-system-control.html) for central chiller plant interlocks, [Heat exchangers](heat-exchangers.html) for waterside free-cooling plate integration, and [Switches and safeties](switches-and-safeties.html) for condenser water flow switch protection.
