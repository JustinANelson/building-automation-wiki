---
id: damper-actuators
type: concept
title: "HVAC damper and valve actuators"
summary: "Electric rotary and linear actuators that drive HVAC air dampers and hydronic control valves, selected by torque or stroke force, control signal, fail-safe action, run time, and auxiliary feedback."
review: draft
images:
  - path: images/concepts/damper-actuator-belimo-lf230s.jpg
    alt: "Belimo LF230-S spring-return rotary actuator, nameplate visible"
    source: "Phiarc, via Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Belimo_LF230-S_fail-safe_rotary_actuator.jpg"
    license: CC BY-SA 4.0
related:
  - belimo-damper-actuators
  - lmb24-3
  - nmb24-3
  - amb24-3
  - openair-gde-glb
  - gdb181-1e-3
  - glb181-1e-3
  - apogee-atec
  - siemens-599-zone-valve
  - dampers-and-louvers
  - control-valves
  - control-signals
  - analog-signals
  - io-points
sources:
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_LMB24-3_datasheet_en-us.pdf
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_NMB24-3_datasheet_en-us.pdf
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_AMB24-3_datasheet_en-us.pdf
  - https://sid.siemens.com/api/khub/documents/fU1aL7f23fKvIGrmhJ24Kg/content
---

An HVAC **actuator** converts an electrical control signal from a DDC controller into mechanical rotation (to position an [air damper](dampers-and-louvers.html), ball valve, or butterfly valve through `90°`) or linear stem stroke (to position a globe or zone [control valve](control-valves.html)).

## 1. Rotary vs. Linear Actuators

- **Direct-Coupled Rotary Actuators (`90°` Quarter-Turn)**: Clamp directly onto a round (`3/8 in. to 1.05 in.`) or square damper shaft using a self-centering universal clamp and an anti-rotation bracket attached to the duct or VAV box casing. Standard rotation is `90°` (`95°` mechanical maximum) with a manual declutch button that disengages the gear train for hand positioning during balancing.
- **Linear & Electro-Thermal Valve Actuators**: Mount onto a valve bonnet to push or pull a globe/zone valve stem over a short linear stroke (for example, `2.5 mm` (`0.1 in.`) on [Siemens 599 Series Zone Valves](../product/siemens-599-zone-valve.html) or `5.5 mm to 40 mm` on central-plant globe valves).
- **Integrated Controller-Actuators**: Combine a brushless DC motor and gear train, a `0–1 in. w.c.` differential pressure airflow transducer, and a BACnet or FLN zone controller inside a single housing—such as the [Siemens GDB181.1E/3](../product/gdb181-1e-3.html), [GLB181.1E/3](../product/glb181-1e-3.html), and [APOGEE ATEC](../product/apogee-atec.html)—eliminating separate field mounting and wiring on VAV terminal boxes.

## 2. Torque & Force Sizing

Rotary damper actuators are rated by rotational torque in **Newton-meters (`Nm`)** or **inch-pounds (`in-lb`, where `1 Nm ≈ 8.85 in-lb`)**:

| Torque Class | Metric (`Nm`) | Imperial (`in-lb`) | Typical Damper / Terminal Application | Wiki Product Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Sub-Compact / VAV** | `5 Nm` | `44–45 in-lb` | Round VAV terminal box dampers (`6–16 in.` diameter, up to `~10 ft²` low-velocity damper area) | [Siemens GDE131.1P / GDB181.1E/3](../product/openair-gde-glb.html), [Belimo LMB24-3](../product/lmb24-3.html), [Siemens ATEC](../product/apogee-atec.html) |
| **Medium Commercial** | `10 Nm` | `88–90 in-lb` | Large VAV terminals (`18–24 in.`), fan-coil / unit-ventilator dampers, bypass dampers up to `~20 ft²` | [Siemens GLB131.1P / GLB181.1E/3](../product/openair-gde-glb.html), [Belimo NMB24-3](../product/nmb24-3.html) |
| **Large Commercial** | `18–20 Nm` | `160–180 in-lb` | Air handler mixing, return, and relief dampers (`~35–40 ft²` depending on blade seal and face velocity) | [Belimo AMB24-3](../product/amb24-3.html), Siemens OpenAir `GMA` / `GCA` series (`18 Nm`) |
| **Heavy AHU / Tandem** | `35–40 Nm` (`×2`) | `310–360 in-lb` | Large central-station AHU outdoor air and exhaust louver dampers (often mechanically jackshafted or electronically tandem-mounted) | Siemens OpenAir `GBB` / `GIB`, Belimo `GM` / `EF` series |

