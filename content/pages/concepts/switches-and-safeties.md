---
id: switches-and-safeties
type: concept
title: "HVAC/R safety devices, cutouts, and proof-of-flow switches"
summary: "Low-temperature cutouts (freeze stats), high/low refrigerant pressure switches, differential oil pressure switches, hydronic and air proof-of-flow switches, high-temperature cutouts (firestats and electric heater limits), and high-humidity safety cutouts."
review: verified
images:
  - path: images/concepts/switches-and-safeties.svg
    alt: "Technical diagram (drawn illustration) of an AHU hardwired safety interlock chain (Freeze Stat, High-Static Cutout, Duct Smoke Detector) wired to the supply fan starter and BAS Digital Inputs (DI)"
    source: "Own work (BASWiki technical diagram based on standard AHU safety interlock practices and York Form 160.75-PW4)"
    license: CC0-1.0
related:
  - airflow-measurement
  - chilled-beams
  - condensation-detectors
  - control-strategies
  - control-valves
  - damper-actuators
  - dampers-and-louvers
  - differential-pressure-sensors
  - discharge-air-temperature-reset
  - economizer-control
  - gages-and-local-instrumentation
  - heat-pumps
  - humidity-sensors
  - hydronic-system-control
  - io-points
  - static-pressure-reset
  - symbio-700
  - temperature-sensors
  - vav-control
  - york-optiview
sources:
  - https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/split-systems/odyssey-6-to-25-tons/ACC-APG001A-EN_06102020.pdf
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Installation%20Operation%20and%20Maintenance/BAS-SVX090C-EN_06302026.pdf
  - https://sid.siemens.com/v/u/A6V10445888
---

## Overview and Hardwired Interlock Architecture

In building automation systems (BAS) and commercial HVAC/R equipment, **life-safety and equipment-protection cutouts must never depend solely on software, microprocessors, or network communications**. If a direct digital control (DDC) field controller crashes, loses power, hangs during a firmware update, or experiences an analog sensor failure, mechanical safety devices must physically disconnect electrical power from the prime movers (fans, pumps, compressors, and electric heating elements).

Standard practice requires a **dual-tier safety architecture**:
1. **Hardwired Series Safety Chain ("Safety String")**: Critical safety switch contacts are wired in series directly into the `24 VAC` or `120 VAC` control permissive circuit of the variable frequency drive (VFD Safe Torque Off / Run Enable), magnetic motor starter coil, burner safety shutoff valve (SSOV), or chiller microprocessor safety circuit (such as the [York OptiView](../product/york-optiview.html) `TB4` interlock terminals or [Trane Symbio 700](../product/symbio-700.html) `J18` shutdown input).
2. **Discrete BAS Status Monitoring**: Each safety device is equipped with double-pole double-throw (`DPDT`) contacts or an isolated auxiliary relay. While Pole 1 interrupts the hardwired power circuit directly, Pole 2 supplies a dry-contact [**Digital Input (`DI`)**](io-points.html) to the field controller ([Siemens Desigo PXC7](../product/pxc7.html), [Trane Symbio 500](../product/symbio-500.html)). This enables the DDC system to identify the exact cause of a shutdown, sound emergency supervisory alarms, and execute coordinated secondary sequences (such as driving hydronic heating valves `100%` open and outdoor air dampers `0%` closed).

### Fail-Safe Normally Closed (`NC`) Topology

All standard safety devices use **Normally Closed (`NC`) contacts under healthy operating conditions**:
- When the monitored variable is within safe operational limits, the switch contacts are held mechanically closed, completing the circuit.
- If the monitored variable exceeds safe limits, the switch snaps open.
- If a field wire breaks, a terminal screw loosens, or field control power drops, the circuit opens automatically. The system fails to a safe, de-energized shutdown state. A system wired Normally Open (`NO`) would fail unprotected upon a broken conductor.

---

## Low-Temperature Cutout Switches ("Freeze Stats")

A **low-temperature cutout switch** (universally referred to in HVAC as a **freeze stat** or **freezestat**) protects water and steam coils from freezing and bursting during cold weather operation when handling outdoor air.

```
       Airflow Direction  =======>
 ┌─────────────────────────────────────────────────────────┐
 │               Air-Handling Unit (AHU)                   │
 │                                                         │
 │  ┌─────────┐   ┌─────────────────┐   ┌───────────────┐  │
 │  │ Mixed   │   │ Preheat /       │   │ Serpentine    │  │
 │  │ Air     │   │ Water Coil      │   │ Freeze Stat   │  │
 │  │ Section │   │                 │   │ Capillary     │  │
 │  │         │   │ ┌─────────────┐ │   │ ┌───┐ ┌───┐   │  │
 │  │ Outdoor │   │ │ Tube Bundle │ │   │ │   │ │   │   │  │
 │  │ + Ret   │==>│ │ (Water Flow)│ │==>│ │   │ │   │   │  │
 │  │ Air     │   │ └─────────────┘ │   │ └───┘ └───┘   │  │
 │  │         │   │                 │   │ (Coldest 1-ft)│  │
 │  └─────────┘   └─────────────────┘   └───────┬───────┘  │
 └──────────────────────────────────────────────┼──────────┘
                                                │ Capillary
                                        ┌───────┴───────┐
                                        │ Switch Body   │
                                        │ Manual Reset  │
                                        │ DPDT Contacts │
                                        └───────┬───────┘
                     ┌──────────────────────────┴──────────────────────────┐
                     │                                                     │
           Pole 1 (Hardwired NC)                                 Pole 2 (Dry Contact NC/NO)
                     │                                                     │
           ┌─────────┴─────────┐                                 ┌─────────┴─────────┐
           │ Supply Fan Starter│                                 │ BAS Digital Input │
           │ / VFD Run Permiss │                                 │ Freeze Stat Alarm │
           └───────────────────┘                                 └───────────────────┘
```

