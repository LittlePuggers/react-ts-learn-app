import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import { ToggleInput } from "../../components/UI/ToggleInput";
import studentPic from "../../assets/images/avatar-student.png";
import trainerPic from "../../assets/images/avatar-trainer.png";

export function EditProfile({ editProfile, setEditProfile, isStudent }) {
  const pic = isStudent ? studentPic : trainerPic;

  const handleChange = (e, property) => {
    setEditProfile((prev) => {
      return { ...prev, [property]: e };
    });
  };

  return (
    <section className="edit-profile">
      <h2>Edit profile</h2>
      <h3>Profile photo</h3>
      <div className="avatar-instructions">
        <img src={pic} alt="Avatar"></img>
        <div>
          <p>Upload your photo</p>
          <p>Your photo should be in PNG or JPG format</p>
          <div className="avatar-btns">
            <Button btnText="Choose image" className="outline-btn" />
            <Button btnText="Remove" className="plain-btn" />
          </div>
        </div>
      </div>
      <form className="">
        <Input
          name="firstname"
          labelText="First name"
          value={editProfile.name}
          inputType="text"
          onChange={(e) => handleChange(e, "name")}
        />
        <Input
          name="lastname"
          labelText="Last name"
          value={editProfile.lastName}
          inputType="text"
          onChange={(e) => handleChange(e, "lastName")}
        />
        <Input
          name="username"
          labelText="User name"
          value={`${editProfile.name}_${editProfile.lastName}`}
          inputType="text"
        />
        {isStudent ? (
          <>
            <Input
              name="birthdate"
              labelText="Date of birth"
              value={editProfile.dateBirth}
              inputType="text"
              onChange={(e) => handleChange(e, "dateBirth")}
            />
            <Input
              name="address"
              labelText="Address"
              value={editProfile.address}
              inputType="text"
              onChange={(e) => handleChange(e, "address")}
            />
          </>
        ) : null}
        <Input
          name="email"
          labelText="Email"
          value={editProfile.email}
          inputType="text"
          onChange={(e) => handleChange(e, "email")}
        />
        <ToggleInput />
      </form>
    </section>
  );
}
