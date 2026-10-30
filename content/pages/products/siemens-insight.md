---
id: siemens-insight
type: product
title: Siemens APOGEE Insight Workstation
summary: Supervisory building automation management software and server platform for Siemens APOGEE (P2 ALN and BACnet) building control networks.
manufacturer: siemens
productLine: apogee
category: software
protocols: [apogee-fln, bacnet, bacnet-ip]
status: legacy
review: verified
images:
  - path: images/siemens/siemens-insight.svg
    alt: Technical diagram of Siemens APOGEE Insight Workstation software architecture and option modules
    source: Own work (BASWiki technical diagram based on Siemens Insight product data sheets 149-333P25 and 149-332P25)
    license: CC0-1.0
partNumbers:
  - number: 571-010-3P14-USB
    description: Insight Advanced Software Package (Revision 3.14) with 1 user license and USB hardware license key
    source: https://sid.siemens.com/api/khub/documents/_Hsnme0ubYXgaGd1jxgjgQ/content
  - number: 571-020-3P14-USB
    description: Insight Base Software Package (Revision 3.14) with 1 user license and USB hardware license key
    source: https://sid.siemens.com/api/khub/documents/2PXxpLd2l3uHooZCpcLJjA/content
  - number: 571-188
    description: Insight BACnet Client Option license
    source: https://sid.siemens.com/api/khub/documents/_Hsnme0ubYXgaGd1jxgjgQ/content
  - number: 571-189
    description: Insight BACnet Server Option license
    source: https://sid.siemens.com/api/khub/documents/_Hsnme0ubYXgaGd1jxgjgQ/content
  - number: 571-181
    description: Insight RENO (Remote Notification) Option license for alarm paging, SMS, and email routing
    source: https://sid.siemens.com/api/khub/documents/_Hsnme0ubYXgaGd1jxgjgQ/content
  - number: 571-105
    description: Insight Terminal Services Option license for remote multi-client access
    source: https://sid.siemens.com/api/khub/documents/_Hsnme0ubYXgaGd1jxgjgQ/content
  - number: 571-162
    description: Insight OPC Server Option license (1,000 points)
    source: https://sid.siemens.com/api/khub/documents/_Hsnme0ubYXgaGd1jxgjgQ/content
  - number: 571-163
    description: Insight OPC Server Option license (5,000 points)
    source: https://sid.siemens.com/api/khub/documents/_Hsnme0ubYXgaGd1jxgjgQ/content
  - number: 571-305
    description: APOGEE GO for Insight web browser access option license
    source: https://sid.siemens.com/api/khub/documents/_Hsnme0ubYXgaGd1jxgjgQ/content
related: [apogee, desigo-cc, pxc-compact, pxc-modular, apogee-mbc, apogee-mec]
sources:
  - https://sid.siemens.com/api/khub/documents/_Hsnme0ubYXgaGd1jxgjgQ/content
  - https://sid.siemens.com/api/khub/documents/2PXxpLd2l3uHooZCpcLJjA/content
---
**Siemens Insight** (Product Data Sheets `149-333P25` / `A6V10304862` for Insight Advanced and `149-332P25` / `A6V10304858` for Insight Base) is the graphical supervisory workstation and server platform for the **Siemens APOGEE** building automation system. Across large institutional campuses (including the University of Michigan), Insight workstations have historically served as the central operator interface for monitoring, scheduling, trending, alarm routing, and PPCL program management across hundreds of APOGEE field panels.

### Key Capabilities & Applications
- **Field Panel Database & PPCL Engineering**: Hosts the synchronized central database for APOGEE **MBC**, **RBC**, **MEC**, **PXC Compact**, and **PXC Modular** field panels communicating over Ethernet/IP or RS-485 Automation Level Networks (ALN), as well as Floor Level Network (FLN) TECs and 570-series laboratory controllers.
- **Core Operator Applications**:
  - **System Profile & Point Editor**: Hierarchical tree view of networks, field panels, FLN devices, and logical/physical points with live override and priority-array inspection.
  - **Graphics**: Vector and bitmap dynamic floorplans and mechanical schematics with live point values, status colors, and direct command popups.
  - **Program Editor (PPCL)**: Line-by-line editing, syntax checking, enable/disable trace, and cross-reference analysis of Powers Process Control Language (`PPCL`) control programs running inside APOGEE field panels.
  - **Scheduler & Dynamic Plotter / Trend Viewer**: Campus-wide occupancy/holiday calendar scheduling and multi-axis historical trend collection and plotting.
  - **RENO (`571-181`)**: Remote Notification engine that dispatches critical alarms (such as laboratory fume hood faults, chiller trips, or ultralow freezer alarms) via email, SMS, or alphanumeric paging with escalation schedules.
- **Migration Path to Desigo CC**: Campus facilities transitioning from Insight to **Siemens Desigo CC** (`P55802-Y114-A100`) use the Desigo CC APOGEE P2 driver (`CCA-P2-DRIVE`, `P55802-Y133-A300`) and database migration tools to import Insight graphics, point databases, trends, and schedules without replacing existing APOGEE field panels.
