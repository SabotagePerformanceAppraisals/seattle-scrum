It is possible for software meet its current requirements -- to *work* from the perspective of a user -- but difficult to *work with* from the perspective of the developers.  When it takes a lot of time and effort to add features to the software, and when those new features are likely to introduce regression failures, we have *technical debt*.
![Running Tested Features Graph](/assets/images/running-tested-features-graph.png)
Adding new features to old code is hard because legacy code is hard to understand -- as if it were an unrevised first draft -- and because there's a high risk of breaking something that was working before.

I don't think I've met a programmer who wakes up saying "I can't wait to get to work so I can write some bad code!"  But the nature of code is to grow ugly.

Some developers have discovered they can prevent the code from deteriorating with a combination of techniques:

1. Write automated tests to validate the product code at the same rate the product code emerges.  In Scrum, those tests are a team responsibility, not just a miniature QA department within the team.  Therefore tests should be written in a normal programming language, ideally the same language as the product itself, rather than proprietary scripting languages that reenforce knowledge silos and handoffs. Some teams find it best to write a test *before* writing the product code it will exercise.  In practice this will mean more lines of test code than product code. Most tests should execute in milliseconds. It's good to also have a few end-to-end tests, which may not run as fast.
1. Avoid coding alone. Code in pairs or [small groups](https://www.youtube.com/watch?v=p_pvslS4gEI) on a huge shared screen. Rotate control of the keyboard every few minutes. When you are the *driver*, only type code that's suggested by a *navigator*.
1. Refactor mercilessly. By refactor, we mean improve the design of existing code -- usually by simplification -- *without changing its externally-observable behavior*. How do we know we're preserving behavior? With our automated tests.

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/p_pvslS4gEI?controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Does this sound expensive to you? While it takes time to learn, I think you'll find it cheaper and faster than what you're doing now.

What about already existing bad code?