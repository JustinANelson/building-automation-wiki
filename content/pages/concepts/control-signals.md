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

## Choosing among them

| Method | Controller output | Position feedback | Typical use |
| :--- | :--- | :--- | :--- |
| Modulating | One analog output (0-10 V, 4-20 mA) | Optional, often a separate analog signal | VAV dampers, control valves, any loop needing fine control |
| Floating | Two binary outputs (open, close) | None, or an optional feedback signal | Proportional control with ordinary relay or triac outputs |
| Two-position | One binary output | End switches, sometimes | Isolation dampers, outdoor-air dampers on/off, zone valves |

Modulating control is simplest to configure and troubleshoot because the commanded value is the position. Floating control needs cheaper controller hardware, two triac or relay outputs and no analog converter, but the controller must estimate position. Two-position control is the right answer when the device only needs to be open or shut.

## How floating control works

The controller holds a position estimate. To move the actuator from 40 % to 60 % open, it pulses the open output for the time the actuator takes to travel 20 % of its stroke. The controller needs the actuator's **runtime**, the time for a full stroke, as a configured value. A **deadband** around the setpoint stops the controller from nudging the actuator endlessly for small errors.

Because the position is calculated and not measured, errors accumulate: a stalled actuator, a manual override, or a slightly wrong runtime makes the estimate drift from reality. Controllers handle this by occasionally driving the actuator fully open or closed, usually when the loop commands a position at or near an end, so the estimate is reset against the end stop. Set the controller's runtime to the actuator's rated time, and check that a manual override has not been left engaged.

## Tuning considerations

- **Minimum pulse.** A pulse shorter than the actuator can respond to moves it too little or not at all. Controllers have a minimum on-time to prevent this.
- **Wind-up.** Without feedback a controller can believe it has opened a valve that is in fact jammed, and the loop's integral term can wind up. Limit integral action or use feedback on critical valves.
- **Actuator speed versus loop speed.** A slow actuator on a fast loop causes hunting. Match the actuator speed to the application.
- **Fail-safe.** Whichever signal is used, the actuator's failure behaviour is separate. A spring-return actuator moves to a set position when power is lost; a non fail-safe actuator stays where it is. Choose based on what the system must do on power loss, such as a damper closing against freezing or a heating valve opening.

See [VAV control](vav-control.html) for an application where damper position is driven by an airflow loop, and [Damper actuators](damper-actuators.html) and [Control valves](control-valves.html) for the devices themselves.
