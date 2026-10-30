---
id: desigo
type: product-line
title: Siemens Desigo
summary: Siemens current building automation platform comprising Desigo CC management software, Desigo PXC4/PXC5/PXC7 and PX automation stations, TX-I/O modules, DXR2 room stations, and QMX3 room units.
manufacturer: siemens
protocols: [bacnet, bacnet-ip, bacnet-sc, bacnet-mstp, modbus, modbus-rtu, modbus-tcp]
status: current
review: verified
related: [apogee, desigo-cc, pxc4, pxc5, pxc7, pxc100-e-d, pxc200-e-d, tx-io-modules, dxr2, qmx3]
sources:
  - https://sid.siemens.com/v/u/A6V11272745
  - https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - https://sid.siemens.com/api/khub/maps/KkEo6H9Q~7RCe5kHQ8QNDw/attachments/FhJXV57N7MOdIisODseSrA-KkEo6H9Q~7RCe5kHQ8QNDw/content
  - https://sid.siemens.com/api/khub/maps/MvhkWo0gmyQP5K35KvIAxQ/attachments/QxXGnGC4l7fzE_l5CvOoUQ-MvhkWo0gmyQP5K35KvIAxQ/content
---
**Siemens Desigo** is Siemens' flagship BACnet-native building automation platform for commercial and institutional facilities:

- **Supervisory Management**: **Desigo CC** (`P55802-Y114-A100`), a BTL-certified BACnet Advanced Operator Workstation (`B-AWS`) supporting BACnet/IP, BACnet/SC, Modbus, OPC, and legacy APOGEE P2 field panels (`CCA-P2-DRIVE`).
- **Next-Generation Desigo PXC4 / PXC5 / PXC7 Automation Stations** (engineered with ABT Site):
  - **Desigo PXC4** (`PXC4.E16` / `S55375-C100` and `PXC4.E16S` / `S55375-C108`): Compact primary plant automation station with 16 onboard I/O points (12 universal I/O + 4 relay outputs), expandable up to 40 I/O points via `TXM` modules, with native BACnet/IP and BACnet Secure Connect (BACnet/SC).
  - **Desigo PXC5** (`PXC5.E003` / `S55375-C103`): System controller and multi-protocol integration gateway with three RS-485 ports for BACnet MS/TP, Modbus RTU/TCP, and M-Bus (up to 500 integration points).
  - **Desigo PXC7** (`PXC7.E400S`, `PXC7.E400M`, `PXC7.E400L`): Large primary plant automation stations scaling from 100 to 400 `TXM` physical I/O points (up to 600 total points with integration) and up to 4 RS-485 ports.
- **Desigo PX Modular Series & TX-I/O**: **PXC100-E.D** and **PXC200-E.D** automation stations paired with **TX-I/O (`TXM1.x`)** self-forming island-bus expansion modules (`TXM1.8U`, `TXM1.8X`, `TXM1.6R`, `TXM1.8D`, `TXM1.16D`, `TXM1.8P`, `TXM1.8T`).
- **Total Room Automation (TRA)**: **Desigo DXR2** (`DXR2.E18` BACnet/IP and `DXR2.M12P` BACnet MS/TP) compact room automation stations and **QMX3** (`QMX3.P30`, `QMX3.P34`, `QMX3.P37`, `QMX3.P70`, `QMX3.P74`) KNX PL-Link room operator units and multi-sensors.


### Choosing Within the Line

This section is an overview drawn from the other pages in this wiki.

| Need | Choose | Notes |
| :--- | :--- | :--- |
| Single air handler or small plant | [PXC4](../product/pxc4.html) | 16 onboard points, expandable with TXM modules; BACnet/IP and BACnet/SC |
| Supervisory router for serial devices | [PXC5](../product/pxc5.html) | Three RS-485 ports for MS/TP, Modbus RTU and M-Bus integration; no local I/O to speak of |
| Large plant or multiple air handlers | [PXC7](../product/pxc7.html) | Three sizes (S, M, L) with growing I/O counts and RS-485 ports |
| Established modular platform | [PXC100-E.D](../product/pxc100-e-d.html), [PXC200-E.D](../product/pxc200-e-d.html) | Use with TX-I/O modules |
| Extra I/O at the panel | [TX-I/O modules](../product/tx-io-modules.html) | Self-forming island bus; choose universal, relay or digital modules |
| Room control | [DXR2](../product/dxr2.html) with [QMX3](../product/qmx3.html) room units | DXR2.E18 on BACnet/IP, DXR2.M12P on MS/TP |

**Two kinds of panel.** The PXC5 is mainly a supervisory and integration controller, while the PXC4 and PXC7 control equipment directly. Many projects use both: automation stations for the plant and one PXC5 to bring serial devices onto the network; see [Supervisory controllers](../concept/supervisory-controllers.html).

**Security.** BACnet Secure Connect is available on the newer stations; see [BACnet/SC](../protocol/bacnet-sc.html) for what it requires. Check the station and Desigo CC versions against each other before specifying.

**Engineering.** The stations are engineered with Siemens' ABT Site tool, and Desigo CC is the management layer; see [Siemens APOGEE](apogee.html) for the older platform it can supervise.
