import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import { EditProfile } from "./EditProfile";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { updateUser } from "../../services/users.service";

export function EditAccount() {
  // { asStudent, user }
  const navigate = useNavigate();
  const { user, emailContext } = useUser();
  const isStudent = user.role === "student" ? true : false;

  const [editProfile, setEditProfile] = useState({
    name: user.name,
    lastName: user.lastName,
    dateBirth: user.dateBirth,
    address: user.address,
    email: user.email,
  });

  const handleUpdate = async () => {
    await updateUser(emailContext, editProfile);
    navigate("/my-account");
  };

  return (
    <section className="edit-account">
      <h1>Edit Account</h1>
      <section className="user-general-info">
        <EditProfile
          editProfile={editProfile}
          setEditProfile={setEditProfile}
          isStudent={isStudent}
        />
        {!isStudent ? (
          <>
            <section className="trainer-special">
              <Input
                name="my-special"
                labelText="My specialization"
                placeholder="Dropdown"
                inputType="select"
                selectArray={["Java", "PHP", "SP1", "SP2"]}
              ></Input>
            </section>
          </>
        ) : null}
      </section>
      <section className="profile-btns">
        <Button
          className="plain-btn"
          btnText="Cancel"
          onClick={() => navigate(-1)}
        />
        <Button
          className="primary-btn"
          btnText="Save changes"
          onClick={handleUpdate}
        />
      </section>
    </section>
  );
}
