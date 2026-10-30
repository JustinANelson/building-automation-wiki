---
id: pxc-compact
type: product
title: Siemens APOGEE PXC Compact Field Panel (PXC16.2 / PXC24.2 / PXC36)
summary: Compact programmable APOGEE field panels with 16, 24, or 36 onboard I/O points, P2 or BACnet ALN communications, and P1/MS/TP Floor Level Network trunks.
manufacturer: siemens
productLine: apogee
category: field-panel
protocols: [apogee-fln, bacnet, bacnet-ip, bacnet-mstp]
status: legacy
review: verified
images:
  - path: images/siemens/pxc-compact.svg
    alt: Technical diagram of Siemens APOGEE PXC Compact field panel showing 24 VAC power, Ethernet/RS-485 ALN, P1/MS/TP FLN, and onboard I/O terminals
    source: Own work (BASWiki technical diagram based on Siemens PXC Compact specification sheet 149-454 / A6V10304967)
    license: CC0-1.0
partNumbers:
  - number: PXC16.2-P.A
    description: PXC Compact 16-point field panel (6 UI, 3 DI, 3 AO, 4 DO), APOGEE P2 RS-485 ALN
    source: https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - number: PXC16.2-PE.A
    description: PXC Compact 16-point field panel (6 UI, 3 DI, 3 AO, 4 DO), APOGEE P2 Ethernet/IP or RS-485 ALN
    source: https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - number: PXC16.2-EF.A
    description: PXC Compact 16-point BACnet field panel, BACnet/IP or MS/TP ALN, FLN trunk
    source: https://www.bacnetinternational.net/catalog/manu/siemens/PXCCompact%2006.12.pdf
  - number: PXC24.2-P.A
    description: PXC Compact 24-point field panel (8 UI, 6 DI, 4 AO, 6 DO), APOGEE P2 RS-485 ALN
    source: https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - number: PXC24.2-PE.A
    description: PXC Compact 24-point field panel (8 UI, 6 DI, 4 AO, 6 DO), APOGEE P2 Ethernet/IP or RS-485 ALN
    source: https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - number: PXC24.2-PEF.A
    description: PXC Compact 24-point field panel, APOGEE P2 Ethernet/IP or RS-485 ALN, RS-485 P1 FLN trunk (up to 32 FLN devices)
    source: https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - number: PXC24.2-EF.A
    description: PXC Compact 24-point BACnet field panel, BACnet/IP or MS/TP ALN, FLN trunk
    source: https://www.bacnetinternational.net/catalog/manu/siemens/PXCCompact%2006.12.pdf
  - number: PXC24.2-PER.A
    description: PXC Compact 24-point extended-temperature (-40 to 158 °F) rooftop field panel, Ethernet/IP or RS-485 ALN
    source: https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - number: PXC36-PE.A
    description: PXC Compact 36-point field panel (16 UI, 8 DI, 4 AO, 8 DO), APOGEE P2 Ethernet/IP or RS-485 ALN
    source: https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - number: PXC36-PEF.A
    description: PXC Compact 36-point field panel, APOGEE P2 Ethernet/IP or RS-485 ALN, TX-I/O Island Bus expansion, and P1 FLN trunk
    source: https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - number: PXC36-EF.A
    description: PXC Compact 36-point BACnet field panel, BACnet/IP or MS/TP ALN, TX-I/O Island Bus expansion, and FLN trunk
    source: https://www.bacnetinternational.net/catalog/manu/siemens/PXCCompact%2006.12.pdf
related: [apogee, pxc-modular, tx-io-modules, siemens-insight, desigo-cc, apogee-tec-vav]
sources:
  - https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - https://www.bacnetinternational.net/catalog/manu/siemens/PXCCompact%2006.12.pdf
---
The **Siemens APOGEE PXC Compact** series (Specification Sheet `149-454` / `A6V10304967` and BACnet sheet `149-969`) is a family of high-density, fixed-I/O direct digital control (DDC) field panels widely used across campus buildings to control air-handling units (AHUs), heat-recovery units, mechanical room heat exchangers, and Floor Level Network (FLN) terminal boxes.

### Hardware & I/O Breakdown
| Model Series | Universal Inputs (UI) | Digital Inputs (DI) | Analog Outputs (AO) | Digital Outputs (DO) | TX-I/O Expansion | FLN Trunk (`-PEF.A` / `-EF.A`) |
| --- | --- | --- | --- | --- | --- | --- |
| **PXC16.2** | 6 UI (0–10V, 4–20mA, 1k/10k/100k RTD/NTC) | 3 DI (dry contact / pulse) | 3 AO (0–10 VDC) | 4 DO (250 VAC / 30 VDC, 4A relays) | No | 1 FLN trunk (on `-EF.A`) |
| **PXC24.2** | 8 UI (0–10V, 4–20mA, RTD/NTC) | 6 DI (dry contact / pulse) | 4 AO (0–10 VDC) | 6 DO (Form C relays) | No | 1 FLN trunk (up to 32 devices) |
| **PXC36** | 16 UI (0–10V, 4–20mA, RTD/NTC) | 8 DI (dry contact / pulse) | 4 AO (jumper-selectable 0–10V or 4–20mA) | 8 DO (Form C relays) | Yes (`-PEF.A` / `-EF.A` support TX-I/O Island Bus) | 3 FLN trunks (up to 32 devices/trunk) |

### Key Specifications
- **Processor & Memory**: 32-bit Motorola ColdFire microprocessor running at 66 MHz with 24 MB SDRAM and 8 MB Flash memory (`PXC16.2` / `PXC24.2`) or 16 MB SDRAM and 8 MB Flash (`PXC36`); executes Siemens **PPCL** (Powers Process Control Language) with battery-backed real-time clock and SRAM.
- **Communications**:
  - **ALN**: `-P.A` models communicate via RS-485 APOGEE P2; `-PE.A` and `-PEF.A` models add 10/100 Mbps Ethernet (APOGEE P2/IP); `-EF.A` models run native **BACnet/IP** or **BACnet MS/TP** (BTL-listed `B-BC`).
  - **Local Service Port**: Front-panel 9-pin D-sub (RS-232) and RJ-45 HMI port for connecting a laptop, Datamate, or `PXM10S`/`PXM20` operator terminal.
- **Power Supply**: 24 VAC ±20% at 50/60 Hz; power consumption 18 VA (`PXC16.2`), 24 VA (`PXC24.2`), or 40 VA (`PXC36` base).
