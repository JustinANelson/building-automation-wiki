---
id: modbus
type: protocol
title: "Modbus"
summary: "Simple client-server register protocol used for equipment, meters, and sensors, over serial lines or TCP."
review: verified
related: [modbus-rtu, modbus-tcp, bacnet, rs-485]
sources:
  - https://www.modbus.org/file/secure/modbusprotocolspecification.pdf
  - https://www.modbus.org/file/secure/modbusoverseriallegacy.pdf
  - https://www.modbus.org/file/secure/messagingimplementationguide.pdf
---
Modbus is defined by the Modbus Organization. All variants share one application layer: a request carries a function code and data, and the PDU (protocol data unit) is at most **253 bytes**. The data model has four tables: coils (single bit, read-write), discrete inputs (single bit, read-only), input registers (16-bit, read-only), and holding registers (16-bit, read-write). Common function codes are 01 Read Coils, 02 Read Discrete Inputs, 03 Read Holding Registers, 04 Read Input Registers, 05/06 write single coil/register, and 15 (0x0F) / 16 (0x10) write multiple coils/registers.

| Variant | Page | Transport |
|---|---|---|
| Modbus RTU | [Modbus RTU](modbus-rtu.html) | Serial, RS-485 or RS-232, CRC framing |
| Modbus TCP | [Modbus TCP](modbus-tcp.html) | TCP port 502, MBAP header |

Read from: Modbus Application Protocol Specification V1.1b3, Modbus over Serial Line V1.02, and the Modbus Messaging on TCP/IP Implementation Guide V1.0b (all in the document library).


## How a transaction works

Modbus is a **client/server** (historically master/slave) request-response protocol. The client sends a request containing a function code and its data; the server performs the action and returns a response with the same function code. Servers never speak first. The protocol carries no knowledge of what a register means: whether holding register 40 is a setpoint in degrees or a fan speed in percent is defined only by the device's register map, which is why every Modbus integration starts from the manufacturer's map.

**Addressing.** In the PDU, data addresses start at **0**. Many vendors publish "register numbers" that start at 1, or add a table prefix (the traditional 0xxxx coils, 1xxxx discrete inputs, 3xxxx input registers, 4xxxx holding registers). These are documentation conventions, not part of the protocol; a mismatch of one is the most common cause of reading the wrong register. When a value does not match, try the address one lower or higher before suspecting the device.

**Multi-register values.** A register holds 16 bits. Values that do not fit, such as 32-bit integers and floating-point numbers, occupy two consecutive registers, and the specification does not say which word comes first. Word and byte order are vendor choices, so confirm them in the map.

**Exceptions.** If a server cannot perform a request, it replies with the function code plus **0x80** and a one-byte exception code. The codes most often seen are 01 Illegal Function (the device does not support that function code), 02 Illegal Data Address (the starting address plus quantity runs past what the device has), 03 Illegal Data Value (the request's structure is wrong, such as an inconsistent length) and 04 Server Device Failure (an unrecoverable error while processing). Codes 05 and 06 (acknowledge and busy) are for long programming commands, and 0A and 0B are used by gateways when the path or target does not respond. No response at all is a timeout, which the client must handle itself.

## Why it is common in building automation

Modbus is simple, openly published and royalty free, so almost any device can implement it. In buildings it is the usual way to read meters, variable-frequency drives, chillers and boilers, and many sensors into a BAS, often through a gateway or a controller's Modbus port. It has no device discovery, no object model and no engineering units, so it is less self-describing than [BACnet](bacnet.html); point lists and scaling are entered by hand.

## Choosing a variant

Use [Modbus RTU](modbus-rtu.html) over RS-485 for field devices wired on a trunk, and [Modbus TCP](modbus-tcp.html) where devices have Ethernet. The two share the same function codes and register model, so a gateway can translate between them by wrapping or unwrapping the PDU; see the unit identifier on the TCP page.
