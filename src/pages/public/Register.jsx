import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import registerStudentPic from "../../assets/images/register-student.png";
import registerTrainerPic from "../../assets/images/register-trainer.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import { register, setToken } from "../../services/auth.service";

export function Register({ registerStudent }) {
  const role = registerStudent ? "Student" : "Trainer";
  const img = registerStudent ? registerStudentPic : registerTrainerPic;
  const navigate = useNavigate();
  const { setLoggedIn } = useAuth();
  const { setEmailContext, setTempPass } = useUser();

  const errorInitialState = {
    firstName: false,
    lastName: false,
    email: false,
    specialization: false,
  };

  const [error, setError] = useState(errorInitialState);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [specialization, setSpecialization] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(errorInitialState);
    if (firstName.length < 1) {
      setError((prev) => {
        return { ...prev, firstName: true };
      });
      return;
    }
    if (lastName.length < 1) {
      setError((prev) => {
        return { ...prev, lastName: true };
      });
      return;
    }
    if (email.length < 1 || !email.includes("@") || !email.endsWith(".com")) {
      setError((prev) => {
        return { ...prev, email: true };
      });
      return;
    }
    if (!registerStudent && specialization === "") {
      setError((prev) => {
        return { ...prev, specialization: true };
      });
      return;
    }

    const password = uuid().slice(0, 8);
    setTempPass(password);

    const data = {
      name: firstName,
      lastName: lastName,
      dateBirth: birthday,
      address: address,
      email: email,
      password: password,
      role: role.toLowerCase(),
      specialization: specialization,
    };
    const result = await register(data);
    setToken(result.data.token);
    setLoggedIn(true);
    setEmailContext(email);
    navigate("/register-validation");
  };

  return (
    <section className="register">
      <h1>Registration</h1>
      <p>{role}</p>
      <div className="register-img-form">
        <img src={img} alt={`Register as ${role}`}></img>
        <form>
          <Input
            required
            name="first-name"
            labelText="First name"
            placeholder="Enter your first name"
            inputType="text"
            error={error.firstName}
            onChange={setFirstName}
          />
          <Input
            required
            name="last-name"
            labelText="Last name"
            placeholder="Enter your last name"
            inputType="text"
            error={error.lastName}
            onChange={setLastName}
          />
          <Input
            required
            name="email"
            labelText="Email"
            placeholder="Enter your email"
            inputType="email"
            error={error.email}
            onChange={setEmail}
          />
          {registerStudent ? (
            <>
              <Input
                name="birthday"
                labelText="Date of birth (optional)"
                placeholder="Enter your birthday"
                inputType="date"
                onChange={setBirthday}
              />
              <Input
                name="address"
                labelText="Address (optional)"
                placeholder="Enter your address"
                inputType="text"
                onChange={setAddress}
              />
            </>
          ) : (
            <Input
              required
              name="specialization"
              labelText="Specialization"
              placeholder="Please select"
              inputType="select"
              selectArray={["Java", "PHP", "PS1", "PS2"]}
              error={error.specialization}
              onChange={setSpecialization}
            />
          )}
          <Button
            className="primary-btn"
            btnText="Submit"
            onClick={(e) => handleSubmit(e)}
          />
        </form>
      </div>
    </section>
  );
}