### Operating Principle & Physics

A freeze stat consists of a heavy-duty snap-acting switch body connected to an extended copper capillary tube (typically `20 ft.` / `6.1 m` long, with `10 ft.` / `3.0 m` versions for small fan coils):
- **Vapor-Charged Sensing Element**: The capillary is charged with a vaporizing refrigerant gas in equilibrium with liquid droplets. 
- **Coldest 1-Foot Response (Non-Averaging)**: Because vapor migrates toward the coldest region and condenses, the internal pressure throughout the entire capillary is governed strictly by the **lowest temperature anywhere along its length**. If **any 1-foot (`300 mm`) segment** drops below the setpoint, the local vapor condenses, dropping the internal pressure and collapsing the switch bellows to trip the contacts. The remaining `19 ft.` can be at `70 °F` (`21 °C`), but if cold air stratifies and cools a single 12-inch section below setpoint, the switch trips instantly.
- **Freeze Stat vs. Averaging Sensor**: An electronic [temperature sensor](temperature-sensors.html) averaging element outputs the arithmetic mean across its length. If `10%` of a coil face is exposed to freezing outdoor air at `20 °F` while `90%` receives warm return air at `70 °F`, an averaging sensor reads `65 °F` (`18.3 °C`) and takes no corrective action, allowing the coil tubes in that cold corner to freeze and rupture. A freeze stat detects the `20 °F` pocket immediately.

### Setpoint and Manual Reset

- **Standard Setpoint**: Factory calibrated and field adjusted between **`35 °F` and `38 °F` (`1.7 °C` to `3.3 °C`)**. A setpoint of `38 °F` provides safety margin above the freezing point of water (`32 °F` / `0 °C`) to account for sensor tolerance and coil thermal inertia.
- **Mandatory Manual Reset**: Freeze stats are fitted with a mechanical manual reset push-button on the housing. When tripped, the switch latches open mechanically and cannot re-close automatically when the coil warms up. A facilities technician must physically walk to the air handler, inspect the unit for frozen pipes or damper linkage failures, and press the reset button.

### Physical Installation Best Practices

- **Downstream Location**: Mounted immediately on the downstream (leaving air) face of the preheat hydronic coil or chilled water cooling coil.
- **Horizontal Serpentine Pattern**: The capillary must be woven across the entire face of the coil in a horizontal serpentine pattern. Best practice dictates approximately **1 linear foot of capillary per 1 square foot of coil face area** (`3 m` per `1 m²`).
- **Support Clips and Bend Radius**: Supported with dedicated nylon mounting clips fastened to the coil casing. Bends must maintain a minimum radius of **`1.0 in.` (`25 mm`)**; kinking or pinching the copper tube restricts vapor migration and destroys the coldest-point sensing capability.
- **Vibration & Conduction Isolation**: The capillary must never contact sharp sheet-metal edges or rest directly against hot or cold hydronic headers, which would cause false readings through metallic thermal conduction.
- **Drainage Pitch**: The capillary should be pitched slightly toward the bellows housing so liquid charge can drain properly according to manufacturer mounting orientation.

### Hardwired & BAS Coordinated Response on Freeze Trip

When the freeze stat trips, the hardwired and DDC systems execute simultaneous emergency actions:
1. **Supply and Return Fans De-energize**: Hardwired Pole 1 opens the run permissive circuit, instantly cutting power to fan motor starters and commanding VFDs to `0 Hz`.
2. **Outdoor Dampers Spring Closed**: Hardwired interlock or spring-return actuators drive the outdoor air damper to `0%` closed and open the return air damper to `100%` ([damper actuators](damper-actuators.html)).
3. **Heating Coil Valve Driven 100% Open**: The preheat / heating [control valve](control-valves.html) is driven or spring-returned fully open (`100%`) to flood the coil with hot water or steam.
4. **Coil Recirculating Pump Energized**: Any dedicated freeze-protection coil pump is commanded to run continuously to maintain hydronic velocity.
5. **Chilled Water Valve Modulated Open**: In mixed-air units, the chilled water valve is opened to `20–50%` to keep water moving and prevent ice formation from stagnant water pockets.
6. **BAS Priority Alarm Latched**: Pole 2 signals the BAS `DI`, triggering an audible/visual emergency alarm and locking out automatic unit restart until operator reset.

---

## Refrigerant Pressure Safety Switches

Direct-expansion (DX) refrigeration systems, variable refrigerant flow (VRF) units, rooftop units (RTUs), and central station chillers operate under high internal pressures. Mechanical pressure switches protect compressors and pressure vessels against catastrophic failure.

### High-Pressure Cutout Switch (HPCO)

The **high-pressure cutout switch** protects the refrigeration system from excessive discharge pressure that could rupture refrigerant lines, blow compressor head gaskets, or destroy scroll/screw compressor components.

- **Causes of High Head Pressure**:
  - Condenser fan motor failure or broken fan belt.
  - Clogged or fouled air-cooled condenser fins (dirt, cottonwood, leaves).
  - Water-cooled condenser loss of flow (cooling tower pump failure, fouled chiller tubes, closed service valve).
  - Non-condensable gases (atmospheric air or nitrogen) trapped in the refrigerant circuit.
  - Overcharging of refrigerant.
