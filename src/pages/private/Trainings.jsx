import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { BasicTable } from "../../components/common/BasicTable";
import { Button } from "../../components/UI/Button";
import { DatePicker } from "../../components/UI/DatePicker";
import { Input } from "../../components/UI/Input";
import { useNavigate } from "react-router-dom";

export function Trainings() {
  const navigate = useNavigate();

  const dummyTrainings = [
    {
      date: "12.03.2023",
      training: "JavaScript Course 1",
      type: "Webinar",
      trainer: "Matthew Martinez",
      duration: "15 d",
    },
    {
      date: "12.03.2023",
      training: "JavaScript Course 2  ",
      type: "Webinar",
      trainer: "Matthew Martinez",
      duration: "10 d",
    },
    {
      date: "12.03.2023",
      training: "Java",
      type: "Webinar",
      trainer: "Maria White",
      duration: "2 d",
    },
  ];

  return (
    <>
      <Breadcrumbs />
      <section className="trainings">
        <h1>Trainings</h1>
        <Button
          btnText="Add training"
          className="secondary-btn"
          onClick={() => navigate("/my-account/trainings/add-training")}
        />
        <form>
          <h2>Search trainings</h2>
          <div className="search-form">
            <div className="search-inputs">
              <Input
                name="trainer-name"
                labelText="Trainer name"
                placeholder="Trainer's name"
              />
              <Input
                name="trainer-specialization"
                labelText="Specialization"
                placeholder="Trainer's specialization"
              />
            </div>
            <div className="search-dates">
              <DatePicker label="From" />
              <DatePicker label="To" />
            </div>
          </div>
          <Button
            btnText="Search"
            className="primary-btn"
            onClick={undefined}
          />
        </form>
        <div className="passed-trainings">
          <h2>My passed trainings</h2>
          <BasicTable data={dummyTrainings} blueCol={[3]} boldCol={[2]} />
        </div>
      </section>
    </>
  );
}
