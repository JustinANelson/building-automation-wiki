---
id: phoenix-controls
type: manufacturer
title: Phoenix Controls
summary: Maker of pressure-independent venturi air valves and high-speed critical-space controls for laboratories, fume hoods, and healthcare facilities; part of Honeywell.
review: verified
related: [phoenix-traccel-cscp, celeris, traccel-valve, cscp-valve, phoenix-pbc, fhd500, celeris-valve]
sources:
  - https://buildings.honeywell.com/us/en/brands/our-brands/phoenix-controls/products/valves-and-controllers
  - https://www.Literature.PhoenixControls.com/Documents/MKT-0242.pdf
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-MKT-0525-CSCP-Venturi-Valves.pdf
---
Phoenix Controls (headquartered in Acton, Massachusetts, and part of Honeywell Building Technologies) manufactures mechanically pressure-independent venturi air valves, fume hood monitors, and high-speed room pressurization controllers for university research laboratories, vivariums, biocontainment suites, and hospital isolation rooms.

### Product Generations
- **Critical Spaces Control Platform (`CSCP`, Current)**: `PVSA` supply and `PVEA`/`PVEB` exhaust venturi valves paired with closed-loop Actuator Control Modules (`ACM`), optional Fail-Safe Modules (`FSM`), Programmable BACnet Controllers (`PBC500` MS/TP and `PBC504` BACnet/IP), and 500-Series Fume Hood Displays (`FHD500`).
- **Traccel BACnet Platform (`TSV` / `TEV`, Current)**: Pressure-independent venturi valves with factory-mounted native BACnet MS/TP controllers (`TX`, `TP`, `SO`, `EO`) for laboratories and commercial critical spaces with lower-density I/O requirements.
- **Accel II & Celeris (`EXV` / `MAV` / `CEV` / `CSV`, Legacy / End-of-Life)**: Installed base of analog, LonWorks, and BACnet venturi valves across older campus research buildings; supported for field modernization via **Celeris 2 Valve Upgrade Kits** (`C2UX`).


### How a Phoenix System Works

This section is an overview drawn from the product-line and concept pages in this wiki.

**The valve does the regulating.** A Phoenix venturi valve holds airflow mechanically: a spring-loaded cone moves with duct pressure, so flow stays at the set value over the rated pressure range without a flow sensor or feedback loop. The controller sets the valve position, and the actuator control module converts that position to a flow using the valve's factory characterisation. See [Airflow measurement](../concept/airflow-measurement.html) for the principle and the CSCP data sheet figures.

**Why labs use it.** Laboratories need fast, accurate airflow, because the room's pressure relationship to its neighbours depends on the difference between supply and exhaust flow, and a fume hood sash movement changes exhaust demand within seconds. High-speed actuators respond in under a second, and the controller adjusts supply and exhaust together to hold the pressure offset. See [Laboratory and fume hood control](../concept/laboratory-and-fume-hood-control.html).

**Typical layout.**

- A supply valve and an exhaust valve on each room, each with an actuator control module.
- A room controller, such as the Programmable BACnet Controller, coordinating the valves and tracking.
- Fume hood monitors showing sash and face velocity status to the user.
- BACnet connection to the building automation system, which sets schedules and reads status and flows but does not close the fast loop.

**Choosing a generation.** Current projects use the CSCP or Traccel platforms. The older Accel II and Celeris valves remain widely installed, and the Celeris 2 upgrade kit replaces the control electronics without removing the valve body, so check which generation is installed before ordering parts.
