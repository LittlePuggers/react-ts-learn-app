export function UserProfile({ asStudent, user }) {
  return (
    <section className="user-profile">
      <h2>My profile</h2>
      <div className="avatar-status">
        <img src={user.picture} alt="Avatar"></img>
        <div>
          <p>Status</p>
          <p>Active</p>
        </div>
      </div>
      <p>First Name</p>
      <p>{user.firstName}</p>
      <p>Last Name</p>
      <p>{user.lastName}</p>
      <p>User Name</p>
      <p>{user.userName}</p>
      {asStudent ? (
        <>
          <p>Date of birth</p>
          <p>{user.birthDate}</p>
        </>
      ) : (
        <>
          <p>Specialization</p>
          <p>{user.specialization}</p>
        </>
      )}
      <p>Address</p>
      <p>{user.address}</p>
      <p>Email</p>
      <p>{user.email}</p>
    </section>
  );
}
