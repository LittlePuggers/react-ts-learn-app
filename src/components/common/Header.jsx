import { useState } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { ProfileMenu } from "./ProfileMenu";

export function Header({ logged, user }) {
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
  const toggleProfileMenuVisible = () => {
    setIsProfileMenuVisible((prev) => !prev);
  };
  return (
    <header className="header">
      <section className="logo">
        {" "}
        <Logo />{" "}
      </section>
      {logged ? (
        <>
          <section className="header-menu">
            <p>Blog</p>
            <p>Pricing</p>
            <p>About Us</p>
          </section>
          <section className="header-auth">
            {user ? user.userName : "Sign in"}
            {logged ? (
              <>
                <img
                  src={user.picture}
                  alt="User profile"
                  className="header-pic"
                  onClick={toggleProfileMenuVisible}
                ></img>
                {isProfileMenuVisible && (
                  <ProfileMenu
                    user={user}
                    setIsProfileMenuVisible={setIsProfileMenuVisible}
                  />
                )}
              </>
            ) : (
              <Button
                className="primary-btn"
                btnText="Join us"
                onClick={undefined}
              />
            )}
          </section>
        </>
      ) : null}
    </header>
  );
}
