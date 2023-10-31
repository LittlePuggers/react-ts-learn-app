import { useState } from "react";
import { Table } from "../common/Table";
import { Button } from "../common/Button";

export function AddTrainer({ allTrainers, student }) {
  const [innerTrainers, setInnerTrainers] = useState(
    allTrainers.map((trainer) => {
      return { ...trainer, selected: false };
    })
  );
  //   console.log("Inner trainers: ", innerTrainers);

  const myTrainers = student.list;
  //   console.log("My trainers: ", myTrainers);

  const handleCheckboxChange = (index) => {
    const updatedTrainers = [...innerTrainers];
    updatedTrainers[index].selected = !updatedTrainers[index].selected;
    setInnerTrainers(updatedTrainers);
  };
  const selectedTrainers = innerTrainers.filter((trainer) => trainer.selected);
  console.log("Selected trainers: ", selectedTrainers);

  return (
    <section className="add-trainer">
      <div className="directory">
        <p>My Account</p>
        <p> {">"} Add trainer</p>
      </div>
      <div className="add-trainer-title">
        <h1>Add trainer</h1>
        <p>
          Please select trainers for adding them into your trainers list <br />
          *- There is not pos sibility to remove the trainer.
        </p>
      </div>
      <div className="tables">
        <div>
          <h2>All Trainers</h2>
          <Table list={innerTrainers} onCheckboxChange={handleCheckboxChange} />
          <Button btnText="Add" className="primary-btn" onClick={undefined} />
        </div>
        <div>
          <h2>My Trainers</h2>
          <Table list={myTrainers} />
        </div>
      </div>
    </section>
  );
}
