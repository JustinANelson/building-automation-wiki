---
id: pxc7
type: product
title: Siemens Desigo PXC7 Automation Station (PXC7.E400S / M / L)
summary: Modular BACnet/IP and BACnet/SC automation station for large primary plants, scaling from 100 to 400 TXM I/O points and up to 4 RS-485 ports.
manufacturer: siemens
productLine: desigo
category: field-panel
protocols: [bacnet, bacnet-ip, bacnet-sc, bacnet-mstp, modbus, modbus-rtu, modbus-tcp]
status: current
review: verified
images:
  - path: images/siemens/pxc7.svg
    alt: Technical diagram of Siemens Desigo PXC7.E400S/M/L modular automation station showing TX-I/O bus interface, 4 RS-485 COM ports, and dual Ethernet ports
    source: Own work (BASWiki technical diagram based on Siemens PXC7 data sheet A6V12505052 / A6V12505054)
    license: CC0-1.0
partNumbers:
  - number: PXC7.E400S
    description: Desigo modular plant automation station, BACnet/IP & BACnet/SC, up to 100 points (TXM I/O + integration), 1 RS-485 port (SSN S55375-C111)
    source: https://sid.siemens.com/api/khub/maps/MvhkWo0gmyQP5K35KvIAxQ/attachments/QxXGnGC4l7fzE_l5CvOoUQ-MvhkWo0gmyQP5K35KvIAxQ/content
  - number: S55375-C111
    description: Siemens stock number (SSN) for PXC7.E400S automation station
    source: https://sid.siemens.com/api/khub/maps/MvhkWo0gmyQP5K35KvIAxQ/attachments/QxXGnGC4l7fzE_l5CvOoUQ-MvhkWo0gmyQP5K35KvIAxQ/content
  - number: PXC7.E400M
    description: Desigo modular plant automation station, BACnet/IP & BACnet/SC, up to 200 TXM I/O points (250 total with integration), 2 RS-485 ports (SSN S55375-C110)
    source: https://sid.siemens.com/api/khub/maps/MvhkWo0gmyQP5K35KvIAxQ/attachments/QxXGnGC4l7fzE_l5CvOoUQ-MvhkWo0gmyQP5K35KvIAxQ/content
  - number: S55375-C110
    description: Siemens stock number (SSN) for PXC7.E400M automation station
    source: https://sid.siemens.com/api/khub/maps/MvhkWo0gmyQP5K35KvIAxQ/attachments/QxXGnGC4l7fzE_l5CvOoUQ-MvhkWo0gmyQP5K35KvIAxQ/content
  - number: PXC7.E400L
    description: Desigo modular plant automation station, BACnet/IP & BACnet/SC, up to 400 TXM I/O points (600 total with integration), 4 RS-485 ports (SSN S55375-C105)
    source: https://sid.siemens.com/api/khub/maps/MvhkWo0gmyQP5K35KvIAxQ/attachments/QxXGnGC4l7fzE_l5CvOoUQ-MvhkWo0gmyQP5K35KvIAxQ/content
  - number: S55375-C105
    description: Siemens stock number (SSN) for PXC7.E400L automation station
    source: https://sid.siemens.com/api/khub/maps/MvhkWo0gmyQP5K35KvIAxQ/attachments/QxXGnGC4l7fzE_l5CvOoUQ-MvhkWo0gmyQP5K35KvIAxQ/content
related: [desigo, desigo-cc, pxc4, pxc5, tx-io-modules, pxc100-e-d, pxc200-e-d, pxc-modular]
sources:
  - https://sid.siemens.com/api/khub/maps/MvhkWo0gmyQP5K35KvIAxQ/attachments/QxXGnGC4l7fzE_l5CvOoUQ-MvhkWo0gmyQP5K35KvIAxQ/content
---
The **Siemens Desigo PXC7** series (`PXC7.E400S`, `PXC7.E400M`, `PXC7.E400L`, Data Sheet `A6V12505052` / `A6V12505054`) is Siemens' current high-capacity modular automation station for large central HVAC plants, complex air handlers, and campus mechanical rooms, succeeding the **Desigo PXC100-E.D / PXC200-E.D** and **APOGEE PXC Modular** controllers.

### Model Comparison
| Model | Stock Number (SSN) | Max TXM Physical I/O Points | Max Total Points (TXM + Integration) | RS-485 Ports (`COM`) | Max BACnet MS/TP Devices |
| --- | --- | --- | --- | --- | --- |
| **PXC7.E400S** | `S55375-C111` | 100 | 100 | 1 × RS-485 | Up to 60 (1 trunk) |
| **PXC7.E400M** | `S55375-C110` | 200 | 250 | 2 × RS-485 | Up to 120 (2 trunks) |
| **PXC7.E400L** | `S55375-C105` | 400 | 600 | 4 × RS-485 | Up to 240 (4 trunks) |

### Architecture & Key Features
- **Direct TX-I/O Island Bus Interface**: Connects directly to **TXM1.x** expansion modules (`TXM1.8U`, `TXM1.8X`, `TXM1.6R`, `TXM1.8D`, `TXM1.16D`, `TXM1.8P`, `TXM1.8T`) and `TXS1.12F10` bus power supplies, making it a drop-in controller upgrade when modernizing existing `PXC100-E.D`, `PXC200-E.D`, or `PXC100-PE96.A` panels while reusing existing field wiring and `TXM` modules.
- **Multi-Protocol Integration**: Configurable RS-485 ports support **BACnet MS/TP** routing/supervision, **Modbus RTU** (plus **Modbus TCP** over Ethernet), and **M-Bus**, alongside a dedicated **KNX PL-Link** port for up to 64 room devices (`QMX3`).
- **Cybersecurity & Commissioning**: BTL-certified **BACnet Building Controller (`B-BC`)** with native **BACnet/IP** and **BACnet Secure Connect (`BACnet/SC`)**, 2-port Ethernet switch, embedded HTML5 web server, and WLAN service access point for **ABT Site** and **ABT Go**.
