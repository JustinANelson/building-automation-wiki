---
id: electric-chillers
type: concept
title: "Electric chillers: compressor types, air- and water-cooled, controls and BAS points"
summary: "How a vapor-compression chiller works, how scroll, reciprocating, screw and centrifugal machines differ, how air-cooled and water-cooled machines compare, and the controls, safeties and BAS points a chiller exposes."
review: draft
related:
  - bacnet-mstp
  - chiller-part-load-performance
  - efficiency-metrics
  - energy-conservation-strategies
  - hydronic-system-control
  - modbus-rtu
  - supervisory-controllers
  - switches-and-safeties
  - symbio-800
  - tracer-sc-plus
  - variable-frequency-drives
  - york-optiview
sources:
  - https://19january2025snapshot.epa.gov/snap/substitutes-chillers/index.html
  - https://19january2025snapshot.epa.gov/snap/substitutes-centrifugal-chillers
  - https://19january2025snapshot.epa.gov/snap/substitutes-positive-displacement-chillers
---
An **electric chiller** cools water, or a water and glycol mixture, by moving heat from the chilled water loop to the outdoors with a vapor-compression refrigeration cycle driven by an electric motor. The chilled water goes to air handling unit coils and other cooling loads; see [Hydronic system control](hydronic-system-control.html) for the loop and plant sequences. This page covers the machine itself and what a building automation system can read and command.

## The refrigeration cycle

Four components make a chiller, whatever its size:

1. **Evaporator.** Chilled water flows through it, and liquid refrigerant boils at low pressure, absorbing heat from the water and cooling it.
2. **Compressor.** Compresses the refrigerant vapor to a higher pressure and temperature. It is the part that uses most of the electricity.
3. **Condenser.** Rejects the heat, the evaporator load plus the compressor work, to condenser water or outdoor air, so the refrigerant condenses back to a liquid.
4. **Expansion device.** Drops the liquid's pressure so it can evaporate again, and meters the refrigerant flow.

The compressor must raise the pressure from the evaporator's to the condenser's, and the work needed rises with that **lift**. Efficiency therefore depends on both the chilled water and the condenser temperatures; see [Chiller part-load performance](chiller-part-load-performance.html) and [Efficiency metrics](efficiency-metrics.html).

## Compressor types

The U.S. Environmental Protection Agency's Significant New Alternatives Policy (SNAP) pages describe chillers by compressor type, giving capacity ranges for each:

| Type | Capacity range (EPA SNAP) | Notes |
| :--- | :--- | :--- |
| Scroll | 10 to 1,800 kW (3 to 510 tons) | Common in smaller packaged machines, often several compressors in one chiller |
| Reciprocating | 10 to 1,800 kW (3 to 510 tons) | Piston compressors; air-cooled or water-cooled |
| Screw | 10 to 7,000 kW (3 to 2,000 tons) | Rotary screws; air-cooled or water-cooled |
| Centrifugal | 200 to 21,000 kW (60 to 6,000 tons) | Water-cooled; high-capacity machines |

EPA groups reciprocating, screw and scroll machines as positive displacement chillers and centrifugal machines separately. The ranges overlap, so the choice depends on size, efficiency, first cost, part-load behaviour, noise and maintenance.

**Scroll.** Two interleaved spirals compress the refrigerant. Simple and reliable, scroll compressors are limited in size, so larger scroll chillers use several compressors, and capacity control is by staging them.

**Reciprocating.** Pistons in cylinders. Capacity is reduced by unloading cylinders. These machines have more moving parts than scrolls or screws, and are less common in new larger chillers.

**Screw.** Two meshing rotors compress the gas. Capacity is controlled by a slide valve that changes the compression volume, or by a variable speed drive. Screws suit mid-size and large air-cooled machines and water-cooled machines of several hundred tons.

**Centrifugal.** An impeller accelerates the gas and a diffuser turns velocity into pressure. They are the usual choice for large water-cooled plants. Capacity is controlled by inlet guide vanes, by variable speed, or both. A centrifugal compressor can **surge**, an unstable flow reversal, if it is asked to deliver too much lift at too little flow, so the controls hold the machine within a safe operating envelope. Some designs use magnetic bearings, which remove oil from the compressor and allow variable speed operation.

## Air-cooled and water-cooled

| | Air-cooled | Water-cooled |
| :--- | :--- | :--- |
| Heat rejection | Outdoor air across condenser coils | Condenser water to a cooling tower or other heat sink |
| Capacity of typical machines | Small to medium; screw machines reach larger sizes | Medium to very large |
| Efficiency | Lower, depends on outdoor dry-bulb temperature | Higher, depends on condenser water temperature, which follows wet-bulb |
| Infrastructure | None beyond the chiller | Towers, condenser pumps, water treatment |
| Maintenance | Coil cleaning, fan service | Tube cleaning, tower service, water treatment |
| Typical use | Smaller buildings, no tower possible | Larger plants, campuses |

Typical full-load efficiencies for each are on [Efficiency metrics](efficiency-metrics.html). Water-cooled machines are more efficient largely because the wet-bulb temperature is lower than the dry-bulb, so the condensing temperature, and the lift, is lower.

## Refrigerants

