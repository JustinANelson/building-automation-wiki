---
id: cscp-valve
type: product
title: Phoenix Controls CSCP Venturi Air Valve (PVSA / PVEA / PVEB)
summary: High-speed Critical Spaces Control Platform venturi air valve equipped with closed-loop Actuator Control Module (ACM), optional Fail-Safe Module (FSM), and Programmable BACnet Controller (PBC).
manufacturer: phoenix-controls
productLine: phoenix-traccel-cscp
category: valve
protocols: [bacnet, bacnet-ip, bacnet-mstp, modbus-rtu]
status: current
review: verified
images:
  - path: images/phoenix-controls/cscp-valve.svg
    alt: Technical diagram of Phoenix Controls CSCP venturi air valve (PVSA / PVEA) showing high-speed linear actuator, Actuator Control Module (ACM), and Programmable BACnet Controller (PBC)
    source: Own work (BASWiki technical diagram based on Honeywell / Phoenix Controls CSCP Venturi Valves datasheet MKT-0525 and ACM datasheet MKT-0513)
    license: CC0-1.0
partNumbers:
  - number: PVEA110M-AMBHY-BMT
    description: 10-inch single Class A uncoated aluminum medium-pressure CSCP Exhaust Valve, high-speed (<1s) linear actuator, ACM controller with Fail-Safe Module, BACnet MS/TP
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-MKT-0525-CSCP-Venturi-Valves.pdf
  - number: PVSA110M-AMDHY-500
    description: 10-inch single Class A uncoated aluminum medium-pressure CSCP Supply Valve, high-speed linear actuator, ACM with Fail-Safe Module + PBC500 (BACnet MS/TP with BLE)
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-MKT-0525-CSCP-Venturi-Valves.pdf
  - number: PVSA110M-AMPHN-504
    description: 10-inch single Class A uncoated aluminum medium-pressure CSCP Supply Valve, standard-speed rotary actuator, PBC504 (dual-port BACnet/IP with BLE)
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-MKT-0525-CSCP-Venturi-Valves.pdf
  - number: PVEA106M-AMBHN-BMT
    description: 6-inch single Class A uncoated aluminum medium-pressure CSCP Exhaust Valve, high-speed linear actuator, ACM controller, BACnet MS/TP
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-MKT-0525-CSCP-Venturi-Valves.pdf
  - number: PVEB110M-SMBHY-BMT
    description: 10-inch single Class B Heresite phenolic-coated shut-off CSCP Exhaust Valve, high-speed linear actuator, ACM controller with Fail-Safe Module, BACnet MS/TP
    source: https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-MKT-0525-CSCP-Venturi-Valves.pdf
related: [phoenix-traccel-cscp, phoenix-pbc, fhd500, traccel-valve, celeris-valve]
sources:
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-MKT-0525-CSCP-Venturi-Valves.pdf
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-MKT-0513-Actuator-Control-Module-ACM-Optional-Fail-Safe-Module-FSM-Datasheet.pdf
---
The **Phoenix Controls Critical Spaces Control Platform (CSCP) Venturi Valve** (`PVSA` Supply and `PVEA`/`PVEB`/`PVEC`/`PVED` Exhaust, Data Sheets `MKT-0525` and `MKT-0513`) is Honeywell / Phoenix Controls' flagship high-speed laboratory and biocontainment airflow control valve.

### Model Numbering Key (`PV[S/E][Class][Gang][Size][Pressure]-[Seat][Gas][Actuator][Insul][FailSafe]-[Comm]`)
- **Application**: `PVS` = Supply Valve, `PVE` = Exhaust Valve.
- **Construction Class**:
  - `A`: Uncoated spun aluminum body and cone with Teflon-coated shaft (general supply and non-corrosive exhaust).
  - `B`: Heresite baked phenolic coating on body and cone (chemical fume hood and corrosive laboratory exhaust).
  - `C`: 316L stainless steel body and cone with Fluoropolymer (Kynar/PVDF) coating.
  - `D`: 316L stainless steel body and cone, uncoated.
- **Size & Ganging**: `1` (Single) through `4` (Quad) bodies in `06` (6 in., `35–350 CFM`), `08` (8 in., `35–700 CFM`), `10` (10 in., `50–1000 CFM`), `12` (12 in., `90–1500 CFM`), or `14` (14 in., `130–2300 CFM`).
- **Actuator & Electronics**:
  - **Actuator Control Module (`ACM`, `MKT-0513`)**: Closed-loop stepper motor controller driving the linear actuator full-stroke in **under 1 second** with `±5%` of reading airflow accuracy and optional supercapacitor **Fail-Safe Module (`FSM`)** (`Y` in model code) to drive the valve to a configurable safe position on power loss.
  - **Programmable BACnet Controller (`-500` / `-504`)**: Factory-mounted room-level `PBC500` (BACnet MS/TP) or `PBC504` (dual-port BACnet/IP) coordinating up to **20 high-speed ACM valves** and **10 FHD500 fume hood displays** in a single laboratory zone.
