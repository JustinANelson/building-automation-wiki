---
id: celeris-valve
type: product
title: Phoenix Controls Accel II & Celeris Venturi Air Valve (EXV / MAV / CEV / CSV)
summary: Legacy pressure-independent venturi air valves and Celeris 2 upgrade kits (C2UX) for laboratory fume hood exhaust, general exhaust, and supply air tracking.
manufacturer: phoenix-controls
productLine: celeris
category: valve
protocols: [bacnet, lonworks]
status: end-of-life
review: verified
images:
  - path: images/phoenix-controls/celeris-valve.svg
    alt: Technical diagram of Phoenix Controls Accel II / Celeris venturi air valve (EXVA / MAVA) and Celeris 2 Valve Upgrade Kit (C2UX)
    source: Own work (BASWiki technical diagram based on Phoenix Controls MKT-0514, MKT-0062, MKT-0065, and MKT-0269)
    license: CC0-1.0
partNumbers:
  - number: EXVA110M-AAEH0
    description: 10-inch single Class A aluminum medium-pressure (0.6-3.0 in. WC) Accel II / Celeris VAV Exhaust Valve with high-speed linear actuator
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0065.pdf
  - number: MAVA110M-AAEH0
    description: 10-inch single Class A aluminum medium-pressure Accel II / Celeris Makeup / Supply Air VAV Valve with high-speed linear actuator
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0065.pdf
  - number: EXVB110L-SAEH0
    description: 10-inch single Class B Heresite phenolic-coated low-pressure (0.3-3.0 in. WC) shut-off VAV Fume Hood Exhaust Valve
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0062.pdf
  - number: CEVA110M
    description: 10-inch single Class A medium-pressure Constant Volume Exhaust Venturi Valve (mechanical spring cone, no actuator)
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0065.pdf
  - number: CSVA110M
    description: 10-inch single Class A medium-pressure Constant Volume Supply Venturi Valve (mechanical spring cone, no actuator)
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0065.pdf
  - number: C2UX212M-XMEXC-VPL
    description: Celeris 2 Valve Upgrade Kit for dual 12-inch medium-pressure exhaust venturi valve (modernizes legacy Accel II / Celeris electronics in place)
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0269.pdf
related: [celeris, phoenix-traccel-cscp, traccel-valve, cscp-valve, phoenix-pbc, fhd500]
sources:
  - https://buildings.honeywell.com/us/en/products/by-category/building-management/field-devices/valves/pressure-independent-control-valves/celeris-valves
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-6-inch-Venturi-Valve-PDS-MKT-0514-09-2023-Rev-A-PUBLIC.pdf
  - https://www.Literature.PhoenixControls.com/Documents/MKT-0062.pdf
  - https://www.Literature.PhoenixControls.com/Documents/MKT-0065.pdf
  - https://www.Literature.PhoenixControls.com/Documents/MKT-0269.pdf
---
The **Phoenix Controls Accel II and Celeris** venturi air valves (`EXV` Exhaust Variable Volume, `MAV` Makeup/Supply Variable Volume, `CEV` Constant Volume Exhaust, and `CSV` Constant Volume Supply, Product Data Sheets `MKT-0062`, `MKT-0065`, `MKT-0514`, and Upgrade Guide `MKT-0269`) form the legacy installed base in older campus research buildings.

### Legacy Model Numbering & In-Place Modernization
- **Model Code Structure (`[Type][Class][Gang][Size][Pressure]`)**:
  - `EXV` (Exhaust VAV), `MAV` (Makeup/Supply VAV), `CEV` (Constant-Volume Exhaust), `CSV` (Constant-Volume Supply).
  - `Class`: `A` (uncoated spun aluminum), `B` (Heresite phenolic coating), `C` (316L stainless steel + Kynar/PVDF coating), `D` (316L stainless steel).
  - `Size`: `06` (`6 in.`), `08` (`8 in.`), `10` (`10 in.`), `12` (`12 in.`), `14` (`14 in.`), single (`1`) through quad (`4`) ganged bodies.
  - `Pressure Range`: `M` (`0.6 to 3.0 in. WC` Medium Pressure) or `L` (`0.3 to 3.0 in. WC` Low Pressure).
- **In-Place Retrofit (`C2UX` Upgrade Kits & CSCP)**: Because the spun-aluminum or stainless-steel venturi valve body and internal pressure-compensating cone spring have a multi-decade mechanical lifespan, campus facilities can modernize obsolete analog or LonWorks Accel II / Celeris controllers without removing the valve body from the ductwork using **Celeris 2 Valve Upgrade Kits (`C2UX`, `MKT-0269`)** or CSCP retrofit actuator/controller kits.
