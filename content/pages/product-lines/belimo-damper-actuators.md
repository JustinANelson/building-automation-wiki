---
id: belimo-damper-actuators
type: product-line
title: Belimo Damper Actuators
summary: Direct-coupled non-spring return and spring-return rotary actuators for commercial HVAC air damper control.
manufacturer: belimo
category: actuator
protocols: []
status: current
review: verified
related:
  - amb24-3
  - belimo
  - control-signals
  - damper-actuators
  - dampers-and-louvers
  - economizer-control
  - lmb24-3
  - nmb24-3
  - vav-control
sources:
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_LMB24-3_datasheet_en-us.pdf
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_NMB24-3_datasheet_en-us.pdf
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_AMB24-3_datasheet_en-us.pdf
---

## Overview

The **Belimo Damper Actuator** family comprises direct-coupled rotary and linear electric actuators engineered for HVAC air control, from terminal VAV boxes to heavy central air handling unit mixing dampers. Recognized for inventing the direct-coupled mounting principle (which clamps directly onto a damper shaft without crank arms or mechanical linkage rods), Belimo actuators are the primary standard across commercial HVAC and building automation installations.

## Product Series by Torque Classification

Belimo groups its non fail-safe rotary damper actuators into distinct series scaled by rated output torque:

- **[LMB Series](../product/lmb24-3.html) (5 Nm / 45 in-lb)**: Designed for small terminal dampers, single-duct VAV terminal boxes, and air transfer louvers up to approximately `11 sq ft` (`1.0 m²`). Features ultra-low acoustic sound emission (`35 dB(A)`).
- **[NMB Series](../product/nmb24-3.html) (10 Nm / 90 in-lb)**: The commercial workhorse actuator for medium-sized VAV boxes, supply/return tracking dampers, and rooftop unit economizers up to approximately `22 sq ft` (`2.0 m²`).
- **[AMB Series](../product/amb24-3.html) (20 Nm / 180 in-lb)**: Heavy-duty rotary actuator for large multi-blade dampers, central station AHU economizer mixing boxes, and bypass dampers up to `45 sq ft` (`4.2 m²`).
- **GMB Series (40 Nm / 360 in-lb)**: Maximum-torque direct-coupled actuator for large industrial dampers, multi-section louvers, and tunnel ventilation dampers up to `90 sq ft` (`8.4 m²`).

## Drive Technologies and Fail-Safe Mechanisms

- **Brushless DC Motor and ASIC Control**: Actuators utilize high-efficiency sensorless brushless DC motors supervised by an Application-Specific Integrated Circuit (ASIC). Digital Rotation Sensing (DRS) continuously monitors motor velocity and shaft counter-torque, cutting power in stall conditions without requiring mechanical end-of-stroke microswitches.
- **Mechanical Spring-Return (True Fail-Safe)**: On critical applications such as outdoor air freeze isolation dampers, smoke relief dampers, and laboratory make-up air plenums, Belimo spring-return models (`TF`, `LF`, `NF`, and `AF` series) incorporate a mechanical clock spring that mechanically snaps the damper fully closed (or open) upon loss of electrical power within `15 to 25 seconds`.
- **Electronic Fail-Safe (Supercapacitor Backup)**: Belimo electronic fail-safe actuators incorporate onboard electrochemical supercapacitors that store electrical energy during normal operation, driving the motor to a field-configured emergency position (open, closed, or preset angle) during power failure without mechanical spring wear.

## Control Interfaces and Variants

1. **On/Off and Floating Point (`-3` suffix)**: Governed by dual `24 VAC/DC` triac or relay outputs ([LMB24-3](../product/lmb24-3.html), [NMB24-3](../product/nmb24-3.html), [AMB24-3](../product/amb24-3.html)), pulsing clockwise or counterclockwise across a constant `95-second` full stroke.
2. **Proportional Modulating (`-SR` and `-MF` suffix)**: Accepts analog `0–10 VDC`, `2–10 VDC`, or `4–20 mA` control signals with a matching `2–10 VDC` feedback voltage signal for precise position verification.
3. **Digital Bus Communication**: Integrated BACnet MS/TP, Modbus RTU, and Belimo MP-Bus interfaces allow multi-drop serial control and monitoring over a single twisted pair.
4. **Hardware Option Suffixes**:
   - `-S`: Built-in single or dual SPDT auxiliary switches for end-position proof.
   - `-T`: Terminal strip wiring blocks under a snap-on cover instead of flying plenum leads.


## Selecting an Actuator

This section is an overview drawn from the other pages in this wiki.

1. **Torque.** Estimate the damper area and its torque need, then choose the smallest series with margin; see the sizing rule on [Damper actuators](../concept/damper-actuators.html) and [Dampers and louvers](../concept/dampers-and-louvers.html). The areas quoted above are for typical conditions, so reduce them for high static pressure, high face velocity or stiff seals.
2. **Fail-safe.** Use a non fail-safe actuator where the damper can stay put on power loss, a spring-return one where it must close or open, and electronic fail-safe where a selectable position is wanted.
3. **Signal.** Floating (-3) works with two triac outputs and needs the controller's runtime set to the 95-second stroke. Modulating takes 0-10 V, 2-10 V or 4-20 mA and provides feedback. Bus versions suit systems that already have MS/TP or Modbus; see [Control signals](../concept/control-signals.html).
4. **Options.** Add auxiliary switches for end-position proof and a terminal strip where plenum leads are not wanted.

**Installation points.** Mount on the shaft centred, tighten the clamp to the specified torque, fit the anti-rotation bracket and set the stroke limits so the actuator does not force the damper past its stops. Commissioning and troubleshooting steps are on the damper actuators concept page.
