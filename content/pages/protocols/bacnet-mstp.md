---
id: bacnet-mstp
type: protocol
title: "BACnet MS/TP"
summary: "BACnet master-slave/token-passing data link over RS-485 twisted pair, the usual field bus between controllers."
review: draft
related: [bacnet, bacnet-ip, rs-485]
sources:
  - https://bluerithm.com/bacnet-technical-summary/
  - https://softwaretoolbox.com/resources/what-is-bacnet
---
> The BACnet standard (ASHRAE 135, ISO 16484-5) is paywalled and was not read for this page. This summary is from secondary sources and general knowledge; confirm details against the standard or a device PICS.

MS/TP runs on a two-wire RS-485 bus. Master nodes pass a token and may initiate requests; slave nodes only reply. MAC addresses 0-127 are for masters. Typical rates are 9600 to 76800 baud, with 115200 supported by some devices, and every device on a trunk must use the same rate. A segment is commonly limited to about 1200 m (4000 ft) and 32 standard unit loads, with line termination at both ends and a shared signal common.

See [RS-485](../concept/rs-485.html) for wiring practice. Trane Symbio and UC400 controllers, Viconics room controllers, and many VAV controllers are MS/TP devices.

