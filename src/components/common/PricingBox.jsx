import check from "../../assets/icons/circle-check-regular.svg";
import xmark from "../../assets/icons/xmark-solid.svg";
import { Button } from "../UI/Button";

export function PricingBox({
  title,
  description,
  price,
  pricetag,
  perks,
  btnText,
  badge,
}) {
  return (
    <article className="pricing-box">
      <h1>
        {title}
        {badge ? <span>{badge}</span> : null}
      </h1>
      <p>{description}</p>
      <h2>
        {price}
        <sup>{pricetag}</sup>
      </h2>
      <ul>
        {perks.map((perk, index) => {
          return (
            <li key={index}>
              <img
                className="pricing-includes-icon"
                src={perk.included ? check : xmark}
                alt={perk.included ? "Included" : "Not included"}
              ></img>
              {perk.perk}
            </li>
          );
        })}
      </ul>
      <Button btnText={btnText} onClick={undefined} className="plain-btn" />
    </article>
  );
}
