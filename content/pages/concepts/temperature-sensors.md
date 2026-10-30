---
id: temperature-sensors
type: concept
title: "HVAC temperature sensors: thermistors, RTDs, and transmitters"
summary: "How NTC thermistors, platinum and nickel RTDs, active 4-20 mA / 0-10 V transmitters, and digital bus room sensors measure air, hydronic water, and space temperature in building automation."
review: verified
images:
  - path: images/concepts/thermistor.jpg
    alt: "Resistance versus temperature curves for an NTC thermistor (curve 1, falling) and a PTC thermistor (curve 2, rising); axis labels are in Russian"
    source: "Commons uploader, via Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Thermistor_RT.jpg"
    license: CC BY-SA 3.0
related:
  - analog-signals
  - io-points
  - gages-and-local-instrumentation
  - humidity-sensors
  - qaa2280-series-2200
  - qmx3
  - tx-io-modules
  - symbio-210
  - hmw90
  - hmd60
  - hmt330
sources:
  - https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
  - https://sid.siemens.com/api/khub/documents/Wp276kwBxfKvIGrmhJ24Kg/content
---

Temperature is the most common measurement in building automation, used to control room comfort, air handler discharge and mixed-air temperatures, freeze protection, and chilled/hot water plant loops. Depending on accuracy requirements, wire distance, and controller platform, BAS installations use **passive resistive sensing elements** (NTC thermistors and RTDs), **active analog transmitters** (`4–20 mA` / `0–10 VDC`), or **digital communicating room sensors**.

## 1. Passive Sensing Elements: NTC Thermistors vs. RTDs

A passive temperature sensor changes its electrical resistance ($R$) with temperature ($T$). The DDC controller's [Analog Input (`AI`) or Universal Input (`UI`)](io-points.html) injects a tiny excitation current (typically `<0.5 mA` to minimize self-heating), measures the resulting voltage drop across the sensor, and converts resistance to temperature using a lookup table or polynomial curve.

| Sensor Type | Resistance at Reference Temp | Curve / Temperature Coefficient | Typical BAS Platforms & Applications |
| :--- | :--- | :--- | :--- |
| **`10kΩ` Type II NTC Thermistor** *(Dale / BAPI / Curve J)* | `10,000 Ω` at `25 °C` (`77 °F`), `~32,650 Ω` at `0 °C` (`32 °F`) | Negative Temperature Coefficient (non-linear exponential drop as temp rises) | Standard room, duct, and immersion sensor across **Siemens APOGEE** ([Series 2200 QAA2280](../product/qaa2280-series-2200.html), [PTEC/ATEC](../product/apogee-atec.html)), **Trane** ([Symbio 210 / 700](../product/symbio-210.html)), and **York** |
| **`10kΩ` Type III NTC Thermistor** *(PreconCurve)* | `10,000 Ω` at `25 °C` (`77 °F`), `~29,490 Ω` at `0 °C` (`32 °F`) | Negative Temperature Coefficient (flatter slope than Type II) | Common in packaged rooftop and multi-vendor retrofit sensors |
| **`100kΩ` NTC Thermistor** | `100,000 Ω` at `25 °C` (`77 °F`) | High-resistance NTC (minimizes lead-wire resistance error over long runs) | Supported on **Siemens APOGEE** (`PTEC`/`ATEC` room units) and [Siemens TX-I/O (`TXM1.8U`/`TXM1.8X`)](../product/tx-io-modules.html) |
| **`Pt1000` Platinum RTD (`385 α`)** | `1,000 Ω` at `0 °C` (`32 °F`), `~1,097.3 Ω` at `25 °C` (`77 °F`) | Positive Temperature Coefficient (`+3.85 Ω/°C`, IEC 60751 linear curve) | High-stability duct, outdoor, and hydronic sensors on **Siemens APOGEE / Desigo** ([TXM1.8U](../product/tx-io-modules.html), [PXC4](../product/pxc4.html)) and **Vaisala** |
| **`Pt100` Platinum RTD (`385 α`)** | `100 Ω` at `0 °C` (`32 °F`), `~109.73 Ω` at `25 °C` (`77 °F`) | Positive Temperature Coefficient (`+0.385 Ω/°C`, high precision) | Chilled/hot water ΔT BTU metering and laboratory calibration using **4-wire Kelvin sensing** (e.g., [Siemens TXM1.8P](../product/tx-io-modules.html)) |
| **`LG-Ni1000` Nickel RTD** | `1,000 Ω` at `0 °C` (`32 °F`) | Positive Temperature Coefficient (`5000 ppm/K` / `6180 ppm/K` Landis & Gyr curve) | Legacy and European **Siemens Desigo / Landis & Staefa** passive room and duct sensors (`QAA2061`, `QAM2120`, supported on [TXM1.8U](../product/tx-io-modules.html)) |

