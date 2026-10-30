---
id: psychrometric-calculations
type: concept
title: "Air-side calculations: sensible, latent and total heat, mixed air, and psychrometrics"
summary: "The standard equations for airflow and heat (1.08, 0.68 and 4.5 factors), mixed-air temperature and outdoor air fraction, humidity ratio, dew point and enthalpy, coil loads and fan heat, with worked examples."
review: draft
related: [humidity-sensors, temperature-sensors, economizer-control, discharge-air-temperature-reset, vav-control, airflow-measurement, ventilation-rate-calculations, valve-and-damper-sizing-calculations, fan-and-pump-power-calculations, efficiency-metrics]
sources: []
---
Most air-side design and evaluation reduces to a handful of equations that relate airflow, temperature, moisture and heat. They are used to size supply airflow for a zone, check how much outdoor air an air handler is bringing in, decide whether an economizer should be enabled, and verify a coil's performance from trended data. This page collects them with worked examples.

> These are standard engineering relationships written from general knowledge, not taken from a manufacturer document. The constants assume standard air (about 0.075 lb/ft3 at sea level and 70 degrees F) and must be corrected for altitude or unusual temperatures. Check them against ASHRAE Fundamentals or the project's design software before using them for design.

## Sensible, latent and total heat

Heat carried by air has a **sensible** part (a change in temperature) and a **latent** part (a change in moisture). In inch-pound units:

| Quantity | Equation | Units |
| :--- | :--- | :--- |
| Sensible heat | Qs = 1.08 x cfm x delta-T | Btu/h, delta-T in degrees F |
| Latent heat | Ql = 0.68 x cfm x delta-W | Btu/h, delta-W in grains of moisture per lb of dry air |
| Latent heat (alternative) | Ql = 4,840 x cfm x delta-W | Btu/h, delta-W in lb of moisture per lb of dry air |
| Total heat | Qt = 4.5 x cfm x delta-h | Btu/h, delta-h in Btu per lb of dry air |

The constants come from air density times specific heat times 60 minutes per hour: 0.075 x 0.24 x 60 is about 1.08, and 0.075 x 60 is 4.5. In SI units, sensible heat in watts is about 1.2 x L/s x delta-T in degrees C.

The **sensible heat ratio** is Qs / Qt. A cooling coil serving a dry space has a ratio near 1; one handling a lot of outdoor air has a lower ratio because much of its work is removing moisture.

### Airflow from a sensible load

Rearranged, the airflow needed to remove a sensible load is cfm = Qs / (1.08 x delta-T). A zone with a 10,000 Btu/h sensible cooling load supplied with air 20 degrees F colder than the room needs 10,000 / (1.08 x 20), about 463 cfm. This is the basis of VAV box sizing and of the discharge air temperature trade-offs on [Discharge air temperature reset](discharge-air-temperature-reset.html): colder supply air means less airflow and less fan energy.

### Reheat and coil loads

- **Reheat:** the heat added to a supply stream is Qs = 1.08 x cfm x (T_leaving - T_entering). A box passing 300 cfm of 55 degree F air and heating it to 85 degrees F adds 1.08 x 300 x 30 = 9,720 Btu/h.
- **Cooling coil:** Qt = 4.5 x cfm x (h_entering - h_leaving). The difference in enthalpy includes the moisture removed.
- **Fan heat:** a fan's power ends up as heat in the airstream. The temperature rise is about delta-T = bhp x 2,545 / (1.08 x cfm), where bhp is the fan brake horsepower and 2,545 is Btu/h per horsepower. A 10 bhp fan moving 10,000 cfm adds about 25,450 / 10,800, or 2.4 degrees F. Whether it is upstream or downstream of the coil matters, and it is part of why a measured discharge air temperature is warmer than the coil's leaving air.

## Mixed air and outdoor air fraction

When outdoor and return air mix, the mixed-air temperature is a flow-weighted average:

- Tm = f x To + (1 - f) x Tr, where f is the outdoor air fraction.
- Rearranged: f = (Tr - Tm) / (Tr - To).

