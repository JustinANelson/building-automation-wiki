---
id: valve-and-damper-sizing-calculations
type: concept
title: "Control valve, damper and flow-station sizing calculations"
summary: "Valve flow coefficient (Cv) and pressure drop, valve and damper authority, coil flow from load, actuator torque from damper area, damper leakage, and the K-factor relationship for pressure-based flow sensors."
review: draft
related: [control-valves, dampers-and-louvers, damper-actuators, hydronic-system-control, airflow-measurement, differential-pressure-sensors, vav-control, psychrometric-calculations, fan-and-pump-power-calculations, control-signals]
sources: []
---
Control valves and dampers are sized so that they can pass the design flow with a usable pressure drop and still control well at part load. An oversized device operates in a small part of its stroke, and an undersized one cannot pass the flow. This page collects the standard sizing calculations. The devices themselves are described on [Control valves](control-valves.html), [Dampers and louvers](dampers-and-louvers.html) and [Damper actuators](damper-actuators.html).

> These are standard relationships written from general knowledge. Valve and actuator selection must use the manufacturer's capacity tables and sizing equations, which govern, particularly for steam, glycol and gases.

## Flow required through a coil

The water flow a coil needs comes from its load and the design temperature difference:

- gpm = load (Btu/h) / (500 x delta-T), for water, with delta-T in degrees F
- Tons = gpm x delta-T / 24

**Example.** A chilled water coil with a 240,000 Btu/h load (20 tons) at a 12 degree F delta-T needs 240,000 / (500 x 12) = 40 gpm. A hot water coil with a 100,000 Btu/h load and a 30 degree F drop needs 100,000 / (500 x 30) = 6.7 gpm.

For water and glycol mixtures the constant 500 is lower, because the mixture's density and specific heat are lower; use a fluid property table or the manufacturer's tool.

## Valve flow coefficient (Cv)

The flow coefficient Cv is the number of gallons per minute of water at 60 degrees F that pass through the valve at a pressure drop of 1 psi. The flow through a valve at any pressure drop is:

- gpm = Cv x square root of (delta-P / SG), with delta-P in psi and SG the specific gravity (1.0 for water)
- Therefore Cv = gpm / square root of (delta-P / SG)

**Example.** The 40 gpm chilled water coil, with 5 psi across the valve at full flow:

- Cv = 40 / square root of 5 = 40 / 2.24 = 17.9

Pick a valve with a rated Cv close to, and not below, the calculated value; the next standard size up is common. In metric units the equivalent coefficient is Kv, with Kv = 0.865 x Cv (flow in cubic meters per hour at 1 bar).

The square-root relationship has a practical meaning: to double the flow through a fixed valve opening you need four times the pressure drop. It also means the flow through a valve changes when the pressure across it changes, which is why pressure-independent valves exist; see the Belimo valves described on [Belimo](../manufacturer/belimo.html).

## How much pressure drop for the valve: authority

A valve controls well only if it takes a meaningful share of the pressure drop in its circuit. **Valve authority** is:

- authority = delta-P across the fully open valve / delta-P across the valve plus the rest of the controlled circuit (coil, piping, balancing) at design flow

An authority near 1 gives the installed flow characteristic that the valve's inherent characteristic promises. A low authority distorts it: most of the flow change happens in the first part of the stroke, which makes the loop hard to tune. A common design target is an authority of about 0.3 to 0.5, which in practice means that the valve's drop at full flow is similar to the coil's. Many designers also set a minimum drop, a few psi, to give stable control and enough drop to overcome small pressure changes elsewhere in the system.

**Example.** A coil and its piping drop 6 psi at design flow. A valve sized for 3 psi has an authority of 3 / (3 + 6) = 0.33. A valve sized for 6 psi has 6 / 12 = 0.5, but costs more pump energy. The right balance is a design decision.

The pump energy tradeoff is real: every psi across a valve at design flow is pumping power. Selecting a valve with less drop saves energy but reduces control quality, so a pressure-independent valve, which holds flow regardless of supply pressure, is attractive in variable-flow systems.

**Equal-percentage valves** have an inherent characteristic in which equal increments of stroke change flow by equal percentages. On a heating or cooling coil, whose heat output is not linear with flow, an equal-percentage valve with adequate authority gives a close to linear heat output against stroke. A valve with low authority behaves closer to quick-opening, so it is better to fix authority than to change the characteristic.

