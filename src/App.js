// THIS IS THE MAIN COMPONENT IN THE APP
import "./styles/index.scss";
import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { HomePublic } from "./components/pages/HomePublic";
import { SignIn } from "./components/pages/SignIn";
import { JoinUs } from "./components/pages/JoinUs";
import { Register } from "./components/pages/Register";
import { RegisterValidation } from "./components/pages/RegisterValidation";
import { MyAccount } from "./components/pages/MyAccount";
import { EditAccount } from "./components/pages/EditAccount";
import avatarStudent from "./assets/images/avatar-student.png";
import avatarTrainer from "./assets/images/avatar-trainer.png";
import { AddTrainer } from "./components/pages/AddTrainer";

function App() {
  const loggedIn = true;
  const asStudent = true;
  const userProfile = loggedIn
    ? asStudent
      ? {
          firstName: "Marta",
          lastName: "Black",
          userName: "Marta_st",
          birthDate: "01.01.2001",
          address: "123 Main Street, Boston, MA 02108 United States",
          email: "marta_1234@gmail.com",
          picture: avatarStudent,
          list: [
            { name: "Elizabeth Lopez", specialization: "PHP" },
            { name: "Matthew Martinez", specialization: "JavaScript" },
            { name: "Elizabeth Hall", specialization: "Algorithms" },
            { name: "Maria White", specialization: "Java" },
          ],
        }
      : {
          firstName: "John",
          lastName: "Black",
          userName: "John_12",
          specialization: "Java",
          address: "456 Lake Shore Dr, Chicago, IL 60611 United States",
          email: "john_12@gmail.com",
          picture: avatarTrainer,
          list: [
            { name: "Elizabeth Lopez", status: "ACTIVE" },
            { name: "Matthew Martinez", status: "ACTIVE" },
            { name: "Elizabeth Hall", status: "NOT ACTIVE" },
            { name: "Maria White", status: "NOT ACTIVE" },
            { name: "Elizabeth Watson", status: "NOT ACTIVE" },
            { name: "Elizabeth Allen", status: "NOT ACTIVE" },
            { name: "Caleb Jones", status: "NOT ACTIVE" },
          ],
        }
    : null;
  const allTrainers = [
    { name: "Elizabeth Lopez", specialization: "PHP" },
    { name: "Matthew Martinez", specialization: "JavaScript" },
    { name: "Elizabeth Hall", specialization: "Algorithms" },
    { name: "Maria White", specialization: "Java" },
    { name: "Elizabeth Watson", specialization: "Go Lang" },
    { name: "Elizabeth Allen", specialization: "Rust" },
    { name: "Caleb Jones", specialization: "Python" },
    { name: "Javier Ortiz", specialization: "HTML" },
    { name: "Brandon Taylor", specialization: "CSS" },
  ];

  return (
    <div className="App">
      <Header logged={loggedIn} user={userProfile} />
      <div className="main-container">
        {/* <AddTrainer allTrainers={allTrainers} student={userProfile} /> */}
        {/* {loggedIn ? (
          <EditAccount asStudent={asStudent} user={userProfile} />
        ) : (
          <SignIn />
        )} */}
        {/* {loggedIn ? (
          <MyAccount asStudent={asStudent} user={userProfile} />
        ) : (
          <SignIn />
        )} */}
        {/* {loggedIn ? <RegisterValidation user={userProfile} /> : <SignIn />} */}
        {/* {loggedIn ? <Register asStudent={asStudent} /> : <SignIn />} */}
        {loggedIn ? <JoinUs /> : <SignIn />}
        {/* {loggedIn ? <HomePublic /> : <SignIn />} */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
