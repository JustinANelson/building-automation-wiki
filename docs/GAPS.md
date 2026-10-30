# Gaps and roadmap

What the wiki still needs to be a one-stop reference for understanding the building automation and HVAC systems on a mixed-age campus, and for planning maintenance and capital work. Last updated 2026-10-30.

## Who this is for

An energy manager and former DDC controls technician who works on both maintenance and capital projects. Installed systems are primarily Siemens, with Phoenix Controls in the laboratories. The campus runs from buildings six months old to about 200 years old, with HVAC and controls spanning the same range. That makes this mostly a legacy, integration and migration problem, with modern-building content a secondary need.

## Current coverage (summary)

- **Strong:** protocols (BACnet family, Modbus, KNX, LonWorks, EnOcean, APOGEE FLN), sensors and field devices, VFDs, electric and absorption chillers, efficiency metrics, and a set of standard calculation pages.
- **Siemens:** 22 product pages (APOGEE panels and terminal controllers, Desigo stations, TX-I/O, DXR2, Insight, Desigo CC, OpenAir actuators, Acvatix zone valves).
- **Phoenix Controls:** 5 product pages (Accel II/Celeris, Traccel, CSCP valves, Programmable BACnet Controller, FHD500).
- **Quality:** every concept page is `review: draft`. Only product pages with part numbers read from cited documents are `verified`.

## Priority 1: legacy and mixed-age campus

Status key: `[ ]` not started, `[~]` in progress, `[x]` drafted (still needs review).

- [x] **HVAC and controls through the eras, with field identification.** First draft: `content/pages/concepts/hvac-and-controls-through-the-eras.md`. Needs verification against the campus's own equipment and documents.
- [x] **Pneumatic control systems.** First draft: `content/pages/concepts/pneumatic-control-systems.md`, built on Siemens Technical Instructions 155-002 and a University of Florida control-air standard. Needs a check against campus equipment. Air supply and dryers, thermostats, receiver-controllers, valves and damper operators, E/P and P/E transducers, calibration, troubleshooting, and hybrid pneumatic-plus-DDC arrangements.
- [x] **Steam heating and historic-building systems.** First draft: `content/pages/concepts/steam-heating-systems.md`, built on DOE Steam Tip Sheet #1, NPS Preservation Brief 24 and a two-pipe steam article. Needs a check against campus equipment. Steam distribution, traps, one- and two-pipe systems, condensate, radiators, unit heaters, heating-plant controls, and preservation constraints (limited space and penetrations, wireless sensing, natural ventilation).
- [x] **Siemens heritage and migration.** First draft: `content/pages/concepts/siemens-apogee-to-desigo-migration.md`, built on the Desigo CC data sheet, Insight and PXC data sheets, and Desigo CC engineering help. Needs a check with Siemens for the installed versions. PPCL and older Siemens controllers, an APOGEE-to-Desigo migration plan done in phases, Insight to Desigo CC, and P1 FLN to MS/TP, with a replacement matrix (the "supersession graph" from the design roadmap).
- [ ] **Other manufacturers' legacy lines**, once the campus's actual brands are known (candidates: Johnson Controls, Honeywell, Barber-Colman, Tridium Niagara integrators, Andover).
- [ ] **Multi-vendor integration.** Pre-BACnet protocols (N2, LON, vendor-proprietary), gateways, integration platforms, and a legacy-readiness checklist for deciding what to integrate and what to replace.
- [x] **Phoenix Controls depth.** First draft: `content/pages/concepts/phoenix-controls-generations-and-upgrades.md` (vintages, Celeris 2 upgrade, CSCP parts, integration, troubleshooting), built on Phoenix document MKT-0269 and the PBC, ACM/FSM and FHD500 documents. Needs a check with Phoenix or Honeywell. Peripherals (sash and face-velocity sensors, presence sensors, fail-safe modules), commissioning and calibration, mapping Phoenix points into APOGEE and Desigo, and a symptom-to-cause troubleshooting guide. Earlier generations of Accel.
- [x] **Laboratory ventilation strategy.** First draft: `content/pages/concepts/laboratory-ventilation-strategy.md`, built on the CU Boulder Labs21 presentation and the I2SL demand-based control guide. Needs sign-off from environmental health and safety before anyone acts on it. Air-change-rate and occupancy setback, hood sash management, and a risk assessment before reducing ACH.

