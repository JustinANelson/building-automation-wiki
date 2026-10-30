---
id: vaisala
type: manufacturer
title: Vaisala
summary: Finnish manufacturer of high-precision humidity, temperature, carbon dioxide, and meteorological instruments.
review: verified
related:
  - co2-sensors
  - gmd20
  - gmw90
  - hmd60
  - hmdw110
  - hmw90
  - humidity-sensors
  - temperature-sensors
  - vaisala-hvac-transmitters
  - vaisala-industrial-transmitters
sources:
  - https://www.vaisala.com/
  - https://www.vaisala.com/sites/default/files/documents/VIM-G-HVAC-Product-Brochure-B211277EN.pdf
---

## Company Overview

**Vaisala Oyj** (headquartered in Vantaa, Finland) was founded in 1936 by Professor Vilho Väisälä, who developed the world's first modern radiosonde for upper-air weather observations. Today a publicly listed international corporation, Vaisala is the global benchmark for high-accuracy meteorological, environmental, and industrial measurement instruments.

## Landmark Sensor Innovations

Vaisala's reputation across building automation and industrial process engineering stems from three patented sensor breakthroughs:

1. **HUMICAP® Relative Humidity Sensor (1973)**: The world's first capacitive thin-film polymer humidity sensor. The HUMICAP element consists of a glass substrate, a thin lower electrode, an active polymer thin film that absorbs water molecules from surrounding air, and a porous upper electrode. As relative humidity changes, the polymer dielectric constant shifts linearly, providing high measurement stability, low hysteresis, and resilience against aggressive airborne chemicals.
2. **CARBOCAP® Carbon Dioxide Sensor**: Single-beam, dual-wavelength non-dispersive infrared ($CO_2$) sensor featuring an electrically tunable micro-machined silicon **Fabry-Pérot Interferometer (FPI)**. By switching optical filter transmission between $4.26\ \mu\text{m}$ ($CO_2$ absorption) and $3.9\ \mu\text{m}$ (reference), CARBOCAP eliminates calibration drift caused by optical fouling or light-source aging, making it ideal for demand-controlled ventilation (DCV) in spaces with 24/7 occupancy.
3. **DRYCAP® Dewpoint Sensor**: Incorporates a patented auto-calibration sequence that heats the sensor periodically to measure and compensate for zero-drift, enabling continuous dewpoint monitoring down to $-80\text{ °C}$ (`-112 °F`) in compressed air lines and industrial desiccant dryers.

## Product Portfolio in Building Automation

- **[Vaisala HVAC Transmitters](../product-line/vaisala-hvac-transmitters.html)**: Wall-mounted ([HMW90](../product/hmw90.html), [GMW90](../product/gmw90.html)), duct-mounted ([HMD60](../product/hmd60.html), [HMDW110](../product/hmdw110.html), [GMD20](../product/gmd20.html)), and outdoor weather transmitters ([HMS110](../product-line/vaisala-hvac-transmitters.html)) for economizer changeover, chilled beam dewpoint interlocks, and green building air quality compliance. Backed by a standard **5-year warranty**.
- **[Vaisala Industrial Transmitters](../product-line/vaisala-industrial-transmitters.html)**: Heavy-duty instruments (including the HMT330 Series and modern Indigo modular family) with IP65/NEMA 4 cast-aluminum housings, wide temperature ranges (`-70 to +180 °C`), chemical purge heaters, and traceable ISO 17025 calibration certificates for pharmaceutical cleanrooms and data centers.
- **Weather Stations and Handheld Calibrators**: Multi-parameter weather sensors (WXT530 series) and portable reference calibrators (HM70, GM70) for field verification and calibration of building automation sensors.


## Choosing a Vaisala Transmitter

This section is an overview drawn from the product-line and concept pages in this wiki.

**By measurement.** For relative humidity and temperature in a room, duct or outdoors, use the HVAC range: wall units like the HMW90, duct units like the HMD60 and HMDW110, and the combined CO2, humidity and temperature GMW90 and GMD20 units. For cleanrooms, process areas or harsh environments, use the industrial range, such as the HMT330 with its warmed probe and chemical purge options. See [Humidity sensors](../concept/humidity-sensors.html) and [CO2 sensors](../concept/co2-sensors.html).

**By signal.** Most models offer 4-20 mA or voltage outputs, and some offer Modbus RTU, BACnet or LonWorks, depending on the model. Analog outputs must be scaled in the controller to the transmitter's configured range; digital outputs need a map and the right serial settings. See [Analog signals](../concept/analog-signals.html), [Modbus RTU](../protocol/modbus-rtu.html) and [LonWorks](../protocol/lonworks.html).

**By derived value.** A transmitter that also calculates dew point or enthalpy saves two inputs and keeps the calculation consistent, for example in a chilled beam dew point interlock or an enthalpy economizer.

**Maintenance.** Humidity and CO2 sensors drift slowly. Plan periodic checks against a reference, use the replaceable calibration module where the model offers one, and replace or purge sensors in contaminated air. Mounting and placement notes are on the concept pages.
