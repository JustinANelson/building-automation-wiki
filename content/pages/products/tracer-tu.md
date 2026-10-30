---
id: tracer-tu
type: product
title: Trane Tracer TU Service Tool
summary: Windows commissioning, service, and programming tool for Trane Symbio, Tracer UC, and BCI controllers.
manufacturer: trane
productLine: trane-symbio
category: software
status: current
review: needs-review
partNumbers:
  - number: X45091719001
    description: Tracer TU 1-year Standard Edition software license (software only)
    source: https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Product%20Data/BAS-PRD049C-EN_09132024.pdf
sources:
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Product%20Data/BAS-PRD049C-EN_09132024.pdf
related:
  - symbio-210
  - symbio-500
  - symbio-700
  - symbio-800
  - tracer-sc-plus
  - trane-symbio
  - trane-tracer-uc
  - uc400
  - vav-control
---

## Overview

**Tracer® TU** is Trane's primary Windows service and commissioning software tool for configuring, programming, diagnostic troubleshooting, and servicing Trane BACnet® field controllers, unit controllers, and supervisory panels. Verified in product data sheet `BAS-PRD049C-EN` (September 2024 revision), Tracer TU Standard Edition provides field technicians and balancing contractors with direct access to controller points, factory sequences, and custom graphical programming.

## Supported Controller Families

Tracer TU Standard Edition supports Trane's current and legacy controller lines:

- **Trane Symbio Family**:
  - [Symbio 210](../product/symbio-210.html) programmable terminal unit controller.
  - Symbio 400B unit controller.
  - [Symbio 500](../product/symbio-500.html) programmable unit controller for air handlers and central systems.
  - [Symbio 700](../product/symbio-700.html) unit controller for packaged rooftop units and split systems.
  - [Symbio 800](../product/symbio-800.html) unit controller for IntelliPak™ commercial rooftop systems.
- **Tracer UC Family**:
  - Tracer UC210 programmable VAV terminal controller.
  - [Tracer UC400](../product/uc400.html) programmable equipment controller (WSHP, fan-coil, blower coil).
  - Tracer UC600 high-density programmable controller.
- **BACnet Communication Interfaces**:
  - BCI-R and BCI2-R (ReliaTel™ rooftop interface).
  - BCI-I and BCI2-I (IntelliPak interface).
- **Supervisory Panels**:
  - Tracer SC and [Tracer SC+](../product/tracer-sc-plus.html) building automation system controllers (pass-through configuration and network discovery).

## Key Capabilities and Workflows

- **Air and Water Balancing**: Automated procedures to calibrate and balance VAV box terminal airflow pickups, reheat water valves, and variable-speed electronically commutated (ECM) fan motors.
- **Configuration and TGP2 Programming**: Creation and editing of factory packaged equipment sequences or custom **Tracer Graphical Programming (TGP2)** logic routines for VAV boxes, fan coils, unit ventilators, and water-source heat pumps.
- **Firmware Maintenance**: Flashing field controller firmware and applying application personalities (such as installing factory IntelliPak application firmware onto a blank Symbio 800 service replacement module).
- **Modbus Integration Mapping**: Generating, viewing, and customizing onboard Modbus Server register tables for Symbio 400B, 500, 700, and 800 controllers to facilitate third-party SCADA or BMS integration.
- **Point Overrides and Diagnostics**: Real-time inspection of hardware I/O channels, forcing analog and binary states for commissioning verification, and viewing controller alarms and event histories.
- **Schedule and Display Configuration**: Setup of 7-day occupancy schedules, holiday calendars, and formatting graphics for Trane TD-7 high-definition color touchscreen displays.

## Connection Methods

1. **Direct USB Cable**: Connects directly from a technician laptop's USB port to the dedicated USB mini/type-B port on the controller front fascia.
2. **Tracer SC / SC+ Pass-Through**: Allows servicing of any subordinate MS/TP or IP field controller across the building network via the supervisory Tracer SC/SC+ panel without physically visiting individual ceiling plenums.
3. **Tracer TU Wireless Adapter**: Provides local Wi-Fi connectivity between the laptop and controller.
4. **Trane Connect Remote Access**: Cloud-routed secure remote connection to Tracer SC, Tracer SC+, Symbio 700, and Symbio 800 controllers over the internet.
5. **Zone Sensor Service Jack**: Direct communication through the RJ-11/RJ-45 service port located on compatible Trane space temperature sensors.

## PC and Operating System Requirements

- **Operating System**: Windows 10 Version 1709 (Fall Creators Update) or later, 32-bit or 64-bit.
- **Hardware**: Minimum `8 GB` RAM (`16 GB` recommended); `1024 x 768` minimum screen resolution; `10/100` Ethernet NIC; available USB 2.0 port; 7200-RPM hard disk drive or solid-state drive (SSD).
- **Software Dependencies**: Microsoft .NET Framework `4.8` or later; Visual C++ Redistributable for Visual Studio 2015, 2017, and 2019 (`V14.2`, required for TGP2 and Trane Legacy USB driver); Visual C++ 9.0 (auto-installed for AFD3 USB driver).
