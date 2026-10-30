---
id: differential-pressure-sensors
type: concept
title: "Differential pressure sensors"
summary: "How a small differential pressure sensor inside a VAV compact controller turns a pressure drop into airflow, and how the nominal-flow parameter scales it."
review: draft
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
