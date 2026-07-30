---
name: "Cars"
domain: "Practical"
summary: "Probe a vehicle's CAN bus to find out what the car will actually tell you"
facets:
  - "Basic maintenance"
  - "Mechanical internals"
  - "CAN bus analysis"
  - "UDS / OBD-II diagnostics"
offered: false
evidence:
  - label: "casper-can — reverse-engineered the CAN bus of a 2024 Hyundai Casper"
    href: "https://github.com/tensorturtle/casper-can"
draft: true
---

Reverse-engineering my own car: a 2024 Hyundai Casper (AX), 1.0 T-GDi with HDA I,
to find out whether it could run comma.ai's openpilot. Python tooling over a USB
CAN adapter speaks UDS and OBD-II to the diagnostic connector — vehicle identity,
odometer, and fault codes across fifteen ECU addresses, plus twenty-six live Mode 01
values polled at around 34 Hz.

The result so far is a negative one, which is the useful part. The segment exposed at
the diagnostic connector carries no periodic broadcast traffic at all: everything has
to be actively polled. Openpilot needs the periodic steering, camera, and ABS streams,
so it is not reachable from that port — it would take a physical tap on the ADAS
segment.

Two things left before this comes out of draft. `depth` is still unset — this reads as
working rather than deep, but that is your call. And the summary line above is my
wording, not yours.
