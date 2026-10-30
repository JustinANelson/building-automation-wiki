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

