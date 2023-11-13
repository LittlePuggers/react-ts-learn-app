import { useState } from "react";
import { Button } from "../UI/Button";
import { Logo } from "../common/Logo";
import { ProfileMenu } from "../UI/ProfileMenu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import studentPic from "../../assets/images/avatar-student.png";
import trainerPic from "../../assets/images/avatar-trainer.png";

export function Header() {
  const { isLoggedIn } = useAuth();
  const { user } = useUser();
  const avatar =
    user.role === "student"
      ? studentPic
      : user.role === "trainer"
      ? trainerPic
      : null;

  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
  const navigate = useNavigate();
  const toggleProfileMenuVisible = () => {
    setIsProfileMenuVisible((prev) => !prev);
  };

  return (
    <header className="header">
      <section className="logo">
        <Logo />
      </section>

      <section className="header-menu">
        <Link to="/blog">Blog</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about-us">About Us</Link>
      </section>

      <section className="header-auth">
        {isLoggedIn ? user.name : <Link to="/login">Sign in</Link>}
        {isLoggedIn ? (
          <>
            <img
              src={avatar}
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
            onClick={() => navigate("/join-us")}
          />
        )}
      </section>
    </header>
  );
}
