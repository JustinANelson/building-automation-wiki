---
id: valve-and-damper-sizing-calculations
type: concept
title: "Control valve, damper, and flow-station sizing calculations"
summary: "Flow coefficient (Cv/Kvs), water and glycol coil flow, steam valve equations (subcritical vs. choked), valve authority distortion, cavitation index, PICV selection, damper authority and actuator torque, and sensor K-factors."
review: draft
related:
  - airflow-measurement
  - control-signals
  - control-valves
  - cooling-towers
  - damper-actuators
  - dampers-and-louvers
  - differential-pressure-sensors
  - fan-and-pump-power-calculations
  - heat-exchangers
  - hydronic-system-control
  - psychrometric-calculations
  - vav-control
sources: []
---

## Overview

Control valves and dampers are modulating throttling devices designed to pass maximum design fluid flow with an acceptable pressure drop while maintaining stable, precise control resolution at minimum part-load conditions. 

An **oversized valve** forces the actuator to operate in a tiny fraction of its stroke (`5% to 15%`), causing violent hunting, rapid seat wire-drawing, and premature actuator failure. An **undersized valve** starves the coil of flow at peak design loads and wastes excessive pump and fan energy. This page collects the core engineering sizing equations for HVAC hydronic valves, steam valves, dampers, and pressure-based flow sensors.

---

## Hydronic Coil Flow Calculations

### Pure Water Coil Flow

For standard hydronic water loops operating near `60 °F` (`15.6 °C`), water density is $\rho \approx 62.34\text{ lb/ft}^3$ (`8.33 lb/gallon`) and specific heat is $c_p = 1.00\text{ Btu/(lb}\cdot^\circ\text{F)}$. The hydronic fluid constant is:

$$\text{Constant} = 8.33\frac{\text{lb}}{\text{gal}} \times 60\frac{\text{min}}{\text{hr}} \times 1.0\frac{\text{Btu}}{\text{lb}\cdot^\circ\text{F}} \approx \mathbf{500}$$

$$\text{Load (Btu/hr)} = 500 \times \text{GPM} \times \Delta T \quad \Longleftrightarrow \quad \text{GPM} = \frac{\text{Load (Btu/hr)}}{500 \times \Delta T}$$

$$\text{Cooling Capacity (Tons)} = \frac{\text{GPM} \times \Delta T}{24}$$

- **Example (Chilled Water Coil)**: An air-handler cooling coil rated at `240,000 Btu/hr` (`20 Tons`) designed for a `12.0 °F` chilled water rise ($\Delta T = 56\text{ °F} - 44\text{ °F}$) requires:
  $$\text{GPM} = \frac{240{,}000}{500 \times 12.0} = \mathbf{40.0\text{ GPM}}$$
- **Example (Heating Hot Water Coil)**: A VAV reheat coil rated at `30,000 Btu/hr` designed for a `30.0 °F` temperature drop ($\Delta T = 180\text{ °F} - 150\text{ °F}$) requires:
  $$\text{GPM} = \frac{30{,}000}{500 \times 30.0} = \mathbf{2.0\text{ GPM}}$$

### Aqueous Glycol Mixtures

In outdoor air handlers, freeze protection requires an aqueous mixture of ethylene glycol or propylene glycol. Adding glycol increases fluid density ($\rho$) but significantly decreases specific heat ($c_p$), reducing the thermal capacity multiplier below `500`:

$$C_{\text{fluid}} = 8.33 \times SG \times 60 \times c_p = 500 \times SG \times c_p$$

| Fluid Mixture | Specific Gravity ($SG$) | Specific Heat ($c_p$, $\text{Btu/lb}\cdot^\circ\text{F}$) | Multiplier ($C_{\text{fluid}}$) | Required GPM Factor |
| :--- | :--- | :--- | :--- | :--- |
| **Pure Water (`100%`)** | `1.000` | `1.000` | `500` | `1.000` (Baseline) |
| **`30%` Ethylene Glycol** | `1.042` | `0.900` | `469` | `1.066` (`+6.6% GPM`) |
| **`50%` Ethylene Glycol** | `1.071` | `0.805` | `431` | `1.160` (`+16.0% GPM`) |
| **`30%` Propylene Glycol** | `1.026` | `0.920` | `472` | `1.059` (`+5.9% GPM`) |
| **`50%` Propylene Glycol** | `1.040` | `0.840` | `437` | `1.144` (`+14.4% GPM`) |

