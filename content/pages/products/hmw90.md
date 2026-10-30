---
id: hmw90
type: product
title: "Vaisala HMW90 Series Humidity and Temperature Transmitters"
summary: "Wall-mount RH and temperature transmitters for indoor HVAC with current or voltage outputs and an optional visible display."
manufacturer: vaisala
productLine: vaisala-hvac-transmitters
category: sensor
protocols: []
status: current
review: needs-review
partNumbers:
  - number: HMW92
    description: Humidity and temperature transmitter, two current outputs (4-20 mA), display hidden under sliding cover
    source: https://www.iag.co.at/fileadmin/user_upload/product_documents/HMW90_Series_User_s_Guide_M211399EN-A_04.pdf
  - number: HMW92D
    description: Humidity and temperature transmitter, two current outputs (4-20 mA), visible display
    source: https://www.iag.co.at/fileadmin/user_upload/product_documents/HMW90_Series_User_s_Guide_M211399EN-A_04.pdf
  - number: HMW93
    description: Humidity and temperature transmitter, two voltage outputs (0-5 V or 0-10 V), relay, display hidden under sliding cover
    source: https://www.iag.co.at/fileadmin/user_upload/product_documents/HMW90_Series_User_s_Guide_M211399EN-A_04.pdf
  - number: HMW93D
    description: Humidity and temperature transmitter, two voltage outputs (0-5 V or 0-10 V), relay, visible display
    source: https://www.iag.co.at/fileadmin/user_upload/product_documents/HMW90_Series_User_s_Guide_M211399EN-A_04.pdf
sources:
  - https://www.iag.co.at/fileadmin/user_upload/product_documents/HMW90_Series_User_s_Guide_M211399EN-A_04.pdf
  - https://www.iag.co.at/fileadmin/user_upload/product_documents/HMW90_and_GMW90_Analog_Output_Models_Quick_Guide_M211398EN_04.pdf
related: [gmw90, hmd60, hmdw110, analog-signals, temperature-sensors]
---
Models and descriptions are from Table 3 of the HMW90 series user guide (M211399EN-A). Supported quantities include temperature, relative humidity, and dew point. Modbus-output models are not covered by the guides downloaded so far. Vaisala order forms use an 11-position configurable order code, which is separate from these series model names.


## Choosing a Model

This section is an overview drawn from the part-number descriptions above and the other pages in this wiki.

The first digits give the output type and the `D` suffix the display:

| Model | Outputs | Display |
| :--- | :--- | :--- |
| HMW92 | Two 4-20 mA current outputs | Hidden under a sliding cover |
| HMW92D | Two 4-20 mA current outputs | Visible |
| HMW93 | Two voltage outputs (0-5 V or 0-10 V), with a relay | Hidden under a sliding cover |
| HMW93D | Two voltage outputs (0-5 V or 0-10 V), with a relay | Visible |

**Choosing.** Use a current model where the wiring run is long or noisy, since a current loop is insensitive to wire resistance; use a voltage model where the controller input is voltage or a relay output is wanted. Choose the visible display where occupants or technicians should read the value, and the hidden display in public spaces. See [Analog signals](../concept/analog-signals.html).

**Placement and use.** Mount on an inside wall at breathing height, away from supply air and sunlight; see [Humidity sensors](../concept/humidity-sensors.html). The two outputs can carry humidity and temperature, or a derived quantity such as dew point, so check the configuration against the controller's input scaling. Modbus models are not covered by the guides read so far. For CO2 in the same style, see the [GMW90](gmw90.html).
