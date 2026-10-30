---
id: schneider-electric
type: manufacturer
title: Schneider Electric
summary: Multinational energy management and building automation corporation; developer of EcoStruxure Building Operation and owner of Viconics Technologies.
review: draft
related:
  - supervisory-controllers
  - viconics
  - viconics-room-controllers
  - vt7200
  - vt7300
  - vt7600
  - vt8350
  - vt8650
  - vz8250
sources:
  - https://www.se.com/
---

## Company Overview

**Schneider Electric** (headquartered in Rueil-Malmaison, France) is a global Fortune 500 energy management and industrial automation company. Through decades of strategic acquisitions—including Tour Andover Controls (TAC), Invensys Building Systems (Siebe, Robertshaw, Barber-Colman), Satchwell, and **Viconics Technologies**—Schneider Electric developed one of the largest installed bases of building management systems in the world.

## Building Automation Portfolio

### 1. Enterprise Software and Supervisory Hardware
- **EcoStruxure Building Operation (EBO)**: Schneider Electric's flagship native-BACnet enterprise supervisory platform (succeeding legacy TAC Vista, Andover Continuum, and Invensys I/A Series).
- **SpaceLogic Automation Servers (`AS-P` and `AS-B`)**: Modular DIN-rail supervisory controllers acting as BACnet Building Controllers (B-BC), routing BACnet/IP, BACnet MS/TP, and Modbus networks while hosting local graphics, schedules, and trends.

### 2. SpaceLogic Field Controllers
- **SpaceLogic RP-C (Room Purpose Controller)**: BACnet/IP and MS/TP room controllers managing HVAC, lighting, and motorized window blind sequences over native IP daisy chains with onboard Bluetooth commissioning.
- **SpaceLogic MP-C (Multi-Purpose Controller)**: High-density programmable controllers for central air-handling units and chiller/boiler plant control.

### 3. Viconics Technologies Acquisition
In 2011, Schneider Electric acquired Montreal-based **Viconics Technologies Inc.**, integrating its renowned communicating room controller lines into the Schneider portfolio:
- **[Viconics VT7000 Series](../product-line/viconics-room-controllers.html)**: Communicating digital thermostats ([VT7200](../product/vt7200.html), [VT7300](../product/vt7300.html), [VT7600](../product/vt7600.html)) providing pre-packaged sequence logic for zoning, heat pumps, fan coils, and rooftop units without requiring custom programming.
- **[Viconics VT8000 Series](../product-line/viconics-room-controllers.html)**: High-definition touchscreen room controllers ([VT8350](../product/vt8350.html), [VT8650](../product/vt8650.html), [VZ8250](../product/vz8250.html)) with integrated passive infrared (`PIR`) motion detectors, onboard $CO_2$ sensors, and wireless ZigBee mesh connectivity (marketed under both Viconics and Schneider Electric SpaceLogic brands).

### 4. Field Devices and Variable Speed Drives
- **Schneider Electric Valves and Actuators**: Globe valves, ball valves, and electric/pneumatic actuators for hydronic control.
- **Altivar™ Variable Speed Drives**: The Altivar 212 (`ATV212`) and Altivar 600 series VFDs optimized for HVAC centrifugal fans and pumps with embedded BACnet MS/TP and Modbus RTU communication.


## How the Portfolio Fits Together

This section is an overview drawn from the product-line and concept pages in this wiki.

Schneider Electric's building controls follow the usual three tiers; see [Supervisory controllers](../concept/supervisory-controllers.html).

| Tier | Products | Role |
| :--- | :--- | :--- |
| Management | EcoStruxure Building Operation | Graphics, alarms, history and reports across buildings |
| Supervisory | SpaceLogic Automation Servers | B-BC controllers that route BACnet/IP, MS/TP and Modbus and host schedules and trends |
| Field | SpaceLogic RP-C and MP-C, and Viconics VT7000 and VT8000 room controllers | Run the room, air handler or plant |

**Two controller families.** SpaceLogic controllers are built around Schneider's own platform and programming, while the Viconics controllers are pre-packaged room controllers that need configuration and not programming. A building may have both, with Viconics devices on a BACnet MS/TP or Zigbee network and the Automation Server as their router and supervisor. See [Viconics](viconics.html) for the model selection.

**Third-party equipment.** Schneider's supervisory hardware integrates other vendors' BACnet and Modbus devices, so a chiller, drive or meter can be brought in through an Automation Server; see [Modbus](../protocol/modbus.html) and [BACnet](../protocol/bacnet.html). Altivar drives with embedded BACnet MS/TP or Modbus RTU can connect to the same trunk as other devices; apply the usual RS-485 rules.
