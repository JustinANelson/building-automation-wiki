---
id: bacnet-ip
type: protocol
title: "BACnet/IP"
summary: "BACnet carried over UDP/IP on Ethernet, with BBMDs bridging broadcast domains."
review: draft
related: [bacnet, bacnet-mstp, bacnet-sc]
sources:
  - https://bluerithm.com/bacnet-technical-summary/
  - https://softwaretoolbox.com/resources/what-is-bacnet
---
> The BACnet standard (ASHRAE 135, ISO 16484-5) is paywalled and was not read for this page. This summary is from secondary sources and general knowledge; confirm details against the standard or a device PICS.

BACnet/IP maps BACnet messages onto UDP datagrams. The default UDP port is 47808 (0xBAC0). BACnet relies on broadcast for discovery (Who-Is), and IP routers do not forward broadcasts, so a **BBMD** (BACnet Broadcast Management Device) on each subnet forwards broadcasts between subnets, and a **foreign device** can register with a BBMD to take part from another network.

Practical notes: give controllers fixed IP addresses, avoid duplicate device instance numbers across the whole internetwork, and route MS/TP trunks into IP through a BACnet router.

