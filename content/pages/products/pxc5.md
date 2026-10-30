---
id: pxc5
type: product
title: Siemens Desigo PXC5 System Controller (PXC5.E003)
summary: Desigo BACnet/IP and BACnet/SC system controller and integration gateway with 3 RS-485 ports for BACnet MS/TP, Modbus RTU/TCP, M-Bus, and KNX PL-Link (up to 500 integration points).
manufacturer: siemens
productLine: desigo
category: field-panel
protocols: [bacnet, bacnet-ip, bacnet-sc, bacnet-mstp, modbus, modbus-rtu, modbus-tcp]
status: current
review: verified
images:
  - path: images/siemens/pxc5.svg
    alt: Technical diagram of Siemens Desigo PXC5.E003 system controller showing 3 RS-485 COM ports, dual Ethernet ports, and KNX PL-Link
    source: Own work (BASWiki technical diagram based on Siemens PXC5.E003 data sheet A6V11646020 / A6V12027150)
    license: CC0-1.0
partNumbers:
  - number: PXC5.E003
    description: Desigo system controller and integration gateway with 2-port Ethernet switch (BACnet/IP & BACnet/SC), 3 RS-485 ports (BACnet MS/TP, Modbus RTU, M-Bus), and KNX PL-Link (SSN S55375-C103)
    source: https://sid.siemens.com/api/khub/maps/RXrjt3Pyy8Aosc9aj0gVuw/attachments/slAK3_CU_QhARAxtgNjqrQ-RXrjt3Pyy8Aosc9aj0gVuw/content
  - number: S55375-C103
    description: Siemens stock number (SSN) for PXC5.E003 system controller
    source: https://sid.siemens.com/api/khub/maps/RXrjt3Pyy8Aosc9aj0gVuw/attachments/slAK3_CU_QhARAxtgNjqrQ-RXrjt3Pyy8Aosc9aj0gVuw/content
related: [desigo, desigo-cc, pxc4, pxc7, dxr2, qmx3]
sources:
  - https://sid.siemens.com/api/khub/maps/RXrjt3Pyy8Aosc9aj0gVuw/attachments/slAK3_CU_QhARAxtgNjqrQ-RXrjt3Pyy8Aosc9aj0gVuw/content
---
The **Siemens Desigo PXC5.E003** (`S55375-C103`, Data Sheet `A6V11646020` / `A6V12027150`) is a dedicated BACnet/IP and BACnet/SC system controller, router, and multi-protocol integration gateway in the Desigo family.

### Key Capabilities & Campus Integration
- **Three Galvanically Isolated RS-485 Ports (`COM1`, `COM2`, `COM3`)**:
  - Each RS-485 port can be independently configured in **ABT Site** as a **BACnet MS/TP** trunk (for routing and supervising room controllers such as **Desigo DXR2.M12P**, **APOGEE BACnet PTEC/ATEC**, **Viconics VT7000/VT8000**, or **Phoenix Controls PBC500/Traccel**), **Modbus RTU** master, or **M-Bus** master (up to 60 M-Bus meters via external converter).
- **High-Capacity Data Point Integration**:
  - Integrates up to **500 data points** across Modbus RTU, **Modbus TCP**, and M-Bus devices, plus up to **64 KNX PL-Link** room devices (**QMX3** sensors and operator units) and supervisory coordination of downstream BACnet MS/TP and BACnet/IP devices.
- **System Functions & Cybersecurity**:
  - BTL-certified **BACnet Building Controller (`B-BC`)** supporting **BACnet/IP** and **BACnet Secure Connect (`BACnet/SC`)** node/hub operation, global alarm handling, trend logging, and time-of-day scheduling.
  - Built-in **2-port 10/100 Mbps Ethernet switch**, embedded HTML5 web interface, and push-button **WLAN service interface** for wireless engineering via **ABT Site** and **ABT Go**.
  - **24 VAC ±20% or 24 VDC ±15%** power supply; compact DIN-rail housing (`198 × 124 × 71.5 mm`).
