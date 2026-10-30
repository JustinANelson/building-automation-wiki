---
id: control-strategies
type: concept
title: "DDC control strategies: PID loops, cascade control, deadbands, and equipment staging"
summary: "Core direct digital control (DDC) feedback and sequencing architectures: two-position, floating, and digital PID control laws, direct vs. reverse action, cascade loops, heating/cooling deadbands, split-range sequencing, and lead-lag staging."
review: verified
images:
  - path: images/concepts/control-strategies.svg
    alt: "Technical diagram (drawn illustration) of a DDC cascade PID control loop, positional PID equation with anti-windup, and split-range heating/cooling deadband sequencing"
    source: "Own work (BASWiki technical diagram based on Siemens BACnet PTEC 125-5053, Siemens G..B181.1E/3, Trane Symbio 500 VAV BAS-SVX091B-EN, and York SSE-50 manuals)"
    license: CC0-1.0
related:
  - analog-signals
  - apogee-tec-vav
  - bas-sizing-calculations
  - chilled-beams
  - control-signals
  - control-valves
  - damper-actuators
  - discharge-air-temperature-reset
  - dxr2
  - economizer-control
  - energy-conservation-strategies
  - heat-pumps
  - hydronic-system-control
  - io-points
  - natural-ventilation
  - pid-control-and-tuning
  - static-pressure-reset
  - supervisory-controllers
  - symbio-500
  - uc400
  - valve-and-damper-sizing-calculations
  - vav-control
  - york-sse-controller
sources:
  - https://sid.siemens.com/v/u/A6V10445888
  - https://sid.siemens.com/v/u/A6V10356040
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Installation%20Operation%20and%20Maintenance/BAS-SVX091B-EN_04082023.pdf
  - https://www.york.com/-/media/project/jci-global/york-sites/united-states-york/tech-corner/documents/engineering/sequence-of-operations-sse--50.pdf
---

## Overview

In a building automation system (BAS), a **sequence of operations (SOO)** is implemented inside field and supervisory controllers using discrete and continuous feedback control loops. Rather than relying on mechanical bimetallic elements or pneumatic branch-line bleed relays, Direct Digital Control (`DDC`) controllers sample physical sensors at fixed execution intervals ($\Delta t$, typically `0.5 s` to `15 s`), compute a normalized loop demand (`0–100%`, termed *loopout* in Siemens APOGEE/PTEC documentation), and map that demand across modulating actuators (`0–10 VDC`, `4–20 mA`, or `3-point floating`) and staged binary relays (`DO`).

## Feedback Control Modes Compared

| Control Mode | Actuator Signal Type | Operating Principle & Mathematical Behavior | Typical BAS Applications |
| :--- | :--- | :--- | :--- |
| **Two-Position (`On / Off`)** | Binary (`DO`, `24 VAC` relay or triac) | Energizes at a cut-in threshold and de-energizes at a cut-out threshold separated by a **switching differential (hysteresis)** to prevent rapid short-cycling. | Unit heaters, exhaust fans, sump pumps, DX compressor stages, 2-position zone valves ([Siemens 599 Series](../product/siemens-599-zone-valve.html)), safety cutouts ([switches and safeties](switches-and-safeties.html)). |
| **Floating (`3-Point` / Tri-State)** | Dual binary (`DO1` Open / `DO2` Close) | Pulses a bidirectional synchronous motor ([Belimo LMB24-3](../product/lmb24-3.html), [Siemens OpenAir GDE/GLB](../product/openair-gde-glb.html)) CW or CCW for a calculated fraction of its stroke time (`60–150 s`); holds position inside a neutral **deadzone** around setpoint. | VAV box dampers ([Siemens PTEC](../product/apogee-tec-vav.html), [GDB181.1E/3](../product/gdb181-1e-3.html)), reheat valves, perimeter radiation valves. |
| **Proportional (`P`)** | Analog (`0–10 VDC` or `4–20 mA`) | Output changes linearly in proportion to current error ($e = PV - SP$) across a **throttling range (proportional band)**. Leaves a residual steady-state **offset (droop)** whenever load differs from `50%`. | Legacy pneumatic thermostats, simple freeze-protection mixed-air high-limit overrides, proportional outdoor resets. |
| **Proportional-Integral (`PI`)** | Analog (`0–10 VDC` / `4–20 mA`) or time-proportioned `PWM` / floating | Combines immediate proportional response with an **integral** action that accumulates error over time, driving steady-state offset to zero. Workhorse of `>95%` of HVAC control loops. | Room temperature loops, VAV airflow loops, duct static pressure, discharge air temperature (`DAT`), chilled/hot water coil valves. |
| **Proportional-Integral-Derivative (`PID`)** | High-speed analog or internal cascade | Adds a **derivative** term proportional to the rate of change of the process variable ($dPV/dt$ or $de/dt$) to damp overshoot on systems with large thermal/inertial lag and low sensor noise. | Fast laboratory pressurization, industrial process temperature control, chiller leaving-water temperature control ([York OptiView](../product/york-optiview.html)). |

