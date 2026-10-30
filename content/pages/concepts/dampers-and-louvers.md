---
id: dampers-and-louvers
type: concept
title: "HVAC dampers: control, smoke, fire/smoke, and backdraft dampers"
summary: "Parallel-blade vs. opposed-blade control dampers, round VAV dampers, low-leakage airfoil blades, UL 555/555S fire and smoke dampers, and actuator torque sizing."
review: verified
images:
  - path: images/concepts/dampers-and-louvers.svg
    alt: "Technical diagram (drawn illustration) comparing parallel-blade dampers, opposed-blade dampers, and round VAV terminal box dampers"
    source: "Own work (BASWiki technical diagram illustrating standard HVAC damper blade geometries)"
    license: CC0-1.0
related: [damper-actuators, control-signals, vav-control, airflow-measurement, openair-gde-glb, gdb181-1e-3, glb181-1e-3, lmb24-3, nmb24-3, amb24-3, apogee-atec, symbio-210]
sources:
  - https://sid.siemens.com/api/khub/documents/4FetLwkGCXOIekwQQADi4A/content
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_AMB24-3_datasheet_en-us.pdf
---
In air-handling units, ductwork, and VAV terminal boxes, **dampers** are the air-side equivalent of [control valves](control-valves.html): rotating metal blades inside a frame or round duct section throttle, mix, or isolate airflow when driven by an electric or pneumatic [damper actuator](damper-actuators.html).

### 1. Parallel-Blade vs. Opposed-Blade Control Dampers
Multi-blade rectangular dampers in air-handling units (`Outdoor Air`, `Return Air`, `Relief/Exhaust Air`, and `Face-and-Bypass`) are built with one of two blade linkages:

| Blade Linkage | How the Blades Move | Inherent Flow Characteristic | Best HVAC Applications |
| :--- | :--- | :--- | :--- |
| **Opposed-Blade Damper (`OBD`)** | Adjacent blades rotate in **opposite** directions, pinching the airstream into narrowing jets as they close | **More linear throttling** across the stroke; generates pressure drop early in the stroke, giving better control authority when installed in series with coils and ductwork | **Modulating flow and static pressure control**: minimum outdoor air dampers, relief dampers, coil bypass dampers, and volume throttling |
| **Parallel-Blade Damper (`PBD`)** | All blades rotate in the **same** direction (like venetian blinds), deflecting the entire airstream at an angle | Non-linear throttling (little restriction over the first `30–40%` of closing), but **aims the exiting airstream** | **Two-position (Open/Closed) isolation** and **Outdoor/Return Air mixing plenums**, where angled parallel blades can be oriented to direct the two airstreams into each other to prevent cold-air stratification across AHU coils |

### 2. Functional Categories of HVAC Dampers
1. **Volume Control & Economizer Dampers**:
   - Extruded aluminum or galvanized steel airfoil blades with silicone/EPDM blade-edge seals and stainless-steel jamb seals.
   - **AMCA 500-D / IECC / ASHRAE 90.1 Class 1A Low-Leakage Rating**: Limits leakage to `≤ 3 CFM/sq. ft. at 1.0 in. WC` (`≤ 4 CFM/sq. ft.` for Class 1) so closed outdoor and relief dampers do not waste heating/cooling energy or freeze coils in winter.
2. **Round & Rectangular VAV Terminal Box Dampers**:
   - Single round butterfly blade (`4 in.` to `16 in.` diameter) with a polyurethane foam or elastomer perimeter seal mounted on a `3/8 in.` or `1/2 in.` (`9.5 to 12.7 mm`) drive shaft downstream of a multipoint Pitot flow cross.
   - Directly coupled to a `44 lb-in (5 Nm)` or `88 lb-in (10 Nm)` non-spring return floating actuator—such as the [Siemens OpenAir GDE131.1P / GLB131.1P](../product/openair-gde-glb.html), [Belimo LMB24-3 / NMB24-3](../product/lmb24-3.html), or integrated [Siemens BACnet ATEC](../product/apogee-atec.html) / [GDB181.1E/3](../product/gdb181-1e-3.html).
3. **Life-Safety Dampers (UL 555 & UL 555S)**:
   - **Fire Damper (`FD`, UL 555)**: Installed where ducts penetrate fire-rated walls or floors; held open by a mechanical **fusible link** (typically `165 °F` / `74 °C`) that melts in a fire, releasing a curtain or spring blade to block flame spread. Pure mechanical fire dampers have no actuator, though they may have a position switch wired to a BAS `DI`.
   - **Smoke Damper (`SD`, UL 555S)**: Driven by a fast-acting (`≤ 15 seconds`) spring-return UL-listed actuator to block smoke migration through ductwork when commanded by a smoke detector or fire alarm control panel (`FACP`).
   - **Combination Fire/Smoke Damper (`FSD`, UL 555 + UL 555S)**: Protects both fire and smoke barriers; equipped with an **electric resettable thermal response device (`ETRD` / `TOR`)** and dual-position blade end switches (`Open` / `Closed` proof) supervised by a **UL 864 UUKL Smoke Control** system (such as `-PKA` / `-101K` variants of [Desigo DXR2](../product/dxr2.html), [APOGEE PTEC/ATEC](../product/apogee-tec-vav.html), or [Trane Symbio 210](../product/symbio-210.html)).
