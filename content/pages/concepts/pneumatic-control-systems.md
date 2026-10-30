---
id: pneumatic-control-systems
type: concept
title: "Pneumatic control systems: control air, thermostats, receiver-controllers and hybrid DDC"
summary: "How compressed-air controls work, how to size, dry, maintain and troubleshoot the control air supply (from Siemens Technical Instructions 155-002), how to identify Powers pneumatic instruments, how E/P transducers combine pneumatics with DDC, and what to check before keeping, overlaying or replacing a pneumatic system."
review: verified
related: [hvac-and-controls-through-the-eras, control-signals, analog-signals, damper-actuators, control-valves, dampers-and-louvers, io-points, switches-and-safeties, temperature-sensors, energy-conservation-strategies, pid-control-and-tuning, supervisory-controllers, apogee]
sources:
  - https://sid.siemens.com/api/khub/documents/S0imUbISAT6Ybbdji11G8A/content
  - https://pdc.ufl.edu/wp-content/uploads/2025/03/dcs-47-255000.pdf
---
In a pneumatic control system the signal is air pressure. A compressor supplies clean, dry air to thermostats, controllers and relays that vary a **branch line** pressure, and that pressure positions valve and damper actuators. Many campus buildings still run on it, directly or as the final stage of a hybrid system with DDC. This page explains the principles, gives the requirements for the air supply, and describes how to maintain, troubleshoot and decide what to do with a pneumatic system. For where it sits in the history of controls, see [HVAC and controls through the eras](hvac-and-controls-through-the-eras.html).

> The control-air supply sections are taken from Siemens Technical Instructions 155-002, "Air Compressor and Accessories" (March 11, 2005), which covers Powers pneumatic equipment, and from the University of Florida's control-systems construction standard (2015 edition) as an example of an owner's requirements. The sections on principles, calibration, leak finding and hybrid arrangements are general practice, not from those documents. The Siemens document describes equipment of its time; confirm against the equipment and documentation actually on site.

## How a pneumatic loop works

1. **Main air** from the compressor, regulated to a fixed pressure, feeds each instrument.
2. A **thermostat** or controller restricts and bleeds that air so that its **output (branch) pressure** changes with the measured variable. A common signal range is **3 to 15 psi**: 3 psi at one end of the control range and 15 psi at the other.
3. The branch line goes to an **actuator**, a diaphragm or piston operator with a spring, that moves a valve or damper. The spring range sets the pressure at which it starts and finishes moving.
4. **Sequencing** uses different spring ranges on different devices on the same branch. A heating valve might open over 3 to 8 psi and a cooling valve over 8 to 13 psi, so one signal runs heating, then a dead band, then cooling. These ranges are typical, and each system's actual ranges are on the actuators and the drawings.

Thermostats come in two common forms: a **one-pipe** type that takes its supply through a restrictor and bleeds air to vary the pressure in the single line, and a **two-pipe** type with separate main air and branch connections and a relay that supplies more air, so it can drive larger loads. The Siemens document lists both, with different air consumption for each.

**Fail position.** Pneumatic actuators are spring loaded, so on loss of air they move to their spring position, which may be open or closed depending on the actuator and the valve or damper. The fail position of every outdoor air damper, heating valve and cooling valve should be recorded, because a compressor failure puts all of them there at once.

## Control air supply

Proper operation requires a supply of clean, dry, oil-free air, as the Siemens document states. Most pneumatic problems trace back to the air supply, so check it before blaming any control device.

### Compressors

| Choice | Notes (Siemens 155-002) |
| :--- | :--- |
| Single or dual | Two smaller compressors and one tank cost more but give a standby unit. Using an alternator to equalise wear extends compressor life |
| Lubricated or non-lubricated | Lubricated: oil vapor can carry over into the control air, but quieter and less maintenance. Non-lubricated: oil-free air, but noisier and more maintenance |
| Tank | A tank is required to limit compressor cycling and gives reserve capacity for short peaks such as morning start-up or heating-cooling changeover |

The document covers compressors from 1/4 to 25 horsepower. Recommended pressure electric switch settings are to start the compressor when tank pressure falls to 60 psig and stop it at 80 psig, an average of 70 psig, which suits most installations. Lowering the pressure setting increases the volume delivered and reduces the compressor's electrical load, because volumetric efficiency falls as the setting rises.

A **pressure reducing valve** brings the high-pressure air down to the 18, 25 or 30 psig used by the control instruments, and a non-adjustable **safety relief valve**, set at 35 psig, is required after every reducing valve to protect the instruments.

### Sizing

