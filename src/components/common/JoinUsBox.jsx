import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button";

export function JoinUsBox({ title, text, img, setRegisterStudent }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    title === "Register as Student"
      ? setRegisterStudent(true)
      : setRegisterStudent(false);
    navigate("/register");
  };

  return (
    <section className="join-us-box">
      <div className="join-us-box-text">
        <h2>{title}</h2>
        <p>{text}</p>
        <Button
          btnText="Join Us"
          onClick={handleOnClick}
          className="primary-btn"
        />
      </div>
      <div className="join-us-box-img">
        <img src={img} alt="Join as Trainer"></img>
      </div>
    </section>
  );
}
