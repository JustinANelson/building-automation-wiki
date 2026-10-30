---
id: apogee-fln
type: protocol
title: APOGEE Floor Level Network (FLN)
summary: Siemens proprietary RS-485 field network (P1) connecting APOGEE terminal and equipment controllers to a field panel.
review: verified
related: [rs-485, apogee-tec-vav, apogee-atec, apogee-mbc, vav-control, supervisory-controllers, bacnet-mstp]
sources:
  - https://sid.siemens.com/v/u/A6V10445888
  - https://sid.siemens.com/api/khub/documents/qfKRjJjW4TsT6NaZ1oVO9Q/content
  - https://sid.siemens.com/api/khub/documents/cgLnduKM0WaPhFtgWilGQQ/content
---
## What it is

The Floor Level Network (FLN, also written Field Level Network) is the lowest of the networks in a Siemens APOGEE system. It is a serial, multidrop trunk on which a **field panel** talks to the small controllers that actually run individual rooms and pieces of equipment: VAV box controllers, fan coil and unit-ventilator controllers, rooftop controllers, laboratory fume hood controllers and similar. The Siemens operation manual defines the FLN as the network made up of equipment controllers, FLN end devices, fume hoods and so on. An *equipment controller* is an FLN device, such as a BACnet PTEC or ATEC, that provides individual room or mechanical equipment control, or additional point capacity, to a field panel.

Siemens documents the FLN as **P1**. It is distinct from the **P2** network, which is the APOGEE Automation Level Network (ALN) that links field panels to each other and to workstations. In the data sheets the two are listed side by side: the P2 ALN runs over Ethernet/IP or RS-485 (1200 bps to 115.2 Kbps), while the P1 FLN is its own RS-485 port. The protocol on the trunk is Siemens proprietary, even though some products that sit on it carry "BACnet" in the name; those products are BACnet-capable on their other port but are still FLN devices on the trunk.

## Where it fits

An APOGEE building is usually described in three tiers:

| Tier | Network | Typical members |
| :--- | :--- | :--- |
| Management | Management Level Network (MLN) or Ethernet | Insight workstations, servers |
| Automation | P2 Automation Level Network (ALN) | Field panels (PXC Compact, PXC Modular, MBC, MEC) |
| Field | P1 Floor / Field Level Network (FLN) | TEC, PTEC and ATEC terminal controllers, fume hood controllers, other equipment controllers |

The field panel is the bridge. Upward it appears on the ALN as a node with its own schedules, trends and alarms. Downward it is the FLN **master**: it owns the trunk and every FLN device is a subordinate that answers when addressed.

## How it works

**Physical layer.** The trunk is RS-485, a differential, half-duplex, multidrop signalling standard; see [RS-485](../concept/rs-485.html). Data travels as the voltage difference between a positive and a negative conductor, which makes it tolerant of electrical noise over long cable runs. The Siemens data sheets specify the FLN port as RS-485, **4800 bps to 38.4 Kbps**, at **1/8 unit load**. The 1/8 load figure matters because the RS-485 standard allows 32 full unit loads on a segment; lightly loaded transceivers let more devices share the trunk. The TEC VAV data sheet lists its communications as a "remote 4800 bps FLN trunk".

**Wiring.** A PTEC connects to the trunk on three screw terminals labelled positive (+), negative (-) and reference. The reference terminal gives the transceivers a common-mode reference. The controller is powered separately from 24 V AC on its own terminals; the FLN wiring carries signal only. The APOGEE TEC installation guides treat the FLN as a power-limited RS-485 circuit, distinct from the RS-232 room sensor (RST) connection on the same controller.

**Addressing.** Every device on a trunk has a unique address, set on the controller as the controller address point (CTLR ADDRESS, point 01 on the PTEC). The address is how the field panel names each device. A second point, APPLICATION (point 02), identifies which application program the controller is running.

**Polling.** The panel runs the trunk as a master. It sends a message addressed to one device and that device replies; devices never talk unprompted. The panel uses this to read each controller's points (room temperature, airflow, damper position, setpoints, alarm status) and to write commands and setpoints to it. Controllers keep running their own control loop between polls, so the trunk carries supervisory information and does not close the control loop.

**Stand-alone operation.** An FLN controller runs its application in its own firmware. A controller can be used as a stand-alone DDC room controller or networked to a field panel, which supplies the supervisory connection. Whether and for how long a given controller keeps its last setpoints if the trunk is lost is application-specific; check the controller manual.

## Capacity

Capacity is set by the panel, not by the trunk alone. From the Siemens data sheets:

- A **PXC Compact** PXC-16 or PXC-24 "F" model with an FLN license supports up to **32** P1 FLN devices when its ALN is connected to TCP/IP.
- A **PXC-36** with an FLN license supports up to **96** P1 FLN devices, whether the ALN is on RS-485 or TCP/IP.
- A **PXC Modular** reaches the FLN through the PXX-485.3 expansion module, which provides three RS-485 P1 FLN connections (or one MS/TP FLN connection) and supports a maximum of **96** devices. Three physically separate trunks is a practical help for long runs or for splitting a building by floor.
- On the PXC Compact, FLN support is a license (for example LSM-FLN and LSM-FLN36.A) on some models, so the hardware alone is not always enough.

Some Compact models offer either MS/TP or P1 FLN on the same port, so the two are alternatives on that port, not simultaneous.

## Wireless FLN

Siemens also offers a **wireless FLN**, in which the wired P1 cabling is replaced by wireless links that form a mesh network. It needs additional hardware at the panel and at the devices, and the PXC Compact and PXC Modular data sheets list it as an option. It is useful in retrofits where pulling new trunk cable is expensive.

## Design notes and limits

- **Topology:** RS-485 trunks are normally daisy-chained, not star wired, with only short stubs to each device.
- **Termination and distance:** RS-485 trunks need proper termination and biasing, and length is limited by baud rate and cable. The maximum FLN trunk length has not been sourced from a Siemens document yet; take it from the panel installation guide rather than from this page.
- **Baud rate:** the 4800 bps to 38.4 Kbps range is the panel port's specification. Which rate a given trunk uses is a project setting, and all devices on a trunk must match.
- **Migration:** newer Siemens room controllers are BACnet MS/TP devices instead of P1 devices; see [BACnet MS/TP](bacnet-mstp.html) and [Supervisory controllers](../concept/supervisory-controllers.html).

## In this wiki

FLN devices described elsewhere include the [APOGEE TEC VAV](../product/apogee-tec-vav.html), [APOGEE ATEC](../product/apogee-atec.html) and the [MBC point module](../product/apogee-mbc.html). The [VAV control](../concept/vav-control.html) concept shows how a terminal controller uses the trunk.
