---
id: efficiency-metrics
type: concept
title: "Efficiency metrics: COP, EER, kW/ton, IPLV and power factor"
summary: "How cooling and heating efficiency is expressed (coefficient of performance, EER, kW per ton, IPLV and NPLV), how to convert between them, how a BAS can calculate them from flow, temperature and power, and how they differ from power factor and load factor."
review: draft
related:
  - chiller-part-load-performance
  - electric-chillers
  - energy-conservation-strategies
  - geothermal-ground-source
  - heat-pumps
  - hydronic-system-control
  - temperature-sensors
  - variable-frequency-drives
sources:
  - https://www.energy.gov/sites/prod/files/2014/05/f16/steam14_chillers.pdf
  - https://www.ahrinet.org/system/files/2023-06/AHRI%20Standard%20550-590%202020%20%28I-P%29%20with%20Addendum%201.pdf
---
Equipment efficiency is quoted in several ways that look different but describe the same thing: useful heating or cooling delivered per unit of energy put in. This page explains the common measures, how to convert between them, and how to calculate them from a building automation system.

## The common measures

| Measure | Definition | Units | Better is |
| :--- | :--- | :--- | :--- |
| **Coefficient of performance (COP)** | Useful heating or cooling output divided by energy input | Dimensionless | Higher |
| **Energy efficiency ratio (EER)** | Cooling output in Btu/h divided by electrical input in watts | Btu/h per W | Higher |
| **kW per ton** | Electrical input in kW per ton of refrigeration | kW/ton | Lower |
| **SEER, IEER** | Seasonal or part-load-weighted EER for unitary equipment | Btu/Wh | Higher |
| **IPLV, NPLV** | Part-load-weighted efficiency for chillers; see below | kW/ton, COP or EER | Lower (kW/ton), higher (others) |

The DOE tip sheet on steam-driven absorption chillers defines COP for a thermal machine as chiller load divided by heat input. For a mechanical machine the input is electricity. Because COP is a ratio of the same units, it is dimensionless, and a COP of 4 means four units of cooling for each unit of energy.

One ton of refrigeration is 12,000 Btu/h, which is about 3.517 kW of cooling.

## Converting between them

For an electric chiller or air conditioner:

- COP = EER / 3.412
- EER = 3.412 x COP
- kW/ton = 12 / EER
- kW/ton = 3.517 / COP
- COP = 3.517 / (kW/ton)

| kW/ton | COP | EER |
| :--- | :--- | :--- |
| 1.20 | 2.93 | 10.0 |
| 0.90 | 3.91 | 13.3 |
| 0.70 | 5.02 | 17.1 |
| 0.60 | 5.86 | 20.0 |
| 0.50 | 7.03 | 24.0 |
| 0.40 | 8.79 | 30.0 |

A lower kW/ton is better, because it is power consumed per unit of cooling, while a higher COP or EER is better. Comparing numbers in different units is a common source of error: check which way round a figure is before comparing it.

Heating performance is also expressed as COP: a heat pump delivering 3 kW of heat for 1 kW of electricity has a heating COP of 3, which is why it can beat electric resistance heating, whose COP is 1; see [Heat pumps](heat-pumps.html). The COP of a heat pump depends on the temperature lift between the source and the delivery temperature, so a figure quoted without its conditions means little.

## Rated conditions

An efficiency figure only means something at stated conditions: leaving chilled water temperature, entering condenser water temperature (or outdoor air temperature for an air-cooled machine), flow rates and load. Standard rating conditions let different machines be compared; the AHRI standard for water chillers (AHRI 550/590) defines them for chillers. A machine is rated at its **full-load** point, and its **IPLV** (integrated part load value) or **NPLV** (non-standard part load value) attempts to represent how it performs across the load range; see [Chiller part-load performance](chiller-part-load-performance.html).

> The 100, 75, 50 and 25 percent load points and their weights as given on that page come from published descriptions of AHRI 550/590 and have not been checked against the standard's text. Confirm against the current edition before using them in a specification.

## Typical ranges

The following ranges are general figures for orientation, not data for any product. Actual values depend on size, compressor type, refrigerant, rated conditions and age.

