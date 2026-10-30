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
