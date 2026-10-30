---
id: pxc4
type: product
title: Siemens Desigo PXC4 Automation Station (PXC4.E16 / PXC4.E16S)
summary: Compact BACnet/IP and BACnet/SC automation station for primary HVAC plants with 16 onboard I/O points (12 UIO, 4 relay DO), expandable to 40 I/O via TXM modules.
manufacturer: siemens
productLine: desigo
category: field-panel
protocols: [bacnet, bacnet-ip, bacnet-sc, modbus, modbus-rtu, modbus-tcp]
status: current
review: verified
images:
  - path: images/siemens/pxc4.svg
    alt: Technical diagram of Siemens Desigo PXC4.E16 automation station showing 12 universal I/O, 4 relay outputs, dual RJ45 Ethernet ports, RS-485, and KNX PL-Link
    source: Own work (BASWiki technical diagram based on Siemens PXC4.E16 data sheet A6V11646018 / A6V12027144)
    license: CC0-1.0
partNumbers:
  - number: PXC4.E16
    description: Desigo primary plant automation station, BACnet/IP & BACnet/SC, 16 onboard I/O (12 UIO, 4 relay DO), TXM expansion up to 40 I/O, KNX PL-Link, and RS-485 Modbus/M-Bus (SSN S55375-C100)
    source: https://sid.siemens.com/api/khub/maps/KkEo6H9Q~7RCe5kHQ8QNDw/attachments/FhJXV57N7MOdIisODseSrA-KkEo6H9Q~7RCe5kHQ8QNDw/content
  - number: S55375-C100
    description: Siemens stock number (SSN) for PXC4.E16 automation station
    source: https://sid.siemens.com/api/khub/maps/KkEo6H9Q~7RCe5kHQ8QNDw/attachments/FhJXV57N7MOdIisODseSrA-KkEo6H9Q~7RCe5kHQ8QNDw/content
  - number: PXC4.E16S
    description: Desigo primary plant automation station, BACnet/IP & BACnet/SC, 16 onboard I/O (12 UIO, 4 relay DO), TXM expansion up to 40 I/O, without RS-485 or KNX PL-Link (SSN S55375-C108)
    source: https://sid.siemens.com/api/khub/maps/KkEo6H9Q~7RCe5kHQ8QNDw/attachments/FhJXV57N7MOdIisODseSrA-KkEo6H9Q~7RCe5kHQ8QNDw/content
  - number: S55375-C108
    description: Siemens stock number (SSN) for PXC4.E16S automation station
    source: https://sid.siemens.com/api/khub/maps/KkEo6H9Q~7RCe5kHQ8QNDw/attachments/FhJXV57N7MOdIisODseSrA-KkEo6H9Q~7RCe5kHQ8QNDw/content
related: [desigo, desigo-cc, pxc5, pxc7, tx-io-modules, qmx3]
sources:
  - https://sid.siemens.com/api/khub/maps/KkEo6H9Q~7RCe5kHQ8QNDw/attachments/FhJXV57N7MOdIisODseSrA-KkEo6H9Q~7RCe5kHQ8QNDw/content
---
The **Siemens Desigo PXC4** (`PXC4.E16` / `S55375-C100` and `PXC4.E16S` / `S55375-C108`, Data Sheet `A6V11646018` / `A6V12027144`) is a compact, freely programmable automation station in Siemens' current Desigo hardware generation, designed for air-handling units, small chilled/hot water plants, and heat-recovery systems.

### Hardware & I/O Specifications
- **16 Onboard I/O Points**:
  - **12 Universal Inputs/Outputs (`UIO`)**: Software-configurable via **ABT Site** as passive temperature sensors (`LG-Ni1000`, `Pt1000`, `NTC 10k`/`100k`), resistive inputs, voltage inputs (`0–10 VDC`), current inputs (`4–20 mA`), dry-contact digital inputs (`DI` / 25 Hz counter), or analog voltage outputs (`0–10 VDC`).
  - **4 Relay Outputs (`DO`)**: Normally open potential-free relay contacts rated 250 VAC / 2 A (4 A resistive) for fan starters, pumps, and two-position valves.
- **TXM I/O & Fieldbus Expansion**:
  - Connects directly to up to **4 `TXM` expansion modules** (`TXM1.8U`, `TXM1.8X`, `TXM1.6R`, `TXM1.8D`, `TXM1.16D`), expanding total physical I/O to **40 points** (`PXC4.E16` supports up to 80 total points when combining 40 physical I/O + 40 Modbus/M-Bus/KNX PL-Link integration points).
  - **KNX PL-Link** (`PXC4.E16` only): Connects room operator units and sensors such as **QMX3** (`QMX3.P34`, `QMX3.P74`) over a two-wire bus.
  - **RS-485 Interface** (`PXC4.E16` only): Configurable for **Modbus RTU** or **M-Bus** (via level converter) to integrate VFDs, energy meters, and pumps.
- **Networking & Cybersecurity**:
  - **2-Port 10/100 Mbps Ethernet Switch**: Supports daisy-chain topology over **BACnet/IP** and **BACnet Secure Connect (`BACnet/SC`)** (BTL-certified `B-BC`, AMEV AS-A/AS-B), plus **Modbus TCP** client.
  - **WLAN Service Interface**: Built-in Wi-Fi access point activated via front pushbutton for wireless engineering with **ABT Site** and mobile commissioning via **ABT Go**, plus an embedded HTML5 web server.
- **Power & Mounting**: 24 VAC ±20% (50/60 Hz) or 24 VDC ±15%; DIN-rail or screw mounting (`198 × 124 × 71.5 mm`).