### Why Matching the Curve and Wiring Matters

1. **Type II vs. Type III `10kΩ` Mismatch**: At `25 °C` (`77 °F`), both `10kΩ` Type II and Type III thermistors read exactly `10,000 Ω`, so a room sensor will appear accurate at room temperature even if the wrong curve is selected in the controller. However, at `13 °C` (`55 °F` AHU discharge air) or `0 °C` (`32 °F`), the two curves diverge by `2–4 °F` without triggering an open/short fault.
2. **Lead-Wire Resistance & 4-Wire `Pt100` Sensing**: A run of `18 AWG` copper wire adds roughly `1.3 Ω` per `100 ft` loop. On a `10kΩ` thermistor (where `1 °C ≈ 400 Ω`), `1.3 Ω` causes a negligible `<0.004 °C` error. On a `Pt100` RTD (where `1 °C = 0.385 Ω`), that same `1.3 Ω` wire resistance creates a **`+3.4 °C` (`+6.1 °F`) offset** unless compensated! For precision chilled-water ΔT measurements, controllers like the [Siemens TXM1.8P](../product/tx-io-modules.html) use **4-wire RTD connections**: two wires carry the excitation current while a separate high-impedance pair measures voltage right at the RTD element, completely cancelling lead-wire resistance.

## 2. Active Transmitters (`4–20 mA` / `0–10 V`) & Communicating Room Units

- **Active Analog Transmitters**: Condition an internal `Pt100` or `Pt1000` RTD and output a linear [4–20 mA current loop or 0–10 VDC signal](analog-signals.html) over a calibrated temperature span (e.g., `-40 to +60 °C` or `0 to 100 °F`). Loop-powered `4–20 mA` transmitters (such as the [Vaisala HMW90](../product/hmw90.html), [HMD60](../product/hmd60.html), and [HMT330](../product/hmt330.html)) are immune to voltage drop over long cable runs and immediately indicate a broken wire by dropping to `0 mA`.
- **Communicating Room Sensors**: Modern room controllers connect to digital wall sensors over a 2-wire or 4-wire sensor bus—such as **KNX PL-Link** ([Siemens QMX3](../product/qmx3.html) on [Desigo DXR2](../product/dxr2.html) and [PXC4](../product/pxc4.html)), **Siemens Room Unit Bus** ([Series 2200 QAA2280](../product/qaa2280-series-2200.html) on [APOGEE PTEC/ATEC](../product/apogee-atec.html)), or **Trane Air-Fi® Wireless / Sensor Bus** (on [Symbio 210 / 700](../product/symbio-210.html))—carrying space temperature, setpoint adjustment, occupancy override, RH, and CO₂ over a single cable.

## 3. Physical Mounting Form Factors in HVAC

