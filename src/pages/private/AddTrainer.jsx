import { useEffect, useState } from "react";
import { Table } from "../../components/common/Table";
import { Button } from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { getTrainings } from "../../services/trainings.service";
import { getUsersByRole } from "../../services/users.service";

export function AddTrainer({ student }) {
  // allTrainers = [{name, specialization}, ...]

  const navigate = useNavigate();
  // const [innerTrainers, setInnerTrainers] = useState(
  //   allTrainers.map((trainer) => {
  //     return { ...trainer, selected: false };
  //   })
  // );

  const [allTrainers, setAllTrainers] = useState([]);

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
  }, []);

  const myTrainers = student.list;

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
        {/* <div className="directory">
        <p onClick={() => navigate("/my-account")}>My Account</p>
        <p> {">"} Add trainer</p> 
      </div> */}
        <div className="add-trainer-title">
          <h1>Add trainer</h1>
          <p>
            Please select trainers for adding them into your trainers list{" "}
            <br />
            *- There is not pos sibility to remove the trainer.
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
