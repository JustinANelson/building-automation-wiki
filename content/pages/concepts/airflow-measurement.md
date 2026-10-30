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

> The sections below are general airflow-measurement practice, not taken from the data sheets cited above.

## The relationship between velocity and flow

Volumetric flow is velocity times duct area: Q = A x V. Measuring flow means measuring average velocity across the duct, which is not uniform: it is slow near the walls and faster near the centre, and bends, fans and dampers distort the profile.

A **pitot tube** or **flow station** measures velocity pressure, the difference between total and static pressure. In inch-pound units with standard air, velocity in feet per minute is approximately 4005 times the square root of the velocity pressure in inches of water column. Because velocity pressure is proportional to the square of velocity, a flow sensor sees a very small signal at low flow: halving the airflow cuts the pressure to a quarter. That is why low-flow accuracy is the hard part of VAV control, and why box minimum airflows are set with the sensor's limits in mind.

## Sensing methods

| Method | How it works | Strengths and limits |
| :--- | :--- | :--- |
| Multi-point averaging probe (cross, ring or flow ring) | Several total-pressure and static-pressure ports averaged into one differential signal | Common in VAV boxes; senses the average velocity, but small ports can foul and the signal is small at low flow |
| Orifice plate or venturi inlet | A fixed restriction creates a pressure drop that depends on flow | A strong, stable signal; venturi inlets recover most of the pressure and are less sensitive to straight-run |
| Thermal (hot-wire) velocity sensor | A heated element is cooled by airflow; the power or temperature change gives velocity | Good at low velocity, no tubing; needs periodic calibration and can foul in dirty air |
| Vortex, ultrasonic | Shedding frequency or transit time gives velocity | Used on larger measuring stations and in laboratory work; costly |
| Mechanical venturi valve | Spring-loaded cone regulates flow | No measurement; see above |

## Installation points

- **Straight run.** Most measuring stations need a length of straight duct upstream and downstream, often several duct diameters, to give a usable velocity profile. Venturi valves are the exception, as the table above says.
- **Inlet conditions.** A tight elbow, a flexible duct with a sharp bend, or a damper right at the inlet changes the flow profile and shifts the box's measurement away from its factory calibration. The standard remedy is a **K-factor or flow correction** found by balancing against a traverse.
- **Tubing.** Pressure-based sensors use two tubes. Keep them short, free of kinks and leaks, and connected high to high and low to low; a reversed or leaking tube gives a wrong or negative reading.
- **Temperature and altitude.** Standard-air figures assume sea level and normal temperature. Heated or high-altitude air is less dense and reads differently unless the controller corrects for it.

## Calibration and balancing

A new system is balanced by a pitot traverse or a calibrated hood: measured flow is compared with the controller's reading at the minimum, maximum and an intermediate point, and the box's K-factor or gain is adjusted until they agree. Balancing at only one flow hides a zero error, which is the most common source of low-flow mistakes. Periodic zero checks, as described on [Differential pressure sensors](differential-pressure-sensors.html), keep a pressure-based sensor honest.

## Where it matters most

Comfort VAV zones tolerate several percent error. Laboratories, operating rooms and isolation rooms do not, because the room pressure depends on the difference between supply and exhaust flow. For that reason these spaces use fast, accurate flow devices and often separate offset tracking; see [Laboratory and fume hood control](laboratory-and-fume-hood-control.html).
