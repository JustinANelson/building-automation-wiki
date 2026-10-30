---
id: apogee-mbc
type: product
title: Siemens APOGEE Modular Building Controller (MBC & RBC)
summary: Legacy card-cage APOGEE field panel backplanes (MBC-24, MBC-40, and RBC) accepting plug-in processor, power supply, and point modules.
manufacturer: siemens
productLine: apogee
category: field-panel
protocols: [apogee-fln]
status: legacy
review: verified
images:
  - path: images/siemens/apogee-mbc.svg
    alt: Technical diagram of Siemens APOGEE MBC-24, MBC-40, and RBC point module backplanes and 545-735 power cable assembly
    source: Own work (BASWiki technical diagram based on Siemens Installation Instructions 586-797 / A6V10308114)
    license: CC0-1.0
partNumbers:
  - number: 545-077
    description: MBC-24 Point Module Backplane (24-slot card cage, 7.5 x 16.94 in., 120 VA minimum transformer)
    source: https://sid.siemens.com/api/khub/documents/RM5O17WWj1_NZaOwely8Qw/content
  - number: 545-078
    description: MBC-40 Point Module Backplane (40-slot card cage, 7.5 x 26.94 in., 200 VA minimum transformer)
    source: https://sid.siemens.com/api/khub/documents/RM5O17WWj1_NZaOwely8Qw/content
  - number: 545-274
    description: RBC Remote Building Controller Point Module Backplane (7.5 x 11.75 in., 80 VA minimum transformer)
    source: https://sid.siemens.com/api/khub/documents/RM5O17WWj1_NZaOwely8Qw/content
  - number: 545-735
    description: MBC/RBC Backplane 24 VAC Power Cable Kit with 10A circuit breaker and surge-protection MOVs
    source: https://sid.siemens.com/api/khub/documents/RM5O17WWj1_NZaOwely8Qw/content
related: [apogee, apogee-mec, pxc-modular, siemens-insight, desigo-cc]
sources:
  - https://sid.siemens.com/api/khub/documents/RM5O17WWj1_NZaOwely8Qw/content
---
The **Siemens APOGEE Modular Building Controller (MBC)** and **Remote Building Controller (RBC)** (Installation Instructions `586-797` / `A6V10308114`, May 2002) are the classic card-cage field panels inherited from Landis & Gyr System 600 and APOGEE generations and still found in mechanical penthouses across older campus buildings.

### Backplane Configurations & Specifications
| Part Number | Model | Dimensions (W × H × D) | Minimum 24 VAC Transformer Rating | Application |
| --- | --- | --- | --- | --- |
| **545-077** | **MBC-24** | 7.5 × 16.94 × 1.13 in. (190.5 × 430.3 × 28.7 mm) | 120 VA (`545-120` enclosure) | Medium mechanical rooms; accepts plug-in CPU/Trunk module, Power Supply module, and up to 24 point/FLN modules |
| **545-078** | **MBC-40** | 7.5 × 26.94 × 1.13 in. (190.5 × 684.3 × 28.7 mm) | 200 VA (`545-123` enclosure) | Large central plant and multi-AHU mechanical rooms; up to 40 point/FLN module slots |
| **545-274** | **RBC** | 7.5 × 11.75 × 1.13 in. (190.5 × 298.5 × 28.7 mm) | 80 VA (`545-128` enclosure) | Remote I/O expansion cabinet slaved to a host MBC over the remote I/O bus |

### Field Notes & Modernization
- **Power Harness (`545-735`)**: Connects 24 VAC transformer power to the backplane (`HOT`, `NEUTRAL`, `EARTH GROUND`) through an inline 10 A circuit breaker and metal-oxide varistors (MOVs) across Hot-to-Ground and Neutral-to-Ground.
- **Retrofit Path**: When upgrading an MBC-24 or MBC-40 cabinet, **PXC Modular** (`PXC100-PE96.A` / `PXC100-E96.A`) or **Desigo PXC7** (`PXC7.E400L`) controllers with **TX-I/O (`TXM1.x`)** modules on DIN rails are typically mounted inside the existing `545-120`/`545-123` enclosure footprint.
