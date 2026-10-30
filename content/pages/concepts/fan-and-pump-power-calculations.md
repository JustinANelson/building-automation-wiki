---
id: fan-and-pump-power-calculations
type: concept
title: "Fan and pump power calculations and variable speed savings estimates"
summary: "Air and water horsepower, brake horsepower and motor input power for fans and pumps, system efficiency, motor load from current, and a worked bin-hour estimate of variable frequency drive savings."
review: draft
related: [variable-frequency-drives, electrical-power-calculations, energy-savings-and-payback-calculations, static-pressure-reset, hydronic-system-control, airflow-measurement, efficiency-metrics, psychrometric-calculations]
sources:
  - https://www.energy.gov/sites/prod/files/2014/04/f15/motor_tip_sheet11.pdf
---
Fans and pumps are the largest motor loads in most buildings, so estimating their power is central to design and to evaluating energy measures. This page gives the standard equations in inch-pound units, a way to check them against measured current, and a worked example of estimating variable speed drive savings from a load profile.

> The equations are standard fluid-power relationships. The worked example uses assumed efficiencies and an assumed baseline, so its numbers are illustrations. Use fan and pump curves and measured data for real projects.

## Fan power

A fan moves air against a **total pressure** (the sum of static and velocity pressure it must develop).

- **Air horsepower** = cfm x total pressure (in. w.g.) / 6,356
- **Brake horsepower (bhp)** = air horsepower / fan efficiency
- **Motor input kW** = bhp x 0.746 / (motor efficiency x drive efficiency)

The 6,356 comes from the conversion between inches of water, pounds per square foot and foot-pounds per minute (1 in. w.g. is 5.2 lb/ft2, and 33,000 ft-lb/min is one horsepower). Drive efficiency is 1 for a direct-drive fan, about 0.95 for a belt drive, and the VFD efficiency where one is used.

**Example.** A supply fan moves 20,000 cfm against 4.0 in. w.g. total pressure with a fan efficiency of 65 percent:

- Air horsepower = 20,000 x 4.0 / 6,356 = 12.6 hp
- Brake horsepower = 12.6 / 0.65 = 19.4 hp
- With a motor efficiency of 92 percent and direct drive: input = 19.4 x 0.746 / 0.92 = 15.7 kW

The pressure used is the fan's total pressure, including the duct, coil, filter, damper and outlet losses. Static pressure is the common design figure, so check which one a fan table or a curve uses.

## Pump power

A pump moves water against a **head** (pressure rise expressed as feet of water).

- **Water horsepower** = gpm x head (ft) / 3,960 (for water; divide by the specific gravity correction for other fluids)
- **Brake horsepower** = water horsepower / pump efficiency
- **Motor input kW** = bhp x 0.746 / (motor efficiency x drive efficiency)
- **Head from pressure:** head (ft) = pressure (psi) x 2.31 / specific gravity

**Example.** A chilled water pump moves 500 gpm against 80 ft of head with a pump efficiency of 75 percent:

- Water horsepower = 500 x 80 / 3,960 = 10.1 hp
- Brake horsepower = 10.1 / 0.75 = 13.5 hp
- With a motor efficiency of 92 percent: input = 13.5 x 0.746 / 0.92 = 10.9 kW

For a water and glycol mixture, the specific gravity and viscosity change the head and the pump efficiency; use the pump manufacturer's corrected curve. The relationship between flow, temperature difference and heat for the same loop is on [Hydronic system control](hydronic-system-control.html).

## System efficiency

The wire-to-water or wire-to-air efficiency is the product of the component efficiencies: drive x motor x fan or pump. A fan at 65 percent efficiency driven through an 92 percent motor and a 95 percent belt has an overall efficiency of about 57 percent. The DOE Motor Systems Tip Sheet #11 makes the same point for variable speed systems: system efficiency is the product of VFD efficiency, motor efficiency at its load point and driven equipment efficiency.

