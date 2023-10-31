import { JoinUsBox } from "../common/JoinUsBox";
import joinTrainer from "../../assets/images/join-trainer.png";
import joinStudent from "../../assets/images/join-student.png";

export function JoinUs() {
  const description =
    "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.";

  return (
    <section className="join">
      <h1>Join Us</h1>
      <JoinUsBox
        title="Register as Trainer"
        text={description}
        img={joinTrainer}
      />
      <JoinUsBox
        title="Register as Student"
        text={description}
        img={joinStudent}
      />
    </section>
  );
}
