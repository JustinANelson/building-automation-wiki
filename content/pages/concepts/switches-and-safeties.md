---
id: switches-and-safeties
type: concept
title: "HVAC safety cutouts and proof-of-flow switches"
summary: "Freeze stats, high/low duct static pressure cutouts, duct smoke detectors, current switches (CTs), differential-pressure switches, and hydronic paddle flow switches."
review: draft
images:
  - path: images/concepts/switches-and-safeties.svg
    alt: "Technical diagram (drawn illustration) of an AHU hardwired safety interlock chain (Freeze Stat, High-Static Cutout, Duct Smoke Detector) wired to the supply fan starter and BAS Digital Inputs (DI)"
    source: "Own work (BASWiki technical diagram based on standard AHU safety interlock practices and York Form 160.75-PW4)"
    license: CC0-1.0
related: [io-points, gages-and-local-instrumentation, differential-pressure-sensors, dampers-and-louvers, york-optiview, symbio-700]
sources:
  - https://docs.johnsoncontrols.com/api/khub/documents/9Z2d~c8lR3s1aK6pY0vW4w/content
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/split-systems/odyssey-6-to-25-tons/ACC-APG001A-EN_06102020.pdf
---
In building automation, **life-safety and equipment-protection cutouts must never rely solely on software**. Critical safeties—such as a coil freezing in winter, a duct over-pressurizing against a closed fire/smoke damper, or loss of chilled-water flow through a chiller evaporator—are wired directly into the **hardwired electrical safety circuit** of the fan VFD, motor starter, or chiller controller, while a second set of isolated contacts (`DPDT`) reports the trip status to a BAS [**Digital Input (`DI`)**](io-points.html).

### 1. The Air-Handling Unit (AHU) Hardwired Safety Chain
On a typical campus air-handling unit controlled by a [Siemens Desigo PXC7](../product/pxc7.html) or [APOGEE PXC Modular](../product/pxc-modular.html) field panel, three manual-reset safety devices are wired in series with the supply fan VFD / starter run permissive:

| Safety Device | Sensing Element & Setpoint | Hardwired Equipment Action on Trip | BAS `DI` Monitoring & Reset |
| :--- | :--- | :--- | :--- |
| **Low-Temperature Cutout ("Freeze Stat")** | `20 ft.` vapor-filled serpentine capillary tube clipped across the downstream face of the preheat or cooling coil; trips if **any 1-foot section** drops below **`35–38 °F` (`1.7–3.3 °C`)** | Immediately **stops the supply fan**, **drives the outdoor air damper closed**, and **drives the preheat/heating coil valve 100% open** (and starts the coil circulating pump) to prevent bursting hydronic tubes | Second pole of DPDT switch sets `Freeze Stat Alarm` (`BI`/`DI`) at the field panel; requires physical inspection and pressing the **manual reset button** on the switch housing |
| **High Duct Static Pressure Cutout** | Diaphragm pressure switch connected to a static pressure tip downstream of the supply fan discharge (`typically set at +3.0 to +4.5 in. WC`) | Immediately **stops the supply fan** before excessive static pressure (caused by closed fire/smoke dampers or a failed VAV control loop) ruptures ductwork | Reports `High Static Cutout` to BAS `DI`; manual reset button on switch housing |
| **Return / Supply Low Static (Suction) Cutout** | Diaphragm pressure switch sensing negative pressure upstream of the fan (`typically -1.5 to -2.5 in. WC`) | **Stops the fan** if a closed outdoor/return damper or plugged filter bank threatens to collapse sheet-metal ductwork inward | Reports `Low Static Cutout` to BAS `DI`; manual reset |
| **Duct Smoke Detector** *(NFPA 90A)* | Photoelectric sampling tubes spanning the supply and/or return air duct (`required by code at ≥ 2,000 CFM` and `≥ 15,000 CFM`) | Shuts down fan via hardwired relay and notifies the building Fire Alarm Control Panel (`FACP`); on UL 864 smoke control systems, triggers emergency smoke purge/pressurization (`EMERG_FIRE` / `EMERG_PURGE`) | Monitored by FACP and BAS `DI`; reset at the Fire Alarm panel or remote test/reset keyswitch |

### 2. Proof-of-Flow Switches (`Fan Status` & `Pump Status`)
When a DDC controller commands a fan or pump `DO` to `Start`, it must verify that air or water is actually moving (`Status = ON`) before enabling heating, cooling, humidification, or compressors. If `Command != Status` for longer than a proving delay (`typically 15 to 40 seconds`), the controller latches a **Proof / Runtime Fault** (see [Trane Symbio 700 Application Guide `ACC-APG001A-EN`](../product/symbio-700.html)):
- **Split-Core Current Switch (`CT`)**:
  - Clamps around one phase wire feeding the fan or pump motor.
  - **Adjustable Trip Setpoint (`Amps`)**: Unlike a fixed-threshold current switch or a starter auxiliary contact (`Aux`), an adjustable current switch calibrated slightly below normal loaded motor current can detect a **broken fan belt or sheared pump coupling** (because an unloaded spinning motor draws significantly less current than a loaded motor). On VFDs, either a VFD `Running` relay + Modbus feedback or a frequency-compensated current switch is used.
- **Air Differential Pressure Proof Switch**:
  - Diaphragm switch (`e.g., 0.05 to 2.0 in. WC` adjustable) connected across the supply/exhaust fan (`Suction` to `Discharge`); directly proves aerodynamic pressure rise regardless of motor drive type.
- **Hydronic Differential Pressure Switch vs. Paddle Flow Switch**:
  - **Hydronic $\Delta P$ Switch**: Connected across pump suction and discharge headers or across a chiller evaporator barrel to prove water differential pressure.
  - **Paddle Flow Switch** (such as the **McDonnell & Miller `FS8W`**, York part number [`024-15793` documented in the York OptiView manual `160.75-PW4`](../product/york-optiview.html)): Stainless steel or brass paddles inserted into a horizontal pipe tee deflect when water flow exceeds the minimum GPM threshold, closing a micro-switch wired directly to the chiller safety interlock (`TB4`) to prevent freezing the evaporator tube bundle on loss of chilled-water flow.

### 3. Other Common Discrete HVAC Switches
- **High-Limit Aquastat & Steam Pressuretrol**: Immersion capillary thermostat (`Aquastat`) on hot-water converters/boilers or bellows pressure switch (`Pressuretrol`) on steam headers that interrupts heat input if water temperature or steam pressure exceeds safe limits.
- **Condensate Drain Pan Float Switch**: Magnetic reed or mechanical float switch in cooling-coil drain pans that shuts down cooling or the unit fan before a clogged condensate trap overflows onto ceilings below.
