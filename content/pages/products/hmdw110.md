---
id: hmdw110
type: product
title: "Vaisala HMDW110 Series Humidity and Temperature Transmitters"
summary: "Cost-efficient IP65 RH and temperature transmitters for wall, duct, and outdoor mounting with 4-20 mA or Modbus RTU output."
manufacturer: vaisala
productLine: vaisala-hvac-transmitters
category: sensor
protocols: [modbus-rtu]
status: current
review: needs-review
partNumbers:
  - number: HMW110
    description: Wall mount, RH+T; 2-wire current output or Modbus RTU (configurable model); IP65
    source: https://www.esis.com.au/wp/wp-content/uploads/2019/01/HMDW110-Datasheet.pdf
  - number: HMW112
    description: Wall mount, RH+T; 2-wire current output; IP65
    source: https://www.esis.com.au/wp/wp-content/uploads/2019/01/HMDW110-Datasheet.pdf
  - number: HMD110
    description: Duct mount, RH+T; 2-wire current output or Modbus RTU (configurable model); IP65
    source: https://www.esis.com.au/wp/wp-content/uploads/2019/01/HMDW110-Datasheet.pdf
  - number: HMD112
    description: Duct mount, RH+T; 2-wire current output; IP65
    source: https://www.esis.com.au/wp/wp-content/uploads/2019/01/HMDW110-Datasheet.pdf
  - number: HMS110
    description: Outdoor, RH+T; 2-wire current output or Modbus RTU (configurable model); radiation shield; IP65
    source: https://www.esis.com.au/wp/wp-content/uploads/2019/01/HMDW110-Datasheet.pdf
  - number: HMS112
    description: Outdoor, RH+T; 2-wire current output; radiation shield; IP65
    source: https://www.esis.com.au/wp/wp-content/uploads/2019/01/HMDW110-Datasheet.pdf
sources:
  - https://www.esis.com.au/wp/wp-content/uploads/2019/01/HMDW110-Datasheet.pdf
related: [hmw90, hmd60, gmw90]
---
Models are from the HMDW110 data sheet. The 110 models are delivered with customer-specific output settings, including calculated humidity parameters and special scaling; the 112 models are the standard current-output versions. The data sheet also lists accessories and spare parts with their own order codes; those are not transcribed here.


## Choosing a Model

This section is an overview drawn from the part-number descriptions above and the other pages in this wiki.

The first letters give the mounting and the last digit gives the output:

| Mounting | 110 (configurable) | 112 (standard current output) |
| :--- | :--- | :--- |
| Wall | HMW110 | HMW112 |
| Duct | HMD110 | HMD112 |
| Outdoor, with radiation shield | HMS110 | HMS112 |

The 110 models come with customer-specific output settings, including calculated humidity parameters and special scaling, and can use Modbus RTU as well as current output. The 112 models are the standard 4-20 mA versions. Use a 112 where a controller takes a standard analog input; use a 110 where Modbus or a calculated value such as dew point is needed.

**Use.** The outdoor model, in its radiation shield, supplies the outdoor humidity and temperature for enthalpy economizer changeover, see [Economizer control](../concept/economizer-control.html). Duct and wall models follow the placement rules on [Humidity sensors](../concept/humidity-sensors.html). Check the scaling at both ends of the range, see [Analog signals](../concept/analog-signals.html); for Modbus, see [Modbus RTU](../protocol/modbus-rtu.html).

The older [HMD60](hmd60.html) and [HMW90](hmw90.html) are alternatives with a different feature set.
