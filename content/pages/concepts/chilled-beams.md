---
id: chilled-beams
type: concept
title: "Chilled beams"
summary: "Ceiling-mounted water coils that cool sensibly, passive or active, and the dew point controls that keep them from dripping."
review: verified
related: [co2-sensors, condensation-detectors, control-strategies, control-valves, discharge-air-temperature-reset, dxr2, energy-conservation-strategies, humidity-sensors, hydronic-system-control, natural-ventilation, temperature-sensors, vav-control, vt8350]
sources:
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/education-training/engineers-newsletters/airside-design/adm_apn034en_1209.pdf
---
A chilled beam is a fin-and-tube heat exchanger in a housing, suspended from or recessed in the ceiling, with chilled water in the tubes. This page follows the Trane *Engineers Newsletter* volume 38-4, "Understanding Chilled Beam Systems" (2011).

**Passive and active.**

- **Active beam (ACB).** The beam has an integral primary air supply that passes through nozzles and induces room air up through the coil. Induction gives much more capacity than a passive beam, so active beams are the more common type. They come in two-pipe (all zones get cold or hot water) and four-pipe versions (some zones cool while others heat).
- **Passive beam (PCB).** Air next to the coil is cooled and sinks, setting up convective motion. No fan is needed.

**Primary air.** Because a beam normally has no condensate drain, the primary air system has three jobs: deliver the required outdoor air; deliver air dry enough to offset the space latent load and keep the indoor dew point below the beam coil surface temperature; and deliver enough air to induce the room airflow needed for the sensible load. Trane's office example needs 0.085 cfm per square foot for ventilation alone but 0.36 cfm per square foot at design cooling, against 0.90 for conventional VAV.

**Dew point control.** Chilled beams cool sensibly only, not dehumidify. In the Trane guide the primary air holds the space dew point at or below 55 degrees F (so primary air is dehumidified to roughly 45 to 53 degrees F dew point), and the water to the beams is typically kept between 58 and 60 degrees F, above the space dew point. In the example loop, a mixing valve blends warmer return water into chiller water to reach 58 degrees F. Primary air that is too cold in dry bulb also risks condensation on the housing.

**Control consequences.**

- **Building pressure.** The guide advises a tight envelope and positive building pressure in humid weather to limit infiltration.
- **Fewer levers on the air side.** Constant primary airflow means ACB systems typically do not use demand controlled ventilation (see [CO2 sensors](co2-sensors.html)) or air-side economizing, and the guide notes this affects the energy comparison.
- **Humidity pull-down.** After a humid night or weekend, the primary air system starts before occupancy and runs until the dew point reaches target (for example 55 degrees F) *before* chilled water goes to the beams.
- **Reheat.** Reheat starts only after primary airflow has dropped to its minimum and the chilled water valve is closed; four-pipe beams can heat directly.
- **Sensors.** Dew point is derived from room [humidity](humidity-sensors.html) and temperature sensors; the room dew point is the key variable for protecting the beams.

Water-based distribution also adds installed cost for field piping and valves and a greater leak risk, which the guide counts against the system.


## How the beam works

> This and the sections below are general practice, not taken from the Trane newsletter cited above.

In an **active beam**, primary air from the central air handler enters a plenum in the beam and leaves through small nozzles at high velocity. The jet entrains room air, drawing it up through the coil, where chilled (or hot) water cools or heats it, and the mixture discharges back into the room. The room air passes the coil with no fan in the beam, so there is no local filter, no motor and no condensate pan. Capacity depends on the primary airflow through the nozzles, the water flow and temperatures, and the room-air temperature.

Because the beam is fed from the same air handler as every other beam, **all zones share the same primary air conditions**, and each zone adjusts only its water flow. This is the main difference from a VAV box, where each zone also varies its own airflow.

## Zone control

Zone temperature is typically controlled by modulating a water valve on each beam, or on a group of beams serving one zone:

- **Cooling.** The valve opens as the room warms, sending more chilled water through the coil.
- **Heating, four-pipe beams.** A second coil and valve provide heating, with a deadband between so the two do not run together.
- **Heating, two-pipe beams.** The same water pipes carry hot or cold water depending on a changeover, so the building cannot cool one zone while heating another except by other means.

Valve actuators are commonly small modulating or floating types; see [Control signals](control-signals.html).

## Condensation protection

Protecting the beam from condensation is the most important control function. Typical measures:

- **Alarms.** A dew point approaching the water temperature should raise an alarm well before the beam surface condenses.
- **Condensation detectors and pipe surface switches.** Dedicated pipe-mounted [condensation detectors](condensation-detectors.html) clamped to the chilled water supply runout trip on hygroscopic track impedance or measured surface dew point margin. Digital inputs on room controllers like the [Siemens Desigo DXR2](../product/dxr2.html) or [Viconics VT8350](../product/vt8350.html) immediately drive the cooling valve closed and signal a warning.
- **Delay after a humid period.** Hold chilled water off until the primary air has dried the space, as noted above.
- **Supply water temperature margin.** The supply water temperature is set from the space dew point, typically maintained at 58 to 60 degrees F with at least a 2 to 3 degrees F safety margin above room air dew point.
- **Window and natural ventilation interlocks.** Where operable windows or [natural ventilation](natural-ventilation.html) louvers open, infiltrating humid outdoor air can cause immediate beam sweating. Window reed contacts interlock with the room controller to shut off chilled water to that zone whenever windows open.

Failure of the dew point sensor is serious, because it can leave the system running unprotected. Use a sensor suited to the application, check its calibration regularly, and consider a second independent sensor; see [Humidity sensors](humidity-sensors.html).

## Commissioning and maintenance

- **Balancing.** Set the primary air to each beam to the design flow, and balance the water flow, since the capacity depends on both. A beam with the wrong nozzle pressure delivers the wrong air quantity.
- **Cleaning.** Beams have no filter, so dust gathers on the coil. Inspect and vacuum or wipe it on a schedule.
- **Flushing.** Clean the water system before connecting the beams, because the small passages can block with debris.
- **Leaks.** Water in the ceiling is a concern, so check the connections, and consider leak detection in zones with sensitive equipment below.

## Comparison with VAV

| Aspect | Active chilled beam | VAV box |
| :--- | :--- | :--- |
| Fan power in the zone | None | Only in fan-powered boxes |
| Latent control | Central, from the primary air | Central, from the supply air |
| Main risk | Condensation and leaks | Fan energy and noise |
| Primary air quantity | Low, near the ventilation need | Higher at peak load |
| Zone cooling by | Water flow | Air flow |

See [Hydronic system control](hydronic-system-control.html) for the water side, [Condensation detectors](condensation-detectors.html) for pipe moisture monitoring, [Natural ventilation](natural-ventilation.html) for mixed-mode considerations, and [Discharge air temperature reset](discharge-air-temperature-reset.html) for primary-air considerations.
