---
id: bas-sizing-calculations
type: concept
title: "BAS sizing calculations: points, controllers, network load, trend storage and power"
summary: "How to count I/O points and size controllers and spare capacity, estimate MS/TP trunk loading, calculate trend and database storage, and check the power budget of a control panel."
review: verified
related: [io-points, supervisory-controllers, field-panels-and-enclosures, bacnet-mstp, rs-485, electrical-power-calculations, measurement-and-verification, bacnet, analog-signals]
sources:
  - https://sid.siemens.com/v/u/A6V10445888
  - https://www.trane.com/content/dam/Trane/Commercial/global/products-systems/equipment/controls/building-management/Tracer-SC/BAS-PRD038K-EN_08012022.pdf
  - https://bluerithm.com/bacnet-technical-summary/
---
Before controllers are ordered or a network is laid out, a BAS design is sized: how many points, how many controllers, how much network traffic, how much data and how much power. This page gives the calculations. Product limits come from each product's data sheet, and the examples are illustrations.

> The traffic and storage figures below are rough planning values written from general knowledge, not measurements of any product. Check them against the controllers' and the front end's documentation and test a representative trunk before committing to a design.

## Counting points

Start from the sequences of operation, not from a catalogue. For each piece of equipment, list the points its sequence needs:

| Type | Meaning | Examples |
| :--- | :--- | :--- |
| AI | Analog input | Temperature, humidity, pressure, flow, CO2, current |
| AO | Analog output | Valve, damper or VFD speed command |
| DI | Digital input | Fan or pump status, filter and freeze alarms, occupancy |
| DO | Digital output | Fan, pump or chiller start; stage enable; floating actuator pair |

See [I/O points](io-points.html) for the point types. Some points are virtual, such as setpoints, schedules and calculated values, and do not use I/O but do use controller memory.

**Example (assumed counts).** A built-up air handler with a supply fan, return fan and mixing section might need: AI for mixed, supply, return and outdoor air temperature, supply and return humidity, duct static pressure, filter differential pressure, mixed air low limit, and CO2 (10 AI); AO for outdoor air damper, heating valve, cooling valve and two fan speeds (5 AO); DI for two fan statuses, freeze stat, smoke detector and filter alarm (5 DI); DO for two fan starts (2 DO). That is 22 points. A VAV box might need 5 to 8, so 200 boxes add 1,000 to 1,600 points.

**Total points** = sum over equipment. Then:

- **Spare capacity.** Specifications commonly ask for 10 to 20 percent spare I/O and memory in each panel. Add it before dividing among controllers.
- **Point types per controller.** Match the counts of AI, AO, DI and DO to a controller's terminals, with universal inputs counted as flexible. A controller that fits the total count but not the mix of types will not work.
- **Controllers** = round up (points / usable points per controller), considering the physical layout, so a controller serves one equipment item or a nearby group.

## Controller memory and limits

Beyond I/O, each controller has limits on the number of schedules, trends, alarms, program lines and integrated devices, which differ by product. The APOGEE panels' differing FLN device limits on [APOGEE FLN](../protocol/apogee-fln.html) are one example. Add up what the design requires and check each against the data sheet. A panel can run out of trend memory or integration points before it runs out of I/O.

## Supply to the controllers

Sum the VA of every controller, module and actuator in the panel and size the 24 V AC transformer with margin, as in [Electrical power calculations](electrical-power-calculations.html). Allow for the heat the panel dissipates; see [Field panels and enclosures](field-panels-and-enclosures.html).

## MS/TP trunk loading

An MS/TP trunk has a fixed data rate, and every request and response takes a share of it. A rough estimate:

- **Raw capacity** = baud rate / 10 bits per byte (8 data bits, start and stop bits). At 38,400 baud that is 3,840 bytes per second, and at 76,800 baud it is 7,680.
- **Demand** = number of points read x bytes per point (including request, response and frame overhead) / polling interval.

