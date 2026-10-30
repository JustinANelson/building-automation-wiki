---
id: bacnet-mstp
type: protocol
title: "BACnet MS/TP"
summary: "BACnet master-slave/token-passing data link over RS-485 twisted pair, the usual field bus between controllers."
review: needs-review
related: [bacnet, bacnet-ip, rs-485]
sources:
  - https://bluerithm.com/bacnet-technical-summary/
  - https://softwaretoolbox.com/resources/what-is-bacnet
---
> The BACnet standard (ASHRAE 135, ISO 16484-5) is paywalled and was not read for this page. This summary is from secondary sources and general knowledge; confirm details against the standard or a device PICS.

MS/TP runs on a two-wire RS-485 bus. Master nodes pass a token and may initiate requests; slave nodes only reply. MAC addresses 0-127 are for masters. Typical rates are 9600 to 76800 baud, with 115200 supported by some devices, and every device on a trunk must use the same rate. A segment is commonly limited to about 1200 m (4000 ft) and 32 standard unit loads, with line termination at both ends and a shared signal common.

See [RS-485](../concept/rs-485.html) for wiring practice. Trane Symbio and UC400 controllers, Viconics room controllers, and many VAV controllers are MS/TP devices.


## How the token works

MS/TP (Master-Slave/Token-Passing) lets many devices share one RS-485 pair without a central poller. Only the device holding the **token** may transmit. A master that holds the token sends its own messages, up to a configured limit (Max_Info_Frames), and then passes the token to the next master by sending a Token frame to that master's address. Masters pass the token in ascending address order and the last one wraps back to the lowest, so the token circulates around a logical ring.

Slave nodes never hold the token. They speak only to answer a request from a master, so they are simpler and cheaper but cannot start a conversation, send alarms on their own or subscribe to changes of value that originate in them.

**Finding and joining the ring.** Each master periodically uses **Poll For Master** frames to look for new masters in the address range between itself and the next known master. A new master that answers is added to the ring, and a master that stops answering is dropped. The highest address a master will poll is its **Max_Master** property; lowering it from the default 127 to the real highest address on the trunk shortens every token cycle.

**Frames.** Every MS/TP frame begins with the preamble bytes 0x55 and 0xFF, followed by a frame type, destination and source addresses, a length, an 8-bit header CRC and, if there is data, the data and a 16-bit data CRC. The main frame types are Token, Poll For Master, Reply To Poll For Master, Test Request and Test Response, and two data types, one that expects a reply and one that does not. A node that sends a request in a "data expecting reply" frame must get its answer back within a short reply window or the master passes the token on.

## Performance and sizing

All traffic shares one wire, so throughput falls as devices are added. Every extra master adds a token pass to every cycle, and a low baud rate lengthens each one. The practical rules are:

- Use the highest baud rate that every device and the cable length allow; 38400 or 76800 is common on healthy trunks.
- Keep trunks to a modest number of devices. Many manufacturers recommend fewer than the 32 unit loads the electrical limit allows, and large trunks are better split across several router ports.
- Set Max_Master to the actual highest address and number the masters contiguously from 1, so no time is spent polling empty addresses.
- Avoid putting large trend or schedule reads on a busy trunk during working hours.

## Addresses

The MAC address is a single byte, unique on that trunk only. 0 to 127 are the master range, 128 to 254 are slaves, and 255 is broadcast. The MS/TP trunk is its own BACnet network, so a router such as a supervisory controller joins it to the BACnet/IP backbone and gives it a network number. Device instance numbers, which identify devices to BACnet services, must be unique across the whole internetwork and are separate from the MAC address.

## Wiring problems

Most MS/TP faults are physical: reversed polarity, a missing signal common, a trunk wired as a star or with long stubs, missing or doubled end-of-line termination, mixed baud rates, and shields grounded at more than one point. Devices that appear and disappear from the network are usually a wiring or termination problem, not a software problem. See [RS-485](../concept/rs-485.html).
