---
id: supervisory-controllers
type: concept
title: "Supervisory controllers, field panels, and BAS system architecture"
summary: "How building automation systems are structured across management workstations (B-AWS), supervisory and primary-plant field panels (B-BC), and room/terminal controllers (B-ASC / B-AAC)."
review: draft
images:
  - path: images/concepts/supervisory-controllers.svg
    alt: "Technical diagram (drawn illustration) of the three-tier BAS hierarchy showing Management Level Workstations, Supervisory/Plant Field Panels, and Room/Terminal Controllers"
    source: "Own work (BASWiki technical diagram based on Siemens APOGEE, Siemens Desigo, and Trane Tracer SC+ architecture documentation)"
    license: CC0-1.0
related: [io-points, field-panels-and-enclosures, bacnet-pics, bacnet, bacnet-ip, bacnet-sc, bacnet-mstp, apogee-fln, desigo-cc, siemens-insight, pxc4, pxc5, pxc7, pxc-compact, pxc-modular, apogee-mbc, apogee-mec, tracer-sc-plus]
sources:
  - https://sid.siemens.com/api/khub/maps/aBMtA7CgB235XRbv3MzSuQ/attachments/2LKNA_GaXSJiR_tbhO6BCw-aBMtA7CgB235XRbv3MzSuQ/content
  - https://sid.siemens.com/api/khub/maps/RXrjt3Pyy8Aosc9aj0gVuw/attachments/slAK3_CU_QhARAxtgNjqrQ-RXrjt3Pyy8Aosc9aj0gVuw/content
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/controls/building-management/Tracer-SC/BAS-PRD038K-EN_08012022.pdf
---
Institutional building automation systems (BAS) follow a **three-tier hierarchical architecture** (standardized in ASHRAE Guideline 13 and BACnet device profiles) that separates enterprise visualization from autonomous real-time equipment control. If the campus IP network or management server goes offline, field panels and room controllers continue running their local sequences uninterrupted.

### 1. The Three Architectural Tiers

