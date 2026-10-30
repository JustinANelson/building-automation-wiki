---
id: humidity-sensors
type: concept
title: "HVAC humidity sensors, dew point, and enthalpy transmitters"
summary: "Capacitive thin-film polymer relative-humidity sensing, accuracy tiers, psychrometric derived values (dew point, enthalpy, wet bulb), and wall, duct, and outdoor transmitter selection."
review: draft
related:
  - temperature-sensors
  - analog-signals
  - io-points
  - hmw90
  - hmd60
  - hmdw110
  - hmt330
  - gmw90
  - qmx3
  - qaa2280-series-2200
  - vt7300
  - vt7600
sources:
  - https://downloads.psl.noaa.gov/BLO/Air-Sea/oceanobs/portable_standard/hardware/HMT330-Series-Datasheet-B210951EN-C-LOW-v2.pdf
  - https://www.iag.co.at/fileadmin/user_upload/product_documents/HMW90_Series_User_s_Guide_M211399EN-A_04.pdf
  - https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
---

**Relative humidity (`%RH`)** is the ratio of the partial pressure of water vapor in air to the saturation vapor pressure of water at the same dry-bulb temperature. Because warmer air can hold exponentially more moisture than cold air, a `%RH` reading is only meaningful when paired with dry-bulb temperature—which is why HVAC humidity transmitters such as the [Vaisala HMW90](../product/hmw90.html), [HMD60](../product/hmd60.html), [HMDW110](../product/hmdw110.html), and [HMT330](../product/hmt330.html) always combine a capacitive humidity element with an onboard `Pt100` or `Pt1000` [temperature sensor](temperature-sensors.html).

## 1. Thin-Film Capacitive Polymer Sensing & Chemical Purge

Modern BAS humidity sensors use a **capacitive thin-film polymer** dielectric sandwiched between two vapor-permeable electrodes on a silicon or glass substrate (such as Vaisala's **HUMICAP®** sensor):

- **Operating Principle**: As water vapor molecules absorb into the hygroscopic polymer film in equilibrium with the surrounding air, the dielectric permittivity ($\varepsilon_r$) of the film increases proportionally to relative humidity. Onboard electronics measure the capacitance change and linearize it across `0 to 100 %RH`.
- **Sensor Variants & Warmed Probes**: The [Vaisala HMT330](../product/hmt330.html) data sheet specifies `HUMICAP 180` / `180R` for general applications and `180C` / `180RC` for environments with **chemical purge** or a **warmed probe** (which keeps the sensor head a few degrees above ambient temperature to prevent liquid condensation on the polymer in near-saturated `95–100 %RH` outdoor or cooling-coil discharge ducts).
- **Chemical Purge Cycle**: Volatile organic compounds (VOCs), cleaning agents, and sterilizing vapors (such as vaporized hydrogen peroxide in laboratories and vivariums) can diffuse into the polymer film and cause calibration drift. The HMT330's chemical purge function periodically heats the sensor element to `~160–180 °C` for several minutes to bake out volatile contaminants and restore baseline calibration.

## 2. Psychrometric Derived Quantities Used in HVAC Sequences

Because microprocessor-based transmitters measure both `%RH` and dry-bulb temperature ($T_{\text{db}}$) simultaneously, models like the [HMW90](../product/hmw90.html), [HMD60](../product/hmd60.html), [HMDW110](../product/hmdw110.html), and [HMT330](../product/hmt330.html) can internally calculate and output psychrometric properties directly over a second `4–20 mA` / `0–10 V` channel or `BACnet` / `Modbus`:

| Psychrometric Variable | Units | Primary Campus HVAC Control Application |
| :--- | :--- | :--- |
| **Relative Humidity (`RH`)** | `%RH` (`0–100%`) | Space comfort humidification (`>30% RH` winter) and dehumidification (`<50–60% RH` summer); museum, cleanroom, and vivarium environmental compliance; high-limit duct humidifier cutout (`>85–90% RH`) |
| **Dew Point Temperature ($T_{\text{dp}}$)** | `°F` or `°C` | **Chilled-beam and radiant cooling condensation prevention** (maintaining chilled water supply temperature `2–3 °F` above space dew point); desiccant dehumidifier and sub-cooling coil control |
| **Specific Enthalpy ($h$)** | `BTU/lb` or `kJ/kg` | **Comparative enthalpy economizer changeover**: comparing outdoor air enthalpy ($h_{\text{OA}}$) against return air enthalpy ($h_{\text{RA}}$) so the AHU only enables free cooling when outdoor air contains less total heat (sensible + latent) than return air |
| **Wet-Bulb Temperature ($T_{\text{wb}}$)** | `°F` or `°C` | **Cooling tower condenser water supply reset**: resetting condenser water setpoint dynamically (`T_wb + approach`, e.g., `T_wb + 7 °F`) to maximize chiller plant efficiency |
| **Absolute Humidity / Mixing Ratio** | `gr/lb` (`grains/lb`) or `g/kg` | Mass-balance moisture tracking across laboratory air handlers and industrial drying processes regardless of air temperature changes across coils |

## 3. Mounting Locations & Accuracy Tiers

1. **Wall / Space Transmitters (`±1.5% to ±3% RH`)**: Mounted in conditioned zones, cleanrooms, museums, or integrated directly into communicating room controllers/sensors:
   - High-precision reference wall transmitters: [Vaisala HMW90 Series](../product/hmw90.html) (`±1.7% RH`, field-replaceable `HTM10` calibration module), [Vaisala GMW90](../product/gmw90.html) (combined CO₂ + RH + T), and [Siemens QMX3.P40 / P70](../product/qmx3.html) (`KNX PL-Link` room sensors).
   - Integrated fan-coil / rooftop room controllers with onboard RH dehumidification sequences: [Viconics VT7355](../product/vt7300.html) and [VT7656](../product/vt7600.html) (`±3% RH` onboard sensor for hot-gas reheat or overcooling-with-reheat dehumidification), and [Siemens QFA3280](../product/qaa2280-series-2200.html).
2. **Duct Transmitters (`±1.5% to ±2% RH`)**: Inserted into return air ducts (for representative building humidity and enthalpy), mixed/discharge ducts, or downstream of steam humidifiers as a modulating high-limit sensor:
   - [Vaisala HMD60 / HMD62 / HMD65](../product/hmd60.html) and [HMDW110 Series](../product/hmdw110.html) with sintered stainless-steel or membrane probe filters.
3. **Outdoor Air (`OSA`) Weatherproof Transmitters**: Mounted inside a multi-plate solar radiation shield (`DTR502B`) on the roof or north wall to measure outdoor enthalpy, wet-bulb, and dew point:
   - [Vaisala HMDW110](../product/hmdw110.html) outdoor radiation-shield models and industrial [Vaisala HMT330 Series](../product/hmt330.html) (`HMT333` / `HMT337` warmed-probe outdoor models).
