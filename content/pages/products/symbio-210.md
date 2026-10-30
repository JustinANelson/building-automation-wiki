---
id: symbio-210
type: product
title: Trane Symbio 210 & 210e Programmable VAV Controller (BMSY210)
summary: BTL-listed BACnet MS/TP (Symbio 210) and dual-port BACnet/IP (Symbio 210e) programmable single-duct VAV, bypass, and zone damper controller with UL 864 UUKL smoke control listing.
manufacturer: trane
productLine: trane-symbio
category: vav-box
protocols: [bacnet, bacnet-ip, bacnet-mstp]
status: current
review: verified
images:
  - path: images/trane/symbio-210.svg
    alt: Technical diagram of Trane Symbio 210 / 210e VAV controller (BMSY210) showing differential pressure sensor, Trane/Belimo actuator mount, BACnet MS/TP or dual IP ports, and I/O terminals
    source: Own work (BASWiki technical diagram based on Trane Symbio 210 Product Data BAS-PRD043A-EN)
    license: CC0-1.0
partNumbers:
  - number: BMSY210AAA0100011
    description: Symbio 210 BACnet MS/TP programmable VAV controller with differential pressure transducer, no actuator (board only)
    source: https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
  - number: BMSY210AAA0T00011
    description: Symbio 210 BACnet MS/TP programmable VAV controller with differential pressure transducer and Trane direct-coupled damper actuator
    source: https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
  - number: BMSY210AAA0B00011
    description: Symbio 210 BACnet MS/TP programmable VAV controller with differential pressure transducer and Belimo direct-coupled damper actuator
    source: https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
  - number: BMSY210ACA0T10011
    description: Symbio 210 BACnet MS/TP Bypass Damper Controller with static pressure transducer and Trane actuator
    source: https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
  - number: BMSY210VTA0T01011
    description: Symbio 210 BACnet MS/TP pressure-dependent Zone Damper Controller (VVT) with Trane actuator (no flow sensor)
    source: https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
  - number: BMSY210AAA0T00111
    description: Symbio 210e dual-port BACnet/IP programmable VAV controller with differential pressure transducer and Trane actuator
    source: https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
  - number: BMSY210AAA0B00111
    description: Symbio 210e dual-port BACnet/IP programmable VAV controller with differential pressure transducer and Belimo actuator
    source: https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
  - number: BMSY210AAA0100111
    description: Symbio 210e dual-port BACnet/IP programmable VAV controller with differential pressure transducer, no actuator (board only)
    source: https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
  - number: "501897940100"
    description: Trane metal VAV controls enclosure for field-mounting Symbio 210 / 210e controllers
    source: https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
  - number: WIR06493
    description: Actuator wiring harness for Symbio 210 / 210e VAV controller
    source: https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
related: [trane-symbio, symbio-500, tracer-sc-plus, uc400, tracer-tu]
sources:
  - https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
---
The **Trane Symbio 210 and Symbio 210e** (`BMSY210`, Product Data `BAS-PRD043A-EN`, June 2021) is Trane's current programmable single-duct VAV terminal unit controller, shipped factory-mounted on Trane VariTrane VAV boxes or field-applied as a retrofit replacement for legacy Tracer VV550 and UC210 controllers.

### Hardware & I/O Specifications
- **Onboard I/O Points**:
  - **1 Differential Pressure Input**: `0 to 2 in. WC` (`0 to 500 Pa`) internal airflow pressure sensor (or static pressure sensor on `BMSY210ACA` bypass models).
  - **3 Analog Temperature Inputs (`AI1`–`AI3`)**: `200 Ω to 100 kΩ` thermistors (space temperature, setpoint, discharge air temperature).
  - **2 Universal Inputs (`UI1`–`UI2`)**: Configurable for `0–10 VDC` (`CO2`, humidity, occupancy) or `10 kΩ` thermistors.
  - **5 Binary Triac Outputs (`BO1`–`BO5`)**: 24 VAC optically isolated triac outputs (`BO1`/`BO2` drive the 3-wire floating VAV damper actuator; `BO3` controls the series/parallel VAV fan; `BO4`/`BO5` control staged electric reheat or a floating hot-water reheat valve).
  - **2 Analog Outputs (`AO1`–`AO2`)**: `0–10 VDC` outputs for ECM fan speed and modulating hot-water or SCR electric reheat.
- **Networking & Service Tools**:
  - **Symbio 210**: Native **BACnet MS/TP** (`RS-485`), optional **Air-Fi Wireless (`BACnet/Zigbee`)**.
  - **Symbio 210e**: Built-in **2-port Ethernet switch** for daisy-chained **BACnet/IP**.
  - **Bluetooth Low Energy (`BLE`) & Tracer TU**: Supports wireless commissioning via the Trane mobile app and custom **TGP2** programming via **Tracer TU** (`X13651595010`). Listed to **UL 864 UUKL** for smoke control systems.