## Digital PID Control Law and Tuning

In continuous time, a controller with output $u(t)$ (`0–100%`), setpoint $SP$, process variable $PV$, and control error $e(t)$ computes:

$$u(t) = u_{\text{bias}} + K_p \left[ e(t) + \frac{1}{T_i} \int_0^t e(\tau)\,d\tau + T_d \frac{de(t)}{dt} \right]$$

where:
- **$K_p$ (Proportional Gain)** or **$PB = 100\% / K_p$ (Proportional Band / Throttling Range)**: Defines how much error is required to drive the proportional output from `0%` to `100%`. For example, a `4 °F` throttling range on a room temperature loop yields a `25%` output change per `1 °F` of error (`Kp = 25% / °F`).
- **$T_i$ (Integral Time / Reset Time, seconds or minutes per repeat)** or **$K_i = K_p / T_i$**: The time required for the integral term to repeat the initial proportional step for a constant error. Too short a $T_i$ (excessive integral gain) causes hunting oscillation when paired with slow thermal mass or 90-second actuators.
- **$T_d$ (Derivative Time, seconds)**: Anticipates overshoot by opposing rapid changes in $PV$. Because airflow and differential pressure signals contain turbulent fluctuation, derivative action is set to `0` (`PI-only`) on most airside flow and static pressure loops.

### Direct-Acting (`DA`) vs. Reverse-Acting (`RA`) Polarity

Every control loop is configured with an action direction that matches the physical effect of the controlled device:

- **Direct-Acting (`DA` — Cooling / De-pressurization)**: Output *increases* as the process variable *increases* above setpoint ($e = PV - SP$). Examples: a chilled water valve or VAV cooling damper opening as space temperature rises above `74 °F`, or a building relief damper opening as building static pressure rises above `+0.05 in. w.c.`.
- **Reverse-Acting (`RA` — Heating / Pressurization)**: Output *increases* as the process variable *falls* below setpoint ($e = SP - PV$). Examples: a hot water reheat valve opening as space temperature drops below `70 °F`, or a VFD supply fan speeding up as duct static pressure falls below `1.00 in. w.c.`.

### Integral Windup and Anti-Reset Windup

When a zone or plant cannot reach its setpoint—for example, when central chilled water is shut off in winter, when a VAV damper is already `100%` open, or when a laboratory door is propped open—the error $e(t)$ remains nonzero indefinitely. Without protection, the integral accumulator $\int e\,dt$ winds up to a huge value, holding the actuator pinned at `100%` long after the process variable finally crosses the setpoint.

DDC controllers prevent windup using:
1. **Loop Enable Interlocks**: Disabling the PID loop and forcing output to `0%` when the parent equipment (AHU fan, chiller, or boiler) is proven off via its [proof-of-flow status switch](switches-and-safeties.html) or when a laboratory door switch opens ([laboratory and fume hood control](laboratory-and-fume-hood-control.html)).
2. **Output Clamping (Conditional Integration)**: Freezing the integral accumulator whenever $u(t)$ reaches its `0%` or `100%` saturation limit (or an active high/low override clamp) and the error would push it further into saturation.
3. **Velocity (Incremental) PID Algorithm**: Calculating only the change in output $\Delta u_k$ at each sample step $k$ and clamping the resulting position $u_k = \text{clamp}(u_{k-1} + \Delta u_k, u_{\min}, u_{\max})$.

## Cascade Control Architectures

In **cascade control**, two PID loops are nested in series so that the output of a slower **primary (outer) loop** serves as the dynamic setpoint of a faster **secondary (inner) loop**:

$$\text{Room Temp } PV_1 \xrightarrow{\text{Outer PID}} Q_{\text{setpoint}} \xrightarrow{\text{Inner PID}} \text{Damper Actuator (`0–10 V` / Floating)} \longrightarrow \text{Measured CFM } PV_2$$

### Why Cascade Control Outperforms Single-Loop Control

1. **Discharge Air Temperature Cascade on Zone Heating/Cooling**: In single-zone VAV (`SZVAV`), fan-coil, and chilled-beam applications, the space temperature PID loop resets a discharge air or supply water temperature setpoint (`55–90 °F`), and a faster coil-leaving PID loop modulates the chilled/hot water [control valve](control-valves.html) to prevent coil hunting and thermal stratification.
2. **Pressure-Independent VAV Terminal Control ([vav-control](vav-control.html))**: In controllers such as the [Siemens BACnet PTEC](../product/apogee-tec-vav.html) (`A6V10445888`), [Siemens Compact VAV G..B181.1E/3](../product/gdb181-1e-3.html) (`A6V10356040`), [Desigo DXR2](../product/dxr2.html), and [Trane Symbio 500 VAV](../product/symbio-500.html) (`BAS-SVX091B-EN`), the outer room temperature loop updates an airflow setpoint (`CFM`) between $Q_{\min}$ and $Q_{\max}$, while the fast inner airflow loop reads the internal [differential pressure velocity sensor](airflow-measurement.html) and modulates the damper to hold that exact `CFM`. If trunk duct static pressure surges when neighboring zones close, the inner flow loop corrects the damper angle within seconds—long before room temperature is affected.
3. **Tuning Rule for Cascade Loops**: The inner secondary loop must have a response bandwidth **at least 3 to 5 times faster** than the outer primary loop so the outer loop sees the inner loop as a responsive, linear actuator.

