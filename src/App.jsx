import "./App.css";

import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>

        <Route
          path="/profile"
          element={
            <PrivateRoute component={<Profile></Profile>}></PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