- **Wall / Space Sensor**: Ventilated wall enclosure mounted `48 in.` (`1.2 m`) above the finished floor on an interior wall away from direct sunlight, supply diffusers, and heat-generating equipment. Exterior wall conduits must be sealed with insulating putty so cold or hot wall-cavity air is not drawn across the thermistor.
- **Single-Point Duct Probe**: Rigid stainless-steel probe (`4 in.`, `6 in.`, `8 in.`, or `12 in.`) inserted into the center of a supply, return, or exhaust duct where air is well mixed.
- **Duct Averaging Element**: Flexible copper or aluminum capillary tube (`8 ft`, `12 ft`, or `24 ft` long) containing multiple thermistor/RTD elements wired in a series-parallel matrix, serpentine-strung across large AHU mixed-air plenums and cooling coils where stratified outdoor and return air streams create `20–40 °F` temperature gradients across the duct cross-section.
- **Hydronic Immersion Sensor & Thermowell**: Stainless-steel probe inserted with thermal conductive compound into a brass or `316SS` threaded **thermowell** (see [Gages and local instrumentation](gages-and-local-instrumentation.html)) so the sensor can be removed for calibration or replacement without draining the chilled- or hot-water pipe.
- **Strap-On Surface Sensor**: Clamped with a hose clamp and thermal paste onto the outside of small terminal reheat pipes where welding or threading a thermowell is impractical (slower thermal response and requires pipe insulation over the sensor housing).
- **Outdoor Air (OSA) Sensor with Solar Radiation Shield**: Weatherproof NEMA 4X enclosure mounted on a north-facing wall or roof stanchion inside a multi-plate white **solar radiation shield** so solar gain does not bias outdoor air temperature and economizer changeover logic.


## 4. Accuracy, Response and Installation Errors

> This section is general practice, not taken from the cited data sheets.

**Self-heating.** Every resistive sensor is warmed by the current that measures it. A 10 kilohm thermistor with a low excitation current barely heats, but a sensor driven at a higher current in still air reads a little high. The controller's input sets the current, so use a sensor type that suits the input.

**Response time.** A sensor takes time to follow a change in temperature. A bare probe in moving air responds in seconds, a probe in a thermowell lags noticeably because the well must also warm, and a strap-on sensor on an insulated pipe lags more. Specify the time constant for loops that need to react quickly, such as a heating coil discharge or a freeze-protection input, and filter the input only as much as the loop allows.

**Errors that come from the installation, not the sensor.**

- **Stratification.** Air in a mixed-air plenum is rarely uniform, so a single-point probe reads whatever stream it happens to sit in. An averaging element across the duct is the usual fix.
- **Conduit air.** A wall sensor fed by a conduit connected to a cold or warm space sees a draught of that air across the element. Seal the conduit.
- **Radiant and solar effects.** A sensor on a wall in sunlight, or near a heat source, reads the surface and not the air.
- **Poor thermal contact.** A dry thermowell, a loose strap-on, or an insulated cover that is missing gives a slow and offset reading.
- **Wrong location.** A hot-water return sensor placed before a bypass joins the flow reads a mixed value that is not the return temperature.

## 5. Verification and Failure Modes

**Checking a sensor.** An ice bath is a simple reference: crushed ice with enough water to fill the gaps, stirred, sits at about 0 °C (32 °F), and a probe held in it for a minute or two should read that. A calibrated reference thermometer next to the sensor in a stable environment is the practical test for higher temperatures. Check at two points if the accuracy matters; one point can hide a slope error.

**Failure modes.** A passive sensor fails in a way that shows in its reading:

- **Open circuit** (a broken wire or loose terminal) reads as a very cold temperature on an NTC thermistor input, and often as the end of the input's range.
- **Short circuit** reads as a very hot temperature.
- **Drifting contact** from a corroded terminal gives readings that wander.

Controllers can use these as diagnostics. A sensor value that is beyond the plausible range for the point, or changes faster than the process can, should raise a fault and, where it feeds a loop, hand control to a safe default. For critical protection, such as freeze protection, use a dedicated device and not the BAS sensor alone; see [Switches and safeties](switches-and-safeties.html).

## 6. Selecting a Sensor

| Need | Sensible choice |
| :--- | :--- |
| Room temperature, low cost | Thermistor in a wall unit, or a communicating room sensor |
| Large duct or coil face with stratification | Averaging element |
| Small duct, well-mixed air | Single-point probe |
| Hydronic pipe, serviceable | Immersion sensor in a thermowell |
| Hydronic pipe, quick fix | Strap-on, accepting slower response |
| High accuracy, long leads | RTD with a transmitter, or a 4-wire connection |
| Outdoor air | Sensor in a radiation shield, shaded |

Whatever the type, confirm the curve configured in the controller matches the sensor, and confirm the wiring distance and wire size against the sensor's lead-resistance limits. See [Analog signals](analog-signals.html) and [Gages and local instrumentation](gages-and-local-instrumentation.html) for checking the result.
