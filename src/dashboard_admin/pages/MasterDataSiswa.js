import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri'
import { API } from '../../configAPI/api'
import MyPage from '../components/myPage'
import MyTable from '../components/myTable'


const columns = [
    {
        heading: "Tgl Registrasi",
        selector: "tgl_registrasi"
    },
    {
        heading: "Nama Lengkap",
        selector: "nama_lengkap"

    },
    {
        heading: "Jenis Kelamin",
        selector: "jenis_kelamin"

    },
    {
        heading: "Tempat Lahir",
        selector: "tempat_lahir"

    },
    {
        heading: "Tanggal Lahir",
        selector: "tanggal_lahir"

    },
    {
        heading: "Agama",
        selector: "agama"

    },
    {
        heading: "Alamat",
        selector: "alamat"

    },
    {
        heading: "Nomer HP",
        selector: "nomer_hp"

    }
]

const ActComp = (data) => {
    const [selectData, setSelectData] = useState({})

    return (
        <div style={{ display: "flex", gap: 24 }}>
                <RiEdit2Line title='edit' className='text-success' style={{ fontSize: 20, cursor:"pointer"}} />
                <RiDeleteBin2Line title='delete' className='text-danger' style={{ fontSize: 20, cursor:"pointer"}}/>
        </div>
    )
}

export default function MasterDataSiswa() {

    const [data, setData] = useState([])
    const getRegistrasi = async () => {
        try {
            const response = await API.get("/registrasi")
            setData(response.data.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRegistrasi()
    }, [])


    return (
        <MyPage
            title={"Home"}
            url={window.location.pathname}
        >
            <MyTable colAct={ActComp} columns={columns} data={data} />
        </MyPage>
    )
}
