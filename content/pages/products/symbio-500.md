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
review: needs-review
partNumbers:
  - number: BMSY500AAA0100011
    description: Symbio 500 programmable controller
    source: https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Installation/BAS-SVN231E-EN_06302026.pdf
  - number: BMSY500UAA0100011
    description: Symbio 500 programmable controller, UL-864/UUKL (smoke control) version
    source: https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Installation/BAS-SVN231E-EN_06302026.pdf
  - number: BMSY500ABA0100011
    description: Symbio 500 with RTU or heat pump program
    source: https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Installation/BAS-SVN234A-EN_06102023.pdf
sources:
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Installation/BAS-SVN231E-EN_06302026.pdf
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Installation/BAS-SVN234A-EN_06102023.pdf
  - https://www.trane.com/commercial/north-america/us/en/products-systems/smart-building-technology/symbio.html
related: [symbio-800, uc400, tracer-tu]
---
Order numbers and descriptions read directly from the Trane installation instructions BAS-SVN231E-EN (June 2026) and
BAS-SVN234A-EN (2023). The data sheet BAS-PRD057D-EN and the IOM BAS-SVX090 were listed by search engines but return 404
on the Trane eLibrary (revisions appear to be superseded), so they are not in the document library yet. Protocols per
the Symbio page: BACnet MS/TP, Air-Fi (BACnet/Zigbee), BACnet/IP, and Modbus server and client.


## Applying the Symbio 500

This section is an overview drawn from the part-number descriptions above and the other pages in this wiki.

The Symbio 500 is Trane's programmable controller for air handlers, blower coils, fan coils, unit ventilators and water-source heat pumps. The three order numbers differ in what the controller has loaded or is listed for:

| Order number | Use |
| :--- | :--- |
| `BMSY500AAA0100011` | General programmable controller; the sequence is loaded or programmed for the unit |
| `BMSY500UAA0100011` | The UL 864 UUKL smoke-control version, for systems that must carry that listing |
| `BMSY500ABA0100011` | Pre-loaded with an RTU or heat pump program |

Choose the pre-programmed variant when the unit is a standard rooftop or heat pump, since the tested sequence reduces commissioning. Choose the UUKL version only where a smoke-control system needs it, and apply it as Trane's application guide requires.

**Networks.** The page note lists BACnet MS/TP, Air-Fi wireless, BACnet/IP and Modbus (server and client). Pick the one that matches the supervisory system; see [BACnet MS/TP](../protocol/bacnet-mstp.html), [BACnet/IP](../protocol/bacnet-ip.html) and [Modbus](../protocol/modbus.html).

**Related.** See [Trane Symbio](../product-line/trane-symbio.html) for the family, [Heat pumps](../concept/heat-pumps.html) for typical heat pump sequences and [Tracer TU](tracer-tu.html) for the service tool.
