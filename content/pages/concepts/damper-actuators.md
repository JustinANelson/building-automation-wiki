---
id: damper-actuators
type: concept
title: "Damper actuators"
summary: "Electric actuators that rotate air dampers, selected by torque, control signal, and fail-safe action."
review: draft
images:
  - path: images/concepts/damper-actuator-belimo-lf230s.jpg
    alt: "Belimo LF230-S spring-return rotary actuator, nameplate visible"
    source: "Phiarc, via Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Belimo_LF230-S_fail-safe_rotary_actuator.jpg"
    license: CC BY-SA 4.0
related: [belimo-damper-actuators, lmb24-3, nmb24-3, amb24-3, gdb181-1e-3, analog-signals]
sources:
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_LMB24-3_datasheet_en-us.pdf
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_NMB24-3_datasheet_en-us.pdf
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_AMB24-3_datasheet_en-us.pdf
---
A damper actuator is mounted directly on the damper shaft and rotates it, usually through 90 degrees. Choose by:

- **Torque.** Sized to the damper area and seal type. The Belimo LMB24-3, NMB24-3 and AMB24-3 are rated 5, 10 and 20 Nm (45, 90, 180 in-lb).
- **Control signal.** On/off or floating-point (drive open / drive closed) as on those Belimo models, or modulating 0-10 V / 2-10 V, or a digital bus.
- **Fail-safe action.** A spring-return actuator, such as the one pictured, drives to a defined position on power loss; non-spring-return actuators stay where they are.
- **Running time and supply.** The Belimo basic models run 95 seconds for 90 degrees on 24 V AC/DC. The pictured unit is a mains-voltage (230 V) type.

Siemens combines an actuator with a VAV controller in one housing: see the GDB181.1E/3 and GLB181.1E/3.

