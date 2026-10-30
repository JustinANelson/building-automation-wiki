---
id: variable-frequency-drives
type: concept
title: "Variable frequency drives (VFDs) for fans, pumps and chillers"
summary: "How a VFD varies motor speed, why fan and pump power falls with the cube of speed, what drive and motor losses do to the savings, and how a BAS commands, monitors and commissions drives."
review: draft
related:
  - analog-signals
  - bacnet-mstp
  - control-signals
  - efficiency-metrics
  - electric-chillers
  - energy-conservation-strategies
  - hydronic-system-control
  - io-points
  - modbus-rtu
  - static-pressure-reset
  - supervisory-controllers
  - switches-and-safeties
sources:
  - https://www.energy.gov/sites/prod/files/2014/04/f15/motor_tip_sheet11.pdf
---
A **variable frequency drive** (VFD, also called an adjustable speed drive or variable speed drive) controls the speed of an AC motor by changing the frequency and voltage of the power it supplies. In building automation it is the standard way to let a fan or pump deliver only the flow the building needs, instead of running at full speed and throttling with a damper or valve. The controllers described elsewhere in this wiki typically command VFDs through an analog output or a network, and the resets described on [Static pressure reset](static-pressure-reset.html) and [Hydronic system control](hydronic-system-control.html) exist to take advantage of them.

## How a VFD works

A pulse-width-modulated (PWM) VFD has three stages:

1. **Rectifier.** Converts the incoming AC supply to DC, usually with a diode bridge.
2. **DC bus.** Capacitors smooth the DC.
3. **Inverter.** Transistors switch the DC rapidly to build an AC output at the chosen frequency and voltage. The output is a train of pulses whose widths are varied so the motor current approximates a sine wave.

An AC induction motor turns at a speed set by the supply frequency and its number of poles. By changing frequency, the drive changes speed, and by changing voltage in proportion (the volts-per-hertz relationship) it keeps the motor's magnetic flux, and so its torque capability, roughly constant. The drive also limits starting current, so a motor started on a drive avoids the large inrush of a motor started across the line.

The U.S. Department of Energy's Motor Systems Tip Sheet #11 notes that PWM VFDs are most often used on variable torque loads in the 1 to 1,000 horsepower range, and that external sensors monitor flow, level or pressure and send a signal to a controller that adjusts the speed to match.

## Why savings are large: the affinity laws

For a centrifugal fan or pump, the affinity laws relate speed to performance:

| Quantity | Varies as | Example at 80 % speed |
| :--- | :--- | :--- |
| Flow | Speed | 80 % |
| Pressure or head | Speed squared | 64 % |
| Power | Speed cubed | 51 % |

The DOE tip sheet states that input power varies as the cube of the speed ratio and that reducing speed (flow) by 20 percent can reduce input power by approximately 50 percent. It gives the relationship as hp2 = hp1 x (RPM2 / RPM1)^3.

**Constant-torque loads are different.** Where the torque needed does not depend on speed, such as conveyors, positive-displacement pumps and screw or reciprocating compressors, power varies linearly with speed, so savings from slowing down are much smaller. The cube law applies to variable-torque fans and centrifugal pumps.

## Real savings are smaller than the cube law

The cube law is an ideal. Three things reduce the saving:

- **Drive losses.** A drive is less efficient at light load. The DOE tip sheet's Table 1 lists typical PWM drive efficiencies of about 94 to 97 percent at 75 to 100 percent of rated output, 88 to 95 percent at 25 percent, 80 to 89 percent at 12.5 percent, and only 35 to 61 percent at 1.6 percent, with the drop more pronounced on smaller drives. The tip sheet says there is no widely accepted test protocol to compare drives, so use manufacturer data where you can.
- **Motor losses.** Motor efficiency also falls at light load and when the motor is fed a non-sinusoidal waveform.
- **Static head and system curve.** The cube law holds for a system with no static lift. A pump working against a fixed static head, or a duct system with a minimum pressure setpoint, cannot be slowed as far, so the power falls more slowly. A cooling tower fan or a pump in a closed loop with all its head due to friction follows the law closely; a pump lifting water to a height does not.

