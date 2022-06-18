import React from 'react'
import { Container, Dropdown, Nav, Navbar, Stack, } from 'react-bootstrap'
import avatarDummy from "../../../assets/img/null.png";


export default () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Container >
                    <Navbar.Brand>
                        SD Karya Bangsa
                    </Navbar.Brand>

                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#users">Data User</Nav.Link>
                        <Nav.Link href="#peserta-didik">Data Peserta Didik</Nav.Link>
                        <Nav.Link href="#pembayaran">Data Pembayaran</Nav.Link>
                    </Nav>

                    <Nav>
                        <Stack>
                            <Dropdown align="end">
                                <Dropdown.Toggle as={Nav.Link} className="Dropdown-Toggle">
                                    <img
                                        src={avatarDummy}
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{
                                            width: "2.5rem",
                                            height: "2.5rem",
                                            objectFit: "cover",
                                        }}
                                    />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="text-dark shadow">
                                    <Dropdown.Item
                                        className="py-3"
                                    // onClick={() => navigate(`/profile/${id}`)}
                                    >
                                        <span>
                                            <img
                                                src="../assets/user2.svg"
                                                alt="user-profile"
                                                width={30}
                                                height={30}
                                                className="me-3"
                                            />
                                        </span>
                                        <span className="fw-bold">Profile</span>
                                    </Dropdown.Item>

                                    <Dropdown.Item
                                        className="py-3"
                                    // onClick={() => navigate("/new-journey")}
                                    >
                                        <span>
                                            <img
                                                src="../assets/write1.svg"
                                                alt="write1"
                                                width={30}
                                                height={30}
                                                className="me-3"
                                            />
                                        </span>
                                        <span className="fw-bold">New Journey</span>
                                    </Dropdown.Item>

                                    <Dropdown.Item
                                        className="py-3"
                                    // onClick={() => navigate(`/bookmark/${id}`)}
                                    >
                                        <span>
                                            <img
                                                src="../assets/bookmark.svg"
                                                alt="bookmark"
                                                width={30}
                                                height={30}
                                                className="me-3"
                                            />
                                        </span>
                                        <span className="fw-bold">Bookmark</span>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item
                                        // onClick={handleLogOut}
                                    >
                                        <span>
                                            <img
                                                src="../assets/logout.svg"
                                                alt="logout"
                                                width={30}
                                                height={30}
                                                className="me-3"
                                            />
                                        </span>
                                        <span className="fw-bold">Log Out</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Stack>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
