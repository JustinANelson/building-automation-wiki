---
id: dxr2
type: product
title: Siemens Desigo DXR2 Room Automation Stations (DXR2.E18 / DXR2.M12P)
summary: Compact BACnet/IP and BACnet MS/TP room automation stations for VAV, fan-coil, chilled-beam, and radiant-ceiling terminal units with KNX PL-Link room bus.
manufacturer: siemens
productLine: desigo
category: controller
protocols: [bacnet, bacnet-ip, bacnet-mstp]
status: current
review: verified
images:
  - path: images/siemens/dxr2.svg
    alt: Technical diagram of Siemens Desigo DXR2.E18 and DXR2.M12P room automation stations showing BACnet/IP or MS/TP ports, KNX PL-Link, differential pressure sensor, and Triac/analog outputs
    source: Own work (BASWiki technical diagram based on Siemens DXR2 data sheets A6V10502848 and A6V10502838)
    license: CC0-1.0
partNumbers:
  - number: DXR2.E18-101B
    description: Desigo BACnet/IP room automation station, 2 DI, 4 UI, 8 DO Triacs, 4 AO (0-10V), KNX PL-Link (SSN S55376-C125)
    source: https://sid.siemens.com/api/khub/documents/1W_g8uH4O~G1fH8sSpxqOA/content
  - number: S55376-C125
    description: Siemens stock number (SSN) for DXR2.E18-101B room automation station
    source: https://sid.siemens.com/api/khub/documents/1W_g8uH4O~G1fH8sSpxqOA/content
  - number: DXR2.E18-101K
    description: UL 864 UUKL Smoke Control Listed Desigo BACnet/IP room automation station (SSN S55376-C155)
    source: https://sid.siemens.com/api/khub/documents/1W_g8uH4O~G1fH8sSpxqOA/content
  - number: S55376-C155
    description: Siemens stock number (SSN) for DXR2.E18-101K smoke control room automation station
    source: https://sid.siemens.com/api/khub/documents/1W_g8uH4O~G1fH8sSpxqOA/content
  - number: DXR2.M12P-102B
    description: Desigo BACnet MS/TP VAV and room automation station with built-in 0-500 Pa differential pressure sensor, 1 DI, 2 UI, 6 DO Triacs, 2 AO (0-10V), KNX PL-Link (SSN S55376-C123)
    source: https://sid.siemens.com/api/khub/documents/0G2f8W1h1~6jF7nS2a4Huw/content
  - number: S55376-C123
    description: Siemens stock number (SSN) for DXR2.M12P-102B VAV room automation station
    source: https://sid.siemens.com/api/khub/documents/0G2f8W1h1~6jF7nS2a4Huw/content
  - number: DXR2.M12P-102K
    description: UL 864 UUKL Smoke Control Listed Desigo BACnet MS/TP VAV room automation station (SSN S55376-C152)
    source: https://sid.siemens.com/api/khub/documents/0G2f8W1h1~6jF7nS2a4Huw/content
  - number: S55376-C152
    description: Siemens stock number (SSN) for DXR2.M12P-102K smoke control VAV room automation station
    source: https://sid.siemens.com/api/khub/documents/0G2f8W1h1~6jF7nS2a4Huw/content
  - number: DXR2.M12PX-102B
    description: Desigo BACnet MS/TP Total Room Automation (TRA) station with 0-500 Pa pressure sensor and 60-point KNX PL-Link capacity (SSN S55374-C251)
    source: https://sid.siemens.com/api/khub/documents/0G2f8W1h1~6jF7nS2a4Huw/content
  - number: DXR2.M12PX-102K
    description: UL 864 UUKL Smoke Control Listed Desigo BACnet MS/TP 60-point TRA station (SSN S55376-C153)
    source: https://sid.siemens.com/api/khub/documents/0G2f8W1h1~6jF7nS2a4Huw/content
related: [desigo, desigo-cc, pxc4, pxc5, qmx3, apogee-tec-vav, apogee-atec]
sources:
  - https://sid.siemens.com/api/khub/documents/1W_g8uH4O~G1fH8sSpxqOA/content
  - https://sid.siemens.com/api/khub/documents/0G2f8W1h1~6jF7nS2a4Huw/content
---
The **Siemens Desigo DXR2** series (`DXR2.E18` Data Sheet `A6V10502848` and `DXR2.M12P` Data Sheet `A6V10502838`) is Siemens' current roomside and VAV terminal automation station family under the **Desigo** platform, replacing legacy **APOGEE PTEC (`550-49xPA`)** controllers in new campus construction and renovations.

### Key Models & I/O Comparison
| Model | Network | Onboard Pressure Sensor | Digital Inputs (DI) | Universal Inputs (UI) | Triac Outputs (DO) | Analog Outputs (AO) | Typical Applications |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **DXR2.E18-101B / -101K** | **BACnet/IP** (2-port Ethernet switch) | None (uses external or actuator flow sensor) | 2 DI | 4 UI (`LG-Ni1000`, `NTC 10k/100k`, `0–10V`, `4–20mA`) | 8 DO (24 VAC Triacs) | 4 AO (`0–10 VDC`) | Fan-coil units, chilled beams, radiant panels, VAV with external/KNX pressure sensor, Total Room Automation (HVAC + lighting + shading) |
| **DXR2.M12P-102B / -102K** | **BACnet MS/TP** (RS-485) | **0–500 Pa (0–2.0 in. WC)** differential pressure sensor | 1 DI | 2 UI | 6 DO (24 VAC Triacs) | 2 AO (`0–10 VDC`) | Single-duct and dual-duct VAV boxes, series/parallel fan-powered VAV boxes with staged electric or modulating hot-water reheat |
| **DXR2.M12PX-102B / -102K** | **BACnet MS/TP** (RS-485) | **0–500 Pa (0–2.0 in. WC)** differential pressure sensor | 1 DI | 2 UI | 6 DO (24 VAC Triacs) | 2 AO (`0–10 VDC`) | Extended Total Room Automation (up to 60 KNX PL-Link data points for lighting, blind actuators, and multi-sensors) |

### Engineering & Room Bus Features
- **KNX PL-Link Room Bus**: Plug-and-play two-wire bus providing both communication and power to **QMX3** wall room operator units (`QMX3.P30`, `QMX3.P34`, `QMX3.P37`, `QMX3.P70`, `QMX3.P74`), ceiling presence detectors, and KNX actuators.
- **Preloaded Application Library**: Configured via **ABT Site** and commissioned in the field via **ABT Go** (over USB or network); BTL-listed as a **BACnet Application Specific Controller (`B-ASC`)**.
- **UL 864 UUKL Smoke Control (`-101K` / `-102K`)**: Models ending in `K` are listed under UL 864 10th Edition (`UUKL`) for smoke control pressurization and purge sequences.
