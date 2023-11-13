import ourTeam from "../../assets/images/our-team.png";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import { TeamBox } from "../../components/common/TeamBox";

export function AboutUs() {
  return (
    <section className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to the 'About Us' section of Learn Platform, where we can aim to
        provide you with a deeper understanding of our philosophy, values, and
        mission. Established in 2023, Learn Platform was born out of a passion
        for learning and a belief in the power of knowledge to transform lives.
      </p>
      <img src={ourTeam} alt="Our Team"></img>
      <div className="our-team">
        <div>
          <h3>Our Team</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <TeamBox
          img={team1}
          profTitle="Professional title"
          teamName="John Doe"
          description="Vitae nam itaque porro laborum officiis rem"
        ></TeamBox>
        <TeamBox
          img={team2}
          profTitle="Professional title"
          teamName="Sara Rose"
          description="Vitae nam itaque porro laborum officiis rem"
        ></TeamBox>
        <TeamBox
          img={team3}
          profTitle="Professional title"
          teamName="Jack Black"
          description="Vitae nam itaque porro laborum officiis rem"
        ></TeamBox>
      </div>
    </section>
  );
}
