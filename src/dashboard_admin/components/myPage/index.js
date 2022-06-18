import React from 'react'
import { Breadcrumb, Container } from 'react-bootstrap'
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
                    ) : "" }
                        {children}
            </Container>
               

           
        </>
    )
}
