---
id: control-valves
type: concept
title: "Control valves"
summary: "Valves that modulate hot or chilled water flow to coils, sized by flow coefficient and driven by an actuator."
review: draft
images:
  - path: images/concepts/butterfly-valve-electric-actuator.jpg
    alt: "Industrial butterfly valve fitted with an electric quarter-turn actuator and handwheel (not an HVAC coil valve)"
    source: "Gerritse at nl.wikipedia, via Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Butterflyvalve-with-electrical-actuator.jpg"
    license: CC BY-SA 3.0
related: [belimo, damper-actuators, analog-signals]
---
A control valve varies water flow through a coil to hold a temperature or pressure. Key selection terms:

- **Two-way and three-way.** A two-way valve throttles flow; a three-way valve mixes or diverts.
- **Flow coefficient.** Cv (US gpm at 1 psi drop) or kvs (cubic metres per hour at 1 bar drop). They convert as kvs = 0.865 x Cv.
- **Characteristic.** Equal-percentage valves compensate for a coil's non-linear heat output so that controller output and heat transfer track closely.
- **Actuator.** A rotary or linear actuator driven by on/off, floating, or modulating (0-10 V) signals; see [Damper actuators](damper-actuators.html) for the signal types.
- **Pressure-independent valves** add a flow regulator so flow follows the command regardless of line pressure changes.

The image above shows an industrial butterfly valve with a large electric actuator; HVAC coil valves are much smaller. Model pages for Siemens Acvatix flanged valves and Belimo characterized control valves are pending because their data sheets could not yet be downloaded.

