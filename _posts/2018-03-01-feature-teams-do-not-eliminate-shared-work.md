---
---


BACKGROUND: It is nearly always better to organize into cross-component *feature teams* that aren't
restricted (by policy or skills) to a single architectural layer or design component. But transitioning
from component teams to feature teams usually isn't simple or easy.  Here's an interesting discussion
I recently had on this topic.

----

![Feature Teams](/assets/images/feature-teams.png)

----

PERSON A:
> I'm trying to solidify the feature vs component team in my head and by extension requirement areas (I'm thinking LeSS/LeSS Huge). I understand that feature-teams are structured to implement features that deliver value to the customer, but I'm lacking concrete examples. I can understand component teams focused only on database structure, only UI/UX, only business logic is sub-optimal.
> 
> Take the example of a commerce system. A core feature is placing an order. Placing an order requires pricing the products, cart management, application of promotions, submission of the order, payment capture, tax, etc. The key act of placing an order requires all of these (at least to some extent, without debating what's MVP) to enable a transaction for the customer, though each piece has some customer value, and there can be deep complexity within each.
>
> Would it be component-izing a team to structure their focus on pricing, promotions, payment, etc (considering a team includes members necessary to implement the database, business logic, testing, UI, etc), or is that an effective implementation of feature teams/requirement areas? Would monitoring/logging/compliance (operational requirements), transaction processing (carts, payments, pricing, promotions), data management (prices, products, inventory) be better classifications of requirement areas? Some other structure?

PERSON B:
> That’s a very good discussion topic. I’m working in an Ecommerce company and I do have the same question.
> At first glance it seems to make sense to arrange teams in pricing, promotion, checkout.
> But in my reality, there are too many dependencies between these teams when we try to roll out a new feature.
> Say I want to roll out a new loyalty program for my customer, they purchase a membership that gives them 10% off on a future order over $50 and free shipping.
> In this feature, we touch pricing (new product, memberships), promotion, and checkout (free shipping).
> Thus there are many wait times and hand offs.
> I’m trying to think that my Ecommerce platform is a product as a whole, then how should I arrange my team structure.

MJ:
> It's useful to consider that Requirements Areas are only intended to be used when the number of teams gets past 8.
>
> Even *feature teams* on large products will have shared work, which is the reason for working together in one Sprint toward one demonstration.  We especially want to avoid *asynchronous dependencies*, but *shared work* amongst teams can be a good thing.  Useful patterns for inter-team collaboration are here: <https://less.works/less/framework/coordination-and-integration.html>
>
> For PERSON A's example I would want to know the number of teams involved before speculating too much.  But at first glance it doesn't strike me as unreasonable to have PBIs related to base pricing, other PBIs related to applying promotions, PBIs related to cart management, etc.  For less than 8 teams, teams (or their reps) could work out which teams were most likely to work on which PBIs during overall backlog refinement (see <https://less.works/less/framework/product-backlog-refinement.html>), and further details (and probably further splitting) during team backlog refinement.  Then during Sprint Planning 1 they'd continue with those allocation decisions, or change them if needed.
>
> But more generally, I'd like to start with an overall retrospective with everyone involved to analyze what's happened in the past and which parts of it are working or not.
>
> The article above fails to mention a couple other techniques that spread knowledge to reduce handoffs: *current architecture workshop* and *mob programming*.  If we have those and something like TDD, internal open source is less scary.
