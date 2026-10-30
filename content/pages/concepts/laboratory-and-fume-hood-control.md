---
id: laboratory-and-fume-hood-control
type: concept
title: "Laboratory pressurization and fume hood control"
summary: "Critical airflow control principles for research laboratories, cleanrooms, and healthcare spaces: volumetric offset tracking vs. direct room differential pressure control, variable air volume (VAV) chemical fume hood containment, and high-speed venturi valve vs. damper-and-transducer architectures."
review: draft
images:
  - path: images/concepts/laboratory-and-fume-hood-control.svg
    alt: "Technical diagram (drawn illustration) of laboratory volumetric airflow tracking, negative pressure containment, and VAV fume hood sash and face-velocity control"
    source: "Own work (BASWiki technical diagram based on Phoenix Controls CSCP/PBC/FHD500 and Siemens APOGEE 570-Series 149-988 engineering guides)"
    license: CC0-1.0
related:
  - airflow-measurement
  - differential-pressure-sensors
  - gages-and-local-instrumentation
  - damper-actuators
  - dampers-and-louvers
  - io-points
  - cscp-valve
  - traccel-valve
  - celeris-valve
  - phoenix-pbc
  - fhd500
  - apogee-570-lab-fume-hood
sources:
  - https://www.Download.PhoenixControls.com/Documents/ Public Website/Data Sheet/MKT-0205 CSCP High Performance Action Air Valves Product Data Sheet.pdf
  - https://www.Download.PhoenixControls.com/Documents/ Public Website/Data Sheet/MKT-0244 Traccel Product Data Sheet.pdf
  - https://www.Download.PhoenixControls.com/Documents/ Public Website/Data Sheet/MKT-0411 FHD500 Monitor.pdf
---

## Overview

Research laboratories, vivariums, isolation rooms, and cleanrooms rely on directional airflow and fume hood face velocity to protect occupants from hazardous chemical vapors, biological agents, and particulates. Because opening a fume hood sash or a room door changes the required exhaust or room leakage airflow within a fraction of a second, critical laboratory HVAC controls require high-speed response (typically `<1 second` for fume hood face velocity loops and room supply/exhaust tracking) that is ten to ninety times faster than standard commercial office VAV control (`60–95 seconds`).

Across university research campuses, two primary architectural families are deployed for laboratory and fume hood airflow control:

1. **Pressure-Independent Venturi Air Valves (Phoenix Controls)** — Mechanically pressure-independent cone-and-spring venturi valves ([CSCP](../product/cscp-valve.html), [Traccel](../product/traccel-valve.html), and [Celeris](../product/celeris-valve.html)) paired with dedicated high-speed room controllers ([PBC100 / PBC200](../product/phoenix-pbc.html)) and fume hood monitors ([FHD500](../product/fhd500.html)).
2. **High-Speed Blade Damper & Differential Pressure Transducer Assemblies (Siemens APOGEE / Desigo)** — Factory-calibrated airflow stations with multi-point averaging total/static pitot arrays, ultra-low-range differential pressure transducers, and sub-second electric or pneumatic actuators, such as the [Siemens APOGEE 570-Series Laboratory & Fume Hood Terminal](../product/apogee-570-lab-fume-hood.html).

## Laboratory Room Pressurization Strategies

To contain airborne hazards inside a chemical or biological laboratory—or to exclude contaminants from a cleanroom—the room's supply and exhaust airflows are controlled to maintain a continuous directional airflow across the room envelope (door undercuts, pass-throughs, and construction seams).

| Pressurization Direction | Volumetric Balance | Typical Differential Pressure ($\Delta P$) | Typical Campus Applications |
| :--- | :--- | :--- | :--- |
| **Negative Pressure (Containment)** | $\sum Q_{\text{exhaust}} > Q_{\text{supply}}$ ($\Delta Q_{\text{offset}} < 0$) | `-0.01 to -0.05 in. w.c.` (`-2.5 to -12.5 Pa`) | Chemical research labs, teaching labs, necropsy suites, airborne infection isolation (AII) rooms, soiled cage wash |
| **Positive Pressure (Exclusion)** | $Q_{\text{supply}} > \sum Q_{\text{exhaust}}$ ($\Delta Q_{\text{offset}} > 0$) | `+0.01 to +0.05 in. w.c.` (`+2.5 to +12.5 Pa`) | Cleanrooms, optics/laser labs, protective environment (PE) rooms, sterile supply, specific-pathogen-free (SPF) animal holding |
| **Neutral / Corridor Buffer** | $Q_{\text{supply}} \approx \sum Q_{\text{exhaust}}$ | `0.00 in. w.c.` | Open administrative zones, anteroom buffers (stepped cascade) |

