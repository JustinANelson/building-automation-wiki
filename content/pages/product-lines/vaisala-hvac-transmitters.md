---
id: vaisala-hvac-transmitters
type: product-line
title: Vaisala HVAC Transmitters
summary: High-accuracy wall, duct, and outdoor humidity, temperature, and carbon dioxide transmitters with HUMICAP and CARBOCAP sensor technologies.
manufacturer: vaisala
category: sensor
protocols: []
status: current
review: verified
related:
  - co2-sensors
  - economizer-control
  - energy-conservation-strategies
  - gmd20
  - gmw90
  - hmd60
  - hmdw110
  - hmw90
  - humidity-sensors
  - temperature-sensors
  - vaisala
  - vaisala-industrial-transmitters
sources:
  - https://xdevs.com/doc/Vaisala/GM70/HVAC-Product-Brochure-B211277EN.pdf
  - https://www.iag.co.at/fileadmin/user_upload/product_documents/HMW90_Series_User_s_Guide_M211399EN-A_04.pdf
  - https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - https://www.iag.co.at/fileadmin/user_upload/product_documents/GMD20.en.pdf
  - https://www.esis.com.au/wp/wp-content/uploads/2019/01/HMDW110-Datasheet.pdf
---

## Overview

The **Vaisala HVAC Transmitter** product family encompasses wall-mounted, duct-mounted, and outdoor environmental sensors engineered for demand-controlled ventilation (DCV), economizer changeover control, cleanrooms, and building automation systems. Documented in Vaisala catalogue `VIM-G-HVAC-Product-Brochure-B211277EN`, Vaisala's building automation transmitters carry a standard **5-year warranty** and are renowned for long-term calibration stability and measurement accuracy.

## Patented Sensor Technologies

- **HUMICAP® Humidity Sensing**: Capacitive thin-film polymer sensor invented by Vaisala. Changes capacitance in direct proportion to surrounding relative humidity, delivering $\pm 1.5\text{–}2.5\%\text{ RH}$ accuracy, low hysteresis, and high resistance to chemical contamination and airborne dust.
- **CARBOCAP® Carbon Dioxide Sensing**: Single-beam, dual-wavelength non-dispersive infrared (NDIR) sensor equipped with an electrically tunable silicon **Fabry-Pérot Interferometer (FPI)** filter. By alternating between the $CO_2$ absorption wavelength ($4.26\ \mu\text{m}$) and a reference non-absorbing wavelength ($3.9\ \mu\text{m}$), the sensor continuously compensates for optical aging, dust accumulation, and lamp intensity degradation without requiring assumptions about unoccupied baseline air.

## Transmitter Series by Application

### 1. Room Transmitters
- **[HMW90 Series](../product/hmw90.html)**: Premium room humidity and temperature transmitters delivered with a traceable calibration certificate. Features a slide-out electronics tray, DIP-switch configuration, and interchangeable calibrated sensor modules.
- **[GMW90 Series](../product/gmw90.html)**: Combined wall-mount $CO_2$, relative humidity, and temperature transmitter for ASHRAE 62.1 demand-controlled ventilation. Supports BACnet MS/TP, Modbus RTU, and analog `0–10 V` / `4–20 mA` outputs.
- **TMW90 Series**: Room temperature transmitters with matching architectural styling.
- **HMW80 / GMW80 Series**: Cost-effective general-purpose wall transmitters with IP30 enclosures and optional digital displays.

### 2. Duct-Mount Transmitters
- **[HMD60 Series](../product/hmd60.html)**: Heavy-duty duct humidity and temperature transmitters with all-metal IP65 probe bodies, dual `4–20 mA` loop-powered outputs, and field-accessible calibration trimmers.
- **[HMDW110 Series](../product/hmdw110.html)**: High-precision duct and IP65 wet-location transmitters supporting derived psychrometric variables (dewpoint, wet-bulb, enthalpy) for airside economizer high-limit changeover.
- **[GMD20 Series](../product/gmd20.html)**: Duct-mount CARBOCAP® $CO_2$ transmitters sampling return air ducts for centralized building occupancy ventilation control.

### 3. Outdoor Weather Transmitters
- **HMS110 Series**: Outdoor humidity and temperature transmitters equipped with an integrated multi-plate solar radiation and precipitation shield, protecting sensors against direct solar gain and wind-driven rain for accurate economizer and cooling tower wet-bulb approach resets.


## Selecting a Transmitter

This section is an overview drawn from the other pages in this wiki.

| Need | Model family | Notes |
| :--- | :--- | :--- |
| Room humidity and temperature | HMW90 | Calibrated, with a replaceable sensor module |
| Room CO2, humidity and temperature | GMW90 | For demand-controlled ventilation; analog or BACnet MS/TP and Modbus RTU |
| Duct humidity and temperature | HMD60, HMDW110 | HMDW110 also gives dew point, wet-bulb and enthalpy |
| Duct or return-air CO2 | GMD20 | Samples a representative air stream |
| Outdoor conditions | HMS110 | Includes a radiation shield |
| Budget room units | HMW80, GMW80 | General purpose |

**Placement.** Put wall units in the breathing zone away from supply air and outside walls, duct probes in well-mixed air, and outdoor sensors shaded; see [Humidity sensors](../concept/humidity-sensors.html) and [CO2 sensors](../concept/co2-sensors.html).

**Signals.** Analog models need the controller span matched to the configured range; loop-powered 4-20 mA units need an adequate loop supply. See [Analog signals](../concept/analog-signals.html).

**Calibration.** Plan a periodic check, and use the traceable calibration certificate as the baseline. CO2 sensors in around-the-clock spaces need attention to automatic baseline correction.
