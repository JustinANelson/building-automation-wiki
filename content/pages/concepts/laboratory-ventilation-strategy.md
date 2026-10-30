---
id: laboratory-ventilation-strategy
type: concept
title: "Laboratory ventilation strategy: air change rates, hood flow, setback and demand-based control"
summary: "What drives laboratory airflow, why a fixed air change rate has no firm basis, how a performance-based approach and demand-based control can cut ventilation safely, what the CU Boulder and I2SL studies report, how to price the savings, and how to manage the safety and governance side with environmental health and safety."
review: verified
related: [laboratory-and-fume-hood-control, phoenix-controls-generations-and-upgrades, ventilation-rate-calculations, psychrometric-calculations, energy-savings-and-payback-calculations, measurement-and-verification, energy-conservation-strategies, airflow-measurement, co2-sensors, chilled-beams, heat-exchangers, hvac-and-controls-through-the-eras, phoenix-traccel-cscp]
sources:
  - https://www.colorado.edu/fm/sites/default/files/attached-files/reducing_campus_ach_safely_an_authority_having_jurisdiction-_edited_8_26_20112submission.pdf
  - https://www.i2sl.org/_files/ugd/59662e_37d2dc9cf1c245bcbfe1ca24180e534e.pdf
---
Laboratories are among the most energy-intensive buildings, because they supply and exhaust large volumes of 100 percent outdoor air. For most laboratories, the largest single lever is how much air they move when nobody is at risk, which is set by minimum air change rates, fume hood flows and thermal loads. This page explains what drives laboratory airflow, what two published sources report about reducing it safely, and how an energy manager can approach it without compromising safety. For the control hardware, see [Phoenix Controls laboratory valves](phoenix-controls-generations-and-upgrades.html) and [Laboratory and fume hood control](laboratory-and-fume-hood-control.html).

> The findings below come from two sources: a 2011 Labs21 conference presentation by the University of Colorado Boulder, and a 2021 I2SL best practices guide on demand-based control, both in the document library. They describe particular campuses and studies, and the I2SL guide's figures about ANSI Z9.5 and NFPA 45 are as described there; the standards themselves were not read. Laboratory ventilation is a safety matter. Do not change minimum airflows, hood flows or occupancy modes without the written agreement of the people responsible for laboratory safety and the authority having jurisdiction.

## What drives laboratory airflow

The I2SL guide identifies three drivers of laboratory supply airflow, and the room airflow is set by whichever is highest at that moment:

1. **Exhaust device flows**, chiefly fume hoods.
2. **Thermal loads**, the airflow needed to remove heat from equipment, lighting and people.
3. **The minimum dilution rate**, the design minimum air change rate (ACH).

The guide notes that many modern laboratories have fewer hoods and lower plug loads, so the minimum air change rate is often the main driver. Reducing airflow means attacking all three, because the highest one sets the flow.

**The air change rate has no firm basis.** The guide says minimum rates are often set to a single value between 6 and 12 ACH without a basis in hard guidelines or dilution performance standards. The CU Boulder presentation makes the same point from the regulator's side: there is no prescribed ACH that determines a safe laboratory except for H occupancies, so the campus adopted a performance-based approach built on loads, hood ventilation needs and the hazard classification of the work.

## The performance-based approach (CU Boulder)

CU Boulder had about 2.1 million square feet of laboratory space, 22 percent of campus floor area but 43 percent of annual energy consumption, built in different eras under different air change philosophies, which is the situation on many campuses. Its safety and facilities groups worked together on a method with three variables:

- **Loads.** Survey equipment (from nameplates, or similar devices if there is no nameplate), meter a sample of representative laboratories, apply a diversity factor for similar types, and consider the envelope. To reduce the load driver further: work with users on equipment purchases, turn equipment off or set it back when idle, and consider infrastructure such as fan coil units so that loads stop driving ventilation.
- **Hood ventilation needs.** The campus standard face velocities were 100 fpm for non-low-flow hoods, 60 to 70 fpm for low-flow high-performance hoods and 80 fpm for retrofit kits on standard hoods. Options to reduce hood flow: replace a hood with a low-flow high-performance type, retrofit it, leave it, or convert a constant-volume system to variable air volume.
- **Hazard classification**, using NFPA guidance and surveys of laboratory activities. The campus classified laboratories as high hazard (6 ACH) or low hazard (4 ACH).

