---
id: control-valves
type: concept
title: "HVAC hydronic and steam control valves: body types, Cv ratings, authority, and PICVs"
summary: "Two-way, three-way, globe, ball, butterfly, and pressure-independent control valves (PICVs): valve flow coefficient (Cv/Kvs), inherent vs. installed characteristics, valve authority, cavitation, close-off ratings, and fail-safe selection."
review: verified
images:
  - path: images/concepts/butterfly-valve-electric-actuator.jpg
    alt: "Industrial butterfly valve fitted with an electric quarter-turn actuator and handwheel"
    source: "Gerritse at nl.wikipedia, via Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Butterflyvalve-with-electrical-actuator.jpg"
    license: CC BY-SA 3.0
related:
  - analog-signals
  - belimo
  - chilled-beams
  - control-signals
  - control-strategies
  - cooling-towers
  - damper-actuators
  - gages-and-local-instrumentation
  - heat-exchangers
  - hydronic-system-control
  - io-points
  - siemens-599-zone-valve
  - switches-and-safeties
  - valve-and-damper-sizing-calculations
sources:
  - https://sid.siemens.com/api/khub/documents/fU1aL7f23fKvIGrmhJ24Kg/content
  - https://belimo.com/mam/general-documents/datasheets/en-gb/belimo_22PDP-18.._datasheet_en-gb.pdf
---

## Overview and Valve-Actuator Assemblies

In hydronic and steam HVAC systems, a **control valve** modulates the flow of chilled water, heating hot water, glycol, or steam through heating/cooling coils, heat exchangers, or central plant headers in response to a continuous analog (`0–10 VDC`, `4–20 mA`) or floating binary command from a direct digital control (DDC) field controller.

Every automated control valve consists of two integrated components:
1. **Valve Body**: The pressure-containing metallic casing containing the internal seats, ports, plug/ball, and packing gland in contact with the process fluid.
2. **[Valve Actuator](damper-actuators.html)**: The motorized positioning device (linear electro-mechanical, linear electro-hydraulic, rotary quarter-turn, or electro-thermal) that drives the valve stem or shaft against hydraulic fluid forces.

---

## Two-Way vs. Three-Way Piping Configurations

| Valve Configuration | Ports | Hydraulic Behavior | Typical Campus Applications |
| :--- | :--- | :--- | :--- |
| **Two-Way (`2-Way`) Throttling** | 2 (`Inlet` → `Outlet`) | **Variable Flow**: Throttling the valve restricts flow through the coil and reduces total pumping GPM, enabling large pumping energy savings in variable-primary or secondary VFD loops ([variable frequency drives](variable-frequency-drives.html)) | Standard on modern variable-flow chilled water and hot water AHU coils, VAV reheat coils ([Siemens 599 Series](../product/siemens-599-zone-valve.html)), and chilled beams |
| **Three-Way (`3-Way`) Mixing** | 3 (`Port A` Coil Supply + `Port B` Bypass → `Port AB` Common Outlet) | **Constant Total Flow**: Blends two inlet streams (`A` and `B`) into a single common outlet (`AB`). As `Port A` (coil) closes, `Port B` (bypass) opens proportionally, maintaining constant pump flow through the distribution mains | Constant-volume pumping loops, radiant floor temperature blending loops, and end-of-loop minimum flow bypasses |
| **Three-Way (`3-Way`) Diverting** | 3 (`Port AB` Common Inlet → `Port A` Coil + `Port B` Bypass Outlets) | **Flow Splitting**: Directs a single incoming stream (`AB`) between two outlet branches (`A` and `B`). *Warning: A standard mixing valve cannot be piped in reverse as a diverting valve unless rated for diverting service, or dynamic flow forces will slam the plug against the seat, causing violent water hammer* | [Cooling tower](cooling-towers.html) condenser water bypass, [heat exchanger](heat-exchangers.html) economizer changeover |

---

## Valve Body Geometries in Building Automation

