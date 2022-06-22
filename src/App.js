import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { UserContext } from "./context/userContext";
import Home from "./components/pages/Home";
import DetailJourney from "./components/pages/DetailJourney";
import Bookmark from "./components/pages/Bookmark";
import Profile from "./components/pages/Profile";
import AddJourney from "./components/pages/AddJourney";
import UpdateJourney from "./components/pages/UpdateJourney";
import Dashboard from "./dashboard_admin";
import Login from "./components/login/index";

//import API
import { API, setAuthToken } from "./configAPI/api";

function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const user = state.user;

  // useEffect(() => {
  // 	if (localStorage.token) {
  // 		setAuthToken(localStorage.token);
  // 	}

  // 	if (!state.isLogin) {
  // 		return navigate("/");
  // 	} else {
  // 		return navigate("/");
  // 	}
  // }, [state]);

  //always check auth
  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      if (response?.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage?.token;

      console.log(payload);

      // Send data to useContext

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });

      // Get user data
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      setAuthToken(localStorage.token);
      checkUser();
      navigate(location.pathname);
    } else {
      navigate(location.pathname);
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/detail-journey/:id" element={<DetailJourney />} />
      <Route exact path="/profile/:id" element={<Profile />} />
      <Route exact path="/new-journey" element={<AddJourney />} />
      <Route exact path="/bookmark/:id" element={<Bookmark />} />
      <Route exact path="/update-journey/:id" element={<UpdateJourney />} />

      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />} />

      <Route
        exact
        path="/profile/:idUser/detail-journey/:id"
        element={<DetailJourney />}
      />
      <Route
        exact
        path="/bookmark/:idUser/detail-journey/:id"
        element={<DetailJourney />}
      />
    </Routes>
  );
}

export default App;
