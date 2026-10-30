---
id: control-valves
type: concept
title: "HVAC hydronic and steam control valves"
summary: "Two-way and three-way globe, ball, butterfly, and pressure-independent control valves that regulate chilled water, hot water, and steam flow to HVAC coils, sized by flow coefficient (Cv) and close-off pressure."
review: draft
images:
  - path: images/concepts/butterfly-valve-electric-actuator.jpg
    alt: "Industrial butterfly valve fitted with an electric quarter-turn actuator and handwheel"
    source: "Gerritse at nl.wikipedia, via Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Butterflyvalve-with-electrical-actuator.jpg"
    license: CC BY-SA 3.0
related:
  - siemens-599-zone-valve
  - damper-actuators
  - control-signals
  - analog-signals
  - io-points
  - gages-and-local-instrumentation
  - belimo
sources:
  - https://sid.siemens.com/api/khub/documents/fU1aL7f23fKvIGrmhJ24Kg/content
---

In hydronic and steam HVAC systems, a **control valve** modulates the flow of chilled water, hot water, glycol, or steam through a heating or cooling coil (or isolates equipment in central plants) in response to a command from a DDC controller. Every control valve assembly consists of two matched components: the **valve body** (which contacts the fluid) and the **[valve actuator](damper-actuators.html)** (which positions the valve stem or ball).

## 1. Two-Way vs. Three-Way Valve Piping Configurations

| Valve Configuration | Ports | Flow Behavior | Typical Campus Hydronic Applications |
| :--- | :--- | :--- | :--- |
| **Two-Way (`2-Way`) Throttling** | 2 (`Inlet` → `Outlet`) | Variable flow: throttling the valve restricts GPM through the coil and reduces total pumping flow in variable-primary or secondary-VFD hydronic loops | Standard on modern variable-flow chilled water and hot water AHU coils, VAV reheat coils ([Siemens 599 Series 2-Way](../product/siemens-599-zone-valve.html)), and chilled beams |
| **Three-Way (`3-Way`) Mixing** | 3 (`Port A` Coil Supply + `Port B` Bypass → `Port AB` Common Outlet) | Constant total flow: two inlets (`A` and `B`) blend into a single common outlet (`AB`). As `Port A` (through coil) closes, `Port B` (bypass) opens proportionally | Constant-volume hydronic loops, end-of-loop bypasses (maintaining minimum supply water temperature and pump flow), and radiant floor mixing loops |
| **Three-Way (`3-Way`) Diverting** | 3 (`Port AB` Common Inlet → `Port A` + `Port B` Outlets) | Splits a single incoming stream (`AB`) between two outlet branches (`A` and `B`). *Note: A mixing valve cannot be piped as a diverting valve unless specifically rated for diverting service, or water hammer will occur as the plug slams against the seat* | Cooling tower bypass valves, heat-recovery bypasses |

## 2. Valve Body Geometries in BAS

1. **Globe Valves & Short-Stroke Zone Valves (`Linear Stem`)**: A linear plug or disc moves perpendicular to a machined seat ring.
   - **Terminal Zone Valves (`1/2 in. to 1 in.`)**: Compact short-stroke (`2.5 mm` / `0.1 in.`) brass valves such as the [Siemens 599 Series (`MT` Series `599-020xx`)](../product/siemens-599-zone-valve.html) used on VAV reheat boxes, fan-coils, and fin-tube radiation with snap-on electro-thermal (`SFA71U`), floating (`SSC161.05U`), or `0–10 VDC` modulating (`SSE161.05U` / `SSF161.05U`) actuators.
   - **Central-Station Globe Valves (`1/2 in. to 6 in.`)**: Heavy bronze or cast-iron flanged/threaded valves (`Siemens Powermite 599` and `Acvatix` series) used on AHU heating/cooling coils, heat exchangers, and low-/medium-pressure steam (`15–100 psi`), providing high rangeability and tight throttling stability.
