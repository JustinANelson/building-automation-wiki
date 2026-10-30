---
id: hvac-and-controls-through-the-eras
type: concept
title: "HVAC and controls through the eras: identifying what you have"
summary: "A field guide to six generations of building heating, ventilation and controls, from gravity steam and natural ventilation through pneumatic, analog electronic, proprietary DDC and open-protocol systems to current IP and analytics, with how to recognise each, what it can do, what to check, and what to do with it."
review: draft
related: [control-signals, analog-signals, io-points, supervisory-controllers, natural-ventilation, energy-conservation-strategies, apogee-fln, bacnet, lonworks, rs-485, hydronic-system-control, laboratory-and-fume-hood-control, energy-savings-and-payback-calculations, measurement-and-verification, bas-sizing-calculations]
sources: []
---
A campus that spans six months to 200 years of buildings has every generation of heating, cooling and controls running at once, and individual buildings often contain several. Before deciding how to maintain, integrate, upgrade or replace anything, you need to know which generation you are looking at. This page describes each era, how to recognise it, what its controls can and cannot do, and what to check.

> This page is written from general knowledge, not from a manufacturer or campus document, and it is a first draft. The dates are approximate and vary by region, building type and owner. Treat the recognition clues as starting points and confirm against the equipment, nameplates and the campus's own as-builts and manuals. The pneumatic, steam and legacy-brand topics are planned as separate pages; see `docs/GAPS.md`.

## The eras at a glance

| Era | Approximate period | Heating and cooling | Controls | Typical supervision |
| :--- | :--- | :--- | :--- | :--- |
| 1. Gravity and manual | Before about the 1930s | Gravity steam or hot water, radiators, natural ventilation, coal or early oil firing | Manual valves, dampers and windows; early thermostats | None; an operator walks the building |
| 2. Pneumatic | About the 1930s to the 1980s, and still common | Central steam and chilled water, fan systems, mechanical cooling | Compressed-air thermostats, receiver-controllers, valve and damper operators | Gauges and chart recorders; a pneumatic panel board |
| 3. Analog electronic and early supervisory | About the 1960s to the 1980s | Same plants, with more automatic control | Solid-state analog controllers; time clocks; early computer-based energy management | Central panels with scheduling, monitoring and demand limiting |
| 4. Proprietary DDC | About the 1980s to the mid-1990s | Variable air volume spreads | Microprocessor controllers on vendor-specific networks | Vendor-specific workstation |
| 5. Open-protocol DDC | Mid-1990s to about 2010 | Variable speed pumping and fans become common | BACnet, LonWorks and Modbus, with gateways | Web and integration front ends |
| 6. Networked and analytics | About 2010 to now | Heat pumps, heat recovery, high-efficiency plants | Native BACnet/IP, wireless, secure networks, cloud analytics | Web graphics, analytics, remote access |

Eras overlap heavily. A 1960s building with its original steam and pneumatic controls might have a 1990s DDC front end on the air handlers and a 2020s VFD on a pump, which is the normal condition on a long-lived campus, not an exception.

## Era 1: gravity and manual systems

**What it is.** Heat from a central or building boiler flows to cast-iron radiators by gravity (steam rises, condensate returns by gravity), with no pumps or fans doing the primary work. Fresh air and cooling come from operable windows, transoms, ventilation shafts and the building's thermal mass. See [Natural ventilation](natural-ventilation.html) for the principles.

**How to recognise it.** Cast-iron radiators or wall and ceiling piping with manual valves, one large steam main with smaller branches, air vents on radiators, brick or masonry construction with tall windows and ventilation stacks, and little or no ductwork.

**Controls.** Mostly manual: hand valves, operator-adjusted boiler pressure, and windows. Thermostatic radiator valves and simple zone thermostats may have been added later. Many buildings of this era have since been retrofitted, so the original system is often partly hidden or removed.

