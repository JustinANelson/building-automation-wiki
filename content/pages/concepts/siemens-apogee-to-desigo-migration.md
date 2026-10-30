---
id: siemens-apogee-to-desigo-migration
type: concept
title: "Siemens heritage and migration: PPCL, APOGEE panels, Insight and the path to Desigo"
summary: "How the APOGEE P2, APOGEE BACnet and Desigo generations relate, what PPCL is and what happens to it, which APOGEE hardware Desigo CC can and cannot integrate, the order of a P2 integration and Insight migration, and a phased plan for moving a campus without replacing everything at once."
review: verified
related: [hvac-and-controls-through-the-eras, supervisory-controllers, apogee-fln, bacnet, bacnet-mstp, bacnet-sc, io-points, bas-sizing-calculations, pneumatic-control-systems, apogee, desigo, apogee-mbc, apogee-mec, pxc-compact, pxc-modular, pxc4, pxc5, pxc7, tx-io-modules, siemens-insight, desigo-cc, apogee-tec-vav, apogee-atec]
sources:
  - https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - https://sid.siemens.com/api/khub/documents/2PXxpLd2l3uHooZCpcLJjA/content
  - https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - https://www.bacnetinternational.net/catalog/manu/siemens/PXCCompact%2006.12.pdf
  - https://legacy.pvamu.edu/ClickOnce_Client/Help/EngineeringHelp/en-US/17354773259.html
  - https://legacy.pvamu.edu/ClickOnce_Client/Help/EngineeringHelp/en-US/17355066123.html
---
A campus with a large Siemens base is rarely all one generation. Pneumatic instruments, early APOGEE panels on the P2 network, newer panels running BACnet, and current Desigo stations may all report to one operator, or to none. This page explains how the generations fit together, what Siemens documents say about moving from one to the next, and how to plan the work in phases. It covers the controls and front end; for the history, see [HVAC and controls through the eras](hvac-and-controls-through-the-eras.html), and for Powers pneumatic equipment, see [Pneumatic control systems](pneumatic-control-systems.html).

> The compatibility tables and migration steps come from Siemens' Desigo CC engineering help, as mirrored on a university server, and from Siemens data sheets in the document library. The help copy does not state which Desigo CC version it describes, and compatibility changes with each release, so confirm every item with Siemens for the version you would install. The phasing advice and the pitfalls list are the author's reasoning from those sources, not Siemens guidance.

## The generations at a glance

| Generation | What it is | Programming | Network |
| :--- | :--- | :--- | :--- |
| Landis & Gyr System 600 | The predecessor APOGEE replaced (per the [APOGEE](../product-line/apogee.html) page, APOGEE was introduced in 1998 as its successor) | Vendor-specific | Vendor-specific |
| APOGEE on P2 | MBC and MEC panels, and PXC Compact and Modular panels running P2 firmware (2.x) | PPCL | P2 Automation Level Network over RS-485 or Ethernet, with P1 [Floor Level Network](../protocol/apogee-fln.html) to terminal controllers |
| APOGEE BACnet | PXC Compact and Modular models with BACnet firmware (3.x) | PPCL | Native BACnet/IP or BACnet MS/TP as a B-BC; optional P1 or MS/TP field devices |
| Desigo | PXC4, PXC5, PXC7 and PX stations, TX-I/O modules, DXR2 room units, Desigo CC | Graphical function charts in ABT Site | BACnet/IP, BACnet/SC, MS/TP, Modbus and others |

Firmware revision is a quick way to tell P2 from BACnet in the field: the Siemens help describes P2 firmware as 2.x and BACnet firmware as 3.x. Panel part numbers and nameplates, such as `545-077` for an MBC-24 or `PXC24.2` for a PXC Compact, identify the hardware family; the [APOGEE](../product-line/apogee.html) page lists them.

## PPCL: what it is and what happens to it

**PPCL** (Powers Process Control Language) is the text-based programming language of APOGEE panels. The PXC Compact and Modular data sheets describe it as a structure like BASIC that provides direct digital control and energy management sequences, and list the APOGEE PPCL User's Manual (document 125-1896) as the reference. Insight, the APOGEE workstation, lets an operator create and modify PPCL programs, and the PXC panels support program editing and modification.

