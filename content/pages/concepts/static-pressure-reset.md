---
id: static-pressure-reset
type: concept
title: "Duct static pressure and hydronic differential pressure reset"
summary: "Energy conservation sequences that continuously reset VAV supply duct static pressure and hydronic loop differential pressure setpoints using ASHRAE Guideline 36 trim-and-respond (T&R) damper/valve position polling so the most loaded terminal operates near 90% open."
review: draft
images:
  - path: images/concepts/static-pressure-reset.svg
    alt: "Technical diagram (drawn illustration) of ASHRAE Guideline 36 trim-and-respond duct static pressure reset polling VAV terminal damper positions and parallel hydronic loop differential pressure reset"
    source: "Own work (BASWiki technical diagram based on Trane Tracer SC+ BAS-PRD038K-EN, Siemens PTEC A6V10445888, Setra 264, and Belimo 22ADP-584 / 22PDP-18 engineering documentation)"
    license: CC0-1.0
related:
  - airflow-measurement
  - apogee-tec-vav
  - belimo-22adp-584
  - belimo-22pdp-18
  - control-strategies
  - control-valves
  - damper-actuators
  - differential-pressure-sensors
  - discharge-air-temperature-reset
  - dxr2
  - economizer-control
  - energy-conservation-strategies
  - hydronic-system-control
  - setra-264
  - supervisory-controllers
  - switches-and-safeties
  - symbio-210
  - tracer-sc-plus
  - vav-control
sources:
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/controls/building-management/Tracer-SC/BAS-PRD038K-EN_08012022.pdf
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Sales/BAS-SLB086-EN_04202022.pdf
  - https://sid.siemens.com/v/u/A6V10445888
  - https://www.setra.com/hubfs/Product_Data_Sheets/Setra_Model_264_Data_Sheet.pdf
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_22ADP-584.._datasheet_en-us.pdf
  - https://belimo.com/mam/general-documents/datasheets/en-gb/belimo_22PDP-18.._datasheet_en-gb.pdf
---

## Overview and the Fan/Pump Affinity Laws

In a variable-air-volume (`VAV`) air handling system or a variable-flow hydronic plant, a variable-frequency drive (`VFD`) modulates supply fan or pump speed to maintain a static or differential pressure setpoint ($\Delta P_{\text{sp}}$) measured in the distribution main.

Under the **centrifugal fan and pump affinity laws**, volumetric flow rate ($Q$), static pressure rise ($\Delta P$), and shaft brake horsepower ($P$) vary with rotational speed ($N$) as:

$$\frac{Q_2}{Q_1} = \frac{N_2}{N_1}, \qquad \frac{\Delta P_2}{\Delta P_1} = \left(\frac{N_2}{N_1}\right)^2, \qquad \frac{P_2}{P_1} = \left(\frac{N_2}{N_1}\right)^3$$

In a friction-only system with fixed damper/valve positions, a `50%` flow reduction reduces shaft power by `87.5%` ($(0.5)^3 = 0.125$). However, if the BAS holds a **constant design static pressure setpoint** (for example, `1.50 in. w.c.` in a VAV supply duct or `15 psi` at the end of a chilled water loop) during part-load operation, the fan or pump must ride high on its system curve while every downstream VAV damper or control valve throttles partially closed (`25–40%` open) just to burn off excess pressure.

**Static pressure reset** (for airside VAV ducts) and **differential pressure reset** (for hydronic chilled/hot water loops) dynamically lower $\Delta P_{\text{sp}}$ during part-load conditions until the single most demanding ("critical") terminal damper or valve is nearly wide open (`85–95%`), eliminating artificial throttling loss, cutting fan/pump energy by `30–50%`, and reducing aerodynamic discharge noise at terminal boxes.

## Duct Static Pressure Sensor Placement & Safety Protection

Before any reset sequence can operate reliably, the physical static pressure measurement and safety limits must be installed correctly:

1. **Control Sensor Location (`2/3 to 3/4` Down the Main Trunk)**: A low-range air [differential pressure transducer](differential-pressure-sensors.html)—such as a [Setra Model 264](../product/setra-264.html) (`0–2.5 in. w.c.` or `0–5.0 in. w.c.`) or [Belimo 22ADP-584](../product/belimo-22adp-584.html)—is mounted with its high-pressure port connected to a static pressure tip located **two-thirds to three-quarters of the way down the longest supply trunk duct** (downstream of major branch takeoffs and at least `3–5` equivalent duct diameters downstream of elbows or transitions), with its low-pressure reference port open to the ceiling/mechanical space.
2. **Hardwired High-Limit Duct Static Cutout**: Because resetting or sensor tube disconnection could otherwise cause the VFD to ramp to `100%` speed while fire/smoke or VAV dampers are closed, a separate manual-reset [high-static pressure safety switch](switches-and-safeties.html) (typically set at `2.0 to 3.0 in. w.c.`) is installed immediately downstream of the supply fan discharge to hardwire-trip the VFD before ductwork ruptures.
3. **Multiple-Branch Averaging or Minimum Selection**: In large air handlers with multiple main risers or wings, a dedicated static pressure sensor is placed in each main branch and the AHU controller controls to the **lowest** branch pressure reading (or weights requests per branch).