**Considerations.**
- Such buildings are often protected, which limits what can be changed, penetrated or covered. Plan wireless sensing and minimally invasive upgrades.
- Steam traps and air vents are the main maintenance items, and failed traps waste a lot of energy.
- Insulation on old steam and hot water piping may contain asbestos; see the hazard table below.
- Added mechanical cooling and ductwork, if any, may sit beside a gravity heating system with no coordinated control, so heating and cooling can fight each other.

## Era 2: pneumatic control

**What it is.** The control signal is compressed air. A central air compressor and dryer supply a main air line (commonly about 15 to 20 psi), and controllers modulate a branch line pressure, usually 3 to 15 psi, that drives valve and damper actuators. A thermostat is a small air bleed mechanism that varies the pressure as temperature changes.

**How to recognise it.**
- An air compressor, often a duplex pair, with a dryer and filters in a mechanical room.
- Small-diameter tubing (often 1/4 inch, plastic or copper) running to valves, dampers and thermostats.
- Pairs of dial gauges reading roughly 0 to 30 psi, one for supply and one for output, on controllers and panel boards.
- Wall thermostats with two tubes and no wires.
- Diaphragm or piston operators on valves and dampers, and a hiss at the thermostat when it is working.

**How it works.** Main air is supplied to **thermostats**, **receiver-controllers** and relays. A heating valve might open over 3 to 8 psi and a cooling valve over 8 to 13 psi, so a single branch signal sequences them. **Transducers** convert between signals: an E/P (electric to pneumatic) lets a modern controller drive pneumatic actuators, and a P/E converts air pressure to an electrical signal for a modern controller to read. See [Control signals](control-signals.html) for the signal conventions that replaced it.

**What it can and cannot do.** It is proportional and, at best, has simple reset. It has no trending, scheduling beyond a time clock, alarms or remote visibility. Calibration drifts. Its strength is that it is simple, robust and understood by experienced technicians.

**Common faults.** Moisture and oil in the air (a failed dryer or compressor), leaks and kinked tubing, cracked diaphragms, restrictions in the small orifices, and thermostats out of calibration. Poor air quality causes most of the persistent problems.

**Considerations.**
- A pneumatic system is only as good as its air supply. Before judging the controls, check the compressor, dryer and the pressure and dryness of the air at the end of the line.
- Many pneumatic systems are hybrids: a DDC controller drives pneumatic actuators through E/P transducers, so the control is electronic but the final element is pneumatic. The air system still has to be kept up, and the actuator has no position feedback unless added.
- Pneumatic systems are often poorly calibrated and mismatched to current use, so simply recalibrating and repairing the air system can save energy before any controls investment.

## Era 3: analog electronic and early supervisory

**What it is.** Solid-state controllers using voltage or current signals (commonly 0 to 10 V or 4 to 20 mA, see [Analog signals](analog-signals.html)), often in panels with setpoint dials and indicator lights. Time clocks and, from the 1970s, early computer-based **energy management systems** did scheduling, start and stop, duty cycling and demand limiting for central plants, usually with little or no control of individual zones.

**How to recognise it.** Wall-mounted panels with analog controllers, potentiometer dials, relay racks and terminal strips; central consoles with text displays or early graphics; lighting and chiller start/stop under central control; stand-alone dial thermostats with electric connections.

**What it can and cannot do.** Better accuracy than pneumatic, with remote setpoints and scheduling. Limited points, little trending and typically no integration with later systems without gateways or replacement of the head-end.

## Era 4: proprietary DDC

**What it is.** Direct digital control puts a microprocessor controller on each air handler, terminal unit or plant, programmed with a control sequence and connected on a vendor-specific network. Variable air volume systems and their terminal controllers spread in this period.

**How to recognise it.** Metal or plastic controller enclosures with a vendor label, twisted-pair network wiring (often RS-485 or a vendor-specific bus), room sensors with communication jacks, and a PC front end running vendor software. Examples relevant here: Siemens introduced APOGEE in 1998 as the successor to Landis & Gyr System 600 (see [Siemens APOGEE](../product-line/apogee.html)), with its P1 [Floor Level Network](../protocol/apogee-fln.html) to terminal controllers and P2 network between panels; other vendors had their own buses, and the wiki's Siemens pages describe the Siemens family.