The DOE tip sheet works an example: a 20 hp exhaust fan that needs 16.4 kW at full speed delivers half its airflow at half speed. Ideal power would be one eighth of full load. With a motor efficiency of 77.8 percent and a drive efficiency of 86 percent at that point, the fan and drive together draw about 2.8 kW, a reduction of 82.9 percent, which is less than the ideal 87.5 percent but still very large. The tip sheet's point is that overall efficiency is the product of drive, motor and driven-equipment efficiencies, so calculate the savings at each operating point and weight them by the hours spent there.

## Where VFDs are used in HVAC

| Application | What the BAS holds constant | Typical strategy |
| :--- | :--- | :--- |
| Supply fan, VAV | Duct static pressure | Speed follows a static pressure setpoint, reset by box demand; see [Static pressure reset](static-pressure-reset.html) |
| Return or relief fan | Building pressure or fan tracking | Follows supply fan flow or holds building pressure |
| Chilled and hot water pumps | Loop differential pressure | Speed holds a (reset) differential pressure; see [Hydronic system control](hydronic-system-control.html) |
| Condenser water pumps | Flow or chiller approach | Reduce flow when the load and the chillers' limits allow |
| Cooling tower fans | Condenser water temperature | Speed modulates instead of cycling fans on and off |
| Chiller compressors | Leaving chilled water temperature | A variable speed drive on the compressor improves part-load efficiency; see [Electric chillers](electric-chillers.html) and [Chiller part-load performance](chiller-part-load-performance.html) |

## Controlling a drive from the BAS

A drive can be controlled in two ways, often combined:

**Hardwired.** The controller's analog output provides a speed reference, usually 0 to 10 V or 4 to 20 mA; see [Analog signals](analog-signals.html). A digital output gives run or stop. Feedback comes back through digital inputs (running status, fault) and an analog input (actual speed, current or power) so the BAS can confirm the drive is doing what it was told.

**Networked.** Many drives have embedded BACnet MS/TP or Modbus RTU, for example the Schneider Altivar models mentioned on the [Schneider Electric](../manufacturer/schneider-electric.html) page. The BAS writes speed and start commands and reads status, speed, current, power, energy, fault codes and run hours over the trunk; see [BACnet MS/TP](../protocol/bacnet-mstp.html), [Modbus RTU](../protocol/modbus-rtu.html) and [RS-485](rs-485.html). A network connection gives more data for less wiring, but a communications loss must be handled: configure the drive's behaviour on loss of the command or the speed reference (hold, go to a set speed, or stop).

| Point | Type | Purpose |
| :--- | :--- | :--- |
| Speed reference | Analog output or network write | Commanded speed |
| Run command | Digital output or network write | Start and stop |
| Run status | Digital input or network read | Prove the drive is running; see [Switches and safeties](switches-and-safeties.html) |
| Fault | Digital input or network read | Alarm; a drive fault is not the same as a motor overload |
| Actual speed | Analog input or network read | Confirm response and trend |
| Output current or power | Analog input or network read | Energy trends, belt or coupling failure detection |
| Hand-off-auto state | Digital input | Know whether the BAS is in control |

A **hand-off-auto** selector at the drive lets an operator run the motor locally. The BAS should read its state, so it does not alarm about a drive it is not meant to control.

## Setup parameters that matter

- **Motor data.** Enter the nameplate voltage, current, speed and frequency so the drive's protection and control are accurate.
- **Minimum speed.** Fans and pumps should not run below the manufacturer's minimum. A pump needs enough flow for cooling and bearing lubrication, a motor cooled by its own fan loses cooling at low speed, and a fan below a certain speed cannot hold the duct pressure. Set a minimum that suits the equipment and the control loop.
- **Maximum speed.** Normally the motor's rated frequency; do not run a motor above it without checking the motor and driven equipment.
- **Acceleration and deceleration ramps.** Slow ramps avoid pressure surges in ducts and water hammer in piping, and stop the control loop from fighting the drive. Very slow ramps make the loop sluggish.
- **Skip frequencies.** Avoid speeds that excite a resonance in the fan, duct or piping.
- **Overload and protective trips.** Set the motor overload to the nameplate current.
- **Auto restart.** Decide whether the drive restarts itself after a power loss or fault, and for how many attempts.
- **Control source and PID.** Some drives have an internal PID loop; use either the drive's PID or the BAS's, not both on the same variable.