## Duct Static Pressure Reset Strategies Compared

| Reset Strategy | Control Inputs Required | Operating Mechanism | Advantages & Limitations |
| :--- | :--- | :--- | :--- |
| **Constant Static Pressure (Baseline)** | Duct static $\Delta P$ sensor only | Holds a fixed design setpoint (e.g., `1.25` or `1.50 in. w.c.`) at all loads. | Simplest to commission, but wastes fan energy at part load and increases VAV box noise. Prohibited on multi-zone VAV systems with DDC zones by ASHRAE 90.1. |
| **Supply Fan Speed / Airflow Reset (Open-Loop Proxy)** | Duct static $\Delta P$ + VFD speed (`%`) or fan CFM | Linearly resets $\Delta P_{\text{sp}}$ between $SP_{\min}$ (`0.40 in. w.c.`) at minimum VFD speed and $SP_{\max}$ (`1.50 in. w.c.`) at `100%` design VFD speed. | Works when legacy pneumatic or non-communicating VAV boxes lack damper-position feedback; can starve a single heavily loaded zone on an otherwise lightly loaded floor. |
| **Critical-Zone Damper Position PID** | BACnet/FLN damper position (`0–100%`) from all VAV boxes | Selects the maximum damper position ($\max(D_1 \dots D_n)$) and runs a slow supervisory PID loop to hold $\max(D_i) = 90\%$. | Directly reflects terminal demand, but a single faulty or undersized "rogue" box at `100%` drives the entire AHU to $SP_{\max}$ continuously unless manually locked out. |
| **ASHRAE Guideline 36 Trim-and-Respond (`T&R`)** | Importance-weighted zone pressure requests ($R$) from VAV boxes | Periodically trims $\Delta P_{\text{sp}}$ downward by a fixed step and responds upward proportionally when total weighted requests exceed an ignored threshold $I$. | Industry best practice (ASHRAE 90.1 / Guideline 36, [Trane Tracer SC+](../product/tracer-sc-plus.html) VAV Static Pressure Optimization, Siemens Desigo/APOGEE). Stable, deterministic, and easily filters rogue zones. |

## ASHRAE Guideline 36 Trim-and-Respond (`T&R`) Algorithm

In the standard **Trim-and-Respond** sequence (implemented in supervisory controllers such as the [Trane Tracer SC+](../product/tracer-sc-plus.html) `BAS-PRD038K-EN` and Siemens Desigo `PXC4/PXC5/PXC7`), each VAV terminal box controller ([Siemens BACnet PTEC](../product/apogee-tec-vav.html), [Desigo DXR2](../product/dxr2.html), [Trane Symbio 210](../product/symbio-210.html), [Tracer UC400](../product/uc400.html)) evaluates its own airflow loop and damper command (`0–100%`) and generates integer **Static Pressure Requests** ($r_i$):

### 1. Zone Static Pressure Request Generation

For each VAV terminal box $i$ with measured airflow $Q_{\text{act}}$, active airflow setpoint $Q_{\text{sp}}$, and damper command $D_i$:

- **0 Requests (`Satisfied`)**: Damper command drops below `85%` (or airflow exceeds `85%` of setpoint).
- **1 Request (`Normal Importance — Near Saturation`)**: $70\% \le Q_{\text{act}} / Q_{\text{sp}} < 85\%$ while damper command $D_i \ge 95\%$ continuously for `1 minute` (or simply $D_i \ge 95\%$ until $D_i \le 85\%$ on floating actuators without true position feedback).
- **2 Requests (`Medium Importance — Moderately Starved`)**: $50\% \le Q_{\text{act}} / Q_{\text{sp}} < 70\%$ while damper command $D_i \ge 95\%$ continuously for `1 minute`.
- **3 Requests (`High Importance — Severely Starved`)**: $Q_{\text{act}} < 50\%$ of $Q_{\text{sp}}$ while damper command $D_i \ge 95\%$ continuously for `1 minute`.