Desigo stations are engineered differently: the PXC4, PXC5 and PXC7 data sheets describe engineering and commissioning with the ABT Site tool using graphical function charts. A PPCL program therefore cannot be loaded into a Desigo station. It has to be understood and re-engineered, which makes the **written sequence of operation** the real asset to preserve; see [Control strategies](control-strategies.html).

What the Siemens help says about PPCL when integrating with Desigo CC:

- The Desigo CC export utility can export PPCL: one folder, with one XML file for each program.
- **User-defined local points created in PPCL cannot be imported** into the management platform. If a program uses its own local points for logic, they remain in the panel.
- Keep the old software installed as a reference, because some object types and programs, such as user accounts and reports, cannot be exported and may have to be recreated.

## Desigo CC and the APOGEE base

The Desigo CC data sheet describes an integrated, open building management platform with an installed client, a Windows desktop client and an HTML5 browser client, connectivity to Siemens' Building X cloud platform, and support for 150,000 objects in a single system. Southbound it lists BACnet, BACnet/SC, OPC, Modbus, KNX, SNMP and others. It also lists a **P2 driver option**, which is what lets Desigo CC talk to APOGEE P2 panels (item `CCA-P2-DRIVE`, part `P55802-Y133-A300`). The Siemens help states that Desigo CC supports APOGEE P2 and APOGEE BACnet systems by providing the communication drivers for them.

The practical consequence is that the **front end and the field panels can be moved separately**: put Desigo CC in front of existing APOGEE panels first, then replace panels and terminal controllers as they age.

### What Desigo CC can and cannot integrate

From the compatibility list in the Desigo CC engineering help:

| Network | Supported | Condition |
| :--- | :--- | :--- |
| P2 Ethernet | Yes | As is |
| P2 AEM | Yes | Needs a physical AEM device or a virtual AEM in a PXC |
| P2 RS-485 | Yes | Only through an AEM; direct connection is not supported |
| BACnet/IP | Yes | As is |
| P2 dial-up | No | Convert to Ethernet or AEM |
| ALS3 | No | Not supported |

The PXC Compact data sheet describes the **Virtual AEM** license, which lets a PXC Compact connect an RS-485 APOGEE network, or individual field panels, to a P2 Ethernet network without additional hardware.

**Hardware.** The help lists as supported on the automation level the MBC Power Open Processor (`562-001`, `562-002`, `562-040`), the MBC Open Processor, the MEC Power controller (`549-600` series), and the PXC Compact and PXC Modular. On the P1 field level network it lists the P1 DXR, TECs, laboratory controllers, point expansion modules, a PXC Compact on P1, the PXC4.E16.A, the PXC7.E400.A for APOGEE, the P1 BIM, the digital energy monitor and P1 drivers (including VFD). On the BACnet field level it lists the DXR (APOGEE firmware 3.4 and later), the PTEC, the PXC UEC and the PPM.

**Minimum firmware** (as listed in the help; the help recommends flashing the latest available):

| Hardware | P2 RS-485 | P2 Ethernet | BACnet |
| :--- | :--- | :--- | :--- |
| PXC (panel) | 2.8.20 | 2.8.20 | 3.5.5 |
| MBC Power Open Processor | 2.8.20 | 2.8.20 | Limited support, appears as a third-party BACnet device |
| MEC Power (V3) | 2.8.20 | 2.8.20 | Limited support, appears as a third-party BACnet device |
| Pre-Power Open Processor (MBC) | 2.8.20 | Not applicable | Not applicable; its drivers are not supported |
| Pre-Power MEC (68302) | 2.8.20 | Not applicable | Not applicable; its drivers are not supported |
| SCU v5 | Not supported | Not applicable | Not applicable |

**The oldest panels are the weak point.** A campus with pre-Power MBC or MEC panels, or SCU v5 units, can see them on P2 RS-485 through an AEM at best, with their drivers unsupported. These are the first candidates for replacement.

**Applications and capacity.** Applications in the FLN application library come with predefined functions and template graphics. Applications not in the library are discovered and imported, but the functions and graphics have to be created by hand. Desigo CC has a limit on the number of objects per server, and the help refers sizing questions to the local Siemens sales organization.

