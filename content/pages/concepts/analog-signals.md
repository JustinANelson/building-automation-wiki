---
id: analog-signals
type: concept
title: "Analog signals: 0-10 V and 4-20 mA"
summary: "Voltage and current loop signals that connect sensors and actuators to controller inputs and outputs."
review: draft
related: [io-points, control-signals, temperature-sensors, humidity-sensors, damper-actuators, control-valves, hmw90, gmw90]
sources:
  - https://www.iag.co.at/fileadmin/user_upload/product_documents/HMW90_Series_User_s_Guide_M211399EN-A_04.pdf
  - https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
---
Many field devices still report or are commanded through analog signals.

- **4-20 mA current loop.** Loop-powered 2-wire transmitters, such as the Vaisala HMW92 and HMD60 series, draw 4 mA at the bottom of range, which lets a controller tell a valid zero from a broken wire. The Vaisala HMW90 current models have two 4-20 mA outputs.
- **Voltage outputs.** 3-wire transmitters use a separate supply and output, for example 0-5 V or 0-10 V on the HMW93, and 0-1 V and other ranges on the HMD70.
- **Controller side.** A universal input must be configured for the signal type and scaled to engineering units; the transmitter's output scaling and the controller's input scaling must match.
- **Actuators.** Belimo LMB/NMB/AMB24-3 actuators run on 24 V AC/DC with on/off or floating-point control instead of a modulating signal.


## How the two signals work

**Voltage (0-10 V).** The transmitter or controller output drives a voltage between 0 and 10 V DC across a high-impedance input, and the receiver reads it as a fraction of the span. It needs only a thin wire and is easy to test with a multimeter. The weaknesses are that a long run drops a little voltage under load and picks up noise, and a broken wire or dead device reads as 0 V, which cannot be told apart from a legitimate low value. Variants include 2-10 V (which keeps a live zero) and 0-5 V or 0-1 V ranges on some transmitters.

**Current (4-20 mA).** The transmitter regulates the current in the loop and the receiver measures it across a precision resistor, commonly 250 ohm, which turns 4-20 mA into 1-5 V. Because the same current flows through every point in the loop, wire resistance and moderate noise do not change the reading, so current loops suit long runs and noisy plant rooms. The 4 mA floor is a **live zero**: a reading near 0 mA means a broken wire or failed transmitter, so the controller can raise a fault instead of reporting a plausible zero. Some transmitters also use a 0-20 mA range, which has no live zero.

**Powering.** A 2-wire, loop-powered transmitter takes its power from the loop itself, so the loop supply must be high enough to cover the transmitter, the receiver resistor and the wire. A 3-wire or 4-wire device has a separate supply connection. Check the data sheet for the minimum loop voltage and maximum load resistance.

## Scaling

The receiver maps the signal to engineering units linearly. For a 4-20 mA transmitter spanning a low value L to a high value H:

value = L + (current - 4) / 16 x (H - L)

A humidity transmitter spanning 0-100 %RH reads 12 mA as 50 %RH. If the transmitter is configured for a different span from the one entered in the controller, every reading is wrong by a fixed ratio; this is the most common analog commissioning error. Check one point at the low end and one near the high end.

## Resolution and accuracy

The controller converts the signal with an analog-to-digital converter whose resolution, commonly 10 to 16 bits, limits the smallest change it can see. Input accuracy, wiring error and sensor accuracy add, so the loop is only as good as its worst part. A span much wider than the real operating range wastes resolution.

## Wiring practice

- Use twisted, shielded pair for low-level signals and ground the shield at one end only, to avoid ground loops.
- Keep signal wiring away from power cables, drives and ballasts, and cross them at right angles.
- Where several devices share a 24 V AC supply, keep the common terminal consistent; a device that rectifies the supply can disturb a shared common and shift readings on other devices.
- A 0-10 V output will not drive a 4-20 mA input, or the reverse. Match the signal type, and set a universal input to suit before applying power.

## Troubleshooting

Measure first, then compare. A multimeter on the signal terminals shows the voltage, or in series with the loop shows the current. If the measured value is right and the controller reading is wrong, the fault is scaling or input configuration. If the measured value is wrong, check the supply, wiring and the device. A 4-20 mA input reading below about 3.8 mA indicates a broken loop.

See [I/O points](io-points.html) for how these signals appear as points in a controller, and [Control signals](control-signals.html) for the other ways to command an actuator.
