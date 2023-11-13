import "./styles/index.scss";

import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

import avatarStudent from "./assets/images/avatar-student.png";
import avatarTrainer from "./assets/images/avatar-trainer.png";

import { useState } from "react";

import { Router } from "./routes/Router";

import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";

function App() {
  const [auth, setAuth] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [asStudent, setAsStudent] = useState(true);

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
          trainings: [
            {
              date: "12.03.2023",
              training: "JavaScript Course 1",
              type: "Webinar",
              trainer: "Matthew Martinez",
              duration: "15 d",
            },
            {
              date: "12.03.2023",
              training: "JavaScript Course 2  ",
              type: "Webinar",
              trainer: "Matthew Martinez",
              duration: "10 d",
            },
            {
              date: "12.03.2023",
              training: "Java",
              type: "Webinar",
              trainer: "Maria White",
              duration: "2 d",
            },
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
      <AuthProvider>
        <UserProvider>
          <Header user={userProfile} setLoggedIn={setLoggedIn} />
          <main className="main-container">
            <Router
              userProfile={userProfile}
              setAsStudent={setAsStudent}
              asStudent={asStudent}
              // setLoggedIn={setLoggedIn}
              allTrainers={allTrainers}
              // setAuth={setAuth}
            />
          </main>
          <Footer />
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