Pump and fan efficiency vary along the curve, and the best-efficiency point is usually near the design flow. A fan or pump that spends its life far from this point wastes energy and may be selected too large.

## Checking against measured current

If a motor's power is not metered, estimate it from voltage and current; see [Electrical power calculations](electrical-power-calculations.html):

- Three-phase input kW = 1.732 x volts x amps x power factor / 1,000

Power factor falls at light motor load, so using the nameplate value overstates power. A reasonable check is that the estimated brake horsepower, the motor input less motor losses, agrees with the hydraulic or air calculation above. A large mismatch suggests a worn impeller, a wrong flow or pressure assumption, or a belt problem. On a VFD-driven motor, measure power at the drive's output or read it from the drive, because clamp meters can be inaccurate on the drive's switched waveform; see [Variable frequency drives](variable-frequency-drives.html).

## Affinity laws and part load

For a centrifugal fan or pump with a fixed system, the affinity laws give speed ratio n = N2 / N1:

- Flow2 = Flow1 x n
- Pressure or head2 = Pressure1 x n squared
- Power2 = Power1 x n cubed

The DOE tip sheet states that reducing speed (flow) by 20 percent can reduce input power requirements by approximately 50 percent. The laws apply to systems where the resistance follows the square of the flow. A system with a static lift or a fixed setpoint for pressure does not follow them; for such a system, find where the system curve crosses the pump curve at each speed. See [Static pressure reset](static-pressure-reset.html) for how a reset lets a duct system follow the law more closely.

## Worked example: VFD savings from a load profile

The 20,000 cfm fan above draws 15.7 kW at full flow. It runs 4,000 hours a year over the following profile, and the question is how much a VFD saves compared with a constant speed fan using a discharge damper.

| Flow | Hours | Baseline (discharge damper), assumed fraction of full power | Baseline kW | Baseline kWh | VFD efficiency (assumed) | VFD kW | VFD kWh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 100 % | 200 | 1.00 | 15.7 | 3,140 | 0.97 | 16.2 | 3,238 |
| 80 % | 1,000 | 0.92 | 14.4 | 14,444 | 0.96 | 8.4 | 8,370 |
| 60 % | 1,600 | 0.85 | 13.3 | 21,352 | 0.95 | 3.6 | 5,712 |
| 40 % | 1,200 | 0.78 | 12.2 | 14,695 | 0.93 | 1.1 | 1,296 |
| **Total** | **4,000** | | | **53,631** | | | **18,616** |

The VFD kW at each point is 15.7 x (flow ratio) cubed / VFD efficiency. For 80 percent flow: 15.7 x 0.512 / 0.96 = 8.4 kW.

**Result.** Savings are 53,631 - 18,616 = 35,015 kWh a year, about 65 percent. At 0.12 dollars per kWh that is about 4,200 dollars a year. The assumed baseline fractions are illustrative; a different throttling method (inlet vanes, airfoil blades) uses a different curve, and the assumed drive efficiencies are only roughly consistent with the DOE tip sheet's typical values, which are lower at light load on small drives. The method, not the numbers, is the point: split the year into load bins, compute power in each for both cases, multiply by hours and sum.

Where the profile comes from matters most. Use trended flow or speed data for the existing fan where it exists, or a bin analysis of load against outdoor temperature. The financial treatment of the result is on [Energy savings and payback calculations](energy-savings-and-payback-calculations.html), and how to verify it afterwards is on [Measurement and verification](measurement-and-verification.html).

## Common mistakes

- Using static pressure where the equation needs total pressure, or the reverse.
- Applying the cube law to a system with static head or a minimum pressure setpoint.
- Ignoring drive and motor losses at light load.
- Taking the hours from the design day, not from the operating profile.
- Using nameplate power factor and efficiency at light load.
- Forgetting that fan heat adds to the cooling load; see [Air-side calculations](psychrometric-calculations.html).
