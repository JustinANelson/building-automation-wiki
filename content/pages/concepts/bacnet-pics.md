---
id: bacnet-pics
type: concept
title: "Reading a BACnet PICS"
summary: "How to read a protocol implementation conformance statement, using Siemens document 149-1033 for the PTEC and ATEC terminal controllers."
review: verified
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

> The rest of this page is general BACnet practice, not taken from the Siemens statement above. The BACnet standard itself was not read.

## Reading the rest of a PICS

**Device profile.** Profiles name capability classes. A B-ASC (application specific controller) runs a fixed set of functions, a B-AAC (advanced application controller) adds scheduling, trending and alarming, a B-BC (building controller) is a general-purpose supervisory device that may also act as a router, and a B-OWS is an operator workstation. The profile tells you how much of the system's logic a device can take on by itself.

**BIBBs.** The letters before the dash name the family (DS for data sharing, SCHED for scheduling, T for trending, AE for alarms and events, DM for device management), the next letters name the function, and the final **A** or **B** says whether the device initiates (A) or provides (B) the service. A field controller usually lists mostly B, because it responds. An operator workstation lists A. For a front end to read a device, the front end must list the matching A and the device the matching B.

**Object types and properties.** The PICS lists which object types exist and which are creatable, deletable and writable. Look for the objects your integration needs: Analog Value for setpoints, Schedule and Calendar for local scheduling, Trend Log for local history, and Notification Class for alarms. Check which optional properties are writable, such as Present_Value on inputs for override, because that decides whether the front end can command the device.

**COV and alarms.** Change-of-value subscriptions reduce polling traffic. If the PICS lists no COV support, the supervisor must poll, which loads an MS/TP trunk. Intrinsic reporting, if listed, lets the device send alarms itself.

**Network options.** Look for the maximum APDU size, segmentation, supported data links with their baud rates, whether the device can act as a router or BBMD, and the range of MS/TP addresses. These determine how the device must be connected and how large a trunk can be.

## What a PICS does not tell you

A PICS is a statement of intent, not a test result. **BTL listing** means an independent laboratory has tested the device against its claimed capabilities. A PICS also says nothing about how a device's points are named or how its application behaves; those come from the product data sheet and engineering manual. A capability missing from the PICS may exist as a proprietary feature but cannot be relied on by another vendor's tool.

## Checklist before specifying

1. Does the product and firmware revision match the PICS you were given?
2. Is the profile enough for the role, and is the BIBB list matched by the front end?
3. Are the objects needed to write setpoints, schedules and alarms present and writable?
4. Can the device report by COV or alarm, or must it be polled?
5. Do the data link, baud rates and network features fit the trunk it will sit on?
6. Is the device BTL listed?

See [BACnet](../protocol/bacnet.html) for the services and object model behind these items.
