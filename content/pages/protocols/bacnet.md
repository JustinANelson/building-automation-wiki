---
id: bacnet
type: protocol
title: "BACnet"
summary: "ASHRAE 135 / ISO 16484-5 open protocol for building automation, carried over IP, MS/TP, or secure transports."
review: draft
related: [bacnet-ip, bacnet-mstp, bacnet-sc, rs-485, modbus]
sources:
  - https://bluerithm.com/bacnet-technical-summary/
  - https://softwaretoolbox.com/resources/what-is-bacnet
---
> The BACnet standard (ASHRAE 135, ISO 16484-5) is paywalled and was not read for this page. This summary is from secondary sources and general knowledge; confirm details against the standard or a device PICS.

BACnet defines a common object model (for example Analog Input, Analog Output, Binary Input, Schedule, Trend Log, and Device objects) and services such as ReadProperty, WriteProperty, Who-Is/I-Am discovery, and change-of-value subscriptions. Interoperability is tested by BACnet Testing Laboratories (BTL), and each device publishes a PICS (protocol implementation conformance statement) listing the objects and services it supports. Device profiles such as B-BC (building controller) describe capability classes.

## Data links

| Link | Page | Medium |
|---|---|---|
| BACnet/IP | [BACnet/IP](bacnet-ip.html) | Ethernet, UDP/IP |
| MS/TP | [BACnet MS/TP](bacnet-mstp.html) | RS-485 token passing |
| BACnet/SC | [BACnet/SC](bacnet-sc.html) | Secure WebSocket over TLS |

Vendor pages in this wiki that use BACnet include the Siemens Desigo PX stations, Viconics room controllers, and Trane Symbio controllers.



## How BACnet is structured

BACnet is defined as layers. At the top is the **application layer**: objects and the services that act on them. Below it is a **network layer** that routes messages between networks, and below that a choice of **data links**, listed in the table above. Because the object model and services are the same on every data link, a device on MS/TP and a device on IP can exchange the same messages through a router, which is why one supervisory controller can manage field trunks and an IP backbone together.

## Objects and properties

Everything a device exposes is an **object**, and every object has **properties**. Common properties include:

| Property | What it holds |
| :--- | :--- |
| Object_Identifier | Object type plus an instance number, unique within the device |
| Object_Name | A text name, unique within the device |
| Present_Value | The current value of the point |
| Status_Flags | In alarm, fault, overridden, out of service |
| Out_Of_Service | When true, Present_Value stops following the hardware and can be written for testing |
| Units | Engineering units for analog objects |

A temperature input is an Analog Input whose Present_Value is the temperature. A setpoint is usually an Analog Value, and a fan command a Binary Output or Binary Value. Other object types cover schedules, calendars, trend logs, alarm notification classes and loops. Which object types and properties a device supports is stated in its PICS; see [Reading a BACnet PICS](../concept/bacnet-pics.html).

## Writing and priority

Writable outputs and values have a **priority array** of sixteen slots. A write specifies a priority, and the object's Present_Value is the value in the highest-priority (lowest-numbered) slot that is occupied. If nothing is occupied, a Relinquish_Default applies. By convention priorities 1 and 2 are reserved for life safety, 5 for critical equipment control, 8 for a manual operator override, and lower priorities for automatic control, with 16 the lowest. This lets a safety function or an operator override the control program, and lets the override be removed by writing a null at the same priority, returning control to the next occupied slot. A frequent fault is an override left in a priority slot, so a point appears stuck.

## Services

Services are the requests and responses between devices.

| Group | Examples | Use |
| :--- | :--- | :--- |
| Data sharing | ReadProperty, ReadPropertyMultiple, WriteProperty | Read and write values |
| Discovery | Who-Is, I-Am, Who-Has, I-Have | Find devices and objects |
| Change of value | SubscribeCOV and COV notifications | The device sends a value when it changes by a set amount, so the client need not poll |
| Alarm and event | Event notifications, acknowledgement | Report alarms to workstations |
| Device management | DeviceCommunicationControl, ReinitializeDevice, time synchronisation | Control devices remotely |

**Polling and COV.** A client that polls many points makes heavy traffic, particularly on MS/TP. COV and trend logs in the device reduce it. Check that both client and device support COV, and set increments so a noisy sensor does not flood the network.

## Alarms

BACnet supports alarms in two ways. **Intrinsic reporting** is built into an object: it compares its own value with high and low limits and sends a notification through a notification class to the recipients listed there. **Algorithmic reporting** uses separate event-enrollment objects that monitor another object. Notification classes carry the priority, acknowledgement requirements and recipient list, and a configuration mistake there is a common reason alarms never reach the operator.

## Addressing

Three identifiers are in play:

- **Device instance number**, unique across the whole internetwork, used to identify a device to services. Duplicates cause confusing behaviour in discovery.
- **Network number**, assigned to each BACnet network, such as an IP segment or an MS/TP trunk, unique across the internetwork.
- **MAC address**, the data-link address: an IP address and port on BACnet/IP, or a single byte on MS/TP.

Routers join networks and forward messages by network number. A device on a trunk is reached as a network number plus MAC address.

## Interoperability and testing

BACnet's conformance system has three parts. The **PICS** states what a device claims. **BIBBs** group services into functions that two devices must match to work together. **BACnet Testing Laboratories (BTL)** tests devices against the standard and lists those that pass. A BTL listing is stronger evidence than a PICS alone. Even so, vendors differ in how they name points and structure objects, so integration still needs a point list and testing.

## Troubleshooting

| Symptom | Likely cause |
| :--- | :--- |
| Device not found by Who-Is | Wrong subnet or missing BBMD, device instance duplicated, firewall blocking the port, or the device is on a different MS/TP network |
| Values read but writes have no effect | A higher-priority value is occupying the priority array, or the point is read-only |
| Point stuck | An override at a higher priority, or Out_Of_Service set |
| Trunk slow | Too many devices or points polled, low baud rate or large Max_Master; see [BACnet MS/TP](bacnet-mstp.html) |
| Alarms missing | Notification class recipients, event enable flags, or the workstation's subscription |
| Large reads fail | The device does not support segmentation, so the response exceeds one message |

See [Supervisory controllers](../concept/supervisory-controllers.html) for how routers and field controllers fit together.
