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

function App() {
  const loggedIn = false;
  const asStudent = false;
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
            { name: "Elizabeth Lopez", extra: "PHP" },
            { name: "Matthew Martinez", extra: "JavaScript" },
            { name: "Elizabeth Hall", extra: "Algorithms" },
            { name: "Maria White", extra: "Java" },
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
            { name: "Elizabeth Lopez", extra: "ACTIVE" },
            { name: "Matthew Martinez", extra: "ACTIVE" },
            { name: "Elizabeth Hall", extra: "NOT ACTIVE" },
            { name: "Maria White", extra: "NOT ACTIVE" },
            { name: "Elizabeth Watson", extra: "NOT ACTIVE" },
            { name: "Elizabeth Allen", extra: "NOT ACTIVE" },
            { name: "Caleb Jones", extra: "NOT ACTIVE" },
          ],
        }
    : null;

  return (
    <div className="App">
      <Header logged={loggedIn} user={userProfile} />
      <div className="main-container">
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
        {/* {loggedIn ? <JoinUs /> : <SignIn />} */}
        {loggedIn ? <HomePublic /> : <SignIn />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
