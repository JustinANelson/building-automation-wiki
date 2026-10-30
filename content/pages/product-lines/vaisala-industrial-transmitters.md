---
id: vaisala-industrial-transmitters
type: product-line
title: Vaisala Industrial Transmitters
summary: Heavy-duty, wide-range humidity, temperature, and dewpoint transmitters for cleanrooms, high-temperature processes, and harsh environments.
manufacturer: vaisala
category: sensor
protocols: []
status: current
review: verified
related:
  - humidity-sensors
  - temperature-sensors
  - vaisala
  - vaisala-hvac-transmitters
sources:
  - https://downloads.psl.noaa.gov/BLO/Air-Sea/oceanobs/portable_standard/hardware/HMT330-Series-Datasheet-B210951EN-C-LOW-v2.pdf
  - https://xdevs.com/doc/Vaisala/GM70/HVAC-Product-Brochure-B211277EN.pdf
---

## Overview

The **Vaisala Industrial Transmitter** product line provides industrial-grade environmental measurement instruments designed for cleanrooms, pharmaceutical manufacturing suites, environmental test chambers, drying kilns, and compressed air systems. Documented in Vaisala datasheet `HMT330-Series-Datasheet-B210951EN-C`, the flagship **HMT330 Series** combines high measurement accuracy with extreme chemical tolerance and mechanical robustness.

## HMT330 Series Capabilities

- **Measurement Ranges**: Full `0 to 100% RH` humidity span; probe process temperatures up to `+180 °C` (`+356 °F`) and pressures up to `10 MPa` (`100 bar`).
- **Accuracy**: $\pm 1.0\%\text{ RH}$ (`0–90% RH`) and $\pm 0.2\text{ °C}$ across normal ambient temperatures, calibrated against traceable standards.
- **Derived Humidity Parameters**: Onboard microprocessor computes and outputs dewpoint temperature ($T_d$), mixing ratio ($x$), absolute humidity ($a$), wet-bulb temperature ($T_w$), enthalpy ($h$), and water vapor pressure ($p_w$).
- **Chemical Purge Technology**: An automated heating cycle periodically raises the HUMICAP® sensor element temperature to vaporize and drive off chemical contaminants and cleaning agents (such as hydrogen peroxide, alcohols, and organic solvents), restoring sensor calibration without field service.
- **Probe Warm-Up Function**: In saturated or condensing environments, a heated probe option prevents moisture condensation on the sensor head, enabling continuous high-humidity monitoring.

## Six Dedicated Probe Models

1. **HMT331**: Compact wall-mount probe for pharmaceutical cleanrooms and computer server rooms.
2. **HMT333**: Duct-mount probe with flexible cable for standard duct processes up to `+80 °C` (`+176 °F`).
3. **HMT334**: High-pressure probe rated for vacuum up to `10 MPa` (`100 bar`) with a sliding compression fitting.
4. **HMT335**: Extended stainless steel probe designed for high-temperature drying ovens and exhaust stacks up to `+180 °C` (`+356 °F`).
5. **HMT337**: Warmed probe assembly engineered for continuous condensing conditions, meteorology, and environmental chambers.
6. **HMT338**: Pipeline insertion probe equipped with an installation valve for pressurized gas lines up to `4 MPa` (`40 bar`).

## Housing and Display Electronics

- **Cast Metal Housing**: Heavy-duty die-cast aluminum alloy enclosure (`G-AlSi 10 Mg`) rated IP65 / NEMA 4.
- **Graphical Trend Display**: Large backlit graphical LCD displays live multi-parameter readings, real-time trend curves, and historical data logging over 4 years with a battery-backed real-time clock.
- **Output Connectivity**: Up to three isolated analog outputs (`0–20 mA`, `4–20 mA`, `0–5 V`, `0–10 V`), RS-232 / RS-485 serial communications, and optional wired or wireless Ethernet interfaces.


## Selecting a Probe

This section is an overview drawn from the other pages in this wiki.

Choose the probe from the process, not the transmitter body, which is common to the series.

| Process | Probe | Why |
| :--- | :--- | :--- |
| Cleanroom or server room wall | HMT331 | Compact, wall mounted |
| Duct up to 80 degrees C | HMT333 | Flexible cable |
| Pressurised or vacuum process | HMT334 | Rated to 10 MPa, sliding fitting |
| Drying oven or exhaust stack | HMT335 | Long stainless probe to 180 degrees C |
| Condensing or saturated air | HMT337 | Warmed probe prevents wetting |
| Pressurised gas line | HMT338 | Installed through a valve |

**Contamination.** Where cleaning agents or hydrogen peroxide are used, such as pharmaceutical suites and animal facilities, enable the chemical purge and check its schedule; see [Humidity sensors](../concept/humidity-sensors.html). Plan calibration against a traceable reference.

**Outputs.** Up to three analog outputs, or serial and Ethernet interfaces, depending on the options ordered. Set analog spans in the transmitter and in the controller, and keep the isolated outputs separate from other circuits. See [Analog signals](../concept/analog-signals.html).

**Applications beyond HVAC.** The derived values (dew point, mixing ratio, enthalpy) suit process control and cleanroom monitoring as well as building systems; see the HVAC range on [Vaisala HVAC transmitters](vaisala-hvac-transmitters.html) for the lower-cost building units.
