---
id: differential-pressure-sensors
type: concept
title: "Differential pressure sensors"
summary: "How a small differential pressure sensor inside a VAV compact controller turns a pressure drop into airflow, and how the nominal-flow parameter scales it."
review: verified
related: [airflow-measurement, vav-control, gdb181-1e-3, glb181-1e-3, apogee-tec-vav, setra-264, belimo-22adp-584, belimo-22pdp-18]
sources:
  - https://sid.siemens.com/v/u/A6V10356040
---
A differential pressure sensor reports the difference between two pressures. In HVAC the second pressure is usually a reference or a downstream tap, and the result is used to infer airflow, filter loading, or room pressurization.

**Airflow from differential pressure.** The Siemens G..B181 VAV compact controller documentation (A6V10356040, German edition) explains the arrangement. A *differential pressure transducer* in the airstream, typically a measuring cross, an orifice plate or a venturi nozzle, creates a pressure that depends on flow. The controller's built-in differential pressure sensor measures that pressure, and the controller calculates the airflow from it. The measured flow, in absolute terms and relative to nominal flow, and the damper position can be passed over the bus to a higher-level controller or used for display. Siemens states the sensor is long-term stable without recalibration.

**Sensor range and the Vn parameter.** The built-in sensor works over 0 to 300 Pa. The box manufacturer (OEM) adapts that range to the box's nominal flow with the parameter Vn, using the box's nominal differential pressure pnom:

Vn = square root of (300 Pa / pnom)

The manual's example is a box designed for pnom = 120 Pa, which gives Vn = 1.58. The result must be set at the factory by the OEM, so a technician should not change it in the field without the box's data.

**Cautions.** Siemens advises a material compatibility check where the airstream contains contaminants, and the controller has a differential pressure sensor fault indication (an LED state).

See [Airflow measurement](airflow-measurement.html) for the alternatives to measuring flow by differential pressure.

**Standalone transmitters.** Besides the sensor built into a VAV controller, separate transmitters report a differential pressure to any controller as an analog signal (see [Analog signals](analog-signals.html)):

- Air, very low range: [Setra 264](../product/setra-264.html), capacitive, down to 0 to 0.1 in. WC, 4 to 20 mA or 0 to 5 V.
- Air, ducts and filters: [Belimo 22ADP-584](../product/belimo-22adp-584.html), piezo, eight selectable ranges within -100 to 2500 Pa, with an auto-zero option.
- Water: [Belimo 22PDP-18](../product/belimo-22pdp-18.html), ranges to 5, 10 or 35 bar.

Low ranges drift with temperature and orientation, so check the zero. The Belimo data sheet schedules manual zeroing every 3 months at 1 in. WC and every 12 months above 2 in. WC unless auto-zero is fitted; Setra calibrates its 264 vertically and lists a position effect that is largest on the lowest ranges.

> The sections below are general practice, not taken from the manufacturer documents cited above.

## How the sensor works

A differential pressure sensor has two ports, high and low, and a thin diaphragm between them. The pressure difference flexes the diaphragm, and the sensor converts the movement to an electrical signal. Two common technologies are **capacitive**, where the diaphragm is one plate of a capacitor and its movement changes the capacitance, and **piezoresistive**, where strain gauges on the diaphragm change resistance. Capacitive sensors are used for the lowest air ranges; piezoresistive sensors are common for duct and water ranges. The transmitter's electronics turn the result into a standard output such as 0-10 V or 4-20 mA; see [Analog signals](analog-signals.html).

The sensor reports the difference only. Raising both ports by the same amount, as when a duct's static pressure rises, ideally leaves the output unchanged, but at very low ranges a large static pressure on both ports can produce a small error.

## Units

Air pressure is quoted in pascals (Pa) or inches of water column (in. WC). One inch of water column is about 249 Pa. Water systems use kilopascals, bar or psi. Ranges can be unidirectional (0 to 1 in. WC) or bidirectional (-0.5 to +0.5 in. WC), and the bidirectional kind is needed wherever the pressure may reverse, such as room pressurization.

## What it is used for

| Application | What the two ports see | Typical range |
| :--- | :--- | :--- |
| VAV airflow | High and low taps on the box's flow pick-up | Very low, tens of pascals |
| Duct static pressure | Duct pressure against the surrounding room | 0 to 1.5 or 2 in. WC and more |
| Filter status | Pressure across the filter bank | 0 to 1 or 2 in. WC |
| Room or building pressure | Room against a reference such as the corridor or outdoors | Bidirectional, around 0.1 in. WC or less |
| Pump or loop control | Pressure across a hydronic loop, coil or pump | Water ranges, kPa to bar |

Static pressure sensors in ducts are the basis for the setpoints in [Static pressure reset](static-pressure-reset.html).

## Installation

- **Tubing.** Connect the high tube to the high port and the low to the low. Use short, unkinked tubing without leaks, and avoid low points where condensation can collect and block the line.
- **Tap location.** Place the duct static tap about two thirds of the way down the duct, in a straight section, away from fittings, so it senses pressure that represents the system. Use a static pressure probe pointed at right angles to the airflow so velocity does not add to the reading.
- **Reference.** A duct static sensor's low port is open to the space around the duct, so the room's pressure matters at very low ranges.
- **Water.** Use isolation and equalizing valves so the sensor can be zeroed and removed without draining the system, and keep it within its over-pressure rating; a surge can destroy the diaphragm.
- **Orientation.** Some low-range sensors read slightly differently when mounted at different angles, so mount in the orientation used for calibration.

## Zeroing and drift

At low ranges a small offset is a big percentage error, so the zero must be checked. Procedure: disconnect or equalize both ports so the sensor sees zero differential, read the output, and adjust or record the offset. Auto-zero sensors do this on a schedule by briefly connecting both ports together. Remember that temperature also changes the zero.

## Common faults

- **Reads negative or stuck.** Tubes reversed, disconnected, or crossed with another sensor's.
- **Reads high at zero flow.** A zero offset, or a pressure imbalance across the tap.
- **Noisy output.** Turbulent flow at the tap, a long tube, or an input filter that is too short.
- **Reading follows the building but not the system.** The reference port is in a space affected by building pressure.

See [Airflow measurement](airflow-measurement.html) for how the pressure is turned into flow.
