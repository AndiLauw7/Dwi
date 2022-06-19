import React from 'react'
import { Table } from 'react-bootstrap'

export default ({ columns, data }) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr style={{ backgroundColor: "#999"}}>
                        { columns.map((item) => ( <th>{item.heading}</th> )) }
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) =>(
                        <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.no_hp}</td>
                        <td>{item.jenis_kelamin}</td>
                    </tr>
                    ) )}
                </tbody>
            </Table>
        </div>
    )
}