### 1. Globe Valves and Short-Stroke Linear Zone Valves
A linear plug or contoured disc moves perpendicular to a machined annular seat ring:
- **Terminal Zone Valves (`1/2 in. to 1 in.`)**: Short-stroke (`2.5 mm` / `0.1 in.`) compact brass bodies such as the [Siemens 599 Series Zone Valves](../product/siemens-599-zone-valve.html) mounted on VAV reheat coils, fan-coils, and perimeter fin-tube radiators. Paired with snap-on floating (`SSC161.05U`), thermal (`SFA71U`), or `0–10 V` proportional (`SSE161.05U` / `SSF161.05U`) actuators.
- **Flanged Central-Station Globe Valves (`1/2 in. to 6 in.`)**: Heavy bronze, ductile iron, or cast steel flanged valves used on large air-handler coils, district steam converters, and central plant heat exchangers. Provide excellent throttling resolution, high rangeability (`> 50:1`), and tight shutoff at high temperatures (`up to 350 °F` / `177 °C`).

### 2. Characterized Control Valves (`CCV` / Rotary Ball Valves)
A quarter-turn stainless steel ball is paired with a specialized concave or V-notch **characterizing disc** embedded inside the valve inlet port (pioneered by [Belimo](../manufacturer/belimo.html)):
- **Linearized Equal-Percentage Flow**: While an uncharacterized full-port ball valve exhibits a severe quick-opening profile unsuitable for modulation, the characterizing disc reshapes the flow passage into an exact **equal-percentage** characteristic.
- **High Close-Off & Bubble-Tight Shutoff**: Ball valves seal against Teflon (PTFE) seats, achieving ANSI Class VI bubble-tight shutoff (zero seat leakage) and withstanding close-off differential pressures up to **`100 to 200 psi`** with compact, low-torque rotary actuators.

### 3. Butterfly Valves (`2 in. to 24+ in.`)
A rotating circular disc turns `90°` inside a wafer or lugged body:
- **High-Flow Chiller & Tower Service**: Used on large-diameter headers in central chiller plants, [cooling towers](cooling-towers.html), and boiler plants.
- **Tight Shutoff vs. Modulation**: Standard rubber-lined concentric butterfly valves provide tight shutoff for equipment isolation (`2-position`), but have poor low-stroke throttling resolution (`< 20°` open). High-performance double-offset or characterized butterfly valves provide modified equal-percentage control across `20° to 70°` disc angles.

### 4. Pressure-Independent Control Valves (`PICV` & `EPIV`)
Traditional control valves suffer from fluctuating system differential pressure caused by other valves opening and closing elsewhere in the building. A **Pressure-Independent Control Valve (PICV)** integrates three functions into a single body:
1. An internal **differential pressure regulator** (spring-loaded rolling diaphragm or piston).
2. A calibrated **regulating control valve** (driven by the DDC actuator).
3. Built-in pressure/temperature test ports (`P/T ports`) for commissioning verification.

The mechanical differential pressure regulator absorbs all fluctuations in system supply-to-return $\Delta P$, holding a constant, low pressure drop (typically `3 to 5 psi`) across the modulating control plug. As a result, **volumetric flow (GPM) is strictly a function of actuator stem position, completely independent of system pressure swings**. Electronic Pressure-Independent Valves (**EPIV**) replace the mechanical diaphragm with an integrated electromagnetic or ultrasonic flow meter and onboard microprocessor that modulates an characterized ball valve via real-time closed-loop flow feedback.

```
       Pressure-Independent Control Valve (PICV) Internal Schematic
       
    Inlet (P1) ───────────────────────────────────────────────────► Outlet (P3)
                   │                                         │
                   ▼                                         ▲
      ┌─────────────────────────┐               ┌────────────┴────────────┐
      │ Mechanical Differential │               │ Modulating Control      │
      │ Pressure Regulator      │               │ Valve Plug              │
      │ (Absorbs ΔP = P1 - P2)  │               │ (Governs GPM = f(Pos))  │
      └────────────┬────────────┘               └────────────┬────────────┘
                   │                                         │
                   └──────────────── P2 ─────────────────────┘
                 (Constant Intermediate Pressure Maintained)
```

---

## Valve Sizing, Flow Coefficient ($C_v$), and Authority

### The Flow Coefficient ($C_v$ and $K_{vs}$)

