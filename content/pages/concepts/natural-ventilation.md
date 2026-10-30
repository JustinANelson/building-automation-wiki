---
id: natural-ventilation
type: concept
title: "Natural and mixed-mode ventilation"
summary: "Using motorised vents and windows for ventilation and night cooling, and how a BAS controls them."
review: draft
related: [chilled-beams, co2-sensors, control-strategies, damper-actuators, dampers-and-louvers, economizer-control, energy-conservation-strategies, enocean, switches-and-safeties, temperature-sensors, window-actuators]
sources:
  - https://www.usablebuildings.co.uk/UsableBuildings/Unprotected/NatventOpeningPIIRpt2000.pdf
---
Natural ventilation uses wind and the inside-outside temperature difference instead of fans. It can be used alone or combined with mechanical ventilation and cooling as **mixed mode**. This page follows *Specification of Automatic Vent Opening Devices for Natural Ventilation* (Bordass, Ford and Schiano, final draft, April 2000), a UK discussion document; it predates current practice, so check recent guidance before design.

**Why it needs controls.** The driving forces (wind speed, wind direction, temperature difference) are always changing, so the report says it is neither practical nor necessary to hold a constant ventilation rate. The key requirements are acceptable temperatures, good indoor air quality (IAQ) and, if possible, occupants' sense of control. The reservoir of air in the room smooths short-term flow swings.

**Ventilation purposes.** The report breaks the job into purposes, only some of which need automatic natural ventilation (ANV): control pollution at source (with dilution ventilation as a last resort; offices then need about one air change per hour), keep IAQ acceptable year-round, provide summer cooling, and use night cooling to pre-cool thermal mass. Fire and smoke ventilation needs separate consideration.

**Night cooling controls.** The report lists the problems a controller must solve:
- Judging when the building needs night cooling; temperature sensors embedded in the structure can supplement air temperature.
- Not over-cooling: occupants dressed for a hot day dislike starting at 18 degrees C; about 23 degrees C may be the minimum acceptable.
- Not starting night cooling while people are still in the building.

**Hardware.** A controlled system has opening elements, actuators, linkages and controls. Motorized [window actuators](window-actuators.html) (such as chain drives, spindle linear actuators, and rack-and-pinion operators) provide the force required to seal sashes against wind pressure and driving rain; see [Damper actuators](damper-actuators.html) for analogous torque-driven damper assemblies. The report warns that bolting an actuator onto a standard product without enough thought causes trouble, that dampers borrowed from mechanical systems can leak badly when closed, and that responsibility for window, actuator and control (often split between architect and engineer) should be settled early, preferably with actuators supplied as part of the window package.

**Mixed mode with a BAS.** The report cites an office case study using natural ventilation in winter and a mechanical system, supplemented by [chilled beams](chilled-beams.html), in summer. A BAS would typically enable window opening from outdoor and indoor temperature and [CO2](co2-sensors.html) readings, close vents in high wind or driving rain, and hand over to mechanical cooling when natural means cannot keep up (this paragraph is general practice, not a statement from the report).


## How natural ventilation moves air

> This and the sections below are general practice, not taken from the report cited above.

Two forces drive airflow through openings:

- **Stack effect.** Warm indoor air is lighter than cooler outdoor air and rises, leaving through high openings while cooler air enters through low ones. The pressure difference grows with the height between the openings and with the indoor-outdoor temperature difference, so stack ventilation works best in tall spaces such as atria and stair or chimney towers, and weakens when it is nearly as warm outside as inside.
- **Wind.** Wind raises pressure on the windward face and lowers it on the leeward and side faces. Openings on opposite sides allow **cross ventilation**, which can move far more air than stack effect alone, but the flow depends on wind direction and speed.

Ventilation through openings on a single side of a room, **single-sided ventilation**, is weaker and reaches less deep into the space. Designers choose which strategy applies to each space, and the control strategy follows from that choice.

## Mixed-mode patterns

Mixed mode combines natural and mechanical systems in one of a few ways:

| Pattern | How it works | Control implication |
| :--- | :--- | :--- |
| Change-over | The building switches between natural and mechanical modes with the season or the hour | The controller decides which mode is active and locks out the other |
| Concurrent | Natural and mechanical run at the same time in the same space | Needs rules to stop the two fighting, such as cooling off while windows are open |
| Zoned | Different parts of the building use different systems | Each zone has its own mode logic |

## Controls and sensors

A BAS or dedicated controller typically needs:

- **Fire and smoke.** Natural ventilation openings are often also part of smoke control, which has its own priority and wiring. This must be settled with the fire engineer and must override comfort control.
- **Freeze and security.** Close vents when outdoor temperature approaches freezing, and close or lock them out of hours.
- **Indoor conditions.** Room temperature, and optionally CO2 and humidity, to decide when to open and by how much; see [CO2 sensors](co2-sensors.html).
- **Interlocks and window contacts.** When a window or vent is open, mechanical heating or cooling should be locked out or set back to avoid conditioning the outdoors. Wireless batteryless reed switches using [EnOcean](../protocol/enocean.html) (ISO/IEC 14543-3-10) energy harvesting eliminate moving wire fatigue across operable sashes, reporting contact closure directly to room controllers like the [Siemens Desigo DXR2](../product/dxr2.html) or [Viconics VT8350](../product/vt8350.html).
- **Occupant override and user feedback.** If occupants can open windows manually, the controller must either sense it or tolerate it, returning to automatic control after an occupancy transition or timer. Room operator units such as the [Siemens QMX3](../product/qmx3.html) provide "Green Leaf" visual feedback, showing green when room conditions are energy-optimal and alerting occupants when manual window opening wastes energy.
- **Outdoor weather.** Outdoor temperature, wind speed and direction, and a rain sensor close motorized [window actuators](window-actuators.html) during precipitation, excessive wind gust buffeting, or when outdoor enthalpy exceeds comfort limits.

## Common problems

- **Control split between trades.** If the window supplier, the actuator supplier and the controls contractor each assume another is responsible for a link, the system is not tested end to end. Define the interface in the specification.
- **Draughts.** Openings admit cold air that falls on occupants; avoid low inlets directly above desks.
- **Hunting.** Windows that open and close in repeated cycles because the deadband is too narrow, or the wind gusts push the reading around. Filter the wind input and widen the band.
- **Too cold at the start of the day.** Night cooling over-cooled the structure, so the lower limit on the structure temperature was not applied.
- **Window or vent does not close tightly.** The actuator is too weak or the seals are worn, so the space leaks when it should be sealed. This matters especially in winter.

See [Control strategies](control-strategies.html) for how this fits the broader approach to control, [Window actuators](window-actuators.html) for motorized opening hardware, and [Energy conservation strategies](energy-conservation-strategies.html) for the savings case.
