---
id: bacnet-sc
type: protocol
title: "BACnet/SC"
summary: "Secure Connect: BACnet over WebSocket with TLS, using a hub-and-spoke topology."
review: draft
related: [bacnet, bacnet-ip]
sources:
  - https://www.incibe.es/index.php/en/incibe-cert/blog/understanding-bacnet-present-and-future-protocol-industrial-environments
---
> The BACnet standard (ASHRAE 135, ISO 16484-5) is paywalled and was not read for this page. This summary is from secondary sources and general knowledge; confirm details against the standard or a device PICS.

BACnet/SC (Secure Connect) was added to the standard to give BACnet authenticated, encrypted transport. Devices connect to a hub over secure WebSockets using TLS and certificates, which removes the need for BBMDs and broadcast-based discovery across the network and works through ordinary IT firewalls. It can coexist with BACnet/IP and MS/TP networks through routers.