A `20-ton` coil with `50%` ethylene glycol requires $\text{GPM} = 240{,}000 / (431 \times 12) = \mathbf{46.4\text{ GPM}}$, requiring a `16%` larger valve $C_v$ and pump capacity than pure water.

---

## Valve Flow Coefficient ($C_v$ and $K_v$) Sizing

The flow coefficient ($C_v$) represents the flow of `60 °F` water in US GPM through a fully open valve at a pressure drop of `1.0 psi`:

$$Q\text{ (GPM)} = C_v \sqrt{\frac{\Delta P}{SG}} \quad \Longleftrightarrow \quad C_v = \frac{Q}{\sqrt{\Delta P / SG}}$$

In metric units ($K_v$ in $\text{m}^3/\text{h}$ at `1 bar` drop):

$$K_v = 0.865 \times C_v \quad \Longleftrightarrow \quad C_v = 1.156 \times K_v$$

**Sizing Example**: Sizing a 2-way valve for the `40.0 GPM` chilled water coil above, targeting a design valve pressure drop of **`4.0 psi`** ($\Delta P = 4.0\text{ psi}$):

$$C_v = \frac{40.0}{\sqrt{4.0 / 1.0}} = \frac{40.0}{2.0} = \mathbf{20.0}$$

From the manufacturer's catalog (such as [Siemens 599 Series](../product/siemens-599-zone-valve.html) or [Belimo CCV](../manufacturer/belimo.html)), select the next closest standard commercial $C_v$ rating (e.g., standard catalog $C_v = 19$ or $25$).

---

## Steam Control Valve Sizing Equations

Steam is compressible; as pressure drops across the valve orifice, the steam expands, reducing density and increasing velocity. Steam valves are sized using mass flow rate ($W$ in $\text{lb/hr}$), where latent heat of vaporization ($h_{fg}$) determines steam requirement:

$$W\text{ (lb/hr)} = \frac{\text{Load (Btu/hr)}}{h_{fg}}$$

At standard low pressure (`15 psig`, $P_1 = 29.7\text{ psia}$), $h_{fg} \approx 945\text{ Btu/lb}$. A `500,000 Btu/hr` steam preheat coil requires $W = 500{,}000 / 945 = \mathbf{529\text{ lb/hr}}$.

### 1. Subcritical Flow ($\Delta P < 0.5 \times P_1$)
When the pressure drop across the valve is less than half the absolute inlet pressure ($P_2 > 0.5 \times P_1$):

$$C_v = \frac{W \times (1 + 0.0007 \times T_{\text{sh}})}{2.1 \times \sqrt{\Delta P \times (P_1 + P_2)}}$$

where:
- $W$ = Steam mass flow rate ($\text{lb/hr}$).
- $P_1$ = Absolute upstream pressure ($\text{psia} = \text{psig} + 14.7$).
- $P_2$ = Absolute downstream pressure ($\text{psia}$).
- $\Delta P = P_1 - P_2$ ($\text{psi}$).
- $T_{\text{sh}}$ = Degrees of superheat above saturation ($^\circ\text{F}$, $T_{\text{sh}} = 0$ for saturated steam).

### 2. Critical (Choked) Flow ($\Delta P \ge 0.5 \times P_1$)
When the downstream pressure drops below critical pressure ($P_2 \le 0.58 \times P_1$), sonic velocity is reached at the valve vena contracta. Further drops in downstream pressure cannot increase mass flow rate:

$$C_v = \frac{W \times (1 + 0.0007 \times T_{\text{sh}})}{1.82 \times P_1}$$

---

## Valve Authority and Characteristic Distortion

### Authority ($N$) Mathematical Definition

**Valve authority ($N$)** defines the valve's share of total dynamic pressure drop in the controlled branch circuit at full design flow:

$$N = \frac{\Delta P_{\text{valve, full open}}}{\Delta P_{\text{valve, full open}} + \Delta P_{\text{coil}} + \Delta P_{\text{balance}} + \Delta P_{\text{piping}}}$$

