---
id: gmw90
type: product
title: "Vaisala GMW90 Series CO2, Temperature and Humidity Transmitters"
summary: "Wall-mount CARBOCAP CO2 transmitters for demand-controlled ventilation with voltage, current, or Modbus RTU output."
manufacturer: vaisala
productLine: vaisala-hvac-transmitters
category: sensor
protocols: [modbus-rtu]
status: current
review: needs-review
partNumbers:
  - number: GMW93
    description: CO2 + T; 3-wire voltage output
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW93D
    description: CO2 + T; 3-wire voltage output, with display
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW94
    description: CO2 + T; 3-wire current output
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW94D
    description: CO2 + T; 3-wire current output, with display
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW93R
    description: CO2 + T + RH; 3-wire voltage output
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW93RD
    description: CO2 + T + RH; 3-wire voltage output, with display
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW93RA
    description: CO2 + T + RH; 3-wire voltage output, with display and CO2 indicator LEDs
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW94R
    description: CO2 + T + RH; 3-wire current output
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW94RD
    description: CO2 + T + RH; 3-wire current output, with display
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW95
    description: CO2 + T; Modbus RTU output
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW95D
    description: CO2 + T; Modbus RTU output, with display
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW95R
    description: CO2 + T + RH; Modbus RTU output
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW95RD
    description: CO2 + T + RH; Modbus RTU output, with display
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW90
    description: CO2 + T; analog or Modbus RTU output (configurable)
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - number: GMW90R
    description: CO2 + T + RH; analog or Modbus RTU output (configurable)
    source: https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
sources:
  - https://www.iag.co.at/fileadmin/user_upload/GMW90.en_2022.pdf
  - https://www.iag.co.at/fileadmin/user_upload/product_documents/HMW90_and_GMW90_Analog_Output_Models_Quick_Guide_M211398EN_04.pdf
related: [gmd20, hmw90, analog-signals, modbus-rtu]
---
Model table read from the 2022 GMW90 data sheet. R means the model also measures relative humidity and D means it has a display. Output type depends on the model digit: 3 is voltage, 4 is current, 5 is Modbus RTU.


## Choosing a Model

This section is an overview drawn from the part-number descriptions above and the other pages in this wiki.

The model number encodes what the unit measures and how it outputs:

| Digit or letter | Meaning |
| :--- | :--- |
| `3`, `4`, `5` | Output type: 3 is voltage, 4 is current, 5 is Modbus RTU |
| `R` | Also measures relative humidity |
| `D` | Has a display |
| `A` | Display with CO2 indicator LEDs |

So a GMW93 gives CO2 and temperature on a 3-wire voltage output, a GMW94 the same on a current output, and the R models add humidity.

**Choosing.** Use a voltage or current model for a controller with an analog input, and a Modbus model where the controller or a gateway has a Modbus port; see [Analog signals](../concept/analog-signals.html) and [Modbus RTU](../protocol/modbus-rtu.html). Choose the R models where the humidity is also needed, for example for a dew point interlock, and a display where occupants or technicians should read the value. The indicator-LED version suits public spaces where a visible ventilation cue is wanted.

**Application.** A wall unit measures the space directly, so use it for room-level demand-controlled ventilation; for building or air-handler level control, a return-duct unit such as the [GMD20](gmd20.html) is the alternative. Placement, control strategies and calibration are described on [CO2 sensors](../concept/co2-sensors.html), and the humidity side on [Humidity sensors](../concept/humidity-sensors.html).
