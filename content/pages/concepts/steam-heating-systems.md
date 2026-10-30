---
id: steam-heating-systems
type: concept
title: "Steam heating systems and historic buildings: one-pipe and two-pipe steam, traps, controls and retrofit"
summary: "How radiator steam systems work, the differences between one-pipe and two-pipe systems, why steam trap failure drives uneven heating and energy loss (DOE figures), what controls and BAS points steam plants offer, and how preservation principles from the National Park Service shape upgrades in historic buildings."
review: verified
related: [hvac-and-controls-through-the-eras, pneumatic-control-systems, hydronic-system-control, heat-exchangers, control-valves, energy-conservation-strategies, energy-savings-and-payback-calculations, measurement-and-verification, natural-ventilation, humidity-sensors, temperature-sensors, io-points]
sources:
  - https://www.energy.gov/sites/prod/files/2014/05/f16/steam1_traps.pdf
  - https://www.nps.gov/orgs/1739/upload/preservation-brief-24-heating-cooling.pdf
  - https://basc.pnnl.gov/sites/default/files/resource/e5f3f69e9ad7c32fa467f99b473202.pdf
---
Steam heats a large share of older campus buildings, either from a central plant through a distribution main or from a boiler in the building. Its radiators, traps and valves are simple and durable, but they fail in ways that are not obvious from the controls, and they sit in buildings that are often protected from alteration. This page explains how the systems work, where energy and comfort problems come from, what a BAS can see and do, and how to approach upgrades in historic buildings.

> The steam trap data come from the U.S. Department of Energy's Steam Tip Sheet #1 (January 2012). The historic-building guidance comes from the National Park Service's Preservation Brief 24 by Sharon C. Park. The one-pipe and two-pipe descriptions and the radiator orifice technique come from a 2003 trade-magazine article by Henry Gifford, which presents one practitioner's method and is not a consensus standard. The remaining sections (controls, troubleshooting, safety, retrofit) are general practice and have not been checked against a manufacturer document. Pressure classes and equipment vary, so check the actual system.

## How radiator steam heating works

Steam carries heat as latent heat. When it condenses in a radiator it gives up roughly 1,000 Btu per pound (a planning figure; use steam tables for real work), and the resulting hot water, called **condensate**, drains away. Steam flows without a pump because condensing steam creates a pressure drop that draws more steam in. The system's job is to deliver steam to every radiator, let the air out of each radiator so steam can enter, and take the condensate back to the boiler without letting steam escape into the return.

Radiator size is rated in **equivalent direct radiation (EDR)**; the Gifford article uses the convention of 240 Btu/h per square foot of EDR.

**Pressure classes.** Building heating systems usually run at very low pressure, a few psig or less, while campus distribution mains run much higher and pass through **pressure reducing valves (PRVs)** at each building. The DOE tip sheet groups steam traps by pressure for testing: low pressure below 30 psig, medium pressure 30 to 150 psig, and high pressure 150 psig and above.

## One-pipe and two-pipe systems

| | One-pipe steam | Two-pipe steam |
| :--- | :--- | :--- |
| Connections | One pipe to each radiator, carrying steam in and condensate out | A supply pipe to the radiator inlet and a return pipe from its outlet |
| Air removal | An air vent on each radiator | Through the return, via the trap |
| Per radiator | A manual valve (or none) and an air vent | An inlet valve and a steam trap at the outlet |
| Typical buildings | Smaller buildings, because steam and condensate share the pipe and need large pipe sizes | Larger buildings: the Gifford article cites old apartment houses and office buildings taller than six stories, and old schools, hospitals and government buildings |
| Main maintenance item | Radiator air vents, pipe pitch | Steam traps |

In a one-pipe system, steam and condensate flow in opposite directions in the same pipe, which works only if the pipe is large enough to keep velocities low, so the system cannot be scaled to large buildings. In a two-pipe system, the return side is meant to sit at about the pressure of the condensate tank, which should be atmospheric, and the supply side at about boiler pressure, so a pressure difference exists across each radiator.

**Variants and conversions.** Older buildings may also have gravity-return systems, vacuum systems that use a pump to hold the return below atmospheric pressure, or radiators fed by a steam-to-hot-water **converter** that turns the steam into a hot water loop; see [Heat exchangers](heat-exchangers.html) and [Hydronic system control](hydronic-system-control.html). Check each building, because several types often coexist.

## Main components

