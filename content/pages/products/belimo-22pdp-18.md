---
id: belimo-22pdp-18
type: product
title: "Belimo 22PDP-18 Water Differential Pressure Sensor"
summary: "Liquid differential pressure sensor for water and water-glycol, ranges to 5, 10 or 35 bar, 4-20 mA / 0-5 V / 0-10 V output, with LCD."
manufacturer: belimo
productLine: belimo-pressure-sensors
category: sensor
protocols: []
status: current
review: needs-review
partNumbers:
  - number: 22PDP-185
    description: Water differential pressure sensor, 0 to 5 bar, overpressure 10 bar, burst 50 bar
    source: https://belimo.com/mam/general-documents/datasheets/en-gb/belimo_22PDP-18.._datasheet_en-gb.pdf
  - number: 22PDP-186
    description: Water differential pressure sensor, 0 to 10 bar, overpressure 20 bar, burst 100 bar
    source: https://belimo.com/mam/general-documents/datasheets/en-gb/belimo_22PDP-18.._datasheet_en-gb.pdf
  - number: 22PDP-189
    description: Water differential pressure sensor, 0 to 35 bar, overpressure 70 bar, burst 350 bar
    source: https://belimo.com/mam/general-documents/datasheets/en-gb/belimo_22PDP-18.._datasheet_en-gb.pdf
sources:
  - https://belimo.com/mam/general-documents/datasheets/en-gb/belimo_22PDP-18.._datasheet_en-gb.pdf
related: [differential-pressure-sensors, analog-signals, belimo-22adp-584, control-valves]
---
From the Belimo technical data sheet (en-gb, 2026-10-14). Active sensor for differential pressure in HVAC water systems; suitable for water and water-glycol mixtures.

| Item | Value |
| :--- | :--- |
| Supply | 24 V AC/DC (21.6 to 26.4 V); 3.1 VA AC, 1.8 W DC |
| Outputs | 4 to 20 mA (max. 500 ohm), or 0 to 5 V / 0 to 10 V (min. 10 kohm), selected with a switch while unpowered |
| Ranges | Four per model; for the -185: 0-5, 0-2.5, 0-1 and 0-0.5 bar (factory setting is the widest) |
| Accuracy | plus or minus 1.0 % FS on range 1, 0.5 % on range 2, 0.4 % on ranges 3 and 4; FS is always the sensor's maximum range |
| Long-term stability | plus or minus 0.25 % FS per year per transmitter |
| Response time | under 0.5 s |
| Connection | G 1/4 inch; fluid temperature -40 to 105 degrees C (frost protection needed below 2 degrees C) |
| Enclosure | IP65 / NEMA 4X, LCD in bar |

The operating (line) pressure must stay within the measuring range of the model chosen.



## Choosing a Model and Range

This section is an overview drawn from the data above and the other pages in this wiki.

**Pick the model by the largest pressure it must see.** The three models differ in maximum range: 0 to 5 bar (22PDP-185), 0 to 10 bar (-186) and 0 to 35 bar (-189), with overpressure and burst ratings that scale with the range. The line pressure must stay within the model's rating, as the data sheet says.

**Then pick the range by the differential you expect.** Each model offers four selectable ranges. The factory setting is the widest, but accuracy is stated against the sensor's full maximum range and is better on the narrower ranges (plus or minus 1.0 percent on range 1 and 0.4 percent on ranges 3 and 4). For a pump differential setpoint that is a small part of the range, use the narrowest range that still covers the maximum differential, so the setpoint falls well within the scale.

**Output.** Select 4-20 mA or 0-5 V or 0-10 V with the switch while unpowered, and match the controller input and scaling to the range chosen. Confirm in the data sheet whether the output follows the selected range, and rescale the controller input if it does. See [Analog signals](../concept/analog-signals.html).

**Installation.**

- Connect the two ports across the pair of points to be measured, such as a pump's loop supply and return or a coil, using isolation valves so the sensor can be removed.
- The fluid may be water or a water-glycol mixture, between -40 and 105 degrees C; frost protection is needed below 2 degrees C.
- Keep the cable and conduit entries weatherproof, as the enclosure rating assumes.

**Use.** It supports variable-speed pump control on a hydronic loop, where the controller holds a differential pressure at a setpoint, and filter or strainer monitoring; see [Hydronic system control](../concept/hydronic-system-control.html) and [Differential pressure sensors](../concept/differential-pressure-sensors.html). For air, use the [22ADP series](belimo-22adp-584.html). The product line is described on [Belimo pressure sensors](../product-line/belimo-pressure-sensors.html).
