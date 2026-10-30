---
id: york-smart-equipment
type: product-line
title: York Smart Equipment & OptiView Controls
summary: Johnson Controls / York factory-mounted packaged rooftop, split-system, and central chiller control platforms (Smart Equipment SSE/SEC and OptiView Control Center).
manufacturer: york
protocols: [bacnet, bacnet-mstp, bacnet-ip, modbus, modbus-rtu, lonworks]
status: current
review: verified
related: [york-sse-controller, york-optiview]
sources:
  - https://docs.johnsoncontrols.com/api/khub/documents/f_C2S8fA5i5hW2K1qX0hTw/content
  - https://docs.johnsoncontrols.com/api/khub/documents/k4M7qL9n0~p2sR5vW8xY1A/content
  - https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
---
York commercial HVAC equipment (under Johnson Controls) uses two primary factory-installed control families across university and institutional campuses:

- **Smart Equipment (`SSE` / `SEC`, Simplicity Smart Equipment)**: Factory-mounted unit control boards (`24-10053-9` 2-stage and `24-10052-8` single-stage UCB) with modular Economizer (`SE-ECO1001-0`), Fault Detection & Diagnostics (`SE-FDD1001-0`), and 4-Stage Expansion (`SE-SPU1004-0`) boards. Features an onboard 2x16 backlit LCD with joystick navigation, USB backup/restore and firmware port, and automatic RS-485 protocol detection for BACnet MS/TP, Modbus RTU, and Johnson Controls Metasys N2.
- **OptiView Control Center (`031-02430` / `031-03630`)**: Microprocessor control panel mounted on York centrifugal and rotary-screw water chillers (`YK`, `YT`, `YZ`, `YR`, `YMC2`), providing color graphical display of evaporator/condenser temperatures and pressures, surge and safety protection, variable-speed drive (VSD) and pre-rotation vane control, and BAS integration via E-Link or SC-EQ gateways.


### Applying the Controls

This section is an overview drawn from the other pages in this wiki.

**Smart Equipment.** The controller is selected with the unit, and the modular boards add functions: the economizer board for free cooling, the fault detection and diagnostics board for alerts, and the four-stage expansion board for extra cooling or heating stages. Before adding logic in the supervisory system, check which functions are already enabled on the unit; see [Economizer control](../concept/economizer-control.html).

**Network setup.** The controller detects the protocol on its RS-485 bus automatically, so integration is mostly a matter of setting the address and baud rate and then mapping the points. On a trunk shared with other devices, follow the usual rules; see [RS-485](../concept/rs-485.html) and [BACnet MS/TP](../protocol/bacnet-mstp.html). Use the USB port to back up the configuration and firmware before changes.

**OptiView.** The control center runs the chiller's own protection, so the building system should enable and set it, and read its status, but not take over its safeties. Gateways bring it onto BACnet, Modbus or LonWorks; see [Hydronic system control](../concept/hydronic-system-control.html) for the plant-level sequences that coordinate chillers, pumps and towers.

**Documents.** See [York SSE controller](../product/york-sse-controller.html) and [York OptiView](../product/york-optiview.html) for the individual products.
