export function ProfileMenu({ user, setIsProfileMenuVisible }) {
  return (
    <div
      className="profile-menu-container"
      onClick={(e) => {
        if (e.target.className !== "profile-menu-container") {
          return;
        }
        setIsProfileMenuVisible(false);
      }}
    >
      <section className="profile-menu">
        <div className="profile-menu-name">
          <img className="header-pic" src={user.picture} alt="User"></img>
          <div>
            <p>{user.userName}</p>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="profile-menu-options">
          <p>My Account</p>
          <p>Night mode</p>
        </div>
        <div className="profile-menu-out">
          <p>Sign out</p>
        </div>
      </section>
    </div>
  );
}
