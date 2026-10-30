---
id: knx
type: protocol
title: "KNX"
summary: "Open twisted-pair building bus used by Siemens QMX3 room operator units, engineered with ETS or the Synco ACS tool."
review: draft
related: [qmx3, bacnet, lonworks, rs-485]
sources:
  - https://sid.siemens.com/v/u/A6V10408335
---
> The KNX standard is published by the KNX Association (knx.org) and was not read for this page. Everything below is taken from the Siemens QMX3 room operator unit documents and is limited to what they state.

KNX is a field bus for room-level devices: sensors, operator units, controllers and actuators from many manufacturers on one bus. In this wiki it appears through the [Siemens QMX3](../product/qmx3.html) wall-mounted sensors and room operator units, which Siemens describes as KNX certified.

**Interoperability.** The QMX3 documents say the operator units can be connected to any suitable KNX device, provided the matching communication objects exist in that device's application. Data point types are defined in the KNX Standard, Volume 3, Part 7, Chapter 2.

**Media.** The QMX3 uses a twisted-pair connection (the "KNX / PL-Link" plug). Siemens recommends unscreened twisted-pair cable, saying it has sufficient EMC properties for building applications, and tells installers to observe the KNX standard's permissible line lengths and topologies and to use a bus supply that meets it. Specific lengths are in the KNX standard and the Siemens KNX bus data sheet (CE1N3127), neither of which is reproduced here.

**Engineering.** Devices are configured in one of two ways:

| Mode | Tool | Use |
| :--- | :--- | :--- |
| KNX/ETS | ETS Engineering Tool Software | Systems such as GAMMA building management, third-party devices, free configuration |
| KNX/ACS | ACS790 | Synco700 systems; only QMX3.P30, P40 and P70 supply sensor information |

**Commissioning aids.** Each device has a service LED and a programming pin, and ships with peel-off address labels carrying its unique KNX ID. The labels can be stuck onto a floor plan so that device identity and location are recorded at installation.

**Relationship to BACnet.** KNX is a room-level bus, not a building backbone; in the QMX3 documents it serves room sensing and operation, with integration through other systems such as GAMMA or Synco, rather than replacing [BACnet](bacnet.html).
