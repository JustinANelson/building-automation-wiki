---
id: ventilation-rate-calculations
type: concept
title: "Ventilation rate calculations: ASHRAE 62.1, CO2 and outdoor air"
summary: "The ventilation rate procedure for breathing-zone and system outdoor air, multiple-zone system efficiency, steady-state CO2 for demand-controlled ventilation, outdoor air fraction from CO2, and air changes per hour."
review: draft
related: [co2-sensors, economizer-control, vav-control, psychrometric-calculations, natural-ventilation, energy-conservation-strategies, laboratory-and-fume-hood-control, airflow-measurement]
sources: []
---
Ventilation calculations set how much outdoor air a space needs, check how much a system actually brings in, and define the CO2 setpoints used for demand-controlled ventilation. They matter for both indoor air quality and energy, since outdoor air has to be heated, cooled and dehumidified.

> The table values below are examples from published editions of ASHRAE Standard 62.1 and vary by edition, occupancy type and local code. The standard was not read for this page. Use the edition adopted by the project's code and its occupancy tables for any design.

## Breathing-zone outdoor airflow

The **ventilation rate procedure** of ASHRAE 62.1 sets outdoor air from the number of people and the floor area:

- **Vbz = Rp x Pz + Ra x Az**

where Rp is the outdoor airflow per person, Pz is the zone population, Ra is the outdoor airflow per unit area, and Az is the zone floor area. Rp and Ra come from a table by occupancy type. For an office, commonly cited values are 5 cfm per person and 0.06 cfm per ft2.

**Example.** An office zone with 9 people and 850 ft2:

- Vbz = 5 x 9 + 0.06 x 850 = 45 + 51 = 96 cfm

## Zone outdoor airflow and air distribution

The air delivered to the zone has to reach the occupants. The **zone air distribution effectiveness** Ez accounts for how well the supply air mixes: a value of 1.0 for a typical cool-air ceiling supply, and lower values (such as 0.8) where warm air is supplied from the ceiling.

- **Voz = Vbz / Ez**

With Ez of 0.8, the 96 cfm zone needs 96 / 0.8 = 120 cfm of outdoor air at the zone. The BAS sees this as a **minimum outdoor air** component in the zone's minimum airflow; see [VAV control](vav-control.html).

## Multiple-zone systems

A single air handler serving many zones must supply enough outdoor air to the most demanding zone, because all the zones receive the same outdoor air fraction. The procedure:

- **Uncorrected outdoor air intake: Vou = D x (sum of Rp x Pz) + (sum of Ra x Az)**, where D is the occupant diversity, the peak system population divided by the sum of the zone populations.
- **Primary outdoor air fraction for the system: Xs = Vou / Vps**, where Vps is the system's primary airflow.
- **Zone primary outdoor air fraction: Zp = Voz / Vpz**, for each zone, where Vpz is the zone's primary airflow.
- **System ventilation efficiency Ev:** a table in the standard, or the simplified relation Ev = 1 + Xs - Zp using the largest Zp.
- **Outdoor air intake: Vot = Vou / Ev**

**Illustrative example.** Three zones, with Rp = 5 cfm per person and Ra = 0.06 cfm per ft2, and Ez = 1:

| Zone | Pz | Az (ft2) | Rp x Pz | Ra x Az | Voz | Primary airflow Vpz (cfm) | Zp |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| A | 20 | 1,000 | 100 | 60 | 160 | 400 | 0.40 |
| B | 5 | 400 | 25 | 24 | 49 | 250 | 0.20 |
| C | 40 | 1,500 | 200 | 90 | 290 | 900 | 0.32 |
| Total | 65 | 2,900 | 325 | 174 | | | |

Say peak system population is 55 of the 65, so D = 55 / 65 = 0.846.

- Vou = 0.846 x 325 + 174 = 449 cfm
- With system primary airflow Vps = 2,000 cfm, Xs = 449 / 2,000 = 0.225
- The largest Zp is 0.40 (zone A), so Ev = 1 + 0.225 - 0.40 = 0.825
- Vot = 449 / 0.825 = about 544 cfm of outdoor air

