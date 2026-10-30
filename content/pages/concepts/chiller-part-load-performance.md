---
id: chiller-part-load-performance
type: concept
title: "Chiller part-load performance, IPLV and NPLV"
summary: "Why chillers spend most of their hours below full load, how efficiency changes with load and with condenser water temperature, how IPLV and NPLV are weighted, and what a BAS can do to keep a plant efficient at part load."
review: verified
related:
  - economizer-control
  - efficiency-metrics
  - electric-chillers
  - energy-conservation-strategies
  - hydronic-system-control
  - temperature-sensors
  - variable-frequency-drives
sources:
  - https://www.ahrinet.org/system/files/2023-06/AHRI%20Standard%20550-590%202020%20%28I-P%29%20with%20Addendum%201.pdf
---
A chiller is sized for the hottest day, but the hottest day is rare. Most of the year the building asks for a fraction of design capacity, so the chiller's efficiency at part load usually matters more to annual energy than its efficiency at full load. This page explains what happens to efficiency as load falls, how the part-load rating numbers are built, and what controls can do.

> The IPLV load points and weights below come from published descriptions of AHRI 550/590 and were not checked against the standard's text. The example numbers are invented for illustration and are not data for any machine. Check both against the current standard and the manufacturer's selection data.

## Why part load dominates

Cooling load follows weather, occupancy and time of day. A plant that peaks at 100 percent spends very few hours there. The rating system acknowledges this: the IPLV weights place 1 percent of operating time at full load and 99 percent at part load, 87 percent of it at 75 and 50 percent load. A chiller that is efficient only near full load is therefore efficient for a small part of the year.

## What drives chiller efficiency: lift

A vapor-compression chiller's compressor raises refrigerant from the evaporator pressure to the condenser pressure. The temperature difference between the refrigerant evaporating and the refrigerant condensing is the **lift**, and the work the compressor does rises with it. Lowering the lift saves energy:

- **Warmer leaving chilled water** raises the evaporator temperature. See chilled water reset on [Hydronic system control](hydronic-system-control.html).
- **Cooler entering condenser water** lowers the condenser temperature. Cooling tower water temperature is limited by the outdoor wet-bulb temperature plus the tower's approach.

The [Hydronic system control](hydronic-system-control.html) page quotes a rule of roughly 1.5 to 2.5 percent less chiller energy per degree F of reduced lift. At part load the condenser heat rejection falls, so the same tower can deliver colder water. This is the **condenser water relief** that part-load ratings assume, and why a plant can use less power per ton of cooling at part load, if its controls let the condenser water temperature fall.

## How efficiency varies with load, by compressor type

The shape of the curve depends on how the compressor unloads.

| Compressor and capacity control | Part-load behaviour |
| :--- | :--- |
| Centrifugal, constant speed, inlet guide vanes | Best efficiency typically between about 60 and 90 percent load; efficiency drops off at low load as the vanes throttle the flow |
| Centrifugal, variable speed or magnetic bearing | Reduces compressor speed with load; efficiency can be best at part load, especially when the condenser water is cool. Limited by the lift the compressor must still produce |
| Screw, slide valve | The slide valve reduces the compression volume; efficiency falls noticeably at low load |
| Screw, variable speed | Better part-load efficiency, with the same dependence on lift |
| Scroll or reciprocating, multiple compressors | Compressors stage on and off, so efficiency stays reasonable at each stage; between stages the machine is at a lower load per compressor |
| Hot gas bypass | Keeps a compressor running at very low loads by recirculating hot gas; wastes energy and is a last resort |

For a given chiller, the catalogue or selection program gives the efficiency at each load and condenser water temperature, and that is the data to use, not a generalisation. For general background on electric machine types, see [Electric chillers](electric-chillers.html). An absorption machine behaves differently, since it unloads by reducing heat input; see [Absorption chillers](absorption-chillers.html).

**Minimum load and cycling.** Below some load the compressor cannot unload further. A centrifugal machine can surge if flow is too low for the lift, and a machine below its minimum load must cycle on and off. Cycling wastes energy in start-ups, stresses the machine and gives poor temperature control. Plant design and staging should avoid having a chiller operate below its minimum.