| Equipment | Typical efficiency at full load |
| :--- | :--- |
| Water-cooled centrifugal chiller | About 0.5 to 0.7 kW/ton |
| Water-cooled screw chiller | About 0.55 to 0.75 kW/ton |
| Air-cooled screw or scroll chiller | About 1.0 to 1.3 kW/ton |
| Single-effect absorption chiller | COP about 0.7, on heat input |
| Double-effect absorption chiller | COP about 1.0 to 1.2, on heat input |

The DOE tip sheet gives COP 0.7 for a single-effect absorption machine and says a double-effect machine is about 40 percent more efficient; see [Absorption chillers](absorption-chillers.html). Absorption COPs look low next to electric COPs, but they are measured on heat, not electricity, so the two cannot be compared directly without considering the fuel and its cost.

## Calculating efficiency from a BAS

A BAS can trend equipment efficiency continuously if it has three measurements: cooling delivered, power drawn, and a way to timestamp both.

**Cooling delivered** comes from water flow and temperature difference:

- Cooling in Btu/h = 500 x gpm x delta-T (in degrees F). The constant 500 is about 8.33 lb/gal x 60 min/h x 1 Btu/lb-degree F.
- Tons = gpm x delta-T / 24.

This is the same relationship used on [Hydronic system control](hydronic-system-control.html).

**Power drawn** comes from a power meter on the chiller, pumps and tower fans, read over the network; see [Supervisory controllers](supervisory-controllers.html).

**Then**: kW/ton = kW / tons. Averaging many readings, or better, integrating kWh and ton-hours over a period, gives a stable result; instantaneous values are noisy.

**Plant efficiency.** A chiller's own kW/ton leaves out the chilled water pumps, condenser water pumps and tower fans. Plant efficiency in kW/ton includes them, so it shows whether a more efficient chiller was offset by pumping and tower energy. Trend both.

**Sensor accuracy matters most on delta-T.** A chilled water delta-T of 10 degrees F with a 0.5 degree F error in the difference is a 5 percent error in tons, and the error in the kW/ton result is the same. Use well-matched temperature sensors, calibrate them as a pair, and place them in well-mixed flow; see [Temperature sensors](temperature-sensors.html). Flow meters need adequate straight pipe or a verified installation. A calculated efficiency is only as good as the weakest of its three inputs.

## Terms that are easy to confuse

| Term | What it measures | Relation to efficiency |
| :--- | :--- | :--- |
| **Coefficient of performance** | Output energy per input energy | The efficiency of a machine |
| **Power factor** | Real power (kW) divided by apparent power (kVA) of an electrical load | Describes the electrical load on the supply, not how well the machine heats or cools |
| **Load factor** | Average demand divided by peak demand | Describes how steadily a facility uses power, and affects demand charges |
| **Part-load ratio** | Current load divided by full capacity | The operating point at which efficiency is read |
| **Capacity factor** | Energy delivered over a period divided by what full-time operation at rated output would deliver | A utilisation measure |

**Power factor** matters to electrical supply, not to cooling output. A motor draws reactive current, so apparent power exceeds real power. Utilities may charge for low power factor or for peak demand in kW, and VFDs generally present a high displacement power factor at the supply; see [Variable frequency drives](variable-frequency-drives.html). Improving power factor reduces current and losses in the supply, but does not change how much cooling a chiller delivers per kW.

**Energy and demand.** Energy (kWh) is power integrated over time. Many tariffs also charge for **demand**, the highest average kW in a short interval, usually 15 or 30 minutes. A chiller start can set a monthly peak, so demand limiting and staging matter to cost as well as to efficiency; see [Energy conservation strategies](energy-conservation-strategies.html).

## Practical cautions

- Compare equipment at the same rating conditions, not at each manufacturer's best point.
- Do not read a full-load figure as annual performance: chillers spend most of their hours at part load.
- Distinguish thermal COP from electrical COP when comparing absorption and electric machines.
- Convert units before comparing. A COP of 5 and a kW/ton of 0.7 describe nearly the same machine.
- Treat a BAS-calculated efficiency as an indicator until its sensors have been checked.
