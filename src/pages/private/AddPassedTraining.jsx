import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { Button } from "../../components/UI/Button";
import { DatePicker } from "../../components/UI/DatePicker";
import { Input } from "../../components/UI/Input";
import { getUsersByRole } from "../../services/users.service";

export function AddPassedTraining() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      const result = await getUsersByRole("trainer");
      const trainerList = result.map((trainer) => {
        return `${trainer.name} ${trainer.lastName}`;
      });
      setTrainers(trainerList);
    };
    fetchTrainers();
  }, []);

  return (
    <>
      <Breadcrumbs />
      <section className="add-passed-training">
        <h1>Add passed training</h1>
        <div className="training">
          <h3>Training</h3>
          <form>
            <div className="training-info">
              <Input
                name="name"
                labelText="Name"
                placeholder="Enter training name"
              />
              <DatePicker label="Training start date" />
              <Input
                name="duration"
                labelText="Duration"
                placeholder="Enter duration"
              />
              <Input
                name="type"
                labelText="Type"
                placeholder="Please select"
                inputType="select"
                selectArray={["Webinar", "Not webinar"]}
              />
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Enter description"
              ></textarea>
              <div className="form-btns">
                <Button
                  btnText="Cancel"
                  onClick={undefined}
                  className="plain-btn"
                />
                <Button
                  btnText="Add"
                  onClick={undefined}
                  className="primary-btn"
                />
              </div>
            </div>
            <div className="add-trainer">
              <Input
                name="trainer"
                labelText="Add trainer"
                placeholder="Please select one"
                inputType="select"
                selectArray={trainers}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