**What it can and cannot do.** Real trending, scheduling, alarms, setpoint reset and programmed sequences (Siemens uses PPCL, a text-based language). Limits: the protocol and tools belong to one vendor, so parts, software and expertise must come from that vendor, and integration with other systems needs a gateway. Programs are the only record of the sequence, and documentation is often lost.

**Considerations.**
- The software, workstation operating system and the licence may be as old as the controllers, so check for end-of-support and backups of the databases and programs.
- Spare parts for early panels get hard to source; decide whether to keep spares, replace on failure, or plan a phased upgrade. The wiki's product pages mark devices as legacy or end of life where it is known.
- Laboratory terminal controllers of this era also exist; see [Laboratory and fume hood control](laboratory-and-fume-hood-control.html) and the Phoenix Accel II and Celeris pages.

## Era 5: open-protocol DDC

**What it is.** BACnet was first published as an ASHRAE standard in the mid-1990s, and LonWorks and Modbus were also adopted widely, so controllers from different vendors could share data. In practice, integration still needed gateways and careful point mapping, and many "open" systems remained mostly single-vendor. Web-based front ends and integration platforms became common.

**How to recognise it.** Controllers labelled with BACnet or LON, MS/TP trunks, Ethernet ports, gateways, and a web-based graphical front end; see [BACnet](../protocol/bacnet.html), [BACnet MS/TP](../protocol/bacnet-mstp.html), [LonWorks](../protocol/lonworks.html) and [Supervisory controllers](supervisory-controllers.html).

**Considerations.** Check which protocol actually runs on each network, whether the BACnet implementation is complete (see [Reading a BACnet PICS](bacnet-pics.html)), and what the gateways translate. Device instance numbers and network numbers may conflict between systems installed by different contractors.

## Era 6: networked, wireless and analytics

**What it is.** Native BACnet/IP and MS/TP controllers, embedded sensors and variable speed drives with network connections, wireless devices ([EnOcean](../protocol/enocean.html) and similar), secure transport ([BACnet/SC](../protocol/bacnet-sc.html)), and analytics software that reads trended data to find faults and savings. Standardised sequences such as ASHRAE Guideline 36 (first published in 2018) appear in specifications.

**How to recognise it.** IP-connected controllers, HTML5 front ends, meters and drives on the network, and building data exported to analytics. Siemens Desigo and the current Phoenix platforms (Traccel and CSCP) belong here; see [Siemens Desigo](../product-line/desigo.html) and [Phoenix Traccel and CSCP](../product-line/phoenix-traccel-cscp.html).

**Considerations.** Cybersecurity and IT coordination matter as much as the controls themselves. Data quality (sensor calibration, point naming, time synchronisation) decides whether analytics are useful. Good commissioning and complete handover documentation are the best defence against the problems older systems have.

## Recognising what you have: a quick key

| What you see | It suggests | Check |
| :--- | :--- | :--- |
| Cast-iron radiators, steam mains, hand valves | Era 1, possibly with later additions | Traps, vents, insulation hazards, what controls (if any) were added |
| Air compressor and dryer; 1/4 inch tubing; paired 0 to 30 psi gauges | Era 2 pneumatic | Air quality, leaks, calibration, any E/P transducers |
| Thermostats with tubing and no wires | Pneumatic | Setpoint and calibration; whether a DDC overlay exists |
| Analog controller panels with dials, potentiometers and relay racks | Era 3 | Condition, spare parts, whether anything still talks to a head-end |
| Vendor-labelled controllers on a proprietary twisted-pair bus, vendor workstation | Era 4 | Vendor and generation, software support, backups |
| BACnet or LON labels, MS/TP trunk, gateways | Era 5 | Which protocol runs where, gateway mappings, device numbering |
| Ethernet controllers, web graphics, networked drives and meters | Era 6 | Network design, security, analytics, as-built documentation |
| New controls driving pneumatic valves through transducers | Hybrid | Air system health, transducer calibration, no position feedback |