To validate the reduced rates, it combined **laboratory protocol and management** (staff trained on compound hazards, hazard classes, incidental versus catastrophic spills, hoods for high-hazard work and evacuation), a **risk analysis**, and **quantified exposures** by modelling and by a monitored spill test. The spill test used 4 liters of acetone spread on trays, with instruments sampling at several points. The campus reported that the modelled data was conservative, that the lower air change rate (4 ACH) showed higher concentrations over time but never exceeded the occupational exposure limits it plotted, and that the lower rate had a comparable time to evacuate the space to below 10 ppm. The presentation lists the limits of the method: it is based on assumptions, and it does not account for layout, airflow patterns, dead zones or room thermals.

Three main routes to reduce ACH emerged: **rebalance** the system, **modify or replace hoods**, and **modify major infrastructure** such as converting to VAV, adding fan coils or converting to DDC.

**Case study.** A five-story, 137,000 square foot building from about 1995 had air change rates ranging from 10 to 64 ACH and indoor air quality problems. Facilities technicians rebalanced it to the loads, reprogrammed and repaired boxes, and environmental health and safety ran the acetone test before and after. The presentation reports that the air quality problems were eliminated, that annual heating and cooling energy fell by about 38 percent in the building's energy model, and that estimated savings of about 60,000 dollars a year (the slide reads "$60,00", so the figure is read as 60,000) against a project cost of about 125,000 dollars gave a simple payback of about two years, with measurement and verification still to confirm it. The campus estimated an average 15 to 19 percent energy reduction across the whole campus from the approach. These are one campus's reported estimates, not guarantees.

The presentation also names open questions that apply anywhere: how to keep refining the assumptions, how to quantify savings against a moving baseline, and how to manage laboratories that constantly change, which needs users to tell safety and facilities staff when use changes.

## Demand-based control (I2SL)

Instead of a fixed rate, **demand-based control (DBC)**, also called centralised demand control ventilation, varies the air change rate from a low minimum up to purge values based on measured air quality. The I2SL guide describes it as:

- A **minimum** as low as 2 or 4 ACH, and **purge** values of 8 to even 16 ACH when contaminants are detected.
- Sensing of **total volatile organic compounds (TVOC)**, particles, carbon dioxide and dew point. A photo-ionisation detector (PID) is recommended for TVOC because it detects hundreds of common laboratory chemicals, with a typical threshold of about 0.2 ppm to start raising the rate.
- A study the guide summarises covering more than 1.5 million hours in over 300 laboratory areas at 18 facilities, reporting that 2 to 4 ACH gave low VOC and particle levels 98 to 99 percent of the time, with periodic release events needing higher rates for the remainder.
- Typical operation of **4 ACH by day and 2 ACH at night and on weekends**, when sashes are closed, thermal loads are lower and temperature control can be set back.
- **Differential measurement.** Contaminants should be judged as room level minus supply level, because dilution only removes what the room generates. A high supply-air level would otherwise command every room to purge.
- **Multiplexed sampling.** Rather than a sensor in every room, air from different rooms is routed sequentially, about every 30 seconds, to a shared sensor set, so that one set can serve about 30 areas, sampling each every 15 minutes. This reduces the sensors to calibrate by a factor of about 30 and gives better differential accuracy because the same sensor measures supply and room. The guide notes calibration through periodic exchange of factory-calibrated sensors.
- The guide says the University of California, Irvine reduced the energy use of more than a dozen laboratory buildings by over 50 percent, with DBC an important part of that programme.

The guide adds that engineers must work with the owner's health and safety personnel to determine the chemicals in use and the permissible levels, and that sensors should be evaluated for their ability to detect the relevant compounds.

### Hood flow, per the I2SL guide