This is the outdoor air the air handler must bring in at that condition. A critical zone like A drives the system value, which is why reset strategies often look at the critical zone; see [Economizer control](economizer-control.html). The numbers are invented to show the method and are not a design.

## Air changes per hour

- **ACH = cfm x 60 / room volume (ft3)**
- **cfm = ACH x volume / 60**

A 10,000 ft3 room with 1,000 cfm supplied has 6 air changes per hour. Laboratories, operating rooms and isolation rooms are specified in air changes per hour, with minimums for supply and exhaust; see [Laboratory and fume hood control](laboratory-and-fume-hood-control.html).

## Steady-state CO2 and demand-controlled ventilation

People produce CO2, and ventilation dilutes it. In a well-mixed space at steady state:

- **Cs - Co = N / Vo**, with N the CO2 generation rate per person and Vo the outdoor airflow per person, the result in parts per million when the units are consistent.

For sedentary office work, N is about 0.0105 cfm (about 0.3 L/min) of CO2 per person. At 15 cfm of outdoor air per person:

- Cs - Co = 0.0105 / 15 = 0.0007, which is 700 ppm above the outdoor concentration.

At 20 cfm per person, the rise is 525 ppm. This is why a CO2 sensor can indicate ventilation per person: with outdoor air at about 420 ppm, a steady indoor reading near 1,100 ppm suggests roughly 15 cfm per person. It is a rough indicator, since it assumes steady state, uniform mixing and a known activity level. See [CO2 sensors](co2-sensors.html) for setpoints and placement.

**Time to reach steady state.** The space's CO2 approaches the steady value with a time constant of the room volume divided by the outdoor airflow (V / Vo). A 10,000 ft3 room with 1,000 cfm of outdoor air has a time constant of 10 minutes, so it reaches most of the way in 30 minutes. Fast changes in occupancy will not show immediately in a CO2 sensor, and control loops must be slow enough to accommodate this.

**A DCV control equation.** A demand-controlled ventilation loop raises outdoor air in proportion to the CO2 above a baseline: for example, from the minimum airflow at the baseline concentration to the design airflow at the setpoint. The linear relationship is a common simple implementation. The setpoint may be a difference from outdoor CO2 rather than an absolute value.

## Outdoor air fraction from CO2

Where the supply air is a mix of outdoor and return air, CO2 concentrations give the outdoor air fraction the same way temperatures do:

- **f = (Cr - Cm) / (Cr - Co)**, with return air Cr, mixed air Cm and outdoor air Co

This is useful when the temperature difference between outdoor and return air is small, since CO2 is distinct whatever the weather: outdoor about 420 ppm against a return at, say, 800 ppm. Use well-calibrated sensors and allow for their accuracy, because a 50 ppm error is a large share of an 80 ppm difference. The temperature version is on [Air-side calculations](psychrometric-calculations.html).

## Energy cost of outdoor air

Outdoor air has a conditioning cost:

- Sensible load = 1.08 x cfm x (T_return - T_outdoor)
- Total load = 4.5 x cfm x (h_return - h_outdoor)

Over-ventilating 1,000 cfm in a hot, humid climate, where the total heat difference might be 10 Btu/lb, costs 4.5 x 1,000 x 10 = 45,000 Btu/h, about 3.75 tons of cooling. This is the saving that demand-controlled ventilation and a properly reset minimum outdoor air provide; see [Energy conservation strategies](energy-conservation-strategies.html).

## Verifying outdoor air in service

1. Measure outdoor air flow directly with a flow station where one is installed; see [Airflow measurement](airflow-measurement.html).
2. Otherwise calculate it from the mixed-air temperature or CO2 fraction, as above.
3. Compare with the required Vot at that occupancy.
4. Check that minimum position and DCV settings are being applied; a damper held at a fixed minimum may be too open or too closed as the fan speed changes.
