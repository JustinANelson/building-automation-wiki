---
id: apogee-atec
type: product
title: Siemens APOGEE BACnet ATEC (Actuating Terminal Equipment Controller)
summary: Integrated VAV controller, damper actuator (44 or 88 lb-in), and 0–2 in. WC differential pressure sensor for BACnet MS/TP single-duct VAV terminal boxes.
manufacturer: siemens
productLine: apogee
category: vav-box
protocols: [bacnet, bacnet-mstp, apogee-fln]
status: legacy
review: verified
images:
  - path: images/siemens/apogee-atec.svg
    alt: Technical diagram of Siemens APOGEE BACnet ATEC (550-430PA / 550-431PA / 550-44x) showing direct-coupled GDE/GLB damper actuator, differential pressure ports, and BACnet MS/TP terminals
    source: Own work (BASWiki technical diagram based on Siemens BACnet ATEC installation instructions 550-031 / A6V10315343 and PICS A6V10490415)
    license: CC0-1.0
partNumbers:
  - number: 550-430PA
    description: BACnet ATEC cooling-only single-duct VAV controller with integrated 44 lb-in (5 Nm) GDE actuator and differential pressure sensor
    source: https://sid.siemens.com/api/khub/documents/cNKuMJftM0kBzX6JESk56Q/content
  - number: 550-431PA
    description: BACnet ATEC full-feature VAV controller with 44 lb-in (5 Nm) GDE actuator, differential pressure sensor, 2 UI, and 3 DO Triacs for reheat/fan control
    source: https://sid.siemens.com/api/khub/documents/cNKuMJftM0kBzX6JESk56Q/content
  - number: 550-430PKA
    description: UL 864 UUKL Smoke Control Listed BACnet ATEC cooling-only VAV controller
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-431PKA
    description: UL 864 UUKL Smoke Control Listed BACnet ATEC full-feature VAV controller with 2 UI and 3 DO Triacs
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-440
    description: BACnet ATEC Model 0001 cooling-only VAV controller with 44 lb-in (5 Nm) GDE actuator (for QAA2280/QAA2281 digital room sensors)
    source: https://sid.siemens.com/api/khub/documents/cNKuMJftM0kBzX6JESk56Q/content
  - number: 550-441
    description: BACnet ATEC Model 0001 cooling-only VAV controller with 88 lb-in (10 Nm) GLB actuator
    source: https://sid.siemens.com/api/khub/documents/cNKuMJftM0kBzX6JESk56Q/content
  - number: 550-445
    description: BACnet ATEC Model 2301 full-feature VAV controller with 44 lb-in (5 Nm) GDE actuator, 2 UI, and 3 DO Triacs
    source: https://sid.siemens.com/api/khub/documents/cNKuMJftM0kBzX6JESk56Q/content
  - number: 550-446
    description: BACnet ATEC Model 2301 full-feature VAV controller with 88 lb-in (10 Nm) GLB actuator, 2 UI, and 3 DO Triacs
    source: https://sid.siemens.com/api/khub/documents/cNKuMJftM0kBzX6JESk56Q/content
related: [apogee, apogee-tec-vav, openair-gde-glb, qaa2280-series-2200, dxr2, gdb181-1e-3, glb181-1e-3]
sources:
  - https://sid.siemens.com/api/khub/documents/cNKuMJftM0kBzX6JESk56Q/content
  - https://sid.siemens.com/v/u/A6V10490415
---
The **Siemens APOGEE BACnet ATEC (Actuating Terminal Equipment Controller)** (Installation Instructions `550-031` / `A6V10315343` and BACnet PICS `A6V10490415`) combines a BACnet MS/TP VAV controller, an internal `0 to 2 in. WC` (`0 to 500 Pa`) differential pressure airflow sensor, and a direct-coupled **OpenAir GDE (44 lb-in / 5 Nm)** or **GLB (88 lb-in / 10 Nm)** brushless DC damper actuator in a single one-piece housing.

### Variants & Capabilities
- **Cooling-Only Models (`550-430PA`, `550-430PKA`, `550-440`, `550-441`)**: Designed for cooling-only pressure-independent single-duct VAV boxes; includes the integrated damper actuator, differential pressure transducer (`±5%` accuracy at `1 in. WC`), BACnet MS/TP port (`9600`, `19200`, `38400`, or `76800` baud), and digital room sensor (`RTS`) port.
- **Full-Feature Reheat/Fan Models (`550-431PA`, `550-431PKA`, `550-445`, `550-446`)**: Adds **2 Universal Inputs (`UI`)** (`0–10 VDC` or `10kΩ`/`100kΩ` thermistor for discharge air temperature and occupancy contact) and **3 Digital Triac Outputs (`DO`)** (`24 VAC`, `12 VA` max per output) to drive floating hot-water reheat valves (such as **Siemens 599 Series** with `SSE131` actuators), staged electric reheat contactors, and series or parallel VAV box fans.
- **Room Sensor Compatibility**:
  - `550-430PA` and `550-431PA` support legacy analog RTS (`540-658P25` / `544-760A`) room sensors.
  - `550-440`, `550-441`, `550-445`, and `550-446` support **Series 2200/3200 (`QAA2280` / `QFA3280` / `QPA2284`)** communicating room sensors with temperature, humidity, and `CO2` sensing.
- **Smoke Control (`-PKA`)**: `550-430PKA` and `550-431PKA` are listed under **UL 864 UUKL** for smoke control systems.
