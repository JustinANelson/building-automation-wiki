---
id: modbus-tcp
type: protocol
title: "Modbus TCP"
summary: "Modbus carried over TCP/IP with a 7-byte MBAP header and no CRC."
review: draft
related: [modbus, modbus-rtu]
sources:
  - https://www.modbus.org/file/secure/messagingimplementationguide.pdf
  - https://www.modbus.org/file/secure/modbusprotocolspecification.pdf
---
Modbus TCP sends the same PDU over TCP, prefixed by a 7-byte **MBAP header** (transaction identifier, protocol identifier, length, and a single-byte unit identifier). The slave address of the serial line becomes the unit identifier, which is used to reach serial devices behind a gateway. The ADU is therefore the 253-byte PDU plus 7 bytes, **260 bytes**. Servers listen on registered TCP port **502**, and there is no separate CRC because TCP provides its own integrity checking.


## The MBAP header

The seven bytes in front of the PDU are:

| Field | Size | Purpose |
| :--- | :--- | :--- |
| Transaction identifier | 2 bytes | Chosen by the client and copied into the response, so replies can be matched to requests |
| Protocol identifier | 2 bytes | 0 for Modbus |
| Length | 2 bytes | Number of following bytes: the unit identifier plus the PDU |
| Unit identifier | 1 byte | Identifies a slave behind a gateway; see below |

Because TCP is a byte stream with its own sequencing and checksum, Modbus TCP needs no CRC and no silent-interval timing. The length field tells the receiver where each message ends.

## Connections and concurrency

A client opens a TCP connection to the server on port 502 and sends requests over it. The implementation guide allows **several Modbus transactions to be active at once on the same connection**; when a client does this it must use the transaction identifier to pair responses with requests. Many field devices support only one or a few simultaneous client connections, so a second system polling the same device can lock out the first.

The guide recommends the TCP Keep Alive mechanism on both ends so a broken connection is noticed. Without it, a half-open connection can persist until a keep-alive timer expires.

## Gateways and the unit identifier

On a native Modbus TCP device the unit identifier is usually ignored, or must be set to a fixed value such as 0xFF or 1 as the manufacturer states. When the server is a **gateway** to a serial trunk, the unit identifier is the serial slave address, so one IP address can front up to 247 RS-485 devices. A typical building installation is a Modbus TCP to RTU gateway at an electrical panel or plant room, with the meters or drives wired to it on RS-485, and the BAS controller polling the gateway over Ethernet. The gateway's own serial settings must match the devices behind it.

## Security

Modbus TCP has no authentication or encryption. Anyone who can reach port 502 can read and write registers. Keep it on a segregated control network, firewall the port, and do not expose it to the internet.
