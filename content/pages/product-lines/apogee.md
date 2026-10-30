---
id: apogee
type: product-line
title: Siemens APOGEE
summary: Siemens North American building automation platform spanning Insight workstations, PXC and MBC/MEC field panels, and P1/BACnet FLN terminal and laboratory controllers.
manufacturer: siemens
protocols: [apogee-fln, bacnet, bacnet-ip, bacnet-mstp]
status: legacy
review: verified
related: [desigo, siemens-insight, desigo-cc, pxc-compact, pxc-modular, apogee-mbc, apogee-mec, apogee-tec-vav, apogee-atec, apogee-570-lab-fume-hood, qaa2280-series-2200]
sources:
  - https://sid.siemens.com/api/khub/documents/_Hsnme0ubYXgaGd1jxgjgQ/content
  - https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - https://sid.siemens.com/api/khub/documents/cgLnduKM0WaPhFtgWilGQQ/content
  - https://sid.siemens.com/v/u/A6V10490415
---
Introduced in 1998 as the successor to Landis & Gyr System 600, **Siemens APOGEE** has a massive installed base across North American university campuses, hospitals, and research facilities. APOGEE uses a three-tier network hierarchy:

1. **Management Level Network (MLN)**: **Siemens Insight** (`571-010-3P14-USB`) supervisory workstation and database server, or **Siemens Desigo CC** (`P55802-Y114-A100`) equipped with the APOGEE P2 driver (`CCA-P2-DRIVE`, `P55802-Y133-A300`) for side-by-side operation of legacy APOGEE P2 and modern BACnet panels.
2. **Automation Level Network (ALN / BLN)**: Field panels executing custom **PPCL** (Powers Process Control Language) programs over APOGEE P2 (Ethernet/IP or RS-485) or BACnet/IP:
   - **PXC Compact** (`PXC16.2`, `PXC24.2`, `PXC36`) — compact 16-, 24-, and 36-point unit and mechanical room panels.
   - **PXC Modular** (`PXC00-PE96.A`, `PXC100-PE96.A`, `PXC00-E96.A`, `PXC100-E96.A`) — modular panels using `TX-I/O` expansion modules and `PXX-485.3` three-trunk FLN expansion modules.
   - **Modular Building Controller (`MBC-24` / `MBC-40`) & `RBC`** (`545-077`, `545-078`, `545-274`) — card-cage point-module backplanes in enclosures.
   - **Modular Equipment Controller (`MEC`)** (`549-021` to `549-042`) — unitary equipment panels with point-block expansion.
3. **Floor Level Network (FLN — APOGEE P1 or BACnet MS/TP)**: Roomside and critical-environment controllers:
   - **TEC / PTEC VAV Terminal Controllers** (`550-49xPA` / `550-49xPKA`) and **BACnet ATEC** (`550-430PA`, `550-431PA`, `550-440`–`550-446`).
   - **570-Series Laboratory, Fume Hood & Pressurized Room Controllers** (`570-00701PA` FHC, `570-801PA`–`570-805PA` LCM-OAVS, `570-810PA`–`570-811PA` PRC-OAVS).
   - **Series 2200/3200 Communicating Room Sensors** (`QAA2280`, `QFA3280`, `QPA2282`, `QPA2284`).


### Choosing Within the Line

This section is an overview drawn from the other pages in this wiki; the product pages hold the sourced part numbers.

| Need | Choose | Notes |
| :--- | :--- | :--- |
| Small mechanical room or unit panel | [PXC Compact](../product/pxc-compact.html) (16, 24 or 36 points) | FLN support is a license on some models; see [APOGEE FLN](../protocol/apogee-fln.html) for device limits |
| Larger panel, flexible I/O | [PXC Modular](../product/pxc-modular.html) with TX-I/O | The PXX-485.3 module adds three FLN trunks, up to 96 devices |
| Existing card-cage installation | [MBC](../product/apogee-mbc.html), [MEC](../product/apogee-mec.html) | Installed base; spares and expansion point modules |
| VAV box | [TEC / PTEC](../product/apogee-tec-vav.html) or [ATEC](../product/apogee-atec.html) | FLN or BACnet MS/TP; see [VAV control](../concept/vav-control.html) |
| Laboratory room | [570-series](../product/apogee-570-lab-fume-hood.html) | See [Laboratory and fume hood control](../concept/laboratory-and-fume-hood-control.html) |
| Room sensor | [Series 2200/3200](../product/qaa2280-series-2200.html) | Communicates with the terminal controller |

**Expanding or replacing.** On a campus with an APOGEE base, a common approach is to keep the field panels and terminal controllers and move the front end to Desigo CC, which supervises P2 panels through a driver; see [Siemens Desigo](desigo.html). Check the panel's firmware and license before adding FLN devices, and whether the trunk is P1 or BACnet MS/TP.

**Documents.** Data sheets, installation instructions and owner's manuals for these products are catalogued under [Documents](../documents.html).
