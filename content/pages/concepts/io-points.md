---
id: io-points
type: concept
title: "BAS I/O point types: AI, AO, DI, DO, and UIO"
summary: "How physical field points (Analog Input, Analog Output, Digital Input, Digital Output, and Universal I/O) and virtual BACnet objects connect sensors and actuators to DDC controllers."
review: draft
images:
  - path: images/concepts/io-points.svg
    alt: "Technical diagram (drawn illustration) of BAS DDC controller I/O point types showing AI, DI, AO, DO, Universal I/O (UIO), and BACnet object mappings"
    source: "Own work (BASWiki technical diagram based on Siemens TX-I/O CM2N8173, Desigo PXC4 A6V11646018, and BACnet PICS A6V10490415)"
    license: CC0-1.0
related: [analog-signals, control-signals, temperature-sensors, humidity-sensors, damper-actuators, control-valves, tx-io-modules, pxc4, pxc-compact, dxr2, symbio-210, bas-sizing-calculations, electrical-power-calculations]
sources:
  - https://sid.siemens.com/api/khub/documents/Wp276kwBxfKvIGrmhJ24Kg/content
  - https://sid.siemens.com/api/khub/maps/KkEo6H9Q~7RCe5kHQ8QNDw/attachments/FhJXV57N7MOdIisODseSrA-KkEo6H9Q~7RCe5kHQ8QNDw/content
  - https://sid.siemens.com/v/u/A6V10490415
---
In Direct Digital Control (DDC) and building automation systems, every hardwired field sensor, switch, relay, and actuator connects to a controller terminal classified by **direction** (Input vs. Output) and **signal nature** (Analog continuous vs. Digital/Binary two-state). Modern controllers also provide software-configurable **Universal I/O (`UIO`)** terminals and **Virtual (Software) Points**.

### 1. The Five Physical Hardware Point Types

| Point Type | Common Abbreviations | Electrical Signal Types | Typical HVAC Field Devices | Controller Examples in Wiki |
| :--- | :--- | :--- | :--- | :--- |
| **Analog Input** | `AI` | Passive resistance (`10kΩ NTC`, `100kΩ NTC`, `1000Ω Pt1000`, `100Ω Pt100`, `LG-Ni1000`), current loop (`4–20 mA`, `0–20 mA`), voltage (`0–10 VDC`, `0–5 VDC`, `2–10 VDC`) | Space, duct, and immersion [temperature sensors](temperature-sensors.html); [humidity](humidity-sensors.html) and [CO₂ transmitters](co2-sensors.html); duct static and hydronic [differential pressure transmitters](differential-pressure-sensors.html); valve/damper position feedback | [Trane Symbio 210](../product/symbio-210.html) (`AI1`–`AI3` `10kΩ` NTC), [Siemens TXM1.8P](../product/tx-io-modules.html) (4-wire `Pt100`) |
| **Analog Output** | `AO` | Voltage (`0–10 VDC`, `2–10 VDC`), current (`4–20 mA`, `0–20 mA`) | Modulating [damper actuators](damper-actuators.html) and [control valves](control-valves.html) (e.g., [Siemens SSE161.05U](../product/siemens-599-zone-valve.html)); VFD speed references (`0–100%` = `0–60 Hz`); ECM fan speed (`0–10 VDC`); SCR electric heat controllers | [Siemens PXC Compact](../product/pxc-compact.html) (`0–10V` / `4–20mA` jumper-selected), [Desigo DXR2](../product/dxr2.html) (`0–10V` AO) |
| **Digital Input** *(Binary Input)* | `DI`, `BI` | Dry contact (voltage-free switch closure sensed by controller internal wetting current), `24 VAC/DC` wetted voltage sense, or high-speed pulse train (`Hz`) | Fan and pump status current switches (`CT`) or differential-pressure proof switches; [freeze stats, high-static cutouts, smoke detectors](switches-and-safeties.html); window/door contacts; occupancy motion switches; kWh/BTU/water pulse meters | [Siemens TXM1.8D / TXM1.16D](../product/tx-io-modules.html), [Desigo DXR2](../product/dxr2.html) (`DI`), [Trane Symbio 700](../product/symbio-700.html) (`J16` Demand Limit, `J18` Shutdown) |
| **Digital Output** *(Binary Output)* | `DO`, `BO` | Potential-free mechanical relay contacts (`Form A` SPST NO or `Form C` SPDT changeover, `24–250 VAC`, `2–4 A`) or solid-state `24 VAC` **Triacs** / SSRs (`0.5–1.5 A`) | Motor starter start/stop coils; two-position valves ([Siemens SFA71U](../product/siemens-599-zone-valve.html)); staged electric reheat contactors; **paired `DO` triacs** for 3-wire floating actuators ([Siemens OpenAir GDE/GLB](../product/openair-gde-glb.html), [Belimo LMB24-3](../product/lmb24-3.html)) | [Siemens TXM1.6R / TXM1.6R-M](../product/tx-io-modules.html) (Form C relays), [TXM1.8T](../product/tx-io-modules.html) (Triacs), [APOGEE PTEC / ATEC](../product/apogee-atec.html) (Triacs) |
| **Universal Input / Output** | `UI`, `UO`, `UIO`, `X` | Software-selected per channel via internal multiplexer, DAC, ADC, and pull-up/shunt resistors (no hardware jumpers required) | Any passive thermistor/RTD (`AI`), `0–10 VDC` or `4–20 mA` transmitter (`AI`), dry-contact switch/pulse counter (`DI`), or `0–10 VDC` modulating command (`AO`) | [Siemens Desigo PXC4.E16](../product/pxc4.html) (12 `UIO`), [TXM1.8U / TXM1.8X](../product/tx-io-modules.html) (8 universal channels), [Phoenix PBC500](../product/phoenix-pbc.html) |

