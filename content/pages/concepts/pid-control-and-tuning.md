---
id: pid-control-and-tuning
type: concept
title: "PID control equations and tuning: gain, throttling range, integral time and step tests"
summary: "The proportional, integral and derivative terms of a BAS control loop, how gain relates to throttling range, how to estimate process gain, time constant and dead time from a step test, and tuning with lambda and Ziegler-Nichols rules, with a worked example."
review: draft
related: [control-strategies, control-signals, vav-control, static-pressure-reset, discharge-air-temperature-reset, control-valves, damper-actuators, io-points, valve-and-damper-sizing-calculations, variable-frequency-drives]
sources: []
---
Nearly every analog control point in a building automation system is driven by a **PID** (proportional-integral-derivative) loop: a duct static pressure holding a fan speed, a discharge air temperature holding a valve, a zone temperature setting an airflow. Tuning those loops is a large part of commissioning. This page gives the equations and a practical method for estimating tuning values.

> These are standard control-theory relationships written from general knowledge. Controllers implement the equations in different forms and units, so confirm the form used by the controller's documentation, and check any rule-of-thumb values on the actual equipment.

## The loop

A controller compares a **process variable** (PV, the measured value such as temperature) with a **setpoint** (SP) and drives its **output** (OUT, a valve or damper position or a fan speed) to remove the **error**:

- error e = SP - PV (reverse acting, such as heating) or PV - SP (direct acting, such as cooling)

The action must match the process. A heating valve opens when temperature is low, and a cooling valve opens when it is high. A reversed action makes the loop run away, driving to an end of its range.

## The three terms

In one common (ideal, or "standard") form:

- **OUT = Kp x [ e + (1 / Ti) x (integral of e dt) + Td x (de/dt) ] + bias**

| Term | Parameter | Effect |
| :--- | :--- | :--- |
| Proportional | Gain Kp | Output proportional to the error. A larger gain reacts faster and, if too large, oscillates. Alone, it leaves a steady offset |
| Integral | Integral time Ti | Accumulates error until it is zero, removing the offset. A shorter Ti acts faster and is less stable |
| Derivative | Derivative time Td | Reacts to the rate of change. Rarely used in HVAC, because noise in sensor signals is amplified |

Most HVAC loops use **PI**, with derivative set to zero. Integral time may be expressed as **reset rate** in repeats per minute, which is 1 / Ti.

### Proportional band and throttling range

Older and many BAS controllers specify the proportional action as a **proportional band** or **throttling range (TR)**, the change in PV that moves the output across its full range:

- Kp = output span / throttling range, or Kp = 100 / PB when PB is a percentage of the input span
- A throttling range of 4 degrees F on a 0 to 100 percent output corresponds to Kp = 100 / 4 = 25 percent per degree F.

A wider throttling range means lower gain and more stable but slower control, with greater offset in a P-only loop.

## Characterising the process

The tuning depends on how the process responds. A **step test** on the output, with the loop in manual and the process steady, gives three numbers for a first-order-plus-dead-time model:

1. Change the output by a step, delta-OUT (for example, 10 percent), and trend the PV.
2. **Process gain K** = (final change in PV) / delta-OUT, in PV units per percent of output.
3. **Dead time theta** = the delay between the step and the first response.
4. **Time constant tau** = the time from the end of the dead time for the PV to reach about 63 percent of its final change.

**Example.** A hot water valve feeds a heating coil, and the discharge air temperature is the PV. A 10 percent step in valve position raises the temperature 4 degrees F, so K = 4 / 10 = 0.4 degrees F per percent. The response starts after 30 seconds (theta = 30 s) and reaches 63 percent of its rise 90 seconds later (tau = 90 s).

The ratio of dead time to time constant tells how hard the loop is to control: when theta / tau is small, the loop is easy; when it exceeds about 1, control is difficult and the gain must be low.

## Lambda (internal model) tuning

A robust and simple method for a PI loop uses the step test results and a chosen closed-loop response time lambda:

- **Kp = tau / (K x (theta + lambda))**
- **Ti = tau**

