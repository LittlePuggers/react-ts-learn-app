import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { ToggleInput } from "../common/ToggleInput";

export function EditProfile({ asStudent, user }) {
  return (
    <section className="edit-profile">
      <h2>Edit profile</h2>
      <h3>Profile photo</h3>
      <div className="avatar-instructions">
        <img src={user.picture} alt="Avatar"></img>
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
          placeholder={user.firstName}
          inputType="text"
        />
        <Input
          name="lastname"
          labelText="Last name"
          placeholder={user.lastName}
          inputType="text"
        />
        <Input
          name="username"
          labelText="User name"
          placeholder={user.userName}
          inputType="text"
        />
        {asStudent ? (
          <>
            <Input
              name="birthdate"
              labelText="Date fo birth"
              placeholder={user.birthDate}
              inputType="text"
            />
            <Input
              name="address"
              labelText="Address"
              placeholder={user.address}
              inputType="text"
            />
          </>
        ) : null}
        <Input
          name="email"
          labelText="Email"
          placeholder={user.email}
          inputType="text"
        />
        <ToggleInput />
      </form>
    </section>
  );
}

//name, labelText, placeholder, inputType, icon
