---
id: qaa2280-series-2200
type: product
title: Siemens APOGEE Series 2200 & 3200 Communicating Room Sensors (QAA2280 / QFA3280 / QPA2284)
summary: Communicating digital wall sensors for temperature, relative humidity, and CO2 used with Siemens APOGEE TEC, PTEC, ATEC, and 570-series terminal controllers.
manufacturer: siemens
productLine: apogee
category: sensor
protocols: [apogee-fln]
status: legacy
review: verified
images:
  - path: images/siemens/qaa2280-series-2200.svg
    alt: Technical diagram of Siemens Series 2200/3200 communicating room sensors (QAA2280, QFA3280, QPA2284) showing blank, display, and full HMI variants and RJ11/screw connections
    source: Own work (BASWiki technical diagram based on Siemens Series 2200/3200 installation instructions 149-715 / A6V10744928)
    license: CC0-1.0
partNumbers:
  - number: QAA2280.EWSC
    description: Series 2200 communicating room temperature sensor, blank front cover (white)
    source: https://sid.siemens.com/api/khub/documents/gG9CMjq0fsDKUJwqg1WW1w/content
  - number: QAA2280.DWSC
    description: Series 2200 communicating room temperature sensor with LCD display (white)
    source: https://sid.siemens.com/api/khub/documents/gG9CMjq0fsDKUJwqg1WW1w/content
  - number: QAA2280.FWSC
    description: Series 2200 communicating room temperature sensor with Full HMI (LCD display, setpoint Up/Down buttons, and occupancy override button)
    source: https://sid.siemens.com/api/khub/documents/gG9CMjq0fsDKUJwqg1WW1w/content
  - number: QFA3280.EWSC
    description: Series 3200 communicating room temperature and relative humidity (±2% RH) sensor, blank front cover
    source: https://sid.siemens.com/api/khub/documents/gG9CMjq0fsDKUJwqg1WW1w/content
  - number: QFA3280.DWSC
    description: Series 3200 communicating room temperature and relative humidity sensor with LCD display
    source: https://sid.siemens.com/api/khub/documents/gG9CMjq0fsDKUJwqg1WW1w/content
  - number: QFA3280.FWSC
    description: Series 3200 communicating room temperature and relative humidity sensor with Full HMI
    source: https://sid.siemens.com/api/khub/documents/gG9CMjq0fsDKUJwqg1WW1w/content
  - number: QPA2282.EWSC
    description: Series 2200 communicating room temperature and CO2 sensor, blank front cover
    source: https://sid.siemens.com/api/khub/documents/gG9CMjq0fsDKUJwqg1WW1w/content
  - number: QPA2284.EWSC
    description: Series 2200 communicating room temperature, relative humidity, and CO2 sensor, blank front cover
    source: https://sid.siemens.com/api/khub/documents/gG9CMjq0fsDKUJwqg1WW1w/content
  - number: QPA2284.FWSC
    description: Series 2200 communicating room temperature, relative humidity, and CO2 sensor with Full HMI
    source: https://sid.siemens.com/api/khub/documents/gG9CMjq0fsDKUJwqg1WW1w/content
related: [apogee, apogee-tec-vav, apogee-atec, apogee-570-lab-fume-hood, qmx3, temperature-sensors]
sources:
  - https://sid.siemens.com/api/khub/documents/gG9CMjq0fsDKUJwqg1WW1w/content
---
The **Siemens APOGEE Series 2200 and 3200** communicating room sensors (`QAA2280`, `QFA3280`, `QPA2282`, `QPA2284`, Installation Instructions `149-715` / `A6V10744928`) are the standard digital room temperature, humidity, and CO₂ wall units for **APOGEE BACnet PTEC (`550-49xPA`)**, **BACnet ATEC (`550-430PA`/`431PA`, `550-44x`)**, and **570-Series Laboratory & Pressurized Room Controllers**.

### Model Naming Key & Capabilities
- **Prefix**:
  - `QAA2280`: Room temperature only (`55 to 95 °F` / `13 to 35 °C`, `±0.76 °F` accuracy).
  - `QFA3280`: Room temperature + relative humidity (`0 to 100% RH`, `±2% RH` accuracy with field-replaceable calibrated RH element).
  - `QPA2282`: Room temperature + non-dispersive infrared (NDIR) `CO2` (`0 to 2000 ppm`).
  - `QPA2284`: Room temperature + relative humidity (`±3% RH`) + `CO2` (`0 to 2000 ppm`).
- **Suffix**:
  - `.EWSC`: Blank faceplate (no display or buttons) for public corridors and laboratories where local setpoint adjustment is locked out.
  - `.DWSC`: LCD display only (shows room temperature, RH/CO₂, and occupancy status without setpoint buttons).
  - `.FWSC`: Full HMI with LCD display, setpoint `UP`/`DOWN` buttons, and timed occupancy override button.
- **Wiring & Service Port**: Connects to the host APOGEE TEC/PTEC/ATEC room sensor port (`RTS`) via either a 6-conductor RJ-11 modular cable (`J1` jack) or a 4-position pluggable screw terminal block (`TB1`), and provides a bottom service port for connecting a laptop or field commissioning tool to the controller on the ceiling above.
