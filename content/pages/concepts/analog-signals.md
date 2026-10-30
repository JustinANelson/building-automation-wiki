---
id: analog-signals
type: concept
title: "Analog signals: 0-10 V and 4-20 mA"
summary: "Voltage and current loop signals that connect sensors and actuators to controller inputs and outputs."
review: draft
related: [temperature-sensors, damper-actuators, hmw90, gmw90]
sources:
  - https://www.iag.co.at/fileadmin/user_upload/product_documents/HMW90_Series_User_s_Guide_M211399EN-A_04.pdf
  - https://www.vaisala.com/sites/default/files/documents/CEN-G-HMD60-70-datasheet-B210839FR.pdf
---
Many field devices still report or are commanded through analog signals.

- **4-20 mA current loop.** Loop-powered 2-wire transmitters, such as the Vaisala HMW92 and HMD60 series, draw 4 mA at the bottom of range, which lets a controller tell a valid zero from a broken wire. The Vaisala HMW90 current models have two 4-20 mA outputs.
- **Voltage outputs.** 3-wire transmitters use a separate supply and output, for example 0-5 V or 0-10 V on the HMW93, and 0-1 V and other ranges on the HMD70.
- **Controller side.** A universal input must be configured for the signal type and scaled to engineering units; the transmitter's output scaling and the controller's input scaling must match.
- **Actuators.** Belimo LMB/NMB/AMB24-3 actuators run on 24 V AC/DC with on/off or floating-point control instead of a modulating signal.