## Heating/Cooling Deadbands and Split-Range Sequencing

To comply with ASHRAE Standard 90.1 and prevent simultaneous heating and cooling, zone controllers separate the occupied heating setpoint (for example, `70 °F` / `21.1 °C`) and occupied cooling setpoint (for example, `74 °F` / `23.3 °C`) by a **zero-energy deadband** (typically `3 to 5 °F` occupied, expanding to `55–60 °F` heating setback and `80–85 °F` cooling setup when unoccupied).

### Split-Range Loopout Mapping

Whether implemented as a single bipolar loop (`-100%` heating to `+100%` cooling) or two separate heating and cooling `0–100%` *loopout* demands (as in the Siemens BACnet PTEC manual `125-5053` and York Smart Equipment `SSE-50`), a single zone temperature controller coordinates multiple physical outputs in strict sequence:

| Zone Operating State | Cooling Loopout | Heating Loopout | Supply Airflow Setpoint ($Q_{\text{sp}}$) | Reheat / Perimeter Heat Output |
| :--- | :--- | :--- | :--- | :--- |
| **Full Cooling (`T_room >> T_clg,sp`)** | `100%` | `0%` | Maximum cooling airflow ($Q_{\text{clg,max}}$) | `0%` (Closed / Off) |
| **Modulating Cooling (`T_room > T_clg,sp`)** | `0% → 100%` | `0%` | Linearly scaled from $Q_{\min}$ to $Q_{\text{clg,max}}$ | `0%` (Closed / Off) |
| **Occupied Deadband (`T_htg,sp <= T_room <= T_clg,sp`)** | `0%` | `0%` | Minimum ventilation airflow ($Q_{\min}$) | `0%` (Closed / Off) |
| **Stage 1 Heating (`Dual-Maximum VAV`)** | `0%` | `0% → 50%` | Held at low minimum airflow ($Q_{\min}$) | Modulates hot water valve (`0–100%`) or stages electric heat to raise discharge air temp up to $T_{\text{DAT,max}}$ |
| **Stage 2 Heating (`Dual-Maximum VAV`)** | `0%` | `50% → 100%` | Ramps airflow from $Q_{\min}$ to heating max ($Q_{\text{htg,max}}$) | Holds discharge air temperature at $T_{\text{DAT,max}}$ (`<= T_room + 15 °F`) |

## Multi-Stage Equipment Sequencing and Lead-Lag Control

When a continuous `0–100%` PID demand drives discrete staged equipment—such as a 2- to 4-stage DX rooftop unit ([York Smart Equipment SSE](../product/york-sse-controller.html) with `SE-SPU1004-0` expansion board or [Trane Symbio 700](../product/symbio-700.html)), multi-stage electric duct heaters ([Siemens PTEC 3-stage electric heat](../product/apogee-tec-vav.html) `A6V10443354`), or multiple parallel pumps and chillers—the controller applies:

1. **Lead-Lag Rotation and Automatic Failover**:
   - **Proof-of-Flow Failover**: If the commanded `Lead` pump or fan fails to close its [current switch or differential pressure switch](switches-and-safeties.html) within a proving delay (`10–30 seconds`), the controller latches a runtime fault alarm, de-energizes the failed lead unit, and immediately starts the `Standby / Lag` unit.
   - **Runtime Balancing**: In redundant (`N+1`) hydronic pump or fan arrays ([hydronic system control](hydronic-system-control.html)), the supervisory controller ([Siemens Desigo PXC4/5/7](../product/pxc4.html), [Trane Tracer SC+](../product/tracer-sc-plus.html)) rotates the designated `Lead` unit weekly or after an accumulated runtime differential (e.g., `168 hours`) with an overlap transition so loop pressure never drops during changeover.
2. **Minimum On-Time, Minimum Off-Time, and Inter-Stage Timers**: Prevents compressor liquid slugging and contactor wear by enforcing a minimum run timer (`3–5 minutes`), minimum off/anti-short-cycle timer (`3–5 minutes`), and inter-stage delay (`30–120 seconds`) before adding or shedding the next stage.
3. **Stage-Up / Stage-Down Thresholds with Hysteresis**: For example, a 3-stage electric reheat controller energizes Stage 1 at `25%` heating loopout (drops out at `15%`), Stage 2 at `55%` (drops out at `45%`), and Stage 3 at `85%` (drops out at `75%`).