- **Operating Physics & Construction**: A heavy-duty stainless steel or phosphor-bronze bellows or diaphragm is connected via a capillary or flare fitting directly to the compressor discharge line upstream of any service shutoff valves. Discharge pressure acts against an internal range spring. When pressure exceeds the spring force, a toggle mechanism snaps an electrical microswitch open.
- **Codes & Manual Reset**: Under **UL 1995** and **UL 60335-2-40** (Standard for Heating and Cooling Equipment), high-pressure cutouts on commercial equipment must be **manual reset** (either a physical button on the switch body or an electronic lockout inside the unit controller requiring manual power cycling or software reset). Automatic cycling on a high-pressure cutout is strictly prohibited because repeated cycling destroys compressor motor windings and valves.
- **Typical Cutout Settings by Refrigerant**:
  - **R-410A**: Cutout at **`550 to 610 psig` (`3,792 to 4,205 kPa`)**.
  - **R-454B / R-32** (A2L refrigerants): Cutout at **`580 to 625 psig` (`3,999 to 4,309 kPa`)**.
  - **R-134a** (medium-pressure chillers): Cutout at **`220 to 250 psig` (`1,517 to 1,724 kPa`)**.
  - **R-22** (legacy): Cutout at **`380 to 425 psig` (`2,620 to 2,930 kPa`)**.

### Low-Pressure Cutout Switch (LPCO) & Loss-of-Charge Switch

The **low-pressure cutout switch** connects to the compressor suction line and monitors evaporating pressure:

- **Protective Functions**:
  - **Loss of Refrigerant Charge**: Detects catastrophic refrigerant leaks, shutting off the compressor before it runs dry of lubricant and burns up.
  - **Evaporator Freeze-Up Prevention**: If suction pressure drops below the saturation temperature of water (`32 °F` / `0 °C`), ice builds on the evaporator coil, insulating tubes, blocking airflow, and causing liquid refrigerant to flood back into the compressor.
  - **Atmospheric Air Infiltration**: On low-pressure chillers or systems operating in deep vacuum, prevents pulling moist outdoor air into the system if a leak develops, avoiding acid formation.
  - **Pump-Down Control**: In commercial walk-in coolers and chillers, the LPCO acts as an automatic cycling switch: a liquid line solenoid valve closes on temperature satisfied, the compressor evacuates the evaporator into the condenser, and the LPCO cuts off the compressor at a set cutout pressure.
- **Start-up Bypass Timer (Transient Override)**: When a compressor starts, suction pressure drops sharply for `15 to 45 seconds` until refrigerant boils and establishes stable mass flow. To prevent nuisance tripping on cold starts, controllers ([Trane Symbio 700](../product/symbio-700.html), [York SSE](../product/york-sse-controller.html)) implement an **ignition bypass timer (`30 to 120 seconds`)** that ignores the LPCO contact during initial startup.
- **Typical Setpoints (Comfort Cooling)**:
  - **R-410A**: Cutout at **`50 to 70 psig` (`345 to 483 kPa`)**, Cut-in at **`90 to 110 psig` (`621 to 758 kPa`)**.
  - **R-134a**: Cutout at **`15 to 25 psig` (`103 to 172 kPa`)**, Cut-in at **`35 to 45 psig` (`241 to 310 kPa`)**.

### Dual Pressure Controls

In unitary equipment, high-pressure and low-pressure mechanisms are frequently combined into a single enclosure (such as the **Johnson Controls Penn P70 / P170 Series** or **Danfoss KP15**):
- Features independent high-pressure and low-pressure bellows connected to discharge and suction ports.
- High side incorporates an external manual reset lever.
- Low side provides independent cut-in and differential adjustments with automatic reset.
- Common single-pole double-throw (`SPDT`) or isolated dual switch blocks simplify field wiring into the compressor control circuit.

### Differential Oil Pressure Switch (OPS)

On semi-hermetic reciprocating and large open/semi-hermetic screw compressors equipped with positive-displacement oil pumps, the compressor depends on forced oil lubrication for bearings, journals, and shaft seals.

- **Net Oil Pressure Equation**: Because the oil pump draws oil from the crankcase (which is under suction pressure), the switch must measure the true **net oil pressure**:
  $$\Delta P_{\text{net}} = P_{\text{oil pump discharge}} - P_{\text{crankcase / suction}}$$
- **Operating Mechanism**: Dual opposing bellows act on a balanced differential lever. Bellows 1 connects to the oil pump discharge; Bellows 2 connects to the compressor crankcase.
- **Time-Delay Relay (60–120 Seconds)**: Oil pressure cannot build until the compressor begins rotating. Differential oil switches (such as the **Penn P28 / P45** or electronic **Kriwan / Bitzer Delta-P**) incorporate an internal electro-thermal bimetal heater or solid-state electronic timer:
  - When the compressor contactor energizes, the switch heater circuit energizes simultaneously.
  - If $\Delta P_{\text{net}}$ rises above the cutout setting (typically **`8 to 12 psid` / `55 to 83 kPa`**) within the timing window, the differential switch opens the heater circuit, allowing continuous operation.
  - If $\Delta P_{\text{net}}$ fails to build within **`90 seconds`** (or drops below setpoint for longer than 90 seconds during operation), the bimetallic heater warps and snaps the control contacts open.
  - Requires **manual reset**; auto-restart after an oil failure is prohibited to prevent catastrophic bearing seizure.

