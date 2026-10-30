---
id: measurement-and-verification
type: concept
title: "Measurement and verification: IPMVP options, baseline models and ASHRAE Guideline 14 metrics"
summary: "How energy savings are verified: the four IPMVP options, baseline and reporting periods, weather-normalised regression models, the NMBE and CV(RMSE) fit statistics with Guideline 14 thresholds, energy use intensity, and how BAS trend data supports M&V."
review: verified
related: [energy-savings-and-payback-calculations, efficiency-metrics, fan-and-pump-power-calculations, energy-conservation-strategies, supervisory-controllers, electrical-power-calculations, temperature-sensors, chiller-part-load-performance]
sources:
  - https://www.energy.nsw.gov.au/sites/default/files/2023-09/Measurement_and_Verification_Guide_Module2_Aug_2023.pdf
  - https://impact.ornl.gov/en/publications/suitability-of-ashrae-guideline-14-metrics-for-calibration/
---
Energy savings cannot be metered directly, because the energy that was not used leaves no reading. **Measurement and verification (M&V)** is the practice of estimating savings credibly by comparing measured energy use before and after a measure, adjusted so the comparison is fair. A building automation system is usually the main source of the data. This page describes the common framework, the statistics, and how to use BAS data.

> The IPMVP option definitions and the Guideline 14 thresholds below are as described in published guides and papers listed under sources. The IPMVP core document and ASHRAE Guideline 14 themselves were not read, and Guideline 14 has had newer editions, so check current editions and any program rules before using the thresholds formally.

## The basic equation

Savings are the difference between what the building would have used and what it did use, under the same conditions:

- **Savings = (adjusted baseline energy) - (reporting-period energy)**

The **baseline period** is the time before the measure, and the **reporting period** is the time after. Conditions rarely match: weather, occupancy and operating hours differ. **Routine adjustments** correct for factors expected to change, usually weather, using a model fitted to the baseline data. **Non-routine adjustments** correct for one-off changes, such as an added wing, a changed schedule or new equipment, which the model does not include.

Two ways to state savings:

- **Avoided energy use:** baseline adjusted to the reporting-period conditions, minus actual use. It answers "how much less than we otherwise would have used?"
- **Normalised savings:** both periods adjusted to a typical set of conditions, such as a typical weather year. It answers "what is the saving in a normal year?"

## The four IPMVP options

The International Performance Measurement and Verification Protocol groups methods into four options, based on how the measurement boundary is drawn:

| Option | Name | What is measured | Typical use |
| :--- | :--- | :--- | :--- |
| A | Retrofit isolation, key parameter measurement | The key parameter is measured; the rest may be stipulated (estimated without measurement) | Lighting, where power is measured and hours are estimated from the schedule |
| B | Retrofit isolation, all parameter measurement | All parameters are measured, with no stipulation | A VFD on a fan, with continuous kW trending |
| C | Whole facility | Energy use of the whole facility or a sub-facility, from the utility or main meters | A programme of many measures, where savings are large enough to see in the bill |
| D | Calibrated simulation | Savings are determined by simulating the building | New construction, or where there is no baseline data or meter |

**Choosing.** Options A and B isolate the equipment affected by the measure, so they suit one-system measures and give savings that are not hidden by other changes. Option B needs more metering but gives less uncertainty than A. Option C captures interactions and needs only meter data, but unrelated changes in the building affect it and the savings must be large enough compared with the variation in use to be detectable; a commonly cited rule is that the savings should be at least on the order of 10 percent of the baseline. Option D needs a well-calibrated model and is costly. Some incentive programs restrict which options qualify.

## Baseline models

For Option C, and for B where the load depends on weather, the baseline is a regression fitted to measured data:

- **Monthly model.** E = b0 + b1 x HDD + b2 x CDD, with energy E per month and degree days for heating and cooling. Use 12 or more months of baseline data so that all seasons are included.
- **Daily or hourly model.** E = f(outdoor temperature, time of week, occupancy), often with change-point or piecewise relationships. Weekdays and weekends behave differently, and hourly models include time-of-day terms.
- **Equipment model.** For a chiller, kW as a function of load and condenser water temperature, which is the model behind the curves on [Chiller part-load performance](chiller-part-load-performance.html).

Independent variables must be ones that actually drive the load and are measured in both periods. An unmeasured driver, such as occupancy, hides in the error.

## Goodness of fit: NMBE and CV(RMSE)

