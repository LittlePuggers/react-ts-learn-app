import { useEffect, useState } from "react";
import { Table } from "../../components/common/Table";
import { Button } from "../../components/UI/Button";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { getTrainers } from "../../services/trainings.service";
import { getUsersByRole } from "../../services/users.service";
import { useUser } from "../../context/UserContext";

export function AddTrainer() {
  const { emailContext } = useUser();

  const [allTrainers, setAllTrainers] = useState([]);
  const [myTrainers, setMyTrainers] = useState([]);

  useEffect(() => {
    const getAllTrainers = async () => {
      const allUserTrainers = await getUsersByRole("trainer");
      const allTrainers = allUserTrainers.map((userTrainer) => {
        return {
          name: `${userTrainer.name} ${userTrainer.lastName}`,
          specialization: userTrainer.specialization,
          selected: false,
        };
      });
      setAllTrainers(allTrainers);
    };
    getAllTrainers();

    const getMyTrainers = async () => {
      const myUserTrainers = await getTrainers(emailContext);
      const trainerList = myUserTrainers.map((trainer) => {
        return {
          name: `${trainer.name} ${trainer.lastName}`,
          specialization: trainer.specialization,
        };
      });
      setMyTrainers(trainerList);
    };
    getMyTrainers();
  }, []);

  const handleCheckboxChange = (index) => {
    const updatedTrainers = [...allTrainers];
    updatedTrainers[index].selected = !updatedTrainers[index].selected;
    setAllTrainers(updatedTrainers);
  };
  const selectedTrainers = allTrainers.filter((trainer) => trainer.selected);
  console.log("Selected trainers: ", selectedTrainers);

  return (
    <>
      <Breadcrumbs />
      <section className="add-trainer">
        <div className="add-trainer-title">
          <h1>Add trainer</h1>
          <p>
            Please select trainers for adding them into your trainers list{" "}
            <br />
            *- There is no possibility to remove the trainer.
          </p>
        </div>
        <div className="tables">
          <div>
            <h2>All Trainers</h2>
            <Table list={allTrainers} onCheckboxChange={handleCheckboxChange} />
            <Button btnText="Add" className="primary-btn" onClick={undefined} />
          </div>
          <div>
            <h2>My Trainers</h2>
            <Table list={myTrainers} />
          </div>
        </div>
      </section>
    </>
  );
}
