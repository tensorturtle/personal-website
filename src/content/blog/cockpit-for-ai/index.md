---
title: "A home cockpit for AI-assisted programming"
description: "Work in progress: physical knobs and switches for the settings I currently change by typing."
date: "Aug 17 2026"
draft: false
gifts:
  - embedded-systems
  - llm-applications

---

# A Home Cockpit for AI-Assisted Programming

*Work in progress. Nothing here is built yet — this is the shape of the idea, written
down so it stops rearranging itself in my head.*

## The itch

Flight simulator people build home cockpits: a physical throttle quadrant, a flaps
lever, a panel of toggles and breakers, real instruments. The reason is not nostalgia.
It is that a pilot's settings are continuous, frequently adjusted, and need to be
readable without stopping to look them up. A menu would be intolerable. A dedicated
lever is not.

Everything I just described is also true of how I work with a coding agent, and I am
doing all of it by typing. Thinking level, model, which tools are live, how much
context is left, how fast tokens are coming back — these are flight parameters. I
change them constantly, I want to know their state at a glance, and right now the
state lives in a slash command I half-remember and a status line I stopped reading.

## The mapping

The mapping is the part that keeps holding up under pressure, which is why I think
there is something here and not just a cute analogy.

**Thinking level → flaps.** Flaps are the honest one. They buy you lift at low speed
and they cost you drag; you extend them for the hard, slow part of the flight and
retract them for cruise. Reasoning effort is the same trade, in the same direction,
with the same failure mode of leaving them out when you no longer need them. A detented
lever with discrete positions, because that is what it actually is.

**Model → throttle.** The power setting. How much engine you are asking for, knowing
what it costs per hour.

**Tools and MCP servers → the circuit breaker panel.** A row of pull-able breakers, one
per server. Aviation already solved the interface problem for "a list of subsystems,
each of which can be live or dead, where you need to see the whole state at once and
kill one fast." Pulling a breaker to cut a misbehaving tool is exactly the right verb.

**Tokens per second → airspeed.** The number that tells you the thing is still flying.

**Context remaining → fuel.** With the same low-fuel warning, at the same
uncomfortable moment, prompting the same decision: land now, or commit to the leg and
find out.

**Cost burn rate → fuel flow.** Sitting next to the fuel gauge, because the two
numbers are only meaningful together.

**Permission mode → autopilot.** Hand-flying, heading hold, or fully coupled. This one
argues for a guarded switch rather than a soft toggle — the mode where the agent acts
without asking should take a deliberate physical act to enter, and should be visibly
in that position the whole time it is there.

**Parallel agents → multi-engine instruments.** One column of gauges per agent. You do
not read them; you notice when one column stops matching the others.

## What I am unsure about

The honest risk is that this is a very enjoyable hardware project wearing the costume
of a productivity tool. Some of these controls are genuinely continuous and deserve a
physical home. Others I change twice a day, and a dedicated lever for a twice-a-day
decision is furniture.

I suspect the displays justify themselves faster than the controls do. Ambient,
always-on, no-interaction-required state — fuel, airspeed, which breakers are in — is
where the cockpit metaphor is load-bearing, because that is the part a screen keeps
failing at. The knobs might turn out to be the fun half rather than the useful half.
Building it is how I would find out, cheaply, in that order.

The other thing I do not know yet is whether the agent tooling will expose the state
to read. An instrument panel is only as good as its telemetry.

## Why it is mine to try

I have built the embedded half of this before — microcontroller as USB HID, physical
controls into a host application, sensors into a readable display. And I have spent
enough time inside AI-assisted programming to know which settings I actually reach for
rather than which ones sound impressive on a panel. Neither half is unusual. The
overlap is what makes it worth my attempt rather than someone else's.

If it works, it is a panel. If it does not, it is a lesson about which of these
settings I only *thought* I was adjusting constantly. I would like to know either way.
