---
id: desigo-cc
type: product
title: Siemens Desigo CC Building Management Platform
summary: Siemens' current open, integrated building management software platform supporting BACnet/IP, BACnet/SC, Modbus, OPC, and legacy APOGEE P2 field panels.
manufacturer: siemens
productLine: desigo
category: software
protocols: [bacnet, bacnet-ip, bacnet-sc, modbus, modbus-tcp, apogee-fln]
status: current
review: verified
images:
  - path: images/siemens/desigo-cc.svg
    alt: Technical diagram of Siemens Desigo CC management platform architecture, B-AWS BACnet engine, and APOGEE P2 driver integration
    source: Own work (BASWiki technical diagram based on Siemens Desigo CC Data Sheet A6V11852691)
    license: CC0-1.0
partNumbers:
  - number: P55802-Y114-A100
    description: Desigo CC Standard Feature Set license (CCA-STD-FSET) for multi-discipline building automation
    source: https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - number: P55802-Y113-A100
    description: Desigo CC Compact Building Automation Feature Set license (CCA-CMPT-BA)
    source: https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - number: P55802-Y133-A300
    description: Desigo CC APOGEE P2 Driver Option license (CCA-P2-DRIVE) for native integration of APOGEE PXC, MBC, and MEC field panels
    source: https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - number: P55802-Y127-A300
    description: Desigo CC Graphics Editor Option license (CCA-OP-GRAPH-ED)
    source: https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - number: P55802-Y119-A200
    description: Desigo CC 1 Additional Client License (CCA-1-CL)
    source: https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - number: P55802-Y120-A200
    description: Desigo CC Unlimited Concurrent Clients License (CCA-MAX-CL)
    source: https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - number: P55802-Y157-A452
    description: Desigo CC Expansion Pack for 500 Building Automation data points (CCA-500-BA)
    source: https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - number: P55802-Y157-A453
    description: Desigo CC Expansion Pack for 5,000 Building Automation data points (CCA-5000-BA)
    source: https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - number: S55802-Y185
    description: Desigo CC USB License Hardware Key Dongle (CMD.06)
    source: https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
related: [desigo, apogee, siemens-insight, pxc4, pxc5, pxc7, dxr2, pxc-compact, pxc-modular]
sources:
  - https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
---
**Siemens Desigo CC** (Data Sheet `A6V11852691`) is Siemens' current modular integrated building management platform, replacing **APOGEE Insight** as the supervisory workstation and enterprise server for university, healthcare, and commercial facilities.

### Architecture & Campus Use Cases
- **Coexistence of Desigo BACnet and APOGEE P2**: Using the **APOGEE P2 Driver** (`CCA-P2-DRIVE`, `P55802-Y133-A300`), Desigo CC communicates natively with legacy APOGEE Ethernet and RS-485 P2 field panels (`PXC Compact`, `PXC Modular`, `MBC`, `RBC`, `MEC`) alongside modern **Desigo PXC4/PXC5/PXC7**, **Desigo PX** (`PXC100-E.D`/`PXC200-E.D`), **Desigo DXR2**, and third-party BACnet/IP and BACnet/SC equipment (such as Phoenix Controls `PBC`/`Traccel`, Viconics `VT7000`/`VT8000`, Trane `Symbio`, and York `Smart Equipment`).
- **BTL-Certified BACnet B-AWS**: Certified to the BACnet Advanced Operator Workstation (`B-AWS`) profile (BACnet Protocol Revision 1.18) with native support for **BACnet Secure Connect (`BACnet/SC`)** hub/node management, Modbus TCP, OPC DA/UA, SNMP, and RESTful web services.
- **Flex Client (HTML5)**: Zero-footprint HTML5 web client supporting context-sensitive navigation (`System Manager`), high-performance vector graphics, real-time and historical trend comparisons, BACnet calendar/schedule editing, PPCL editing for APOGEE panels, and remote alarm notification (email, SMS, escalation).