Each zone's raw request $r_i \in \{0, 1, 2, 3\}$ is multiplied by a configurable **zone importance multiplier** $M_i \in [0, 1]$ (default `1`). Setting $M_i = 0$ removes a known rogue or mechanically obstructed zone from the AHU reset calculation while logging a persistent rogue-zone diagnostic alarm. The supervisory controller sums all weighted requests:

$$R = \sum_{i=1}^{N} (r_i \times M_i)$$

### 2. Supervisory Trim-and-Respond Execution Loop

When the supply fan starts, the duct static pressure setpoint initializes to $SP_0$ (for example, `0.80 in. w.c.`) and waits for a startup settling timer $T_{\text{wait}}$ (`5–10 minutes`). Thereafter, at every execution interval $T_{\text{step}}$ (typically `2 minutes`), the setpoint $SP_{\text{static}}$ is updated between $SP_{\min}$ and $SP_{\max}$:

$$SP_{\text{static}}(k) = \begin{cases} \max\!\Big(SP_{\min},\; SP_{\text{static}}(k-1) + SP_{\text{trim}}\Big) & \text{if } R \le I \\[6pt] \min\!\Big(SP_{\max},\; SP_{\text{static}}(k-1) + \min\big(SP_{\text{res}} \times (R - I),\; SP_{\text{res,max}}\big)\Big) & \text{if } R > I \end{cases}$$

### Typical Guideline 36 Duct Static Pressure T&R Parameters

| Parameter | Symbol | Typical Engineering Value | Functional Purpose |
| :--- | :--- | :--- | :--- |
| **Minimum Static Pressure Setpoint** | $SP_{\min}$ | `0.25 to 0.50 in. w.c.` (`62 to 125 Pa`) | Ensures adequate velocity pressure for VAV box flow sensors at low load |
| **Maximum Static Pressure Setpoint** | $SP_{\max}$ | `1.25 to 1.50 in. w.c.` (`310 to 375 Pa`) | Design peak static pressure limit (below safety cutout) |
| **Initial Startup Setpoint** | $SP_0$ | `0.75 to 1.00 in. w.c.` | Prevents fan surge or slow ramp-up immediately after AHU start |
| **Execution Time Step** | $T_{\text{step}}$ | `120 seconds` (`2 min`) | Matches the `60–95 s` stroke time of VAV damper actuators |
| **Ignored Requests** | $I$ | `1` or `2` requests | Allows 1 transient or outlier box to touch `95%` without ratcheting fan pressure up |
| **Trim Increment** | $SP_{\text{trim}}$ | `-0.04 in. w.c.` (`-10 Pa`) per step | Slowly decays pressure when all zones are satisfied ($R \le I$) |
| **Respond Increment** | $SP_{\text{res}}$ | `+0.06 in. w.c.` (`+15 Pa`) per net request | Rapidly restores pressure when multiple zones starve ($R > I$) |
| **Maximum Response per Step** | $SP_{\text{res,max}}$ | `+0.15 in. w.c.` (`+37 Pa`) per step | Caps maximum upward jump in any single 2-minute step |

## Hydronic Loop Differential Pressure ($\Delta P$) Reset

The identical **Trim-and-Respond** or critical-valve polling strategy is used on variable-flow chilled water (`CHW`), heating hot water (`HHW`), and condenser water loops ([hydronic system control](hydronic-system-control.html)):

1. **Remote Hydronic $\Delta P$ Sensing**: A wet-to-wet differential pressure transmitter—such as the [Belimo 22PDP-18](../product/belimo-22pdp-18.html) (`0–25 psi` / `0–50 psi` selectable range, `316L` stainless steel diaphragms, `0–10 V` / `4–20 mA`)—is piped across the supply and return mains at the hydraulically most remote index circuit (typically two-thirds to the end of the building distribution riser).
2. **Setpoint Reset**: When all chilled water or hot water control valves are `< 85%` open ($R \le I$), the hydronic $\Delta P_{\text{sp}}$ trims downward in `-0.3 psi` steps toward $SP_{\min}$ (for example, `4–6 psi` across the remote index circuit). When one or more coil valves open `>= 95%` while failing to meet their coil leaving-air or room temperature setpoint ($R > I$), $\Delta P_{\text{sp}}$ responds upward in `+0.5 psi` steps up to the design maximum (for example, `15–18 psi`).
3. **Valve Position Request Polling**: The plant controller polls the commanded or actual position (`0–10 VDC` feedback or BACnet object) of all modulating 2-way [control valves](control-valves.html) on AHU coils, fan coils, and chilled beams.
