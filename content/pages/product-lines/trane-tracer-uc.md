---
id: trane-tracer-uc
type: product-line
title: Trane Tracer UC Series
summary: BACnet MS/TP programmable unit and terminal equipment controllers for VAV boxes, fan coils, unit ventilators, and water-source heat pumps.
manufacturer: trane
category: controller
protocols:
  - bacnet
  - bacnet-ip
  - bacnet-mstp
status: current
review: draft
related:
  - bacnet-mstp
  - symbio-210
  - symbio-500
  - symbio-700
  - tracer-sc-plus
  - tracer-tu
  - trane
  - trane-symbio
  - uc400
  - vav-control
---

## Overview

The **Trane Tracer® UC Series** is Trane's family of open-protocol direct digital controllers (DDC) engineered to provide standalone and networked control for HVAC terminal units, unitary equipment, and central systems. Communicating over **BACnet MS/TP** (EIA-485) and **BACnet/IP**, the Tracer UC family succeeded Trane's legacy Comm4 and Tracer Summit generations, providing interoperability with both Trane supervisory systems ([Tracer SC+](../product/tracer-sc-plus.html)) and third-party building automation systems.

Detailed across Trane catalog documentation `BAS-PRC033-EN` and operation manuals `BAS-SVX065F-EN` and `BAS-SVX20K-EN`, the UC series bridges pre-packaged factory equipment configurations with full field programmability.

## Controller Lineup

- **[Tracer UC400](../product/uc400.html) (Universal Equipment Controller)**: The flagship general-purpose programmable unit controller in the UC family. Features **23 onboard I/O points** (5 analog inputs, 2 universal inputs, 3 binary inputs, 3 binary relay outputs, 6 binary triac outputs, and 4 analog outputs), expandable up to **55 physical I/O points** via XM expansion modules. Commonly deployed on water-source heat pumps (WSHP), fan coils, blower coils, and small air handlers.
- **Tracer UC210 (VAV Terminal Controller)**: Dedicated pressure-independent variable air volume controller featuring an onboard differential pressure velocity sensor and integrated floating/modulating damper actuator for single-duct and dual-duct VAV terminal boxes.
- **Tracer UC600 (High-Density Equipment Controller)**: Modular DDC controller designed for custom central station air handlers, multizone units, and central mechanical plant sub-loops requiring large I/O counts.

## Key Architecture and Features

- **Dual Control Modality**: Each UC controller can be deployed using pre-engineered, factory-tested equipment sequences (selected via configuration profiles for rapid commissioning) or customized with arbitrary algorithmic control logic created in **Tracer Graphical Programming (TGP2)**.
- **Onboard Historical Trend Storage**: Includes non-volatile memory storing up to **25,000 trend samples** locally on the controller, enabling high-resolution performance analysis and fault troubleshooting even during network outages.
- **I/O Expansion Capability**: Using the local expansion bus, controllers accept Trane XM-series expansion modules (including the `XM30`, `XM32`, `XM70`, and `XM90`) to expand binary and analog capacity up to 55 physical channels.
- **Life Safety / Smoke Control Listing**: Rated and certified under **UL-864 / UUKL** for dedicated and non-dedicated engineered smoke control systems when applied per Trane application guide `BAS-APG019-EN`.
- **Field Service and Balancing**: Managed, commissioned, and balanced using the Windows-based [Tracer TU Service Tool](../product/tracer-tu.html) through a local mini-USB port, space sensor communication jack, wireless adapter, or routed via a [Tracer SC+](../product/tracer-sc-plus.html) building automation panel.
- **Succession by Symbio**: For new commercial installations, the Tracer UC family is complemented and succeeded by the [Trane Symbio](../product-line/trane-symbio.html) product line ([Symbio 210](../product/symbio-210.html), [Symbio 500](../product/symbio-500.html), [Symbio 700](../product/symbio-700.html), and [Symbio 800](../product/symbio-800.html)).


## Applying the UC Controllers

This section is an overview drawn from the other pages in this wiki.

**Which controller.** Use the UC210 where a VAV box is the load, since the sensor and actuator are built in; see [VAV control](../concept/vav-control.html). Use the UC400 for fan coils, blower coils, small air handlers and water-source heat pumps, and the UC600 where the point count is large.

**Profiles versus programming.** The factory profiles are the fastest route and are tested; use graphical programming only when a sequence is not covered. Programmed logic must be documented and backed up, because a replacement controller has no profile to fall back on.

**Heat pump example.** The UC400's sequences for backup heat, coil icing, compressor protection and waterside economizer are summarised on [Heat pumps](../concept/heat-pumps.html).

**Network and commissioning.** Controllers sit on a BACnet MS/TP trunk under a supervisory controller, with addresses and baud rate set to match; see [BACnet MS/TP](../protocol/bacnet-mstp.html) and [RS-485](../concept/rs-485.html). Commission with Tracer TU, check I/O points against [I/O points](../concept/io-points.html) conventions, and confirm the controller's BACnet capabilities against its PICS; see [Reading a BACnet PICS](../concept/bacnet-pics.html).

**Smoke control.** The UL 864 UUKL listing applies only when the controller is applied as the Trane application guide describes. Do not assume a standard controller is listed for smoke control.