**Example.** A supervisor polls 800 points on one trunk once a minute. Assuming about 25 bytes per point exchanged, including overhead:

- Demand = 800 x 25 / 60 = 333 bytes per second
- At 38,400 baud, that is 333 / 3,840 = 8.7 percent of raw capacity

The figure understates the real load, because token passing, polling for new masters and the turnaround time of each device consume time too, and writes, alarms and trend uploads add traffic. Plan to use only a fraction of the capacity: many designers aim well below half. Reduce load by:

- Using **change-of-value** reporting and device-side trends, which send data only when it changes, so the supervisor does not poll; see [BACnet](../protocol/bacnet.html).
- Polling slowly changing points, such as outdoor temperature, less often.
- Dividing a large trunk into several, with routers.
- Raising the baud rate where all devices and the cable allow it.

**Device count.** The electrical limit on an RS-485 segment depends on each transceiver's unit load, as discussed on [RS-485](rs-485.html), and BACnet MS/TP master addresses run from 0 to 127 as described on [BACnet MS/TP](../protocol/bacnet-mstp.html). The practical limit on the number of devices is usually lower than either, set by the traffic and the token cycle. Many designers keep trunks to a modest number of devices.

## Trend storage

Each trend sample takes memory: a value, a timestamp and overhead, often on the order of 12 to 16 bytes in a database.

- **Samples per day per point** = 86,400 / interval (s). At 15 minutes that is 96.
- **Storage** = points x samples per day x days x bytes per sample.

**Example.** 100 points trended every 15 minutes:

- Samples per day = 100 x 96 = 9,600
- Over 30 days = 288,000 samples
- At 16 bytes each = about 4.6 MB

**Controller buffers.** A controller stores a limited number of samples. The Trane Tracer UC family, for example, is described on [Trane Tracer UC](../product-line/trane-tracer-uc.html) as storing up to 25,000 trend samples locally. At one point every 15 minutes, 25,000 samples last 25,000 / 96 = about 260 days, but with the 100 points above sharing it, 25,000 / 9,600 = about 2.6 days. How long a buffer rides through a network outage depends on this arithmetic. The same is true of any controller, so check the sample limit and decide which points need local trends.

**Server database.** A large system adds up fast. Say 10,000 trended points at 15 minutes:

- 10,000 x 96 x 365 = 350,400,000 samples a year
- At 16 bytes, about 5.6 GB a year, before indexes and overhead

Plan the archive, backup and retention policy, and trend only the points that are used. Data needed for [measurement and verification](measurement-and-verification.html) should be kept for the whole baseline and reporting periods.

**Interval choice.** Choose the interval for the purpose: 1 minute for a loop being tuned, 15 minutes for energy and performance analysis, hourly for slow points. A COV trend records only changes, which saves space for steady points but can fail to show a noisy one, so set the increment to suit the sensor.

## Network addressing and numbers

Plan identifiers before commissioning, since changing them later is expensive:

- **BACnet device instances** unique across the whole internetwork, commonly assigned in blocks by building and system.
- **BACnet network numbers** unique for every trunk and IP network.
- **MS/TP MAC addresses** unique within a trunk, numbered contiguously from 1 so that no time is wasted polling empty addresses.
- **IP addresses and VLANs** reserved for controllers, with room to grow.

Document the plan in a table that lists every device with its instance, network number, MAC and location.

## Putting it together: a sizing checklist

1. Count points by type from the sequences, and add spare capacity.
2. Choose controllers by type of point, memory limits and location.
3. Check each product's limits for schedules, trends, alarms and integration.
4. Size the 24 V AC supply and enclosure.
5. Estimate trunk traffic, and divide trunks or use COV so it stays well below capacity.
6. Calculate the trend storage in the controllers and the server.
7. Assign the device instances, network numbers, addresses and names.
8. Revisit the totals when the sequences change, since a point added to a sequence changes every number above.
