---
id: trane-symbio
type: product-line
title: Trane Symbio Equipment & System Controllers
summary: Trane's current BACnet-native controller family spanning Tracer SC+ system controllers and Symbio 210, 400b, 500, 700, and 800 equipment controllers.
manufacturer: trane
protocols: [bacnet, bacnet-ip, bacnet-mstp, modbus, modbus-rtu, lonworks]
status: current
review: verified
related: [trane-tracer-uc, tracer-sc-plus, symbio-210, symbio-500, symbio-700, symbio-800, tracer-tu]
sources:
  - https://www.trane.com/commercial/north-america/us/en/products-systems/smart-building-technology/symbio.html
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/controls/building-management/Tracer-SC/BAS-PRD038K-EN_08012022.pdf
  - https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/split-systems/odyssey-6-to-25-tons/ACC-APG001A-EN_06102020.pdf
---
Trane's **Symbio** family and **Tracer SC+** system controller form Trane's current BTL-listed BACnet control architecture:

- **Tracer SC+ System Controller** (`X13651695001`): Building-level supervisory controller with embedded Tracer Synchrony HTML5 UI, managing BACnet/IP, BACnet MS/TP, Air-Fi wireless (`BACnet/Zigbee`), and LonTalk trunks.
- **Symbio 800** (`X13651678002`): Factory-mounted programmable controller on Trane chillers (CenTraVac, Series R, Ascend) and large rooftop/air-handling units.
- **Symbio 700** (`MOD04045` / `MOD03107`): Factory-mounted controller on Precedent packaged rooftop units and Odyssey split systems (6 to 25 tons), featuring an onboard 2x16 backlit LCD, Bluetooth (BLE) service app pairing, and BACnet MS/TP, BACnet/IP, Air-Fi wireless, or LonTalk integration.
- **Symbio 500** (`BMUC500AAA0100010`): Programmable terminal and unitary controller for air handlers, blower coils, fan coils, unit ventilators, and water-source heat pumps.
- **Symbio 210 / 210e** (`BMSY210...`): Programmable single-duct VAV, bypass, and zone damper controller available in BACnet MS/TP (`Symbio 210`) and dual-port BACnet/IP (`Symbio 210e`) configurations.


### Choosing a Controller

This section is an overview drawn from the other pages in this wiki.

| Equipment | Controller |
| :--- | :--- |
| Building supervisor | [Tracer SC+](../product/tracer-sc-plus.html) |
| Chillers, large rooftops and air handlers | [Symbio 800](../product/symbio-800.html) |
| Packaged rooftops and split systems (6 to 25 tons) | [Symbio 700](../product/symbio-700.html) |
| Air handlers, fan coils, unit ventilators, water-source heat pumps | [Symbio 500](../product/symbio-500.html) |
| VAV, bypass and zone dampers | [Symbio 210](../product/symbio-210.html) (MS/TP) or 210e (dual-port IP) |

Because the controller is usually fitted at the factory, the equipment normally decides the model. The choice that remains for the project is the network: BACnet MS/TP, BACnet/IP, Air-Fi wireless or LonTalk, depending on the controller. On MS/TP trunks apply the usual rules; see [BACnet MS/TP](../protocol/bacnet-mstp.html).

**Service.** [Tracer TU](../product/tracer-tu.html) is the service tool, and the Symbio 700 also pairs with a Bluetooth service app. Keep a copy of each controller's configuration; see [Supervisory controllers](../concept/supervisory-controllers.html) on backup.

**Older controllers.** The [Tracer UC series](trane-tracer-uc.html) remains widely installed and shares the BACnet architecture, so Symbio and UC controllers can coexist on the same system.