### 2. Universal Inputs (`UI`) vs. Universal I/O (`UIO`) vs. "Super Universal" (`X`)
Different manufacturers use distinct terminology for configurable terminals:
- **Universal Input (`UI`)**: Accepts multiple *input* signal types—typically passive thermistors (`10kΩ` Type II/III), dry contacts (`DI`), and `0–10 VDC` voltage inputs (plus `4–20 mA` either natively or with an external `500 Ω` precision resistor)—but **cannot** drive an output. Examples include the `UI` terminals on the [Siemens APOGEE PXC Compact](../product/pxc-compact.html), [Desigo DXR2](../product/dxr2.html), and [Trane Symbio 210](../product/symbio-210.html).
- **Universal I/O (`UIO`) & Siemens TX-I/O (`TXM1.8U` vs. `TXM1.8X`)**:
  - According to the Siemens `TXM1.8U` data sheet (`CM2N8173` / `A6V10068531`), each of the 8 channels on a **`TXM1.8U`** (`U` = Universal) can be programmed as a digital input (`DI`), temperature/resistance input (`LG-Ni1000`, `Pt1000`, `NTC 10k`/`100k`), `0–10 VDC` analog input (`AI`), or `0–10 VDC` analog output (`AO`).
  - The **`TXM1.8X`** (`X` = Super Universal) adds active **`4–20 mA` current input (`AI`)** and **`4–20 mA` current output (`AO`)** without external shunt resistors.
  - Because `UIO` channels only source low-current `0–10 VDC` (`typically 1 to 10 mA max`), they **cannot** directly switch `24 VAC` contactor coils or 3-wire floating actuators; dedicated relay (`TXM1.6R`) or triac (`TXM1.8T`) `DO` terminals are still required for power switching.

### 3. Physical Hardware Points vs. Virtual / BACnet Points
In both **Siemens APOGEE (`PPCL`)** and **BACnet** ([`ASHRAE 135`](../protocol/bacnet.html)), controllers distinguish between **physical points** (bound to a hardware terminal or sensor bus) and **virtual / software points** (calculated values, setpoints, occupancy modes, and supervisory overrides stored in memory):

| BACnet Object Type | Abbreviation | Role in BAS | Priority Array (Commandable?) |
| :--- | :--- | :--- | :--- |
| **Analog Input** | `AI` | Represents a physical analog sensor reading (e.g., `Discharge Air Temp`, `Duct Static Pressure`) | No (read-only from field, unless placed in `Out_Of_Service`) |
| **Analog Output** | `AO` | Represents a physical modulating output terminal (e.g., `Cooling Valve Position 0–100%`, `Supply Fan VFD Speed`) | **Yes (16 levels)** |
| **Analog Value** | `AV` | Virtual/software analog point (e.g., `Occupied Cooling Setpoint`, `CO2 Setpoint`, `Calculated Airflow CFM`) | Optional (commandable when used for setpoints) |
| **Binary Input** | `BI` | Represents a physical two-state `DI` terminal (e.g., `Supply Fan Status`, `Freeze Stat Alarm`) | No (read-only from field) |
| **Binary Output** | `BO` | Represents a physical relay or triac `DO` terminal (e.g., `Supply Fan Start/Stop`, `Exhaust Damper Open/Close`) | **Yes (16 levels)** |
| **Binary Value** | `BV` | Virtual/software two-state flag (e.g., `Emergency Override`, `Heating/Cooling Mode`) | Optional |
| **Multi-State Value** | `MSV` / `MV` | Enumerated integer state (e.g., `Occupancy Mode: 1=Occupied, 2=Unoccupied, 3=Standby, 4=Bypass`) | Optional |

### 4. The BACnet 16-Level Priority Array & Local HOA Overrides
Commandable outputs (`AO`, `BO`) and setpoint values (`AV`, `BV`, `MSV`) in BACnet maintain a **16-slot Priority Array** (`Priority 1` highest to `Priority 16` lowest, plus `Relinquish_Default` when all 16 slots are `NULL`):
- **Priority 1 — Manual Life Safety** (e.g., UL 864 smoke control purge/shutdown on `-PKA` / `-101K` controllers).
- **Priority 2 — Automatic Life Safety**.
- **Priority 5 — Critical Equipment Control**.
- **Priority 6 — Minimum On/Off Time** (e.g., compressor short-cycle protection).
- **Priority 8 — Manual Operator Override** (when an operator issues an override from [Siemens Desigo CC](../product/desigo-cc.html), [APOGEE Insight](../product/siemens-insight.html), or [Trane Tracer SC+](../product/tracer-sc-plus.html)).
- **Priority 16 — Normal Control Program** (automatic PID loop, schedule, or PPCL logic).

> **Field Troubleshooting Tip — Physical HOA vs. Software Override**: On hardware modules with physical manual override switches—such as the [Siemens TXM1.8U-ML](../product/tx-io-modules.html), [TXM1.6R-M](../product/tx-io-modules.html), or [APOGEE MEC](../product/apogee-mec.html) HOA switches—flipping the physical switch on the module overrides the electrical output directly at the hardware terminal, taking precedence over all software commands (even Priority 1 or 8 in the workstation). The module reports a local override flag back to the controller so operators at the workstation can see that a technician has placed the point in local manual mode.
