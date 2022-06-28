import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Stack,
  Card,
  Row,
  Button,
  ButtonGroup,
  Form,
} from "react-bootstrap";

import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavbarUser from "../navbars/NavbarUser";
import { UserContext } from "../../context/userContext";
import { API } from "../../configAPI/api";
import Close from "../../assets/img/close.png";
import Edit from "../../assets/img/edit.png";
export const path = "http://localhost:5000/uploads/";

function Profile() {
  const title = "Profile";
  document.title = "The Journey | " + title;

  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [preview, setPreview] = useState(null);
  const [state, dispatch] = useContext(UserContext);
  const [avatar, setAvatar] = useState(null);
  const [user, setUser] = useState({});

  const { id } = useParams();
  const datauser = state.user.id;
  const [form, setForm] = useState({
    username: "",
    email: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      if (user.image) {
        formData.set("image", user?.image[0], user?.image[0]?.name);
      }
      formData.set("username", user.username);
      formData.set("email", form.email);

      const response = await API.patch(
        "/edit-user/" + user.id,
        formData,
        config
      );
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleEdit = () => {
    setEdit(!edit);
    navigate("/Profile/" + user.id);
  };

  const getUser = async () => {
    const response = await API.get(`/user/${id}`);
    setAvatar(response.data.data.datauser.image);
    setUser(response.data.data.datauser);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <NavbarUser />
      <Container fluid className="px-5">
        <h1 className="my-5">
          <dt>My Profile</dt>
        </h1>
        <Stack className="justify-content-center align-items-center">
          {edit ? (
            <img
              src={Close}
              alt=""
              onClick={handleEdit}
              style={{ width: "20px", marginLeft: "10px" }}
            />
          ) : (
            <img
              src={Edit}
              alt=""
              onClick={handleEdit}
              style={{ width: "20px", marginLeft: "180px" }}
            />
          )}
          {edit ? (
            <Form onSubmit={handleSubmit}>
              <div className="text-center mt-3 mb-2">
                <img
                  src={preview ? preview : avatar}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "8px",
                  }}
                  alt=""
                />
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="UserName"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="mb-3">
                <input
                  className="form-control"
                  type="file"
                  name="image"
                  onChange={handleChange}
                  required
                />
              </div>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          ) : (
            <>
              <img
                src={preview ? preview : avatar}
                alt="avatar"
                className="rounded-circle border border-1 border-primary mb-3"
                style={{
                  width: "150px",
                  height: "150px",
                }}
              />
              <h4>
                {/* <p>{user.id}</p> */}
                <dt>Username : {user.username}</dt>
              </h4>
              <p>Email : {user.email}</p>
              {/* <p>Phone : {user.phone}</p>
              <p>Address : {user.address}</p> */}
              <ButtonGroup className="mb-2">
                <Button onClick={handleEdit}>Edit Profile</Button>
              </ButtonGroup>
            </>
          )}
        </Stack>
        {/* <Row> */}
        {/* <Stack direction="horizontal"  gap={5}> */}
        {/* <>
            <h2 className="my-3 fw-bold">Journey Post</h2>
            <hr
              style={{
                height: "2px",
                color: "black",
                backgroundColor: "black",
                marginBottom: "50px",
              }}
            />
          </>
        </Row> */}
      </Container>
    </>
  );
}

export default Profile;
