---
id: gmd20
type: product
title: "Vaisala GMD20 Series Duct CO2 Transmitters"
summary: "Duct-mount CO2 transmitters for ventilation control, with display, relay, and LonWorks options."
manufacturer: vaisala
productLine: vaisala-hvac-transmitters
category: sensor
protocols: []
status: current
review: needs-review
partNumbers:
  - number: GMD20
    description: Duct-mount CO2 transmitter
    source: https://www.iag.co.at/fileadmin/user_upload/product_documents/GMD20.en.pdf
  - number: GMD20D
    description: Duct-mount CO2 transmitter with display (relay output is standard on display units)
    source: https://www.iag.co.at/fileadmin/user_upload/product_documents/GMD20.en.pdf
  - number: GMI21
    description: Display and relay option for GMD20 (accessory)
    source: https://www.iag.co.at/fileadmin/user_upload/product_documents/GMD20.en.pdf
  - number: GMR20
    description: Relay output option (accessory)
    source: https://www.iag.co.at/fileadmin/user_upload/product_documents/GMD20.en.pdf
  - number: GML20
    description: LonWorks module with CO2 signal; not available when the display option is added (accessory)
    source: https://www.iag.co.at/fileadmin/user_upload/product_documents/GMD20.en.pdf
  - number: 19040GM
    description: Serial COM adapter (accessory)
    source: https://www.iag.co.at/fileadmin/user_upload/product_documents/GMD20.en.pdf
  - number: GM70
    description: Hand-held meter for field verification (accessory)
    source: https://www.iag.co.at/fileadmin/user_upload/product_documents/GMD20.en.pdf
sources:
  - https://www.iag.co.at/fileadmin/user_upload/product_documents/GMD20.en.pdf
related: [gmw90, lonworks]
---
From the GMD20 data sheet. Long-term stability is stated as under 5 % of range over 5 years. The data sheet is older than the GMW90 sheet, so confirm current availability with Vaisala.


## Applying the GMD20

This section is an overview drawn from the part-number descriptions above and the other pages in this wiki.

The GMD20 senses CO2 in a duct, so a single unit in a return duct gives a building-average or zone-group reading for demand-controlled ventilation. The base unit has an analog output; the accessories add options:

| Need | Add |
| :--- | :--- |
| Local display and relay output | GMD20D, or the GMI21 display and relay option |
| A relay output only | GMR20 |
| LonWorks connection | GML20 (not available with the display option) |
| Field verification | GM70 hand-held meter |

**Use.** The controller scales the analog signal to ppm; the range must match the transmitter's configuration, or the reading will be wrong by a fixed ratio; see [Analog signals](../concept/analog-signals.html). A return-duct sensor sees mixed air, so for room-level control use a wall unit such as the [GMW90](gmw90.html). Control strategies and placement notes are on [CO2 sensors](../concept/co2-sensors.html).

**Maintenance.** The data sheet recommends calibration every five years; verify against a reference gas on that interval. The page note says the data sheet is older than the GMW90 sheet, so confirm current availability with Vaisala. For LonWorks background see [LonWorks](../protocol/lonworks.html).