ASHRAE Guideline 14 uses two statistics to decide whether a model is good enough. With measured values y, model predictions y-hat, n data points, p model parameters and the mean of the measured values y-bar:

- **NMBE** (normalised mean bias error) = sum of (y - y-hat) / ((n - p) x y-bar). It measures systematic bias, and can be positive or negative.
- **CV(RMSE)** (coefficient of variation of the root mean square error) = square root of (sum of (y - y-hat)^2 / (n - p)) / y-bar. It measures scatter.

Both are needed. Errors of opposite sign cancel in NMBE, so a model can look unbiased while still scattering widely, which CV(RMSE) shows.

The commonly cited criteria for a model fitted to a year of data are:

| Data interval | NMBE | CV(RMSE) |
| :--- | :--- | :--- |
| Monthly | within plus or minus 5 percent | no more than 15 percent |
| Hourly | within plus or minus 10 percent | no more than 30 percent |

These are the Guideline 14 values cited in the literature for 2002 and 2014 editions. A newer edition exists, so confirm which values apply.

**R-squared** is also reported, but it is not a substitute for these. A model with a good R-squared can still be biased or have too much scatter to detect a small saving.

## Is the saving real?

Compare the savings with the model's uncertainty. If savings are 3 percent of baseline and the model's CV(RMSE) is 10 percent, the saving is not distinguishable from noise for one month. Uncertainty falls as more data are used and as the reporting period lengthens; it is larger for short or noisy data. For a formal uncertainty analysis use the method in the guideline or the programme's rules.

**Example of the arithmetic.** A fitted monthly baseline is E = 60,000 + 120 x CDD (kWh). In a reporting month with 300 cooling degree days, the baseline predicts 60,000 + 120 x 300 = 96,000 kWh. Actual use was 92,500 kWh. Avoided energy use = 96,000 - 92,500 = 3,500 kWh, or 3.6 percent. Whether that is real depends on the model's fit, and it should be accumulated over the year.

## Energy use intensity and benchmarking

**Energy use intensity (EUI)** is annual energy divided by floor area, usually in kBtu per ft2 per year, so buildings of different sizes can be compared.

- Convert electricity at 3.412 kBtu per kWh and gas at 100 kBtu per therm, then add.
- EUI = total annual kBtu / gross floor area (ft2).
- **Site EUI** counts energy delivered to the building. **Source EUI** counts the fuel needed to generate and deliver it, and is used where the fuel mix differs.

Compare EUI with similar buildings of the same use and climate, and with the building's own history, adjusted for weather. Benchmarking shows where to look; it does not say why.

## Using BAS data for M&V

A BAS gives trended, timestamped data, which is what M&V needs, if it is managed carefully:

- **Metered, not estimated.** Use a meter for kW and kWh, and flow and temperature for thermal energy; see [Efficiency metrics](efficiency-metrics.html) and [Electrical power calculations](electrical-power-calculations.html).
- **Sensor accuracy.** Calibrate or verify the sensors that the savings depend on, before the baseline is recorded, and again after. A drift between periods looks like savings or lost savings.
- **Same instruments in both periods.** Changing a sensor or meter midway breaks the comparison.
- **Interval and time sync.** Choose an interval that suits the model (15 minutes is common), and keep controller clocks synchronised; see [Supervisory controllers](supervisory-controllers.html).
- **Data gaps.** Record and treat missing data, because gaps from network outages can bias a model.
- **Storage.** Archive baseline data permanently, since it is needed for every later comparison; see [BAS sizing calculations](bas-sizing-calculations.html).
- **Operating changes.** Log changes to setpoints, schedules and equipment, which are non-routine adjustments if they alter energy use.

## Persistence

Savings from controls fade when setpoints are overridden, schedules drift, sensors go out of calibration or sequences are disabled. Keep verifying after the first year, or track a few indicators from the BAS: for example, duct static pressure setpoint, discharge air temperature reset range, run hours, and kW per ton. An alarm when an indicator moves outside its expected range protects the savings.

## What an M&V plan contains

1. The measure and the boundary, and which IPMVP option applies.
2. The baseline period, data, and model, with its fit statistics.
3. The reporting period and the adjustments (routine and non-routine).
4. The meters and sensors, with their accuracy and calibration.
5. The data interval, storage and who is responsible for it.
6. How savings and uncertainty will be calculated and reported.
7. Who bears the risk if savings differ, if the project is performance-based.
