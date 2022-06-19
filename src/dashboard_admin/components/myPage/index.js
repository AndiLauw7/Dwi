import React from 'react'
import { Breadcrumb, Button, Container, Form, InputGroup } from 'react-bootstrap'
import Navbar from '../navbar';

export default ({ title, url, children }) => {
    console.log(url);
    const parseUrl = url?.split("/")
    console.log(parseUrl);

    return (
        <>
            <Navbar />

            <Container className='my-3'>
                {
                    url !== undefined ? (
                        <Breadcrumb>
                            <Breadcrumb.Item >{parseUrl[1]}</Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                {parseUrl[2]}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    ) : ""}
                <h3 className="fw-bold mt-5">{title}</h3>

                <div className="d-flex justify-content-end my-3 mb-5 gap-3">
                    <InputGroup style={{width: "300px"}}>
                        <Form.Control
                            type="search"
                            placeholder="Find Journey"
                            aria-describedby="search"
                        // onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button variant="primary" id="search">
                        <i class="fa fa-search"></i>
                        </Button>
                    </InputGroup>
                    <Button variant="primary" id="search">
                        <i class="fa fa-plus-circle" /> Tambah
                        </Button>
                </div>

                {children}
            </Container>



        </>
    )
}
