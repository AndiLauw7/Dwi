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
        name: "Fikri",
        no_hp: "0832432423",
        jenis_kelamin: "Laki-laki",
        
    },
    {
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
