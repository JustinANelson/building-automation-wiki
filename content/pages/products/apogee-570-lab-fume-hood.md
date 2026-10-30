---
id: apogee-570-lab-fume-hood
type: product
title: Siemens APOGEE 570-Series Laboratory, Fume Hood & Pressurized Room Controllers
summary: High-speed BACnet MS/TP critical-environment controllers for laboratory fume hoods (570-00701PA), laboratory room airflow tracking (LCM-OAVS 570-801PA–805PA), and pressurized rooms (PRC-OAVS 570-810PA–811PA).
manufacturer: siemens
productLine: apogee
category: controller
protocols: [bacnet, bacnet-mstp, apogee-fln]
status: legacy
review: verified
images:
  - path: images/siemens/apogee-570-lab-fume-hood.svg
    alt: Technical diagram of Siemens APOGEE 570-Series Laboratory Control Module (LCM-OAVS), Fume Hood Controller (FHC), and Offboard Air Module (550-819B)
    source: Own work (BASWiki technical diagram based on Siemens BACnet LCM-OAVS manual 570-001 / A6V10454975 and PICS A6V10490415)
    license: CC0-1.0
partNumbers:
  - number: 570-00701PA
    description: Programmable BACnet Fume Hood Controller (FHC) for damper, venturi air valve, or VFD fume hood exhaust control
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 570-00701PKA
    description: UL 864 UUKL Smoke Control Listed Programmable BACnet Fume Hood Controller
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 570-801PA
    description: BACnet LCM-OAVS (Laboratory Control Module - Offboard Air Velocity Sensor), Slow Actuation Damper Supply / Damper Exhaust (App 6525/6646)
    source: https://sid.siemens.com/api/khub/documents/a8S7XDvhdmARBJqWIhkw_Q/content
  - number: 570-801PKA
    description: UL 864 UUKL Smoke Control Listed BACnet LCM-OAVS, Slow Actuation Damper Supply / Damper Exhaust
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 570-802PA
    description: BACnet LCM-OAVS, Slow Actuation Venturi Air Valve Supply / Venturi Exhaust (App 6526/6647)
    source: https://sid.siemens.com/api/khub/documents/a8S7XDvhdmARBJqWIhkw_Q/content
  - number: 570-802PKA
    description: UL 864 UUKL Smoke Control Listed BACnet LCM-OAVS, Slow Actuation Venturi Supply / Venturi Exhaust
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 570-803PA
    description: BACnet LCM-OAVS, High-Speed Actuation Damper Supply / Damper Exhaust (App 6527/6648)
    source: https://sid.siemens.com/api/khub/documents/a8S7XDvhdmARBJqWIhkw_Q/content
  - number: 570-803PKA
    description: UL 864 UUKL Smoke Control Listed BACnet LCM-OAVS, High-Speed Damper Supply / Damper Exhaust
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 570-804PA
    description: BACnet LCM-OAVS, High-Speed Actuation Venturi Air Valve Supply / Venturi Exhaust (App 6528/6649)
    source: https://sid.siemens.com/api/khub/documents/a8S7XDvhdmARBJqWIhkw_Q/content
  - number: 570-804PKA
    description: UL 864 UUKL Smoke Control Listed BACnet LCM-OAVS, High-Speed Venturi Air Valves
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 570-805PA
    description: BACnet LCM-OAVS, Low-Speed Damper Supply / High-Speed Venturi Exhaust (App 6529/6650)
    source: https://sid.siemens.com/api/khub/documents/a8S7XDvhdmARBJqWIhkw_Q/content
  - number: 570-805PKA
    description: UL 864 UUKL Smoke Control Listed BACnet LCM-OAVS, Low-Speed Damper Supply / Venturi Exhaust
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 570-810PA
    description: BACnet PRC-OAVS (Pressurized Room Controller - Offboard Air Velocity Sensor) for hospital isolation and cleanroom pressurization
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 570-810PKA
    description: UL 864 UUKL Smoke Control Listed BACnet PRC-OAVS Pressurized Room Controller
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 570-811PA
    description: BACnet PRC-OAVS Pressurized Room Controller with Differential Flow Reset
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 570-811PKA
    description: UL 864 UUKL Smoke Control Listed BACnet PRC-OAVS with Differential Flow Reset
    source: https://sid.siemens.com/v/u/A6V10490415
  - number: 550-819B
    description: Offboard Air Module (OAM) differential pressure transducer (0 to 1.0 in. WC) for LCM-OAVS and PRC-OAVS controllers
    source: https://sid.siemens.com/api/khub/documents/a8S7XDvhdmARBJqWIhkw_Q/content
related: [apogee, apogee-tec-vav, qaa2280-series-2200, phoenix-pbc, traccel-valve, cscp-valve]
sources:
  - https://sid.siemens.com/api/khub/documents/a8S7XDvhdmARBJqWIhkw_Q/content
  - https://sid.siemens.com/v/u/A6V10490415
---
The **Siemens APOGEE 570-Series** (`570-00701PA`, `570-801PA`–`570-805PA`, and `570-810PA`–`570-811PA`, Operation Manual `570-001` / `A6V10454975` and BACnet PICS `A6V10490415`) is Siemens' specialized critical-environment BACnet MS/TP controller family for university research laboratories, chemical fume hoods, vivariums, and hospital isolation rooms.

### Controller Roles & Applications
- **Fume Hood Controller (`570-00701PA` / `570-00701PKA`)**:
  - Maintains constant fume hood face velocity (typically `100 fpm` occupied / `60 fpm` standby) by reading sash position sensors and/or sidewall thermal anemometer face velocity sensors and modulating a high-speed exhaust damper, **Phoenix Controls / Siemens venturi air valve**, or dedicated exhaust VFD.
  - Drives local audible/visual fume hood alarm displays and emergency purge overrides, and communicates hood exhaust CFM in real time to the room's **LCM-OAVS** controller.
- **Laboratory Control Module with Offboard Air Velocity Sensor (`LCM-OAVS`, `570-801PA` to `570-805PA`)**:
  - Performs high-speed volumetric airflow tracking (differential flow offset between total supply airflow and the sum of general exhaust + up to multiple fume hood exhausts) to maintain negative or positive laboratory pressurization while controlling room temperature and reheat.
  - Paired with up to two **Offboard Air Modules (`550-819B` OAM)** (`0 to 1.0 in. WC` / `0 to 248.8 Pa`, `0–5 VDC` output) or linear `0–10 VDC` flow signals from **venturi air valves** (`570-802PA`, `570-804PA`, `570-805PA`).
- **Pressurized Room Controller (`PRC-OAVS`, `570-810PA` / `570-811PA`)**:
  - Designed for hospital airborne infection isolation (AII), protective environment (PE), operating rooms, and cleanrooms; supports direct room differential pressure reset (`570-811PA`) alongside volumetric tracking and communicating **Series 2200/3200 (`QAA2280`/`QFA3280`)** room sensors.
