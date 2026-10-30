---
id: heat-pumps
type: concept
title: "Heat pumps and their controls"
summary: "Air-source, water-source and ground-source heat pumps, how COP and EER describe them, and what a heat pump controller must manage."
review: draft
related: [apogee-tec-vav, control-signals, control-strategies, economizer-control, energy-conservation-strategies, geothermal-ground-source, hydronic-system-control, symbio-500, temperature-sensors, uc400, vt7600]
sources:
  - https://www.energy.gov/sites/default/files/2021-08/ES-Geothermal%20heat%20pumps_080221.pdf
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/education-training/engineers-newsletters/airside-design/adm_apn034en_1209.pdf
---
A heat pump moves heat instead of making it. In heating it takes heat from a source (outdoor air, a water loop, or the ground) and delivers it to the building; in cooling it runs in reverse, using a **reversing valve** to switch the refrigerant circuit between the two modes. The U.S. Department of Energy guide notes that many HVAC systems use some sort of heat pump for heating and cooling.

**Kinds by heat source.**

| Kind | Source or sink | Note |
| :--- | :--- | :--- |
| Air-source (ASHP) | Outdoor air | Performance follows outdoor temperature |
| Dual-source | An air-source unit combined with a ground-source unit | Cheaper than full geothermal, more efficient than air-source (DOE) |
| Ground-source / geothermal | Buried or submerged piping, or well water | See [Geothermal](geothermal-ground-source.html) |
| Water-source (WSHP) | A building water loop shared by many units | Common in commercial buildings; the loop is held in a temperature band by a boiler, a heat rejecter, or ground loops |

**Efficiency terms.** The DOE guide says cooling capacity efficiency is shown by the Energy Efficiency Ratio (EER) and heating efficiency by the Coefficient of Performance (COP). It states that geothermal systems move between three and five times the energy they consume, reach 300 to 600 percent efficiency on the coldest winter nights, and can use 25 to 50 percent less energy than air-source heat pumps.

**What the controller does.** The Trane Tracer UC400 water-source heat pump manual (BAS-SVX065F-EN, May 2023) shows a typical list:

- **Backup heat:** electric heat can be *supplemental* (runs with the compressors as the last stage), *boiler-less* (when EWT falls below the compressor heat disable setpoint, the compressors stop and electric heat takes over, returning when EWT rises 5 degrees F above it), or *main heat* (electric heat only).
- **Coil icing and low leaving air:** a fixed temperature device on the evaporator coil trips a binary input; the controller disables the DX stages in a defined order and keeps the fan running. During waterside economizer operation, a discharge air low limit (default 47 degrees F) for one minute disables stage 1 DX.
- **Compressor protection:** inputs monitor high/low pressure cutouts and freeze protection, each reported as a protection status; a compressor lockout stops operation. A minimum on and off time of 3 minutes is enforced even during low-level diagnostics.
- **Entering water temperature (EWT):** read from a hard-wired sensor or sent over BACnet (the communicated value wins). Sampling opens an isolation valve for 3 minutes, then reuses the reading for an hour.
- **Outputs:** compressor 1 and 2 commands and a reversing valve output (BO7 in the factory termination table). The Viconics VT7600 series likewise offers heat pump models with up to 3 heat and 2 cool stages and a reversing valve output.
- **Waterside economizer:** when EWT is below the enable setpoint, a two-position valve opens and water cools the zone; stage 2 compressor cooling is blocked while it is on.

Siemens lists BACnet PTEC controllers for heat pump and unitary applications; see [APOGEE TEC and PTEC controllers](../product/apogee-tec-vav.html).


## The refrigeration cycle

> This and the sections below are general practice, not taken from the DOE guide or the Trane manual cited above.

A heat pump has four main parts: a **compressor**, two heat exchangers (an evaporator and a condenser) and an **expansion device**. Refrigerant is compressed to a hot, high-pressure gas, gives up heat in the condenser and condenses, drops in pressure through the expansion device, then absorbs heat in the evaporator and evaporates before returning to the compressor. In heating mode the indoor coil is the condenser; the **reversing valve** swaps the roles so that in cooling mode the indoor coil is the evaporator. The coefficient of performance is the heat delivered divided by the electrical energy used, so a COP of 3 means three units of heat for each unit of electricity.

## Air-source specifics

An air-source heat pump loses capacity as the outdoor temperature falls, just when the building needs more heat. A controller therefore handles:

- **Balance point.** The outdoor temperature below which the heat pump alone cannot meet the load. Below it, auxiliary heat (electric resistance, gas or hot water) must supplement or replace it.
- **Auxiliary heat lockout.** To save energy, supplemental heat is locked out above a set outdoor temperature, and only enabled when the heat pump cannot keep up, as shown by a falling room temperature or a long run time.
- **Defrost.** In cold, humid weather frost forms on the outdoor coil. The controller periodically reverses the cycle to melt it, and may run auxiliary heat during defrost so the room does not blow cold air. Defrost is started by time, temperature or a measured pressure drop, and stopped by coil temperature or a time limit.
- **Low-ambient operation.** Below the unit's rated outdoor temperature the compressor may be locked out, and only the auxiliary heat runs.

## Water-source specifics

A water-source heat pump rejects heat to or draws heat from a building loop, so the controller of the building matters as well as that of each unit.

- **Loop temperature band.** The loop is kept within a range, often described as roughly 60 to 90 degrees F, by a boiler or heater when it falls too low and a fluid cooler or cooling tower when it rises too high. The exact limits come from the heat pump manufacturer's data and the design.
- **Heat recovery between zones.** At the same time, units in cooling put heat into the loop and units in heating take it out, so the balance of zones decides how often the boiler or tower must run.
- **Flow proving.** Each unit needs water flow, usually through a motorized isolation valve that opens when the unit runs. Running a compressor without flow can freeze the heat exchanger or trip the high-pressure cutout.
- **Pump control.** Central loop pumps may be variable speed, holding a differential pressure as the isolation valves open and close; see [Hydronic system control](hydronic-system-control.html).

## Staging and protection

- **Minimum on and off times** protect the compressor from short cycling; they are enforced even when the controller is being tested.
- **Staging.** Two-stage or multi-stage units bring on stage 1, then stage 2, as the temperature error grows, with a delay between stages.
- **Fan control.** The fan may run continuously during occupied hours, or cycle with the compressor, and often continues briefly after the compressor stops.
- **Protection inputs.** High pressure, low pressure, freeze and condensate overflow switches stop the compressor, and the controller reports the reason so the cause can be found.
- **Reversing valve.** A valve that is stuck or leaking gives a unit that heats when it should cool, or has weak capacity in both modes.

## Commissioning and troubleshooting

| Symptom | Likely causes |
| :--- | :--- |
| Unit cools but does not heat | Reversing valve not energized or stuck, wrong valve polarity in the controller configuration |
| Short cycling | Dirty filter, low airflow, poor sensor location, minimum on time set too short |
| Compressor locks out on high pressure | No loop flow, a dirty coil, a loop that is too warm in cooling |
| Compressor locks out on freeze or low pressure | Low loop temperature or flow in heating, low refrigerant charge, low airflow |
| Electric heat runs a lot | Balance point or lockout setting too high, heat pump has failed, outdoor sensor wrong |
| Defrost never ends | A defrost termination sensor that is misplaced or faulty |

Commissioning checks include supply and return air temperature difference, water temperature rise or drop across the unit, and refrigerant pressures against the manufacturer's tables. For the controller side, see [Control signals](control-signals.html), and for the ground loop see [Geothermal](geothermal-ground-source.html).
