import { Button } from "../common/Button";
import { Input } from "../common/Input";
import registerStudent from "../../assets/images/register-student.png";
import registerTrainer from "../../assets/images/register-trainer.png";

export function Register({ asStudent }) {
  const role = asStudent ? "Student" : "Trainer";
  const img = role === "Student" ? registerStudent : registerTrainer;

  return (
    <section className="register">
      <h1>Registration</h1>
      <p>{role}</p>
      <div className="register-img-form">
        <img src={img} alt={`Register as ${role}`}></img>
        <form>
          <Input
            name="first-name"
            labelText="First name"
            placeholder="Enter your first name"
            inputType="text"
          />
          <Input
            name="last-name"
            labelText="Last name"
            placeholder="Enter your last name"
            inputType="text"
          />
          <Input
            name="email"
            labelText="Email"
            placeholder="Enter your email"
            inputType="email"
          />
          {asStudent ? (
            <>
              <Input
                name="birthday"
                labelText="Date of birth (optional)"
                placeholder="Enter your birthday"
                inputType="date"
              />
              <Input
                name="address"
                labelText="Address (optional)"
                placeholder="Enter your address"
                inputType="text"
              />
            </>
          ) : (
            <Input
              name="specialization"
              labelText="Specialization"
              placeholder="Please select"
              inputType="select"
              selectArray={["Java", "PHP", "PS1", "PS2"]}
            />
          )}
          <Button
            className="primary-btn"
            btnText="Submit"
            onClick={undefined}
          />
        </form>
      </div>
    </section>
  );
}
