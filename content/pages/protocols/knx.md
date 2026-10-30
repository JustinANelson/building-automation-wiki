---
id: knx
type: protocol
title: "KNX"
summary: "Open twisted-pair building bus used by Siemens QMX3 room operator units, engineered with ETS or the Synco ACS tool."
review: needs-review
related: [qmx3, bacnet, lonworks, rs-485]
sources:
  - https://sid.siemens.com/v/u/A6V10408335
---
> The KNX standard is published by the KNX Association (knx.org) and was not read for this page. Everything below is taken from the Siemens QMX3 room operator unit documents and is limited to what they state, down to the "KNX in general" section, which is general knowledge and says so.

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


## KNX in general

> This section is general knowledge of the KNX standard, not taken from the Siemens QMX3 documents. The standard itself was not read. Confirm figures against the KNX standard or the product documentation before design.

**Origins and openness.** KNX is a worldwide standard for building control, managed by the KNX Association and used for lighting, blinds, heating, ventilation and room control. It grew from the earlier European bus standards EIB, EHS and BatiBUS. Devices from many manufacturers interoperate because the standard defines the communication objects and data point types, and ETS is the common engineering tool.

**Media.** KNX runs over several media:

| Medium | Description |
| :--- | :--- |
| Twisted pair (TP) | The common wired medium, carrying data and bus power on one pair at 9600 bit/s |
| Radio frequency (RF) | Wireless, for retrofit |
| IP | KNXnet/IP tunnels or routes KNX telegrams over Ethernet |
| Power line (PL) | Data over the mains, now less common |

**Twisted-pair topology.** A line segment is supplied by a bus power supply (about 29 V DC) and typically holds up to 64 devices. Several segments make a line, lines are joined to a main line through couplers to make an area, and areas are joined by a backbone. The topology is a tree; a loop is not allowed. Segment length is limited, with typical limits of about 1000 m of cable per segment and shorter distances from the supply to a device and between two devices, which the KNX specification sets exactly. A bus supply and a choke for each segment are part of the design.

**Addressing.** Each device has an **individual address** in the form area.line.device, used for programming and diagnosis. Devices communicate through **group addresses**, which are what the application uses: a switch sends "on" to a group address, and every lamp actuator listening on that group responds. Group addresses are commonly organised in main, middle and sub groups, for example by function, floor and room.

**How devices communicate.** A device sends a short **telegram** on the bus to a group address, carrying a value in a standard **data point type** such as a switch, a dimming value or a temperature. Receivers that are assigned to that group address act on it. Because the bus is event-driven, devices transmit when something changes and not on a polling cycle, and no central controller is needed for simple room functions.

## Engineering workflow

1. The designer lists the devices and their functions, and decides on the group address structure.
2. In ETS, each device's application program is loaded, its communication objects are given group addresses and parameters are set.
3. The installer downloads the physical address and the application to each device, using the programming pin and LED to identify it.
4. The project database in ETS is the record of the installation, so it must be kept and backed up. A lost project means rediscovering devices and addresses.

## Using KNX with a BAS

KNX handles room-level sensing and actuation well, but a building-wide management system normally speaks BACnet. A **gateway** or a controller with a KNX interface exposes selected group addresses as BACnet objects, and the mapping should list each group address, its data point type, units and direction. Only the values that management needs, such as room temperature, setpoint and occupancy, should be mapped, since mapping every group address burdens both sides.

See [BACnet](bacnet.html) for the building-level side and [Supervisory controllers](../concept/supervisory-controllers.html) for where the gateway sits.