---

## Flow Proving and Flow Safety Switches

Before any chiller compressor, boiler burner, electric duct heater, or hydronic heating/cooling coil is enabled, the control system must prove that water or air is actively moving across the heat exchange surfaces. Operating without flow results in ruptured evaporator tubes (freezing), boiler flash evaporation (steam explosions), or duct heater thermal destruction.

```
       Hydronic Pipe Flow ======>
 ┌────────────────────────────────────────────────────────┐
 │ Pipe Tee Assembly                                      │
 │                                                        │
 │        Microswitch / Housing                           │
 │        ┌─────────────────┐                             │
 │        │  SPDT Contacts  │                             │
 │        │  C  -  NC  - NO │                             │
 │        └────────┬────────┘                             │
 │                 │ Actuating Lever & Spring             │
 │        ═════════╪═════════ (Pipe Wall)                 │
 │                 │                                      │
 │            ┌────┴────┐                                 │
 │            │ Paddle  │ ====> Water Velocity Drag       │
 │            │ (316SS) │       Deflects Paddle Upward    │
 │            └─────────┘                                 │
 └────────────────────────────────────────────────────────┘
```

### Hydronic Paddle / Vane Flow Switches

The most widely installed mechanical water flow proving device is the **liquid flow switch** (such as the **McDonnell & Miller `FS8W` / `FS4-3`**, York part number [`024-15793`](../product/york-optiview.html), or **Johnson Controls Penn `F61`**):

- **Mechanical Operation**: A segmented stainless steel or phosphor-bronze paddle is immersed directly into the fluid stream inside a pipe tee. As fluid velocity increases, dynamic fluid drag deflects the paddle forward against an adjustable counterbalance spring. This movement pivots a mechanical arm that actuates a hermetically sealed or snap-action microswitch (`SPDT`).
- **Standard Applications**:
  - Chilled water evaporator barrel freeze protection.
  - Condenser water flow verification before chiller start.
  - Hot water and steam boiler minimum circulation proofing.
  - Cooling tower basin water loop interlocks.
- **Installation Rules & Piping Standards**:
  - **Horizontal Pipe Preferred**: Must be mounted in a standard threaded tee in a horizontal pipe run. If installed in vertical piping, flow **must be upward**; vertical downward flow is prohibited because gravity can hold the paddle deflected, creating a false flow indication when the pump is off.
  - **Straight Pipe Run**: Requires a minimum of **5 pipe diameters of straight, undisturbed pipe upstream and downstream** of the switch tee. Mounting near elbows, valves, or pump discharges causes severe fluid turbulence, resulting in switch flutter, contact chatter, and premature failure.
  - **Paddle Trimming**: Multi-segment paddles must be trimmed according to the manufacturer’s trim chart to match the exact pipe inside diameter (ID) without scraping or rubbing against the bottom of the pipe.
- **Failure Modes**:
  - *Paddle Fatigue Failure*: High fluid velocity or excessive turbulence can cause metal fatigue, snapping the paddle off. The detached paddle can travel downstream and lodge in chiller tube sheets or control valves.
  - *Debris / Scale Binding*: Rust, pipe scale, or magnetite can pack into the pivot mechanism, jamming the paddle in the "Flow" position even when the pump stops.
  - *Contact Flutter*: Rapid cycling under turbulent flow requires electrical debounce relays or software proving delays (`10 to 30 seconds`).

### Thermal Dispersion Flow Switches

To eliminate the mechanical failure modes of paddle switches, modern hydronic plants increasingly use solid-state **thermal dispersion flow switches**:
- **Operating Principle**: The insertion probe contains two matched platinum RTD or thermistor temperature sensors. One sensor is continuously heated by an internal electrical element; the second sensor measures the bulk process liquid temperature.
- **Heat Dissipation**: Flowing liquid absorbs heat from the heated sensor proportional to fluid mass velocity. At high flow, the temperature differential ($\Delta T$) between the two sensors is small. At low flow or zero flow, $\Delta T$ reaches maximum.
- **Advantages**:
  - Completely solid-state with zero moving parts, eliminating paddle breakage and pivot jamming.
  - Extremely sensitive to low flow velocities (detects flow down to `0.1 ft/s` / `0.03 m/s`).
  - Immune to water hammer, particulate debris, and pipe scale.
  - Integrated LED status bar graphs and optional continuous `4–20 mA` velocity output.

### Airflow Proving: Sail Switches and Differential Pressure Proof Switches

For airside systems, positive flow must be verified across electric duct heaters, supply fans, and laboratory exhaust systems:
- **Sail Switches**: A lightweight, large-surface-area aluminum or plastic paddle ("sail") hangs into the duct. Low air velocities (`200 to 500 FPM` / `1.0 to 2.5 m/s`) swing the sail backward, tripping a sensitive microswitch. Commonly used as a backup safety on duct-mounted electric reheaters and humidifier dispersion tubes.
- **Air Differential Pressure Proof Switches**: A sensitive diaphragm switch connected across a fan (measuring pressure difference between suction and discharge) or across an orifice / airflow pickup ring ([airflow measurement](airflow-measurement.html)). Adjustable setpoints range from `0.05 to 2.0 in. w.c.` (`12 to 500 Pa`). Directly proves aerodynamic static pressure rise regardless of motor belt condition.
- **Current Switches (`CT`) with Broken-Belt Calibration**: Split-core current-sensing switches clamped around motor leads prove motor operation. To detect broken belts on centrifugal fans, an adjustable trip threshold is set slightly below normal loaded amperage; an unloaded motor spinning without belt drag draws significantly less current, dropping the switch open and triggering a fan fault alarm.

