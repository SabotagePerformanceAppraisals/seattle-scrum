QUESTION:
> Currently the teams track progress/velocity through time estimates. We are shortly going to be moving to story points which should
> be a big improvement.
>
> Product Owners are rightly of the view that time is of no interest it is done working software they want.
>
> My question is really do you have any strong feelings about the team still recording actual time against stories as a part of their routine activities?
>
> There are limited benefits directly to the scrum teams, though it is sometime useful to help people recall where the time went or to learn from where estimates over ran  i.e. ( There was a similar story to this - we rated it as a 5 but looking back it took us a longer time to implement so maybe it’s a 9)
>
> From a management perspective we are also often asked to diagnose why things are behind or took so long etc… – if there is no actual time element this kind of diagnostic is difficult.
>
> I’m not interested in tracking how many hours people are putting in – just increasing velocity over time.

MJ:
> It’s good to hear from you!
>
> General consensus amongst agile coaches is that time tracking as a management report is harmful because of the way it can distort behavior.  But I also think people who track their own time as a personal activity can learn from that.  I did that for myself as an experiment when I was a full-time developer and noticed that most of my time was spent in some kind of “stuck” state — figuring out how to proceed.  Then years later we did it as a Scrum team and I learned a little from that.
>
> So I’m generally skeptical about it, but going to stop short of condemming it for all situations. In Scrum this would be a team decision.
>
> I will suggest some alternatives that may address the needs better.  I’d first want to look at how the team retrospectives are going.  That Harvard Business Review paper I like to cite (and your experience) suggests that nearly all workers naturally want to feel they’re making progress, thus will express frustration with things that slow them down.  This would give at least a *subjective* take on how things might be sped up.  The danger is that as a developer I might feel like I’m making progress when I’m typing a lot of code on new features, but this may only be a local optimization because in the big picture I’m introducing untested code, regression failures, and future integration problems.
>
> This leads us to the *Overall Retrospective* — my favorite meeting in LeSS.  This is where the multiple teams work together with management on issues like the ones you’re raising: <https://less.works/less/framework/overall-retrospective.html>
>
> Other places I’ve worked with have found that their unexpected delays have been caused by a combination of technical debt (code lacking automated regression tests that run quickly and accurately, code that’s hard to understand, code that’s hard to change, integration problems across architectural boundaries) and Product Owner scope control (every time we show a feature it creates an appetite for two more features).
>
> Hope that helps!
>
> —mj
> (Michael)