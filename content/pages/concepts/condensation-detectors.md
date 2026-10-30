---
id: condensation-detectors
type: concept
title: "Condensation detectors and surface dewpoint monitors"
summary: "Pipe-mounted and surface condensation monitors used in chilled beam and radiant cooling systems: hygroscopic impedance sensors, pipe surface dewpoint comparison, and emergency valve shut-off sequences."
review: draft
related:
  - chilled-beams
  - control-valves
  - discharge-air-temperature-reset
  - dxr2
  - humidity-sensors
  - hydronic-system-control
  - siemens-599-zone-valve
  - switches-and-safeties
  - temperature-sensors
  - vt8350
sources:
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/education-training/engineers-newsletters/airside-design/adm_apn034en_1209.pdf
---

## Overview

In hydronic sensible cooling installations—such as [passive and active chilled beams](chilled-beams.html) and radiant chilled ceilings—cooling coils operate without condensate drain pans or pumps. Sensible cooling depends on maintaining the chilled water supply temperature ($T_{\text{CWST}}$, typically `58–60 °F` / `14.4–15.6 °C`) strictly **above the indoor space dewpoint temperature** ($T_{\text{dew}}$, typically `50–55 °F`).

If a building loses positive pressurization, if an occupant opens a perimeter window during humid weather, or if the primary dedicated outdoor air system (DOAS) dehumidification fails, moisture condenses rapidly on cold pipework and aluminum beam fins. **Condensation detectors** (also called condensation monitors or dewpoint switches) provide critical fail-safe hardware protection, shutting off secondary chilled water flow before water droplets can form and drip onto acoustic ceiling tiles, electronic equipment, or occupants.

## Sensor Technologies and Operating Principles

1. **Hygroscopic Conductive Grid Sensors**:
   - *Behavior*: In dry ambient air, the electrical impedance between the tracks exceeds several megaohms ($> 1\text{ M}\Omega$). As relative humidity directly at the cold pipe surface approaches `95% RH`—or when microscopic condensation droplets bridge the tracks—surface moisture dramatically increases electrical conductivity, dropping impedance down into the kilohm range.
   - *Electronics*: An onboard comparator circuit evaluates track impedance and switches an internal solid-state relay or open-collector transistor output (binary `DI`), signaling impending condensation `2 to 3 °F` before actual bulk droplets detach.
   - *Operating Principle*: A flexible printed circuit strip carries an alternating comb pattern of gold-plated or silver-palladium conductive tracks separated by a narrow dielectric gap coated with a hygroscopic polymer.

2. **Surface Temperature vs. Calculated Dewpoint Transmitters**:
   - Rather than relying solely on surface conductivity, advanced transmitters incorporate an ultra-fast surface temperature thermistor (NTC or Pt1000) clamped to the chilled water pipe alongside a calibrated relative humidity element.
   - The transmitter microprocessor computes the local dewpoint temperature ($T_{\text{dew}}$) and evaluates the thermal approach margin: $\Delta T_{\text{margin}} = T_{\text{pipe}} - T_{\text{dew}}$.
   - If $\Delta T_{\text{margin}} \le 2.0\text{ °F}$ (`1.1 °C`), the sensor issues an early warning analog signal or bus message before condensation begins.

## Physical Installation Best Practices

- **Backside Insulation**: Once clamped securely with a worm-gear strap or spring clip, the back and sides of the sensor housing must be thoroughly sealed with elastomeric closed-cell foam insulation (such as Armacell Armaflex) so the sensor measures the true metal pipe temperature rather than surrounding ambient room air.
- **Clamped to Cold Supply Pipe**: The detector is mounted directly to the uninsulated copper or steel chilled water supply runout pipe immediately upstream of the first chilled beam coil or manifold inlet.
- **Thermal Conductive Paste**: A thin layer of silicone thermal heat-sink paste is applied between the curved metal sensing face and the cleaned pipe exterior to eliminate air gaps.

## BAS Control Interlocks and Sequences

When a condensation detector triggers, the local room controller ([Siemens Desigo DXR2](../product/dxr2.html), [Viconics VT8350](../product/vt8350.html)) and central plant supervisory panel execute a coordinated defense sequence:

1. **Alarm Latching and Reset Hysteresis**: To prevent rapid valve cycling, the controller maintains the valve lockout for a minimum settling time (typically `15–30 minutes`) and requires measured space relative humidity to drop at least `5% RH` below the trip threshold before permitting chilled water flow to resume.
2. **DOAS Humidity Pull-Down Priority**: The central dedicated outdoor air system (DOAS) is commanded to increase dehumidification by dropping its discharge air dewpoint setpoint (`45–48 °F`), while primary ventilation airflow to the affected zone is boosted to purge excess space humidity.
3. **Immediate Zone Chilled Water Valve Shut-Off**: The room controller instantly forces the modulating chilled water [control valve](control-valves.html) (such as a [Siemens 599 zone valve](../product/siemens-599-zone-valve.html) or Belimo CCV) to `0%` (closed). If spring-return actuators are used, power is cut to ensure immediate mechanical closure.
4. **Secondary Loop Water Temperature Reset**: In central hydronic plants, if multiple zone condensation alarms trigger simultaneously, the secondary chilled water mixing valve modulates warmer return water into the supply header, dynamically resetting $T_{\text{CWST}}$ from `58 °F` up to `62–64 °F` until room dewpoints normalize.