### 1. Volumetric Airflow Offset Tracking

In **volumetric offset tracking**, the room controller continuously measures every exhaust stream leaving the room—each VAV fume hood ($Q_{\text{FH1}}, Q_{\text{FH2}}, \dots$), snorkel/canopy exhaust, biosafety cabinet (BSC) thimbles, and the general room exhaust valve ($Q_{\text{GE}}$)—and commands the room supply air valve ($Q_{\text{SA}}$) to maintain a fixed volumetric differential ($\Delta Q_{\text{offset}}$, typically `100 to 300 CFM` per lab module):

$$Q_{\text{supply}} = \sum Q_{\text{hoods}} + Q_{\text{general exhaust}} - \Delta Q_{\text{negative offset}}$$

- **Instantaneous Feedforward Response**: When a researcher raises a fume hood sash, the hood exhaust valve opens in `<1 second`. The room controller immediately sees the increased hood exhaust flow demand and increases the room supply air valve (or throttles back the general exhaust valve) in lockstep, preventing room depressurization spikes without waiting for room pressure to decay.
- **Immunity to Door Openings**: When the laboratory corridor door opens, the room differential pressure immediately drops to `0.00 in. w.c.`. A pure volumetric tracking loop maintains steady inward transfer air ($\Delta Q_{\text{offset}}$) through the open doorway without driving the supply or general exhaust valves to saturation.

### 2. Direct Room Differential Pressure Control & Hybrid Cascade

In **direct room pressure control**, a low-range room [differential pressure sensor](differential-pressure-sensors.html) (`±0.10 in. w.c.` or `±0.25 in. w.c.` full scale) with a corridor reference tube measures the actual static pressure differential across the lab wall and modulates the general exhaust or supply air valve via a PID loop to hold a pressure setpoint (for example, `-0.03 in. w.c.`).

- **Door Switch Interlock**: If a direct pressure loop is used alone, opening the room door causes the measured $\Delta P$ to drop to zero, which would cause the PID loop to wind up and drive the exhaust damper to `100%` (creating excessive noise and air velocity when the door closes). Direct pressure systems therefore often require a door [contact switch](switches-and-safeties.html) (`DI`) to freeze the PID output while the door is open, or use **hybrid cascade control** where volumetric tracking acts as the fast primary loop and room $\Delta P$ provides a slow supervisory trim on $\Delta Q_{\text{offset}}$.
- **Local Visual Verification**: Regardless of whether the control loop is volumetric or direct $\Delta P$, laboratories and isolation rooms frequently include a wall-mounted [Magnehelic® differential pressure gage](gages-and-local-instrumentation.html) or room pressure monitor above the entry door so researchers can visually verify negative containment before entering.

## Chemical Fume Hood Control (`CV` vs. `VAV`)

A chemical fume hood protects the operator by drawing conditioned room air through the open sash face at a controlled **face velocity** (typically `100 fpm` / `0.51 m/s` per ANSI/AIHA Z9.5 and campus EH&S standards), capturing chemical vapors and exhausting them through dedicated roof exhaust fans.

| Fume Hood Control Type | Operating Principle | Energy & Airflow Impact |
| :--- | :--- | :--- |
| **Constant Volume (`CV`)** | Exhausts a fixed maximum airflow (`100%` design CFM) 24/7 regardless of sash position. Some CV hoods include a bypass grille that opens as the sash closes to prevent excessive face velocity at low sash openings. | High energy consumption (`100%` conditioned make-up air exhausted continuously), simple mechanical balancing. |
| **Two-State (`High / Low`)** | Switches between two fixed exhaust airflows triggered by a sash limit switch, occupancy sensor, or manual switch. | Moderate energy savings during unoccupied hours; requires sash discipline. |
| **Variable Air Volume (`VAV`)** | Continuously modulates the hood exhaust valve (`<1 s` response) in proportion to the open sash area (or measured sidewall velocity) to maintain constant `100 fpm` face velocity down to a minimum exhaust flow (`25–30 CFM/ft²` of internal hood work surface per NFPA 45 / ANSI Z9.5). | Reduces hood exhaust and make-up air energy by `50–70%` when sashes are closed or partially lowered. |

### Sash Position vs. Sidewall Velocity Sensing

VAV fume hood controllers determine the required exhaust volumetric flow rate using one or both of the following sensing methods:

