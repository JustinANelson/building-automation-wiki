---
id: pxc-modular
type: product
title: Siemens APOGEE PXC Modular Field Panel (PXC00 / PXC100)
summary: Modular APOGEE and BACnet automation station supporting TX-I/O Island Bus expansion modules and PXX-485.3 three-trunk Floor Level Network modules.
manufacturer: siemens
productLine: apogee
category: field-panel
protocols: [apogee-fln, bacnet, bacnet-ip, bacnet-mstp]
status: legacy
review: verified
images:
  - path: images/siemens/pxc-modular.svg
    alt: Technical diagram of Siemens APOGEE PXC Modular controller with TX-I/O Island Bus and PXX-485.3 FLN expansion module
    source: Own work (BASWiki technical diagram based on Siemens PXC Modular specification sheet 149-478 / A6V10304985)
    license: CC0-1.0
partNumbers:
  - number: PXC00-PE96.A
    description: PXC Modular field panel for FLN concentration and network routing (APOGEE P2 Ethernet/IP or RS-485 ALN, P1 FLN, no TX-I/O Island Bus)
    source: https://sid.siemens.com/api/khub/documents/cgLnduKM0WaPhFtgWilGQQ/content
  - number: PXC100-PE96.A
    description: PXC Modular field panel with TX-I/O Island Bus support, APOGEE P2 Ethernet/IP or RS-485 ALN, and P1 FLN
    source: https://sid.siemens.com/api/khub/documents/cgLnduKM0WaPhFtgWilGQQ/content
  - number: PXC00-E96.A
    description: PXC Modular BACnet field panel for FLN concentration (BACnet/IP or MS/TP ALN, FLN support, no TX-I/O bus)
    source: https://bacnetinternational.net/catalog/manu/siemens/PXCModular%2006.12.pdf
  - number: PXC100-E96.A
    description: PXC Modular BACnet field panel with TX-I/O Island Bus support, BACnet/IP or MS/TP ALN, and FLN support
    source: https://bacnetinternational.net/catalog/manu/siemens/PXCModular%2006.12.pdf
  - number: PXX-485.3
    description: Three-port RS-485 FLN expansion module for PXC Modular (supports up to 32 devices per trunk / 96 FLN devices total)
    source: https://sid.siemens.com/api/khub/documents/cgLnduKM0WaPhFtgWilGQQ/content
  - number: PXM10S
    description: Controller-mounted operator display module for PXC Modular
    source: https://sid.siemens.com/api/khub/documents/cgLnduKM0WaPhFtgWilGQQ/content
related: [apogee, pxc-compact, tx-io-modules, siemens-insight, desigo-cc, pxc100-e-d, pxc200-e-d]
sources:
  - https://sid.siemens.com/api/khub/documents/cgLnduKM0WaPhFtgWilGQQ/content
  - https://bacnetinternational.net/catalog/manu/siemens/PXCModular%2006.12.pdf
---
The **Siemens APOGEE PXC Modular** series (Specification Sheet `149-478` / `A6V10304985` and BACnet sheet `149-455`) is the primary high-point-count field panel and Floor Level Network (FLN) router in APOGEE campus installations, succeeding the legacy **Modular Building Controller (MBC)** card-cage architecture.

### Architecture & Role in Campus Facilities
- **PXC00 (`PXC00-PE96.A` / `PXC00-E96.A`)**: Dedicated FLN concentrator and supervisory controller when no local hardwired TX-I/O points are required. When snapped together with a **PXX-485.3** expansion module, it hosts three RS-485 FLN trunks (up to 32 P1 or BACnet MS/TP devices per trunk, 96 FLN terminal controllers total).
- **PXC100 (`PXC100-PE96.A` / `PXC100-E96.A`)**: Full modular plant controller supporting both self-forming **TX-I/O (`TXM1.x`)** Island Bus expansion modules (for central air handlers, chilled/hot water plants, and laboratory manifold exhaust systems) and **PXX-485.3** FLN trunks.
- **P2 vs. BACnet Firmware**: `-PE96.A` models communicate on the APOGEE P2 Automation Level Network (10/100 Ethernet or RS-485) to **Insight** or **Desigo CC**, while `-E96.A` models communicate via native **BACnet/IP** or **BACnet MS/TP** (BTL-listed `B-BC`). Both execute **PPCL** control programs and measure 7.6 × 4.25 × 2.9 in. (192 × 108 × 72 mm) for DIN-rail mounting inside standard MEC or PXC enclosures.
