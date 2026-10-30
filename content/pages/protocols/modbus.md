---
id: modbus
type: protocol
title: "Modbus"
summary: "Simple client-server register protocol used for equipment, meters, and sensors, over serial lines or TCP."
review: draft
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