> **Sizing Rule of Thumb**: Parallel-blade and opposed-blade control dampers typically require `4 to 7 in-lb per ft²` of damper face area depending on blade-edge/jamb seal friction and maximum duct static pressure at `1,000–2,500 fpm`. Always apply the damper manufacturer's published torque per square foot with a safety margin.

## 3. Fail-Safe Action (Non-Spring Return vs. Spring Return vs. Electronic Fail-Safe)

What happens to the damper or valve when `24 VAC` control power is interrupted (or opened by a [safety cutout](switches-and-safeties.html) such as a freeze stat or smoke detector) is determined by the actuator's fail-safe mechanism:

1. **Non-Spring Return (`NSR` / Fail-in-Place)**: Has no return spring or energy storage. When power is removed, the gear train holds the shaft stationary at its last commanded position. Used on interior VAV terminal boxes ([Siemens GDE/GLB](../product/openair-gde-glb.html), [Belimo LMB/NMB/AMB](../product/lmb24-3.html)) where failing in place during a power outage poses no freeze or life-safety hazard.
2. **Mechanical Spring Return (`SR` / Fail-Safe)**: Winding the actuator open simultaneously winds an internal clockwork steel spring (e.g., `Belimo LF230-S` pictured above, Siemens OpenAir `GMA`/`GCA`, or [Siemens SFA71U / SSF161.05U](../product/siemens-599-zone-valve.html) zone valves). When power is removed, the spring mechanically drives the damper or valve to its fail-safe position (`0%` closed on outdoor air intake dampers, `100%` open on perimeter heating valves to prevent pipe freeze). Reversing the physical mounting face of a rotary spring-return actuator (`CW` vs. `CCW`) selects whether spring return drives the damper open or closed.
3. **Electronic / Supercapacitor Fail-Safe (`FSM`)**: Uses internal supercapacitors that charge from the `24 VAC/DC` supply and drive the motor to a pre-set fail-safe position (`0–100%` selectable) on power loss.

## 4. Control Signals, Run Time & Auxiliary Feedback

- **Control Signal Types** (see [Control signals](control-signals.html) and [I/O point types](io-points.html)):
  - **Two-Position (`On/Off`, 1 `DO`)**: Energize to drive fully open (`100%`), de-energize to return fully closed (`0%`).
  - **Floating / Tri-State (3-Wire, 2 `DO` Triacs)**: Wire `1` (`Common`), Wire `6` (`Drive Clockwise`), Wire `7` (`Drive Counter-Clockwise`). Energizing one triac rotates the actuator at a constant speed (typically `90–95 seconds` for `90°` on standard VAV/AHU actuators); de-energizing both holds position.
  - **Proportional / Modulating (`0–10 VDC`, `2–10 VDC`, or `4–20 mA`, 1 `AO` + optional `AI` feedback)**: Internal microprocessor positions the actuator proportionally to the command voltage and outputs a `0–10 VDC` or `2–10 VDC` position feedback signal (`U`).
  - **Communicating Bus**: Direct `BACnet MS/TP`, `KNX PL-Link`, or `MP-Bus` wiring carrying both command setpoint and actual position/torque telemetry over a twisted-pair bus.