A larger lambda gives a slower, more stable loop. A common choice is lambda between one and three times theta, and larger for loops that must be very stable or whose process changes.

**Example, continuing.** With lambda = 60 s:

- Kp = 90 / (0.4 x (30 + 60)) = 90 / 36 = 2.5 percent of output per degree F
- Ti = 90 seconds
- Throttling range = 100 / 2.5 = 40 degrees F, which is wide because the coil is highly responsive and the loop needs only a small output change to correct an error.

With lambda = 30 s, Kp = 90 / (0.4 x 60) = 3.75, a faster loop with less margin.

## Ziegler-Nichols closed-loop rules

A second approach uses the **ultimate gain** Ku, the proportional gain at which the loop oscillates steadily with integral and derivative off, and the **ultimate period** Pu of that oscillation:

| Controller | Kp | Ti | Td |
| :--- | :--- | :--- | :--- |
| P | 0.5 x Ku | | |
| PI | 0.45 x Ku | Pu / 1.2 | |
| PID | 0.6 x Ku | Pu / 2 | Pu / 8 |

These settings are aggressive and give an oscillatory response, often too much for HVAC, so reduce the gain (for example, to half) and lengthen the integral time. Driving a real loop to sustained oscillation can also disturb the building or damage equipment, so lambda tuning from a step test is the safer choice.

## Starting values and sample time

- **Match the loop speed to the process.** A flow or static pressure loop responds in seconds, and a space temperature loop in many minutes. Integral time should be of the order of the process time constant.
- **Sample interval.** The controller should execute several times within the dead time and the time constant. A loop that runs every 10 seconds cannot control a process with a 5 second response.
- **Start conservative.** Begin with a low gain and a long integral time, then speed up in steps while watching the response.
- **One change at a time**, and allow the loop to settle before judging.

## Reading the trend

| Observation | Likely action |
| :--- | :--- |
| Steady oscillation at constant amplitude | Gain too high; reduce it by about half |
| Slow oscillation that grows or decays slowly | Integral too fast; lengthen Ti |
| Slow return to setpoint after a disturbance, no overshoot | Gain or integral too low |
| Output jumps or chatters | Noisy sensor, derivative on, or gain too high; filter the input |
| Output pinned at 0 or 100 percent | Saturation; check sizing and the action |
| PV never reaches setpoint with PI | Output limited, or the equipment cannot supply it |

The period of an oscillation helps: if the period is close to the dead time, the gain is the problem, and if it is much longer than the time constant, the integral is.

## Integral windup

When the output is saturated at its limit and the error remains, the integral term keeps accumulating. When conditions change, the loop takes a long time to unwind and overshoots. Controllers use **anti-windup** (stop integrating when the output is limited), and sequences should reset or hold the integral when equipment is off or disabled. Check what the controller does when a loop is enabled after being off, which starts from a stored output.

## Cascade and staging

- **Cascade control:** an outer loop sets the setpoint of an inner loop. A zone temperature loop that resets the discharge air temperature setpoint, or a VAV zone loop that sets the flow setpoint of the flow loop (see [VAV control](vav-control.html)), is a cascade. Tune the inner loop first, and make it several times faster than the outer loop.
- **Staging and on/off control:** equipment that is either on or off, such as compressor stages, is controlled with a deadband and minimum on and off times, not a PID. Cycles per hour = 3,600 / (on time + off time in seconds). Short cycling stresses equipment, so set the times to the manufacturer's limits.
- **Hysteresis and deadband:** a gap between the on and off points stops a loop from chattering around a single value.

## Limits set by the equipment

Tuning cannot fix a poorly selected device. A valve with low authority, or an oversized damper that works in a small part of its stroke, makes the process gain change with position, so no single tuning is good everywhere; see [Valve and damper sizing calculations](valve-and-damper-sizing-calculations.html). Actuator speed and resolution limit how quickly the output can move, and a VFD's ramp times add dead time; see [Variable frequency drives](variable-frequency-drives.html). Check these before spending time on gains.
