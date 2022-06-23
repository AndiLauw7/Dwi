import React, { useContext, useEffect } from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Profile from "./pages/Profile";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import LaporanDataSiswa from "./pages/LaporanDataSiswa";
import LaporanPembayaran from "./pages/LaporanPembayaran";
import MasterDataPembayaran from "./pages/MasterDataPembayaran";
import MasterDataSiswa from "./pages/MasterDataSiswa";
import User from "./pages/User";
import { UserContext } from "../context/userContext";

export default () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [state, dispatch] = useContext(UserContext);
  const user = state.user.role;

  useEffect(() => {
    if (localStorage.token) {
      return navigate(location.pathname);
    } else {
      return navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Routes basename="/dashboard">
        {/* <Routes> */}
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/laporan_data_siswa"
          element={<LaporanDataSiswa />}
        />
        <Route
          exact
          path="/laporan_pembayaran"
          element={<LaporanPembayaran />}
        />
        <Route exact path="/master_data_siswa" element={<MasterDataSiswa />} />
        <Route
          exact
          path="/master_pembayaran"
          element={<MasterDataPembayaran />}
        />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>

      {/* </Routes> */}

      {/* 
      if(user === admin){
        return halaman home 
      } else if (user === kepalasekolah){
        return halaman home
      } else {
        return Login
      }
      */}

      {/* {
          user === "admin" ? ( <Route exact path="/*" element={<HomePage />} />) : ( <Route exact path="/*" element={<Login />} /> )
      },
      {
         user === "kepalasekolah" ? ( <Route exact path="/*" element={<HomePage />} />)  : ( <Route exact path="/*" element={<Login />} /> )
      } */}
    </>
  );
};
