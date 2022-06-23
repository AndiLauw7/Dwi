import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { UserContext } from "./context/userContext";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Dashboard from "./dashboard_admin";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { FormRegister } from "./components/pages/FormRegister";
import { DetailTentangSekolah } from "./components/pages/DetailTentangSekolah";

//import API
import { API, setAuthToken } from "./configAPI/api";



function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const user = state.user;
  console.log(user);

  const location = useLocation();
  

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      if (response?.status === 401) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      console.log(payload);

      // Send data to useContext

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });

      // Get user data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
      navigate(location.pathname);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/profile/:id" element={<Profile />} />
      <Route exact path="/form-ppdb" element={<FormRegister />} />

      <Route exact path="/dashboard/*" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/registrasi/*" element={<Register />} />
      <Route exact path="/registrasi/*" element={<Register />} />

      <Route
        exact
        path="/tentang-sd-karya-bangsa"
        element={<DetailTentangSekolah />}
      />
    </Routes>
  );
}

export default App;