- **Standard vs. High-Speed Run Times**: Standard commercial actuators take `60 to 150 seconds` (`90–95 s` typical) for a `90°` stroke so floating control loops can modulate smoothly without hunting. Critical [laboratory and fume hood controls](laboratory-and-fume-hood-control.html) use high-speed actuators (`<1 second` to `3 seconds` full stroke) on [Phoenix Controls CSCP/Traccel valves](../product/cscp-valve.html) and [Siemens APOGEE 570-Series terminals](../product/apogee-570-lab-fume-hood.html).
- **Feedback Potentiometers & Auxiliary End Switches**:
  - **Feedback Potentiometer (`P` suffix on Siemens `GDE132.1P` / `GLB132.1P`)**: Provides a `0–1000 Ω` resistive signal proportional to shaft angle so a controller can verify exact damper position on a floating actuator.
  - **Auxiliary End Switches (`-S` on Belimo or `6` suffix on Siemens `GDE136.1P` / `GLB136.1P`)**: One or two adjustable SPDT dry-contact switches inside the actuator that close at field-set rotation angles (e.g., `80°` open) to prove that an outdoor intake or isolation damper is open before starting a fan (`DI` proof interlock).


## 5. Installation and Commissioning

> This section is general practice, not taken from the cited documents. Use the actuator's own installation sheet for wiring and settings.

**Checks before powering up.**

1. **Supply.** Confirm the supply voltage and type (24 V AC, 24 V AC/DC or line voltage) and size the transformer for the actuator's rated power plus inrush; see [Field panels and enclosures](field-panels-and-enclosures.html).
2. **Wiring.** Match the common, the control and the feedback terminals to the actuator's diagram. A floating actuator wired with open and close swapped drives the wrong way; a modulating actuator wired with the signal and common reversed may not move.
3. **Direction of rotation.** Set the actuator for clockwise or counterclockwise on increasing signal, and set the spring-return direction so that the failure position is the safe one. Many actuators have a switch or a mounting orientation for this.
4. **Mounting.** Fit the actuator centred on the shaft, tighten the clamp to the manufacturer's torque, and fix the anti-rotation bracket so the actuator body cannot turn. A body that moves with the shaft wastes stroke and loosens in service.
5. **Stroke.** Set the angle limits so the actuator reaches the damper's end stops without forcing them. On some actuators, an adaptation or calibration run finds the mechanical end stops automatically.

**Function test.** Command the actuator to 0, 50 and 100 percent and confirm that the damper or valve reaches each, and that any feedback signal and end switches agree with what the damper does. Test the fail-safe by removing power. Operate the manual override or hand crank to make sure it is free and that the actuator returns to automatic control after use.

## 6. Troubleshooting

| Symptom | What to check |
| :--- | :--- |
| Actuator does not move | Supply voltage at the actuator, control signal at the terminals, a tripped transformer breaker, a manual override left engaged |
| Moves the wrong way | Direction switch or wiring on a floating pair; reversed action configured in the controller |
| Moves but the damper does not | Slipped clamp, broken coupling or linkage, or the actuator body not anchored |
| Hunts around the setpoint | Loop gain too high, a stroke time too fast or slow for the loop, or a noisy input |
| Does not fully close | Stroke limit set short, a worn seal, or torque too low for the load |
| Actuator overheats or trips | Torque under-sized, a jammed damper, or a supply voltage that is low under load |
| Spring return does not return | Stuck or damaged spring, a blade or linkage that binds, or the damper held by a frozen shaft |

## 7. Selecting a Replacement

When replacing an actuator, match the torque or force, the stroke and rotation, the shaft size and clamp, the supply voltage, the control signal and the fail-safe action. Differences in run time or in feedback can change loop behaviour, so check the controller's configured runtime and feedback scaling after the swap. Where a smoke or fire damper is involved, the replacement must carry the same listing as the original.

See [Dampers and louvers](dampers-and-louvers.html) for the dampers being driven and [Control valves](control-valves.html) for the valve side.
