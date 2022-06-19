import React from 'react'
import MyPage from '../components/myPage'
import avatarDummy from "../../assets/img/null.png";


export default function Profile() {
  return (
    <MyPage
      title={"Profile"}
    >
      <h2>Profile</h2>
      <div className='d-flex justify-content-center align-items-center my-5'>
        <img src={avatarDummy} className="rounded-circle" width={300} />
      </div>
      <div className='text-center'> 
      <h5>Name Admin</h5>
      </div>
      
    </MyPage>
  )
}