A single mechanical room may show several rows. Record each system separately rather than labelling the building as one era.

## Hazards by era

Older equipment brings hazards that affect any maintenance or retrofit. Follow the campus's environmental health and safety procedures and applicable regulations, which this page does not replace.

| Hazard | Where it shows up |
| :--- | :--- |
| Asbestos | Insulation on older steam and hot water piping, boilers and ducts; some gaskets and panel materials |
| Mercury | Older thermostats and tilt switches, some pressure and flame sensors |
| Lead | Old paint on equipment and in older buildings |
| Ozone-depleting and older refrigerants | Older chillers and air conditioners; low-pressure and phased-out refrigerants have their own handling and reporting rules; see [Electric chillers](electric-chillers.html) |
| Stored energy and pressure | Pneumatic air receivers, steam lines and pressurised hot water |
| Electrical | Old wiring and panels, undocumented circuits, and legacy control panels that mix line and low voltage |

## What each era's controls can support

| Capability | 1 | 2 | 3 | 4 | 5 | 6 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Automatic temperature control | No | Yes | Yes | Yes | Yes | Yes |
| Scheduling | No | Time clock | Yes | Yes | Yes | Yes |
| Remote setpoints and monitoring | No | No | Limited | Vendor-specific | Yes | Yes |
| Trending and alarms | No | No | Limited | Yes | Yes | Yes |
| Integration across vendors | No | No | No | Gateways only | Partly | Yes |
| Analytics and fault detection | No | No | No | Limited | Limited | Yes |

This is why energy strategy differs by era. A pneumatic building's first gains are usually mechanical and metering (repair the air system, fix traps, recalibrate, add metering). A proprietary DDC building's first gains are usually in what the existing system can already do but is not set to (schedules, resets, trends). A current building's gains come from data and tuning. See [Energy conservation strategies](energy-conservation-strategies.html), and for turning measures into numbers, [Energy savings and payback calculations](energy-savings-and-payback-calculations.html) and [Measurement and verification](measurement-and-verification.html).

## Upgrade paths

Three broad approaches recur on a mixed campus, and they are often combined:

1. **Keep and maintain.** Appropriate where the system works, parts are available and the building's use is steady. Document it and fix the basics first.
2. **Overlay.** Add DDC to existing equipment, for example E/P transducers on pneumatic actuators, a gateway to bring a proprietary system into the main front end, or meters and sensors for monitoring. It is incremental and keeps most of the existing investment, but it carries over the weaknesses of the old equipment.
3. **Replace.** New controllers, and often new sensors and actuators, with a phased cutover. A common route for Siemens is from APOGEE to Desigo, moving the front end first, since Desigo CC can supervise APOGEE P2 panels while the field panels are replaced as they age; see [Siemens APOGEE](../product-line/apogee.html) and [Siemens Desigo](../product-line/desigo.html).

Decide per building and per system, based on condition, remaining life, parts and support, the building's mission (laboratories need reliable pressure control), and cost. Sizing the replacement work is covered on [BAS sizing calculations](bas-sizing-calculations.html).

## Surveying a building

For each building, record the information that lets you place it on this map, and keep it with the as-builts:

| Item | Why it matters |
| :--- | :--- |
| Systems present (steam, hot water, chilled water, air handling, terminal units) | The scope of controls |
| Era and type of control on each system | Capability and upgrade path |
| Vendor, model, firmware and software | Support and spare parts |
| Network and protocol, and the front end that sees it | Integration |
| Documentation available (as-builts, sequences, points, programs) | Cost and risk of changes |
| Condition and remaining life | Capital planning |
| Hazards present | Safety and cost |
| Energy metering present | What can be measured |

Where documentation is missing, the sequence can be recovered from the field: trace each loop from sensor to actuator, record the setpoints and the actual behaviour in trend data, and write it down as a sequence of operation. That record is worth more than any particular controller.
