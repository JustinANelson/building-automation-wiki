---
id: symbio-700
type: product
title: Trane Symbio 700 Equipment Controller
summary: Factory-mounted packaged rooftop (Precedent) and split-system (Odyssey) unit controller with onboard 2x16 backlit LCD, Bluetooth app pairing, and BACnet MS/TP, BACnet/IP, Air-Fi, or LonTalk integration.
manufacturer: trane
productLine: trane-symbio
category: packaged-unit-controller
protocols: [bacnet, bacnet-ip, bacnet-mstp, lonworks]
status: current
review: verified
images:
  - path: images/trane/symbio-700.svg
    alt: Technical diagram of Trane Symbio 700 equipment controller showing 2x16 backlit LCD user interface, BACnet rotary address dials, Bluetooth pairing button, and field connectors J16 through J23
    source: Own work (BASWiki technical diagram based on Trane Symbio 700 Application Guide ACC-APG001A-EN)
    license: CC0-1.0
partNumbers:
  - number: MOD04045
    description: Trane Service First replacement Symbio 700 unit controller board module (supersedes MOD03107)
    source: https://www.tranesupply.com/product/mod03107/01t4w00000OwuLRAAZ
  - number: MOD03107
    description: Trane Service First Symbio 700 unit controller board module (superseded by MOD04045)
    source: https://www.tranesupply.com/product/mod03107/01t4w00000OwuLRAAZ
related: [trane-symbio, symbio-800, symbio-500, symbio-210, tracer-sc-plus]
sources:
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/unitary/split-systems/odyssey-6-to-25-tons/ACC-APG001A-EN_06102020.pdf
  - https://www.tranesupply.com/product/mod03107/01t4w00000OwuLRAAZ
---
The **Trane Symbio 700** (Application Guide `ACC-APG001A-EN`, User Guide `BAS-SVU054`, and BACnet Integration Guide `ACC-SVP001`) is Trane's factory-installed unit controller on **Precedent** packaged rooftop units (`3 to 25 tons`) and **Odyssey** split systems (`6 to 25 tons`), succeeding the legacy ReliaTel unit controller.

### Configurations & Field Connections (`ACC-APG001A-EN`)
- **Standard vs. Advanced Configuration**:
  - **Standard Configuration**: Provides equipment protection, Constant Volume (`CVZT`), Single-Zone Variable Air Volume (`VVZT` / `SZVAV`), or conventional thermostat (`T-Stat`) sequences, onboard `2 × 16` backlit LCD user interface, and **Bluetooth Low Energy (`BLE`)** access via the **Trane Symbio Service and Installation** mobile app.
  - **Advanced Configuration**: Adds Building Automation System (BAS) communications over **BACnet MS/TP** (with 3 onboard rotary MAC address dials), **BACnet/IP** (dual RJ-45 ports), **BACnet over Zigbee (`Air-Fi` Wireless)**, or **LonTalk**, plus remote capacity control and emergency ventilation overrides (`EMERG_PRESSURIZE`, `EMERG_DEPRESSURIZE`, `EMERG_PURGE`, `EMERG_SHUTDOWN`, `EMERG_FIRE`).
- **Key Field Terminal Connectors**:
  - **J16**: Demand Shed / Demand Limit binary input (`24 VAC`).
  - **J17**: 4-pin **BACnet MS/TP** RS-485 daisy-chain terminal block (`BACnet +`, `BACnet -`, `BACnet +`, `BACnet -`).
  - **J18**: Equipment Shutdown binary input (`24 VAC`).
  - **J19**: 7-pin Zone Sensor connection (`Zone Temp`, `Cool Setpoint`, `Mode`, `Heat Setpoint`, `24 VAC`, `GND`).
  - **J20**: External Occupancy Switch input.
  - **J21**: 9-pin Conventional Thermostat input (`24 VAC`, `Y1`, `W1/O`, `G`, `W2`, `Y2`, `X2`).
  - **J22 & J23**: Space `CO2` (`J22`) and Space Relative Humidity (`J23`) sensor inputs (`24 VDC Out`, `Signal In`, `Common`).