### FLN drivers: what a Siemens panel can bring in

The same list shows the integration drivers available with APOGEE BACnet firmware, which is worth knowing on a mixed campus because they let a Siemens panel read other vendors' equipment: BACnet MS/TP, Barber-Colman Network 8000 (Enhanced), CSI Host, Johnson Controls N2 Master, Konnex (KNX), Modbus, Modbus 250, Pneumercator, Siemens Firefinder XLS, Siemens SiPass, Trane, Veeder Root, and York ISN (Enhanced), each with its own minimum firmware. See [Modbus](../protocol/modbus.html), [KNX](../protocol/knx.html) and [BACnet MS/TP](../protocol/bacnet-mstp.html).

## The Siemens-documented sequence

The help is explicit about the order: **integrate the APOGEE P2 systems first, then migrate Insight.**

**Prerequisites:** Desigo CC installed with a configured project, access to the Desigo CC Export Utility in Insight or in the Commissioning Tool, and, for the export, Commissioning Tool 3.12 or later for BACnet projects, and Insight or Commissioning Tool 3.13 or later for P2 projects and graphics.

**Integrating P2 systems (step list in the help):**
1. Verify field panel, hardware and firmware support against the compatibility list.
2. Prepare the database for export.
3. Export the database with the Export Utility (run `sibxexport.exe` from the Insight directory for an Insight migration).
4. Add the FLN application libraries.
5. Discover unassigned applications.
6. Configure APOGEE P2 with the network wizards, or manually.
7. Optionally configure the advanced editor, and use the APOGEE troubleshooting topic.

**Migrating Insight (after P2 integration):** search and replace a file path property, share the database, capture the Insight configurations, create a new symbols folder, import the Insight graphics, import the information text, clean up the imported graphics, and convert the notification recipients.

The help adds a notice about BACnet event priority restrictions on UL 864 / ULC S527 smoke control stations, so check fire-listed systems separately.

### Preparing the database: what to fix before exporting

The help is blunt that preparation saves time later:

- **Point names.** Use delimiters, preferably the period, in names like `BLDG1.FLOOR1.RM1.POINT1`. The last delimited section maps the point to its function in Desigo CC. Six delimiters import, but only the period works with the Discovery feature used afterwards. Points that do not follow the convention land in a **Local IO** folder (TECs are an exception). A Siemens utility exists to change system names before export.
- **Name mapping.** Choose how APOGEE's System Name, User Name and Descriptor map to Desigo CC's Name, Description and Alias: Classic, Classic Reversed, or Bad System Name for systems whose System Names are not usable by operators. The choice decides which name the logical view and function mapping are built on.
- **TEC subpoints.** The export carries only pre-defined subpoints. Others must be added in the Commissioning Tool's System Profile before exporting if they are to be shown and trended.
- **Graphics.** Before exporting, check that backgrounds and images display; set the export computer's display scaling to 100 percent and a recommended resolution (otherwise imported graphics may be clipped); share the Commissioning Tool database folder with the right permissions; copy the background and animation folders into the database folders; and, if moving graphics between computers, search and replace the file path (UNC) properties. A service must be running or graphics will not export properly.

## Hardware replacement options

Moving the front end is one decision. Replacing controllers is another, and there are three options for an APOGEE panel, each described by the Siemens data sheets:

| Option | What changes | What stays |
| :--- | :--- | :--- |
| Keep the panel | Nothing in the field | P2 panel, PPCL, FLN; Desigo CC supervises it with the P2 driver |
| Replace with a PXC Compact or Modular BACnet model | Network moves to BACnet/IP or MS/TP; panel is a BACnet B-BC | PPCL programs, TX-I/O style I/O, APOGEE tools; the data sheet calls it an integral part of the APOGEE system |
| Replace with a Desigo PXC4, PXC5 or PXC7 | Engineering moves to ABT Site; PPCL is re-engineered | Sequences (as written), BACnet network, and where compatible TX-I/O modules |

