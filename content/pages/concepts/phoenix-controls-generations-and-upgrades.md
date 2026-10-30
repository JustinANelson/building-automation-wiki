---
id: phoenix-controls-generations-and-upgrades
type: concept
title: "Phoenix Controls laboratory valves: generations, upgrades, integration and troubleshooting"
summary: "How the Phoenix Controls generations (Accel I and II, Celeris, Traccel, CSCP) differ, how to identify a valve's vintage, what the Celeris 2 upgrade involves (flow curves, LON network, power, integration), what the current CSCP parts do (ACM, FSM, PBC, FHD500), and a commissioning and troubleshooting checklist for a mixed-age laboratory campus."
review: verified
related: [laboratory-and-fume-hood-control, laboratory-ventilation-strategy, airflow-measurement, pneumatic-control-systems, hvac-and-controls-through-the-eras, siemens-apogee-to-desigo-migration, lonworks, bacnet, bacnet-mstp, rs-485, ventilation-rate-calculations, phoenix-traccel-cscp, celeris, celeris-valve, traccel-valve, cscp-valve, phoenix-pbc, fhd500]
sources:
  - https://www.Literature.PhoenixControls.com/Documents/MKT-0269.pdf
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-PBC-Datasheet-MKT-0511-Rev-B.pdf
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/literature-and-specs/datasheets/HBT-BMS-MKT-0513-Actuator-Control-Module-ACM-Optional-Fail-Safe-Module-FSM-Datasheet.pdf
  - https://prod-edam.honeywell.com/content/dam/honeywell-edam/hbt/en-us/documents/manuals-and-guides/installation-guides/HBT-BMS-651-000-014-Rev-A-FHD500-Installation-Guide.pdf
---
Phoenix Controls venturi valves control the airflow in many laboratories, vivaria and critical spaces. They have been sold in several generations over decades, so a campus with labs from different eras may have all of them. This page explains how to tell them apart, what the Phoenix upgrade path looks like, what the current Critical Spaces Control Platform (CSCP) parts do, how to integrate them with a Siemens or other BAS, and how to commission and troubleshoot them. For the venturi principle, see [Airflow measurement](airflow-measurement.html); for room-level strategy, see [Laboratory and fume hood control](laboratory-and-fume-hood-control.html) and [Laboratory ventilation strategy](laboratory-ventilation-strategy.html).

> This page draws on Phoenix Controls document MKT-0269 (the Valve Upgrade Kit Installation Guide, 2010 to 2015, revision 11/15) and on the Phoenix and Honeywell data sheets and installation guide for the PBC, ACM and FSM, and FHD500, all in the document library. The upgrade guide describes equipment and software of its time; Phoenix has changed products and tools since, so confirm part numbers, software versions and procedures with Phoenix or Honeywell before work. Sections marked as general practice are not from those documents.

## The generations

