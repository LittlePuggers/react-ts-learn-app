import { useEffect } from "react";
import art1 from "../../assets/images/art1.png";
import art2 from "../../assets/images/art2.png";
import art3 from "../../assets/images/art3.png";
import { Box } from "../../components/common/Box";
import { Button } from "../../components/UI/Button";
import { useUser } from "../../context/UserContext";
import { getUser } from "../../services/users.service";

export function Home() {
  const { user, setUser, emailContext } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const newDataUser = await getUser(emailContext);
        setUser(newDataUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [emailContext, setUser]);

  return (
    <section className="home">
      <div className="greeting">
        <h1>{`Hi, ${user.name}!`}</h1>
        <p>
          Welcome to Learn Platform - where every day is a day to learn. Dive
          into the vast ocean of knowledge and empower yourself with the tools
          for a successful tomorrow. Happy learning!
        </p>
      </div>
      <div className="blog">
        <h2>What's new?</h2>
        <p>
          Do consectetur proident proident id eiusmod deserunt consequat
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <div className="articles">
          <Box
            img={art1}
            tag="Do consectetur"
            title="Aliqua Irure Tempor Lorem Occaecat Volup"
            date="Dec 24, 2022"
            duration="5 min read"
          />
          <Box
            img={art2}
            tag="Consequat labore"
            title="Commodo Deserunt Ipsum Occcaecat Qui"
            date="Dec 12, 2022"
            duration="10 min read"
          />
          <Box
            img={art3}
            tag="Laboris nulla"
            title="Deserunt Cccaecat Qui Amet Tempor Dolore"
            date="Nov 20, 2022"
            duration="3 min read"
          />
        </div>
        <Button
          btnText="Read more articles"
          className="primary-btn"
          onClick={undefined}
        />
      </div>
    </section>
  );
}
