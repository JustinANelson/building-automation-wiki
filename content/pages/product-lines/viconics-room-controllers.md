---
id: viconics-room-controllers
type: product-line
title: Viconics VT7000 and VT8000 Room Controllers
summary: Wall-mounted commercial room controllers for zoning, VAV, 2-pipe/4-pipe fan coils, line-voltage fan coils (with VC3000 relay packs), rooftops, and heat pumps.
manufacturer: viconics
protocols: [bacnet, bacnet-mstp, modbus, modbus-rtu]
status: current
review: verified
related: [vt7200, vt7300, vtr7300, vt7600, vt8350, vtr8350, vt8650, vz8250]
sources:
  - https://www.veris.com/viconics/vt8000-series
  - https://www.veris.com/ASSETS/DOCUMENTS/CMS/EN/028-6100-13_Catalog-VT8000-VT7000_A4_EN_RH20250520.pdf
---
Viconics VT7000 (segment LCD) and VT8000 (color touchscreen) room controllers bridge the gap between standalone commercial thermostats and networked DDC terminal controllers. They are widely deployed in campus dormitories, offices, classrooms, and retrofit buildings where existing 2-pipe/4-pipe fan coils, heat pumps, or packaged rooftop units need BACnet MS/TP or Zigbee Pro wireless integration without installing separate remote DDC panels:

- **Zoning & VAV Terminal Units**: **VT7200** and **VZ8250**.
- **Low-Voltage Fan Coil Units (24 VAC)**: **VT7300 / VT7350 / VT7355** (3-speed relay or 0–10 VDC ECM fan) and **VT8350**.
- **Line-Voltage Fan Coil Units (110–277 VAC)**: **VTR7300 / VTR7350** and **VTR8350** wall controllers paired over a 3-wire low-voltage bus with unit-mounted **VC3000 Series Relay Packs** (`VC3300E5000`–`VC3514E5000`).
- **Packaged Rooftop, Heat Pump & IAQ Units**: **VT7600 / VT7652 / VT7656 / VT7657** and **VT8650**.


### Choosing a Model

This section is an overview drawn from the other pages in this wiki.

1. **Pick the equipment.** Zoning or VAV, fan coil (and whether it is 24 V AC or line voltage), or rooftop, heat pump or IAQ.
2. **Pick the series.** VT7000 has a segment LCD and is the lower-cost choice. VT8000 has a colour touchscreen, and the VT8650 adds scripting for sequences beyond the built-in logic.
3. **Pick the network.** BACnet MS/TP on a wired trunk, or Zigbee Pro where wiring a trunk is impractical, as in many retrofits.
4. **Check the options.** Occupancy and humidity sensing and the fan type, such as three-speed relay or ECM with a 0-10 V signal.

| Application | VT7000 | VT8000 |
| :--- | :--- | :--- |
| Zoning, VAV | [VT7200](../product/vt7200.html) | [VZ8250](../product/vz8250.html) |
| Fan coil, 24 V | [VT7300](../product/vt7300.html) | [VT8350](../product/vt8350.html) |
| Fan coil, line voltage | [VTR7300](../product/vtr7300.html) | [VTR8350](../product/vtr8350.html) |
| Rooftop, heat pump | [VT7600](../product/vt7600.html) | [VT8650](../product/vt8650.html) |

**Line-voltage fan coils** use a wall controller and a unit-mounted VC3000 relay pack on a low-voltage bus, so the wall device never carries line voltage.

**Commissioning notes.** Set the equipment type before anything else, then stages, fan control and setpoint limits. On MS/TP, give each controller a unique address and match the baud rate; see [BACnet MS/TP](../protocol/bacnet-mstp.html). See [Viconics](../manufacturer/viconics.html) for the manufacturer overview and [Humidity sensors](../concept/humidity-sensors.html) for the onboard RH sensing.
