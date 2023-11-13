import { PricingBox } from "../../components/common/PricingBox";
import { Faqs } from "./Faqs";

export function Pricing() {
  const perks50 = [
    { perk: "Up to 5 users", included: true },
    { perk: "Collaboration features", included: true },
    { perk: "Smart analytics", included: false },
    { perk: "30-day free trial", included: false },
  ];
  const perks100 = [
    { perk: "Up to 50 users", included: true },
    { perk: "Collaboration features", included: true },
    { perk: "Smart analytics", included: true },
    { perk: "30-day free trial", included: true },
  ];
  const perks150 = [
    { perk: "Unlimited users", included: true },
    { perk: "Collaboration features", included: true },
    { perk: "Smart analytics", included: true },
    { perk: "30-day free trial", included: true },
  ];
  return (
    <section className="pricing-faq">
      <section className="pricing">
        <h1>Pricing</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde at
          dolor magni eos voluptatibus, magnam natus amet cum assumenda
          similique explicabo nobis maxime ullam, necessitatibus dolores ut
          aspernatur labore iure.
        </p>
        <div className="pricing-item-container">
          <PricingBox
            title="Group"
            description="Perfect for side or hobby projects"
            price="$50"
            pricetag="/month"
            perks={perks50}
            btnText="Upgrade"
          />
          <PricingBox
            title="Personal"
            description="Perfect for small teams"
            price="$100"
            pricetag="/team/month"
            perks={perks100}
            btnText="Upgrade"
            badge="Popular"
          />
          <PricingBox
            title="Organization"
            description="Perfect for organizations"
            price="$150"
            pricetag="/user/month"
            perks={perks150}
            btnText="Contact sale"
          />
        </div>
      </section>
      <section className="faq">
        <h1>Frequently asked questions</h1>
        <p>Exercitation dolore reprehenderit fugi</p>
        <Faqs />
      </section>
    </section>
  );
}
