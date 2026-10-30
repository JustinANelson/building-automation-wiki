---
id: tracer-sc-plus
type: product
title: Trane Tracer SC+ System Controller
summary: Trane's BTL-listed BACnet Building Controller (B-BC) supervisory panel with embedded Tracer Synchrony HTML5 web UI, managing BACnet/IP, BACnet MS/TP, Air-Fi wireless, and LonTalk networks.
manufacturer: trane
productLine: trane-symbio
category: field-panel
protocols: [bacnet, bacnet-ip, bacnet-sc, bacnet-mstp, modbus, modbus-rtu, modbus-tcp, lonworks]
status: current
review: verified
images:
  - path: images/trane/tracer-sc-plus.svg
    alt: Technical diagram of Trane Tracer SC+ System Controller (X13651695001) showing dual Ethernet ports, dual RS-485 MS/TP links, USB LonTalk U60 port, and Tracer Synchrony UI
    source: Own work (BASWiki technical diagram based on Trane Tracer SC+ Product Data BAS-PRD038K-EN)
    license: CC0-1.0
partNumbers:
  - number: X13651695001
    description: Tracer SC+ System Controller base unit with Tracer Synchrony HTML5 web UI, 2 Ethernet ports, and 2 RS-485 MS/TP / Modbus ports
    source: https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/controls/building-management/Tracer-SC/BAS-PRD038K-EN_08012022.pdf
  - number: X13651698001
    description: Echelon U60 FT-10 USB LonTalk Interface Module for Tracer SC+
    source: https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/controls/building-management/Tracer-SC/BAS-PRD038K-EN_08012022.pdf
related: [trane-symbio, trane-tracer-uc, symbio-210, symbio-500, symbio-700, symbio-800, uc400, tracer-tu]
sources:
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/controls/building-management/Tracer-SC/BAS-PRD038K-EN_08012022.pdf
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Sales/BAS-SLB086-EN_04202022.pdf
---
The **Trane Tracer SC+ System Controller** (`X13651695001`, Product Data `BAS-PRD038K-EN` and Brochure `BAS-SLB086-EN`) is Trane's building-level supervisory automation controller and plant manager, coordinating Trane **Symbio 210 / 500 / 700 / 800** and **Tracer UC400** controllers as well as third-party BACnet, Modbus, and LonTalk devices.

### Hardware & System Capabilities
- **Processor & Embedded Tracer Synchrony Web UI**: NXP `i.MX6 SoloX` 1 GHz ARM Cortex-A9 processor with 1 GB DDR3 RAM and 8 GB eMMC flash hosting **Tracer Synchrony**, a responsive HTML5 browser interface for equipment graphics, schedules, trends, alarms, and custom **TGP2 (Tracer Graphical Programming 2)** routines.
- **Network Interfaces**:
  - **2 × 10/100/1000 Mbps Ethernet RJ-45 Ports**: Independent IP subnets supporting **BACnet/IP**, **BACnet Secure Connect (`BACnet/SC`)**, and **Modbus TCP** client/server, allowing campus IT networks and isolated building OT networks to remain separated or forwarding BACnet/IP data up to a campus supervisory front-end such as **Siemens Desigo CC**.
  - **2 × Isolated RS-485 Serial Ports (`Link 1` & `Link 2`)**: Configurable for **BACnet MS/TP**, **Modbus RTU**, or legacy Trane **Comm3 / Comm4** trunks.
  - **2 × USB Host Ports**: Connect **Trane Air-Fi Wireless (`BACnet/Zigbee`)** coordinators (`WCI`) or the **Echelon U60 USB LonTalk Module (`X13651698001`)** for **LonWorks FT-10** integration.
- **Packaged System Applications**: Built-in **Tracer Chiller Plant Control** (chiller sequencing, condenser water reset, variable primary flow) and **Air System / VAV Static Pressure Optimization** (ASHRAE 90.1 trim-and-respond duct static pressure and supply air temperature reset).
