import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  PrivateRoute,
  PrivateWrapper,
} from "../components/privateRoute/PrivateRoute";
import { AddPassedTraining } from "../pages/private/AddPassedTraining";
import { AddTrainer } from "../pages/private/AddTrainer";
import { ChangePassword } from "../pages/private/ChangePassword";
import { ChangePasswordOk } from "../pages/private/ChangePasswordOk";
import { EditAccount } from "../pages/private/EditAccount";
import { Home } from "../pages/private/Home";
import { MyAccount } from "../pages/private/MyAccount";
import { RegisterValidation } from "../pages/private/RegisterValidation";
import { Trainings } from "../pages/private/Trainings";
import { AboutUs } from "../pages/public/AboutUs";
import { Blog } from "../pages/public/Blog";
import { HomePublic } from "../pages/public/HomePublic";
import { JoinUs } from "../pages/public/JoinUs";
import { Login } from "../pages/public/Login";
import { Pricing } from "../pages/public/Pricing";
import { Register } from "../pages/public/Register";
import { useAuth } from "../context/AuthContext";

export function Router() {
  const { isLoggedIn } = useAuth();
  const [registerStudent, setRegisterStudent] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          ) : (
            <HomePublic />
          )
        }
      ></Route>
      <Route
        path="/join-us"
        element={<JoinUs setRegisterStudent={setRegisterStudent} />}
      ></Route>
      <Route
        path="/register"
        element={<Register registerStudent={registerStudent} />}
      ></Route>
      <Route
        path="/register-validation"
        element={
          <PrivateRoute>
            <RegisterValidation />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route element={<PrivateWrapper />}>
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-account/add-trainer" element={<AddTrainer />} />
        <Route path="/my-account/edit" element={<EditAccount />} />
        <Route
          path="/my-account/change-password"
          element={<ChangePassword />}
        />
        <Route
          path="/my-account/change-password-ok"
          element={<ChangePasswordOk />}
        />
        <Route path="/my-account/trainings" element={<Trainings />} />
        <Route
          path="/my-account/trainings/add-training"
          element={<AddPassedTraining />}
        />
      </Route>
      <Route path="/blog" element={<Blog />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}
