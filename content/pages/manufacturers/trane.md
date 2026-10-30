---
id: trane
type: manufacturer
title: Trane
summary: HVAC OEM with its own building automation and equipment controls lines (Tracer SC+ system controller, Symbio 210/500/700/800 equipment controllers, Tracer UC400, and Tracer TU).
review: verified
related: [trane-symbio, trane-tracer-uc, tracer-sc-plus, symbio-210, symbio-500, symbio-700, symbio-800, uc400, tracer-tu]
sources:
  - https://www.trane.com/commercial/north-america/us/en/products-systems/smart-building-technology/symbio.html
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/controls/building-management/Tracer-SC/BAS-PRD038K-EN_08012022.pdf
  - https://documents.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/vav-systems/BAS-PRD043A-EN_06152021.pdf
---
Trane (a brand of Trane Technologies) supplies commercial HVAC equipment (IntelliPak and Precedent rooftop units, Odyssey split systems, CenTraVac centrifugal chillers, Series R screw chillers, and VAV terminal units) with factory-mounted DDC controllers as well as supervisory building automation controllers.

### Major Control Families
- **Supervisory System Controller**: **Tracer SC+** (`X13651695001`, literature `BAS-PRD038K-EN` and `BAS-SLB086-EN`) with embedded Tracer Synchrony HTML5 web UI, BTL-listed BACnet Building Controller (`B-BC`) profile, BACnet/IP, BACnet MS/TP, Air-Fi wireless (`BACnet/Zigbee`), and optional LonTalk (`X13651698001` U60 module).
- **Symbio Equipment & Terminal Controllers (Current)**: **Symbio 800** (`X13651678002`, chillers and large air handlers), **Symbio 700** (`MOD04045` / `MOD03107`, Precedent packaged rooftops and Odyssey split systems), **Symbio 500** (`BMUC500AAA0100010`, programmable air handler and WSHP controller), and **Symbio 210 / 210e** (`BMSY210...`, single-duct VAV terminal controller for BACnet MS/TP or BACnet/IP).
- **Tracer UC Programmable Controllers & Service Tools**: **Tracer UC400** (`BMUC400AAA0100001`) and **Tracer TU** (`X13651595010` USB service adapter and software).


### How the Controls Fit Together

This section is an overview drawn from the product-line and concept pages in this wiki.

Trane's controls are organised around its equipment. Most Trane rooftops, chillers, air handlers and VAV units ship with a factory-mounted controller, so a building's equipment controllers are largely decided by which Trane equipment is installed.

| Layer | Products | Role |
| :--- | :--- | :--- |
| System | [Tracer SC+](../product/tracer-sc-plus.html) | Supervisory B-BC controller with a built-in web interface; schedules, trends and alarms for the equipment below it |
| Equipment | [Symbio 800](../product/symbio-800.html), [700](../product/symbio-700.html), [500](../product/symbio-500.html) and [210](../product/symbio-210.html), [UC400](../product/uc400.html) | Run a chiller, rooftop, air handler, heat pump or VAV box |
| Service | [Tracer TU](../product/tracer-tu.html) | Software and USB adapter used to commission and troubleshoot the controllers |

**Integration.** The controllers speak BACnet (MS/TP or IP), so Trane equipment can be connected to a third-party front end such as Desigo CC or Insight without a gateway. Tracer SC+ also supports an optional LonTalk module and Air-Fi wireless links between devices. A building that already has another vendor's supervisory system usually connects Trane equipment as BACnet devices and leaves the Trane controllers to run their own sequences.

**What to check.** Confirm the controller model and firmware against the BACnet PICS before integration; see [Reading a BACnet PICS](../concept/bacnet-pics.html). For water-source heat pumps see [Heat pumps](../concept/heat-pumps.html), where the UC400 sequences are described, and for the supervisor's role see [Supervisory controllers](../concept/supervisory-controllers.html).
