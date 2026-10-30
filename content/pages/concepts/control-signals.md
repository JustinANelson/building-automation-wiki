---
id: control-signals
type: concept
title: "Floating, two-position and modulating control"
summary: "The three ways a controller drives an actuator: modulating, floating (tri-state), and on/off."
review: draft
related: [io-points, analog-signals, damper-actuators, control-valves, dampers-and-louvers, vav-control, openair-gde-glb, siemens-599-zone-valve, amb24-3]
sources:
  - https://sid.siemens.com/v/u/A6V10445888
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_AMB24-3_datasheet_en-us.pdf
---
A controller commands a damper or valve actuator in one of three ways.

- **Modulating.** An analog signal, usually 0 to 10 V or 4 to 20 mA, sets the position in proportion. See [Analog signals](analog-signals.html).
- **Floating (tri-state).** The Siemens PTEC glossary defines it as a modulating controlled device used with a pair of two-position outputs. One output drives the device toward open, the other toward closed, and with both off the device holds its last position. The controller does not read position back, so a long-run recalibration (driving to an end stop) keeps it accurate.
- **Two-position (on/off).** Fully open or fully closed.

The Belimo [AMB24-3](../product/amb24-3.html), [LMB24-3](../product/lmb24-3.html) and [NMB24-3](../product/nmb24-3.html) are all non fail-safe actuators that take on/off or floating-point control (they differ in torque: 20, 5 and 10 Nm). Check each data sheet for the exact signal types.
