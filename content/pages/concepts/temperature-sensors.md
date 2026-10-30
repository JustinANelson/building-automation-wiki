---
id: temperature-sensors
type: concept
title: "Temperature sensors"
summary: "Thermistors, RTDs, and transmitters used to measure air, water, and space temperature in building automation."
review: draft
images:
  - path: images/concepts/thermistor.jpg
    alt: "Resistance versus temperature curves for an NTC thermistor (curve 1, falling) and a PTC thermistor (curve 2, rising); axis labels are in Russian"
    source: "Commons uploader, via Wikimedia Commons: https://commons.wikimedia.org/wiki/File:Thermistor_RT.jpg"
    license: CC BY-SA 3.0
related: [analog-signals, hmw90, hmd60, hmt330]
sources:
  - https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
---
Space and duct temperature is measured with one of three kinds of device.

- **Thermistors.** An NTC thermistor's resistance falls as temperature rises (curve 1 in the figure); a PTC's rises (curve 2). Thermistors are cheap and sensitive but non-linear, so the controller must use the matching curve.
- **RTDs.** Platinum elements such as Pt1000 change resistance almost linearly with temperature: a Pt1000 reads 1000 ohms at 0 degrees C with a temperature coefficient of 0.00385 per degree C (the "385 alpha" curve).
- **Transmitters.** A transmitter conditions the element and sends 4-20 mA or 0-10 V (or a digital protocol), as the Vaisala HMW90, HMD60, and HMT330 do for temperature together with humidity. See [Analog signals](analog-signals.html).

Whichever is used, the controller input type and curve must be set to match, or the reading will be wrong without any fault being flagged.

