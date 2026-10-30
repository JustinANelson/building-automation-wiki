---
id: tx-io-modules
type: product
title: Siemens TX-I/O Expansion Modules (TXM1.x / TXS1.x)
summary: Modular DIN-rail I/O expansion modules and power/bus supply units shared across Siemens Desigo (PXC4, PXC7, PXC100-E.D, PXC200-E.D) and APOGEE (PXC Modular, PXC36) field panels.
manufacturer: siemens
productLine: desigo
category: other
protocols: []
status: current
review: verified
images:
  - path: images/siemens/tx-io-modules.svg
    alt: Technical diagram of Siemens TX-I/O expansion modules (TXM1.8U-ML, TXM1.8X-ML, TXM1.6R-M, TXM1.8D, TXS1.12F10) showing Island Bus connector, LCD signal display, and local override switches
    source: Own work (BASWiki technical diagram based on Siemens TX-I/O data sheet CM2N8173 / A6V10068531 and A6V11272745)
    license: CC0-1.0
partNumbers:
  - number: TXM1.8D
    description: TX-I/O Digital Input Module, 8 digital/pulse inputs (status LEDs per channel)
    source: https://sid.siemens.com/v/u/A6V11272745
  - number: TXM1.16D
    description: TX-I/O Digital Input Module, 16 digital/pulse inputs (high density)
    source: https://sid.siemens.com/v/u/A6V11272745
  - number: TXM1.8U
    description: TX-I/O Universal I/O Module, 8 universal input/output points (DI, LG-Ni1000, NTC 10k/100k, Pt1000, 0-10V AI, 0-10V AO)
    source: https://sid.siemens.com/api/khub/documents/Wp276kwBxfKvIGrmhJ24Kg/content
  - number: TXM1.8U-ML
    description: TX-I/O Universal I/O Module, 8 universal I/O points with local manual override switches and LCD signal display
    source: https://sid.siemens.com/api/khub/documents/Wp276kwBxfKvIGrmhJ24Kg/content
  - number: TXM1.8X
    description: TX-I/O Super Universal I/O Module, 8 configurable points (adds 4-20 mA AI/AO and sensor supply to TXM1.8U capabilities)
    source: https://sid.siemens.com/v/u/A6V11272745
  - number: TXM1.8X-ML
    description: TX-I/O Super Universal I/O Module, 8 configurable points with local manual override switches and LCD signal display
    source: https://sid.siemens.com/v/u/A6V11272745
  - number: TXM1.6R
    description: TX-I/O Relay Output Module, 6 Form C (changeover) relay outputs (250 VAC, 4 A)
    source: https://sid.siemens.com/v/u/A6V11272745
  - number: TXM1.6R-M
    description: TX-I/O Relay Output Module, 6 Form C relay outputs with local manual override (HOA) switches
    source: https://sid.siemens.com/v/u/A6V11272745
  - number: TXM1.8P
    description: TX-I/O Resistance Thermometer Module, 8 Pt100 (4-wire) precision temperature inputs
    source: https://sid.siemens.com/v/u/A6V11272745
  - number: TXM1.8T
    description: TX-I/O Triac Output Module, 8 24 VAC solid-state triac outputs for floating or PWM thermal valve/damper actuators
    source: https://sid.siemens.com/v/u/A6V11272745
  - number: TXS1.12F10
    description: TX-I/O Power Supply and Bus Connection Module (24 VAC input, 24 VDC 1.2 A Island Bus and field sensor supply, 10 A fuse)
    source: https://sid.siemens.com/v/u/A6V11272745
  - number: TXS1.EF10
    description: TX-I/O Bus Connection Module with 10 A fuse for extending the Island Bus to additional DIN rails
    source: https://sid.siemens.com/v/u/A6V11272745
related: [desigo, apogee, pxc4, pxc7, pxc100-e-d, pxc200-e-d, pxc-modular, pxc-compact]
sources:
  - https://sid.siemens.com/api/khub/documents/Wp276kwBxfKvIGrmhJ24Kg/content
  - https://sid.siemens.com/v/u/A6V11272745
---
The **Siemens TX-I/O** (`TXM1.x` and `TXS1.x`, Data Sheet `CM2N8173` / `A6V10068531` and `A6V11272745`) is Siemens' modular DIN-rail input/output system shared across both **Desigo** (`PXC4`, `PXC7`, `PXC100-E.D`, `PXC200-E.D`) and **APOGEE** (`PXC Modular`, `PXC36-PEF.A`/`EF.A`) automation stations.

### Architecture & Serviceability Features
- **Self-Forming Island Bus**: When snapped side-by-side onto a standard 35 mm DIN rail, integrated side connectors automatically pass both the digital Island Bus communications and 24 VDC bus power from module to module without ribbon cables.
- **Pluggable Terminal Blocks & Electronics Cartridges**: Each `TXM1.x` module consists of a DIN-rail base with tiered, keyed screw terminals and a plug-in electronics housing (`64 × 98 × 70 mm`). A faulty electronics cartridge can be hot-swapped without disconnecting a single field wire.
- **Physical Address Keys**: Each module accepts a small numbered plastic address key (`1` to `64`) on the front faceplate. Replacing a module and transferring its address key automatically restores the exact point mapping and channel configuration from the host PXC controller.
- **Local Override & LCD Display (`-M` / `-ML` Suffix)**: Modules with `-M` or `-ML` suffixes provide per-channel manual override switches (Hand-Off-Auto / 0–100% potentiometer adjustment) and, on `-ML` models (`TXM1.8U-ML`, `TXM1.8X-ML`), a built-in LCD showing real-time engineering values (`°F`, `%`, `V`, `mA`, `Ω`) for commissioning and emergency manual operation.
