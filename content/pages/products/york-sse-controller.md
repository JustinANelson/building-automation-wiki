---
id: york-sse-controller
type: product
title: York Smart Equipment (SSE / SEC) Packaged Unit Controller
summary: Johnson Controls / York factory-mounted packaged rooftop and split-system unit controller with 2x16 LCD, joystick UI, USB backup/firmware port, and auto-detected BACnet MS/TP, Modbus RTU, or N2 communications.
manufacturer: york
productLine: york-smart-equipment
category: packaged-unit-controller
protocols: [bacnet, bacnet-mstp, modbus, modbus-rtu, lonworks]
status: current
review: verified
images:
  - path: images/york/york-sse-controller.svg
    alt: Technical diagram of York Smart Equipment Controller (24-10053-9 / 24-10052-8 UCB) showing 2x16 backlit LCD, navigation joystick, USB port, SA/FC RS-485 buses, and SE-ECO1001-0 / SE-FDD1001-0 expansion boards
    source: Own work (BASWiki technical diagram based on Johnson Controls / York Smart Equipment Bulletin LIT-12011998 and Sequence of Operations SSE-50)
    license: CC0-1.0
partNumbers:
  - number: 24-10053-9
    description: Smart Equipment Unit Control Board (UCB), 2-Stage Cooling/Heating main controller with 2x16 LCD, joystick, USB port, and BACnet MS/TP, Modbus RTU & N2 RS-485 bus
    source: https://docs.johnsoncontrols.com/api/khub/documents/f_C2S8fA5i5hW2K1qX0hTw/content
  - number: 24-10052-8
    description: Smart Equipment Unit Control Board (UCB), Single-Stage main controller
    source: https://docs.johnsoncontrols.com/api/khub/documents/f_C2S8fA5i5hW2K1qX0hTw/content
  - number: SE-ECO1001-0
    description: Smart Equipment Economizer Controller Board for outdoor air free cooling and demand-controlled ventilation (CO2)
    source: https://docs.johnsoncontrols.com/api/khub/documents/f_C2S8fA5i5hW2K1qX0hTw/content
  - number: SE-FDD1001-0
    description: Smart Equipment Fault Detection & Diagnostics (FDD) Expansion Board for refrigeration circuit monitoring
    source: https://docs.johnsoncontrols.com/api/khub/documents/f_C2S8fA5i5hW2K1qX0hTw/content
  - number: SE-SPU1004-0
    description: Smart Equipment Four-Stage Expansion Control Board for 3- and 4-stage cooling/heating rooftop units
    source: https://docs.johnsoncontrols.com/api/khub/documents/f_C2S8fA5i5hW2K1qX0hTw/content
  - number: 24-10094-76
    description: NS Series Communicating Network Zone Sensor with fault code display capability (SA Bus)
    source: https://docs.johnsoncontrols.com/api/khub/documents/f_C2S8fA5i5hW2K1qX0hTw/content
related: [york-smart-equipment, york-optiview]
sources:
  - https://docs.johnsoncontrols.com/api/khub/documents/f_C2S8fA5i5hW2K1qX0hTw/content
  - https://docs.johnsoncontrols.com/api/khub/documents/k4M7qL9n0~p2sR5vW8xY1A/content
  - https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/tech-corner/documents/engineering/sequence-of-operations-sse--50.pdf
---
The **York Smart Equipment Controller** (`SSE` / `SEC`, also marketed as **Simplicity Smart Equipment**, Product Bulletin `LIT-12011998`, BACnet/Modbus/N2 Points List `5177447-UTS-A-1215`, and Sequence of Operations `SSE-50`) is the standard factory-mounted microprocessor controller across York commercial packaged rooftop units (`Sunline`, `Predator`, `Millennium`, `Affinity`) and commercial split systems.

### Architecture & Campus BAS Integration
- **Automatic Protocol Detection on the FC Bus**:
  - The onboard RS-485 Field Controller (`FC`) bus automatically detects and switches between **BACnet MS/TP**, **Modbus RTU**, and **Johnson Controls Metasys N2** without requiring an external gateway card. This allows York rooftop units on campus buildings to be wired directly onto a **Siemens Desigo PXC5 / PXC7** or **APOGEE PXC** BACnet MS/TP or Modbus trunk.
- **Modular Board Architecture (`LIT-12011998`)**:
  - **Main Unit Control Board (`24-10053-9` 2-stage / `24-10052-8` 1-stage UCB)**: Includes a `2 × 16` backlit LCD display, 4-way navigation joystick (`UP`, `DOWN`, `LEFT`, `RIGHT`, `ENTER`), status LEDs (`Power`, `Fault`, `SA Bus`), a standard **USB-A port** for cloning configurations, exporting trend/alarm logs, and flashing firmware (`v3.x+`), and a `0–10 VDC` variable-speed ECM/VFD fan output (`IntelliSpeed` SZVAV).
  - **Economizer Board (`SE-ECO1001-0`)**: Adds outdoor air damper actuator control, dry-bulb/enthalpy changeover, and `0–10 VDC` `CO2` demand-controlled ventilation.
  - **Fault Detection & Diagnostics Board (`SE-FDD1001-0`)** and **4-Stage Board (`SE-SPU1004-0`)**: Interconnect over the local Sensor/Actuator (`SA`) bus alongside **NS Series** communicating room sensors (`24-10094-76`).
