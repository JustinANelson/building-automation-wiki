---
id: openair-gde-glb
type: product
title: Siemens OpenAir GDE & GLB Non-Spring Return Floating Damper Actuators
summary: Direct-coupled 24 VAC 3-position (floating) rotary damper actuators rated at 44 lb-in (5 Nm, GDE series) and 88 lb-in (10 Nm, GLB series) for VAV boxes and terminal dampers.
manufacturer: siemens
category: actuator
protocols: []
status: current
review: verified
images:
  - path: images/siemens/openair-gde-glb.svg
    alt: Technical diagram of Siemens OpenAir GDE131.1P and GLB131.1P floating damper actuators showing wiring color codes, torque ratings, and shaft adapter
    source: Own work (BASWiki technical diagram based on Siemens OpenAir GDE/GLB technical instructions 155-188P25 / A6V10238416)
    license: CC0-1.0
partNumbers:
  - number: GDE131.1P
    description: OpenAir 44 lb-in (5 Nm) non-spring return floating damper actuator, 24 VAC, 3 ft plenum-rated cable
    source: https://sid.siemens.com/api/khub/documents/4FetLwkGCXOIekwQQADi4A/content
  - number: GDE131.1U
    description: OpenAir 44 lb-in (5 Nm) non-spring return floating damper actuator, 24 VAC, standard 3 ft cable with conduit adapter
    source: https://sid.siemens.com/api/khub/documents/4FetLwkGCXOIekwQQADi4A/content
  - number: GDE131.1T
    description: OpenAir 44 lb-in (5 Nm) non-spring return floating damper actuator, 24 VAC, screw terminal strip
    source: https://sid.siemens.com/api/khub/documents/4FetLwkGCXOIekwQQADi4A/content
  - number: GDE131.1N
    description: OpenAir 44 lb-in (5 Nm) non-spring return floating damper actuator, 24 VAC, AMP post-header connector for APOGEE TEC
    source: https://sid.siemens.com/api/khub/documents/4FetLwkGCXOIekwQQADi4A/content
  - number: GDE132.1P
    description: OpenAir 44 lb-in (5 Nm) non-spring return floating damper actuator with 0-1000 ohm feedback potentiometer, plenum cable
    source: https://sid.siemens.com/api/khub/documents/4FetLwkGCXOIekwQQADi4A/content
  - number: GDE136.1P
    description: OpenAir 44 lb-in (5 Nm) non-spring return floating damper actuator with dual adjustable auxiliary switches, plenum cable
    source: https://sid.siemens.com/api/khub/documents/4FetLwkGCXOIekwQQADi4A/content
  - number: GLB131.1P
    description: OpenAir 88 lb-in (10 Nm) non-spring return floating damper actuator, 24 VAC, 3 ft plenum-rated cable
    source: https://sid.siemens.com/api/khub/documents/4FetLwkGCXOIekwQQADi4A/content
  - number: GLB132.1P
    description: OpenAir 88 lb-in (10 Nm) non-spring return floating damper actuator with 0-1000 ohm feedback potentiometer, plenum cable
    source: https://sid.siemens.com/api/khub/documents/4FetLwkGCXOIekwQQADi4A/content
  - number: GLB136.1P
    description: OpenAir 88 lb-in (10 Nm) non-spring return floating damper actuator with dual adjustable auxiliary switches, plenum cable
    source: https://sid.siemens.com/api/khub/documents/4FetLwkGCXOIekwQQADi4A/content
related: [apogee, desigo, apogee-tec-vav, apogee-atec, dxr2, gdb181-1e-3, glb181-1e-3, damper-actuators, lmb24-3, nmb24-3]
sources:
  - https://sid.siemens.com/api/khub/documents/4FetLwkGCXOIekwQQADi4A/content
---
The **Siemens OpenAir GDE and GLB** series (Technical Instructions `155-188P25` / `A6V10238416`) are direct-coupled, non-spring return (fail-in-place) rotary damper actuators used on VAV terminal boxes, bypass dampers, and zone dampers driven by 24 VAC 3-position (floating) triac outputs from **APOGEE PTEC (`550-49xPA`)**, **Desigo DXR2**, **Viconics VT7200/VZ8250**, or **Trane Symbio 210** controllers.

### Technical Specifications & Wiring
- **Torque Ratings**:
  - **GDE Series (`GDE131.1x` / `GDE132.1P` / `GDE136.1P`)**: **44 lb-in (5 Nm)** nominal torque (comparable to the Belimo `LMB24-3`).
  - **GLB Series (`GLB131.1x` / `GLB132.1P` / `GLB136.1P`)**: **88 lb-in (10 Nm)** nominal torque (comparable to the Belimo `NMB24-3`).
- **Electrical & Mechanical Details**:
  - **Supply Voltage**: 24 VAC ±20% at 50/60 Hz, power consumption `2 VA` (`1.5 W`).
  - **Run Time**: `90 seconds` at 60 Hz (`110 seconds` at 50 Hz) for 90° rotation; manual gear disengagement button on housing.
  - **Damper Shaft Size**: Self-centering shaft adapter accepts `3/8 to 5/8 in.` (`8 to 16 mm`) round shafts or `1/4 to 1/2 in.` (`6 to 13 mm`) square shafts, minimum `3/4 in.` (`20 mm`) shaft length.
- **Standard Siemens Cable Color Code**:
  - **Wire 1 (`G`, Red)**: 24 VAC System Potential (Hot)
  - **Wire 2 (`G0`, Black)**: 24 VAC System Neutral (Common)
  - **Wire 6 (`Y1`, Violet)**: Floating Control Input — Clockwise (`CW`) rotation
  - **Wire 7 (`Y2`, Orange)**: Floating Control Input — Counterclockwise (`CCW`) rotation
