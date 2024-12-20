---
header:
   og_image: /images/groovex-lovot-less-for-hardware.jpg
   teaser: /images/groovex-lovot-less-for-hardware.jpg
---

My friend Viktor Grgic wrote:
> I think there is no such thing as Scrum in hardware, but love to be proven wrong after trying to find myself anything in this area. There is at best scrummish practices used in hardware design part of the whole process.

Another friend, Ran Nyman, wrote:
> Have been looking for convincing scrum in HW at scale. Could some one point me to good case study? Not marketing slides of it that are easy to find with Google.

Viktor and Ran have already seen the usual hype about Swedish fighter jets, 100MPG cars, etc. and found the details don't usually withstand scrutiny.  At the 2017 Scrum Gathering in San Diego I went to the first presentation about "Scrum for Hardware." The room featured a partially assembled car, which was later pushed to the stage amidst a lot of fanfare.  We were disappointed that the presentation mostly described a waterfall process, using some Scrum elements for some of the waterfall steps.  

Ken Schwaber's Scrum attempts to develop a potentially shippable product increment every Sprint.  This means that within a couple weeks we'd try (and possibly fail) to make something end customers might actually be able to use, even if they'd want more features later.   People keep sending me examples they claim are "Scrum for Hardware" which may be more agile than what was happening before, but weren't attempts to develop potentially shippable products every Sprint.

![potentially shippable product increment](/assets/images/potentially-shippable-product-increment.png){: .align-left width="40%"}

There's a lot of noise about Scrum for hardware, both electronics and physical objects. It's a big hit at conferences because making stuff is cool.  There are classes about it.

I've got a friend who was developing sunglasses iteratively -- a new design customers could wear every two weeks -- and then tried the same thing with wheelchairs.  These are relatively simple products though.

I just watched an AgilePDX talk about [Dynon Avionics](http://www.dynonavionics.com) [^disclosure] that is more typical: Dynon's Kris Dobelstein describes Scrummish practices to develop prototypes and other kinds of useful inventory.  Though they didn’t develop an end-user-shippable product every Sprint, they benefited from shorter customer and internal feedback cycles, and reduced risk of developing the wrong product.  For example, they were considering using a videogame-style D-pad (direction pad) controller until they tested prototypes on customers who turned out to hate that design.
[![Dynon Avionics Scrum For Hardware](/images/dynon-avionics-scrum-for-hardware.jpg)](http://dynonstore.com){: .align-right width="30%"}

Is there a shorter name for “Scrummish practices that increase adaptability even though there's still some waterfall we haven't learned to eliminate yet?"

The specifics at Dynon start around <https://youtu.be/ff-HtPMD020?t=21m49s>.

> The hardware engineering team reviewed the product vision.  We broke down the hardware product requirements into epics and stories based on affected subassemblies and components.

The development effort of some parts, e.g. a power supply, could only be broken down so far.

> Here’s a sample user story: Backlight Solution
- As an electrical engineer I have prototyped the SkyView X LCD backlight and control PCBAs (Printed Circuit Board Assemblies) for the 10” and 7” LCD panels so that I can eliminate this risk from the project.
> 
Acceptance Criteria
- Schematic complete
- PCB layout complete
- BOM/stuff list complete
- *Some* PCBAs built
- PCBAs tested and characterized

After reading that, some of you are reacting "Hey! Where's the *pilot* in that story? The electrical engineer isn't the end user!" and others are prompted to remind us that the "As an X I can Y so that Z" format isn't what makes a story.  All true, but don't overlook that this is an improvement over what was happening before.

These flight instruments use custom LCD panels they obtain from outside sources who cannot instantly deliver something to spec.  Part of the work was choosing the right LCD vendor to develop a relationship with.  The talk suggests that some things that weren't *2-weekable* (I'm going to steal that adjective from Kris) were handled outside Scrum. <https://youtu.be/ff-HtPMD020?t=40m0s>
> “Put on the whiteboard things not 2-weekable: Get an LCD.”

Q: Firmware from overseas?
> “That was a different product.  We never really figured out how to do it well.”

Q: How do you integrate physical design of circuits — timing, layout — into the development cycle?  (RF interference, etc.) <https://youtu.be/ff-HtPMD020?t=41m3s>
> “I will admit that there are some things in hardware that you really cannot test until it’s all together in this box….”

Kris goes on to describe ways they mitigated this.

As far as I can tell as of May 2018, using a *strict* definition of Scrum, no, it does not yet exist for hardware at significant scale.  But it's coming.  If I were doing hardware development I'd be learning as much as I could from Kris Dobelstein and others who are attempting it.

{% include video id="Hbm6IcD78R0?rel=0" provider="youtube" %}
Also keep an eye on the [BMW Group Autonomous Driving Campus](https://www.youtube.com/watch?v=Hbm6IcD78R0).  BMW has realized that geographical-distribution slows them down, so they've been  closing down plants to bring people together to develop self driving cars.  According to BMW's video, they will be doing [Large Scale Scrum (LeSS)](https://www.youtube.com/watch?v=cvz4364pC0g), currently the most mature framework that's legitimately Agile.

![GrooveX Lovot LeSS For Hardware](/images/groovex-lovot-less-for-hardware.jpg){: .align-right width="40%"}

2019 UPDATE: Another one to watch is [GrooveX](https://groove-x.com) in Tokyo.  As I've seen first hand, GrooveX develops consumer robots using self-managing teams and no manager role.  They develop the physical product, the electronics, and the software using the [LeSS Framework](https://less.works).  They got coaching from people like [榎本先生](https://www.odd-e.jp/team_02/) and were the star of Agile Japan in July 2018.  Read the [keynote from the CEO](https://www.agilejapan.org/2019/session/keynote-03_GROOVE.pdf) and [details about how they use LeSS](https://www.agilejapan.org/2019/session/east1-1_GXSM.pdf).

[![GrooveX Lovot Scrum For Hardware](/images/groovex-lovot-scrum-for-hardware.jpg)](https://twitter.com/nnnnnaaaaaaooo/status/1152476960762679297?s=20)

[^disclosure]: Disclosure: I’ve met some cool Dynon people, but unfortunately I wasn’t their trainer.  Same with GrooveX.