**Example.** With return air at 75 degrees F, outdoor air at 40 and mixed air at 55, the outdoor air fraction is (75 - 55) / (75 - 40) = 20 / 35, about 57 percent. If the supply fan moves 10,000 cfm, about 5,700 cfm is outdoor air.

This is a useful check on a damper or a sensor. If the dampers are commanded to 20 percent outdoor air but the temperatures give 57 percent, one of the dampers is leaking or an actuator is not following; see [Economizer control](economizer-control.html) and [Dampers and louvers](dampers-and-louvers.html). The calculation becomes unreliable when the temperature difference is small (below about 10 degrees F), because sensor error and stratification dominate; a carbon dioxide-based version is on [Ventilation rate calculations](ventilation-rate-calculations.html).

The same weighted average applies to humidity ratio and enthalpy, which is how the mixed-air state is found on a psychrometric chart.

## Moisture: humidity ratio, dew point, enthalpy

**Humidity ratio (W)** is the mass of water vapor per mass of dry air:

- W = 0.622 x Pw / (P - Pw), where Pw is the partial pressure of water vapor and P is the total (barometric) pressure.
- Pw = RH x Pws, where Pws is the saturation pressure at the dry-bulb temperature, read from tables or computed by software.
- Multiply W (lb per lb) by 7,000 to get grains per lb.

**Dew point.** The temperature at which air saturates and condensation begins. An accurate and widely used approximation (the Magnus formula), with temperature T and relative humidity RH in percent, is:

- gamma = ln(RH / 100) + a x T / (b + T), with a = 17.62 and b = 243.12 for T in degrees C
- Td = b x gamma / (a - gamma)

For air at 24 degrees C and 50 percent RH: gamma = ln(0.5) + 17.62 x 24 / 267.12 = 0.890, so Td = 243.12 x 0.890 / (17.62 - 0.890) = 12.9 degrees C. This is the quantity compared with a chilled beam or radiant surface temperature in condensation protection; see [Chilled beams](chilled-beams.html) and [Humidity sensors](humidity-sensors.html).

**Enthalpy** of moist air in Btu per lb of dry air, with T in degrees F and W in lb per lb:

- h = 0.240 x T + W x (1,061 + 0.444 x T)

For air at 75 degrees F with W of about 0.0093 (roughly 50 percent RH): h = 18.0 + 0.0093 x (1,061 + 33.3) = 28.2 Btu/lb. Controllers use this to compare outdoor and return air for an enthalpy economizer. An enthalpy comparison is more complete than a dry-bulb comparison, because it includes moisture; the BAS can compute it from a temperature and a humidity reading.

## Altitude and density

All the constants above assume standard air. At altitude, air is less dense, so the same cfm carries less heat. A simple correction multiplies the constants by the density ratio, roughly (P / 14.696) for pressure P in psia at similar temperature. A site at 5,000 ft has about 83 percent of sea-level density. Airflow sensors based on velocity pressure also read differently; see [Airflow measurement](airflow-measurement.html).

## Using the equations with BAS data

| Check | Inputs needed | What it shows |
| :--- | :--- | :--- |
| Zone airflow from load | Load, supply and room temperature | Box size or whether the zone is starved |
| Coil load | Airflow, entering and leaving enthalpy | Whether a coil delivers its rated capacity |
| Outdoor air fraction | Return, mixed and outdoor temperatures | Damper position accuracy |
| Fan heat | Fan power, airflow | Temperature rise to include in sequences |
| Enthalpy comparison | Temperature and humidity of outdoor and return air | Economizer enable |
| Dew point margin | Room temperature, humidity, surface temperature | Condensation risk |

**Accuracy.** Each result is only as good as its inputs. A 1 degree F error in a 20 degree F delta-T is 5 percent of the answer, and a 3 percent error in relative humidity is a larger fraction of an enthalpy difference. See [Temperature sensors](temperature-sensors.html) and [Humidity sensors](humidity-sensors.html), and use matched sensors when differences matter.
