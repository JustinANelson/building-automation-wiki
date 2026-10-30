---
id: setra
type: manufacturer
title: Setra Systems
summary: American manufacturer of high-precision variable capacitive differential pressure transducers and critical-environment room pressure monitors.
review: verified
related:
  - differential-pressure-sensors
  - economizer-control
  - laboratory-and-fume-hood-control
  - setra-264
  - static-pressure-reset
  - switches-and-safeties
sources:
  - https://www.setra.com/
  - https://www.setra.com/hubfs/Product_Data_Sheets/Setra_Model_264_Data_Sheet.pdf
---

## Company Overview

**Setra Systems, Inc.** (headquartered in Boxborough, Massachusetts, part of the Fortive corporation) was founded in 1967 by brothers Dr. Y.T. Li and Dr. S.Y. Lee, former MIT professors of aeronautics. Setra specializes in high-precision sensing instruments, most notably **variable-capacitance differential pressure transducers** engineered for ultra-low pressure ranges across commercial HVAC, pharmaceutical manufacturing, and critical healthcare spaces.

## Patented Capacitive Sensor Technology

Setra's primary technological foundation is its **variable capacitance sensing capsule**:
- An ultra-thin, tensioned stainless steel diaphragm is positioned between two parallel capacitive electrode plates.
- When an minute pressure differential ($\Delta P$) is applied across the high and low ports, the diaphragm deflects slightly toward one electrode, altering the electrical capacitance.
- A proprietary ASIC circuit converts this capacitance change into an analog voltage (`0–5 V`, `0–10 V`) or current loop (`4–20 mA`) signal with high linearity and near-zero hysteresis.
- Unlike piezoresistive sensors that can suffer mechanical rupture under overpressure spikes, the capacitive diaphragm safely bottoms out against the insulated electrode wall, tolerating overpressures up to `10 psi` (`70 kPa`) even on low-range `0.1 in. w.c.` (`25 Pa`) transducers.

## Key Product Offerings

### 1. HVAC Differential Pressure Transmitters
- **[Setra Model 264](../product/setra-264.html)**: The undisputed standard low-differential pressure transmitter in commercial building automation. Used for:
  - VAV duct static pressure control and ASHRAE Guideline 36 static pressure reset ([static pressure reset](../concept/static-pressure-reset.html)).
  - Building static pressure relief damper control in airside economizers ([economizer control](../concept/economizer-control.html)).
  - Air handling unit fan tracking and particulate filter loaded-drop monitoring.

### 2. Critical Environment and Healthcare Room Pressure Monitors
- **Setra SRCM and SRPM Series**: High-resolution room pressure monitors and annunciators designed for:
  - Hospital Airborne Infection Isolation Rooms (AIIR, negative pressure $\le -0.01\text{ in. w.c.}$).
  - Protective Environment Rooms (PE, positive pressure $\ge +0.01\text{ in. w.c.}$).
  - USP 797 / USP 800 compounding pharmacies, vivariums, and BSL-3/BSL-4 biocontainment laboratories ([laboratory and fume hood control](../concept/laboratory-and-fume-hood-control.html)).

### 3. Current Switches and Submeters
- High-accuracy split-core and solid-core current switches and analog current transducers for motor proof-of-flow status verification ([switches and safeties](../concept/switches-and-safeties.html)) and energy submetering.


## Using Setra Devices in a Control System

This section is an overview drawn from the product-line and concept pages in this wiki.

**What they report.** The Model 264 and related transmitters turn a small pressure difference into a standard signal that any controller can read; see [Analog signals](../concept/analog-signals.html). Scale the controller input to the chosen range, for example 0 to 1 in. WC for 4 to 20 mA, or readings will be wrong by a fixed ratio.

**Typical uses.**

| Use | Ports | Why accuracy matters |
| :--- | :--- | :--- |
| Duct static pressure | High port in the duct, low port open to the room | The setpoint drives fan speed; see [Static pressure reset](../concept/static-pressure-reset.html) |
| Building static | Against outdoors | Relief damper control on an economizer; see [Economizer control](../concept/economizer-control.html) |
| Filter status | Across the filter bank | Detects loading and a missing filter |
| Room pressure | Across the room envelope | Isolation and cleanroom compliance; see [Laboratory and fume hood control](../concept/laboratory-and-fume-hood-control.html) |

**Installation and zeroing.** Low-range sensors are sensitive to mounting orientation and to small zero offsets, so mount as the data sheet specifies, use clean tubing without kinks, and check the zero with both ports equalised before trusting a reading. See [Differential pressure sensors](../concept/differential-pressure-sensors.html).

**Current switches.** Setra's current switches prove that a fan or pump is running by sensing motor current. An adjustable trip point set just below loaded current also detects a broken belt; see [Switches and safeties](../concept/switches-and-safeties.html).