## Rangeability and turndown

Rangeability is the ratio of the maximum to the minimum controllable flow. Many valves quote 50:1 but the installed rangeability is lower, because it is degraded by low authority and by actuator resolution. If a coil must operate at 10 percent flow, the valve needs to control accurately there. Two valves in parallel (a small one and a large one) can extend the range when the load varies a great deal.

## Damper authority and sizing

Dampers follow the same logic as valves: authority is the pressure drop across the fully open damper divided by the total pressure drop of the damper and its circuit. A common target is 0.3 to 0.5 for modulating dampers; see the discussion on [Dampers and louvers](dampers-and-louvers.html).

- **Face velocity** = cfm / damper area (ft2). A damper sized for a lower velocity than the duct has a small drop and low authority.
- **Pressure drop** across a damper rises with the square of velocity, and falls with the blade opening. Manufacturer data gives the drop at full open.

**Example.** An outdoor air damper passes 6,000 cfm through 12 ft2: face velocity = 500 fpm. If its full-open drop is 0.05 in. w.g. and the circuit's drop is 0.15, authority is 0.05 / 0.20 = 0.25, which is a little low. A smaller damper, or blanking off a section, raises the drop and the authority.

## Actuator torque for dampers

The torque an actuator must provide depends on the damper's area and its seal and bearing friction. A common method is to multiply the area by the manufacturer's torque per square foot and add a margin:

- torque required = damper area (ft2) x torque per ft2 (in-lb) x safety factor

The ranges quoted on [Damper actuators](damper-actuators.html) are roughly 4 to 7 in-lb per ft2, depending on the seals and the velocity and pressure. For a 20 ft2 damper at 7 in-lb per ft2, 20 x 7 = 140 in-lb, which is 15.8 N-m (1 N-m is about 8.85 in-lb), so a 20 N-m class actuator would be the next size up and gives a margin of about 25 percent. Always use the damper manufacturer's torque value, and add actuators or use a jackshaft for large dampers.

## Damper leakage

Leakage is quoted in cfm per ft2 of damper face at a stated pressure difference. A damper with a leakage rating of 3 cfm/ft2 at 1 in. w.g. leaks 3 x 12 = 36 cfm at that pressure for a 12 ft2 damper. Leakage rises with the square root of pressure, so at 0.25 in. w.g. it is about half. Compare the leakage with the heat lost or gained: 36 cfm of 20 degree F air is 1.08 x 36 x 20 = 780 Btu/h per damper; see [Air-side calculations](psychrometric-calculations.html). Leakage matters most for outdoor air and relief dampers in cold climates, where it can freeze a coil or waste heating energy.

## Flow from a pressure-based sensor: the K-factor

Many VAV boxes and flow stations produce a differential pressure that rises with the square of the flow. The flow is:

- cfm = K x square root of (delta-P), with delta-P in in. w.g. and K a constant for the box and inlet size

The manufacturer gives K, or gives the flow at a known pressure, from which K = cfm_nominal / square root of delta-P_nominal. Controllers hold this as a parameter, often called the **K-factor** or flow coefficient. The Siemens Vn parameter described on [Differential pressure sensors](differential-pressure-sensors.html), where Vn = square root of (300 Pa / nominal pressure), is the same idea scaled to the sensor's range.

**Example.** A box delivers 1,000 cfm at 0.30 in. w.g., so K = 1,000 / square root of 0.30 = 1,826. At 0.05 in. w.g. it passes 1,826 x square root of 0.05 = 408 cfm. That the signal at 400 cfm is 6 times smaller than at 1,000 cfm shows why low-flow measurement is difficult, and why a sensor zero error matters; see [Airflow measurement](airflow-measurement.html).

In velocity terms, velocity (fpm) = 4,005 x square root of velocity pressure (in. w.g.) for standard air, and cfm = velocity x area.

## Checking a selection

1. Calculate the design flow from the load.
2. Compute the Cv or the damper face velocity.
3. Check authority at design flow.
4. Check the minimum controllable flow against the turndown the load requires.
5. Check the actuator's torque, close-off pressure and failure position; see [Control signals](control-signals.html).
6. Check the pressure drop's effect on pump or fan energy; see [Fan and pump power calculations](fan-and-pump-power-calculations.html).
