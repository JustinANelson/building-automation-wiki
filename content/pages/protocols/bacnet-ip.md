---
id: bacnet-ip
type: protocol
title: "BACnet/IP"
summary: "BACnet carried over UDP/IP on Ethernet, with BBMDs bridging broadcast domains."
review: needs-review
related: [bacnet, bacnet-mstp, bacnet-sc]
sources:
  - https://bluerithm.com/bacnet-technical-summary/
  - https://softwaretoolbox.com/resources/what-is-bacnet
---
> The BACnet standard (ASHRAE 135, ISO 16484-5) is paywalled and was not read for this page. This summary is from secondary sources and general knowledge; confirm details against the standard or a device PICS.

BACnet/IP maps BACnet messages onto UDP datagrams. The default UDP port is 47808 (0xBAC0). BACnet relies on broadcast for discovery (Who-Is), and IP routers do not forward broadcasts, so a **BBMD** (BACnet Broadcast Management Device) on each subnet forwards broadcasts between subnets, and a **foreign device** can register with a BBMD to take part from another network.

Practical notes: give controllers fixed IP addresses, avoid duplicate device instance numbers across the whole internetwork, and route MS/TP trunks into IP through a BACnet router.


## How it works

Each BACnet/IP device has an IP address and listens on a UDP port (47808 by default, which a site can change as long as every device agrees). A BACnet message is wrapped in a small **BVLC** (BACnet Virtual Link Control) header and sent in a UDP datagram, either directly to one device (unicast) or to the subnet broadcast address.

Discovery relies on broadcast. A workstation sends **Who-Is**, devices answer **I-Am** with their device instance number and address, and the workstation then talks to each one directly with ReadProperty, WriteProperty and the other services. See [BACnet](bacnet.html) for the services and object model.

## Crossing subnets

Routers do not forward broadcasts, so two ways exist to make discovery work across subnets:

- **BBMD.** One BBMD per subnet holds a table (the Broadcast Distribution Table) listing the BBMDs of the other subnets. When it hears a local broadcast it forwards a copy to each of them, and they rebroadcast locally. Every BBMD must list every other, and the tables must agree.
- **Foreign device registration.** A single device or a laptop on a subnet with no BBMD registers with a remote BBMD for a time-to-live period and then sends and receives broadcasts through it. This suits a technician connecting remotely, not permanent devices.

Misconfigured BBMDs are a classic fault: broadcast loops that flood the network, or devices that can be seen from one side but not the other. If every subnet is permanent, one design is to avoid broadcasts across subnets altogether and have the supervisory software address devices directly.

## BACnet/IP and MS/TP together

Field controllers on [MS/TP](bacnet-mstp.html) trunks connect to the IP network through a BACnet router, often built into a supervisory controller. Each MS/TP trunk has its own BACnet network number, and the IP segment has another; no two networks in the system may share a number, and no two devices may share a device instance.

## Network practice

- Use fixed or reserved addresses for controllers, because the BBMD tables and workstation device lists refer to addresses.
- Put building controls on their own VLAN or network and agree it with the IT department, since the broadcast traffic and the lack of authentication in classic BACnet/IP make it unsuitable for the open corporate network.
- Allow UDP 47808 (or the site's chosen port) between the segments that must talk.
- BACnet/IP has no built-in security. Where authentication and encryption are required, see [BACnet/SC](bacnet-sc.html).
