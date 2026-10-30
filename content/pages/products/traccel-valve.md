---
id: traccel-valve
type: product
title: Phoenix Controls Traccel BACnet Venturi Air Valve (TSV / TEV)
summary: Mechanically pressure-independent venturi air valve with factory-mounted native BACnet MS/TP controller for laboratories, vivariums, and healthcare critical spaces.
manufacturer: phoenix-controls
productLine: phoenix-traccel-cscp
category: valve
protocols: [bacnet, bacnet-mstp]
status: current
review: verified
images:
  - path: images/phoenix-controls/traccel-valve.svg
    alt: Technical diagram of Phoenix Controls Traccel BACnet venturi air valve (TSVA / TEVA) showing sliding cone, rotary/linear actuator, and BACnet MS/TP controller
    source: Own work (BASWiki technical diagram based on Phoenix Controls Traccel BACnet specification sheet MKT-0242)
    license: CC0-1.0
partNumbers:
  - number: TSVA108M-AAAHZ
    description: 8-inch single uncoated aluminum medium-pressure (0.6-3.0 in. WC) Traccel TP Supply Valve with NEMA 1 rotary actuator and local subnet controller
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0242.pdf
  - number: TSVA110M-ABIHZ
    description: 10-inch single uncoated aluminum medium-pressure Traccel TX Supply Valve with IP54 rotary actuator and BACnet MS/TP temperature/pressurization controller
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0242.pdf
  - number: TSVB110M-SBLHZ
    description: 10-inch single Heresite phenolic-coated medium-pressure shut-off Traccel TX Supply Valve with IP56 high-speed linear actuator
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0242.pdf
  - number: TSVA112M-ACIHZ
    description: 12-inch single uncoated aluminum medium-pressure Traccel SO (Supply-Only) Venturi Valve with IP54 rotary actuator
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0242.pdf
  - number: TEVA110M-ADIHZ
    description: 10-inch single uncoated aluminum medium-pressure Traccel EO (Exhaust-Only) Venturi Valve with IP54 rotary actuator
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0242.pdf
  - number: TEVA110M-ANIHZ
    description: 10-inch single uncoated aluminum medium-pressure Traccel Tracking Exhaust Valve (slaved to host TP controller, no local BACnet controller)
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0242.pdf
  - number: TSVA210M-AIYHZ-REI
    description: 10-inch dual uncoated aluminum medium-pressure Traccel TX-RTN Supply Valve with remote electronics enclosure
    source: https://www.Literature.PhoenixControls.com/Documents/MKT-0242.pdf
related: [phoenix-traccel-cscp, cscp-valve, phoenix-pbc, fhd500, celeris-valve, apogee-570-lab-fume-hood]
sources:
  - https://www.Literature.PhoenixControls.com/Documents/MKT-0242.pdf
---
The **Phoenix Controls Traccel BACnet Platform** (`TSV` Supply and `TEV` Exhaust Venturi Valves, Product Specification Guide `MKT-0242`) combines Phoenix Controls' mechanically pressure-independent venturi air valve with a factory-mounted, native **BACnet MS/TP** (`B-ASC`) controller for laboratories, hospital isolation rooms, and pharmacies.

### Mechanical & Control Principles
- **Mechanical Pressure Independence (<1 Second)**: A precision-calibrated spring inside the sliding aerodynamic cone assembly automatically compensates for changes in duct static pressure (`0.6 to 3.0 in. WC` medium pressure or `0.3 to 3.0 in. WC` low pressure) within less than one second, without relying on electronic differential-pressure flow sensors or Pitot tubes that can foul in corrosive laboratory exhaust streams.
- **Factory Multi-Point Airflow Characterization**: Every valve is 24-point factory calibrated to `±5%` of reading across up to a `20:1` turndown ratio (`6"`, `8"`, `10"`, `12"`, and `14"` single through ganged quad body sizes).
- **Traccel Controller Variants**:
  - **TX (`Temperature & Pressurization`)**: Controls 1 supply and 1 exhaust valve, reheat coil (modulating, floating, or staged), and room temperature/humidity sensor.
  - **TP (`Temperature & Pressurization with Subnet`)**: Adds a local sub-network to coordinate up to **3 additional supply/exhaust valves** (`4 valves total`) for larger open labs or rooms with a single fume hood.
  - **SO (`Supply Only`) / EO (`Exhaust Only`)**: Single-valve BACnet MS/TP endpoints (`9.6k`, `19.2k`, `38.4k`, or `76.8k` baud).
