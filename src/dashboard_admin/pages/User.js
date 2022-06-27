import React from 'react'
import MyPage from '../components/myPage'
import MyTable from '../components/myTable'

const columns = [
    {
        heading: "User Name",
        selector: "username"
    },
    {
        heading: "Email",
        selector: "email",
    },
    {
        heading: "Role",
        selector: "role",
    }
]

export default function User() {
    return (
        <MyPage
            title={"Users"}
            url={window.location.pathname}
        >
            <MyTable  columns={columns} pathAdd={"/user/add"} url={"/users"} />
        </MyPage>
    )
}
