---
id: apogee-mec
type: product
title: Siemens APOGEE Modular Equipment Controller (MEC)
summary: APOGEE field panel that mounts on a vertical surface or in an MEC enclosure and communicates on the Building Level Network.
manufacturer: siemens
productLine: apogee
category: field-panel
protocols: [apogee-fln]
status: legacy
review: needs-review
partNumbers:
  - number: 549-021
    description: MEC Model 100 (HOA Ready)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-022
    description: MEC Model 200 (HOA Ready)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-023
    description: MEC Model 300 (HOA Ready)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-041
    description: MEC Model 101 (HOA Not available)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-042
    description: MEC Model 201 (HOA Not available)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-031
    description: MEC Model 110 (HOA Included)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-032
    description: MEC Model 210 (HOA Included)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-033
    description: MEC Model 310 (HOA Included)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-007
    description: MEC Model 200F (HOA Ready)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-008
    description: MEC Model 210F (HOA Included)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-009
    description: MEC Model 300F (HOA Ready)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-010
    description: MEC Model 310F (HOA Included)
    source: https://sid.siemens.com/v/u/A6V10308138
  - number: 549-003
    description: Listed as a Modular Equipment Controller by a distributor only; not found in Siemens MEC installation instructions. Unverified
    source: https://bspautomation.com/brand/siemens/549-003
sources:
  - https://sid.siemens.com/v/u/A6V10308138
---
Models and descriptions are as printed in the Siemens MEC installation instructions A6V10308138 (document 586-280,
Rev. 1, March 2002). HOA means hand-off-auto switches. The MEC has a processor and memory and accepts digital and analog
point blocks for expansion. This page replaces the earlier apogee-549-003 draft, whose only source was a distributor listing.


## Choosing and Applying a Model

This section is an overview drawn from the part-number descriptions above, the installation instructions cited, and the other pages in this wiki.

The model numbers group into three families by hand-off-auto (HOA) provision:

| Models | HOA |
| :--- | :--- |
| 100, 200, 300 | HOA ready (switches can be added) |
| 101, 201 | Not available |
| 110, 210 | Included |

HOA switches let an operator run a point by hand, or turn it off, at the panel regardless of the program, which is useful for pumps and fans that must be started during maintenance. The installation instructions also note that the models with an F suffix provide Floor Level Network communication ports and higher performance, which is what lets a panel act as the master for FLN controllers; see [APOGEE FLN](../protocol/apogee-fln.html). Models 101 and 201 are described there as providing 16 digital and 8 analog inputs.

**Use.** A MEC is an equipment panel: it controls a unit or small plant directly from its own points and expands with digital and analog point blocks. It mounts on a vertical surface or in a MEC enclosure and communicates on the building-level network; see [Field panels and enclosures](../concept/field-panels-and-enclosures.html) for layout and power rules, and [Supervisory controllers](../concept/supervisory-controllers.html) for where a panel sits in the system.

**Replacement and expansion.** The MEC is part of the older APOGEE family; check the model and firmware before ordering spares, and see the [APOGEE](../product-line/apogee.html) line page for the current alternatives such as the [PXC Compact](pxc-compact.html).