- For all but very low hood density (less than about one hood per 2,000 square feet), **VAV fume hoods** are recommended so flow falls when the sash is lowered. Also suggested: low-face-velocity hoods, a design opening of 18 inches or less, and sash-closing habits.
- The guide describes the standards as follows. The 2003 version of ANSI Z9.5 stipulated a minimum hood flow of 25 cfm per square foot of bench area, which NFPA 45-2004 also cited. NFPA 45-2011 removed the figure and pointed to Z9.5. Z9.5-2012 no longer requires a fixed minimum; the minimum must be sufficient to prevent hazardous concentrations in the hood, supported by a hazard assessment and management of change. Its non-binding section gives a potential range of 150 to 375 hood air changes. For typical hood densities, the guide says this often translates to room minimums of about 2 to 4 ACH or less.
- Reducing **thermal load drivers**: laboratory plug and lighting loads are typically about 2.5 to 3 W/ft² or less, with daytime thermal loads often needing less than about 4 ACH and night setback bringing the need to 2 ACH or less. Local hydronic cooling such as [chilled beams](chilled-beams.html), radiant ceilings or fan coil units can take thermal load off the airflow.

## What this means for a campus with mixed-age labs

- **Start with a survey.** For each laboratory record the hood count and type, the face velocities, the current minimum ACH, the control type, the hazard class and the controls vintage; see [Phoenix Controls laboratory valves](phoenix-controls-generations-and-upgrades.html) for identifying the valves.
- **Rebalancing is often the cheapest first step.** Large differences between laboratories (10 to 64 ACH in the CU case) suggest settings that no one ever revisited. Check that actual flows match the sequences before changing anything.
- **Match the strategy to the controls.** Occupancy-based setback and DBC need controllers that can change minimum flow and report room state; older analog systems may need upgrading first. Pneumatic or constant-volume hoods limit what is possible.
- **Decouple thermal load from ventilation** where the building allows it.
- **Involve safety from day one.** Environmental health and safety, the authority having jurisdiction and the laboratory users should own the decision; the BAS technician and energy manager supply data and implementation.
- **Plan for change.** Laboratories are repurposed. Require users to notify safety and facilities when their work changes, and re-evaluate the settings when it does.

## Pricing the savings

Convert the air change rate to airflow, then to energy, with the relationships on [Ventilation rate calculations](ventilation-rate-calculations.html) and [Air-side calculations](psychrometric-calculations.html).

**Example** (illustrative numbers): a laboratory of 1,000 ft² with a 10 ft ceiling has a volume of 10,000 ft³.

- At 10 ACH, airflow = 10 x 10,000 / 60 = 1,667 cfm.
- At 6 ACH, airflow = 1,000 cfm, a reduction of 667 cfm.
- Treating 100 percent outdoor air that is conditioned by an average 30 degrees F difference, the sensible load removed is about 1.08 x 667 x 30 = 21,600 Btu/h, plus the latent load in humid periods and the fan energy; see [Fan and pump power calculations](fan-and-pump-power-calculations.html).
- Over a year, that load continues around the clock, which is why the savings from laboratory ventilation are large. Heat recovery on the exhaust, where installed, reduces the net load; see [Heat exchangers](heat-exchangers.html).

Evaluate the project with [Energy savings and payback calculations](energy-savings-and-payback-calculations.html), and verify the result with [Measurement and verification](measurement-and-verification.html). The CU presentation's remark about a moving baseline is real: laboratory use changes, so the baseline model must include the drivers that change.

## Controls and verification

- **Setback** by occupancy or schedule, with a manual override and a return to the occupied rate that is fast enough for safety.
- **Emergency modes** (spill, fire, loss of power) must still override any setback; test them after changes.
- **Hood performance** should be verified after ventilation changes that affect it, with face velocity checks and the containment test method the owner specifies (commonly ASHRAE 110). This bullet is general practice and was not taken from the two sources above.
- **Alarms and displays.** Keep hood monitors, room pressure alarms and fail-safe behaviour functional; see [Phoenix Controls laboratory valves](phoenix-controls-generations-and-upgrades.html).
- **Trend** flows, room pressure and occupancy so that settings can be reviewed and defended.
