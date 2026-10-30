---
id: york
type: manufacturer
title: York (Johnson Controls)
summary: Commercial HVAC OEM brand under Johnson Controls; packaged rooftops, split systems, and central chillers use Smart Equipment (SSE/SEC) and OptiView controls.
review: verified
related: [york-smart-equipment, york-sse-controller, york-optiview]
sources:
  - https://docs.johnsoncontrols.com/api/khub/documents/f_C2S8fA5i5hW2K1qX0hTw/content
  - https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
  - https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/tech-corner/documents/engineering/sequence-of-operations-sse--50.pdf
---
York International (acquired by Johnson Controls in 2005) manufactures commercial packaged rooftop units (Sunline, Predator, Millennium, Affinity), split systems, air-handling units, and central water chillers (`YK` centrifugal, `YT` low-pressure centrifugal, `YZ` magnetic-bearing centrifugal, `YR` screw, and `YMC2`).

### Control Platforms
- **Smart Equipment (`SSE` / `SEC`, Simplicity Smart Equipment)**: Standard factory-mounted microprocessor controller (`24-10053-9` / `24-10052-8`) across York packaged rooftop and split-system units. Auto-detects BACnet MS/TP, Modbus RTU, and Johnson Controls Metasys N2 on its RS-485 FC bus so units can integrate directly into multi-vendor campus BAS front-ends (such as Siemens Desigo CC or APOGEE Insight).
- **OptiView Control Center (`031-02430` / `031-03630`)**: Standard factory-mounted graphical control center on York central chillers, integrating into campus automation networks via E-Link or SC-EQ gateways over BACnet MS/TP, BACnet/IP, Modbus RTU, LonWorks, or N2.
