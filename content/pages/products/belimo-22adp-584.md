---
id: belimo-22adp-584
type: product
title: "Belimo 22ADP-584 Air Differential Pressure Sensor"
summary: "Duct and filter differential pressure transmitter for air, 8 selectable ranges within -100 to 2500 Pa, 0-5 V, 0-10 V or 4-20 mA output."
manufacturer: belimo
productLine: belimo-pressure-sensors
category: sensor
protocols: []
status: current
review: needs-review
partNumbers:
  - number: 22ADP-584
    description: Air differential pressure transmitter, -100 to 2500 Pa, no display, no auto-zero
    source: https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_22ADP-584.._datasheet_en-us.pdf
  - number: 22ADP-584A
    description: As 22ADP-584 with auto-zero
    source: https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_22ADP-584.._datasheet_en-us.pdf
  - number: 22ADP-584B
    description: As 22ADP-584 with LCD display and auto-zero
    source: https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_22ADP-584.._datasheet_en-us.pdf
  - number: 22ADP-584L
    description: As 22ADP-584 with LCD display, no auto-zero
    source: https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_22ADP-584.._datasheet_en-us.pdf
  - number: A-22G-A05
    description: Bluetooth dongle for the Belimo Duct Sensor Assistant App
    source: https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_22ADP-584.._datasheet_en-us.pdf
  - number: A-22AP-A08
    description: Duct connector kit, 2 m PVC tube, 2 duct connectors (supplied with the sensor)
    source: https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_22ADP-584.._datasheet_en-us.pdf
sources:
  - https://www.belimo.com/mam/general-documents/datasheets/en-us/belimo_22ADP-584.._datasheet_en-us.pdf
related: [differential-pressure-sensors, analog-signals, belimo-22pdp-18, setra-264]
---
From the Belimo technical data sheet (en-us, 2024-08-13). For monitoring air filters, fan V-belts and pressure differential systems in HVAC; air and non-flammable, non-aggressive gases only.

| Item | Value |
| :--- | :--- |
| Supply | 24 V AC/DC (AC 19 to 29 V, DC 15 to 35 V); 4.3 VA AC, 2.3 W DC |
| Outputs | One 0 to 5 V or 0 to 10 V (min. load 10 kohm), selected with a switch, or one 4 to 20 mA (max. load 500 ohm). Switching to 0 to 5 V also changes the current output to 4 to 12 mA |
| Ranges | S0 0 to 2500 Pa, S1 0 to 2000, S2 0 to 1500, S3 0 to 1000, S4 0 to 500, S5 0 to 250, S6 0 to 100, S7 -100 to 100 Pa |
| Accuracy | plus or minus 0.02 in. WC for ranges up to 2 in. WC; plus or minus 0.04 in. WC above that |
| Long-term stability | plus or minus 2.5 % of full-scale output over 4 years |
| Response time | adjustable, 0.8 s or 4.0 s |
| Sensing element | piezo |
| Enclosure | IP65 / NEMA 4X; UL 2043 compliant for air plenums |
| Ambient | -10 to 50 degrees C, max 95 % RH non-condensing |

**Zero calibration.** Models with auto-zero re-zero the transmitter every 10 minutes (about 4 seconds, with the output held at the last value) and are maintenance-free. Without it, manual zero is needed every 3 months for a 1 in. WC range, 6 months for 2 in. WC and 12 months for larger ranges; power the device for 15 minutes first and remove both tubes.

**Setup.** The sensor ships with factory defaults. Ranges and display options can also be set with the Belimo Assistant app through the A-22G-A05 dongle.
