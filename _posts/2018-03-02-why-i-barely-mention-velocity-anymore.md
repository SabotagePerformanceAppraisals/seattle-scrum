A while ago a critic of Scrum tweeted a poster from the popular movie “Velocity,” modified to include a photo of Ken Schwaber.  While I agree that focusing on velocity has been harmful, I thought it was misguided to blame Ken for that, since he’s been one of the people telling us to make fewer promises and instead increase our rigor around definition of *done*.

Fortunately *velocity* isn’t part of any Scrum definition that I’m aware of.  The application of "velocity" to software development was invented by eXtreme Programming (XP) pioneers, some of whom now consider it to have been a bad idea.  Unfortunately, some people in the Scrum world are still pushing things like "400% velocity increase" and "hyperproductivity."  I am embarrassed by this.  This isn't *my* Scrum and I hope it hasn't become Ken's Scrum.

If we’re promoting *the ability to learn and adapt to reality as it’s discovered*, the traditional focus on productivity (whatever that is) can be actively harmful, especially given our nearsightedness (difficulty seeing the whole picture) and cognitive biases towards short termism.  One reason your code cannot be easily changed now is that people were scrambling to get “projects” done, and didn’t create many automated tests, didn’t constantly refactor their code, didn’t pair program, didn't mob program, or didn't even do traditional code reviews.

Larger organizations struggle even more with the transparency that’s needed for an empirical process to work.  We cannot inspect and adapt the product to customer needs when it isn't integrated, properly tested, and shippable.  When multiple teams are involved in something that’s really one product it can take them years to learn to produce a *done* product increment together every couple weeks.  A focus on velocity pushes these organizations in the wrong direction.

FBI Sentinel is often cited as an agile success story, and mostly it was.  The part of the story that wasn't told in the *Twice The Hype* books is that real users tried to use it around Sprint 10. And it fell over because it wasn’t until then they discovered their definition of *done* was weak around testing.  So let’s talk more about full testing, less about velocity.

![FBI Sentinel Burndown](/assets/images/Sentinel-Burndown.png)

----

QUESTION:
> How do you help companies transition from a “need-to-know-the-date” to “don’t-have-to-answer” mindset?

MJ:
> In general the industry trend is toward releasing more frequently.  Keeping the product *always shippable* lends itself to this.  So fixed dates shouldn’t be so scary when our technical practices are right, even if we leave out some lower-valued features because we found higher-valued features along the way.
>
> I won’t say forecasting has zero value, but in real practice there are bigger problems to solve than just that.  When's the last time your release plan was accurate?

----

QUESTION:
> Hi MJ, the thing is : how to plan the delivery of Features over 6 or 9 months when not using velocity? Would you use the number of items done and undone to plan? That would mean you would need two things : 1/ to know all stories that will be developped during these months 2/ to have items with similar size over time => I can't have those two.

MJ:
> In theory velocity should help, but in practice the places I've seen that are working on such big batch releases would reduce their risks more by ensuring the whole product is fully tested and integrated every Sprint. Those big batch releases are typically riddled with an uncountable number of bugs and an integration nightmare toward the release date.
>
> After one of these painful release cycles and all the urgent hotfixes and production support emergencies that follow them, I've never
heard someone say "The biggest problem was that we didn't know 9 months ago what features would be included." The biggest problem is the accumulation of low quality code due to your organization's coding, testing, and management habits. Focusing on velocity just makes that *worse*!
>
> I like Yogi Berra's answer: "In theory there's no difference between theory and practice.  In practice, there is."

----

QUESTION:
> "Every sprint" is almost like really tiny waterfalls.
> 
> How many are shippable with every accepted commit?

MJ:
> Even better! Strive to be like [this team in San Diego](/technical-debt-is-the-high-cost-of-future-change/) that releases live features multiple times a day, usually without bugs.

COMMENT (from Adam Gauvin):
> Preach brother!
>
> As a developer, project lead, and occasional scrum master I got to say "velocity" and "burn down" are among keywords to quit usually. It is extremely rare that these align with value delivered.
>
> Seriously anything is better than delusional leadership and lack of vision. Any process deemed agile which disguises ineptitude and ignorance on the premise of presenting added value that isn't actually measurable to upper echelons needs to be eradicated like an *excusez mon francais* plague. Period.
>
> If your company has practices that alienate the lads and lasses in the trenches with working knowledge of what is needed from what they are actually doing you will: 
>
> A) lose the most talented ones who can get paid more elsewhere
>
> B) fail to deliver value to the customer
>
> C) over-engineer for the sake of [insert non-descriptive reason]
>
> D) end up with solutions to problems you didn't need to solve
>
> E) waste a lot of time and resources in the name of metrics
>
> F) Finally realize you wasted even more resources on PGMO and/or portfolio management and "being agile" than hiring extra qualified developers that could have actually helped would have cost.