## Bypass

A **bypass** circuit lets the motor run across the line if the drive fails. A bypass is common on critical fans and pumps. It costs more, and the motor then runs at full speed with no soft start, so the system must be able to handle that, for example by throttling a control valve or damper. Specify how the BAS is informed when the bypass is in use.

## Power quality and installation

- **Harmonics.** The rectifier draws current in pulses, which distorts the supply waveform. A standard six-pulse drive on a weak supply, or many drives on one transformer, can cause voltage distortion that disturbs other equipment. Common mitigation is a line or DC reactor, a 12-pulse or 18-pulse front end, or an active front end. IEEE 519 is the standard that sets limits for harmonic distortion at the point of common coupling.
- **Power factor.** A drive with a DC link draws current with a high displacement power factor, so it usually raises the facility's power factor and needs no power factor correction capacitors on its input.
- **Long motor leads.** Fast switching edges on a long cable can reflect and raise the voltage at the motor terminals, stressing the winding insulation. Use inverter-duty motors, keep leads short where possible, and fit an output reactor or dV/dt filter on long runs.
- **Bearing currents.** High-frequency common-mode current can pass through motor bearings and cause fluting. A shaft grounding ring or insulated bearing on larger motors reduces the risk.
- **Cabling and grounding.** Use cable intended for VFD output, with continuous grounding, and keep power and signal cables apart. Radio-frequency noise from drives can disturb analog signals and RS-485 trunks, so use shielded cable and follow the grounding rules on [RS-485](rs-485.html) and [Analog signals](analog-signals.html).
- **Heat.** A drive converts a few percent of its power to heat. Put it in an enclosure or room that can remove it, and check the ambient temperature limit; see [Field panels and enclosures](field-panels-and-enclosures.html).

## Life safety and overrides

Smoke control and fire alarm systems may need a fan to run at a specified speed regardless of the BAS. A drive intended for such service has an override mode, a bypass, or a listing for smoke control. Do not assume a standard drive meets the requirement; see the notes on UL 864 listing on [Damper actuators](damper-actuators.html) and [Dampers and louvers](dampers-and-louvers.html).

## Troubleshooting

| Symptom | Likely cause |
| :--- | :--- |
| Drive runs but speed does not follow the BAS | Control source set to local, reference scaling mismatch, or a hand-off-auto switch in hand |
| Speed hunts | Control loop gain too high, ramp times too short, or a noisy pressure signal |
| Drive trips on overcurrent at start | Ramp too short, mechanical jam, or motor data entered wrongly |
| Drive trips on overvoltage when slowing | Deceleration ramp too short for the load inertia |
| Motor runs hot at low speed | Minimum speed too low for a self-cooled motor |
| Communication faults | Wrong address or baud rate, trunk termination, or noise from the drive itself |
| Nuisance trips on a hot day | Drive enclosure over its temperature limit |
| Readings on other analog inputs go noisy | Drive output wiring running beside signal cable |

## Commissioning checklist

1. Confirm motor and drive data, and the direction of rotation, before connecting the load.
2. Set minimum and maximum speed, ramps and protective limits.
3. Check the BAS command at 0, 50 and 100 percent and compare commanded and actual speed.
4. Confirm run, fault and hand-off-auto status reach the BAS and raise the right alarms.
5. Test loss of the command signal and of the network, and the bypass if fitted.
6. Record speed, current and power at several operating points as the baseline for trends; see [Efficiency metrics](efficiency-metrics.html).
7. Tune the control loop at the new minimum and maximum speeds.

> The DOE tip sheet is the source for the affinity-law relationship, the worked example and the drive efficiency range. The remaining sections are general practice, not taken from a manufacturer document, and should be checked against the drive manufacturer's documentation and the project specification.
