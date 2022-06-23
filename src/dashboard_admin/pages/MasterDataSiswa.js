import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri'
import { useLocation } from 'react-router-dom'
import { API } from '../../configAPI/api'
import MyPage from '../components/myPage'
import MyTable from '../components/myTable'


const columns = [
  {
    heading: "Tgl Registrasi",
    selector: "tgl_registrasi",
    format: ({ tgl_registrasi }) =>
      moment(tgl_registrasi).format("DD-MMM-YYYY"),
  },
  {
    heading: "Nama Lengkap",
    selector: "nama_lengkap",
  },
  {
    heading: "Jenis Kelamin",
    selector: "jenis_kelamin",
  },
  {
    heading: "Tempat Lahir",
    selector: "tempat_lahir",
  },
  {
    heading: "Tanggal Lahir",
    selector: "tanggal_lahir",
    format: ({ tanggal_lahir }) => moment(tanggal_lahir).format("DD-MMM-YYYY"),
  },
  {
    heading: "Agama",
    selector: "agama",
  },
  {
    heading: "Alamat",
    selector: "alamat",
  },
  {
    heading: "Nomer HP",
    selector: "nomer_hp",
  },
];

const ActComp = (data) => {
  const [selectData, setSelectData] = useState({});

  return (
    <div style={{ display: "flex", gap: 24 }}>
      <RiEdit2Line
        title="edit"
        className="text-success"
        style={{ fontSize: 20, cursor: "pointer" }}
      />
      <RiDeleteBin2Line
        title="delete"
        className="text-danger"
        style={{ fontSize: 20, cursor: "pointer" }}
      />
    </div>
  );
};

export default function MasterDataSiswa() {

    const location = useLocation()
    

    return (
        <MyPage
            title={"Home"}
            url={location.pathname}
        >
            <MyTable colAct={ActComp} columns={columns} pathAdd={"/form-ppdb"} url={"/registrasi"} />
        </MyPage>
    )
}
