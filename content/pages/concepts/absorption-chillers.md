---
id: absorption-chillers
type: concept
title: "Absorption chillers: single-effect, double-effect, and when they make sense"
summary: "How a heat-driven absorption chiller makes chilled water without a mechanical compressor, the difference between single- and double-effect machines, why their heat rejection is larger than an electric chiller's, and the controls and risks specific to them."
review: draft
related: [electric-chillers, efficiency-metrics, chiller-part-load-performance, hydronic-system-control, energy-conservation-strategies, control-valves, switches-and-safeties]
sources:
  - https://www.energy.gov/sites/prod/files/2014/05/f16/steam14_chillers.pdf
---
An **absorption chiller** produces chilled water using heat, such as steam, hot water or burning gas, as its main energy input instead of the electric motor that drives a compressor. The cooling effect is the same as an [electric chiller's](electric-chillers.html): chilled water at the evaporator, and heat rejected to a cooling tower. Only the way the refrigerant vapor is moved from the low-pressure side to the high-pressure side differs.

## How it works

The U.S. Department of Energy's Steam Tip Sheet #14 describes the machine this way: the mechanical vapor compressor is replaced by a **thermal compressor** that consists of an absorber, a generator, a pump and a throttling device. The refrigerant vapor from the evaporator is absorbed by a solution in the absorber. The solution is pumped to the generator, where the refrigerant is vaporized again using the heat source, and the refrigerant-depleted solution returns to the absorber through a throttling device. The evaporator and the condenser are still required, as in an electric chiller.

The two common working pairs, per the tip sheet, are **water and lithium bromide** (the refrigerant is water and the absorbent is lithium bromide salt) and **ammonia and water** (ammonia refrigerant, water absorbent).

**Water and lithium bromide machines**, the type used for building air conditioning, work as follows:

1. **Evaporator.** Water refrigerant, at a very low absolute pressure, boils at a low temperature and cools the chilled water flowing through tubes in the evaporator. Because the refrigerant is water, the chilled water cannot be taken below about freezing, and machines are specified for supply temperatures a few degrees above it.
2. **Absorber.** Strong lithium bromide solution absorbs the water vapor, which releases heat that is removed by condenser water.
3. **Pump and heat exchanger.** The diluted solution is pumped to the generator, usually through a heat exchanger that recovers heat from the returning strong solution.
4. **Generator.** The heat source boils water out of the solution. The water vapor goes to the condenser, and the strong solution returns to the absorber.
5. **Condenser.** The vapor condenses, giving up heat to the condenser water, and the liquid water returns to the evaporator through a throttling device.

The only significant electrical loads are the solution and refrigerant pumps, so an absorption machine uses little electricity compared with an electric chiller of the same capacity, but it needs a heat source and rejects more heat.

**Ammonia and water machines** use ammonia as the refrigerant, so they can make chilled fluid below freezing, and they appear in smaller and industrial applications.

## Single-effect and double-effect

The DOE tip sheet says two designs are commercially available:

| | Single-effect | Double-effect |
| :--- | :--- | :--- |
| Thermal COP | 0.7 | About 40 percent more efficient than single-effect, so roughly 1.0 |
| Heat source (DOE) | About 18 lb of 15 psig steam per ton-hour of cooling | About 10 lb of 100 to 150 psig steam per ton-hour |
| Heat grade | Low: low-pressure steam, or hot water | Higher grade |

The double-effect machine uses two generators: heat from the first generator's vapor drives a second, so the heat input is used twice. It needs a higher-temperature heat source, which is why it needs higher-pressure steam or direct firing. The tip sheet states that low-pressure steam-driven absorption chillers are available in capacities from 100 to 1,500 tons.

The roughly 1.0 for the double-effect COP is derived from the tip sheet's "about 40 percent more efficient" statement and the single-effect value of 0.7. Published figures for double-effect machines vary with source and conditions, so use the manufacturer's rating for design. Triple-effect machines exist at higher COPs and need still hotter heat.

Heat sources include:

- **Steam**, from a boiler or as waste steam from a process.
- **Hot water**, including from solar thermal collectors or waste heat.
- **Direct firing**, by gas or oil in the machine's own burner, common for double-effect machines.
- **Waste heat** from engines, turbines and industrial processes, including combined heat and power plants.

## Heat rejection is larger

An absorption machine rejects the heat it absorbs in the evaporator **plus** the heat it takes in at the generator. The heat to the cooling tower is therefore the cooling load multiplied by (1 + 1/COP).

| Machine | COP | Heat rejected per ton of cooling |
| :--- | :--- | :--- |
| Electric, about 0.6 kW/ton | About 5.9 | About 14,000 Btu/h |
| Double-effect absorption | About 1.0 | About 24,000 Btu/h |
| Single-effect absorption | 0.7 | About 29,000 Btu/h |

These are derived from the COP values (12,000 Btu/h x (1 + 1/COP)) and are approximate. The practical result is that an absorption plant needs a **larger cooling tower, more condenser water flow and bigger condenser pumps** than an electric plant of the same cooling capacity, with correspondingly more makeup water and tower energy. Include them when comparing options.

## When absorption makes sense

The DOE tip sheet notes that absorption chillers have a low COP compared with mechanical chillers, but can substantially reduce operating costs when energized by low-grade waste heat, because vapor compression chillers must be motor- or engine-driven. It illustrates this with a plant where low-pressure steam would otherwise be exhausted to the atmosphere. The situations where they are most often considered:

- **Waste or surplus heat** is available at the right temperature at low cost, such as a combined heat and power plant, an industrial process, or a campus steam system with a summer heat surplus.
- **Electricity is expensive** compared with gas or steam, or **peak demand charges** are high, so shifting cooling off the electrical system saves money. Absorption chillers are sometimes paired with electric chillers so that absorption carries the load at peak electrical rates.
- **Electrical capacity is limited** at the site.
- **Reduced noise and vibration** is wanted, since there is no large compressor.

They are less attractive when heat must be produced from purchased fuel only for cooling, since the fuel energy per ton can exceed the electric energy needed by an efficient electric chiller; see the COP discussion on [Efficiency metrics](efficiency-metrics.html). Compare plants on cost and, where relevant, on source energy and emissions, not on COP alone. Absorption machines are also larger and heavier, need more plant room space, and have higher first costs per ton in many cases.

## Controls

An absorption chiller has its own controller, as an electric chiller does, that protects the machine and runs the cycle. The building automation system's role is to enable it, supply it with heat and water, and trend it.

- **Capacity control.** The machine holds the leaving chilled water temperature by reducing heat input as the load falls: it modulates a steam or hot water control valve, or the burner firing rate, and may also adjust solution flow. Steam and hot water valves are sized and selected as described on [Control valves](control-valves.html).
- **Condenser water temperature.** Many machines have a minimum entering condenser water temperature, and a minimum rate of change, because cold condenser water can cause the solution to become too concentrated. Cooling tower control must respect this limit, unlike an electric chiller whose efficiency improves with colder water; see [Chiller part-load performance](chiller-part-load-performance.html).
- **Crystallization.** Lithium bromide solution can crystallize if it becomes too concentrated or too cold, blocking passages and stopping the machine. Causes include a power failure while the machine is operating, too-cold condenser water, air leaking into the machine, or a sudden change in load. Machines have controls to prevent it, including a **dilution cycle** at shutdown, which flushes the strong solution with refrigerant so it does not solidify as the machine cools. Do not interrupt a shutdown dilution cycle by cutting power, and follow the manufacturer's procedure after an unplanned stop.
- **Vacuum integrity.** The machine runs at a deep vacuum, and air in-leakage reduces capacity and promotes corrosion. A **purge** system removes noncondensable gases, and the BAS may trend purge activity as a sign of a leak.
- **Interlocks.** As with an electric chiller, prove chilled water and condenser water flow before starting, and prove that the heat source is available; see [Switches and safeties](switches-and-safeties.html).
- **Start and stop.** An absorption machine takes longer to start and stop than an electric chiller, so sequences should not stage it on and off for short loads. Allow for the dilution cycle in shutdown sequences.

## Typical BAS points

| Point | Direction |
| :--- | :--- |
| Run enable and chilled water temperature setpoint | Command |
| Machine status, mode (starting, running, diluting, off) and alarms | Read |
| Entering and leaving chilled water temperature | Read |
| Entering and leaving condenser water temperature | Read |
| Heat input: steam valve position or burner firing rate | Read |
| Steam pressure, hot water temperature, or fuel flow | Read |
| Heat input energy | Read, for COP |
| Purge and vacuum alarms, solution temperature | Read |

Heat input is measured in different units than electric power: steam in pounds per hour or pressure and flow, hot water by flow and temperature difference, gas in volume or energy. Meter it so a thermal COP can be calculated, using the same relationship as for chilled water: 500 x gpm x delta-T for water.

## Maintenance

- Water treatment is important on both circuits. Corrosion inhibitors protect the solution side, and poor condenser water quality fouls tubes.
- Keep tube surfaces clean, and check approach temperatures as described on [Electric chillers](electric-chillers.html).
- Test the solution periodically, since its condition affects performance.
- Maintain the purge system and check vacuum.
- Service the burner and combustion controls on direct-fired machines.

> The absorption cycle description, the working pairs, the COP, steam consumption and capacity figures come from the DOE tip sheet. The heat-rejection comparison is derived arithmetic. The controls, crystallization, maintenance and application guidance are general practice and are not from a manufacturer document; follow the machine manufacturer's documentation.
