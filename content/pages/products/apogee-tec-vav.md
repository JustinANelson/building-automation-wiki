---
id: apogee-tec-vav
type: product
title: Siemens APOGEE PTEC VAV & Terminal Equipment Controllers (550-49x / 550-43x)
summary: Programmable and application-specific BACnet MS/TP and P1 FLN terminal equipment controllers for VAV boxes, fan-powered boxes, unit ventilators, and heat pumps.
manufacturer: siemens
productLine: apogee
category: vav-box
protocols: [bacnet, bacnet-mstp, apogee-fln]
status: legacy
review: verified
partNumbers:
  - number: 550-432PA
    description: BACnet PTEC VAV Controller with on-board differential pressure sensor
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-432PKA
    description: UL 864 UUKL Smoke Control Listed BACnet PTEC VAV Controller with on-board differential pressure sensor
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-433PA
    description: BACnet PTEC VAV Controller with Series or Parallel Fan and Electric or Hot-Water Reheat
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-433PKA
    description: UL 864 UUKL Smoke Control Listed BACnet PTEC VAV Controller with Fan and Reheat
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-490PA
    description: BACnet PTEC Unit Conditioner (Fan Coil / Heat Pump / Unit Ventilator) Controller
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-491PA
    description: BACnet PTEC Dual Duct VAV Controller
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-492PA
    description: BACnet PTEC VAV Controller with Series Fan and 3-Stage Electric Heat
    source: https://sid.siemens.com/v/u/A6V10443354
  - number: 550-492PKA
    description: UL 864 UUKL Smoke Control Listed BACnet PTEC VAV Controller with Series Fan and 3-Stage Electric Heat
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-493PA
    description: BACnet PTEC Constant Volume / Bypass Terminal Controller
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-495PA
    description: BACnet PTEC Terminal Box (VAV) Controller (Cooling Only, Hot-Water Reheat, or 1–3 Stage Electric Reheat)
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-495PKA
    description: UL 864 UUKL Smoke Control Listed BACnet PTEC Terminal Box (VAV) Controller
    source: https://sid.siemens.com/v/u/A6V10447210
  - number: 550-496PA
    description: BACnet PTEC Terminal Box (VAV) Controller with Extended I/O
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-497PA
    description: Programmable BACnet PTEC Controller (PPCL programmable)
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-498PA
    description: Programmable BACnet PTEC Controller with on-board differential pressure sensor
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-499PA
    description: BACnet PTEC Controller for Unitary / Heat Pump Applications
    source: https://sid.siemens.com/v/u/A6V10490415
related: [apogee, apogee-atec, apogee-570-lab-fume-hood, qaa2280-series-2200, openair-gde-glb, siemens-599-zone-valve, dxr2]
sources:
  - https://sid.siemens.com/v/u/A6V10490415
  - https://sid.siemens.com/v/u/A6V10443354
  - https://sid.siemens.com/v/u/A6V10447210
  - https://sid.siemens.com/v/u/A6V10445888
  - https://sid.siemens.com/v/u/A6V10435963
---
The **Siemens APOGEE PTEC (Programmable Terminal Equipment Controller)** series (`550-432PA`–`550-433PA` and `550-490PA`–`550-499PA`, BACnet PICS `A6V10490415`, Operation Manual `A6V10445888` / `550-100`, and Specification Sheet `A6V10435963` / `149-1014`) is the workhorse VAV and terminal unit controller installed in thousands of ceiling plenums across APOGEE campus buildings.

### Architecture & Field Details
- **On-Board Differential Pressure Transducer**: VAV models (`550-432PA`, `550-433PA`, `550-491PA`, `550-492PA`, `550-495PA`, `550-498PA`) include an internal `0 to 2 in. WC` (`0 to 500 Pa`) differential pressure sensor (`±5%` accuracy at `1 in. WC`) with `HI` and `LO` barbed tubing ports for VAV box flow cross/averaging pitot pickups.
- **Inputs & Outputs**:
  - **24 VAC Triac Digital Outputs (`DO`)**: Drive external **OpenAir GDE/GLB** (`GDE131.1P` / `GLB131.1P`) floating damper actuators, **Siemens 599 Series** floating hot-water reheat valves (`SSE131.09U`), fan relays, and up to 3 stages of electric heat contactors.
  - **Universal / Temperature Inputs**: Support `10kΩ`/`100kΩ` discharge air thermistors, `0–10 VDC` inputs, and occupancy dry contacts, plus a dedicated **RTS** port for analog room sensors or **Series 2200/3200 (`QAA2280` / `QFA3280` / `QPA2284`)** communicating room sensors.
- **Smoke Control (`-PKA` Suffix)**: Models ending in `PKA` (`550-432PKA`–`550-433PKA`, `550-490PKA`–`550-499PKA`, Installation Instructions `A6V10447210`) carry **UL 864 UUKL** Smoke Control Equipment listing.
