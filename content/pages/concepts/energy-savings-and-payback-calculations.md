---
id: energy-savings-and-payback-calculations
type: concept
title: "Energy savings, demand, payback and life-cycle cost calculations"
summary: "How to estimate energy and demand savings (bin hours, degree days, combined measures), convert units, and evaluate projects with simple payback, return on investment, net present value, savings-to-investment ratio and life-cycle cost."
review: verified
related: [fan-and-pump-power-calculations, electrical-power-calculations, measurement-and-verification, efficiency-metrics, energy-conservation-strategies, variable-frequency-drives, chiller-part-load-performance, discharge-air-temperature-reset, static-pressure-reset]
sources:
  - https://www.energy.nsw.gov.au/sites/default/files/2023-09/Measurement_and_Verification_Guide_Module2_Aug_2023.pdf
  - https://impact.ornl.gov/en/publications/suitability-of-ashrae-guideline-14-metrics-for-calibration/
  - https://www.energy.gov/sites/prod/files/2014/04/f15/motor_tip_sheet11.pdf
---
Building automation projects are justified, designed and evaluated by savings. This page covers how savings are estimated, how energy and demand are priced, and the common financial measures. [Measurement and verification](measurement-and-verification.html) covers confirming the savings afterwards.

> These are standard methods written from general knowledge. Utility tariffs, discount rates, escalation rates and the required financial test are set by the owner, the utility and any program rules, and must be taken from them.

## Estimating savings

Every estimate answers the same question: how much energy would the system use with the measure, compared with how much it would use without? The answer is a difference between a **baseline** and a **proposed** case, so both must use the same weather, occupancy and operating hours.

**Method 1: Load and hours.** Energy = power x hours x load factor. Savings = (baseline kW - proposed kW) x hours. This works for equipment with steady operation, such as a lighting retrofit or a motor.

**Method 2: Bin analysis.** Split the year into bins (for example, outdoor temperature ranges, or load ranges) with the hours in each, compute baseline and proposed power in each bin, multiply and sum. The VFD fan example on [Fan and pump power calculations](fan-and-pump-power-calculations.html) uses flow bins. Temperature bins use weather data, with hours at each outdoor temperature, which suits economizers, chiller plants and resets.

**Method 3: Degree days.** Heating and cooling loads that are driven by outdoor temperature scale with degree days:

- Heating degree days (HDD) for a day = the base temperature minus the day's mean outdoor temperature, if positive. The base is commonly 65 degrees F but a building with high internal gains has a lower balance point.
- Annual heating energy is roughly proportional to the HDD, so a measure that reduces heat loss by 10 percent reduces energy by about 10 percent over the heating season, apart from fixed loads.
- Fuel use = delivered heat / (equipment efficiency). Savings in fuel from a boiler efficiency gain is heat / efficiency_old - heat / efficiency_new.

**Method 4: Simulation.** A calibrated building energy model captures interactions among measures, and is used for larger projects; see [Measurement and verification](measurement-and-verification.html).

## Combining measures

Do not add the percentage savings of measures that act on the same energy. If measure 1 saves 20 percent of cooling and measure 2 saves 15 percent, the combined saving is not 35 percent, since the second saves 15 percent of what remains:

- Combined fractional savings = 1 - (1 - s1) x (1 - s2) = 1 - 0.80 x 0.85 = 0.32, or 32 percent.

Interactive effects also matter. Reducing lighting power reduces cooling load but raises heating load; reducing outdoor air reduces both cooling and heating energy but also changes fan operation. Consider such interactions explicitly.

## Unit conversions

| Conversion | Value |
| :--- | :--- |
| 1 kWh | 3,412 Btu, or 3.412 kBtu |
| 1 therm (natural gas) | 100,000 Btu, or 100 kBtu |
| 1 ton-hour of cooling | 12,000 Btu |
| 1 hp | 0.746 kW |
| 1 MMBtu | 1,000,000 Btu |

