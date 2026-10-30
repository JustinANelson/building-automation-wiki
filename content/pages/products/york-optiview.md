---
id: york-optiview
type: product
title: York OptiView Chiller Control Center (031-02430 / 031-03630)
summary: Graphical microprocessor control center mounted on York centrifugal and rotary-screw water chillers (YK, YT, YZ, YR, YMC2) for capacity control, safety protection, and BAS integration.
manufacturer: york
productLine: york-smart-equipment
category: packaged-unit-controller
protocols: [bacnet, bacnet-ip, bacnet-mstp, modbus, modbus-rtu, lonworks]
status: current
review: verified
images:
  - path: images/york/york-optiview.svg
    alt: Technical diagram of York OptiView Chiller Control Center (031-02430 / 031-03630) showing color graphical display, keypad, microboard, VSD/PRV interfaces, and E-Link/SC-EQ BAS gateway
    source: Own work (BASWiki technical diagram based on York Form 160.75-PW4 / A6V-OptiView wiring manual)
    license: CC0-1.0
partNumbers:
  - number: 031-02430
    description: York OptiView Control Center Microboard (02430 series) for YK and YT centrifugal chillers
    source: https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
  - number: 031-03630
    description: York OptiView Control Center Microboard (03630 series) with enhanced flash memory and serial/gateway interfaces
    source: https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
  - number: 466-61597T
    description: York One-Two Unit Chiller Sequence Control Kit in NEMA 1 enclosure
    source: https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
  - number: 366-44684D
    description: York Three-Unit Chiller Lead Selector and Cycling Control Kit
    source: https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
  - number: 375-01738-000
    description: York Leaving/Entering Chilled & Condenser Water Temperature Sensor Kit (thermistor well assembly)
    source: https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
  - number: 024-15793
    description: McDonnell FS8W Chilled/Condenser Water Paddle Flow Switch (150 psi DWP) for OptiView safety interlock
    source: https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
related: [york-smart-equipment, york-sse-controller]
sources:
  - https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
---
The **York OptiView Control Center** (Field Connections and Control Manual Form `160.75-PW4`) is the factory-mounted microprocessor control panel on York central station water chillers—including **YK** high-pressure centrifugal, **YT** low-pressure centrifugal, **YZ** magnetic-bearing centrifugal, **YR** rotary-screw, and **YMC²** magnetic-bearing chillers—installed in campus central chilled-water plants.

### Control Functions & Campus Plant Integration
- **Capacity & Surge Control**: Modulates pre-rotation vanes (`PRV`), variable-speed drive (`VSD`) frequency, and hot-gas bypass to maintain Leaving Chilled Liquid Temperature (`LCHLT`) within `±0.5 °F` (`±0.3 °C`) while monitoring evaporator/condenser pressures, oil differential pressure, bearing temperatures, motor current limit (`4–20 mA` or `0–10 VDC` demand limit), and centrifugal compressor surge protection.
- **Role-Based Security & Diagnostics**: Color graphical display shows animated chiller cutaways, real-time refrigerant and water-side temperatures/pressures, historical trend graphs, and time-stamped safety shutdown and cycling logs across `VIEW`, `OPERATOR`, `SERVICE`, and `ADMIN` access levels.
- **BAS Integration (`E-Link` / `SC-EQ`)**: Connects to **Siemens Desigo CC**, **APOGEE Insight**, or **PXC** plant controllers via hardwired start/stop, chilled-water reset (`4–20 mA` / `0–10 VDC`), and current-limit signals on Terminal Strip `TB3`/`TB4`, or digitally via the York **E-Link** / **Smart Connected Equipment (`SC-EQ`)** gateway card over **BACnet/IP**, **BACnet MS/TP**, **Modbus RTU/TCP**, **LonWorks**, or **Metasys N2**.
