import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { BasicTable } from "../../components/common/BasicTable";
import { Button } from "../../components/UI/Button";
import { DatePicker } from "../../components/UI/DatePicker";
import { Input } from "../../components/UI/Input";
import { Table } from "../../components/common/Table";
import { useNavigate } from "react-router-dom";

export function Trainings({ user }) {
  const navigate = useNavigate();
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
          <BasicTable data={user.trainings} blueCol={[3]} boldCol={[2]} />
        </div>
      </section>
    </>
  );
}