4. **Backdraft / Gravity Relief Dampers**:
   - Lightweight unbalanced blades (with adjustable counterweights) that open automatically under positive fan discharge pressure and close by gravity when the fan stops, preventing reverse airflow without an electric actuator.

### 3. Actuator Torque Sizing Rules of Thumb
Damper actuator torque is specified in **pound-inches (`lb-in` or `in-lb`)** or **Newton-meters (`Nm`)** (`1 Nm ≈ 8.85 lb-in`):
- Typical low-leakage airfoil opposed-blade dampers require **`5 to 7 lb-in per sq. ft.`** (`at 1,000–2,500 fpm` face velocity and `1–2 in. WC` static pressure), while parallel-blade dampers require **`4 to 5 lb-in per sq. ft.`**.
- For example:
  - A `44 lb-in (5 Nm)` actuator ([Siemens GDE131.1P](../product/openair-gde-glb.html) or [Belimo LMB24-3](../product/lmb24-3.html)) typically handles up to **`8–10 sq. ft.`** of standard damper area (all single-duct VAV boxes up to `16 in.` round).
  - An `88 lb-in (10 Nm)` actuator ([Siemens GLB131.1P](../product/openair-gde-glb.html) or [Belimo NMB24-3](../product/nmb24-3.html)) handles **`16–20 sq. ft.`**.
  - A `180 lb-in (20 Nm)` actuator ([Belimo AMB24-3](../product/amb24-3.html)) handles **`30–35 sq. ft.`**. Large AHU outdoor/return dampers use multiple jackshafted or master/slave actuators.


### 4. Control Authority and Sizing the Damper

> This section is general practice, not taken from the cited documents.

A damper controls flow well only if it takes a meaningful share of the pressure drop in its branch. **Authority** is the pressure drop across the fully open damper divided by the total pressure drop of the damper and the system it controls. Dampers with low authority do almost nothing across most of their stroke and then change flow sharply near closed, so the loop is hard to tune. A common design target for modulating dampers is an authority in the range of about 0.3 to 0.5, which is why a damper is chosen to fit the opening it serves and not simply made as large as the duct. An oversized damper behaves like an on/off device.

Practical effects:

- A damper much larger than the airflow needs ends up working in the first 10 to 20 percent of its stroke, where tiny position errors cause large flow swings.
- Resizing the blade area, or blanking off part of the damper, restores authority.
- Opposed-blade dampers give a more linear installed characteristic than parallel-blade dampers at the same authority, which is why they are chosen for modulating service.

### 5. Installation Details

- **Blade orientation.** Install so that the blade axis and rotation suit the application, and so that the airflow strikes the blades as the manufacturer intends. Face-and-bypass and mixing arrangements often specify orientation to promote mixing.
- **Jackshaft and linkage.** Where one actuator drives several damper sections through a linkage or jackshaft, check the linkage for slop and binding; torque is lost in a worn linkage, and a stiff section leaves the others only partly driven.
- **Actuator mounting.** Mount direct-coupled actuators on the shaft with the anti-rotation bracket, and set the stroke limits so the actuator does not force the blades past their stops. Set the spring-return direction so the damper goes to its safe position, closed for outdoor air, open for smoke exhaust, on loss of power.
- **Closing force.** Seals only seal if the actuator presses the blades closed; a damper that shows closed but leaks is a common source of freeze-stat trips and wasted energy. Some actuators have a preload or a closing-force setting.
- **Access.** Leave room to reach the actuator and the damper, and fit access doors in ducts for fire and smoke damper inspection; codes require these dampers to be tested periodically.

### 6. Common Faults

| Symptom | Likely cause |
| :--- | :--- |
| Outdoor air damper will not stay closed, coil freezes | Worn blade seals, loose linkage, or the actuator is not driving fully closed |
| Damper hunts or flow is erratic | Oversized damper with low authority, or a loop gain that is too high |
| Actuator runs but the damper does not move | Slipped coupling or broken linkage |
| Mixed air temperature stratifies | Parallel-blade damper arrangement not directing the two airstreams to mix, or no mixing device |
| Smoke or fire damper fails its test | Link or reset device failed, or the damper sticks from dirt or corrosion |

See [Control signals](control-signals.html) for how the actuator is commanded and [Airflow measurement](airflow-measurement.html) for how flow through the damper is known.
