---
id: qmx3
type: product
title: Siemens QMX3 KNX PL-Link Room Operator Units & Sensors
summary: Wall-mounted room temperature, humidity, and CO2 sensors and backlit LCD touch-key operator units for Siemens Desigo DXR2 and PXC4/PXC5/PXC7 controllers.
manufacturer: siemens
productLine: desigo
category: sensor
protocols: []
status: current
review: verified
images:
  - path: images/siemens/qmx3.svg
    alt: Technical diagram of Siemens QMX3.P34 and QMX3.P74 KNX PL-Link room operator unit showing backlit LCD, capacitive touch keys, Green Leaf indicator, and KNX PL-Link bus terminals
    source: Own work (BASWiki technical diagram based on Siemens QMX3 instruction sheet A6V10408335 and N1602en_QMX3.P34 data sheet)
    license: CC0-1.0
partNumbers:
  - number: QMX3.P30
    description: Wall-mounted KNX PL-Link room temperature sensor (no display, matte white)
    source: https://sid.siemens.com/api/khub/documents/X7rW~c4z7kS5f_8tK2y3Jw/content
  - number: QMX3.P34
    description: Wall-mounted KNX PL-Link room temperature sensor and operator unit with backlit LCD and capacitive touch keys for HVAC (SSN S55624-H105)
    source: https://www.siemens.be/cmc/upload/cms/docs/BT/Field_devices/N1602en_QMX3.P34.pdf
  - number: S55624-H105
    description: Siemens stock number (SSN) for QMX3.P34 room operator unit (white)
    source: https://www.siemens.be/cmc/upload/cms/docs/BT/Field_devices/N1602en_QMX3.P34.pdf
  - number: QMX3.P37
    description: Wall-mounted KNX PL-Link room operator unit with backlit LCD and capacitive touch keys for HVAC, lighting, and shading (SSN S55624-H108)
    source: https://sid.siemens.com/api/khub/documents/X7rW~c4z7kS5f_8tK2y3Jw/content
  - number: S55624-H108
    description: Siemens stock number (SSN) for QMX3.P37 Total Room Automation operator unit
    source: https://sid.siemens.com/api/khub/documents/X7rW~c4z7kS5f_8tK2y3Jw/content
  - number: QMX3.P40
    description: Wall-mounted KNX PL-Link room temperature and relative humidity sensor (no display)
    source: https://sid.siemens.com/api/khub/documents/X7rW~c4z7kS5f_8tK2y3Jw/content
  - number: QMX3.P44
    description: Wall-mounted KNX PL-Link room temperature and relative humidity sensor with backlit LCD operator unit
    source: https://sid.siemens.com/api/khub/documents/X7rW~c4z7kS5f_8tK2y3Jw/content
  - number: QMX3.P70
    description: Wall-mounted KNX PL-Link room temperature, relative humidity, and CO2 indoor air quality sensor (no display)
    source: https://sid.siemens.com/api/khub/documents/X7rW~c4z7kS5f_8tK2y3Jw/content
  - number: QMX3.P74
    description: Wall-mounted KNX PL-Link room temperature, relative humidity, and CO2 sensor with backlit LCD operator unit (SSN S55624-H106)
    source: https://sid.siemens.com/api/khub/documents/X7rW~c4z7kS5f_8tK2y3Jw/content
  - number: S55624-H106
    description: Siemens stock number (SSN) for QMX3.P74 multi-sensor room operator unit
    source: https://sid.siemens.com/api/khub/documents/X7rW~c4z7kS5f_8tK2y3Jw/content
related: [chilled-beams, desigo, dxr2, natural-ventilation, pxc4, pxc5, pxc7, qaa2280-series-2200, temperature-sensors]
sources:
  - https://sid.siemens.com/api/khub/documents/X7rW~c4z7kS5f_8tK2y3Jw/content
  - https://www.siemens.be/cmc/upload/cms/docs/BT/Field_devices/N1602en_QMX3.P34.pdf
---
The **Siemens QMX3** series (Data Sheet `N1602en` and Installation Instructions `A6V10408335`) is the standard wall-mounted room sensor and occupant operator unit for **Siemens Desigo DXR2** room automation stations and **Desigo PXC4/PXC5/PXC7** controllers.

### Model Matrix
| Model | Temperature (0–50 °C) | Relative Humidity (10–95% RH) | CO₂ (0–2000 ppm) | LCD & Touch Keys | Typical Campus Application |
| --- | --- | --- | --- | --- | --- |
| **QMX3.P30** | Yes | No | No | None (blank faceplate) | Corridors, public lobbies, and tamper-prone spaces |
| **QMX3.P34** (`S55624-H105`) | Yes | No | No | Backlit LCD + HVAC touch keys | Private offices, conference rooms, and patient rooms |
| **QMX3.P37** (`S55624-H108`) | Yes | No | No | Backlit LCD + HVAC, Lighting & Shading keys | Total Room Automation (TRA) spaces |
| **QMX3.P40 / QMX3.P44** | Yes | Yes | No | `.P40` blank / `.P44` LCD + keys | Spaces with chilled beams, radiant cooling, or humidity control |
| **QMX3.P70 / QMX3.P74** (`S55624-H106`) | Yes | Yes | Yes (optical NDIR) | `.P70` LED IAQ / `.P74` LCD + keys | Lecture halls, classrooms, and high-occupancy conference rooms (demand-controlled ventilation) |

### Technical Highlights
- **Condensation & Humidity Monitoring**: Models with relative humidity sensing (`.P40`, `.P44`, `.P70`, `.P74`) provide accurate room dew point calculation to the host controller to prevent [chilled beams](../concept/chilled-beams.html) and chilled ceilings from sweating. When a pipe condensation switch trips, LCD units show a condensation warning symbol.
- **KNX PL-Link Two-Wire Bus**: Powered directly from the host **DXR2** or **PXC4/5/7** controller's `KNX PL-Link` terminals (`CE+` / `CE-`, 21–30 VDC, 7.5–15 mA max consumption) with polarity protection and automatic plug-and-play device discovery in **ABT Site**.
- **Natural Ventilation & Mixed-Mode Occupant Feedback**: In buildings with operable windows and [natural ventilation](../concept/natural-ventilation.html), the display informs occupants when windows may be opened without penalty or when open sashes have caused mechanical cooling to shut down.
- **Room-Opti-Control ("Green Leaf" Indicator)**: Front-panel Green Leaf symbol turns red when occupant overrides (e.g., extreme setpoints or open windows during active cooling) cause unnecessary energy consumption; pressing the leaf resets the room to energy-optimal setpoints.
