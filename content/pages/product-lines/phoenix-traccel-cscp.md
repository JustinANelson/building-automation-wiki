---
id: phoenix-traccel-cscp
type: product-line
title: Phoenix Controls Traccel & Critical Spaces Control Platform (CSCP)
summary: Current Honeywell / Phoenix Controls pressure-independent venturi air valves, high-speed actuators, programmable BACnet room controllers, and fume hood monitors.
manufacturer: phoenix-controls
protocols: [bacnet, bacnet-ip, bacnet-mstp, modbus-rtu]
status: current
review: verified
related: [celeris, celeris-valve, traccel-valve, cscp-valve, phoenix-pbc, fhd500]
sources:
  - https://www.Literature.PhoenixControls.com/Documents/MKT-0242.pdf
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-MKT-0525-CSCP-Venturi-Valves.pdf
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-PBC-Datasheet-MKT-0511-Rev-B.pdf
---
Phoenix Controls' current product line for laboratories, vivariums, cleanrooms, and healthcare isolation spaces consists of two BACnet-native venturi air valve platforms:

- **Traccel BACnet Platform (`TSV` / `TEV`)**: Cost-effective pressure-independent venturi air valves with factory-mounted native BACnet MS/TP controllers (`TX` Temperature and Pressurization, `TP` Temperature and Pressurization with local subnet for up to 3 additional valves, `SO` Supply Only, `EO` Exhaust Only, and `TX-RTN` Remote Electronics).
- **Critical Spaces Control Platform (`CSCP`, `PVSA` / `PVEA` / `PVEB`)**: High-speed laboratory and critical-environment architecture combining mechanically pressure-independent venturi valves, closed-loop Actuator Control Modules (`ACM`) with optional Fail-Safe Modules (`FSM`), room-level Programmable BACnet Controllers (`PBC500` MS/TP and `PBC504` dual-port BACnet/IP), and 500-Series Fume Hood Displays (`FHD500`).


### Traccel or CSCP

This section is an overview drawn from the other pages in this wiki.

| | Traccel | CSCP |
| :--- | :--- | :--- |
| Controller | Mounted on the valve, native BACnet MS/TP | Separate actuator control module plus a room-level programmable controller |
| Speed | Standard | High-speed actuators, response in under a second |
| Best for | Laboratories and critical spaces with modest I/O and cost sensitivity | Research laboratories, vivariums, biocontainment and isolation rooms where fast, tight pressure control matters |
| Room coordination | The TP model coordinates up to three additional valves on a local subnet | The room controller coordinates supply, exhaust and hood valves |
| Hood display | | [FHD500](../product/fhd500.html) |

**Network.** The Traccel controllers and the CSCP programmable controllers connect to the building system as BACnet devices, on MS/TP, or on IP for the PBC504. Follow the usual MS/TP rules; see [BACnet MS/TP](../protocol/bacnet-mstp.html). The building system sets modes and reads flows and alarms; the room loop runs in the Phoenix controller.

**Fail-safe.** CSCP actuators can be fitted with a fail-safe module so a valve goes to a defined position on power loss, which matters for exhaust and supply valves in containment spaces.

**Related.** See [Laboratory and fume hood control](../concept/laboratory-and-fume-hood-control.html) for the control strategy, [PBC](../product/phoenix-pbc.html) for the programmable controller, and [Accel II and Celeris](celeris.html) for the legacy generation.
