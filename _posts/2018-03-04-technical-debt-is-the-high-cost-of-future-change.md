---
header:
  og_image: /images/running-tested-features-graph.png
  teaser: /images/running-tested-features-graph.png
---
It is possible for software to meet its current requirements -- to *work* from the perspective of a user -- but difficult to *work with* from the perspective of the developers.  When it takes a lot of time and effort to add features to the software, and when those new features are likely to introduce regression failures, we have *technical debt*.
![Running Tested Features Graph](/assets/images/running-tested-features-graph.png)
In this graph (inspired by [a talk by Ron Jeffries](https://www.infoq.com/interviews/jeffries-running-tested-features)), the green line is what we wished happened in Scrum: an early and sustainable rate of valuable feature delivery. The red line is what we usually get instead: the appearance of progress while we rushed out lots of code in the beginning, followed by painfully slow progress with lots of setbacks as we (or more typically, other people) try to continue development on top of this mess. You can bet someone got promoted for the short term illusion of success before the crossover point, which is [why I barely mention velocity anymore](/why-i-barely-mention-velocity-anymore).

Adding new features to old code is hard because legacy code is hard to understand -- as if it were an unrevised first draft -- and because there's a high risk of breaking something that was working before. Technical debt is a breeding ground for bugs.

> 99 bottles of bugs on the wall,  
> 99 bottles of bugs.  
> Take one down,  
> Patch it around,  
> 104 bottles of bugs on the wall!

The nature of code is to grow ugly. I don't think I've met a programmer who wakes up saying "I can't wait to get to work so I can write some bad code!" 

We can prevent the code from deteriorating with a combination of techniques. Here's a subset:

1. Write automated tests to validate the product code at the same rate the product code emerges.  In Scrum, those tests are a team responsibility, not just a miniature QA department within the team.  Therefore tests should be written in a normal programming language, ideally the same language as the product itself, rather than proprietary scripting languages that reenforce knowledge silos and handoffs. Test-Driven Development (TDD) teams prefer to write a test *before* writing the product code it will exercise. In practice this will mean more lines of test code than product code. Most tests should execute in milliseconds. It's good to also have a few end-to-end tests, which may not run as fast.
1. Avoid coding alone. Code in pairs or small groups on a huge shared screen. Rotate control of the keyboard every few minutes. When you are the *driver*, only type code that's suggested by a *navigator*.
1. Refactor mercilessly. By refactor, we mean improve the design of existing code -- usually by simplification -- *without changing its externally-observable behavior*. Bugs happen when our understanding of the code is different from what it actually does.  So keep it simple and understandable. Eliminate duplication, complex conditional logic, long parameter lists, and too many responsibilities in objects. Rename things more clearly. How do we know we're preserving behavior? With our automated tests.

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/p_pvslS4gEI?controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Does this sound expensive to you? While it takes time to learn, I think you'll find it cheaper and faster than what you're doing now.

*Next: What to do about about already existing bad code?*
