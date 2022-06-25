import React, { useContext, useEffect, useState } from "react";
import { Container, Stack, Row, Col } from "react-bootstrap";
import CardPost from "../elements/CardPost";

import { Link, useParams } from "react-router-dom";
import NavbarUser from "../navbars/NavbarUser";
import avatarDummy from "../../assets/img/anakSd.jpg";
import { UserContext } from "../../context/userContext";
import { API } from "../../configAPI/api";
import * as Icon from "react-bootstrap-icons";
import ModalEditProfile from "../Modals/ModalEditProfile";
import Swal from "sweetalert2";
export const path = "http://localhost:4000/uploads/";

function Profile() {
  const title = "Profile";
  document.title = "The Journey | " + title;

  const [state, dispatch] = useContext(UserContext);
  const [avatar, setAvatar] = useState(null);
  const [user, setUser] = useState({});
  const [bookmark, setBookmark] = useState(false);
  const [myJourney, setMyJourney] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);

  const { id } = useParams();
  const idUser = state.user.id;

  // const getUser = async () => {
  //   const response = await API.get(`/user/${id}`);
  //   console.log(response);
  //   setAvatar(response.data.data.dataUser.image);
  //   setUser(response.data.data.dataUser);
  // };

  // useEffect(() => {
  //   getUser();
   
  // }, []);

  


  return (
    <>
      <NavbarUser />
      <Container fluid className="px-5">
        <h1 className="my-5">
          <dt>Profile</dt>
        </h1>
        <Stack
          className="justify-content-center align-items-center"
          style={{ height: "450px" }}
        >
          <div className="position-relative">
            {state.user.id === user.id ? (
              <div
                onClick={() => setModalEdit(!modalEdit)}
                className="rounded-circle  bg-primary shadow"
                style={{
                  position: "absolute",
                  top: "150px",
                  right: "10px",
                  padding: "8px",
                  cursor: "pointer",
                }}
              >
                <Icon.PencilSquare color="white" size={20} />
              </div>
            ) : (
              ""
            )}

            <img
              src={avatar === null ? avatarDummy : path + avatar}
              alt="avatar"
              className="rounded-circle border border-3 border-primary mb-3"
              style={{
                width: "12rem",
                height: "12rem",
                objectFit: "cover",
              }}
            />
          </div>

          <h4>
            <dt>{state.user.username}</dt>
          </h4>
          <p>{user.email}</p>
        </Stack>
        <Row>
          {/* <Stack direction="horizontal"  gap={5}> */}
          <>
            <h2 className="my-3 fw-bold">Pembayaran</h2>
            <hr
              style={{
                height: "2px",
                color: "black",
                backgroundColor: "black",
                marginBottom: "50px",
              }}
            />
           
          </>
        </Row>
        <ModalEditProfile
          show={modalEdit}
          onHide={() => setModalEdit(!modalEdit)}
          item={user}
          handleModal={(value) => setModalEdit(value)}
        />
      </Container>
    </>
  );
}

export default Profile;