1. Add up the average continuous air use of all the instruments (the document gives each Powers instrument's consumption in standard cubic inches per minute, scim).
2. Choose a duty cycle. The document recommends **25 to 40 percent**, which leaves capacity for peaks and reduces wear.
3. Compressor capacity (scim) = average continuous usage x 100 / duty cycle percent. Increase the usage figure by **20 to 30 percent** if a desiccant dryer is used, to cover its purge air.
4. Derate for elevation above sea level, using the manufacturer's table.
5. Choose the tank size and switch differential so that the compressor starts **fewer than ten times per hour**, to avoid overheating the motor.

Examples of the air consumption listed in the document:

| Instrument (Powers) | Air use (scim) |
| :--- | :--- |
| TH192S thermostat, one-pipe | 25 |
| TH192S thermostat, two-pipe | 20 |
| TH832D room thermostat | 10 |
| HU186 hygrostat | 20 |
| Powerstar transmitters (TT184, HT186, PT187, PT141) | 35 |
| VT141 velocity pressure transmitter | 30 |
| SW151 position switch, one-pipe | 35 |
| RL243MP relay | 35 |

### Dryers and filters

Moisture is the major obstacle to a reliable pneumatic system, and the document says dryers should be used on all control air systems. Two types:

- **Non-cycling refrigerated dryer.** Used for most systems with air lines inside the building. The air is chilled to 35 degrees F (1.7 degrees C), the moisture is separated and drained, and the pressure reduction at the regulator then lowers the pressure dew point to about **17 degrees F (minus 8 degrees C) or less at 25 psig or less**, enough to prevent condensation in most interior lines.
- **Regenerating (desiccant) dryer.** For the few installations where lines meet colder temperatures. A heatless unit can reach a pressure dew point of about **minus 88 degrees F (minus 67 degrees C)** at 25 psig, but it needs 20 to 30 percent of the compressor's capacity as purge air.

A **coalescing filter** removes water and oil aerosols as well as dirt. Put it **downstream of a refrigerated dryer** for maximum filter life, and **upstream of a desiccant dryer** to protect the desiccant. Replace the element when the pressure drop approaches 10 psig. Always depressurise a filter before taking it apart, and fit a metal or plastic guard on any see-through polycarbonate bowl.

### Maintenance schedule (Siemens 155-002)

| Interval | Task |
| :--- | :--- |
| Daily | Check compressor oil level (lubricated units); drain the manual tank drain, drip legs and traps in the distribution system |
| Weekly | Check the automatic tank drain |
| Monthly | Clean or replace compressor intake filters; operate the safety relief valves; inspect belts, sheaves and pulleys; calculate the actual duty cycle |

Never use synthetic oils containing detergents or polyesters in a lubricated compressor, and do not overfill the crankcase. **The monthly duty-cycle calculation is one of the most useful checks:** the duty cycle is the minutes the compressor runs in an hour divided by 60. Compare it with the design value. If it has risen, first check whether the air demand has changed, such as added equipment, and if not, look for air leaks or compressor problems.

### Troubleshooting the compressor (Siemens 155-002)

| Problem | Actions listed |
| :--- | :--- |
| Compressor running too long, or overload heaters tripping | Lower the tank pressure to increase air delivery (this also lowers motor current and may keep the unit running until parts arrive); make sure intake filters are clean; check for system leaks; check compressor capacity; check the heater size |
| Starting too often, or pumping oil | Widen the pressure switch differential; make sure the tank is drained of condensate; increase tank size; clean intake filters; do not overfill the crankcase; use the proper grade of oil; check compressor performance and overhaul if needed |

### An owner's standard: University of Florida example

As an example of what an owner may require (this is one institution's standard, not a universal rule), the University of Florida's control-systems standard requires, for pneumatic control air:

- A **redundant source** of control air, with the sources independent back to the breaker panel, and campus compressed air as a primary source where available.
- **Monitoring by the building automation system**: the dew point of the 20 psig air with a high alarm, a pressure switch on the regulated side, and the dryer's operating status.
- Compressors with an external disposable oil filter cartridge, positive-pressure lubrication, loadless starting and an automatic purge piped to drain.
- A **dryer** on all control air systems, with chilled-water dryers acceptable.
- **Tubing** of hard-drawn seamless copper or plenum-rated polyethylene, in conduit where exposed, bundled and supported above ceilings, and labelled at both ends.

The principle worth taking from it is to bring the compressor and dryer into the BAS as points. A trended compressor run status gives the duty cycle, and a dew point or pressure alarm warns of a failing dryer before the instruments start to fail.

## Identifying pneumatic instruments

The Siemens document lists the Powers equipment of its time by category, which is also a field-identification list for Siemens-heritage pneumatic systems:

| Category in the document | Examples named |
| :--- | :--- |
| Thermostats and hygrostats | TH192S, TH192HC, TH194HC, TH193 and TH194 (DN, DNV), TH193HC (dual), TH832D room thermostats and TH832DN room day/night, TH188 unit-mounted, HU186 hygrostat |
| Other devices listed | Limitem; pneumatic high or low temperature detection thermostat |
| Transmitters | Powerstar (TT184, HT186, PT187, PT141), VT141 velocity pressure, 378 differential pressure |
| Position switches | SW151 |
| Relays | RL243MP |
| Positioners | Moore positioners are used as an example in the sizing procedure |

Nameplate model numbers and the documents on site, not this list, identify what is actually installed.

## Calibration and troubleshooting the instruments

> General practice, not from the cited documents; use the instrument manufacturer's calibration procedure where available.

- **Test with a reference gauge.** Connect a calibrated test gauge to the branch line and compare the pressure with the controlled variable measured by a reference thermometer or gauge. A thermostat that reads correctly but sends the wrong pressure needs adjusting, and one that sends the right pressure for the wrong temperature is out of calibration or damaged.
- **Check main air first.** If the main air pressure is low or wet, instruments behave erratically, so fix the supply before adjusting anything.
- **Leak test.** Isolate a branch and watch its gauge: a line that falls steadily has a leak. Listen along the line, and use a leak-detection solution on fittings. Leaks in tubing, diaphragms and fittings waste compressor energy and cause hunting.
- **Restrictions.** Small orifices in thermostats and relays can clog with oil or dirt, so a controller that cannot hold its output may need cleaning or replacement.
- **Actuator checks.** Apply a known pressure to the actuator and confirm it strokes through its spring range and returns, and that linkage and valve stems move freely. A cracked diaphragm leaks and drifts.
- **Sequencing.** Confirm the spring ranges of paired valves and dampers match the drawings; mismatched ranges cause overlap and simultaneous heating and cooling.

## Hybrid systems: DDC driving pneumatic actuators

A common retrofit replaces the pneumatic controllers and sensors with DDC but keeps the existing pneumatic valves and dampers. An **E/P transducer** (electric to pneumatic) turns the controller's 4 to 20 mA or 0 to 10 V output into a 3 to 15 psi signal; a typical mapping is 4 mA to 3 psi and 20 mA to 15 psi. A **P/E transducer** does the reverse so that DDC can read a pneumatic signal. See [Control signals](control-signals.html) and [Analog signals](analog-signals.html).

Points to check:

- **The air system still matters.** The compressor, dryer and distribution must be maintained, and the DDC system's operators and the pneumatic technicians must both own it.
- **No position feedback.** The DDC controller sends a command but does not know where the actuator is, unless a feedback device is added. A stuck or leaking actuator is invisible to the BAS.
- **Transducer calibration.** Transducers drift, so calibrate them at commissioning and periodically.
- **Fail position** is still set by the actuator spring, so keep the record.
- **Retrofit options.** The existing valve or damper body can often be kept and the pneumatic operator replaced with an electric actuator, which removes the air dependency for that device. See [Damper actuators](damper-actuators.html) and [Control valves](control-valves.html).

## Energy and the BAS

- **Leaks are an energy cost** as well as a reliability one, because the compressor runs to replace them. A rising duty cycle is the sign.
- **Lower pressure settings** reduce motor load, as the Siemens document notes, within what the instruments need.
- **Poor calibration wastes more energy than the compressor.** Out-of-calibration thermostats and overlapping valve ranges cause simultaneous heating and cooling, so recalibration and repair are often the first and cheapest measures. Day/night thermostats provide a form of setback.
- **Add monitoring.** Trend compressor run status, dryer status and main and branch pressures where possible, and add temperature and flow metering so the effect of repairs can be measured; see [Measurement and verification](measurement-and-verification.html).

## Keep, overlay or replace

| Condition | Reasonable choice |
| :--- | :--- |
| Air supply sound, instruments calibrated, building use steady | Keep and maintain; add monitoring of the compressor and dryer |
| Air supply and actuators sound, but control quality, scheduling or visibility are poor | Overlay with DDC and E/P transducers, accepting the air-system dependency |
| Air supply failing, widespread leaks, or parts unavailable | Replace controls and actuators with electric or electronic devices |
| Critical spaces (laboratories, hospitals) | Favour electronic control with feedback; pneumatics rarely meets fast or tight control requirements |

Decide per building, using the air system's condition, the cost of keeping it healthy, remaining life, and the building's mission. Planning the work is covered on [BAS sizing calculations](bas-sizing-calculations.html) and [Energy savings and payback calculations](energy-savings-and-payback-calculations.html).

## Safety

- Depressurise filters and lines before opening them. Polycarbonate filter bowls need guards.
- Lock out and tag out compressors, and treat air receiver tanks and relief valves as pressure equipment to be inspected as the local rules require.
- Old pneumatic panels, tubing runs and nearby insulation can carry the hazards listed on the eras page, including asbestos and mercury; see [HVAC and controls through the eras](hvac-and-controls-through-the-eras.html).
- On loss of air, many actuators move to their fail position. Plan what that does to the building before shutting a compressor down.