| Generation | What it is | Control and network |
| :--- | :--- | :--- |
| Accel I | Original venturi valves, with an hourglass-shaped venturi (read from the upgrade guide's chart as vintages A to C) | Analog controllers, pneumatic or electric actuators, vendor-specific wiring |
| Accel II | Diffused venturi design (read from the chart as vintages D and E) | Analog or Celeris 1 electronics |
| Celeris 1 | Digital room-level controllers on a Phoenix network | Accel-Link room-level cabling; gateways such as Accel-Way, GWY200 and GWY201 to the BMS |
| Celeris 2 | Upgrade controllers for legacy valves, and current room-level electronics | LON (Echelon FTT-10) room-level network; MicroServer or MacroServer for BMS integration |
| Traccel | Valves with factory-mounted native BACnet MS/TP controllers | BACnet MS/TP |
| CSCP | Valves with high-speed Actuator Control Modules, optional Fail-Safe Modules, a Programmable BACnet Controller, and Fume Hood Displays | BACnet MS/TP or IP |

The wiki's product pages cover the individual families: [Accel II and Celeris](../product/celeris-valve.html), [Traccel](../product/traccel-valve.html), [CSCP valves](../product/cscp-valve.html), the [Programmable BACnet Controller](../product/phoenix-pbc.html) and the [FHD500](../product/fhd500.html). Honeywell lists the older Celeris controllers as discontinued in favour of Traccel and CSCP, as the [Accel II and Celeris](../product-line/celeris.html) page notes.

## Identifying the vintage

The upgrade guide stresses that you must verify the vintage of each valve before upgrading it, using the guide's chart and base channel drawings. The elements it uses:

- **Valve design:** hourglass (Accel I) or diffused (Accel II). The nomenclature differs, with examples such as `EXV110M-HOR` for an older hourglass valve and `EXVA110M-AAEH0` for a diffused one.
- **Base channel:** the metal channel the actuator and controller mount to. It is a U-channel, flat, or angled depending on vintage.
- **Dual valves:** older duals have two actuators or controllers per valve; newer ones have one each. Pre-2002 dual valves have a linkage with an upper hole for low-speed actuators and a lower hole for high-speed ones.
- **Controller board and terminal type,** and the **pivot arm hole size** (3/16 inch on some vintages and 1/4 inch on others).
- **The valve label,** which holds the characterisation data for the valve and is needed to build a new flow curve.

Photograph and record the label, the base channel and the controller for every valve in the survey; see the building survey on [HVAC and controls through the eras](hvac-and-controls-through-the-eras.html).

## The Celeris 2 upgrade

The upgrade guide covers replacing legacy valve electronics and actuators, without replacing the venturi valve bodies, in three kit types: **pneumatic**, **low-speed electric** and **high-speed electric**. It covers analog valves (pneumatic or electric) and Celeris 1 valves. It is relevant to a campus that still has analog pneumatic Phoenix valves, which is one reason this page links to [Pneumatic control systems](pneumatic-control-systems.html).

**Key rules from the guide**

- **Convert the whole room.** It is not practical to convert only one or two valves, because the converted valves cannot communicate with the rest of the room-level system.
- **Integration needs a Celeris 2 floor or building network.** A MicroServer or MacroServer connects the converted rooms to the BMS, running in parallel with the existing Accel-Way, GWY200, GWY201 or house BMS.
- **Do not reuse flagged parts.** Reusing Vpots (the valve position potentiometers) or other components that the instructions flag as non-reusable can void warranty coverage.
- **Record data on the valve label.** The kit includes a new label to fill in with the original and upgrade valve data and attach inside the new controller cover, with the original label also kept with the valve.
- **Document the sequence first.** Work with the owner's representatives to write down the control sequence the upgrade must reproduce. This matters most for Celeris 1 triples and quads and all analog valves, since each needs its own controller, communications cable and power source.
- **Temperature sensors** on Celeris 1 systems must be replaced, though existing wall sensors may be reused where occupancy is managed by the BMS or local occupancy sensors and the local bypass pushbutton (which the old sensors lack) is not needed.

**Tools and software named in the guide** include a laptop with the Phoenix Configuration Plug-in and LonMaker, the Phoenix Diagnostic Plug-in (version 2.5.19 or higher for the flow curve conversion), the Test and Balance (TAB) plug-in, a torque wrench, a squeeze bulb and a volt meter for pneumatic work, and, for Celeris 1, Accel-Works commissioning software with an optical isolator and a current database.

### Building the database first

The guide recommends building the LON database before starting the valve work so it can be used to commission each valve. It lists architecture rules the Phoenix configuration plug-in requires, including that a subsystem may have only one main (non-booster) valve, limits on boosters per valve type, and that only one zone-control type is allowed per room. A few of the limits it gives: a laboratory zone-control valve of the full type supports up to four make-up air valves and up to ten hood subsystems, and the compact type supports one make-up air valve and up to seven hoods. A room with a return subsystem has rules about which valve type the return must be. The rules differ by controller type, so use the guide when building a database.

### Power budget

Celeris 2 does not power the fume hood components, so power supplies or transformers may have to be added. The guide lists the load of each device in the room before and after the upgrade (in VA), including controller units, ADV drive units, PEM and ANR cards, fume hood monitors (FHM), zone presence sensors (ZPS), analog valve controllers, reheat actuators and 4 to 20 mA devices. Add the loads, allow for the devices that now need independent power, and check whether there is spare transformer capacity; see [Electrical power calculations](electrical-power-calculations.html).

### Flow curves

A venturi valve's position is converted to a flow using stored characterisation data, so the flow curve is critical.

- **Vintages A, B and C:** the legacy curve is not converted. A **generic flow curve for the valve size** is downloaded to the controller, and **it is expected to need fine-tuning from actual airflow measurements**.
- **Vintages D and E:** the Diagnostic Plug-in converts the data on the original valve label, plus Vpot measurements, into a **48-point flow table**, shows the error of the conversion against the original points, and downloads it to the controller card. The data can be loaded from the label or from a Phoenix VPT file, and the table can be saved to a file for the record.
- **After the curve:** step through the control sequences to confirm performance, and use the Phoenix Lab Verification Tool to check proper ventilation and airflow under all operating conditions.

### Restarting the upgraded system

The guide's recommended order: start up the upgraded space and use the TAB plug-in to verify operation; for Celeris 1 delete the removed devices from the Accel-Works database and generate a new map file; then perform integration start-up on the MicroServer or MacroServer, and re-integrate the gateway for Celeris 1.

**Room-level network.** Existing Accel-Link cable may be reused for the Celeris 2 LON network, and may be mixed with Echelon-approved FTT-10 cable (22 AWG Level IV twisted pair). The guide gives these limits:

- Total room-level bus length of **4,593 feet (1,400 m)**; if the total resistance through both conductors is under **1,500 ohms**, the run should be within specification.
- The network must be a **bus topology**, device to device, not a star.
- **Node limits** per subnet of 32 for tracking pair applications and 20 for laboratory applications; the wall sensor does not count as a node unless it is used as a connection point.
- A sensor may be a stub off a controller if the stub is **no longer than 9.8 feet (3 m)**.
- **End-of-line terminators** must be placed at the true ends of the new bus. Terminators from the old Celeris 1 network cannot be reused and must be found and removed.

**BMS integration.** The guide notes that the BMS must **re-discover the devices and convert the point mapping** for graphics, trends, schedules and programs, from the original BACnet network and instance numbers to the newly assigned ones. Plan for that when scheduling BAS work; see [Siemens APOGEE to Desigo migration](siemens-apogee-to-desigo-migration.html) for the Siemens naming issues.

## The current platform: CSCP parts

| Part | What it does (Phoenix and Honeywell data sheets) |
| :--- | :--- |
| **Actuator Control Module (ACM)** | Mounted on the valve and holds the valve's characterisation data. It drives the valve to position with a **one-second response** to a command change, on a network or local input. It can optionally use a differential pressure sensor or switch to help control fan static pressure, and can be programmed to run slower than one second if wanted |
| **Fail-Safe Module (FSM)** | An optional plug-in module that moves the valve to a preprogrammed position (full open, full closed or in between) on power failure, using supercapacitors. It can be ordered with the valve or added later |
| **Programmable BACnet Controller (PBC)** | The room-level zone controller for offset, comfort, emergency and pressurisation control. It runs on Niagara (N4.9u1 or later), has MS/TP or IP models with or without Bluetooth, takes 24 V AC at 50 VA, and can manage up to 20 high-speed valves and 10 fume hood monitors in one zone or up to four standard-speed valves directly wired |
| **Fume Hood Display 500 (FHD500)** | The hood monitor and display, a BACnet MS/TP device mounted in a standard electrical box or a retrofit cutout |
| **Flow Manager mobile app** | Connects over Bluetooth to a PBC with BLE to view alarms, monitor conditions and change setpoints |

The PBC model codes: series 500 and 501 are BACnet MS/TP (with and without Bluetooth), 504 and 505 are BACnet IP; the function codes are GEN (generic programmable logic and I/O), ZBH (zone balance, high speed) and ZBL (zone balance, standard speed). The integration points are in the guide specifications (MKT-0520 for the PBC and MKT-0527 for the ACM and FSM), which are the documents to use for a BAS point list.

**FHD500 installation details.** It needs 24 V AC, accepts 18 to 22 AWG wire, communicates on RS-485 BACnet MS/TP, and mounts in a standard single-gang box. The screen locks to the base plate with a bottom screw tightened to 2 in-lb. An MS/TP trunk must be terminated with a 120 ohm, quarter-watt resistor, as on any RS-485 trunk; see [RS-485](rs-485.html) and [BACnet MS/TP](../protocol/bacnet-mstp.html). The FHD500 user guide (MKT-0512) covers start-up and commissioning.

## Integrating with a Siemens or other BAS

> General practice drawn from the documents above and the rest of this wiki.

- **Who does what.** The Phoenix room controller runs the fast loops (zone balance, offset, hood tracking) at one-second speeds. The BAS sets modes, schedules and setpoints and reads flows, positions and alarms. Do not try to close a fast loop through the BAS.
- **Protocol by generation.** Traccel and CSCP controllers are BACnet. Celeris 2 rooms are LON and reach a BAS through a MicroServer or MacroServer, which presents them as BACnet. Legacy Celeris 1 and analog rooms may reach the BAS through a gateway. For each, record the protocol and the gateway; see [BACnet](../protocol/bacnet.html), [LonWorks](../protocol/lonworks.html) and [Reading a BACnet PICS](bacnet-pics.html).
- **Point list.** Build it from the integration sections of the Phoenix guide specifications, not from a generic template. Typical content: room mode (occupied, unoccupied, emergency), supply, exhaust and offset flows and setpoints, room pressure, hood status and sash state, temperature and humidity, and alarms.
- **Trending and naming.** Trend flows, offset and valve position at intervals that match the loop speed for tuning and at slower intervals for energy; use a consistent naming convention, as for any integration (see [BAS sizing calculations](bas-sizing-calculations.html)).
- **When the front end changes,** device instances and network numbers may change, and graphics and schedules need remapping, as the upgrade guide notes.
- **Energy changes need sign-off.** Changes to minimum airflow or occupancy modes affect safety; see [Laboratory ventilation strategy](laboratory-ventilation-strategy.html).

## Commissioning and troubleshooting checklist

> General practice, assembled from the documents above; use Phoenix procedures where they exist.

**Before work**
1. Identify every valve's vintage and type, and record the label data.
2. Obtain the original sequence of operation, or reconstruct it from the field and have it approved by the owner and EH&S.
3. Check the network cabling, topology and terminators against the limits above; measure the loop resistance.
4. Do the power budget, including hood components.

**During commissioning**
1. Verify each device appears on the network with the expected address and node count.
2. Confirm the flow curve: compare the valve's reported flow with a measured airflow at several positions, and adjust the curve for vintages that use a generic one.
3. Test each emergency and fail-safe mode, including the response to loss of power and loss of communication.
4. Check hood behaviour: sash position response, flow at the sash positions, and the alarm and display state.
5. Verify the room's pressure relationship and tracking through the range, and run the Phoenix verification tools.
6. Record the as-built settings and the sequence.

**Common faults**

| Symptom | Things to check |
| :--- | :--- |
| Valve not seen on the network | Terminators, bus topology, cable resistance, node count, address, power |
| Network works intermittently | A star-wired branch or long stub, a missing or doubled terminator, damaged cable, noise from other wiring |
| FHD500 not communicating | MS/TP address, baud rate and polarity, a 120 ohm terminator at the trunk end, trunk topology |
| Flow reading does not match measured flow | Wrong or generic flow curve, wrong valve size in the configuration, a sensor or transducer fault, an installation error |
| Room will not hold pressure | Valve positions, tracking and offset settings, door and hood states, supply or exhaust fan limits, a failed valve |
| Valve hunts or responds slowly | Loop settings, supply fan static pressure, actuator or linkage problem, a slower response setting in the ACM |
| Valve goes to the wrong position on power loss | Fail-safe module programming or absence, or the legacy actuator's spring position |
| Points missing or wrong in the BAS | Remapping after a network change, wrong device instance, gateway or server configuration |
| Pneumatic valve behaves erratically | Air supply quality and pressure, leaks, transducer calibration; see [Pneumatic control systems](pneumatic-control-systems.html) |

## Decisions for a mixed campus

- **Keep and verify** a working room, but document it, check its flow accuracy and decide how it will be supported when parts run out.
- **Upgrade in place** with a Celeris 2 kit where the valve bodies are sound and the room can be converted whole.
- **Replace** with Traccel or CSCP where the valves or the room need more than new electronics, or where the building is being renovated.
- **Integrate** each room's controls with the main BAS in a way that survives front-end changes.

Whichever route, laboratories need their critical functions, pressure relationships and fail-safe behaviour verified after any change, and the people responsible for laboratory safety need to approve it.