The PXC Compact BACnet data sheet (document 149-206, June 15, 2012) describes native BACnet/IP and native BACnet MS/TP, BTL-certified B-BC operation, integrated I/O based on TX-I/O technology, optional support for RS-485 P1 or MS/TP devices, and optional P1 wireless FLN. That makes the BACnet model a **stepping stone**: it keeps PPCL and the familiar tools while moving the network to an open protocol. TX-I/O is also the expansion technology on the Desigo PX family, so I/O hardware may be shared across generations, but check module and firmware compatibility for each case; see [TX-I/O modules](../product/tx-io-modules.html) and [Siemens Desigo](../product-line/desigo.html).

**Terminal controllers.** TEC controllers on the P1 FLN are supported by Desigo CC, and the BACnet FLN list includes the PTEC and DXR. Moving terminal controllers from P1 to BACnet MS/TP is a larger job than moving a front end, because there are many of them, but the same panel can often supervise both during the transition; see [APOGEE FLN](../protocol/apogee-fln.html), [APOGEE TEC and PTEC](../product/apogee-tec-vav.html) and [APOGEE ATEC](../product/apogee-atec.html).

## A phased plan

> This section is the author's reasoning from the sources above, to be adapted to the campus. It is not Siemens guidance.

**Phase 0: inventory.** For every building, record the panel types and part numbers, the firmware revision (2.x or 3.x), the network (P2 RS-485, P2 Ethernet, BACnet), the number of FLN devices, the PPCL programs, the graphics, and the workstation and its software version. The hardware table above then sorts each panel into supported, limited or unsupported. See [BAS sizing calculations](bas-sizing-calculations.html) for counting points.

**Phase 1: front end.** Install Desigo CC with the P2 driver, bring in the supported P2 and BACnet panels, and migrate Insight graphics and recipients. The field does not change, and operators gain the new interface. Resolve naming problems first. Check the age of the Insight workstation itself: the Insight Base data sheet (October 2015) lists operating systems from Windows 7 and Windows Server 2008 R2 through Windows Server 2012 R2, so an Insight server may be a lifecycle risk of its own.

**Phase 2: network.** Move P2 RS-485 networks toward Ethernet or use virtual AEMs, retire dial-up and unsupported connections, and put the building network under IT's control, with security and addressing planned; see [BACnet/SC](../protocol/bacnet-sc.html) and [Supervisory controllers](supervisory-controllers.html).

**Phase 3: panels.** Replace the unsupported and failing panels first (pre-Power MBC and MEC, SCU), choosing a BACnet PXC model where PPCL must be kept, and a Desigo station where a full re-engineering is justified. Write down each sequence before touching it.

**Phase 4: terminal level.** Replace TECs and other field devices as they fail or when a building is renovated, using BACnet MS/TP terminal controllers.

**Decision points.** For each building ask: is the building's mission critical (laboratories, hospitals), is the equipment supported, does it have usable documentation, and is the budget available. A laboratory with a working, well-understood panel may not need a replacement panel as much as a better supervisor; one with unsupported panels and no documentation does.

## Pitfalls

- **Unsupported panels discovered late.** Check the compatibility table at the inventory stage.
- **PPCL local points.** Logic that depends on user-defined local points does not come across; list it in advance.
- **Poor point naming.** Points outside the convention land in Local IO and map badly; fix names before exporting.
- **Missing user accounts and reports.** Keep Insight available and record what must be recreated.
- **Graphics clipped or broken** by display settings or file paths on the export computer.
- **Firmware floors.** Panels below the minimum revision need updating first, with a plan for rollback.
- **Fire-listed systems.** BACnet event priority restrictions apply to UL 864 stations; involve the fire alarm contractor.
- **No sequence record.** A migration that loses the PPCL logic without a written sequence loses the building's operating intent.

## Questions for Siemens

1. Which Desigo CC version and driver versions support our firmware revisions, and what is the support lifecycle for each?
2. Are our pre-Power and SCU panels in scope for any trade-in or replacement program?
3. Can our PPCL programs be converted or must they be re-engineered, and what do the sequence-extraction and engineering services cost?
4. Which of our TX-I/O modules and terminal controllers are compatible with the Desigo stations we would choose?
5. What are the object and license counts for our site?