- **Boiler or PRV station.** The source of steam at the building's operating pressure, with safety valves and, on boilers, low-water cutoffs.
- **Mains, risers and branches.** Piping that is pitched so condensate drains toward drip points. Pitch and drainage matter because trapped condensate causes water hammer.
- **Radiators and convectors.** Cast iron or fin-tube units, each with an inlet valve.
- **Air vents** (one-pipe systems) release air from radiators so steam can enter.
- **Steam traps** (two-pipe systems) pass air and condensate but hold back steam. The Gifford article describes the thermostatic type usually found on radiators, which holds a capsule of an alcohol-and-water mixture that expands in steam and closes the trap, then shrinks and opens as condensate cools it. Larger systems also use float, bucket and thermodynamic traps, which are general knowledge and not described in the sources.
- **Condensate return.** Piping to a **condensate receiver and pump** that returns condensate to the boiler or plant.
- **Thermostatic radiator valves (TRVs)** or manual valves at the radiator, and in some systems zone valves controlled by thermostats.

## Steam traps: where the energy goes

A trap is a moving part that opens and closes many times a minute, so it eventually fails. A trap that fails open passes live steam into the return, which wastes energy and disrupts the whole system. The DOE tip sheet reports:

- In systems not maintained for 3 to 5 years, **15 to 30 percent** of the installed traps may have failed.
- With a regularly scheduled maintenance program, leaking traps should be **less than 5 percent** of the population.
- A system with **more than 500 traps** will probably show significant losses on a survey.

**Steam lost through a stuck-open trap** (DOE table, steam discharging to atmosphere, in lb/hr):

| Orifice diameter | At 100 psig | At 150 psig | At 300 psig |
| :--- | :--- | :--- | :--- |
| 1/16 inch | 13.2 | 18.9 | 36.2 |
| 1/8 inch | 52.8 | 75.8 | 145 |
| 1/4 inch | 211 | 303 | 579 |
| 3/8 inch | 475 | 682 | 1,303 |

**DOE example.** A trap with a 1/8 inch orifice stuck open on a 150 psig line loses 75.8 lb/hr. At 10 dollars per thousand pounds of steam, the annual cost is 75.8 x 8,760 x 10 / 1,000 = about 6,640 dollars. At about 1,000 Btu per pound, 75.8 lb/hr is roughly 76,000 Btu/h, so the year's loss is on the order of 660 million Btu. Substitute your own steam cost. Radiator traps in a low-pressure building lose much less each, but there are many of them, and the effect on comfort is often more important than the cost.

**The comfort effect.** The Gifford article explains why one failed trap upsets other rooms: steam passing through a broken trap pressurizes the return piping, so the pressure on both sides of other radiators equalises. With no pressure difference to move air out and steam in, those radiators become **airbound** and stay cold, while the radiator with the broken trap overheats. The complaints come from the cold rooms, which are not where the fault is.

**Testing.** The DOE tip sheet names four basic methods: temperature, sound, visual and electronic. Its recommended intervals:

| Pressure class | Test interval |
| :--- | :--- |
| High (150 psig and above) | Weekly to monthly |
| Medium (30 to 150 psig) | Monthly to quarterly |
| Low (below 30 psig) | Annually |

It also suggests online monitoring of the most important traps or those serving critical processes, to catch steam loss trends quickly, and a reporting mechanism to document energy and dollar savings. Keep a trap inventory: location, type, size, last test and result.

## Radiator inlet orifices: one practitioner's method

The Gifford article proposes a retrofit for two-pipe systems: install a drilled **orifice plate** at each radiator's inlet that limits steam to what the radiator can condense, so no steam reaches the return and the radiator traps can be left in place without maintenance. The author reports using about 2 psig on the supply side and near zero on the return, sizing the hole from a table by the radiator's EDR, and says the pressure setting should not be changed afterwards. He reports benefits including less overheating, elimination of trap maintenance and lower fuel use, and describes one building where oil deliveries fell from about twice a week to once every two weeks in the coldest weather after orifices and TRVs were installed.

Treat this as a documented technique from a single practitioner, with anecdotal results, not a general recommendation. It does not apply to one-pipe systems, and it depends on stable, low steam pressure and correct orifice sizing. Evaluate it against the owner's engineering standards, and verify any savings; see [Measurement and verification](measurement-and-verification.html).

## Controls

Steam heating has less control than hot water, because steam temperature is fixed by pressure. Common arrangements, from simple to capable:

- **Building-wide on/off.** The Gifford article observes that most two-pipe systems are controlled by turning steam on or off for the whole building, so the sunny side gets as much heat as the shady side whether needed or not, and overheating results. This is typical of older systems.
- **Boiler pressure or cycling control.** Pressure controls, outdoor-temperature or time-based cycling.
- **Zone valves** controlled by room or zone thermostats, electric, pneumatic or DDC; see [Pneumatic control systems](pneumatic-control-systems.html) and [Control valves](control-valves.html).
- **Thermostatic radiator valves (TRVs)**, which regulate each radiator from its local temperature.
- **DDC** with room temperatures, steam valves, scheduling, optimal start and trending.

**Optimal start.** Cast iron radiators and large steam systems recover slowly, so warm-up takes longer than for air systems. An optimal-start calculation should account for this, or night setback will leave spaces cold at occupancy.

**Typical BAS points.**

