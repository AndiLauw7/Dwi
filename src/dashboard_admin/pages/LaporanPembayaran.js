import React from 'react'
import MyPage from '../components/myPage'
import Navbar from '../components/navbar'

export default function LaporanPembayaran() {
    return (
        <>
            <MyPage
                title={"Home"}
                url={window.location.pathname}
            >

            </MyPage>
        </>
    )
}