---

## High-Temperature Cutout Switches

High-temperature safety cutouts protect air distribution systems from duct fires, prevent electric heater meltdowns, and prevent boiler thermal shock.

### Duct High-Temperature Limit Switches ("Firestats")

A **duct firestat** is a temperature-activated limit switch designed to detect fire or excessive thermal energy entering air distribution ductwork, instantly stopping fans to prevent the HVAC system from fanning flames or spreading toxic smoke through tenant spaces.

- **Codes & Standards (NFPA 90A)**:
  - **Return Air Firestat**: Required on air-handling systems with capacities exceeding `2,000 CFM` (`944 L/s`). Per **NFPA 90A** (Standard for the Installation of Air-Conditioning and Ventilating Systems), the return air high limit must be set to trip at **not more than `125 °F` or `135 °F` (`52 °C` or `57 °C`)**. This low setpoint detects heated return air pulled from a room fire long before flame reaches the unit.
  - **Supply Air Firestat**: Located immediately downstream of the supply fan discharge. Set to trip at **`165 °F` (`74 °C`)** or `50 °F` (`28 °C`) above the maximum design supply air temperature, with an absolute maximum cutoff of **`200 °F` (`93 °C`)**.
- **Operating Physics**: Utilizes a rigid bimetallic rod-and-tube expansion element or a liquid-filled capillary inserted into the duct cross-section. The difference in expansion rates between the inner rod and outer tube mechanical linkage pulls a latch mechanism, snapping the electrical contacts open.
- **Mandatory Manual Reset**: Firestats must incorporate an external **manual reset button**. Once tripped, the air handler cannot be re-energized until emergency response personnel clear the space and physically reset the switch.
- **Hardwired Interlock**: Hardwired directly to drop power to the supply and return fan starters, and de-energize the magnetic holding circuits of dynamic fire/smoke dampers.

### Electric Duct Heater High-Limit Controls (UL 1996 / NEC 424)

Electric resistance duct heaters pose an immediate fire hazard if energized without adequate airflow: surface temperatures of open nickel-chromium coils can exceed `1,200 °F` (`649 °C`) in under 30 seconds.

Under **UL 1996** and **National Electrical Code (NEC) Article 424**, electric duct heaters must incorporate a multi-tiered safety system:

1. **Primary High-Limit Cutout (Automatic Reset)**:
   - A linear capillary tube sensing element spanning the heater face or disc thermostat sensing leaving air temperature.
   - Setpoint: Typically calibrated at **`150 °F to 165 °F` (`66 °C to 74 °C`)**.
   - Action: Opens the `24 VAC` control circuit feeding the staging contactors or SCR controller. Resets automatically when the temperature drops.
2. **Secondary High-Limit Cutout (Manual Reset / Thermal Cutoff)**:
   - An independent safety device physically and electrically isolated from the primary limit.
   - Can be a **manual-reset capillary limit** (set at **`200 °F to 225 °F` / `93 °C to 107 °C`**) or an irreversible one-shot **thermal cutoff (fusible link / thermal fuse)** rated at **`240 °F to 260 °F` (`116 °C to 127 °C`)**.
   - Action: Breaks line voltage directly or energizes a dedicated **backup safety magnetic contactor** that disconnects all ungrounded power conductors feeding the resistance elements.
3. **Airflow Interlock**:
   - A dedicated differential pressure switch or sail switch wired in series with the control circuit; prevents heater contactors from pulling in unless positive airflow velocity is proven.

### Boiler High-Limit Aquastats and Steam Pressuretrols

Under **ASME Boiler and Pressure Vessel Code Section IV** and **CSD-1** (Controls and Safety Devices for Automatically Fired Boilers):
- **High-Limit Aquastat**: An immersion well thermostat wired directly in series with the fuel safety shutoff valve (SSOV) or electric heating element contactors. Set at **`200 °F to 240 °F` (`93 °C to 116 °C`)** (typically `15 °F` above maximum operating water temperature). Requires **manual reset**.
- **High-Limit Steam Pressuretrol**: A bellows-operated steam pressure switch wired to interrupt burner firing if steam pressure exceeds design limit (e.g., `10 to 14 psig` on a `15 psig` low-pressure steam boiler). Requires **manual reset**.

---

## High-Humidity Cutouts and Condensation Protection

Excess moisture in airside systems or chilled hydronic piping causes catastrophic microbial growth (mold, fungi), damages architectural ceiling finishes, and short-circuits electrical equipment.

```
       Airflow Direction ======>
 ┌────────────────────────────────────────────────────────┐
 │ Supply Air Ductwork                                    │
 │                                                        │
 │   Steam Humidifier        Absorption   High-Limit      │
 │   Dispersion Grid         Distance     Duct Humidistat │
 │   ┌─────────────┐        (10-12 ft.)   ┌─────────────┐ │
 │   │  |   |   |  │                      │ Capacitive  │ │
 │   │  |   |   |  │ ~~~~~~~~~~~~~~~~~~~> │ or Ribbon   │ │
 │   │  |   |   |  │   (Steam Plume)      │ 85-90% Cutout│ │
 │   └──────┬──────┘                      └──────┬──────┘ │
 └──────────┼────────────────────────────────────┼────────┘
            │                                    │
      Modulating Control                   Hardwired NC
      Steam Valve (BAS AO)                 De-energizes Valve
```

