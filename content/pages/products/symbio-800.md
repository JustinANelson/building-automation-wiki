---
id: symbio-800
type: product
title: Trane Symbio 800 Equipment Controller
summary: High-performance programmable controller for Trane chillers, large air handlers, and IntelliPak commercial rooftop units.
manufacturer: trane
productLine: trane-symbio
category: controller
protocols:
  - bacnet
  - bacnet-ip
  - bacnet-mstp
status: current
review: needs-review
partNumbers:
  - number: X13651678002
    description: Symbio 800 programmable equipment controller, ARM Cortex-A9 dual-core, UL-864/UUKL listed
    source: https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Product%20Data/BAS-PRD041E-EN_06302026.pdf
sources:
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Product%20Data/BAS-PRD041E-EN_06302026.pdf
  - https://elibrary.tranetechnologies.com/public/commercial-hvac/Literature/Sales/BAS-SLB145-EN_02012024.pdf
  - https://www.trane.com/commercial/north-america/us/en/products-systems/smart-building-technology/symbio.html
related:
  - bacnet-ip
  - bacnet-mstp
  - discharge-air-temperature-reset
  - hydronic-system-control
  - symbio-500
  - symbio-700
  - tracer-sc-plus
  - tracer-tu
  - trane-symbio
---

## Overview

The **Trane Symbio™ 800** is Trane's flagship unit and equipment controller engineered for factory and field control of water-cooled and air-cooled chillers (CenTraVac™, Series R™), custom central-station air handlers, and IntelliPak™ commercial packaged rooftop units. Documented in Trane product data sheet `BAS-PRD041E-EN` (June 2026 revision) and cybersecurity brochure `BAS-SLB145-EN`, the Symbio 800 is certified by BTL as a **BACnet Advanced Application Controller (B-AAC)**.

The controller combines high-performance multi-core computing hardware with expandable I/O capacity, automated configuration backups, and integrated cybersecurity protocols.

## Hardware Architecture and Specifications

- **Processor**: High-speed **ARM® Cortex®-A9 Dual-Core** application processor.
- **System Memory**: `1 GB` DDR3 SDRAM and `4 GB` onboard eMMC FLASH memory.
- **Power Requirement**: `24 VDC` ($\pm 15\%$), `400 mA` maximum operating current.
- **Real-Time Clock**: Onboard battery-backed real-time clock powered by a field-replaceable `BR2032` lithium coin cell with a `10-year` operating life.
- **Enclosure and Dimensions**: Compact IP3X housing measuring `5.65 in` (`143.6 mm`) high $\times$ `4.00 in` (`101.6 mm`) wide $\times$ `2.40 in` (`60.8 mm`) deep, weighing `1.3 lb` (`0.6 kg`).
- **Environmental Ratings**: Operating temperature range from `-40 °F to 158 °F` (`-40 °C to 70 °C`), `5% to 95% RH` non-condensing.
- **Agency Listings**:
  - `UL-864 / UUKL`: Listed for dedicated and non-dedicated engineered smoke control systems when applied per Trane application guide `BAS-APG040*-EN`.
  - `UL916 PAZX`: Open Energy Management Equipment standard.
  - `UL94-5VA`: Fire-retardant enclosure flammability rating.
  - `FCC Part 15, Subpart B, Class B Limit` & CE compliance.

## Input/Output Scalability

While the core Symbio 800 module functions as the high-speed processing and communications hub, physical field points are hosted on connected Trane XM expansion slices:

- **Expansion Modules Supported**: Interoperates with combinations of `XM30`, `XM32`, `XM70`, and `XM90` I/O slices.
- **Termination Capacity**: Supports up to **500 combined physical I/O terminations** across the local expansion bus, accommodating complex multi-stage chiller plants and multi-path air handling systems.

## Communications and Operator Access

- **Multi-Protocol BACnet Integration**: Connects over native **BACnet/IP** (dual Ethernet ports with daisy-chain ring support), **BACnet MS/TP** (RS-485), and **BACnet/Zigbee** (Air-Fi™ wireless mesh).
- **Modbus Compatibility**: Supports Modbus RTU and Modbus TCP master/slave register polling.
- **Trane TD-7 Touchscreen Display**: Direct connection to the 7-inch full-color optical touchscreen display for equipment status monitoring, setpoint adjustment, and graphical trend viewing at the unit.
- **Service and Commissioning**: Programmed, trended, and configured using the [Tracer TU Service Tool](../product/tracer-tu.html) over direct USB, local Wi-Fi module, or secure cloud-routed [Trane Connect™](https://www.trane.com/) remote access.
