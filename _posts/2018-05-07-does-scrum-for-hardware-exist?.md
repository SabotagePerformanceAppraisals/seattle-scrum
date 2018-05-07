My friend Viktor Grgic wrote:
> I think there is no such thing as Scrum in hardware, but love to be proven wrong after trying to find myself anything in this area. There is at best scrummish practices used in hardware design part of the whole process.

Another friend, Ran Nyman, wrote:
> Have been looking for convincing scrum in HW at scale. Could some one point me to good case study? Not marketing slides of it that are easy to find with Google.

BACKGROUND: One challenge of Scrum is to develop a potentially shippable product increment every Sprint.  This means that within a couple weeks we'd try (and possibly fail) to make something customers might actually be able to use, even if they'd want more features later.


![potentially shippable product increment](/assets/images/potentially-shippable-product-increment.png){: .align-center}

There's a lot of noise about Scrum for hardware, both electronics and physical objects. It's a big hit at conferences because making stuff is cool. I've got a friend who was developing sunglasses iteratively -- a new design customers could wear every two weeks -- and then tried the same thing with wheelchairs.  These are relatively simple products though.

I just watched an AgilePDX talk about [Dynon Avionics](http://www.dynonavionics.com) [^disclosure] that is more typical: Dynon's Kris Dobelstein describes Scrummish practices to develop prototypes and other kinds of useful inventory.  Though they didn’t develop an end-user-shippable product every Sprint, they benefited from shorter customer and internal feedback cycles, and reduced risk of developing the wrong product.  For example, they were considering using a videogame-style D-pad (direction pad) controller until they tested prototypes on customers who turned out to hate that design.

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

At this point, some of you are reacting "Hey! Where's the *pilot* in that story? The electrical engineer isn't the end user!" and others are prompted to remind us that the "As an X I can Y so that Z" format isn't what makes a story.

These flight instruments use custom LCDs they obtain from outside sources who cannot instantly deliver something to spec.  Part of the work was choosing the right LCD vendor to develop a relationship with.  The talk suggests that some things that weren't *2-weekable* (I'm going to steal that adjective from Kris) were handled outside Scrum. <https://youtu.be/ff-HtPMD020?t=40m0s>
> “Put on the whiteboard things not 2-weekable: Get an LCD.”

Q: Firmware from overseas?
> “That was a different product.  We never really figured out how to do it well.”

Q: How do you integrate physical design of circuits — timing, layout — into the development cycle?  (RF interference, etc.) <https://youtu.be/ff-HtPMD020?t=41m3s>
> “I will admit that there are some things in hardware that you really cannot test until it’s all together in this box….”

Kris goes on to describe ways they mitigated this.

As far as I can tell as of May 2018, using a strict definition of Scrum, no, it does not yet exist for hardware at significant scale.  But if I were doing hardware development I'd be learning as much as I could from Kris Dobelstein and others who are attempting it.

Also keep an eye on the [BMW Group Autonomous Driving Campus](https://www.youtube.com/watch?v=Hbm6IcD78R0).  BMW has realized that geographically-distribution slows them down, so they've been  closing down plants to bring people together to develop self driving cars.  According to BMW's video, they will be doing [Large Scale Scrum (LeSS)](https://www.youtube.com/watch?v=cvz4364pC0g), currently the most mature framework that's legitimately Agile.

[^disclosure]: Disclosure: I’ve met some cool Dynon people, but unfortunately I wasn’t their trainer.