### Duct High-Humidity Safety Cutout (High-Limit Duct Humidistat)

When steam injection grids, ultrasonic humidifiers, or adiabatic high-pressure water atomizers add moisture to supply air, the air must absorb the water vapor before contacting duct elbows, acoustic liners, or terminal VAV boxes:

- **Duct Saturation & Condensation Risks**: If cold supply air (`55 °F` / `12.8 °C`) is over-humidified beyond its saturation threshold (`100% RH`), water droplets fall out of suspension, pooling in sheet metal ductwork, soaking fiberglass acoustic lining, and creating an ideal breeding environment for mold (*Stachybotrys*) and bacteria.
- **Operating Physics**:
  - *Hygroscopic Ribbon Elements*: Traditional mechanical humidistats use moisture-sensitive organic or nylon hygroscopic ribbons that physically expand as relative humidity rises. The mechanical elongation trips an internal microswitch.
  - *Capacitive Electronic Limit Transmitters*: Modern installations utilize fast-response thin-film capacitive sensors ([humidity sensors](humidity-sensors.html)) equipped with onboard SPDT dry-contact safety relays and adjustable hysteresis.
- **Setpoint Selection**: Typically calibrated to cut out between **`85% and 90% RH`** (with `5% RH` switching differential).
- **Mounting Location**: Must be installed at least **10 to 12 feet (`3.0 to 3.7 m`) downstream** of the humidifier dispersion grid, past the manufacturer's calculated **absorption (vapor dissipation) distance**. Installing too close causes nuisance trips from unevaporated steam plumes; installing too far downstream risks duct condensation occurring before the sensor.
- **Hardwired & DDC Sequence**:
  - The switch contact is wired in series with the humidifier power supply or modulating steam valve actuator control signal.
  - On a high-humidity trip, power is immediately removed from the steam valve, spring-closing the valve to `0%`.
  - An auxiliary contact signals the BAS `DI` to latch an over-humidification alarm and freeze/reset the humidifier PID loop integral term ([control strategies](control-strategies.html)) to prevent reset windup.

### Chilled Ceiling and Chilled Beam Condensation Monitors

In hydronic sensible cooling installations—such as [active and passive chilled beams](chilled-beams.html) and radiant chilled ceilings—cooling coils operate without drain pans:
- **Operating Principle**: Pipe-mounted hygroscopic impedance sensors (such as the Belimo `01HT` or Siemens `QXA2601 / QXA2602`) clamp directly to the uninsulated chilled water supply runout pipe upstream of the beam.
- **Track Impedance Shift**: Microscopic moisture droplets bridging the alternating gold-plated conductor tracks drop impedance from megaohms to kilohms, tripping an internal relay `2 to 3 °F` before actual bulk droplets fall.
- **Coordinated Action**: Instantly spring-closes the zone chilled water [control valve](control-valves.html) (e.g., [Siemens 599 zone valve](../product/siemens-599-zone-valve.html)) and commands the central dedicated outdoor air system (DOAS) to boost dehumidification; see full details in [Condensation detectors](condensation-detectors.html).

### Condensate Drain Pan Float Switches

Under the **International Mechanical Code (IMC Section 307.2.3)**, cooling coils produce continuous condensate that drains via gravity traps. If the primary drain line or trap becomes clogged with algae or debris, condensate overflows the internal pan:
- **Mechanical Float Switch**: Clamped to the rim of the secondary drain pan or threaded into the auxiliary overflow drain outlet of the primary pan.
- **Sensing Action**: A magnetic reed float rises with water level, breaking electrical contact when water rises `0.5 in.` (`13 mm`) above the primary drain outlet.
- **Hardwired Cutout**: Directly breaks the `24 VAC` `Y1/Y2` cooling contactor circuit or digital shutdown terminal (`J18` on [Trane Symbio 700](../product/symbio-700.html)), stopping the compressor or closing the chilled water valve before water overflows onto ceiling drywall.

---

## Other Standard Safety Devices in HVAC/R

### High and Low Duct Static Pressure Cutouts

Variable air volume (VAV) supply air handlers with fast-ramping VFD supply fans can over-pressurize ductwork if fire/smoke dampers snap closed while the fan is operating at full speed:
- **High Duct Static Cutout**: Diaphragm pressure switch connected to a static pressure probe `10 to 15 ft.` downstream of the supply fan. Calibrated to trip at **`+3.0 to +4.5 in. w.c.` (`750 to 1,120 Pa`)** (below duct pressure construction class ratings per SMACNA). Shuts down the supply fan starter directly. Manual reset required.
- **Low Static (Suction) Cutout**: Connected to the mixed air plenum or fan inlet suction. Calibrated to trip at **`-1.5 to -2.5 in. w.c.` (`-375 to -625 Pa`)** to prevent inward collapse of sheet-metal casings if outdoor and return dampers fail closed simultaneously.

### Duct Smoke Detectors (NFPA 90A / UL 268A)

Required on HVAC systems handling over `2,000 CFM` (supply duct) and `15,000 CFM` (return duct):
- Photoelectric sampling tubes span the width of the duct. Air velocity draws air samples through the chamber.
- Directly interlocked with the building Fire Alarm Control Panel (FACP) and hardwired to de-energize the fan starter and drop fire/smoke damper actuators.

### Boiler Low Water Cut-Off (LWCO)

