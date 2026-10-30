---
id: modbus-rtu
type: protocol
title: "Modbus RTU"
summary: "Modbus over a serial line (usually two-wire RS-485) with binary framing and a CRC-16 check."
review: draft
related: [modbus, modbus-tcp, rs-485]
sources:
  - https://www.modbus.org/file/secure/modbusoverseriallegacy.pdf
  - https://www.modbus.org/file/secure/modbusprotocolspecification.pdf
---
Modbus over serial line is a master-slave protocol: one master and up to 247 slaves share the bus, each slave with a unique address from **1 to 247**. Address 0 is broadcast and 248-255 are reserved. The serial ADU is the slave address (1 byte), the PDU (up to 253 bytes), and a 2-byte CRC, so at most **256 bytes**. RTU frames use a cyclic redundancy check; the ASCII variant uses an LRC instead. The specification requires **even parity** as the default and recommends also supporting no parity for compatibility.

At the physical level TIA/EIA-485 two-wire is the most common interface, and four-wire RS-485 is an option. See [RS-485](../concept/rs-485.html).

Vaisala HMDW110 and GMW90 transmitters offer Modbus RTU output.

