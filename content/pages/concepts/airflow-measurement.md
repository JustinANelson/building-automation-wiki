---
id: airflow-measurement
type: concept
title: "Airflow measurement and pressure-independent control"
summary: "Three ways VAV and laboratory controllers know airflow: a differential-pressure sensor, a velocity sensor, or a mechanical venturi valve that needs no measurement."
review: draft
related: [differential-pressure-sensors, vav-control, celeris-valve, cscp-valve, traccel-valve, phoenix-pbc, gdb181-1e-3]
sources:
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-MKT-0525-CSCP-Venturi-Valves.pdf
  - https://sid.siemens.com/v/u/A6V10445888
  - https://sid.siemens.com/v/u/A6V10356040
---
Controlling airflow in a duct means either measuring it or using a device whose flow does not depend on duct pressure. This wiki documents three approaches.

| Approach | Example | How flow is known |
| :--- | :--- | :--- |
| Differential pressure | Siemens G..B181 compact controller | A pressure sensor reads the pressure across a flow pick-up in the box; see [Differential pressure sensors](differential-pressure-sensors.html) |
| Air velocity sensor | Siemens BACnet PTEC | An internal velocity sensor, calibrated periodically, automatically or manually; see [VAV terminal box control](vav-control.html) |
| Mechanical venturi valve | Phoenix Controls venturi valves | No measurement: a spring-loaded cone holds flow constant as static pressure changes |

**Phoenix venturi valves.** The Phoenix Controls CSCP data sheet (MKT-0525, Rev. B) describes a mechanically pressure-independent internal cone and spring assembly. When static pressure is low, less force acts on the cone and the spring extends it; as pressure rises the spring compresses and the cone moves into the venturi, keeping flow at the set value. The data sheet gives these figures:

- Accuracy of plus or minus 5 % of setpoint at any flow and any pressure within the rated range.
- Medium-pressure valves are pressure independent over a 0.3 to 3.0 in. WC (75 to 750 Pa) drop; low-pressure valves over 0.1 to 3.0 in. WC (25 to 750 Pa). The 5 % accuracy is not guaranteed in the lowest part of each range (0.3 to 0.6 in. WC for medium, 0.1 to 0.3 in. WC for low).
- Factory characterization on third-party validated air stations, so little field balancing is needed, and no straight duct runs are required before or after the valve.
- Turndown up to 20:1; a single 6 in. valve spans 30 to 350 CFM.
- High-speed actuators respond in under 1 second; standard speed is 40 to 90 seconds.

Because the valve itself regulates flow, the actuator only changes the setpoint position. The valve's position is converted to a flow using characterization data held in the actuator control module or controller; see [CSCP valve](../product/cscp-valve.html) and [Programmable BACnet Controller](../product/phoenix-pbc.html).

**Choosing.** Pressure- or velocity-based measurement suits ordinary comfort VAV where cost is low. Venturi valves are used where accuracy, fast response and little maintenance matter, such as laboratories and healthcare.
