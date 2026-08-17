---
title: "The layer above code"
description: "Work in progress: if we stop reading code, what do we read instead — and can an agent be told to keep it healthy?"
date: "Aug 17 2026"
draft: false
gifts:
  - llm-applications
  - technical-leadership

---

# The Layer Above Code

*Work in progress. A question I keep circling rather than a position I hold.*

## The question

Almost nobody reads the assembly their compiler emits. It is still there, it is still
what runs, and when something is truly wrong you can go and look — but it is not where
the work happens, and it is not what anyone means by "the system."

I think code is going to move into that position, and sooner than the argument about
whether it should will be settled. So the question worth asking now is not whether it
happens. It is: **what do we look at instead?** Every previous time we gave up a layer,
we got a better one. Assembly for C. Manual memory for garbage collection. Servers for
containers. What is the artifact that replaces reading a diff?

I do not know. Here is where I have got to.

## The rule the last transitions followed

Looking back at the abstractions that stuck, two conditions had to hold together, and
the second one is the one that gets skipped in this conversation.

**The layer below has to become boring.** Not perfect — boring. You still occasionally
read disassembly. But the failure rate has to drop far enough that reading down is an
exception you plan for rather than a habit you maintain.

**The layer above has to be editable, not just viewable.** This is the condition that
kills most candidates. C won because you *write* C and the assembly follows. UML lost
because you looked at the diagram, then went and changed the code anyway, and then the
diagram was a lie. Dashboards do not become abstraction layers. Source artifacts do.

So the test I would apply to any candidate for the next layer is not "does it show me
the system usefully?" It is: **if I change it, does the system change?** Anything that
fails that is a monitor, and monitors are useful, but they are not where the work moves.

## The complexity-map candidate

The obvious candidate is the one that comes out of classical static analysis:
cyclomatic complexity, coupling and cohesion, dependency graphs — rendered as a heatmap
over the system. Adam Tornhill's version of this, where complexity is multiplied by
change frequency so the map shows hotspots rather than merely large things, is the
strongest form I know of. You would sit above a picture of the codebase, see where it
is hot, and direct effort there.

I find this genuinely appealing, and I do not think it is the answer.

Cyclomatic complexity is a weak proxy. It correlates strongly enough with raw line
count that a lot of what the map shows you is "this file is big," and it is blind to
the kind of complexity that actually hurts — a shared mutable assumption spread thinly
across six well-factored modules scores beautifully and will still ruin your month.

More importantly, it fails the editability test. A heatmap tells you *where* and never
*what*. You cannot edit the map. You point at a red region and then descend into the
code anyway, which means the map is an index into the old layer rather than a
replacement for it. That is a real tool — I would use it — but it is a navigation aid,
not a new place to stand.

## What passes the test

The candidates that survive the editability question are the ones that are already
*sources* rather than *views*:

**Interfaces and invariants.** The properties the system must maintain, written down
executably. Change the invariant, and the implementation has to move to satisfy it. This
is the one that behaves most like C did — a source artifact from which the lower layer
is generated and against which it is checked.

**Tests as the specification.** Not tests as regression insurance, which is what they
mostly are now, but tests as the thing you author and the code as what gets produced to
satisfy them. This inverts today's relationship, where the code is primary and the tests
document it after the fact.

**Data flow and blast radius.** What touches what, and what breaks if this changes.
Closer to a view than a source, but it is the question I actually ask when reviewing,
which makes me think it wants to be first-class.

**Traces.** What the system did, rather than what it is. In distributed systems this is
already where debugging happens; the code stopped being the primary artifact there years
ago and nobody framed it as a philosophical shift at the time.

My honest guess is that the next layer is some braid of the first two — an executable
statement of what must be true, with the implementation demoted to output — and that
complexity maps ride along as instrumentation rather than as the substrate.

## Can an agent be told to manage it?

This is the part of the question I find most interesting, because it is the part that is
testable now rather than in five years.

Yes, and the shape is a control loop, not a task. A long-running agent with a
complexity objective, a budget, and the authority to refactor within a boundary —
something closer to a gardener than a contractor. Given a hotspot map and a test suite
it must keep green, "keep coupling under this line and hotspots below that one" is a
well-posed continuous job in a way that "refactor the payments module" is not.

Two things I would want to get right before trusting it:

**Goodhart is the whole risk.** The moment a complexity metric becomes an agent's
objective rather than its guardrail, it stops measuring what you cared about. Cyclomatic
complexity in particular is trivially gamed — split a function in half and the number
improves while the system gets slightly worse. Any such agent needs its metrics as
constraints on a change that was independently justified, never as the reason for it.

**Something has to hold the line the metric cannot see.** Architectural fitness
functions get closer than raw metrics, because they encode intent — this layer may not
import that one — rather than a proxy for it. That is the sort of thing worth handing an
agent, because a violation is unambiguous and the fix is not creative.

The version of this I would build first is deliberately small: an agent that watches the
hotspot map, proposes one bounded refactor a week, and must show the invariants and
tests unchanged and green. Not to save the time. To find out whether a week of its
judgment is something I would accept without reading the diff — which is the actual
question underneath all of this, and one that a metric cannot answer for me.

## The part that bothers me

Every layer we stopped reading, we stopped being responsible for in practice, even
though we remained responsible for it in fact. That was survivable when the layer below
was a compiler with a specification and forty years of hardening. It is a different
proposition when the layer below is generated fresh, by something that is confident in
the same tone whether or not it is right.

I do not think that is an argument for refusing the abstraction. It is an argument that
the higher layer has to carry more weight than the ones before it did — that the reason
to want executable invariants over a pretty heatmap is not elegance but accountability.
If I am going to stop reading it, I had better be able to state what must be true about
it, and be held to that.
