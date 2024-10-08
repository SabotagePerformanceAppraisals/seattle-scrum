---
title: "Things Ken Schwaber Intentionally Omits From Scrum"
---
I've listed some things that are intentionally not part of Scrum, and may contradict it or make it less useful.  

What does it matter?  It's not like the Scrum cops will throw you in jail.  But people do things unintentionally -- mindlessly -- because they got the impression they were essential to Scrum.  For each one, please think about what problem it is meant to solve and whether there are solutions more consistent with your [system optimization goal](/you-wont-change-your-organization-without-an-optimization-goal/).

Scrum *intentionally* does not contain the following:
* [daily status meeting](#scrum-does-not-contain-a-daily-status-meeting)  
* [velocity](#scrum-does-not-contain-velocity)
* [Story Points, Fibonacci numbers](#scrum-does-not-contain-story-points-and-fibonacci-numbers)
* [Product Owner assigning work](#product-owner-cannot-assign-work) 
* [Scrum of Scrums](#scrum-does-not-contain-scrum-of-scrums)
* [multiple Product Owners per product (e.g. one per team)](#scrum-does-not-have-multiple-product-owners-per-product)
* [tasks in the Product Backlog](#scrum-does-not-have-tasks-in-the-product-backlog)
* [extra roles such as Chief Product Owner and Release Train Engineer](#scrum-does-not-contain-extra-roles)
* [burndown chart as a management report, or at all](#scrum-does-not-contain-burndown-charts)
* [Scrum Master as coordinator, motivator, or status reporter](#scrum-masters-are-not-for-coordination-motivation-or-status-reporting)
* [Sprint Backlog as a surveillance tool](#the-sprint-backlog-is-for-the-team-developers-not-for-surveillance)
* [single-function teams](#scrum-does-not-contain-single-function-teams)

Scrum was intended to be a framework, a meta-process, to connect feedback loops and give teams control over their own work.  What you've experienced as Scrum in your workplace has likely diverged far from those intentions.

For things that are consistent with Scrum and usually necessary for it to work, see [Potentially Useful Things To Add To Scrum](/potentially-useful-things-to-add-to-scrum/).

## Scrum Does Not Contain A Daily Status Meeting

Schwaber [writes](https://scrumguides.org/scrum-guide.html#daily-scrum)

> The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the upcoming planned work.
> 
> The Daily Scrum is a 15-minute event for the Developers of the Scrum Team. The Developers can select whatever structure and techniques they want, as long as their Daily Scrum focuses on progress toward the Sprint Goal and produces an actionable plan for the next day of work.

Do I need to say anything more?  Companies that don't treat the Daily Scrum as event for team self organization and *re-planning* are likely to call it a "stand up" for people to give status reports.

## Scrum Does Not Contain "Velocity"

Schwaber's definition of Scrum has never contained "velocity."  It is a practice sometimes borrowed from Extreme Programming.  But even the Extreme Programming people who came up with the idea now have regrets.  Should you keep doing it?  I'd rather you focused on keeping your product shippable *all the time*.  Focusing on velocity is a [local optimization](/local-optimization-bias) that can be bad for business outcomes.  See [Why I Barely Mention Velocity Anymore](/why-i-barely-mention-velocity-anymore).

## Scrum Does Not Contain Story Points and Fibonacci numbers

Scrum does not contain any particular effort estimation scheme.  Scrum does not force (or prohibit) the use of story points.  The Scrum Guide barely mentions estimation at all. 

Ron Jeffries, co-inventor of story points and "velocity," had [this](https://twitter.com/RonJeffries/status/493915127293296640) to say:

> beware of using story points. they turn out to have been a bloody mistake.

Yes, there's a strong case for relative exponential estimates over absolute estimates.  Do you really need a vast array of [Fibonacci numbers](/cult-of-fibonacci)?  You're doing this because someone told you Fibonacci numbers have magical powers?  

People who know binary find [T-shirt sizes with simple powers of two](https://scrumtrainingseries.com/BacklogRefinementMeeting/) to be sufficient.  Other teams are fine with even less: *small* or *let's slice it until it is small*.  If you're using more than a few choices, you're probably just creating the pretense of precision.

### Effort estimates and Sprint Planning

Scrum does not require a team to link Product Backlog Item estimation to Sprint Planning.  Ultimately it's their responsibility to choose what to attempt in a Sprint, as shown below.  

## Product Owner Cannot Assign Work

During Sprint Planning:
> Through discussion with the Product Owner, the Developers [select](https://scrumguides.org/scrum-guide.html#sprint-planning) items from the Product Backlog to include in the current Sprint.

It follows that a self-managing team would be responsible for maintaining code quality, test quality, and continuous learning.  This benefits everyone, especially a Product Owner who plans to be around longer than a few months.

[Principle #8](https://agilemanifesto.org/principles.html):
> Agile processes promote sustainable development.  The sponsors, developers, and users should be able to maintain a constant pace indefinitely.

## Scrum Does Not Contain "Scrum of Scrums"

The first Scrum book in 2001 did contain a "Scrum of Scrums" -- a hasty stab at the problem that no one knew how to make multi-team organizations agile.  But Ken Schwaber's next book, in 2004, identified the ways it contradicted team self organization.  Maybe it meets your current needs, but don't get stuck thinking it's the only way.  There are [alternatives to Scrum of Scrums](/seven-alternatives-to-scrum-of-scrums).

## Scrum Does Not Have Multiple Product Owners Per Product

Per the [Definition of Scrum](https://scrumguides.org/scrum-guide.html#scrum-team)

> If Scrum Teams become too large, they should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product. Therefore, they should share the same Product Goal, Product Backlog, and Product Owner.

Why is it harmful to have multiple POs per product (e.g. a different one for each team)?  See [my comic book](/Why-Scrum-Isnt-Making-Your-Company-Very-Agile/).

I'm aware of two frameworks that offer specific guidance on how multiple teams share a Product Owner and Product Backlog: [Nexus](https://www.scrum.org/resources/online-nexus-guide) and [LeSS](https://www.youtube.com/watch?v=1BZf_Oa7W94).  I also know of two other frameworks without clear [system optimization goals](/you-wont-change-your-organization-without-an-optimization-goal), thus in practice are about preserving the status quo. 

What is a "product" anyway?  If we are optimizing for the big picture, consider using the [broadest practical definition of product](https://less.works/less/framework/product).

## Scrum Does Not Have Tasks In The Product Backlog

One clue that someone hasn't yet gotten the point of Scrum is that they refer to "tasks" in the Product Backlog.  

Scrum has historically separated the *what* from the *how*.  *How* to solve problems is left to self-managing cross-functional teams.  If you cannot do this, you do not yet have self-managing cross-functional teams.  Thus, the items in the Product Backlog are properly called *Product Backlog Items* (or PBIs), not "tasks."  

We'll give you a pass if you refer to Product Backlog Items as "User Stories," but we want you to remember this is actually an Extreme Programming concept that many Scrum teams borrow.  How to create well-formed Product Backlog Items is covered in detail in the [Scrum Training Series](https://scrumtrainingseries.com/BacklogRefinementMeeting/).

A team may decide to create Sprint Tasks when planning a Sprint -- again covered by the [Scrum Training Series](https://scrumtrainingseries.com/SprintPlanningMeeting/).  We try to defer *how* decisions until the *last responsible moment*.

## Scrum Does Not Contain Extra Roles

Since a product has only one Product Owner, there is [no "Chief Product Owner"](/Why-Scrum-Isnt-Making-Your-Company-Very-Agile/).

There is no "Release Train Engineer."  Are there ways to solve the problems this role was meant to solve that increase adaptivenesss rather than reducing it?  Giving responsibilities to named roles takes them away from teams, making teams less cross-functional and less self-managing.

Organizations often try to solve problems by adding organizational complexity in the form of additional roles, structures, departments, processes, etc.  All of these quick fixes can have harmful side effects, leading to hidebound organizations.  We believe in reducing organizational complexity and solving the underlying problems.

## Scrum Does Not Contain Burndown Charts

While the first Scrum book in 2001 did recommend burndown charts, it was quickly discovered that they could lead to a decrease in team self management through excess focus on estimates and short-term efficiencies.  Complex work doesn't necessarily follow Newton's Laws Of Motion.  So they've been out of Scrum's definition for years.  Use them if you want, and understand why they're no longer prescribed in Scrum.

## Scrum Masters Are Not For Coordination, Motivation, or Status Reporting

The Scrum Master was not intended to be a renamed project manager.

### coordination
The Scrum Master is there to teach the team that coordination is a *team* responsibility.  Doing it for them teaches them the opposite.

### motivation
If people are not motivated, it's likely there are organizational impediments the Scrum Master should be working to address.  In healthy organizations the motivation comes from doing great work and seeing how it helps people.  (You still have to pay us to get us in the door.)

### status reporting
The authors of the Agile Manifesto wrote that [working software is the primary measure of progress](https://agilemanifesto.org/principles.html).  Scrum emphasizes the empirical over the theoretical.  At the *Sprint Review* everyone sees the real product itself, not a report about it.

I still have Ken's slide that said "The Scrum Master has no authority."  For more about Scrum Master responsibilities, please see the [Example Scrum Master's Checklist](https://scrummasterchecklist.org).

## The Sprint Backlog Is For the Team (Developers), Not For Surveillance

From [the definition](https://scrumguides.org/scrum-guide.html#sprint-backlog):

> The Sprint Backlog is a plan by and for the Developers.

I once heard a Microsoft employee ask Ken Schwaber why the team's self management artifacts shouldn't be published to the whole organization.  "Transparency" right?  Ken restated that the team is meant to be self organizing, and said he would want to find out why people who aren't on the team would want to meddle with them during a Sprint.

The Sprint Review is an appropriate time to make the results of the work visible to everyone outside the team(s).  They are invited to give feedback at that time.  The Product Owner will decide how to adapt future plans to the feedback.

During the [Sprint Review](https://scrumguides.org/scrum-guide.html#sprint-review):

>  the Scrum Team and stakeholders review what was accomplished in the Sprint and what has changed in their environment. Based on this information, attendees collaborate on what to do next. The Product Backlog may also be adjusted to meet new opportunities.

## Scrum Does Not Contain Single-Function Teams

From the 1986 Harvard Business Review paper that inspired Scrum[^newnew] through today's _Scrum Guide_, the magic is the result of *cross-functional teams*.  In 1986 Hirotaka Takeuchi and Ikujiro Nonaka wrote: 
> Under the old approach, a product development process moved like a relay race, with one group of functional specialists passing the baton to the next group. Under the rugby approach, the product development process emerges from the constant interaction of a hand-picked, multidisciplinary team whose members work together from start to finish.

The opposite of a cross-functional team is a *single-function team*.  Single-function teams abound in most organizations: 
* teams that just do analysis work, writing detailed requirements, etc.
* teams that mostly code but don't fully test
* teams that only test
* integration teams
* fake "DevOps" teams (real DevOps is the opposite)
* product (management) teams
* UX/UI teams
* support teams (that sometimes become [control departments](/local-optimization-bias/#example-2))
* marketing teams
* architecture teams
* risk management teams
* infosec teams
* maintenance teams
* operations teams
* firefighting teams
* etc.

Not everything in the world has to be called "Scrum."  The existence of single-function teams or departments isn't necessarily harmful.  Humans got work done for thousands of years before there was anything called Scrum.  Some types of work (especially with [physical dependencies](/misconception-1-dependencies-are-caused-by-immutable-laws-of-physics)) may require a sequential approach.  Even Ken Schwaber wrote:

> If waterfall meets current needs, keep doing it.  

![George Orwell](../images/George-Orwell.jpg){: .align-right width="200"}

But it *is* a contradiction to call single-function teams (or departments) "Scrum" teams. Is there an honest reason to use Scrum words for things that aren't Scrum?  George Orwell wrote: 

> If thought corrupts language, language can also corrupt thought.  
 
Abusing our language prevents the discovery of what Scrum actually is.  

### How to become a rich methodologist 

A person who was called "Product Owner"[^fake] of a single-function team told me I could make a lot of money by inventing a methodology to accommodate teams like hers.  Did she think Ken Schwaber, Takeuchi-さん, and Nonaka-さん were unaware of the existence of single-function teams?  [Scrum was meant to expose dysfunction](/scrum-the-unflattering-mirror), not mask it.

Around the year 2000 people made a lot of money with something called the Rational Unified Process (the RUP) that could be "tailored" to require no change at all to your traditional organizational design.  It was a disaster, of course.  Alistair Cockburn (a coauthor of the [Agile Manifesto](https://agilemanifesto.org)) clearly wasn't a fan: 
> I am interested in fending off the fat methodology army, the vast quantity of RUP, \[Arthur\] Anderson \[now Accenture\], SEI \[Software Engineering Institute\] salespeople putting ideas into CIOs' minds that they should have lots of paperwork to be "safe".

One of the people responsible for the RUP fiasco repackaged it into a monstrous, fundamentally dishonest thing called [SAFe](https://www.lafable.com).  Fool me once, shame on you.  Fool me twice, shame on me.


## About "Thought Leaders"

* Q (from a LinkedIn user):
   > many of the patterns mentioned in \[this\] article have been championed by Jeff Sutherland and other thought leaders.
* A:
   > Now you can be smarter than a "thought leader."

----

## "Scrum!"  You keep using that word ...
{% include video id="dTRKCXC0JFg?rel=0" provider="youtube" %}

----

![LeSS is hard](../images/less-is-hard.png){: .align-center width="400"}

----

Japanese version: [ケン・シュエーバーが意図的にスクラムから排除したもの](https://scrummaster.jp/things-ken-schwaber-intentionally-omits-from-scrum/)

[^newnew]: _The New New Product Development Game_ by Hirotaka Takeuchi and Ikujiro Nonaka
[^fake]: A single-function team (or department) is only one part of producing a real product.  It does not have a "Product Owner."