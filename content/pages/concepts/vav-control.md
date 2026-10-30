---
id: vav-control
type: concept
title: "VAV terminal box control"
summary: "How a pressure-independent variable-air-volume box controller combines a temperature loop and a flow loop, using the Siemens BACnet PTEC as the worked example."
review: verified
related: [airflow-measurement, apogee-atec, apogee-fln, apogee-tec-vav, control-strategies, damper-actuators, dampers-and-louvers, discharge-air-temperature-reset, dxr2, energy-conservation-strategies, laboratory-and-fume-hood-control, static-pressure-reset, temperature-sensors]
sources:
  - https://sid.siemens.com/v/u/A6V10445888
---
A variable-air-volume (VAV) terminal box varies the amount of supply air delivered to one zone. The central air handler supplies air at a roughly constant temperature, and the box changes how much of it enters the room.

The Siemens BACnet PTEC owner's manual (125-5053) describes a **pressure-independent** controller with an internal air velocity sensor, built from two nested loops:

1. **Flow loop.** It holds the flow setpoint by modulating the damper actuator. Because the loop controls measured flow rather than damper angle, duct pressure changes do not disturb the airflow.
2. **Temperature loop** (heating loop and cooling loop). It holds the room temperature setpoint by changing the flow setpoint, or by modulating the heat source (a reheat valve or stages of electric heat).

The output of a control loop is called *loopout* in the manual and is expressed as a percentage. Setpoints such as the flow setpoint and the start and end points of reheat are expressed against loopout.

**Applications.** The PTEC ships with eight applications: cooling only; cooling or heating; electric reheat or baseboard radiation; hot water reheat; series fan-powered with electric or hot water reheat; and parallel fan-powered with electric or hot water reheat. In the heating applications, the box either holds minimum airflow or modulates the damper while reheat operates. The central air handler must provide cool air in cooling mode and, in the cooling-or-heating application, warm air in heating mode.

**Day and night.** The controller holds a day setpoint during occupied hours and a night setpoint otherwise. A room sensor with an override switch can bring a controller in night mode back to day mode for an adjustable time.

**Calibration.** The velocity sensor needs periodic calibration, set to occur automatically or manually. The controller also recalibrates by driving the valve or damper fully closed or open whenever it is commanded to 0 or 100 percent.

**Failure behavior.** If the room temperature sensor or setpoint dial fails, the controller keeps operating on the last known temperature value.

**Networking.** The PTEC works stand-alone or as an FLN device under a field panel; see [APOGEE Floor Level Network](../protocol/apogee-fln.html).

> The sections below are general VAV practice, not taken from the Siemens manual cited above. Sequences differ by manufacturer and project; use the controller's own documentation for exact behaviour.

## Why VAV

A constant-volume system delivers the same airflow all the time and varies the air temperature to match load. A VAV system holds supply-air temperature roughly steady and varies the airflow, so fan energy falls when load falls. Each zone gets its own terminal box with a damper, so zones are controlled independently from one central air handler. The air handler responds to the boxes, usually by holding duct static pressure and resetting it from box damper positions; see [Static pressure reset](static-pressure-reset.html) and [Discharge air temperature reset](discharge-air-temperature-reset.html).

## Airflow limits

Each box has configured airflow limits:

- **Maximum cooling airflow (Vmax).** The airflow at full cooling demand, set by the design load and limited by the box's capacity.
- **Minimum airflow (Vmin).** The lowest airflow the box passes while the zone is occupied. It exists to maintain ventilation and keep the sensor measuring accurately, and below a certain point a velocity or pressure sensor cannot read reliably. Minimum is raised in zones with high ventilation needs.
- **Heating airflow.** In heating, the box usually holds a minimum or a separate heating airflow while reheat operates.

Many controllers support **dual-maximum** or **dual-minimum** logic: airflow is kept low in the deadband and ramped up in heating or cooling, which avoids over-ventilating and reheating a zone that does not need it. A zone with CO2-based control can raise its minimum when the space is occupied; see [CO2 sensors](co2-sensors.html).

## Sequence of operation

A typical single-duct box with reheat moves through three states as the zone temperature changes:

1. **Cooling.** The room is warmer than the cooling setpoint. The temperature loop raises the flow setpoint between Vmin and Vmax, and the flow loop drives the damper to match. Reheat is off.
2. **Deadband.** The room is between the heating and cooling setpoints. Flow is held at the minimum and reheat is off, so the box uses little energy.
3. **Heating.** The room is colder than the heating setpoint. The temperature loop brings on reheat: it opens a hot water valve or stages electric heat. Airflow stays at the minimum or the heating flow, and some sequences also raise the flow once the reheat is fully on.

The supply air must be cold enough in cooling and not so cold that reheat has to work against it. Resetting discharge-air temperature upward in mild weather reduces reheat but raises fan energy; the best compromise is a system-level decision, see [Energy conservation strategies](energy-conservation-strategies.html).

## Fan-powered boxes

A **series** fan-powered box has a fan that runs continuously in the primary airstream, drawing primary air and, when needed, plenum air, so supply to the room is constant while the primary airflow varies. A **parallel** box has a fan in the plenum airstream that runs only on a call for heating, drawing plenum air in alongside the primary air. Parallel boxes save fan energy in cooling; series boxes keep room airflow steady, which helps with diffusers and comfort at low load. Both allow reheat to use warm plenum air before the heating coil is turned on.

## Commissioning and troubleshooting

- **Airflow does not match the balance report.** Check the K-factor or nominal airflow setting, then the sensor zero and tubing; see [Airflow measurement](airflow-measurement.html) and [Differential pressure sensors](differential-pressure-sensors.html).
- **Damper hunts.** The flow loop gain is too high, the actuator is too slow or too fast for the loop, or the duct pressure oscillates because the air handler's static control is unstable.
- **Zone too warm but damper is not fully open.** Vmax is too low, the temperature loop is limited, or the air handler cannot supply enough pressure or cold enough air.
- **Zone too cold at minimum.** The minimum airflow is higher than the load requires and supply air is too cold, or reheat is leaking through a failed valve.
- **Actuator drives to an end stop at random.** Check the recalibration behaviour in the controller; some controllers drive fully closed or open whenever commanded to 0 or 100 percent, which is normal.
- **One box dominates the air handler.** If the supply pressure is being driven by a single box whose damper is wide open, check that box's setpoint, sensor and duct before changing the plant. See [Static pressure reset](static-pressure-reset.html).

See [Control signals](control-signals.html) for how the damper actuator is driven and [Dampers and louvers](dampers-and-louvers.html) for the damper itself.