Hydronic valves are sized by their rated **Flow Coefficient ($C_v$)**, defined as the flow of clean water in **US gallons per minute (`GPM`) at `60 °F` that produces a `1.0 psi` pressure drop** across the fully open valve:

$$Q = C_v \sqrt{\frac{\Delta P}{SG}} \quad \Longleftrightarrow \quad C_v = \frac{Q}{\sqrt{\Delta P / SG}}$$

In metric territories, $K_{vs}$ is defined as the flow in $\text{m}^3/\text{h}$ at a `1.0 bar` pressure drop:

$$K_{vs} = 0.865 \times C_v \quad \Longleftrightarrow \quad C_v = 1.156 \times K_{vs}$$

### Valve Authority ($N$) and Characteristic Distortion

**Valve authority ($N$)** is the ratio of the pressure drop across the fully open valve ($\Delta P_{\text{valve}}$) to the total pressure drop across the entire branch circuit ($\Delta P_{\text{total}} = \Delta P_{\text{valve}} + \Delta P_{\text{coil}} + \Delta P_{\text{piping}}$) at design flow:

$$N = \frac{\Delta P_{\text{valve, full open}}}{\Delta P_{\text{valve, full open}} + \Delta P_{\text{coil \& piping}}}$$

- **The Authority Target**: Standard engineering design targets an authority of **$N = 0.30\text{ to }0.50$** (meaning the valve drops `3 to 5 psi` at full flow, equal to or slightly greater than the coil pressure drop).
- **Installed Characteristic Distortion**: A valve’s published flow characteristic (equal-percentage or linear) is its *inherent* characteristic, measured under a constant laboratory $\Delta P$. In a real piping network with a fixed pump head, as the valve closes, the piping friction drops to zero, and the excess pump head shifts directly onto the valve.
- The **installed characteristic** $f_i(h)$ is related to the inherent characteristic $f(h)$ and authority $N$ by:
  $$f_i(h) = \frac{f(h)}{\sqrt{N + (1 - N)[f(h)]^2}}$$
- When authority is low ($N < 0.20$), an equal-percentage valve distorts into a linear profile, while a linear valve distorts into a **quick-opening** profile: `80%` of full flow occurs in the first `20%` of valve stem travel, making precise temperature control impossible and causing severe loop hunting.
- **PICV Authority Advantage**: A Pressure-Independent Control Valve has an effective authority of **$N = 1.0$**, because the integrated regulator completely absorbs all system pressure fluctuations.

---

## Coil Heat Transfer Non-Linearity vs. Valve Inherent Characteristics

Water-to-air heating and cooling coils exhibit an intrinsically **non-linear heat transfer relationship** relative to water flow rate:
- Because the log mean temperature difference across coil tubes is largest at low flow, the first **`20%` of water flow delivers `50% to 60%` of the coil's total heat transfer capacity**.
- Conversely, increasing flow from `80%` to `100%` produces only a `2% to 4%` increase in heat transfer.

To achieve stable, responsive DDC PID control, the combined system (valve + coil) must produce a **linear relationship between controller output signal (`0–100%`) and actual heat output (Btu/hr)**:

$$\text{Linear Output} = \text{Equal-Percentage Valve Characteristic} \times \text{Non-Linear Coil Heat Transfer}$$

```
 Flow / Heat Output (%)
 100 ┌────────────────────────────────────────────────────────┐
     │                                     ....- -' (Coil Heat)
  80 │                             .. - - '          /        │
     │                     .. - - '                /          │
  60 │             .. - - '                      /            │
     │       .- - '              (Ideal Linear)/              │
  40 │  .- - '                               /                │
     │ /                                   /                  │
  20 │/                                  / (Equal-Percentage  │
     │                                 /    Valve Flow)       │
   0 └───────────────────────────────/────────────────────────┘
     0         20         40        60        80        100
                         Valve Stem Position (%)
```

- **Equal-Percentage (`= %`)**: Flow increases exponentially with stem lift ($Q = Q_0 \cdot e^{n \cdot h}$). Used on **chilled water coils, hot water coils, and variable-flow loops**.
- **Linear**: Flow is directly proportional to stem lift ($Q \propto h$). Used on **steam coils, heat exchangers with constant LMTD, and 3-way bypass ports**.
- **Quick-Opening**: Flow reaches `80%` in the first `20–30%` of stroke. Used exclusively for **two-position (open/closed) isolation service**, never for modulating loops.

