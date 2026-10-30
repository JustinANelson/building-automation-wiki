---
id: symbio-500
type: product
title: Trane Symbio 500 Equipment Controller
summary: Symbio controller for air handling and water source heat pump equipment, with a pre-programmed RTU/heat pump variant.
manufacturer: trane
productLine: trane-symbio
category: packaged-unit-controller
protocols: [bacnet, modbus]
status: current
review: draft
partNumbers:
  - number: BMSY500AAA0100011
    description: Symbio 500 (per search summary of Trane data sheet)
  - number: BMSY500UAA0100011
    description: Symbio 500 variant (U in the code may denote a U.S.-made version, as on UC400; unconfirmed)
  - number: BMSY500ABA0100011
    description: Symbio 500 pre-programmed for RTU or heat pump
sources:
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Product%20Data/BAS-PRD057D-EN_10072025.pdf
  - https://www.trane.com/commercial/north-america/us/en/products-systems/smart-building-technology/symbio.html
related: [symbio-800, uc400]
---
Order numbers come from a search summary of the October 2025 Trane data sheet (believed to be BAS-PRD057D-EN). They
were not read from the PDF directly, so verify before use. Protocols: BACnet MS/TP, Air-Fi (BACnet/Zigbee), BACnet/IP,
and Modbus server and client per the Symbio page.
