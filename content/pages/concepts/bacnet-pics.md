---
id: bacnet-pics
type: concept
title: "Reading a BACnet PICS"
summary: "How to read a protocol implementation conformance statement, using Siemens document 149-1033 for the PTEC and ATEC terminal controllers."
review: draft
related: [bacnet, bacnet-mstp, apogee-tec-vav, apogee-atec, vav-control]
sources:
  - https://sid.siemens.com/v/u/A6V10490415
---
A PICS (protocol implementation conformance statement) is a manufacturer's list of what a BACnet device supports. Before specifying or integrating a device, check its PICS for the points below. The examples come from Siemens document 149-1033 (2015-10-20), which covers the standard BACnet ATEC and PTEC terminal controllers.

1. **Products and revisions.** The statement lists each model number with its protocol revision (Revision 9, ASHRAE 135-2010 here), application software revision and firmware revision. A PICS applies only to the listed combinations.
2. **Device profile.** The PTEC and ATEC are BACnet Application Specific Controllers (B-ASC), the profile for single-purpose controllers such as terminal boxes.
3. **BIBBs.** Interoperability building blocks name the services a device can use or provide. The suffix B means the device provides the service. This one lists ReadProperty, ReadPropertyMultiple and WriteProperty (data sharing); Dynamic Device Binding and Dynamic Object Binding; DeviceCommunicationControl, ReinitializeDevice, Backup and Restore, and Object Creation and Deletion.
4. **Object types.** Analog Input, Binary Input, Device, File and Program are supported but not creatable or deletable; Analog Output and Binary Output are creatable and deletable.
5. **Data link layer.** MS/TP master and slave at 9600, 19200, 38400 and 76800 bps. See [BACnet MS/TP](../protocol/bacnet-mstp.html).
6. **Segmentation.** Not supported for sending or receiving, so a large response must fit in one message.
7. **Address binding and networking.** No static device binding; not a router; no BBMD. Such a device needs a supervisory controller or router on the network to reach BACnet/IP.
8. **Character set.** ANSI X3.4.

The same statement also covers fume hood, laboratory and pressurized-room controllers (570-series) and smoke-control-listed (UUKL) variants, which carry the same protocol data.
