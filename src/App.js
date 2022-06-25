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
import Home from "./components/pages/HomeTitle";
import Profile from "./components/pages/Profile";
import Dashboard from "./dashboard_admin";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { FormRegister } from "./components/pages/FormRegister";
import { DetailTentangSekolah } from "./components/pages/DetailTentangSekolah";
import { FormPembayaran } from "./components/pages/FormPembayaran";
import HomeTitle from "./components/pages/HomeTitle";
// import { Audio } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//import API
import { API, setAuthToken } from "./configAPI/api";
import { DetailFasilitasSekolah } from "./components/pages/DetailFasilitasSekolah";
import { FormRegisterEdit } from "./components/pages/FormRegisterEdit";
import { FormPembayaranEdit } from "./components/pages/FormPembayaranEdit";

function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const datauser = state.user;
  console.log(datauser);

  const location = useLocation();

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log(response.status);
      if (response?.status === 401) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
      // Get user data
      let payload = response.data.data.user;
      console.log(response.data.data.user);
      // Get token from local storage
      payload.token = localStorage.token;

      console.log(payload);
      console.log(response.data.data.user);

      // Send data to useContext

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });

      // Get user data
    } catch (error) {
      return dispatch({
        type: "AUTH_ERROR",
      });
      console.log(error.message);
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
      {/* <Audio height="100" width="100" color="grey" ariaLabel="loading" />; */}
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="/home-title" element={<HomeTitle />} /> */}
      <Route exact path="/profile/:id" element={<Profile />} />
      <Route exact path="/form-ppdb" element={<FormRegister />} />
      <Route exact path="/form-ppdb/edit/:id" element={<FormRegisterEdit />} />
      <Route exact path="/form-pembayaran" element={<FormPembayaran />} />
      <Route exact path="/form-pembayaran/edit/:id" element={<FormPembayaranEdit />} />

      <Route exact path="/dashboard/*" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/registrasi" element={<Register />} />

      <Route
        exact
        path="/tentang-sd-karya-bangsa"
        element={<DetailTentangSekolah />}
      />
      <Route
        exact
        path="/fasilitas-sekolah"
        element={<DetailFasilitasSekolah />}
      />
    </Routes>
  );
}

export default App;