1. **Sash Position Sensing (`Feedforward Area Calculation`)** — A stainless-steel cable potentiometer (vertical sash sensor `VSS`), ultrasonic distance sensor, or optical strip array measures the exact vertical and/or horizontal sash opening height. The controller multiplies the open face area ($A_{\text{open}}$) by the target face velocity ($v_{\text{target}}$, e.g., `100 fpm`) to compute the exact exhaust CFM command ($Q = A_{\text{open}} \times v_{\text{target}}$), clamped at the minimum safety exhaust CFM when the sash is closed.
2. **Sidewall / Through-the-Wall Velocity Sensing (`Closed-Loop Trim`)** — A thermal anemometer or ultra-low differential pressure velocity sensor mounted in the hood sidewall measures air velocity entering a calibrated path between the corridor room air and the interior hood plenum. In combined systems, sash position provides instantaneous (`<1 s`) feedforward positioning while the sidewall sensor trims for thermal drafts or large equipment obstructing the hood opening.
3. **Zone Presence Occupancy Setback (`100 fpm` to `60 fpm`)** — An overhead infrared/doppler motion sensor (such as the Phoenix Controls `ZPS310` Zone Presence Sensor) detects whether an operator is standing in front of the hood. When the zone is unoccupied with the sash open, the controller smoothly reduces the face velocity setpoint from `100 fpm` to `60 fpm`, immediately restoring `100 fpm` the instant an operator approaches.

### Fume Hood Monitors & Emergency Purge

Every VAV and monitored CV fume hood is equipped with a local operator display and safety alarm station (such as the [Phoenix Controls FHD500](../product/fhd500.html) or Siemens `FHM` operator terminal):

- **Normal Operation**: Green status LED and digital display of face velocity (`fpm`) or sash status.
- **Low / High Face Velocity Alarm**: Red visual LED and audible buzzer (`>65 dBA`) with a local **Mute** button if face velocity drops below the low-alarm threshold (e.g., `<80 fpm`) or exceeds the high-alarm threshold after a short settling delay (`3–5 s`).
- **Emergency Purge**: A dedicated push button (`Emergency Purge`) that overrides normal VAV control, drives the fume hood exhaust valve to `100%` maximum flow, and sounds an audible/visual alert to clear a chemical spill inside the hood.
- **Night / Sash-High Alert**: Audible/visual reminder prompting researchers to lower the sash when nobody is present in front of the hood.

## Comparison of Campus Laboratory Control Architectures

| Attribute | Phoenix Controls Venturi Valve Architecture | Siemens APOGEE 570-Series / Desigo Damper Architecture |
| :--- | :--- | :--- |
| **Airflow Control Device** | Mechanically pressure-independent cone-and-spring venturi air valve ([CSCP](../product/cscp-valve.html), [Traccel](../product/traccel-valve.html), [Celeris](../product/celeris-valve.html)) | High-speed opposed/single-blade damper terminal with averaging multi-point flow cross ([APOGEE 570-Series](../product/apogee-570-lab-fume-hood.html)) |
| **Static Pressure Compensation** | **Mechanical (`<1 second`)**: Precision spring inside the sliding cone automatically repositions the cone as duct static pressure fluctuates (`0.6–3.0 in. w.c.`), maintaining constant CFM without an electronic $\Delta P$ sensor loop | **Electronic (`Closed-Loop`)**: Differential pressure transducer (`0–1 in. w.c.`) measures velocity pressure across the flow cross and modulates the high-speed actuator to hold CFM setpoint |
| **Flow Determination** | Factory-characterized 20-point linear rotary potentiometer measuring exact valve shaft angle (`CFM = f(angle)`) | Square-root velocity calculation ($Q = K \sqrt{\Delta P}$) from multi-point pitot averaging sensor |
| **Straight-Duct Inlet Requirement** | `0` diameters required (insensitive to upstream elbows and transitions) | `1.5 to 3` equivalent duct diameters recommended upstream of the flow cross for velocity profile accuracy |
| **Chemical Corrosion Resistance** | Available with Heresite® phenolic coating (`316SS` shaft/hardware) or solid molded flame-retardant polypropylene (`Traccel`) for acid/solvent exhaust | Available in galvanized steel, `304SS`, or `316SS` casing/shaft with coated or stainless-steel flow sensor |
| **Room / Hood Controller & Network** | [PBC100 / PBC200](../product/phoenix-pbc.html) or `CEL` controller on `LonWorks` (`1.25 Mbps`) or `BACnet MS/TP` + [FHD500](../product/fhd500.html) display | [APOGEE 570-Series](../product/apogee-570-lab-fume-hood.html) (`570-01xxx` / `571-01xxx`) on APOGEE `FLN` (`P1`) or Desigo room automation (`DXR2` / `PXC4`) on `BACnet` |
