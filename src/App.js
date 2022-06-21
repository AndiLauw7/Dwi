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
import DetailJourney from "./components/pages/DetailJourney";
import Bookmark from "./components/pages/Bookmark";
import Profile from "./components/pages/Profile";
import AddJourney from "./components/pages/AddJourney";
import UpdateJourney from "./components/pages/UpdateJourney";
import Dashboard from "./dashboard_admin/index";
import Login from "./components/login";

//import API
import { API, setAuthToken } from "./configAPI/api";
import { TentangSekolah } from "./components/pages/TentangSekolah";
import { FasilitasSekolah } from "./components/pages/FasilitasSekolah";
import { Pendaftaraan } from "./components/pages/Pendaftaraan";
import { FormRegister } from "./components/pages/FormRegister";
import HomeTitle from "./components/pages/HomeTitle";



function App() {
  const navigate = useNavigate();
  const location = useLocation()

  console.log(location);
  const [state, dispatch] = useContext(UserContext);

  // useEffect(() => {
  // 	if (localStorage.token) {
  // 		setAuthToken(localStorage.token);
  // 	}

  // 	 if ( state.user.role === "admin" || state.user.role === "kepalasekolah") {
  // 		return navigate("/dashboard/home");
  //   }else {
  // 		return navigate("/");
  // 	}
  // }, [state.user]);

  // always check auth
  const checkUser = async () => {
    try {
 
        const response = await API.get("/check-auth");
        if (response?.status === 404) {
          return dispatch({
            type: "AUTH_ERROR",

          });

        }
        console.log(response);
        let payload = response.data.data?.user;
        // Get token from local storage
        payload.token = localStorage?.token;

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
    if(localStorage.token === undefined){
      checkUser();
    } else {
      navigate(location.pathname)
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route exact path="/" element={<HomeTitle />} />
      <Route exact path="/detail-journey/:id" element={<DetailJourney />} />
      <Route exact path="/profile/:id" element={<Profile />} />
      <Route exact path="/new-journey" element={<AddJourney />} />
      <Route exact path="/bookmark/:id" element={<Bookmark />} />
      <Route exact path="/update-journey/:id" element={<UpdateJourney />} />

      <Route exact path="/tentang-sekolah" element={<TentangSekolah />} />
      <Route exact path="/fasilitas-sekolah" element={<FasilitasSekolah />} />
      <Route exact path="/info-ppdb" element={<Pendaftaraan />} />
      <Route exact path="/form-ppdb" element={<FormRegister />} />

      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />

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