Under **ASME Section IV / CSD-1**, all steam and hot-water heating boilers must have an approved **Low Water Cut-Off**:
- Float-operated or electronic conductivity probe mounted at or above the minimum safe boiler water level.
- Shuts off burner fuel supply if water level drops, preventing dry-firing and vessel explosion. Requires manual reset.

### Refrigerant Machinery Room Leak Alarms (ASHRAE Standard 15 / EN 378)

Central chiller equipment rooms housing chillers charged with group A1, A2L, or B2 refrigerants:
- Gas-specific photoacoustic or infrared refrigerant transmitters continuously monitor room air.
- On detection of refrigerant vapor (e.g., `50 PPM` warning, `1,000 PPM` OSHA PEL threshold):
  1. Activates high-volume emergency mechanical exhaust ventilation (`≥ 150 FPM` room airflow).
  2. Sounds audible and visual horn/strobes outside every room entrance.
  3. De-energizes chillers and closes automated refrigerant isolation valves.

### Compressor Internal Motor Protectors (PTC Thermistor Relays)

Large hermetic and semi-hermetic screw and scroll compressors incorporate miniature positive temperature coefficient (PTC) thermistors embedded directly inside the copper stator windings:
- An electronic motor evaluation module (such as the **Kriwan SE-B2** or **Siemens 3RN**) monitors total sensor resistance.
- If winding temperature exceeds insulation class limits (`120 °C to 140 °C`) due to locked rotor, phase loss, or low suction cooling, the module trips and locks out the compressor contactor.

---

## Master Comparison Guide of HVAC/R Safety Devices

| Safety Device | Sensing Mechanism | Monitored Medium | Typical Cutout Threshold | Reset Action | Hardwired Protective Action | BAS Digital Input (`DI`) Role | Governing Code / Standard |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Low-Temp Cutout ("Freeze Stat")** | Vapor-filled capillary (`20 ft.`) | Air leaving preheat/cooling coil | `35–38 °F` (`1.7–3.3 °C`) on *any 1-foot* | **Manual Reset** | De-energizes fan starter/VFD; spring-closes outdoor damper; opens heating valve `100%` | Latches Priority 1 freeze alarm; starts coil freeze pump; inhibits unit start | Standard Industry Practice |
| **High Refrigerant Pressure (HPCO)** | Metal bellows / diaphragm | Compressor discharge gas | `550–610 psig` (R-410A) / `220–250 psig` (R-134a) | **Manual Reset** | Directly opens compressor contactor coil / VFD STO circuit | Records compressor high-pressure lockout; locks out stage; alerts operator | UL 1995, UL 60335-2-40 |
| **Low Refrigerant Pressure (LPCO)** | Suction bellows / diaphragm | Compressor suction gas | `50–70 psig` (R-410A) / `15–25 psig` (R-134a) | **Auto Reset** (with delay) | Shuts off compressor contactor; bypassed for `30–120 s` at startup | Tracks suction pressure fault; latches lockout if multiple trips per hour | UL 1995, UL 60335-2-40 |
| **Differential Oil Pressure (OPS)** | Dual opposing bellows + timer | Compressor oil pump vs. crankcase | `8–12 psid` net oil pressure | **Manual Reset** (after 90s) | De-energizes compressor control circuit after 60–120s thermal delay | Logs lubrication fault; locks out compressor until physical inspection | Manufacturer Specifications |
| **Hydronic Paddle Flow Switch** | Deflecting stainless paddle | Chilled/hot water piping | Varies with pipe GPM (`~1.5–3.0 ft/s`) | **Auto Reset** (spring return) | Drops chiller / boiler safety permissive circuit on loss of flow | Proves runtime status; initiates alarm if command is active but flow lost | ASME CSD-1, York OptiView, Trane Tracer |
| **Thermal Dispersion Flow Switch** | Dual RTD probes (heated vs. ref) | Chilled/hot water piping | Adjustable velocity threshold (`0.2–1.0 ft/s`) | **Auto Reset** (solid-state) | Interrupts chiller permissive circuit; zero moving parts | Proves flow status; provides optional continuous `4–20 mA` velocity | Manufacturer Specifications |
| **Air Differential Pressure Switch** | Sensitive silicone diaphragm | Fan suction vs. discharge static | `0.10–1.50 in. w.c.` across fan | **Auto Reset** | Disables electric duct heater; interlocks chemical exhaust | Proves fan aerodynamic airflow status; detects broken belts | UL 1996, NFPA 90A |
| **Duct High-Temp Limit ("Firestat")** | Bimetallic rod-and-tube | Supply or return duct air | `125–135 °F` (Return) / `165–200 °F` (Supply) | **Manual Reset** | Instantly stops supply/return fans; drops fire/smoke damper actuators | Reports duct fire alarm to BAS; notifies Fire Alarm Control Panel (FACP) | NFPA 90A |
| **Electric Heater Primary Limit** | Linear capillary or disc bimetal | Air leaving heating elements | `150–165 °F` (`66–74 °C`) | **Auto Reset** | Opens control circuit feeding staging contactors / SCR | Monitors heater over-temperature cycling | UL 1996, NEC Article 424 |
| **Electric Heater Secondary Limit** | Capillary limit or fusible link | Air adjacent to heating elements | `200–250 °F` (`93–121 °C`) | **Manual Reset** / One-shot | Directly disconnects line power or drops backup safety magnetic contactor | Latches critical heater failure alarm | UL 1996, NEC Article 424 |
| **Duct High-Humidity Cutout** | Capacitive sensor / nylon ribbon | Supply duct air (post-humidifier) | `85–90 %RH` | **Auto Reset** (with diff) | Cuts electrical power to steam valve or humidifier generator | Latches duct high-humidity alarm; freezes humidifier PID loop | ASHRAE 62.1, Standard Practice |
| **Chilled Beam Condensation Switch** | Hygroscopic conductive tracks | Chilled water supply runout pipe | Surface dewpoint approach `2–3 °F` | **Auto Reset** (with delay) | Spring-closes secondary zone chilled water control valve | Commands DOAS humidity purge; alarms impending condensation | Manufacturer Specifications |
| **Drain Pan Float Switch** | Magnetic reed float | Condensate secondary drain pan | Water level `+0.5 in.` in pan | **Auto Reset** | Disables `24 VAC` compressor contactor / cooling valve | Alarms clogged condensate drain trap; prevents ceiling flooding | IMC Section 307.2.3 |
| **High Duct Static Pressure Cutout** | Diaphragm pressure switch | Supply fan discharge duct | `+3.0 to +4.5 in. w.c.` | **Manual Reset** | De-energizes supply fan VFD / motor starter | Reports high static trip; holds fan off until physical inspection | SMACNA, Standard Practice |
| **Boiler Low Water Cut-Off (LWCO)** | Float chamber or conductance probe | Boiler water vessel | Water level below safe crown | **Manual Reset** | De-energizes burner fuel safety shutoff valve (SSOV) | Latches boiler low-water shutdown alarm | ASME Section IV, CSD-1 |

