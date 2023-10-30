import { Button } from "./common/Button";
import { Table } from "./common/Table";
// import { UserProfile } from "./common/UserProfile";
import { EditProfile } from "./EditProfile";

export function MyAccount({ asStudent, user }) {
  return (
    <section className="account">
      <h1>My Account</h1>
      <section className="user-general-info">
        {/* <UserProfile asStudent={asStudent} user={user} /> */}
        <EditProfile asStudent={asStudent} user={user} />
        <section className="user-list">
          <div className="user-list-header">
            <h2>{asStudent ? "My Trainers" : "My Students"}</h2>
            {asStudent ? (
              <Button
                className="primary-btn"
                btnText="Add trainer"
                onClick={undefined}
              />
            ) : null}
          </div>
          <Table asStudent={asStudent} user={user}></Table>
        </section>
      </section>
      <section className="profile-btns">
        <Button
          className="primary-btn"
          btnText="Edit profile"
          onClick={undefined}
        />
        <Button
          className="secondary-btn"
          btnText="Change Password"
          onClick={undefined}
        />
        {asStudent ? (
          <Button
            className="important-btn"
            btnText="Delete profile"
            onClick={undefined}
          />
        ) : null}
      </section>
      <section className="my-trainings">
        <h1>My Trainings</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          provident illum. Vel ab veniam voluptas dolore earum quaerat, velit,
          sit ea harum quam alias tempore, a deserunt repellat ex odio?
        </p>
        <Button
          className="primary-btn"
          btnText="View trainings"
          onClick={undefined}
        />
      </section>
    </section>
  );
}
