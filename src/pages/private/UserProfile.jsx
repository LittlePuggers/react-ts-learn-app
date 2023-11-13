import { useUser } from "../../context/UserContext";
import studentPic from "../../assets/images/avatar-student.png";
import trainerPic from "../../assets/images/avatar-trainer.png";

// { asStudent, user }

export function UserProfile() {
  const { user } = useUser();
  const asStudent = user.role === "student" ? true : false;
  const avatar = asStudent ? studentPic : trainerPic;

  return (
    <section className="user-profile">
      <h2>My profile</h2>
      <div className="avatar-status">
        <img src={avatar} alt="Avatar"></img>
        <div>
          <p>Status</p>
          <p>Active</p>
        </div>
      </div>
      <p>First Name</p>
      <p>{user.name}</p>
      <p>Last Name</p>
      <p>{user.lastName}</p>
      <p>User Name</p>
      <p>{`${user.name}_${user.lastName}`}</p>
      {asStudent ? (
        <>
          <p>Date of birth</p>
          <p>{user.dateBirth}</p>
        </>
      ) : (
        <>
          <p>Specialization</p>
          <p>{user.specialization}</p>
        </>
      )}
      <p>Address</p>
      <p>{user.address || "Not defined"}</p>
      <p>Email</p>
      <p>{user.email}</p>
    </section>
  );
}
