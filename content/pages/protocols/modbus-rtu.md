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


## Frame format and timing

An RTU message is sent as a continuous stream of 8-bit bytes: slave address, function code, data, then a 16-bit CRC. Each byte on the wire is **11 bits**: a start bit, eight data bits, a parity bit and a stop bit (with no parity, two stop bits are used instead so the character still has 11 bits). There are no start or end delimiters in the data. Instead, frames are separated by a **silent interval of at least 3.5 character times** (t3.5), and a gap of more than 1.5 character times inside a frame marks it as incomplete. The receiver therefore uses time, not a special character, to find where a message begins and ends.

At rates above 19200 bps the specification lets implementations use fixed timer values instead of scaling them with the baud rate, because very short character times are hard to measure. At or below 19200 bps the timers must be respected strictly.

## Bus behaviour

- **One conversation at a time.** The master sends a request to one address and waits for that slave's reply, or for a response timeout, before sending the next. A broadcast to address 0 is acted on by every slave and is never answered, so it is used for writes only.
- **Turnaround.** After a broadcast, the master waits long enough for slaves to process it before the next request; the specification gives a turnaround delay of 100 ms to 200 ms. The response timeout for a unicast request can be several seconds at 9600 bps.
- **Serial settings.** The specification requires 9600 bps and 19.2 kbps, with 19.2 kbps as the default. Many devices also offer 38.4 kbps and higher. Every device on the trunk must use the same baud rate, parity and stop bits; a single device configured differently makes a trunk unreliable, which usually shows up as sporadic timeouts and CRC errors.
- **Parity.** Even parity is the specified default, and supporting no parity is recommended for compatibility. Both ends must match.

## Troubleshooting

Check, in order: wiring polarity (A/B or D+/D- labels are inconsistent between manufacturers), termination at both ends of the trunk and bias on one point only, a shared signal common, unique slave addresses, matching serial settings, and finally the register address offset described on the [Modbus](modbus.html) page. A device that returns exception 02 is reachable; its address map is the problem. A device that never answers is a physical, address or serial-settings problem.
