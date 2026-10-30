---
id: apogee-fln
type: protocol
title: APOGEE Floor Level Network (FLN)
summary: Siemens proprietary RS-485 field network connecting APOGEE terminal controllers to panels.
review: draft
related: [rs-485, apogee-tec-vav, apogee-atec, apogee-mbc, vav-control]
sources:
  - https://sid.siemens.com/v/u/A6V10445888
---
The Floor Level Network (FLN, also written Field Level Network) connects equipment controllers, FLN end devices and fume hoods to an APOGEE field panel. In the PTEC manual an *equipment controller* is an FLN device such as a BACnet PTEC or ATEC that provides individual room or mechanical equipment control, or additional point capacity, to a field panel.

**Wiring.** A PTEC connects to the FLN trunk on three screw terminals labelled positive, negative and reference, which is the usual RS-485 arrangement; see [RS-485](../concept/rs-485.html). The controller is powered separately from 24 V AC on its own terminals.

**Addressing.** Each controller has a controller address point (CTLR ADDRESS) that identifies it on the FLN trunk.

**Operation.** A controller can run stand-alone as a DDC room controller or be networked with a field panel, which supplies the supervisory connection. Despite the "BACnet" in the product name, the PTEC is described as the Siemens FLN controller; the trunk itself is the proprietary APOGEE protocol. Baud rate and trunk length limits have not been sourced yet.
