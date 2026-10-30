---
id: enocean
type: protocol
title: "EnOcean wireless standard"
summary: "Ultra-low-power energy-harvesting wireless standard (ISO/IEC 14543-3-10) for batteryless window contact switches, solar room sensors, and BAS gateways."
review: verified
related:
  - bacnet-ip
  - bacnet-mstp
  - chilled-beams
  - dxr2
  - knx
  - natural-ventilation
  - switches-and-safeties
  - window-actuators
sources:
  - https://www.enocean-alliance.org/
---

## Overview

**EnOcean** is an international open wireless standard (**ISO/IEC 14543-3-10**, *Information Technology — Home Electronic Systems (HES) — Architecture — Part 3-10: Wireless Short-Packet (WSP) Protocol*) optimized for ultra-low-power, **energy-harvesting** sensors and switches in commercial building automation systems.

In natural ventilation and chilled beam installations, monitoring whether perimeter windows are opened or closed is critical for locking out mechanical cooling and preventing condensation. Installing hardwired contacts across moving window sashes requires unsightly surface conduit and flexible door-cord loops that fatigue over time; conversely, conventional battery-powered wireless sensors impose substantial maintenance burdens across hundreds of windows. EnOcean resolves both dilemmas by powering wireless transceivers entirely from ambient kinetic motion, light, or temperature differences.

## Energy Harvesting Mechanisms

EnOcean field devices generate their own operational power from three primary ambient sources:

1. **Electrodynamic Kinetic Harvester**: An internal miniature magnet and coil assembly captures the physical mechanical movement of a window opening or handle turning. The kinetic stroke generates an instantaneous burst of electrical energy (approx. `100 to 200 µWs`), sufficient to power a microcontroller, sample the contact status, and transmit a complete radio packet.
2. **Indoor Solar Photovoltaic Cells**: Miniature indoor solar cells harvest ambient artificial room lighting (`100–200 lux`) to power magnetic reed contact window sensors, room temperature sensors, and relative humidity transmitters. An internal gold-cap supercapacitor stores enough energy to maintain continuous operation for several days of total darkness (such as weekends or holiday closures).
3. **Thermoelectric Harvesters (Peltier Elements)**: Harvests energy from the temperature difference ($\Delta T$) between a hot radiator pipe or chilled beam manifold and ambient air to power wireless self-acting valve actuators.

## Radio Characteristics and Equipment Profiles

- **EnOcean Equipment Profiles (EEPs)**: Standardized application data profiles ensuring interoperability across manufacturers:
  - `EEP A5-02-xx`: Room temperature sensors.
  - `EEP A5-04-xx`: Combined relative humidity and temperature transmitters.
  - `EEP A5-08-xx`: Light, temperature, and occupancy sensors.
  - `EEP D5-00-01`: Single-contact window and door reed switches (open/closed binary status).
- **Frequency Bands**: Operates in sub-gigahertz ISM frequency bands to achieve superior penetration through architectural walls and concrete slabs compared to 2.4 GHz protocols:
  - `868.3 MHz` in Europe / CEPT.
  - `902.875 MHz` in North America.
  - `928.35 MHz` in Japan.
- **Short-Packet Transmission**: EnOcean telegrams are compressed into sub-millisecond durations (`~1 ms` transmit burst) operating at `125 kbps`. Transmitting in ultra-brief bursts virtually eliminates packet collisions, reduces radio frequency clutter, and keeps energy consumption down to microjoules.

## BAS Network Integration and Gateways

Because EnOcean is an ultra-low-power edge protocol, it connects to central building automation networks via dedicated multi-protocol gateways:

- **Embedded Controller Gateways**: Devices such as the [Siemens Desigo DXR2](../product/dxr2.html) accept USB or plug-in EnOcean receiver antennas, allowing native wireless window contact monitoring directly at the room controller level.
- **EnOcean-to-BACnet Gateways**: Receives sub-GHz wireless telegrams from window contacts and temperature sensors, translating each EEP automatically into standard **BACnet/IP** or **BACnet MS/TP** objects (such as `Binary Input` for window status and `Analog Input` for temperature).
- **EnOcean-to-KNX Interfaces**: Directly maps EnOcean window and switch telegrams onto [KNX](knx.html) communication objects and group addresses for motorized blind, lighting, and window actuator control.
