import { useNavigate } from "react-router-dom";
import homeVideo from "../../assets/images/home-video.png";
import { Button } from "../../components/UI/Button";

export function HomePublic() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <section className="home-hero">
        <h1>Let's start learning</h1>
        <p>
          Welcome to Learn Platform - where every day is a day to learn. Dive
          into the vast ocean of knowledge and empower yourself with the tools
          for a successful tomorrow. Happy learning!
        </p>
        <img src={homeVideo} alt="Video for home" />
      </section>
      <section className="home-join">
        <h2>Join us</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          vero incidunt quo, provident hic.
        </p>
        <Button
          btnText="Join us"
          onClick={() => navigate("/join-us")}
          className="primary-btn"
        ></Button>
      </section>
    </section>
  );
}