To compare electricity and gas in the same units, convert both to Btu. Site energy counts what is delivered to the building, while source energy counts the fuel used to generate and deliver it, so comparisons across fuels should state which they use.

## Pricing savings

Cost savings = energy savings x the energy rate + demand savings x the demand rate.

- **Energy rate.** Use the marginal rate for the period the savings occur, not the average bill. Time-of-use tariffs price kWh differently by hour, so savings in a peak period are worth more.
- **Demand savings.** Reduce monthly peak kW only if the measure reliably acts at the time of the peak. A VFD saving energy all year may not lower the peak if the fan is at full speed when the building peaks. Demand savings = kW reduction at the peak x demand rate x number of billing months in which it applies, noting any ratchet.
- **Fuel.** Use the delivered cost of gas or steam per unit, including transport and fixed charges, as a marginal cost.

**Example.** Savings of 35,015 kWh a year from the fan on [Fan and pump power calculations](fan-and-pump-power-calculations.html) at 0.12 dollars per kWh give 4,202 dollars a year in energy cost, plus any demand effect.

## Financial measures

| Measure | Formula | Notes |
| :--- | :--- | :--- |
| Simple payback | First cost / annual savings | Ignores the time value of money and the life of the measure |
| Return on investment | Annual savings / first cost | The reciprocal of simple payback, as a percent |
| Net present value (NPV) | Present value of savings - first cost | Positive means the measure beats the discount rate |
| Present value of an annual saving | A x (1 - (1 + i)^-n) / i | A is the annual savings, i the discount rate, n the years |
| Savings-to-investment ratio (SIR) | Present value of savings / present value of costs | Above 1 passes |
| Internal rate of return | Discount rate at which NPV is zero | Compare with the owner's required return |
| Discounted payback | Years until cumulative discounted savings equal first cost | Longer than simple payback |

**Example.** A measure costs 18,000 dollars and saves 4,202 dollars a year for 15 years at a discount rate of 6 percent:

- Simple payback = 18,000 / 4,202 = 4.3 years
- Present value factor = (1 - 1.06^-15) / 0.06 = (1 - 0.4173) / 0.06 = 9.71
- Present value of savings = 4,202 x 9.71 = 40,800 dollars
- NPV = 40,800 - 18,000 = about 22,800 dollars
- SIR = 40,800 / 18,000 = 2.27

If energy prices rise at a rate e, the annual savings grow, and the present value uses an adjusted rate of about (1 + i) / (1 + e) - 1. Replacement or maintenance costs during the life, and the remaining value at the end, enter a **life-cycle cost** analysis: LCC = first cost + present value of operating and maintenance costs + present value of replacement costs - present value of residual value. Compare alternatives on equal terms: the same analysis period and the same discount rate.

**Measure life.** A reset sequence is software and lasts as long as it is maintained. A sensor lasts years. Assign a realistic life to each, and a short life makes a high first cost unattractive. Savings from controls are also at risk of decaying if setpoints are overridden, sensors drift or equipment changes, which is why verification matters.

## Emissions and other benefits

Avoided carbon emissions = energy saved x an emission factor for the fuel or the grid. Grid factors vary by region and by hour and are published by utilities and agencies, so use a current regional value and state its source. Other benefits, such as reduced maintenance and improved comfort, are real but harder to quantify, so identify them separately and do not bury them in the savings number.

## Checklist for a credible estimate

1. Describe the baseline in measurable terms: equipment, schedule, setpoints and measured data where available.
2. Use operating hours from trends or schedules, not from the design assumptions.
3. Use weather data matched to the building's location and year.
4. Apply efficiency at part load, not only at the rating point; see [Efficiency metrics](efficiency-metrics.html).
5. Account for interaction with other measures and with fixed loads.
6. Price energy and demand from the actual tariff.
7. State the life, discount rate and analysis period.
8. State the uncertainty, and plan how to verify the result.
