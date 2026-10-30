---
id: gages-and-local-instrumentation
type: concept
title: "Pressure and temperature gages and local instrumentation"
summary: "Mechanical differential-pressure gages, Bourdon-tube hydronic pressure gages, industrial thermometers, thermowells, and sight glasses used for local verification and sensor calibration."
review: draft
images:
  - path: images/concepts/gages-and-local-instrumentation.svg
    alt: "Technical diagram (drawn illustration) of mechanical HVAC gages: diaphragm differential pressure gage (in. WC), Bourdon-tube hydronic pressure gage (psi), and industrial stem thermometer in a thermowell"
    source: "Own work (BASWiki technical diagram illustrating standard HVAC mechanical room instrumentation)"
    license: CC0-1.0
related: [differential-pressure-sensors, airflow-measurement, temperature-sensors, io-points, switches-and-safeties, york-optiview]
sources:
  - https://sid.siemens.com/v/u/A6V10356040
  - https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
---
Even in fully networked Direct Digital Control (DDC) mechanical rooms, **local mechanical gages and thermometers** remain essential. They operate without electrical power, provide an immediate visual sanity check when troubleshooting air handlers, pumps, and chillers, and serve as the primary physical reference for verifying and zeroing electronic BAS transmitters ([`AI` points](io-points.html)).

### 1. Air-Side Diaphragm Differential Pressure Gages ("Magnehelic" Style)
Low-pressure air handling and room pressurization applications operate in **inches of water column (`in. WC` or `in. w.g.`)** or **Pascals (`Pa`)** (`1 in. WC ≈ 248.84 Pa`). Because standard Bourdon-tube gages cannot resolve fractions of an inch of water, air-side local gages use a flexible elastomer diaphragm linked magnetically (frictionless helix) to the pointer:

| Application | Typical Gage Range | High (`HI`) & Low (`LO`) Pressure Taps | Purpose & BAS Cross-Check |
| :--- | :--- | :--- | :--- |
| **AHU Pre-Filter & Final Filter Loading** | `0 to 1.0 in. WC` or `0 to 2.0 in. WC` (`0–250` / `0–500 Pa`) | `HI` tap upstream of filter bank; `LO` tap downstream of filter bank | Shows clean vs. dirty filter pressure drop (`ΔP`); cross-checks BAS filter `ΔP` transmitter or differential pressure switch |
| **HEPA Filter Bank Loading** | `0 to 3.0 in. WC` or `0 to 5.0 in. WC` | Across HEPA filter housing in cleanrooms, BSL labs, or hospital AII exhaust | Indicates when HEPA media reaches terminal change-out pressure drop (typically `1.5 to 2.0 in. WC`) |
| **Duct Static Pressure** | `0 to 2.0 in. WC` or `0 to 5.0 in. WC` | `HI` tap at static pressure probe `2/3` down supply main; `LO` tap open to mechanical room or ceiling reference | Verifies the supply duct static pressure (`SP`) transmitter controlling the AHU supply fan VFD |
| **Laboratory, Cleanroom & Isolation Room Pressurization** | `-0.05 to +0.25 in. WC` or `-0.10 to +0.10 in. WC` (zero-center) | `HI`/`LO` across room wall to corridor reference plate | Provides continuous local visual indication of positive or negative room pressure alongside [Phoenix Controls](../product/phoenix-pbc.html) or [Siemens 570-Series](../product/apogee-570-lab-fume-hood.html) room controllers |

### 2. Hydronic & Steam Bourdon-Tube Pressure Gages (`psi` / `kPa`)
On chilled water (`CHW`), hot water (`HW`), condenser water (`CW`), and steam piping, local pressure gages use a curved metallic **Bourdon tube** that straightens slightly under internal fluid pressure:
- **Range Selection Rule**: Per **ASME B40.100**, select a gage full-scale range of approximately **twice the normal operating pressure** so the pointer rests near the middle (`12 o'clock`) of the dial during normal operation (where accuracy is highest).
- **Accuracy Grades (ASME B40.100)**:
  - **Grade 2A (`±0.5%` of span)**: Precision test gages used for balancing hydronic coils and calibrating electronic pressure transmitters.
  - **Grade 1A (`±1.0%` of span)**: Standard institutional specification for 4.5-inch dial mechanical room gages on pumps, chillers, and heat exchangers.
  - **Grade A (`±2%–1%–2%` of span)**: General commercial utility gages (`±1%` across the middle half of scale, `±2%` on the lower and upper quarters).
- **Essential Mounting Accessories**:
  - **Single-Gage Two-Valve Manifold across Pumps & Strainers**: Installing a single differential-reading Bourdon gage (or a single gage with a 3-way/manifold valve connected to both pump suction and pump discharge) eliminates the calibration error between two separate gages when measuring pump head (`ΔP`) or basket strainer fouling.
  - **Gauge Cock (Isolation Ball/Needle Valve) & Pressure Snubber**: Every hydronic gage should have an isolation valve for replacement without draining the pipe and a porous-metal **snubber** (or glycerin liquid fill) to damp pump pulsation and prevent pointer flutter.
  - **Coil Syphon ("Pigtail") on Steam**: On steam boilers, headers, and PRV stations, a loop syphon filled with condensed water must be installed between the steam tap and the gage (and any electronic steam pressure transmitter) to prevent live steam (`>212 °F`) from overheating and annealing the Bourdon tube or sensor diaphragm.

### 3. Industrial Stem Thermometers & Thermowells
Wherever an electronic [BAS immersion temperature sensor](temperature-sensors.html) (`10kΩ NTC`, `Pt1000`, or `LG-Ni1000`) is installed in main chilled-water, hot-water, or heat-exchanger headers, institutional design standards specify an adjacent **local industrial thermometer** (`liquid-in-glass`, `solar digital`, or `bimetallic dial`):
- ** Brass or 316 Stainless Steel Thermowells**: Threaded (`3/4 in. NPT`) or flanged sockets welded into the pipe wall allow both the mechanical thermometer and the BAS immersion probe to be removed for calibration or replacement while the hydronic system remains pressurized.
- **Insertion Depth & Thermal Compound**: The thermowell tip must extend into the active flow stream (typically past the pipe centerline on pipes `≤ 6 in.`, or `2.5 to 4 in.` minimum immersion on larger headers, mounted in an elbow facing the flow where pipe diameter is small). Filling the bottom of the BAS sensor well with **thermal conductive paste** eliminates the insulating air gap between the probe sheath and the well wall, preventing sluggish response and stem-conduction error.

### 4. Local Flow Indicators, Sight Glasses & Pete's Plugs
- **Pressure/Temperature Test Plugs ("Pete's Plugs")**: Self-sealing EPDM/neoprene core fittings (`1/4 in.` or `1/2 in. NPT`) installed at the inlet and outlet of every terminal reheat coil, fan-coil valve ([Siemens 599 Series](../product/siemens-599-zone-valve.html)), and balancing valve so TAB (Testing, Adjusting, and Balancing) technicians can insert a portable needle probe digital manometer or thermometer without permanent gages at every terminal unit.
- **Rotameters & Sight Flow Indicators**: Variable-area glass/acrylic tube flow meters (rotameters) and paddle/flapper sight glasses provide local flow verification on glycol makeup loops, seal-water lines, and sample lines.
