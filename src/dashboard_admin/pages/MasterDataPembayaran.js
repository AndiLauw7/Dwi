import moment from "moment";
import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import MyPage from "../components/myPage";
import MyTable from "../components/myTable";

const columns = [
  {
    heading: "Nama Siswa",
    selector: "registrasi.nama_lengkap",
  },
  {
    heading: "Nama Lengkap",
    selector: "nama_lengkap",
    format: (nama_lengkap) => {
      return(
        <>
        {nama_lengkap === null ?   "-" : nama_lengkap}
        </>
      )
    },
  },
  {
    heading: "Tanggal Pembayaran",
    selector: "tanggal_pembayaran",
    format: (tanggal_pembayaran) => {
      return(
        <>
        {tanggal_pembayaran === null ?   "-" : moment(tanggal_pembayaran).format("DD-MMM-YYYY")}
        </>
      )
    },
  },
  {
    heading: "Bukti Pembayaran",
    selector: "bukti_pembayaran",
    format: (bukti_pembayaran) => {
      console.log(bukti_pembayaran);
      return (
        <>
        {bukti_pembayaran === "http://localhost:5000/uploads/null" ? <p>-</p> :  <img src={bukti_pembayaran} alt="img" width={100} />}
        </>
      )
    }
  },
  {
    heading: "Status",
    selector: "status_pembayaran",
    format: (status_pembayaran) => {
      console.log(status_pembayaran);
      return (
        <>
          {status_pembayaran ? <p>Sudah Lunas</p> : <p>Belum Bayar</p>}
        </>
      )
    }
  },
];

const ActComp = (data) => {
  console.log(data);
  const [selectData, setSelectData] = useState({});

  return (
    <>
    <div style={{ display: "flex", gap: 24 }}>
      {data.status_pembayaran ? (
        <p>sudah terbayar</p>
     ) : data.bukti_pembayaran !== "http://localhost:5000/uploads/null" ? <p>pending</p> :  <p>belum bayar</p>}
     </div>
    </>

  );
};


export default function MasterDataPembayaran() {
  const location = useLocation()
  return <MyPage title={"Master Data Pembayaran"} url={location.pathname}>
    <MyTable colAct={ActComp} columns={columns} url={"/pembayaran"} pathAdd={"/form-pembayaran"} />
  </MyPage>;
}
