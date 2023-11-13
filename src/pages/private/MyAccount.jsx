import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button";
import { Table } from "../../components/common/Table";
import { UserProfile } from "./UserProfile";
import { useEffect, useState } from "react";
import { Modal } from "../../components/UI/Modal";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
import { getTrainers } from "../../services/trainings.service";
import { deleteUser } from "../../services/users.service";
import { logout, removeToken } from "../../services/auth.service";

export function MyAccount() {
  const { isLoggedIn, setLoggedIn } = useAuth();
  const { user, emailContext } = useUser();
  const asStudent = user.role === "student" ? true : false;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    console.log(isLoggedIn);
    const fetchTrainers = async () => {
      const result = await getTrainers(emailContext);
      const trainerList = result.map((trainer) => {
        return {
          name: `${trainer.name} ${trainer.lastName}`,
          specialization: trainer.specialization,
        };
      });
      setTrainers(trainerList);
    };
    fetchTrainers();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDeleteUser = async () => {
    await deleteUser(emailContext);
    await logout();
    removeToken();
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <section className="account">
      <h1>My Account</h1>
      <section className="user-general-info">
        <UserProfile asStudent={asStudent} user={user} />
        <section className="user-list">
          <div className="user-list-header">
            <h2>{asStudent ? "My Trainers" : "My Students"}</h2>
            {asStudent ? (
              <Button
                className="primary-btn"
                btnText="Add trainer"
                onClick={() => navigate("/my-account/add-trainer")}
              />
            ) : null}
          </div>
          <Table asStudent={asStudent} list={trainers}></Table>
        </section>
      </section>
      <section className="profile-btns">
        <Button
          className="primary-btn"
          btnText="Edit profile"
          onClick={() => navigate("/my-account/edit")}
        />
        <Button
          className="secondary-btn"
          btnText="Change Password"
          onClick={() => navigate("/my-account/change-password")}
        />
        {asStudent ? (
          <>
            <Button
              className="important-btn"
              btnText="Delete profile"
              onClick={openModal}
            />
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h3>Profile Deletion Confirmation</h3>
              <p>
                We're truly sorry to see you go. Before you proceed with
                deleting your profile, we want you to know that this action is
                permanent and irreversible. You'll lose access to all your
                account information, course progress, certificates, and any
                learning communities you're a part of. <br />
                If there's anything we can do to improve your experience or if
                you need assistance with any issues you've encountered, please
                reach out to our support team. We're always here to help. <br />
                If you still wish to delete your account, please click on the
                'Confirm' button below.
              </p>
              <div className="modal-btns">
                <Button
                  className="plain-btn"
                  btnText="Cancel"
                  onClick={closeModal}
                />
                <Button
                  className="important-btn"
                  btnText="Confirm"
                  onClick={confirmDeleteUser}
                />
              </div>
            </Modal>
          </>
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
          onClick={() => navigate("/my-account/trainings")}
        />
      </section>
    </section>
  );
}
