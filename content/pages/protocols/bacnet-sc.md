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


## Why it exists

Classic BACnet/IP assumes a trusted network. It has no real authentication, relies on broadcast, and needs IT staff to open UDP ports and keep BBMD tables correct. Building networks increasingly sit on shared IT infrastructure where those assumptions do not hold. BACnet/SC replaces the transport with something IT departments already know how to deploy and secure.

## How it works

- **Transport.** BACnet messages are carried over WebSocket connections inside TLS, so the traffic is encrypted and uses ordinary TCP.
- **Identity.** Every node holds a certificate issued by the site's certificate authority and presents it when it connects. Devices that cannot present a valid certificate are refused, which gives device-level authentication that older BACnet lacks.
- **Hub and spoke.** Each node makes an outbound connection to a **hub**. The hub forwards messages between nodes, including broadcasts, so there are no BBMDs and no subnet broadcast. Because nodes connect outward to the hub, a firewall can allow the connection in one direction only.
- **Direct connections.** The standard also allows nodes to open direct connections to each other for traffic that should not pass through the hub. A **failover hub** can be configured so the network keeps working if the primary hub is lost.
- **Interworking.** A BACnet/SC network is its own BACnet network. A router connects it to BACnet/IP and MS/TP segments, so existing field controllers can sit behind a secure backbone.

## What it changes in practice

The work moves from network addressing to certificate management: someone must run the certificate authority, issue and renew device certificates, and keep device clocks accurate enough for certificates to validate. Hubs become critical infrastructure and are usually duplicated.

Adoption depends on products. Check that both the supervisory controllers and the front-end software list BACnet/SC in their PICS and, ideally, in BTL listings, before specifying it; see [BACnet PICS](../concept/bacnet-pics.html).
