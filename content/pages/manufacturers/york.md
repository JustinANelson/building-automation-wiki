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


### Working with York Controls

This section is an overview drawn from the product-line and concept pages in this wiki.

York controls arrive with the equipment: the Smart Equipment controller is factory mounted on packaged rooftops and split systems, and the OptiView control center on central chillers. A site normally receives them already configured for the unit, so the job is integrating them into the building system and setting local parameters.

**Rooftop and split systems.** The Smart Equipment controller exposes its RS-485 field bus and can use BACnet MS/TP, Modbus RTU or Johnson Controls N2. Set the protocol, address and baud rate to suit the trunk, then confirm the unit's points appear in the front end. Many rooftop sequences, such as economizer changeover and demand-controlled ventilation, are built in, so check which are enabled before adding logic in the supervisory system; see [Economizer control](../concept/economizer-control.html) and [CO2 sensors](../concept/co2-sensors.html).

**Chillers.** OptiView integration normally goes through an additional gateway, as described above, and the chiller keeps its own safeties and capacity control. The building system typically enables the chiller, sets a chilled-water setpoint, and reads status and alarms; it does not replace the chiller's protection. Flow switches and interlocks follow the usual rules; see [Switches and safeties](../concept/switches-and-safeties.html) and [Hydronic system control](../concept/hydronic-system-control.html).

**Integration checklist.**

1. Confirm the controller model and software version against the integration documentation.
2. Set protocol, address and baud rate; see [RS-485](../concept/rs-485.html).
3. Map and name the points the front end needs, with units and scaling.
4. Verify alarms, schedules and setpoint writes at the supervisory system, and confirm the unit's local override behaviour.