- **Target Authority**: **$N = 0.30\text{ to }0.50$**. 
- Sizing a valve for too small a pressure drop ($\Delta P_{\text{valve}} = 1.0\text{ psi}$ on a circuit dropping `10.0 psi`) yields $N = 1 / 11 = 0.09$, severely degrading control stability.

### Installed Characteristic Equation

A valve's published inherent curve $f(h)$ (where $h = \text{stem position } [0.0\text{ to }1.0]$) distorts in an installed hydronic system according to:

$$f_i(h) = \frac{f(h)}{\sqrt{N + (1 - N) \cdot [f(h)]^2}}$$

```
 Flow Fraction (Q / Qmax)
 1.0 ┌────────────────────────────────────────────────────────┐
     │                                      .. - - ' (N = 0.10,
 0.8 │                             .. - - '          Distorted)
     │                     .. - - '               .. - - '    │
 0.6 │             .. - - '               .. - - ' (N = 0.50) │
     │       .- - '              .. - - '                     │
 0.4 │  .- - '           .. - - '                             │
     │ /        .. - - '                                      │
 0.2 │/ .. - - '                   (Inherent Equal-% Curve)   │
     │                                                        │
 0.0 └────────────────────────────────────────────────────────┘
     0.0       0.2       0.4       0.6       0.8       1.0
                         Stem Lift / Stroke (h)
```

- When $N = 1.0$ (perfect authority, or a PICV), $f_i(h) = f(h)$ (zero distortion).
- When $N = 0.10$ (low authority), an equal-percentage valve distorts into a linear profile, and a linear valve distorts into an uncontrollable **quick-opening** profile where `80%` of flow passes in the first `20%` of stroke.

### Installed Turndown ($T$)

The **inherent rangeability ($R$)** is the ratio of maximum to minimum controllable flow (typically $R = 50:1$ to $100:1$). The **installed turndown ($T$)** accounting for authority is:

$$T = R \times \sqrt{N}$$

If a valve has $R = 50$ but is installed with low authority $N = 0.10$, its actual controllable turndown collapses to:

$$T = 50 \times \sqrt{0.10} = 50 \times 0.316 = \mathbf{15.8:1}$$

---

## Cavitation Index ($\sigma$) and Choking Verification

To verify that water valves do not suffer cavitation or flashing, calculate the dimensionless **Cavitation Index ($\sigma$)**:

$$\sigma = \frac{P_1 - P_v}{P_1 - P_2}$$

where $P_1$ and $P_2$ are upstream and downstream pressures in absolute units ($\text{psia}$), and $P_v$ is water vapor pressure ($\text{psia}$):
- For `60 °F` chilled water: $P_v \approx 0.256\text{ psia}$.
- For `180 °F` hot water: $P_v \approx 7.51\text{ psia}$.
- **Verification Rule**: Maintain $\sigma \ge 1.70$. If $\sigma < 1.50$, increase downstream pressure $P_2$, reduce $\Delta P$, or select hardened stainless steel trim.

---

## Pressure-Independent Control Valve (PICV) Sizing

Because a PICV incorporates an integral dynamic differential pressure regulator, **it eliminates $C_v$ calculations and valve authority calculations ($N = 1.0$)**:
1. Determine the design flow rate ($Q$ in $\text{GPM}$) from coil load.
2. Select a PICV body whose **adjustable maximum flow range ($Q_{\min}\text{ to }Q_{\max}$)** encompasses the design GPM.
3. Verify that available pump head satisfies the PICV's **minimum operating differential pressure threshold** (typically `3.0 to 5.0 psid` / `20 to 35 kPa`).
4. Set the mechanical dial or electronic DIP switch on the valve body to the design GPM. The controller's `0–10 VDC` output will modulate flow linearly from `0 GPM` to design GPM regardless of system pressure fluctuations.

---

## Damper Sizing, Authority, and Actuator Torque

### Damper Authority

Dampers follow identical authority physics to hydronic valves:

$$N_{\text{damper}} = \frac{\Delta P_{\text{damper, full open}}}{\Delta P_{\text{damper, full open}} + \Delta P_{\text{ductwork}} + \Delta P_{\text{louvers}} + \Delta P_{\text{filters}}}$$