| Tier | Network Layer | BACnet Profile | Core Responsibilities | Examples in This Wiki |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Management Level** *(Workstations & Enterprise Servers)* | Management Level Network (`MLN` — Campus Ethernet / HTTPS / BACnet/IP / BACnet/SC) | **B-AWS** *(Advanced Operator Workstation)* | Campus-wide graphical user interface (HTML5 / thick client), long-term SQL historical trend archiving, enterprise alarm routing (email/SMS/paging via RENO), global holiday/occupancy calendars, cross-building reporting, and database backup | [Siemens Desigo CC](../product/desigo-cc.html), [Siemens APOGEE Insight](../product/siemens-insight.html) |
| **Tier 2: Automation / Supervisory Level** *(Supervisory Controllers & Primary Plant Field Panels)* | Automation / Building Level Network (`ALN` / `BLN` — [BACnet/IP](../protocol/bacnet-ip.html), [BACnet/SC](../protocol/bacnet-sc.html), or APOGEE P2) | **B-BC** *(BACnet Building Controller)* | Autonomous execution of custom control programs (`PPCL`, `CFC`/ABT Site, `TGP2`) for central air handlers, chillers, and hot-water plants; local time-of-day schedules, alarm generation, and trend buffers; **network routing and protocol gateway** between Ethernet (`BACnet/IP`) and serial field trunks (`BACnet MS/TP`, `APOGEE P1 FLN`, `Modbus RTU`) | **Desigo**: [PXC4](../product/pxc4.html), [PXC5](../product/pxc5.html), [PXC7](../product/pxc7.html), [PXC100-E.D](../product/pxc100-e-d.html), [PXC200-E.D](../product/pxc200-e-d.html)<br>**APOGEE**: [PXC Compact](../product/pxc-compact.html), [PXC Modular](../product/pxc-modular.html), [MBC / RBC](../product/apogee-mbc.html), [MEC](../product/apogee-mec.html)<br>**Trane**: [Tracer SC+](../product/tracer-sc-plus.html) |
| **Tier 3: Field / Roomside Level** *(Terminal, Unitary & Critical-Space Controllers)* | Floor Level Network (`FLN` — [RS-485](rs-485.html) [BACnet MS/TP](../protocol/bacnet-mstp.html), [APOGEE P1](../protocol/apogee-fln.html), [Modbus RTU](../protocol/modbus-rtu.html), KNX PL-Link, or daisy-chained BACnet/IP) | **B-AAC** *(Advanced Application Controller)* or **B-ASC** *(Application Specific Controller)* | Zone-level temperature, airflow, and pressurization loops for VAV terminal boxes, laboratory fume hoods and venturi valves, fan-coil units, heat pumps, packaged rooftop units, and chiller control centers | **Siemens**: [Desigo DXR2](../product/dxr2.html), [APOGEE PTEC](../product/apogee-tec-vav.html), [BACnet ATEC](../product/apogee-atec.html), [570-Series Lab/Fume Hood](../product/apogee-570-lab-fume-hood.html), [GDB181 / GLB181](../product/gdb181-1e-3.html)<br>**Phoenix Controls**: [PBC500/504](../product/phoenix-pbc.html), [CSCP Valve](../product/cscp-valve.html), [Traccel Valve](../product/traccel-valve.html)<br>**Viconics**: [VT7200](../product/vt7200.html), [VT7300](../product/vt7300.html), [VTR7300](../product/vtr7300.html), [VT7600](../product/vt7600.html), [VT8350](../product/vt8350.html), [VZ8250](../product/vz8250.html)<br>**Trane**: [Symbio 210](../product/symbio-210.html), [Symbio 500](../product/symbio-500.html), [Symbio 700](../product/symbio-700.html), [Symbio 800](../product/symbio-800.html), [UC400](../product/uc400.html)<br>**York**: [Smart Equipment SSE](../product/york-sse-controller.html), [OptiView](../product/york-optiview.html) |

### 2. Pure Supervisory Controllers / Gateways vs. Plant Field Panels
Within Tier 2 (`B-BC` Building Controllers), manufacturers offer two distinct hardware styles:
1. **Pure Supervisory Controllers & Multi-Protocol Routers (Zero Onboard I/O)**:
   - Have **no local hardwired `AI`/`AO`/`DI`/`DO` terminals** on the base unit; instead, they provide multiple Ethernet ports and isolated **RS-485 serial trunks** to supervise, schedule, trend, and route downstream `BACnet MS/TP`, `APOGEE P1 FLN`, `Modbus RTU/TCP`, or `LonWorks` controllers, and coordinate system-level sequences (such as ASHRAE 90.1 static pressure reset, chiller plant staging, and optimal start).
   - **Examples**: [Siemens Desigo PXC5.E003](../product/pxc5.html) (2 Ethernet ports + 3 RS-485 ports for up to 500 Modbus/M-Bus integration points and MS/TP routing), [Siemens APOGEE PXC00-PE96.A / PXC00-E96.A](../product/pxc-modular.html) (FLN concentrator for up to 96 FLN terminal controllers via `PXX-485.3`), and [Trane Tracer SC+](../product/tracer-sc-plus.html) (`X13651695001`, dual Ethernet + dual RS-485 MS/TP + Air-Fi wireless + USB LonTalk).
2. **Primary Plant Field Panels (Onboard or Modular I/O + Supervisory Capability)**:
   - Combine a `B-BC` supervisory processor with either fixed onboard I/O ([Siemens PXC Compact PXC16.2/24.2/36](../product/pxc-compact.html), [Desigo PXC4.E16](../product/pxc4.html)) or high-density modular I/O ([Desigo PXC7.E400S/M/L](../product/pxc7.html) and [APOGEE PXC100-PE96.A](../product/pxc-modular.html) with [TX-I/O modules](../product/tx-io-modules.html), or [APOGEE MBC-24/MBC-40](../product/apogee-mbc.html) card cages) to directly control large multi-fan air handlers, heat-recovery wheels, and central chilled/hot-water plants while also hosting FLN/MS/TP trunks.

