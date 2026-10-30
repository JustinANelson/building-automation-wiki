---
id: siemens
type: manufacturer
title: Siemens Smart Infrastructure
summary: Building automation vendor behind the Desigo and APOGEE platforms, Insight and Desigo CC management workstations, and OpenAir and Acvatix field devices.
review: verified
related: [apogee, desigo, siemens-insight, desigo-cc, openair-gde-glb, siemens-599-zone-valve, siemens-apogee-to-desigo-migration]
sources:
  - https://sid.siemens.com/v/u/A6V11272745
  - https://sid.siemens.com/api/khub/documents/_Hsnme0ubYXgaGd1jxgjgQ/content
  - https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
---
Siemens Smart Infrastructure (formerly Landis & Gyr, Landis & Staefa, and Siemens Building Technologies) is one of the primary building automation vendors across North American higher-education and healthcare campuses, including the University of Michigan.

### Major Platforms & Product Families
- **Management Workstations**: **Siemens Insight** (`571-010-3P14-USB`, legacy APOGEE supervisory HMI and database workstation) and **Siemens Desigo CC** (`P55802-Y114-A100`, current integrated building management platform supporting native BACnet/IP, BACnet/SC, and legacy APOGEE P2 field panels via the `CCA-P2-DRIVE` driver).
- **APOGEE Platform (Legacy / Installed Base)**: Modular Building Controllers (`MBC-24` `545-077`, `MBC-40` `545-078`, `RBC` `545-274`), Modular Equipment Controllers (`MEC` `549-0xx`), **PXC Compact** (`PXC16.2`, `PXC24.2`, `PXC36`), **PXC Modular** (`PXC00-PE96.A`, `PXC100-PE96.A`, `PXC100-E96.A`), **TEC / PTEC VAV Controllers** (`550-49xPA`), **BACnet ATEC** (`550-430PA`, `550-431PA`), **570-Series Laboratory & Fume Hood Controllers** (`570-00701PA`, `570-801PA`–`570-811PA`), and **Series 2200/3200 Room Sensors** (`QAA2280`, `QFA3280`, `QPA2284`).
- **Desigo Platform (Current)**: **Desigo PXC4** (`PXC4.E16`), **Desigo PXC5** (`PXC5.E003`), **Desigo PXC7** (`PXC7.E400S/M/L`), **Desigo PX** (`PXC100-E.D`, `PXC200-E.D`), **TX-I/O Expansion Modules** (`TXM1.8U`, `TXM1.8X`, `TXM1.6R`, `TXM1.8D`, `TXM1.16D`), **Desigo DXR2 Room Automation Stations** (`DXR2.E18`, `DXR2.M12P`), and **QMX3 KNX PL-Link Room Operator Units** (`QMX3.P34`, `QMX3.P37`, `QMX3.P74`).
- **OpenAir & Acvatix Field Devices**: **OpenAir GDE/GLB** (`GDE131.1P`, `GLB131.1P`) floating damper actuators, **GDB181.1E/3 & GLB181.1E/3** compact VAV controllers, and **Acvatix 599 Series** brass zone valves and `SFA`/`SSE`/`SSF` actuators.


### How the Platforms Fit Together

This section is an overview drawn from the product-line and concept pages in this wiki; the product pages hold the sourced part numbers.

Siemens building automation in North America is best understood as two generations running side by side in many buildings.

| | [APOGEE](../product-line/apogee.html) | [Desigo](../product-line/desigo.html) |
| :--- | :--- | :--- |
| Status | Installed base, still supplied for expansion | Current platform |
| Management software | [Insight](../product/siemens-insight.html) | [Desigo CC](../product/desigo-cc.html) |
| Building-level network | P2 Automation Level Network (RS-485 or Ethernet) | BACnet/IP or BACnet/SC |
| Field panels | MBC, MEC, PXC Compact, PXC Modular | PXC4, PXC5, PXC7, PX |
| Terminal controllers | TEC, PTEC, ATEC on the P1 [FLN](../protocol/apogee-fln.html) or BACnet MS/TP | DXR2 room automation stations, with QMX3 room units |
| I/O expansion | Point-module backplanes, TX-I/O on newer panels | [TX-I/O modules](../product/tx-io-modules.html) |

**Migration.** Desigo CC can supervise APOGEE P2 field panels through a driver, so a campus can move its front end to Desigo CC while the field panels and terminal controllers stay in place and are replaced as they age. The PXC Compact and Modular panels sit in the middle: they are APOGEE-family panels that can also speak BACnet, and they can act as the FLN master for older terminal controllers.

**Reading Siemens documents.** Siemens documents carry an identifier beginning A6V, and older literature also has a short number such as 149-454. The same document can appear under both. Data sheets cover specifications and ordering; installation instructions and owner's manuals cover wiring and operation. The document library page lists which are archived.

**Where to start.** For the network between panels and terminal controllers, read [APOGEE FLN](../protocol/apogee-fln.html) and [BACnet MS/TP](../protocol/bacnet-mstp.html). For how the pieces divide the work, read [Supervisory controllers](../concept/supervisory-controllers.html).