## Priority 2: maintenance and capital-project workflows

- [ ] Symptom-based troubleshooting by equipment type (VAV, air handler, chilled water, lab).
- [ ] Preventive maintenance schedules and sensor calibration procedures.
- [ ] Reading and checking an inherited program (PPCL, graphical programs).
- [ ] Obsolescence and spare-parts planning.
- [ ] Specification and submittal checklists (Division 23 09 xx), point lists, and I/O summaries.
- [ ] Sequence-of-operation writing, with a template library, and the full ASHRAE Guideline 36 sequence set.
- [ ] Functional test scripts and a commissioning process.
- [ ] Graphics, alarm-management and point-naming standards (Brick or Haystack metadata).
- [ ] Controls cybersecurity and IT/OT coordination (VLANs, BBMD, certificates, remote access).
- [ ] Per-point cost and effort estimating.
- [ ] Recovering lost documentation: surveying a building with no as-builts and reverse-engineering sequences from the field.

## Priority 3: equipment and systems still missing

- [x] Cooling towers and heat exchangers (drafted by another agent; needs review).
- [ ] Boilers (hot water and steam), converters, condensate and pressure-reducing stations.
- [ ] Heat recovery: wheels, run-around coils, laboratory exhaust energy recovery.
- [ ] Air handler types and sequences (single-zone, multizone, dedicated outdoor air, 100% outdoor air for labs).
- [ ] Humidifiers, unit heaters, fan coils, radiant systems, VRF.
- [ ] Life-safety interfaces: smoke control, fire alarm integration, NFPA references, UL 864 listings.
- [ ] Missing sensor types: flow meters (magnetic, ultrasonic), BTU meters, power meters, level sensors, and gas, refrigerant, leak and particle monitors.
- [ ] Network devices (BACnet routers, gateways) and the diagnostic tools actually used (BACnet explorers, packet capture).

## Priority 4: energy-manager and capital planning

- [ ] A **retrofit ladder** by vintage: the best first and next move for each control generation, from adding metering to a pneumatic building through analytics on a new one.
- [ ] **Remaining life and repair-versus-replace**, with published equipment service-life data.
- [ ] Utility bills and rate structures, with a worked example.
- [ ] Benchmarking with ENERGY STAR Portfolio Manager.
- [ ] Energy code and standards compliance (ASHRAE 90.1 controls requirements, building performance standards).
- [ ] Audits, retro-commissioning, and fault detection and diagnostics, with example rules.
- [ ] Demand response and peak management.
- [ ] Electrification, heat recovery chillers and thermal storage.
- [ ] Incentives, carbon accounting, refrigerant regulations (AIM Act).
- [ ] Persistence tracking after projects.
- [ ] Special environments: collections and archives, if present.

## Gaps in the wiki itself

- All concept pages are still `draft`; the calculation pages are explicitly unchecked against the standards.
- Siemens documents are largely downloaded but the Siemens site blocked automated access earlier (HTTP 403), so the APOGEE and Desigo manuals are incomplete. Phoenix has 9 documents.
- Missing features: a glossary and acronym list, a standards index (ASHRAE 135, 90.1, 62.1, 55, 15, 36; NFPA 45 and 90A; ANSI Z9.5; UL 864), browsing by category, an installed-base view (list what the campus has and see only the relevant pages), and a printable or offline guide for mechanical rooms.
- Effort so far has gone partly to vendors that probably matter less (Trane, York, Viconics, Vaisala, Belimo). Treat further work on them as low priority.

## Sourcing plan

The wiki's rule is that facts come from cited documents, and legacy manuals are scarce online. The campus's own O&M manuals, submittals, as-builts and equipment photos are the best sources. Scanned documents placed in `downloads/` can be ingested (`npm start -- ingest`) and cited from `content/library.yaml`. Until then, legacy pages are written from general knowledge, marked as such, and must be checked against the equipment on site.

## Open questions

1. Which legacy brands and generations are on campus (pneumatic, Johnson Controls, Honeywell, older Siemens)? By building if possible.
2. Is there central steam, and do any buildings hold collections or archives?
3. Where does time go: maintenance calls or capital design reviews? That decides whether troubleshooting or specification content comes first.