---

## Wiring Topologies, Commissioning, and Testing

### Discrete Monitoring vs. Series Strings

In legacy construction, multiple safety contacts were occasionally daisy-chained in series into a single digital input on the DDC controller. While this stopped the fan, the operator could not distinguish between a freeze stat trip, a high-static trip, or a tripped firestat without walking the air handler with a multimeter.

**Modern Specification Mandate**:
- Safety contacts remain in hardwired series with the motor starter run circuit.
- Each safety device is provided with **dual isolated poles (`DPDT`)** or an intermediate multi-pole safety relay.
- Each device wires to an **individual, dedicated BAS `DI`** ([Siemens TXM1.8D](../product/tx-io-modules.html) or [Desigo DXR2](../product/dxr2.html)). The control system displays the exact tripped device on the graphic and logs the precise millisecond timestamp in the alarm history.

### Commissioning and Functional Verification Procedures

Every safety device must be physically tested during building commissioning, not merely checked off by visual inspection:

1. **Freeze Stat Verification**:
   - Spray a `12-inch` section of the capillary tubing with aerosol cold refrigerant spray (freeze spray) or immerse a loop into an ice-water bath (`32 °F`).
   - Confirm that the switch trips at `35–38 °F`.
   - Verify that the supply fan stops immediately, the outdoor air damper springs closed, the heating valve drives `100%` open, and the BAS displays `Freeze Stat Alarm`.
   - Confirm that the unit cannot restart until the physical manual reset button on the housing is pressed.
2. **Refrigerant High-Pressure Verification**:
   - Temporarily lower the HPCO setting below current operating pressure or restrict condenser airflow/water flow momentarily under controlled service supervision.
   - Confirm compressor shuts down instantly and controller latches a high-pressure manual lockout.
3. **Flow Switch Verification**:
   - While the chiller is operating, slowly close the manual isolation valve on the evaporator water discharge.
   - Verify the paddle relaxes, the switch opens, and the chiller initiates an emergency shutdown within the programmed proving delay (typically `< 5 seconds`).
4. **Firestat Verification**:
   - Test the mechanical trip lever on the rod-and-tube switch or apply controlled warm air to verify contact snap at rated temperature (`135 °F` / `165 °F`).
   - Verify manual reset engagement and fan interlock shutdown.
5. **High-Humidity Cutout Verification**:
   - Expose the duct sensor probe to moist air or adjust the calibration potentiometer down below duct ambient relative humidity.
   - Confirm that the humidifier steam valve closes immediately and the BAS humidifier loop locks out.

### Troubleshooting Common Nuisance Trips

- **Freeze Stat Trips on Mild Mornings (`35–45 °F` Ambient)**:
  - Cause: Air stratification. In mixed-air plenums without static mixing baffles, cold outdoor air can stream along the bottom of the duct while warm return air rides along the top. A localized cold vein hits the bottom capillary run, causing a trip even though mixed air temperature reads `55 °F`. Solution: Install air blenders/mixing vanes or reposition the capillary.
- **High-Static Trips During Fan Startup**:
  - Cause: VFD acceleration ramp time is too fast (`< 15 seconds`), building static pressure before downstream VAV terminal box dampers can modulate open. Solution: Increase VFD ramp time (`30 to 60 seconds`) or implement soft-start duct pre-pressurization routines.
- **Hydronic Flow Switch Chatter**:
  - Cause: Insufficient straight pipe run upstream of the switch tee, causing turbulent eddies to buffet the paddle. Solution: Relocate the switch tee to a location with at least 5 pipe diameters of straight pipe upstream and downstream, or replace with a solid-state thermal dispersion flow switch.
- **Low-Pressure Cutout Trips on Compressor Start**:
  - Cause: Inadequate startup bypass delay or liquid line solenoid opening too slowly. Solution: Extend controller startup LPCO bypass timer to `60–90 seconds`.

See [I/O points](io-points.html) for digital input electrical ratings, [Damper actuators](damper-actuators.html) for fail-safe spring-return mechanisms, and [Hydronic system control](hydronic-system-control.html) for central chiller plant interlock sequences.