### 3. System-Wide Coordination Sequences Run by Supervisory Panels
Rather than letting room controllers fight each other or run central fans at fixed maximum output, supervisory controllers execute **building-wide optimization requests**:
- **Trim-and-Respond Duct Static Pressure Reset**: The supervisory panel polls the damper positions of all downstream VAV controllers ([DXR2.M12P](../product/dxr2.html), [APOGEE PTEC/ATEC](../product/apogee-tec-vav.html), [Symbio 210](../product/symbio-210.html)) and lowers AHU supply duct static pressure setpoint until the most-demanding VAV damper is roughly `90%` open.
- **Supply Air Temperature Reset & Chilled/Hot Water Reset**: Adjusts AHU discharge air temperature and plant water supply temperatures based on outdoor air enthalpy and zone cooling/heating requests.
- **Morning Warm-Up, Night Purge & Optimal Start/Stop**: Calculates the earliest time each zone must start conditioning based on current space temperature, outdoor temperature, and learned thermal mass so spaces reach setpoint exactly at occupancy time.


### 4. Integration, Resilience and Security

> This section is general practice, not taken from the cited manufacturer documents.

**What happens when a tier fails.** The design goal is that a failure loses visibility before it loses control. If a workstation or server is down, controllers keep running schedules, loops and local alarms, and buffer trends until the server returns, though the buffer is finite and old data is overwritten. If a supervisory panel is down, the controllers below it keep controlling their own spaces with their last setpoints and local schedules, but system-level coordination such as static pressure reset or optimal start stops, and anything the panel routed becomes unreachable. If a room controller fails, only that zone is affected. Check what each device does on loss of its network or its master; this is application-specific and should be in the sequence of operation.

**Time.** Schedules, trend logs and alarm timestamps rely on accurate clocks. Panels usually take their time from the server or a network time source, and a drifting clock produces trends that do not line up and schedules that start early or late. Daylight saving rules must be set on every device that holds a local schedule.

**Integrating third-party equipment.** Chillers, boilers, drives and meters are usually brought in over [Modbus](../protocol/modbus.html) or BACnet through a supervisory controller, which presents their points to the system. Each integrated point needs its address, scaling, units and update rate documented. Poll only the points the sequences and trends need, since a large number of polled points slows a serial trunk; see [BACnet MS/TP](../protocol/bacnet-mstp.html).

**Trends and alarms.** Decide where each lives. Short-term trends at the panel keep working through a server outage; long-term history lives on the server. Alarms should be configured with limits and delays, so a single noisy sensor does not flood operators, and routed so the right person sees them.

**Backup and change control.** Keep a current backup of every panel's program and database, and of the server, stored away from the building. Controllers are routinely reprogrammed; keep a log of who changed what, and test changes on a spare controller or during unoccupied hours where possible.

**Network security.** The BAS often sits on the same infrastructure as the corporate network. Good practice is to put it on its own VLAN behind a firewall, remove or change default passwords on every controller, disable unused services and ports, restrict remote access to a managed gateway with multi-factor authentication, and keep controller firmware updated. [BACnet/SC](../protocol/bacnet-sc.html) adds device authentication and encryption for new installations. Controllers that cannot be patched should be isolated rather than exposed.

**Sizing limits.** Every supervisory controller has limits on the number of integrated devices, points, trends, schedules and alarm objects. Sizing a panel by its I/O count alone ignores these; check each product's data sheet. For example, the APOGEE PXC Compact and PXC Modular data sheets give different FLN device limits; see [APOGEE FLN](../protocol/apogee-fln.html).
