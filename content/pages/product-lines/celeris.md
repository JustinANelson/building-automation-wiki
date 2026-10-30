---
id: celeris
type: product-line
title: Phoenix Controls Accel II & Celeris
summary: Legacy pressure-independent venturi air valve and high-speed laboratory control platform; superseded by Traccel and CSCP, with Celeris 2 upgrade kits available.
manufacturer: phoenix-controls
protocols: [bacnet, lonworks]
status: end-of-life
review: verified
related: [phoenix-traccel-cscp, celeris-valve, traccel-valve, cscp-valve, phoenix-controls-generations-and-upgrades]
sources:
  - https://buildings.honeywell.com/us/en/products/by-category/building-management/field-devices/valves/pressure-independent-control-valves/celeris-valves
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-6-inch-Venturi-Valve-PDS-MKT-0514-09-2023-Rev-A-PUBLIC.pdf
  - https://www.Literature.PhoenixControls.com/Documents/MKT-0062.pdf
  - https://www.Literature.PhoenixControls.com/Documents/MKT-0269.pdf
---
The **Accel II** and **Celeris / Celeris 2** product family represents Phoenix Controls' legacy installed base of pressure-independent venturi air valves (`EXV` exhaust, `MAV` makeup/supply, `CEV` constant-volume exhaust, `CSV` constant-volume supply). While Honeywell lists Celeris controllers as discontinued in favor of **Traccel** and the **Critical Spaces Control Platform (CSCP)**, existing mechanical valve bodies in campus laboratories can be upgraded in place using **Celeris 2 Valve Upgrade Kits** (`C2UX`, document `MKT-0269`).


### Working With an Installed Celeris System

This section is an overview drawn from the other pages in this wiki.

**Identify what is installed.** The valve body model (exhaust, makeup, or constant-volume supply or exhaust) and the controller generation decide what can be reused. The mechanical valve is often sound after many years, since it regulates flow with a spring and cone and has no electronics of its own; see [Airflow measurement](../concept/airflow-measurement.html). The controller and actuator electronics are what age out.

**Options.**

| Option | When it suits |
| :--- | :--- |
| Keep and maintain | The system is working and spares are available |
| Upgrade in place with a Celeris 2 kit | The valve bodies are good and the controls need replacing |
| Replace with [Traccel](../product/traccel-valve.html) or [CSCP](../product/cscp-valve.html) valves | The valve is damaged, the duct is being reworked, or the project is a renovation |

**Integration.** Older systems may be on LonWorks or an earlier BACnet implementation, so an upgrade is also a chance to move the laboratory onto BACnet MS/TP or IP; see [LonWorks](../protocol/lonworks.html) and [BACnet](../protocol/bacnet.html). After any controller change, rebalance and retest the room pressure relationships; see [Laboratory and fume hood control](../concept/laboratory-and-fume-hood-control.html).

The current platforms are described on [Traccel and CSCP](phoenix-traccel-cscp.html).
