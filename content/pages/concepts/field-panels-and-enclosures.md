---
id: field-panels-and-enclosures
type: concept
title: "Field panel layout, power supplies, and control enclosures"
summary: "Inside a mechanical room BAS control cabinet: UL 508A enclosures, 24 VAC Class 2 transformers, DIN-rail controllers and I/O modules, interposing pilot relays, and wiring segregation."
review: draft
images:
  - path: images/concepts/field-panels-and-enclosures.svg
    alt: "Technical diagram (drawn illustration) of the internal layout of a mechanical room BAS control panel showing 24 VAC transformer, Ethernet switch, interposing relays, and DIN-rail PXC controller with TX-I/O modules"
    source: "Own work (BASWiki technical diagram based on Siemens APOGEE MBC/PXC and Desigo PXC7/TX-I/O installation guides)"
    license: CC0-1.0
related: [supervisory-controllers, io-points, analog-signals, rs-485, pxc-compact, pxc-modular, apogee-mbc, apogee-mec, pxc4, pxc5, pxc7, tx-io-modules]
sources:
  - https://sid.siemens.com/api/khub/documents/RM5O17WWj1_NZaOwely8Qw/content
  - https://sid.siemens.com/v/u/A6V10308138
  - https://sid.siemens.com/api/khub/documents/Wp276kwBxfKvIGrmhJ24Kg/content
---
When a technician opens a building automation **field panel** (control cabinet) in a mechanical penthouse or equipment room, they encounter a standardized arrangement of power supplies, network gear, DDC processors, I/O modules, and pilot relays mounted on a perforated subpanel inside a steel enclosure.

### 1. Enclosure Ratings (NEMA / UL 508A)
Industrial and commercial control panels are selected by environment:
- **NEMA 1 (Indoor General Purpose, IP20)**: Painted sheet-steel enclosure with hinged locking door; standard in dry indoor mechanical rooms (for example, Siemens `545-120` MBC-24 and `545-123` MBC-40 enclosures, or Trane `501897940100` VAV enclosure).
- **NEMA 3R / NEMA 4 (Outdoor / Washdown, IP65/IP66)**: Gasketed rainproof (`3R`) or watertight (`4`) enclosures for rooftop installations, cooling tower basins, and mechanical rooms subject to hose-down.
- **NEMA 4X (Corrosion-Resistant Stainless Steel or Fiberglass)**: Used in chemical storage, vivarium washdown areas, and coastal/corrosive environments.

### 2. Core Components Inside a BAS Field Panel

| Component Group | Typical Hardware | Function & Field Service Notes |
| :--- | :--- | :--- |
| **120 VAC Primary & 24 VAC Class 2 Power Supply** | Control transformer (`80 to 200 VA`), primary circuit breaker (`10 A`), secondary Class 2 circuit breakers/fuses (`3.5 A` / `4 A`), and convenience 120 VAC duplex receptacle | Steps `120 VAC` building power (frequently fed from an emergency generator panel or UPS) down to `24 VAC` for controllers, `TX-I/O` power modules ([`TXS1.12F10`](../product/tx-io-modules.html)), and field actuators. The convenience outlet powers a technician's laptop or commissioning router |
| **Network Switch & Patch Panel** | Managed OT Ethernet switch, fiber media converter, or controller dual-port switch + RJ-45 patch block | Connects the panel's [BACnet/IP](../protocol/bacnet-ip.html), [BACnet/SC](../protocol/bacnet-sc.html), or APOGEE P2 Ethernet port to the campus BAS VLAN |
| **Automation Station (CPU) & Modular I/O Bus** | DIN-rail controller ([Desigo PXC7](../product/pxc7.html), [PXC4](../product/pxc4.html), [APOGEE PXC Modular](../product/pxc-modular.html)) + [TX-I/O modules](../product/tx-io-modules.html), or card-cage backplane ([APOGEE MBC](../product/apogee-mbc.html)) | Executes the equipment control sequences and terminates field `AI`, `AO`, `DI`, and `DO` points on pluggable screw terminal blocks |
| **Interposing Pilot Relays ("Ice-Cube" or "RIB" Relays)** | Socketed DIN-rail DPDT relays (`24 VAC/DC` coil with status LED and mechanical test tab) or enclosed Relay-in-a-Box (`RIB`) | Isolates the controller's low-current `DO` or `AO` outputs from high-inductive-inrush motor starter coils (`120/277/480 VAC`), unit heaters, and exhaust fans |
| **Slotted Wire Duct ("Panduit")** | Separate grey/blue/white PVC wiring channels | Physically separates **Class 1 line voltage (`120 VAC+`)** from **Class 2 low-voltage power (`24 VAC`)** and **shielded low-level signal/bus cables** (`RS-485`, `0–10 V`, `4–20 mA`, `10kΩ NTC`) to prevent electromagnetic interference (EMI) |

### 3. Critical 24 VAC Power & Grounding Rules
A large percentage of intermittent field-panel communication faults and blown controller boards trace back to `24 VAC` transformer sizing and grounding mistakes:
1. **Transformer VA Sizing**: Always sum the VA rating of the controller, all expansion modules, and the full-load VA of every connected actuator and valve. For example, Siemens installation instructions `586-797` ([`A6V10308114`](../product/apogee-mbc.html)) specify a minimum **80 VA** transformer for an `RBC` (`545-274`), **120 VA** for an `MBC-24` (`545-077`), and **200 VA** for an `MBC-40` (`545-078`), connected through the `545-735` power harness with a 10 A breaker and surge-suppression MOVs.
2. **Half-Wave vs. Full-Wave Bridge Rectifier Conflict (Grounded `24 VAC` Common)**:
   - Many BAS controllers and `0–10 VDC` actuators use **half-wave rectification** where `24 VAC Neutral/Common` (`G0` or `COM`) is internally tied to `0 VDC` signal reference and earth ground.
   - If a device with an unisolated **full-wave bridge rectifier** shares the same `24 VAC` transformer and has its DC negative reference grounded (or connected to a grounded controller input), it creates a direct half-cycle short circuit through the bridge diodes—blowing the transformer fuse or burning PCB traces. Isolate full-wave devices on a separate floating 24 VAC transformer or optically isolated input.
3. **Shield Drain Grounding at One End Only**: Shielded cables for [RS-485 trunks](rs-485.html) and [analog sensors](analog-signals.html) should have their foil/braid drain wire landed to earth ground **at the field panel end only** (and taped back/insulated at the field device end) so ground potential differences between mechanical rooms do not drive 60 Hz ground-loop currents through the cable shield.
