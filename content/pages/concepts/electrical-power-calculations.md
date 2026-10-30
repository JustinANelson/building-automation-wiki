---
id: electrical-power-calculations
type: concept
title: "Electrical power and energy calculations for BAS design and evaluation"
summary: "Single- and three-phase kW, kVA and amps, power factor and correction, energy and demand cost, 24 V AC transformer sizing for controls, and voltage drop in control and sensor wiring."
review: verified
related: [fan-and-pump-power-calculations, efficiency-metrics, variable-frequency-drives, field-panels-and-enclosures, analog-signals, energy-savings-and-payback-calculations, damper-actuators, bas-sizing-calculations]
sources:
  - https://www.energy.gov/sites/prod/files/2014/04/f15/motor_tip_sheet11.pdf
  - https://www.energy.gov/sites/prod/files/2014/05/f16/steam14_chillers.pdf
---
A BAS engineer needs electrical arithmetic in two places: estimating the energy that equipment uses (to evaluate performance and savings) and sizing the low-voltage power and wiring of the control system itself. This page gives the standard relationships with worked examples.

> These are standard electrical relationships written from general knowledge. Equipment ratings, wiring limits and Class 2 rules come from the electrical code and the product's documentation, which govern; check them for any real design.

## Power, current and voltage

For a load with a power factor (PF):

| Circuit | Real power (kW) | Apparent power (kVA) | Current (A) |
| :--- | :--- | :--- | :--- |
| Single-phase | V x I x PF / 1,000 | V x I / 1,000 | kW x 1,000 / (V x PF) |
| Three-phase | 1.732 x V x I x PF / 1,000 | 1.732 x V x I / 1,000 | kW x 1,000 / (1.732 x V x PF) |

For three-phase, V is the line-to-line voltage, and 1.732 is the square root of 3. The **power factor** is real power divided by apparent power, PF = kW / kVA.

**Example.** A three-phase 480 V motor draws 24 A at a power factor of 0.85:

- kW = 1.732 x 480 x 24 x 0.85 / 1,000 = 17.0 kW
- kVA = 1.732 x 480 x 24 / 1,000 = 20.0 kVA

Horsepower converts at 0.746 kW per hp, so a motor delivering 20 hp of shaft power at 92 percent efficiency draws 20 x 0.746 / 0.92 = 16.2 kW. Measured current is only a rough estimate of load at light motor loading, because the power factor falls; see [Fan and pump power calculations](fan-and-pump-power-calculations.html).

## Energy and cost

- **Energy** (kWh) = average kW x hours. If the load varies, integrate: sum the kW of each interval times its length, which is what a trend or a meter does.
- **Cost** = kWh x energy rate, plus a demand charge.
- **Demand charge** = peak average kW in the billing interval (often 15 or 30 minutes) x demand rate per kW. Reducing a peak by 50 kW at 15 dollars per kW saves 750 dollars each month it sets the peak. Ratchet clauses can hold a charge for months after one high peak.
- **Blended and marginal rates.** A blended rate divides the total bill by total kWh, and includes demand charges. A marginal rate is what one more or less kWh costs. Use the marginal rate for savings that do not change the peak, and add demand savings separately; see [Energy savings and payback calculations](energy-savings-and-payback-calculations.html).

Converting units: 1 kWh = 3,412 Btu. A therm is 100,000 Btu, so 1 therm = 29.3 kWh of heat content.

## Power factor and its correction

Reactive loads such as induction motors draw current that does no work, so kVA exceeds kW. A low power factor means more current for the same real power, which loads cables and transformers and may incur a utility charge.

- **Reactive power** kvar = kW x tan(arccos PF).
- **Correction capacitor size:** kvar = kW x (tan of the starting angle - tan of the target angle).

**Example.** A 500 kW load at a power factor of 0.80 corrected to 0.95:

- tan(arccos 0.80) = 0.75, and tan(arccos 0.95) = 0.329
- kvar needed = 500 x (0.75 - 0.329) = about 211 kvar

Drives with a DC link present a high displacement power factor at their input, so a facility with many VFDs often needs no correction; see [Variable frequency drives](variable-frequency-drives.html). Correction capacitors on a circuit with drives, or with harmonics, need care, since they can resonate with the supply.

## Sizing a 24 V AC control transformer

Control panels, actuators and many controllers run from 24 V AC. The transformer must carry the sum of the loads with margin.

1. List each device's VA rating: controllers, I/O modules, actuators, relays, sensors with power.
2. Add them. For an actuator, use its running VA; check the data sheet for a higher inrush or holding value.
3. Add a margin. Practice varies, and 20 to 25 percent is common.
4. Choose the next standard transformer size, and check the primary and secondary protection.

**Example.** A panel has a controller at 15 VA, an I/O module at 10 VA, and six floating damper actuators at 5 VA each (30 VA). The total is 55 VA. With a 25 percent margin, 69 VA, so a 75 VA transformer fits.

Remember three constraints:

- **Class 2 limits.** Wiring from a power-limited Class 2 source can use simpler installation methods, but the source is limited in power (commonly 100 VA); a larger transformer may require different wiring or a split into several sources. Check the code.
- **Common reference.** Devices on one transformer that share a 24 V AC common must be compatible; see the half-wave and full-wave rectifier note on [Field panels and enclosures](field-panels-and-enclosures.html).
- **Inrush.** A group of actuators that start at once draws more than the running total, so avoid starting them all together on a small transformer.

## Voltage drop in control wiring

Low-voltage wiring is more sensitive to voltage drop than line-voltage wiring. For a two-conductor run:

- Voltage drop = 2 x length (ft) x R (ohms per 1,000 ft) x I (A) / 1,000

Typical copper conductor resistances are about 6.4 ohm per 1,000 ft for 18 AWG, 4.0 for 16 AWG, 2.5 for 14 AWG and 1.6 for 12 AWG, at about 20 degrees C. They are higher when hot.

**Example.** A 24 V AC actuator drawing 12 VA (0.5 A) is 200 ft from its transformer on 18 AWG wire:

- Round trip = 400 ft, resistance = 6.4 x 0.4 = 2.56 ohm
- Voltage drop = 0.5 x 2.56 = 1.28 V, about 5.3 percent of 24 V

Many actuators tolerate a drop of about 10 percent, but check the data sheet: an actuator at the end of a long run that gets 20 V instead of 24 V may stall or run slowly. Fix a drop that is too large with heavier wire, a closer transformer, or splitting the load.

**Loop-powered 4 to 20 mA signals.** The wiring resistance is part of the loop. The maximum total loop resistance is (supply voltage - transmitter minimum voltage) / 0.020 A. A transmitter that needs 10 V on a 24 V loop leaves 14 V, so 14 / 0.020 = 700 ohms for the input resistor and the wire. For signal quality, use twisted shielded pair, as described on [Analog signals](analog-signals.html).

## Current transformers and metering

Current transformers (CTs) scale a large current to a small one that a controller or meter can read. A 100:5 CT outputs 5 A when the primary carries 100 A. The BAS or meter applies the ratio, so a wrong ratio setting makes every kW reading wrong by a fixed factor. Check the ratio, the polarity and the phase assignment when commissioning power meters, and never open the secondary of a CT that is carrying current.

For power trends, the measurement should give kW and kWh directly from a meter, not an estimate from a single phase current, particularly for loads with a changing power factor; see [Efficiency metrics](efficiency-metrics.html).
