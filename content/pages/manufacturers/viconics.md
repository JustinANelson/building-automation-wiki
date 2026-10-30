---
id: viconics
type: manufacturer
title: Viconics
summary: Room controller and thermostat brand (VT7000 and VT8000 series, VC3000 relay packs), part of Schneider Electric and distributed via Veris Industries.
review: verified
related: [viconics-room-controllers, vt7200, vt7300, vtr7300, vt7600, vt8350, vtr8350, vt8650, vz8250]
sources:
  - https://www.veris.com/viconics/vt8000-series
  - https://www.veris.com/ASSETS/DOCUMENTS/CMS/EN/028-6100-13_Catalog-VT8000-VT7000_A4_EN_RH20250520.pdf
---
Viconics Technologies (acquired by Schneider Electric and distributed in North America alongside Veris Industries) designs wall-mounted application-specific room controllers that combine a thermostat user interface with commercial DDC logic, optional passive infrared (PIR) occupancy sensing, relative humidity sensing, and field-selectable BACnet MS/TP or Zigbee Pro wireless networking.

### Major Product Families
- **VT7000 Series (Segment LCD)**: **VT7200** (zoning, VAV, and heat/cool terminal units), **VT7300 / VT7350 / VT7355** (24 VAC low-voltage 2-pipe and 4-pipe fan coil controllers with 3-speed or 0–10 VDC ECM fan control), **VTR7300 / VTR7350 + VC3000** (two-component line-voltage 110–277 VAC fan coil system), and **VT7600 / VT7652 / VT7656 / VT7657** (packaged rooftop, heat pump, economizer, and IAQ controllers).
- **VT8000 Series (Color Touchscreen)**: **VZ8250** (zoning and VAV), **VT8350** (low-voltage fan coil), **VTR8350** (line-voltage fan coil with VC3000 relay pack), and **VT8650** (rooftop, heat pump, and IAQ with programmable Lua scripts).


### Choosing and Connecting a Viconics Controller

This section is an overview drawn from the product-line and concept pages in this wiki.

Viconics room controllers are chosen by the equipment they control, then by the display.

| Application | VT7000 (segment LCD) | VT8000 (colour touchscreen) |
| :--- | :--- | :--- |
| Zoning, VAV and heat/cool terminal units | VT7200 | VZ8250 |
| Fan coil, 24 V AC | VT7300 / VT7350 / VT7355 | VT8350 |
| Fan coil, line voltage | VTR7300 / VTR7350 with VC3000 relay pack | VTR8350 with VC3000 relay pack |
| Rooftop, heat pump, IAQ | VT7600 series | VT8650 |

**Network.** Controllers are field-selectable between BACnet MS/TP and Zigbee Pro wireless. On an MS/TP trunk the usual practice applies: unique MAC addresses, one baud rate, and a supervisory controller routing to BACnet/IP; see [BACnet MS/TP](../protocol/bacnet-mstp.html). Some models also have LonWorks variants, such as the VT7200 Echelon versions; see [LonWorks](../protocol/lonworks.html).

**Application logic.** Each model has built-in sequences for its application, so most installations need configuration and not custom programming: choose the equipment type, stages, fan control and setpoint limits. The VT8650 adds programmable scripts for sequences the built-in logic does not cover.

**Where they fit.** A Viconics controller is a field-level device (a B-ASC in BACnet terms). It runs its own loop and reports to a supervisory system, which can schedule it and read its status; see [Supervisory controllers](../concept/supervisory-controllers.html). Onboard humidity sensing allows dehumidification sequences, see [Humidity sensors](../concept/humidity-sensors.html).