The refrigerant must have the right pressure and temperature characteristics for the machine, and be acceptable under environmental regulation. EPA's SNAP pages list substitute refrigerants for each chiller category, with an acceptable or unacceptable status for each. The centrifugal list includes R-134a, R-513A, HFO-1234ze and R-514A, and the positive displacement list includes R-134a, R-410A, R-407C and R-513A, among others. The pages list which substitutes are acceptable, not which are typical. High-global-warming-potential refrigerants are being phased down, so the refrigerant in a new machine may differ from the one in an older installed chiller. The statuses change over time, so refer to the current SNAP listing for a project.

Refrigerant selection also affects safety, since refrigerant leak detection and ventilation of the equipment room are required in many jurisdictions. Chiller room refrigerant monitors are another input to the BAS.

## Capacity control

The chiller controller modulates capacity to hold the **leaving chilled water temperature** setpoint. By compressor type: staging compressors on and off (scroll, reciprocating), unloading cylinders (reciprocating), a slide valve or variable speed (screw), and inlet guide vanes or variable speed (centrifugal). **Variable-speed** compressors need a VFD, which brings the benefits and the cautions described on [Variable frequency drives](variable-frequency-drives.html). A **current limit** or demand limit caps the motor current, which the BAS can write to shed load during a peak; see [Energy conservation strategies](energy-conservation-strategies.html).

## What the chiller controller does and the BAS should not

A chiller has its own controller, supplied with the machine, that runs the compressors, protects the machine and holds the leaving chilled water temperature. Examples elsewhere in this wiki are the [York OptiView](../product/york-optiview.html) control center and the Trane [Symbio 800](../product/symbio-800.html) controller. The BAS or a plant controller coordinates the chiller with the rest of the plant:

- **Chiller:** compressor sequencing, capacity control, anti-short-cycle timers, oil management, safeties such as high pressure, low pressure, low evaporator temperature, motor overload and surge protection.
- **BAS or plant controller:** enabling the chiller and its pumps and isolation valves, proving water flow, writing the chilled water setpoint and current limit, staging multiple chillers, resetting temperatures, and trending.

Do not use the BAS to override the machine's own protection. The BAS's job is to ask, and the chiller's job is to decide whether it is safe to comply.

## Typical BAS points

| Point | Direction | Notes |
| :--- | :--- | :--- |
| Run enable | Command | Permissive; the chiller starts only when its own conditions allow |
| Leaving chilled water temperature setpoint | Command | Written by reset logic |
| Current or demand limit | Command | Used for peak shaving |
| Chiller status and mode | Read | Off, starting, running, unloading, fault, locked out |
| Leaving and entering chilled water temperature | Read | For tons and delta-T |
| Entering and leaving condenser water temperature | Read | For lift and approach |
| Percent load or motor current | Read | Staging and efficiency |
| Compressor kW, kWh | Read | Efficiency trends; see [Efficiency metrics](efficiency-metrics.html) |
| Evaporator and condenser pressures or saturation temperatures | Read | Approach calculation and diagnostics |
| Evaporator and condenser flow status | Read | Proof of flow; see below |
| Alarms and fault codes | Read | Reason for a trip |
| Run hours and starts | Read | Maintenance |

Chillers usually offer BACnet MS/TP, BACnet/IP or Modbus connections; see [BACnet MS/TP](../protocol/bacnet-mstp.html) and [Modbus RTU](../protocol/modbus-rtu.html). Check the chiller's PICS or point list for the points it provides; see [Reading a BACnet PICS](bacnet-pics.html). Chilled water temperature setpoint and enable commands are the minimum for integration, and the more points that are mapped, the more must be tested.

## Interlocks and safeties

- **Flow proof.** The chiller must not run without flow through the evaporator, or the water can freeze, and not without condenser flow, or pressure rises. Flow switches or differential pressure switches are wired into the chiller's safety circuit; see [Switches and safeties](switches-and-safeties.html).
- **Isolation valves.** Motorized valves on idle chillers prevent flow through machines that are off, and their end switches are proven before starting; see [Hydronic system control](hydronic-system-control.html).
- **Freeze protection.** Low leaving water temperature and low refrigerant temperature cut-outs protect the evaporator. Keep the setpoint above the freeze limit for the fluid used.
- **Minimum run and off times.** Prevent short cycling.
- **Refrigerant monitoring.** An equipment room monitor can trigger ventilation and alarms.

## Maintenance and diagnostics

Efficiency falls when heat transfer surfaces foul, refrigerant charge is low, noncondensable gas enters, or controls are mis-set. A BAS can help find these:

- **Evaporator approach** (leaving chilled water temperature minus saturated refrigerant temperature) rising at a given load suggests fouled evaporator tubes or low charge.
- **Condenser approach** rising suggests fouled condenser tubes, poor condenser water flow, or noncondensables.
- **kW/ton above the machine's curve** at a given load and temperature points to either.
- **Frequent starts or low-load running** suggest staging or minimum-load problems; see [Chiller part-load performance](chiller-part-load-performance.html).

> The compressor types and capacity ranges come from the EPA SNAP pages, and the refrigerant names are those SNAP lists as acceptable substitutes, not a statement of what any particular manufacturer uses. The remaining sections are general practice, not from a manufacturer document. Follow the chiller manufacturer's documentation and applicable codes for any project.
