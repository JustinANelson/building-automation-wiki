---
id: belimo
type: manufacturer
title: Belimo
summary: Swiss manufacturer of direct-coupled damper actuators, characterized control valves, and HVAC pressure/temperature sensors.
review: verified
related:
  - amb24-3
  - belimo-22adp-584
  - belimo-22pdp-18
  - belimo-damper-actuators
  - belimo-pressure-sensors
  - control-valves
  - damper-actuators
  - lmb24-3
  - nmb24-3
sources:
  - https://www.belimo.com/
---

## Company Overview

**Belimo** (Belimo Holding AG, headquartered in Hinwil, Switzerland) is a global manufacturer of field devices for heating, ventilation, and air conditioning systems. Founded in 1975, Belimo revolutionized HVAC installation by introducing the **direct-coupled damper actuator**, which mounts directly over a damper drive shaft without mechanical crank arms, linkages, or ball joints.

## Core Product Offerings

### 1. HVAC Damper Actuators
- **Non Fail-Safe Direct-Coupled Actuators**: The [LMB](../product/lmb24-3.html) (`5 Nm` / `45 in-lb`), [NMB](../product/nmb24-3.html) (`10 Nm` / `90 in-lb`), and [AMB](../product/amb24-3.html) (`20 Nm` / `180 in-lb`) series, powered by brushless DC motors with ASIC digital stall protection and universal shaft clamps.
- **Mechanical Spring-Return Actuators**: The `TF`, `LF`, `NF`, and `AF` series incorporating clock springs for true fail-safe return on freeze protection, smoke exhaust, and outdoor air isolation dampers.
- **Electronic Fail-Safe Actuators**: Supercapacitor-driven emergency repositioning actuators.

### 2. Control Valves and Hydronic Devices
- **Characterized Control Valves (CCV)**: Ball valves featuring a characterized disc insert that converts a standard ball valve's high-gain parabolic flow curve into an **equal-percentage flow characteristic**, providing stable low-load modulating control on hydronic heating and cooling coils.
- **Pressure-Independent Control Valves (PICV / PIQCV)**: Valves combining a dynamic mechanical differential pressure regulator and a modulating control valve in a single body, maintaining design flow regardless of hydronic distribution pressure variations.
- **Belimo Energy Valve™**: Advanced IoT-connected pressure-independent valve integrating ultrasonic flow measurement, matched temperature sensors, and delta-T management algorithms to eliminate "Low $\Delta T$ Syndrome" in central chilled water plants.

### 3. HVAC Sensors
- **Air Differential Pressure**: The [22ADP Series](../product/belimo-22adp-584.html) with multi-range DIP switches and optional automated zero-calibration for static pressure reset and filter monitoring.
- **Wet-to-Wet Liquid Differential Pressure**: The [22PDP Series](../product/belimo-22pdp-18.html) with 316L stainless steel diaphragms for hydronic loop pump VFD control.
- **Temperature and Humidity**: Immersion wells, duct averaging sensors, and room transmitters.


## Choosing a Belimo Device

This section is an overview drawn from the product-line and concept pages in this wiki.

**Damper actuators.** Select in this order: torque for the damper area (see the torque classes on [Damper actuators](../concept/damper-actuators.html)), fail-safe action (non fail-safe, spring return or electronic), control signal (on/off, floating or modulating), and any feedback or end switches. The LMB, NMB and AMB are non fail-safe, so use a spring-return TF, LF, NF or AF series where the damper must go to a set position on power loss, such as freeze-protected outdoor air dampers or smoke exhaust.

**Valves.** A characterized control valve gives stable control on a coil because its flow curve is matched to the coil's heat output; a pressure-independent valve also holds flow when distribution pressure changes, which removes the need for separate balancing valves. See [Control valves](../concept/control-valves.html).

**Sensors.** The 22ADP series suits duct static pressure and filter monitoring, and the 22PDP series suits hydronic loop differential pressure. Check the range, output and zeroing arrangement against [Differential pressure sensors](../concept/differential-pressure-sensors.html).

**Controller side.** Belimo devices take standard signals from any controller, as described in [Control signals](../concept/control-signals.html) and [Analog signals](../concept/analog-signals.html). Match the signal type and span, set the controller's runtime for floating control, and wire the supply to the actuator's rating.
