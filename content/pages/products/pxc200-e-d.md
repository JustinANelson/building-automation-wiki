---
id: pxc200-e-d
type: product
title: Siemens Desigo PXC200-E.D
summary: Highest-capacity Desigo PX modular BACnet/IP building automation station supporting up to 350 physical TX-I/O points and 1,000 total points.
manufacturer: siemens
productLine: desigo
category: controller
protocols: [bacnet, bacnet-ip]
status: current
review: needs-review
partNumbers:
  - number: PXC200-E.D
    description: Desigo PX modular automation station, BACnet/IP (B-BC profile), supports up to 350 physical TX-I/O points and 1,000 total points with TX Open modules
    source: https://sid.siemens.com/v/u/A6V11272745
sources:
  - https://sid.siemens.com/v/u/A6V11272745
related:
  - bacnet
  - bacnet-ip
  - desigo
  - desigo-cc
  - field-panels-and-enclosures
  - io-points
  - pxc-compact
  - pxc-modular
  - pxc100-e-d
  - pxc4
  - pxc5
  - pxc7
  - supervisory-controllers
  - tx-io-modules
---

## Overview

The **Siemens Desigo PXC200-E.D** is the highest-capacity modular BACnet/IP automation station in the Desigo PX family. Certified by the BACnet Testing Laboratories (BTL) as a **BACnet Building Controller (B-BC)** and compliant with AMEV AS-A and AS-B standards, the PXC200-E.D is designed for large central HVAC plants, multi-AHU mechanical rooms, and campus energy distribution systems.

While sharing the same physical footprint and Motorola PowerPC architecture as the PXC100-E.D, the PXC200-E.D firmware allocates expanded database limits to manage up to **350 physical TX-I/O points** and up to **1,000 total data points** (including third-party Modbus and M-Bus integrations).

## Architecture and Expansion Capabilities

- **Island Bus I/O**: Direct high-speed connection to modular [TX-I/O terminal slices](../product/tx-io-modules.html), including digital inputs (`TXM1.8D`, `TXM1.16D`), universal inputs/outputs (`TXM1.8U`), super universal modules (`TXM1.8X`), relay outputs (`TXM1.6R`), 4-wire RTD modules (`TXM1.8P`), and triac outputs (`TXM1.8T`).
- **Island Bus Extender (`TXA1.IBE`)**: Enables remote DIN-rail I/O rows (detached I/O islands) up to `200 m` away via shielded twisted-pair wiring.
- **LonWorks Device Integration (`PXX-L11` / `PXX-L12`)**: Optional expansion modules integrate up to `60` (`PXX-L11`) or `120` (`PXX-L12`) LonMark-compatible devices into the controller database.
- **TX Open Integration (`TXI2.OPEN` / `TXI2-S.OPEN`)**: Connects third-party field buses such as Modbus RTU or M-Bus meters directly into the DDC database (up to `160` data points per full module, with up to `5` TX Open modules supported).

## Technical Specifications

- **Processor**: Motorola PowerPC MPC885.
- **Memory**: `64 MB` SDRAM / `32 MB` FLASH (`96 MB` total system memory).
- **Power Supply**: `AC 24 V` ($\pm 20\%$, SELV/PELV) or Class 2 (US), `50/60 Hz`, energy consumption `24 VA` max, internal `5 A` fuse.
- **Ethernet Interface**: 10/100Base-T RJ45 jack with auto-negotiation, maximum distance `100 m` on CAT5 UTP/STP cable.
- **Backup Power**:
  - *Real-time Clock*: Field-replaceable lithium coin cell `CR2032` (10-year cumulative life).
  - *SDRAM Memory*: Field-replaceable `1x AA` lithium battery `FR6` for zero-power data retention.
- **Mechanical Mounting**: Snaps onto standard `35 mm` DIN rail (EN 50022-35 x 7.5) or wall-mounted via screw ears; dimensions `192 mm` wide $\times$ `96 mm` high $\times$ `74 mm` deep.
- **Operating Environment**: `0 to 50 °C` (`32 to 122 °F`), `5 to 95% RH` non-condensing, IP20 enclosure protection.

## Engineering and Operator Interfaces

- **Engineering Software**: Programmed via **Desigo Xworks Plus** using the graphical D-MAP language (conforming closely to IEC 61131-2 function block architectures).
- **Local HMI**: Dedicated front RJ45 port for connecting a handheld `PXM10` local operating unit or `PXM20-E` network operator unit.
- **Touch Panels**: Directly interfaces with BACnet/IP Desigo Control Point touch panels (`PXM30.E` 7.0", `PXM40.E` 10.1", and `PXM50.E` 15.6") or Web servers (`PXA40-W1` option card).
