---
id: vav-control
type: concept
title: "VAV terminal box control"
summary: "How a pressure-independent variable-air-volume box controller combines a temperature loop and a flow loop, using the Siemens BACnet PTEC as the worked example."
review: draft
related: [apogee-tec-vav, apogee-atec, dxr2, damper-actuators, dampers-and-louvers, airflow-measurement, temperature-sensors, laboratory-and-fume-hood-control, apogee-fln]
sources:
  - https://sid.siemens.com/v/u/A6V10445888
---
A variable-air-volume (VAV) terminal box varies the amount of supply air delivered to one zone. The central air handler supplies air at a roughly constant temperature, and the box changes how much of it enters the room.

The Siemens BACnet PTEC owner's manual (125-5053) describes a **pressure-independent** controller with an internal air velocity sensor, built from two nested loops:

1. **Temperature loop** (heating loop and cooling loop). It holds the room temperature setpoint by changing the flow setpoint, or by modulating the heat source (a reheat valve or stages of electric heat).
2. **Flow loop.** It holds the flow setpoint by modulating the damper actuator. Because the loop controls measured flow rather than damper angle, duct pressure changes do not disturb the airflow.

The output of a control loop is called *loopout* in the manual and is expressed as a percentage. Setpoints such as the flow setpoint and the start and end points of reheat are expressed against loopout.

**Applications.** The PTEC ships with eight applications: cooling only; cooling or heating; electric reheat or baseboard radiation; hot water reheat; series fan-powered with electric or hot water reheat; and parallel fan-powered with electric or hot water reheat. In the heating applications, the box either holds minimum airflow or modulates the damper while reheat operates. The central air handler must provide cool air in cooling mode and, in the cooling-or-heating application, warm air in heating mode.

**Day and night.** The controller holds a day setpoint during occupied hours and a night setpoint otherwise. A room sensor with an override switch can bring a controller in night mode back to day mode for an adjustable time.

**Calibration.** The velocity sensor needs periodic calibration, set to occur automatically or manually. The controller also recalibrates by driving the valve or damper fully closed or open whenever it is commanded to 0 or 100 percent.

**Failure behavior.** If the room temperature sensor or setpoint dial fails, the controller keeps operating on the last known temperature value.

**Networking.** The PTEC works stand-alone or as an FLN device under a field panel; see [APOGEE Floor Level Network](../protocol/apogee-fln.html).
