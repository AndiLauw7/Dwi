import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup, Pagination, Table } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { RiAddLine, RiPulseLine, RiSearch2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../configAPI/api';

const TableHeading = ({ item, index }) => <th key={index}>{item.heading}</th>

const TableRow = ({ item, columns, index, colNo, colAct, setDataId }) => {

    return (
        <tr>
            {colNo && <td>{index + 1}</td>}
            {columns.map((colItem, idx) => {
                if (colItem.selector.includes(".")) {
                    const itemSplit = colItem.selector.split(".")
                    return <td key={idx}>{colItem.format ? colItem.format(item[itemSplit[0]][itemSplit[1]]) : item[itemSplit[0]][itemSplit[1]]}</td>

                }

                return <td key={idx}>{colItem.format ? colItem.format(item[`${colItem.selector}`]) : item[`${colItem.selector}`]}</td>
            })
            }
            {colAct && (<td>{colAct(item, setDataId)}</td>)}
        </tr>
    )

}

const MyTable = ({ columns, url, colNo, colAct, pathAdd }) => {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [dataId, setDataId] = useState("")
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(8)

    console.log(data);


    const getData = async () => {
        try {
            const response = await API.get(`${url}`)
            setData(response.data.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = async () => {
        try {
            const response = await API.get(`${url}?page=${page}&perPage=${perPage}&search=${search}`)
            console.log();
            setData(response.data.data.data)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getData()
    }, [search, dataId]);



    return (
        <div>
            <div className="d-flex justify-content-end my-3 mb-5 gap-3">
                <InputGroup style={{ width: "300px" }}>
                    <Form.Control
                        type="text"
                        placeholder="Cari Nama"
                        aria-describedby="search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button variant="primary" id="search" onClick={handleSearch}>
                        <RiSearch2Line />
                    </Button>
                </InputGroup>
                {pathAdd && (
                    <Button variant="primary" id="search" onClick={() => navigate(pathAdd)}>
                        <RiAddLine /> Tambah
                    </Button>
                )}
            </div>
            <Table striped bordered hover>
                <thead style={{ backgroundColor: "#999" }}>
                    <tr>
                        {colNo && <th>No.</th>}
                        {
                            columns.map((item, index) => <TableHeading key={index} item={item} index={index} />)
                        }
                        {colAct && <th >action</th>}

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) =>
                            <TableRow colNo={colNo} colAct={colAct} key={index} item={item} columns={columns} index={index} setDataId={setDataId} />
                        )
                    }

                </tbody>
            </Table>

            {/* <div className='d-flex justify-content-end'>

                <Pagination >
                    <Pagination.First />
                    <Pagination.Prev />
                    {
                        pagiData.map((item, index) => (
                            <Pagination.Item key={index} onClick={(e) => setPage(index)} active={index === page}>{index + 1}</Pagination.Item>
                        ))
                    }
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div> */}
        </div>
    )
}


MyTable.prototype = {
    columns: PropTypes.array,
    data: PropTypes.array,
    colNo: PropTypes.bool,
    colAct: PropTypes.func
}

MyTable.defaultProps = {
    colNo: true,
    // colAct: false
}

export default MyTable;