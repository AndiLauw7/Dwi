import React from 'react'
import MyPage from '../components/myPage'
import MyTable from '../components/myTable'


const columns = [
    {
        heading: "No"
    },
    {
        heading: "Name"
    },
    {
        heading: "No HP"
    },
    {
        heading: "Jenis Kelamin"
    }
]

const data = [
    {
        no: 1,
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki",

    },
    {
        no: 2,
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki"
    },
    {
        no: 3,
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki"
    },
    {
        no: 4,
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki"
    },
    {
        no: 5,
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki"
    },
    {
        no: 6,
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki"
    },
    {
        no: 7,
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki"
    },
    {
        no: 8,
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki"
    },
    {
        no: 9,
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki"
    },
    {
        no: 10,
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki"
    },
    {
        no: 11,
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki"
    }
]

export default function MasterDataSiswa() {
    return (
        <MyPage
            title={"Home"}
            url={window.location.pathname}
        >
            <MyTable columns={columns} data={data}/>
        </MyPage>
    )
}