Target authority for modulating dampers ([dampers and louvers](dampers-and-louvers.html)) is **$N = 0.30\text{ to }0.50$**. Sizing dampers equal to duct size often results in face velocities $< 400\text{ FPM}$ and pressure drops $< 0.02\text{ in. w.c.}$, yielding $N < 0.10$. Modulating dampers should be sized for face velocities of **`1,000 to 1,500 FPM`** (`5.1 to 7.6 m/s`).

### Damper Actuator Torque Sizing

Actuator torque must overcome blade seal compression, edge seal friction, bearing drag, and aerodynamic dynamic wind forces:

$$\tau_{\text{required}}\text{ (in-lb)} = A_{\text{damper}}\text{ (ft}^2\text{)} \times \tau_{\text{unit}}\text{ (in-lb/ft}^2\text{)} \times SF$$

where:
- $\tau_{\text{unit}}$ = Specific torque rating from damper manufacturer:
  - Low-leakage flat blade dampers with neoprene/PVC seals: **`4.0 to 5.0 in-lb/ft²`** (`0.45 to 0.56 N·m/m²`).
  - Ultra-low-leakage extruded airfoil dampers with silicone seals (AMCA Class 1A): **`7.0 to 10.0 in-lb/ft²`** (`0.79 to 1.13 N·m/m²`).
- $SF$ = Safety factor (typically **`1.25 to 1.30`**, providing a `25% to 30%` engineering margin).

**Torque Sizing Example**: Sizing an actuator for a `24 ft²` AMCA Class 1A outdoor air damper:
$$\tau_{\text{required}} = 24\text{ ft}^2 \times 7.0\frac{\text{in-lb}}{\text{ft}^2} \times 1.25 = \mathbf{210\text{ in-lb}}\text{ (}23.7\text{ N}\cdot\text{m)}$$
Select a standard `220 in-lb` (`25 N·m`) spring-return actuator (such as the [Belimo](../manufacturer/belimo.html) `AF` or `EF` series).

---

## Pressure-Based Airflow Measurement: The K-Factor

VAV terminal units, fan inlet piezometer rings, and duct airflow stations measure differential pressure ($\Delta P$) across an aerodynamic constriction to infer volumetric airflow ($Q$ in $\text{CFM}$):

$$Q\text{ (CFM)} = K \times \sqrt{\Delta P}$$

where:
- $\Delta P$ is velocity pressure or differential pressure in inches water column ($\text{in. w.c.}$).
- $K$ is the manufacturer's flow pickup calibration coefficient:
  $$K = \frac{Q_{\text{nominal}}}{\sqrt{\Delta P_{\text{nominal}}}}$$

In velocity terms for standard air ($\rho = 0.075\text{ lb/ft}^3$):

$$V\text{ (FPM)} = 4{,}005 \times \sqrt{P_v\text{ (in. w.c.)}} \quad \Longleftrightarrow \quad Q\text{ (CFM)} = A_{\text{duct}}\text{ (ft}^2\text{)} \times 4{,}005 \times \sqrt{P_v}$$

Because differential pressure varies with the **square of velocity**, measuring low airflows is physically challenging:
- At full flow (`1,000 CFM`, $P_v = 0.50\text{ in. w.c.}$), $\Delta P = 0.50\text{ in. w.c.}$ (`125 Pa`).
- At `20%` part load (`200 CFM`), differential pressure collapses to:
  $$\Delta P = 0.50 \times (0.20)^2 = \mathbf{0.020\text{ in. w.c.}}\text{ (5.0 Pa)}$$
A sensor zero error of only `0.005 in. w.c.` (`1.2 Pa`) creates a **`25%` airflow measurement error at minimum turndown**, emphasizing why high-accuracy low-range transducers ([differential pressure sensors](differential-pressure-sensors.html)) and aerodynamic amplification rings are essential for VAV control.

See [Control valves](control-valves.html) for mechanical valve body architectures, [Hydronic system control](hydronic-system-control.html) for system pumping equations, and [Damper actuators](damper-actuators.html) for actuator mechanics.
