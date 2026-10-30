---
id: window-actuators
type: concept
title: "Motorized window actuators and automatic vent opening devices"
summary: "Electric drive mechanisms used in natural and mixed-mode ventilation: chain actuators, linear spindle drives, rack-and-pinion actuators, thrust sizing, weather interlocks, and BAS control interfaces."
review: draft
related:
  - co2-sensors
  - control-signals
  - damper-actuators
  - dxr2
  - economizer-control
  - enocean
  - knx
  - natural-ventilation
  - switches-and-safeties
  - temperature-sensors
  - vt8350
sources:
  - https://www.usablebuildings.co.uk/UsableBuildings/Unprotected/NatventOpeningPIIRpt2000.pdf
---

## Overview

In automated natural ventilation (**ANV**) and hybrid mixed-mode HVAC systems, motorized window actuators—termed **Automatic Vent Opening Devices (AVODs)**—modulate perimeter sashes, clerestory hoppers, atrium louvers, and rooflights to regulate fresh air intake, indoor air quality ($CO_2$), and nighttime structural pre-cooling.

Following the design recommendations in *Specification of Automatic Vent Opening Devices for Natural Ventilation* (Bordass, Ford, and Schiano, 2000), window actuators differ fundamentally from standard HVAC [damper actuators](damper-actuators.html): they must resist severe exterior aerodynamic wind buffeting, lift heavy glass panes against gravity, deliver high closing forces to compress weather gaskets, and protect occupants against entrapment.

## Actuator Types and Mechanical Drives

1. **Chain Actuators**:
   - *Best Applications*: Outward-opening bottom-hung hoppers, top-hung projecting sashes, and side-hung casements in commercial offices, classrooms, and residential buildings.
   - *Operating Principle*: An electric DC motor drives a specialized chain whose links articulate freely in one direction to wrap neatly around an internal drive sprocket, but lock rigid in the opposing direction when extended to exert push and pull thrust.
   - *Physical Form*: Slim, low-profile extruded aluminum casing surface-mounted to the window frame or concealed inside the frame profile.
   - *Typical Specs*: Stroke lengths from `150 to 800 mm` (`6 to 31 in`); push/pull thrust forces from `200 to 600 N` (`45 to 135 lbf`).

2. **Linear Spindle (Lead Screw) Actuators**:
   - *Best Applications*: Heavy horizontal rooflights, atrium skylights, sloped glass roofs, and dome ventilators where snow loads, self-weight, and wind uplift require high structural rigidity.
   - *Operating Principle*: An internal motor rotates a precision threaded lead screw driving a low-friction traveling nut attached to an extending stainless steel or aluminum push rod.
   - *Physical Form*: Tubular cylindrical body with an articulated pivot bracket accommodating sash angular swing.
   - *Typical Specs*: Stroke lengths from `100 to 1,000 mm` (`4 to 40 in`); thrust forces from `500 to 3,000 N` (`110 to 675 lbf`).

3. **Rack-and-Pinion Actuators**:
   - *Best Applications*: Wide continuous clerestory runs, greenhouse ridge vents, and industrial monitor roofs.
   - *Operating Principle*: A rotary gear pinion drives a rigid toothed steel rack bar forward and backward.
   - *Physical Form*: Heavy-duty exposed gear housing with an extending toothed rack.
   - *Tandem Coordination*: Multiple slave racks can be linked across a single rotating drive shaft powered by a single master motor, ensuring simultaneous, twist-free opening across wide continuous continuous greenhouse vents or broad clerestory ribbons.
   - *Typical Specs*: Stroke lengths up to `1,500 mm`; thrust forces exceeding `1,000 N`.

4. **Rotary Louver Actuators**:
   - *Best Applications*: Architectural glazed louvers and external weather-louver banks.
   - *Operating Principle*: Standard direct-coupled rotary actuators ([Belimo LMB/NMB](../product/lmb24-3.html)) driving multi-blade glazed or insulated architectural ventilation louvers.
   - *Physical Form*: Direct-mount rotary motor clamped directly onto the jackshaft or louver drive blade.
   - *Typical Specs*: Torque ratings from `5 to 20 Nm`. Note that louvers suffer from longer perimeter crack lengths, higher winter infiltration, and poorer thermal insulation compared to compression-gasket windows.

## Electrical Control and BAS Integration

- **Digital Bus Protocols**: Modern installations use [KNX](../protocol/knx.html) window motor controllers or BACnet MS/TP field modules with electronic synchronization, coordinating tandem pairs on wide sashes to prevent frame twisting.
- **Low-Voltage DC Polarity Reversal (24 VDC)**: Most window actuators operate on `24 VDC` using polarity reversal: applying `+24 V` extends the chain (opens window); reversing polarity to `-24 V` retracts the chain (closes window). This 2-wire arrangement simplifies life safety smoke clearance systems and fail-safe battery backup.
- **Proportional Modulating Control**: For comfort ventilation, actuators accept analog `0–10 VDC` or `4–20 mA` positioning signals (or `3-point floating` open/stop/close control) from room controllers such as the [Siemens Desigo DXR2](../product/dxr2.html) or [Viconics VT8350](../product/vt8350.html). Modulating control allows precise `5–10%` crack openings for winter background ventilation without cold drafts.
- **Wireless Interlocks ([EnOcean](../protocol/enocean.html))**: Wireless, self-powered magnetic reed contacts mounted on window sashes signal the BAS when an occupant manually opens a window, triggering an immediate shutdown of mechanical heating or chilled beam cooling.

## Environmental and Safety Interlocks

Reliable automatic window ventilation requires strict supervisory safety rules:

- **Current-Limiting Obstruction Detection (Pinch Protection)**: Internal microcontrollers monitor motor current draw ($I$). If a sudden spike occurs (indicating trapped fingers, an obstacle, or mechanical jamming), the actuator instantly cuts thrust and reverses stroke by `10–20 mm`.
- **High Wind Speed Lockout**: Supervisory weather stations ([Vaisala](../manufacturer/vaisala.html)) measure local wind velocity. When gusts exceed `8 to 10 m/s` (`18 to 22 mph`), all leeward and windward windows are commanded shut to prevent hinge damage and indoor turbulence.
- **Outdoor Temperature Clamps**: When outdoor air falls below `10 to 12 °C` (`50 to 54 °F`), natural ventilation is locked out or restricted to brief purge pulses to protect occupants from drafts and hydronic heating coils from freezing.
- **Rain and Precipitation Interlocks**: Optical or heated-grid precipitation sensors signal the BAS to close outward-opening vents at the first detection of rainfall.
