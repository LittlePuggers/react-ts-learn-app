import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { EditProfile } from "./EditProfile";

export function EditAccount({ asStudent, user }) {
  return (
    <section className="edit-account">
      <h1>Edit Account</h1>
      <section className="user-general-info">
        <EditProfile asStudent={asStudent} user={user} />
        {!asStudent ? (
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
        <Button className="plain-btn" btnText="Cancel" onClick={undefined} />
        <Button
          className="primary-btn"
          btnText="Save changes"
          onClick={undefined}
        />
      </section>
    </section>
  );
}
