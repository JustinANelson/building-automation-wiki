---
id: belimo-pressure-sensors
type: product-line
title: Belimo Pressure Sensors
summary: Differential air and wet-to-wet liquid pressure transmitters for duct static, filter monitoring, and hydronic loop control.
manufacturer: belimo
category: sensor
protocols: []
status: current
review: draft
related:
  - airflow-measurement
  - belimo
  - belimo-22adp-584
  - belimo-22pdp-18
  - differential-pressure-sensors
  - hydronic-system-control
  - static-pressure-reset
  - switches-and-safeties
---

## Overview

The **Belimo Pressure Sensor** product line encompasses solid-state electronic pressure transmitters engineered for HVAC airside and hydronic applications. Documented across Belimo technical data sheets `22ADP-584..` and `22PDP-18..`, the family includes piezoresistive dry differential pressure sensors for duct airflow and air handling unit monitoring, alongside rugged wet-to-wet stainless steel differential pressure sensors for chilled water and hot water pumping loops.

## Product Series

- **[Belimo 22ADP Series](../product/belimo-22adp-584.html) (Air Differential Pressure)**:
  - Designed for duct static pressure control ([static pressure reset](../concept/static-pressure-reset.html)), air velocity and volume flow measurement ([airflow measurement](../concept/airflow-measurement.html)), and air filter differential pressure monitoring.
  - Multi-range DIP-switch selectable scales (for example, `0–250 Pa` to `0–2500 Pa` or `0–1.0 in. w.c.` to `0–10.0 in. w.c.` on model [22ADP-584](../product/belimo-22adp-584.html)).
  - Piezoresistive silicon diaphragm with optional automated zero-point calibration (`22ADP-..B` variants) that eliminates long-term sensor drift without manual field recalibration.
  - LCD display options indicating differential pressure, calculated volumetric flow (`CFM` or `m³/h`), and alarm limits.
- **[Belimo 22PDP Series](../product/belimo-22pdp-18.html) (Wet-to-Wet Differential Pressure)**:
  - Designed for closed-loop hydronic distribution systems, chiller evaporator/condenser barrel monitoring, and central plant variable-speed pump differential pressure reset ([hydronic system control](../concept/hydronic-system-control.html)).
  - Dual `316L` stainless steel isolation diaphragms compatible with water, ethylene glycol, and propylene glycol mixtures.
  - High burst and static overpressure rating up to `21 bar` (`300 psi`) with selectable measuring ranges (`0–1.0 bar` to `0–6.0 bar` or `0–25 psi` to `0–50 psi` on model [22PDP-18](../product/belimo-22pdp-18.html)).

## Electrical Interfaces and Housing

- **Analog Signal Versatility**: Field-configurable via jumpers for `0–5 VDC`, `0–10 VDC`, or `4–20 mA` output signals compatible with universal inputs on any DDC controller.
- **Digital Bus Communication**: Selected models incorporate integrated Modbus RTU or BACnet MS/TP interfaces for multi-drop serial polling of pressure, flow, and temperature over RS-485.
- **Environmental Enclosure**: IP65 / NEMA 4X polycarbonate enclosures equipped with tool-less snap-fit cover latches, liquid-tight cable glands, and `1/2"` NPT conduit knockouts.


## Selecting a Sensor

This section is an overview drawn from the other pages in this wiki.

| Application | Series | Settings to check |
| :--- | :--- | :--- |
| Duct static pressure | 22ADP | Range switch, output type, zero method |
| Filter loading | 22ADP | A low range with an alarm limit; compare with the clean-filter value |
| Air velocity or flow | 22ADP | The flow calculation uses the pick-up's factor; confirm it |
| Hydronic loop differential pressure | 22PDP | Range above the maximum expected, within the burst rating |
| Chiller barrel differential | 22PDP | Isolation valves so the sensor can be zeroed and removed |

**Zeroing.** Low air ranges drift, so use the automatic zero variant where manual zeroing is impractical, and schedule manual zero checks otherwise. See [Differential pressure sensors](../concept/differential-pressure-sensors.html) for the procedure.

**Output and scaling.** Select the output (0-5 V, 0-10 V or 4-20 mA) to suit the controller input, and scale the controller to the same range; a range mismatch is the usual cause of wrong readings. See [Analog signals](../concept/analog-signals.html).

**Installation.** Use short, unkinked tubing connected high to high and low to low, mount in the orientation the data sheet gives, and keep the tap away from turbulence. For water, fit isolation valves and keep within the overpressure rating. See [Static pressure reset](../concept/static-pressure-reset.html) and [Hydronic system control](../concept/hydronic-system-control.html) for the control uses.
