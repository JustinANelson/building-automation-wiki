---
id: co2-sensors
type: concept
title: "CO2 sensors and demand controlled ventilation"
summary: "NDIR carbon dioxide transmitters that let ventilation follow occupancy, with the Vaisala GMD20 and GMW90 as examples."
review: draft
related: [gmd20, gmw90, analog-signals, temperature-sensors, lonworks]
sources:
  - https://www.iag.co.at/fileadmin/user_upload/product_documents/GMD20.en.pdf
---
Carbon dioxide concentration in a room rises with the number of people breathing in it, so it is used as a proxy for occupancy. In **demand controlled ventilation (DCV)** the controller raises outdoor air flow when CO2 is high and cuts it when the space is empty, saving fan and conditioning energy.

**Measurement principle.** HVAC CO2 transmitters use non-dispersive infrared (NDIR) sensing. The Vaisala GMD20 data sheet describes a single-beam, dual-wavelength NDIR sensor: one wavelength is absorbed by CO2 and the other serves as a reference, which makes the reading stable against drift. Vaisala states that the sensor's temperature and flow dependence is negligible and that dust, water vapor and most chemicals do not affect accuracy.

**Typical figures (GMD20 duct unit, from its data sheet).**

| Item | Value |
| :--- | :--- |
| Nominal range | 0 to 2000 ppm (can be calibrated for 0 to 5000, 10 000 or 20 000 ppm) |
| Accuracy | plus or minus (2 % of range + 2 % of reading) |
| Response time (63 %) | 1 minute |
| Recommended calibration interval | 5 years |
| Outputs | 0 to 20 mA or 4 to 20 mA, and 0 to 10 V; relay and LonWorks options |

**Mounting.** A duct unit such as the GMD20 puts the sensor head inside the duct, where it measures the mixed or return air. A room unit such as the GMW90 measures the space directly. See [GMD20](../product/gmd20.html) and [GMW90](../product/gmw90.html).

**Wiring.** The analog outputs follow the usual conventions described in [Analog signals](analog-signals.html); the controller input range must be scaled to the transmitter range (for example 0 to 10 V representing 0 to 2000 ppm), or the ppm value it reports will be wrong.

> The sections below are general engineering practice, not taken from the Vaisala data sheet cited above. Check requirements against the applicable ventilation standard and the project specification.

## Why CO2 tracks occupancy

People exhale CO2 at a rate that depends mainly on body size and activity. Outdoor air typically holds around 400 to 450 ppm. In a space with a steady number of occupants and a steady outdoor air supply, the indoor concentration climbs toward a steady value above the outdoor level, and the size of that rise indicates the ventilation rate per person. CO2 is a good indicator of ventilation per occupant, not of air quality overall: it does not detect odours, VOCs, particles or humidity.

## Control strategies

- **Setpoint control.** The controller compares the measured CO2 with a setpoint, often around 800 to 1000 ppm absolute or a fixed rise above the outdoor reading, and raises the zone's outdoor air or airflow as the value climbs.
- **Zone-level DCV.** A VAV box controller resets its minimum airflow between a base minimum, which covers non-occupant sources, and a higher design minimum. See [VAV control](vav-control.html).
- **System-level DCV.** On a multi-zone air handler, the outdoor air damper or minimum airflow is reset from the critical zone or from a return-air sensor, so the air handler brings in enough outdoor air for the most demanding zone. See [Economizer control](economizer-control.html) for how the outdoor damper is shared with free cooling.
- **Differential measurement.** Comparing indoor with a measured outdoor reading adjusts for changes in the outdoor baseline and is more robust than a fixed absolute setpoint.

## Placement

Mount room sensors in the breathing zone, around 1.2 to 1.5 m (4 to 5 ft) above the floor, on an inside wall away from supply diffusers, doors, windows and exhaust, and where people will not breathe directly on them. A return-duct unit sees a mixed average; a room unit sees the local concentration. In a large space use several sensors and let the highest or the average drive the loop.

## Calibration and maintenance

NDIR sensors drift slowly, and some include an automatic baseline calibration that assumes the space reaches the outdoor concentration at least once in a period such as a week. That assumption fails in spaces occupied around the clock, so such sensors can drift low; check whether the feature can be switched off. Verify against a reference gas on the interval the manufacturer gives, such as the 5 years the GMD20 data sheet recommends, and sooner in critical spaces.

## Common faults

- Readings stuck at a constant value from wrong input scaling; see [Analog signals](analog-signals.html).
- Sensor placed in the supply stream, reading outdoor-air levels all day.
- DCV setpoint so low that outdoor air stays at design all day, saving nothing.
- Sensors never calibrated, so the setpoint no longer means what it was meant to.
