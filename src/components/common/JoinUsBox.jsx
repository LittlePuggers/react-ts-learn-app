import { Button } from "./Button";

export function JoinUsBox({ title, text, img }) {
  return (
    <section className="join-us-box">
      <div className="join-us-box-text">
        <h2>{title}</h2>
        <p>{text}</p>
        <Button btnText="Join Us" onClick={undefined} className="primary-btn" />
      </div>
      <div className="join-us-box-img">
        <img src={img} alt="Join as Trainer"></img>
      </div>
    </section>
  );
}
