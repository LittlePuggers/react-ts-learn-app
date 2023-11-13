import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button";
import { Input } from "../../components/UI/Input";
import { useUser } from "../../context/UserContext";
import { useState } from "react";
import { changePassword } from "../../services/users.service";

export function ChangePassword() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const errorInitialState = {
    currentPassword: false,
    newPassword: false,
    newPasswordConfirm: false,
  };
  const [error, setError] = useState(errorInitialState);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError(errorInitialState);
    if (newPassword.length < 1) {
      setError((prev) => {
        return { ...prev, newPassword: true };
      });
      return;
    }
    if (newPasswordConfirm !== newPassword) {
      setError((prev) => {
        return { ...prev, newPasswordConfirm: true };
      });
      return;
    }
    const data = {
      oldPassword: currentPassword,
      newPassword: newPassword,
    };
    await changePassword(user.email, data);
    navigate("/my-account/change-password-ok");
  };

  return (
    <section className="change-password-container">
      <h1>Security</h1>
      <div>
        <div className="change-password">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
          </svg>
          <p>Change Password</p>
        </div>
        <div className="change-password-form">
          <form>
            <Input
              name="current-password"
              labelText="Current password"
              placeholder="Enter current password"
              inputType="password"
              onChange={setCurrentPassword}
              error={error.currentPassword}
            />
            <Input
              name="new-password"
              labelText="New password"
              placeholder="Enter new password"
              inputType="password"
              onChange={setNewPassword}
              error={error.newPassword}
            />
            <Input
              name="confirm-new-password"
              labelText="Confirm new password"
              placeholder="Confirm new password"
              inputType="password"
              onChange={setNewPasswordConfirm}
              error={error.newPasswordConfirm}
            />
            <div className="form-btns">
              <Button
                btnText="Cancel"
                className="plain-btn"
                onClick={() => navigate("/my-account")}
              />
              <Button
                btnText="Change password"
                className="primary-btn"
                onClick={handlePasswordChange}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
