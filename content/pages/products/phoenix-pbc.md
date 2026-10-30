---
id: phoenix-pbc
type: product
title: Phoenix Controls Programmable BACnet Controller (PBC500 / PBC504)
summary: High-speed CSCP room-level zone balance controller coordinating up to 20 ACM venturi valves and 10 FHD500 fume hood displays over BACnet MS/TP or dual-port BACnet/IP.
manufacturer: phoenix-controls
productLine: phoenix-traccel-cscp
category: controller
protocols: [bacnet, bacnet-ip, bacnet-mstp, modbus-rtu]
status: current
review: verified
images:
  - path: images/phoenix-controls/phoenix-pbc.svg
    alt: Technical diagram of Phoenix Controls Programmable BACnet Controller (PBC500 / PBC504) showing dual RJ45 Ethernet ports, BACnet MS/TP, ACM high-speed bus, and onboard I/O
    source: Own work (BASWiki technical diagram based on Honeywell / Phoenix Controls PBC datasheet MKT-0511 Rev B)
    license: CC0-1.0
partNumbers:
  - number: PBC500-ZBH
    description: Programmable BACnet Controller, BACnet MS/TP with Bluetooth (BLE), Zone Balance High-Speed application (up to 20 ACM valves and 10 FHD500 displays)
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-PBC-Datasheet-MKT-0511-Rev-B.pdf
  - number: PBC500-ZBL
    description: Programmable BACnet Controller, BACnet MS/TP with Bluetooth (BLE), Zone Balance Standard-Speed application (up to 4 valves)
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-PBC-Datasheet-MKT-0511-Rev-B.pdf
  - number: PBC500-GEN
    description: Programmable BACnet Controller, BACnet MS/TP with Bluetooth (BLE), Generic PLC/IO application
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-PBC-Datasheet-MKT-0511-Rev-B.pdf
  - number: PBC501-ZBH
    description: Programmable BACnet Controller, BACnet MS/TP without Bluetooth (BLE), Zone Balance High-Speed application
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-PBC-Datasheet-MKT-0511-Rev-B.pdf
  - number: PBC504-ZBH
    description: Programmable BACnet Controller, dual-port BACnet/IP with Bluetooth (BLE), Zone Balance High-Speed application (up to 20 ACM valves and 10 FHD500 displays)
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-PBC-Datasheet-MKT-0511-Rev-B.pdf
  - number: PBC504-ZBL
    description: Programmable BACnet Controller, dual-port BACnet/IP with Bluetooth (BLE), Zone Balance Standard-Speed application
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-PBC-Datasheet-MKT-0511-Rev-B.pdf
  - number: PBC505-ZBH
    description: Programmable BACnet Controller, dual-port BACnet/IP without Bluetooth (BLE), Zone Balance High-Speed application
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-PBC-Datasheet-MKT-0511-Rev-B.pdf
related: [phoenix-traccel-cscp, cscp-valve, fhd500, traccel-valve]
sources:
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-PBC-Datasheet-MKT-0511-Rev-B.pdf
---
The **Phoenix Controls Programmable BACnet Controller (`PBC`, 500 Series)** (Data Sheet `MKT-0511 Rev B`) is the room-level laboratory pressurization, temperature, and zone-balance controller in the **Critical Spaces Control Platform (CSCP)**.

### Hardware & High-Speed Loop Specifications
- **Sub-Second Room Pressurization (`-ZBH`)**: Executes a `500 ms` control loop across its dedicated high-speed subnet to coordinate up to **20 Actuator Control Modules (`ACM`)** and **10 Fume Hood Displays (`FHD500`)** in a single laboratory zone, ensuring instant supply/general-exhaust volumetric tracking when fume hood sashes are opened or closed.
- **Onboard I/O & Field Interfaces**:
  - **4 Universal Inputs (`UI`)**: 16-bit resolution supporting `10kΩ Type II/III` thermistors, `20kΩ NTC`, `Pt1000`, `0–10 VDC`, `4–20 mA`, and dry contacts.
  - **4 Universal Analog Outputs (`UO`)**: `0–10 VDC` or `0–20 mA` (12-bit) for reheat valves, humidifiers, or standard-speed actuators.
  - **4 Solid-State Digital Outputs (`DO`)**: 24 VAC optically isolated triac/SSR outputs (`1.5 A` continuous per output) for staged reheat or floating valves.
- **Networking & Commissioning**:
  - **PBC500 / PBC501**: Native **BACnet MS/TP** (`9.6k` to `115.2k` baud) to the building BAS.
  - **PBC504 / PBC505**: Built-in **2-port 10/100 Mbps Ethernet switch** for daisy-chained **BACnet/IP** (`B-AAC` BTL-listed).
  - **Bluetooth Low Energy (`BLE`)**: Models `PBC500` and `PBC504` include onboard BLE (`up to 100 ft` range) for wireless commissioning and balancing from the **Phoenix Controls Workbench** app.
