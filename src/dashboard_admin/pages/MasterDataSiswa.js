import React from 'react'
import MyPage from '../components/myPage'

export default function MasterDataSiswa() {
    return (
        <MyPage
            title={"Home"}
            url={window.location.pathname}
        >

        </MyPage>
    )
}
