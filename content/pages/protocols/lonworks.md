---
id: lonworks
type: protocol
title: "LonWorks"
summary: "Echelon peer-to-peer control network (LonTalk), common in older terminal-unit controllers."
review: needs-review
related: [bacnet, gmd20]
sources:
  - https://www.iag.co.at/fileadmin/user_upload/product_documents/GMD20.en.pdf
---


> LonWorks detail below is from general knowledge, not from a manufacturer document in the library. Check it against the product's LonMark documentation before relying on specific values.

## What it is

LonWorks is a control network platform developed by Echelon in the 1990s. Its protocol, **LonTalk**, was standardised as ANSI/CEA-709.1 and later ISO/IEC 14908-1. It was built for peer-to-peer control, so unlike a master/slave serial bus any device can send to any other. In buildings it was widely used for room controllers, VAV and fan-coil controllers, lighting and some lab and plant equipment.

## How it works

**Neuron chip and node.** A LonWorks node was classically built around a Neuron chip, which ran the protocol stack and the application. Each node has a permanent 48-bit **Neuron ID** and is given a logical address (domain, subnet and node) when it is installed into a network.

**Network variables.** Instead of reading and writing registers, devices exchange **network variables**. A controller declares an output variable, such as zone temperature, and another device declares a matching input. A commissioning tool **binds** the output to one or more inputs, and the protocol then delivers each update with no polling program written by the integrator. Standard variable types, called **SNVTs**, carry engineering units, so a temperature is always a temperature.

**Profiles.** The LonMark association defines functional profiles, such as a room temperature sensor or a VAV controller, that list the network variables and configuration properties a conforming device must expose. A device can be a standard-profile product or a custom one.

**Physical layer.** The common building channel is the twisted-pair **FTT-10A** at 78 kbps, which allows free topology wiring (bus, star, loop or mixed) as well as doubly terminated bus, and needs no polarity. Power-line and IP-tunnelled channels also exist.

**Routers and the backbone.** Routers separate channels and filter traffic. LonWorks over IP, often called CEA-852, tunnels LonTalk across an Ethernet backbone, and a gateway or supervisory controller usually presents LonWorks points to the BAS as BACnet objects.

## Commissioning

A LonWorks network is configured with a network management tool that assigns addresses and creates the bindings. The tool's database is an essential project record: if it is lost, rebuilding the bindings means rediscovering the network and re-creating them by hand. Devices are identified for installation by pressing a service pin or by Neuron ID.

## Today

New projects have largely moved to BACnet, but LonWorks devices remain in older buildings and some manufacturers still offer a LON variant of their room controllers. In this wiki it appears through the Viconics VT7200 Echelon variants and the Vaisala GML20 module for the GMD20. See [BACnet](bacnet.html) for the protocol that usually replaces it.