---

## Cavitation, Flashing, and Choked Flow

When water passes through a constricted valve orifice, fluid velocity spikes, causing local static pressure to drop to its minimum value at the **vena contracta** (immediately downstream of the seat):
1. **Flashing**: If the static pressure drops below the fluid vapor pressure ($P_v$) and remains below $P_v$ downstream, vapor bubbles form and remain vapor. Flashing causes erosion wire-drawing across valve plugs and seats.
2. **Cavitation**: If static pressure drops below $P_v$ at the vena contracta but recovers above $P_v$ downstream, the vapor bubbles implode violently against the metallic surfaces. Cavitation creates localized shock waves exceeding `100,000 psi` (`700 MPa`), eroding valve plugs, pitting cast iron bodies, and generating loud gravel-like acoustic noise.

### The Cavitation Index ($\sigma$)

Controls engineers evaluate cavitation risk using the dimensionless **Cavitation Index ($\sigma$)**:

$$\sigma = \frac{P_1 - P_v}{P_1 - P_2}$$

where:
- $P_1$ = Upstream absolute pressure ($\text{psia}$).
- $P_2$ = Downstream absolute pressure ($\text{psia}$).
- $P_v$ = Fluid absolute vapor pressure at operating temperature ($\text{psia}$).

- **$\sigma > 2.0$**: No cavitation risk; standard bronze or brass trim is acceptable.
- **$1.5 < \sigma < 2.0$**: Mild incipient cavitation; requires hardened `316` stainless steel trim.
- **$\sigma < 1.5$**: Severe cavitation; requires multi-stage pressure-drop trim, lower $\Delta P$, or moving the valve to a location with higher downstream static pressure (such as the bottom of a vertical riser or coil return).

---

## Close-Off Pressure and Actuator Selection

A control valve cannot control or shut off flow unless the actuator generates sufficient thrust or torque to overcome fluid static pressure and dynamic pump head:

- **Static Body Pressure Rating** (e.g., `ANSI Class 125 / 250`, `PN16 / PN25`): The maximum structural pressure the metallic body, bonnet, and packing seal can contain without leaking to ambient.
- **Close-Off Pressure Differential ($\Delta P_{\text{close-off}}$)**: The maximum differential pressure across the closed plug that the actuator can hold bubble-tight without leakage:
  $$\Delta P_{\text{close-off}} = \frac{F_{\text{actuator}} - F_{\text{packing}}}{A_{\text{seat}}}$$
- On large valves (`≥ 2 in.`), high pump head ($\Delta P = 50\text{ psi}$) acting on a `3-inch` seat area ($A_{\text{seat}} \approx 7.0\text{ in.}^2$) produces an unseating hydraulic force of **`350 lbf` (`1,550 N`)**. Linear actuators must be selected with adequate force margin (`≥ 25%`) or use balanced plug designs (where internal ports equalize pressure on top and bottom of the plug).

### Fail-Safe Actions

1. **Normally Open (`NO` / Spring-Open)**: Specified for **perimeter hot water coils, preheat coils, and freeze-sensitive heat exchangers** ([Siemens 599-02030 series](../product/siemens-599-zone-valve.html)). On loss of power or freeze stat trip ([switches and safeties](switches-and-safeties.html)), mechanical springs force the valve wide open, preventing hydronic coil freeze-up.
2. **Normally Closed (`NC` / Spring-Closed)**: Specified for **chilled water coils, central station steam valves, and humidifiers** ([Siemens 599-02000 series](../product/siemens-599-zone-valve.html)). On power failure, springs drive the valve shut to prevent space overcooling, ceiling condensation, or unmetered steam consumption.

See [Valve and damper sizing calculations](valve-and-damper-sizing-calculations.html) for detailed mathematical formulas, [Hydronic system control](hydronic-system-control.html) for loop control strategies, and [Damper actuators](damper-actuators.html) for electric actuator mechanisms.
