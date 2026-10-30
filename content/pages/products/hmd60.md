---
id: hmd60
type: product
title: "Vaisala HMD60 and HMD70 Duct Transmitters"
summary: "Duct-mount humidity and temperature transmitters: HMD60 is 2-wire 4-20 mA, HMD70 is 3-wire with voltage output."
manufacturer: vaisala
productLine: vaisala-hvac-transmitters
category: sensor
protocols: []
status: current
review: needs-review
partNumbers:
  - number: HMD60U
    description: Duct mount, RH only; 2-wire, 4-20 mA output
    source: https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
  - number: HMD60Y
    description: Duct mount, RH and temperature; 2-wire, 4-20 mA output
    source: https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
  - number: HMD60T
    description: Duct mount, temperature only; 2-wire, 4-20 mA output
    source: https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
  - number: HMD70U
    description: Duct mount, RH only; 3-wire, voltage output
    source: https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
  - number: HMD70Y
    description: Duct mount, RH and temperature; 3-wire, voltage output
    source: https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
  - number: HMD70T
    description: Duct mount, temperature only; 3-wire, voltage output
    source: https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
sources:
  - https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
related: [hmdw110, hmw90, analog-signals]
---
Read from the French data sheet B210839FR (descriptions translated). Only the French edition was downloaded; an English edition exists but was not located.


## Choosing and Wiring

This section is an overview drawn from the part-number descriptions above and the other pages in this wiki.

The suffix tells you what is measured: `U` is humidity only, `Y` is humidity and temperature, and `T` is temperature only. The number tells you the wiring: the **HMD60** is a 2-wire, loop-powered 4-20 mA device, and the **HMD70** is a 3-wire device with a voltage output.

| Need | Choose |
| :--- | :--- |
| Controller input is 4-20 mA | HMD60 |
| Controller input is 0-10 V or similar voltage | HMD70 |
| Humidity and dew point or enthalpy derived in the controller | A Y model (needs both humidity and temperature) |

**Wiring.** A 4-20 mA loop-powered unit needs a loop supply high enough for the transmitter, the input resistor and the wire. Match the controller's scaling to the transmitter's configured range, and check one point at each end; see [Analog signals](../concept/analog-signals.html).

**Mounting.** Put the probe in well-mixed air, for example the return duct for building humidity, and away from humidifier discharge; see [Humidity sensors](../concept/humidity-sensors.html). A newer cost-efficient alternative is the [HMDW110](hmdw110.html), which also offers Modbus RTU. The page note says only the French data sheet was read, so confirm details against the English edition.