## IPLV and NPLV

The **integrated part load value (IPLV)** is a single number meant to represent a chiller's efficiency across the year. The AHRI standard rates a chiller at four loads and weights them:

| Load | Weight in IPLV | Entering condenser water (water-cooled) |
| :--- | :--- | :--- |
| 100 % | 1 % | 85 degrees F |
| 75 % | 42 % | 75 degrees F |
| 50 % | 45 % | 65 degrees F |
| 25 % | 12 % | 65 degrees F |

With efficiency expressed as kW/ton, the IPLV is the weighted average: IPLV = 0.01 x A + 0.42 x B + 0.45 x C + 0.12 x D, where A to D are the kW/ton at 100, 75, 50 and 25 percent load. With COP or EER, the weights apply to the reciprocals: IPLV = 1 / (0.01/A + 0.42/B + 0.45/C + 0.12/D).

**Illustrative example** (invented numbers): a chiller with 0.58 kW/ton at 100 percent, 0.46 at 75, 0.38 at 50 and 0.45 at 25 percent has an IPLV of 0.01 x 0.58 + 0.42 x 0.46 + 0.45 x 0.38 + 0.12 x 0.45 = 0.424 kW/ton, markedly better than its full-load figure. The 50 and 75 percent points together carry 87 percent of the weight, so efficiency there matters most.

The **non-standard part load value (NPLV)** uses the same method with the project's own conditions (chilled water temperatures, flow rates and condenser water temperatures) and its own load profile if the user specifies one. It is more representative of a particular installation than IPLV.

**Limits of IPLV.** It is a comparison tool, not a prediction of annual energy. It assumes a particular load profile and condenser water relief, and was designed around a single chiller. A plant with several chillers, a different climate or different operating hours will see different results. The AHRI standard itself cautions against using IPLV to predict annual energy for a specific application. Use hourly simulation or trend data for that.

## Plant level: staging and auxiliaries

A plant uses more than chillers:

- **Auxiliary power.** Chilled water pumps, condenser water pumps and tower fans are part of plant energy. Reducing condenser water temperature saves chiller energy but may cost tower fan energy, so there is an optimum. See [Variable frequency drives](variable-frequency-drives.html).
- **Number of chillers on.** Running two chillers at 50 percent load each can use less or more power than one at 100 percent, depending on their curves, on pump and tower power, and on condenser water. Variable-speed chillers often run more efficiently as several machines sharing the load, while constant-speed machines may do best at fewer machines at higher loads. The answer comes from the machines' curves, not a rule.
- **Staging rules.** Stage on when the running machines approach a high load or flow limit, and stage off when load falls to a point where the remaining machines can carry it efficiently; see [Hydronic system control](hydronic-system-control.html).
- **Free cooling.** When the weather allows, an economizer or waterside economizer can reduce or remove chiller load; see [Economizer control](economizer-control.html).

## What a BAS can do

- **Reset leaving chilled water temperature** upward when loads are light, as long as coils can still dehumidify.
- **Reset condenser water temperature** with the wet-bulb temperature so the lift falls at part load, within the chiller's minimum condenser water limit.
- **Hold chilled water flow** within the chiller's limits, and manage delta-T, since low delta-T forces extra flow and extra machines on.
- **Stage and sequence chillers** from load and measured efficiency.
- **Avoid short cycling** with minimum run and off times and by not staging a chiller on for a trivial load.
- **Trend kW/ton against load and condenser water temperature**, as described on [Efficiency metrics](efficiency-metrics.html), to see whether the machine performs as expected. A chiller that is less efficient than its curve at a given load and temperature has a problem: fouled tubes, low refrigerant, or noncondensables.

## Checking part-load performance in service

1. Choose steady operating points at different loads.
2. Record load (from flow and delta-T), chiller kW, leaving chilled water temperature and entering condenser water temperature.
3. Compute kW/ton at each and compare with the manufacturer's data at those temperatures.
4. Look at approach temperatures, the difference between the refrigerant and the water temperature in the evaporator and condenser. A rising approach at a given load suggests fouling.
5. Repeat after maintenance or a reset change to measure the effect.
