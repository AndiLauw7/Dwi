import React from 'react'
import MyPage from '../components/myPage'
import Navbar from '../components/navbar'

export default function Home() {

  return (
    <MyPage
      title={"Home"}
      url={window.location.pathname}
    >

    </MyPage>
  )
}