| Point | Why |
| :--- | :--- |
| Steam pressure (header and building) | Pressure drives delivery and trap behaviour |
| Steam flow or energy meter | Needed to measure use and verify savings |
| Condensate temperature and return flow | A hot return suggests steam is passing traps |
| Condensate pump status and receiver level alarm | Failure floods the plant room and spoils the return |
| Boiler or PRV station status and alarms | Plant health |
| Outdoor and indoor temperatures | Control and analysis |
| Valve positions and zone temperatures | Overheating and simultaneous heating and cooling |
| Trap monitors on critical traps | Early warning |

See [I/O points](io-points.html) for point types.

## Energy opportunities

Roughly in order of cost and effort, for a steam building:

1. **Repair steam leaks and failed traps**, and keep a test program, as above.
2. **Stop overheating**: balance the distribution, add zone control or TRVs, and reduce building-wide on/off swings. An overheated room that opens its windows wastes heat and fuel; see [Energy conservation strategies](energy-conservation-strategies.html).
3. **Recover condensate** and restore insulation on piping, valves and tanks.
4. **Lower and stabilise pressure** within what the system needs.
5. **Add metering** so use can be tracked and verified; the savings of steam measures cannot be proven without it. Savings can be priced with [Energy savings and payback calculations](energy-savings-and-payback-calculations.html).
6. **Consider conversion** to a hot water system with a converter, which allows lower temperatures and better control, if the building and budget allow. This is a capital decision that depends on piping, space and preservation constraints.

## Troubleshooting

| Symptom | Likely causes |
| :--- | :--- |
| Some radiators stay cold | Airbound radiator from a failed vent or trap elsewhere, a closed or blocked valve, or low supply pressure |
| One radiator overheats while neighbours are cold | A failed-open trap pressurizing the return |
| Banging pipes (water hammer) | Condensate trapped in a low point or wrong pitch, failed traps, or wet steam |
| Return line hot and steam venting at the receiver | Steam passing through failed traps |
| Slow warm-up | Airbound or undersized system, low pressure, or large thermal mass; see optimal start |
| Overheating in mild weather | Building-wide on/off control without enough outdoor or zone feedback |
| Steam leaks at valves and unions | Worn packing or gaskets |

When a floor or branch has several complaints, test the traps and check pressures before adjusting anything. Walking the system with a temperature gun and a gauge, from the boiler out, usually finds the pattern.

## Historic buildings

Many steam buildings are historic, and upgrades must respect the building. The National Park Service's Preservation Brief 24 offers a framework that applies to controls work as well as to new HVAC:

- **Use the lowest level of intervention that does the job.** Some buildings do not need comprehensive climate control, and improved natural ventilation with operable windows, awnings and exhaust fans may be enough in mild climates; see [Natural ventilation](natural-ventilation.html).
- **Assess before deciding.** Document what exists and its condition, including boilers, chillers, air handlers and towers, and identify problems such as air infiltration and asbestos that must be dealt with first. The Brief suggests monitoring interior temperature and humidity for at least a year, which a BAS or data logger can do.
- **Identify and retain significant elements.** The Brief gives hot water radiators as an example of a significant historic system element and shows a radiator retained when the system was upgraded.
- **Use a team** that includes a preservation architect and engineers, and consider code, access for maintenance, and cost.
- **Install reversibly.** New equipment and runs should be removable without further damage, placed in secondary spaces such as attics, basements and existing chases, and should not cause vibration, noise, mold or excess moisture.
- **Reduce loads** before sizing new equipment, for example by adding zones, improving envelope efficiency, or accepting slightly lower comfort levels.
- **Control moisture.** Added humidification can drive moisture into historic materials, so interior humidity changes must be considered with the building's construction.
- **Collections need monitoring and backup.** Where collections, archives or computer rooms are housed, the climate control needs constant monitoring and tuning, back-up systems and trained operators, and the Brief warns that uninformed attempts to adjust thermostats or save energy over weekends and holidays can cause great damage.

For an energy manager, the last point matters: a setback or reset that is sensible in an office can harm a space that holds collections, so confirm the requirements with the people responsible before changing schedules.

## Safety

- Steam burns instantly. Isolate, vent and allow lines to cool before working, and treat condensate as scalding.
- Water hammer can rupture piping; open steam valves slowly on cold lines.
- Pressure vessels, safety valves and boilers are subject to inspection rules.
- Old insulation on steam piping, boilers and fittings may contain asbestos; see [HVAC and controls through the eras](hvac-and-controls-through-the-eras.html) and follow environmental health and safety procedures.
- Lock out and tag out plant and valves before maintenance.

## Recording what you have

For each steam building, record the steam source and pressure, whether the system is one-pipe, two-pipe, vacuum or converted, the trap count and locations, the control type, the metering, the condition and age of boilers and piping, whether the building is historic or houses collections, and the hazards present. Keep it with the building survey described on the eras page.