2. **Characterized Control Valves (`CCV` / Characterized Ball Valves, `90° Rotary`)**: A quarter-turn stainless-steel ball paired with a laser-cut V-shaped **characterizing disc** inside the seat (pioneered by [Belimo](../manufacturer/belimo.html)). The characterizing disc converts a ball valve's inherently quick-opening profile into a true **equal-percentage** flow curve while retaining zero-leakage bubble-tight shutoff, high close-off pressure, and low actuator torque.
3. **Butterfly Valves (`90° Rotary`, `2 in. to 24+ in.`)**: A rotating circular disc inside a wafer or lugged body (pictured above). Used primarily for large-pipe (`≥2.5 in.`) chiller, boiler, and cooling-tower isolation (`2-position`) or high-flow header modulation in central plants.
4. **Pressure-Independent Control Valves (`PICV` / `PIBCV`)**: Combine a two-way modulating control valve with an integral mechanical **differential pressure regulator** (or ultrasonic/electromagnetic flow meter + electronic controller) in one body. The internal regulator holds a constant pressure drop across the control orifice so volumetric flow (`GPM`) depends *only* on the `0–10 VDC` actuator command (`0–100%` of design GPM), eliminating coil overflow and hydronic balancing drift when system differential pressure fluctuates.

## 3. Flow Coefficient ($C_v$ / $K_{vs}$) & Valve Sizing

Hydronic control valves are sized by their **Flow Coefficient ($C_v$)**—defined in US customary units as the water flow in **US gallons per minute (`GPM`) at `60 °F` that produces a `1.0 psi` pressure drop ($\Delta P$)** across the fully open valve (in metric units, $K_{vs}$ in $\text{m}^3/\text{h}$ at `1 bar` drop, where $K_{vs} = 0.865 \times C_v$):

$$Q = C_v \sqrt{\frac{\Delta P}{SG}} \quad \Longleftrightarrow \quad C_v = \frac{Q}{\sqrt{\Delta P}}$$

where $Q$ is the design flow rate (`GPM`), $\Delta P$ is the design pressure drop across the open valve (`psi`), and $SG$ is the fluid specific gravity (`1.0` for water).

- **Valve Authority**: For stable modulating control without hunting, a two-way throttling valve is typically sized for a full-open pressure drop of **`3 to 5 psi`** (or at least `25–50%` of the total branch circuit pressure drop including the coil). Look up the nearest standard catalog $C_v$ (for example, the [Siemens 599 Series Zone Valves](../product/siemens-599-zone-valve.html) offer catalog $C_v$ steps of `0.4, 0.63, 1.0, 1.6, 2.5, 4.0, 6.3, and 8.0`).
- **Equal-Percentage (`= %`) vs. Linear Flow Characteristic**: Hydronic water coils exhibit strong non-linear heat transfer: the first `20%` of water flow delivers `50–60%` of the coil's sensible heating or cooling capacity. An **equal-percentage** valve plug or characterizing disc compensates for this coil curve by opening very gradually at low stroke (`0–40%`) and increasing flow exponentially toward `100%`, resulting in a nearly **linear relationship between controller `0–10 VDC` output (`%`) and actual BTU/hr heat transfer**. Steam coils and 3-way bypass ports typically use a **linear** flow plug.

## 4. Close-Off Pressure vs. Static Body Rating & Fail-Safe Stem Action

When specifying or replacing a control valve and actuator, technicians must distinguish two pressure ratings and two stem actions:

1. **ANSI Body Static Rating vs. Close-Off Differential Pressure ($\Delta P_{\text{max}}$)**:
   - **Static Body Pressure** (e.g., `ANSI Class 125 / 250`, `300 psi` / `2 MPa` on [Siemens 599 Zone Valves](../product/siemens-599-zone-valve.html)) is the maximum system line pressure the brass/bronze body and packing gland can contain without external leakage.
   - **Close-Off Pressure** (e.g., `20 to 75 psi` depending on valve port size) is the maximum pump differential pressure ($\Delta P = P_{\text{supply}} - P_{\text{return}}$) against which the actuator can force the valve plug tightly shut without being pushed open by water pressure.
2. **Normally Open (`NO`) vs. Normally Closed (`NC`) Fail-Safe Action**:
   - **Normally Open (`NO` / Fail-Open)**: Typically specified on **perimeter hot-water reheat coils, radiation, and preheat coils** (such as the `2-way Normally Open` [Siemens 599-02030 to 599-02052](../product/siemens-599-zone-valve.html) paired with an `SSF161.05U` spring-return actuator) so that if `24 VAC` power or the controller fails in winter, hot water flows through the coil to prevent building and coil freeze-up.
   - **Normally Closed (`NC` / Fail-Closed)**: Specified on **chilled-water coils, humidifiers, and interior cooling-only zones** (such as the `2-way Normally Closed` [Siemens 599-02000 to 599-02022](../product/siemens-599-zone-valve.html) paired with an `SFA71U` or `SSE161.05U` actuator) to prevent uncontrolled overcooling or steam injection on power loss.
