import React, { useMemo, useState } from 'react'
import { Button, Form, InputGroup, Pagination, Table } from 'react-bootstrap'

export default ({ columns, data }) => {

    const [page, setPage] = useState(0)
    const [perPage, setPerPage] = useState(8)
    const [pagiData,setPagiData] = useState([])

    useMemo (() => {
        let result = []
        const totalPage = Math.ceil(data.length/perPage)

        for(let i = 0; i < totalPage; i++){

            result.push(data.slice(i*perPage, perPage*i+perPage))
        }
        return setPagiData(result)
    }, [data])


    return (
        <div>
            <div className="d-flex justify-content-end my-3 mb-5 gap-3">
                <InputGroup style={{ width: "300px" }}>
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
            <Table striped bordered hover>
                <thead>
                    <tr style={{ backgroundColor: "#999" }}>
                        {columns.map((item) => (<th>{item.heading}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {pagiData[page]?.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.no_hp}</td>
                            <td>{item.jenis_kelamin}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className='d-flex justify-content-end'>

            <Pagination >
                <Pagination.First />
                <Pagination.Prev />
                {
                    pagiData.map((item, index) =>(
                        <Pagination.Item onClick={(e) => setPage(index)}  active={index === page}>{index + 1}</Pagination.Item>
                    ))
                }
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            </div>
        </div>
    )
}
