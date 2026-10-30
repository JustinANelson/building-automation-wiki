---
id: geothermal-ground-source
type: concept
title: "Geothermal (ground-source) systems"
summary: "Heat pumps that use the stable temperature of the earth or groundwater, and the four ground-loop arrangements."
review: verified
related: [control-strategies, energy-conservation-strategies, heat-pumps, hydronic-system-control, symbio-500, uc400]
sources:
  - https://www.energy.gov/sites/default/files/2021-08/ES-Geothermal%20heat%20pumps_080221.pdf
---
A few feet below the surface the ground stays at a relatively constant temperature: cooler than the air in summer and warmer than the air in winter. Geothermal heat pumps (also called ground-source heat pumps) use that as a dependable winter heat source and summer heat sink. In summer the unit extracts heat from the building and puts it in the ground; in winter it takes heat from the ground and delivers it to the building. This page follows the U.S. Department of Energy *Consumer Guide to Geothermal Heat Pumps* (DOE/EE-2469); it is written for homes, so commercial details differ.

**Loop types.** The DOE guide lists four, three of them closed-loop:

| Loop | Description | When used |
| :--- | :--- | :--- |
| Horizontal (closed) | Trenches at least four feet deep | Usually the most cost-effective for residential, especially new construction with enough land |
| Open loop | Well or surface water circulates directly through the heat pump, then returns to the ground by a well, recharge well or surface discharge | Practical only with an adequate supply of relatively clean water and where groundwater discharge rules are met |
| Pond or lake (closed) | Supply pipe coils at least eight feet under the surface to prevent freezing | May be least expensive if an adequate water body exists, meeting minimum volume, depth and quality criteria |
| Vertical (closed) | Drilled boreholes | Larger systems such as commercial buildings, limited land, or shallow soil over bedrock; costs more but disturbs less land |

**Performance and cost (DOE figures).** Systems reach COP of 300 to 600 percent on the coldest nights, use 25 to 50 percent less energy than air-source heat pumps, and the guide estimates about 2,500 US dollars per ton of capacity before drilling and installation, with a payback of 5 to 10 years. The heat pump itself lasts 20 or more years and the underground piping 25 to 50 years.

**Controls.** The building side is an ordinary heat pump; the loop adds a water temperature to watch. In water-source heat pump controllers such as the Trane UC400, the entering water temperature is an input that decides whether a waterside economizer or electric backup heat is allowed. See [Heat pumps and their controls](heat-pumps.html). Pump staging and loop temperature limits depend on the design and are not covered by the documents in this wiki.

> The sections below are general engineering practice, not taken from the DOE guide cited above, which is a consumer document. Commercial design relies on a loop-field design study.

## Building side and loop side

A ground-source system has two circuits joined by the heat pump's refrigerant circuit. The **loop side** circulates water, or water with antifreeze, through the ground or water body, and the **building side** is a conventional heat pump delivering air or water to the occupied space. Two common arrangements:

- **Water-to-air.** Many small heat pumps, one per zone, each with its own compressor, fan and controller, all connected to a common loop. Each unit rejects heat to the loop when cooling and takes heat from it when heating, so a building that needs heating in one zone and cooling in another moves heat within the loop.
- **Water-to-water.** A central heat pump produces chilled or hot water for a hydronic system, with fan coils, radiant slab or an air handler. See [Hydronic system control](hydronic-system-control.html).

## Loop temperature is the key variable

The loop water temperature, usually called **entering water temperature (EWT)** at the heat pump, decides the unit's efficiency and capacity. In cooling, a lower EWT gives better efficiency; in heating, a higher EWT does. If the ground absorbs more heat in summer than it gives up in winter, or the reverse, the loop temperature drifts from year to year. Commercial buildings are often cooling dominated, so designers either add more borehole length, or add a **supplemental heat rejecter** such as a cooling tower or fluid cooler (a hybrid system), or arrange for heating and cooling balance.

## Control points

| Point | Purpose |
| :--- | :--- |
| Loop supply and return temperature | Show whether the ground field is within design limits and how much heat is being moved |
| Loop pump status and flow | Prove flow before any heat pump runs; without flow, a unit can freeze or trip on high pressure |
| Loop pump speed | A variable-speed pump reduces pump energy when few heat pumps are running |
| Entering and leaving water at each unit | Diagnose a unit that has lost capacity |
| Hybrid heat rejecter or backup heat enable | Brings on the tower or boiler when the loop leaves its limits |

Typical loop sequences:

- **Pump control.** Run the loop pump when any unit calls and prove flow. Where pumps are variable speed, hold a differential pressure or a flow setpoint.
- **Loop temperature limits.** Enable supplemental rejection when the loop climbs above a high limit, and supplemental heat when it falls below a low limit. The low limit protects against freezing, particularly where the loop contains no antifreeze.
- **Alarms.** A loop temperature outside limits, loss of flow, and low pressure or leak in the loop (loss of the fill pressure) are the main alarms.

## Practical notes

- Ground temperatures differ by location, depth and soil, and the design study must predict them for the building's loads. Do not set loop limits from the DOE figures.
- Closed loops are flushed, purged of air and pressure tested at installation. Air or debris in the loop is a cause of poor flow and nuisance trips.
- Open loops add water quality issues such as scaling and fouling of the heat exchanger, and local rules on groundwater discharge.
- The efficiency figures in the DOE guide are for residential systems and do not give a commercial system's savings. Measure them: trend loop temperatures and unit power.

See [Heat pumps and their controls](heat-pumps.html) for the unit-level sequences and [Energy conservation strategies](energy-conservation-strategies.html) for how the system fits a wider efficiency plan.
