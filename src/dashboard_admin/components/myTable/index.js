import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup, Pagination, Table } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { RiAddLine, RiCloseLine, RiSearch2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../configAPI/api';
import Excel from '../importFile/Excel';

const TableHeading = ({ item, index }) => <th key={index}>{item.heading}</th>;

const TableRow = ({ item, columns, index, colNo, colAct, setDataId }) => {
    return (
        <tr>
            {colNo && <td>{index + 1}</td>}
            {columns.map((colItem, idx) => {
                if (colItem.selector.includes(".")) {
                    const itemSplit = colItem.selector.split(".");
                    return (
                        <td key={idx}>
                            {colItem.format
                                ? colItem.format(item[itemSplit[0]][itemSplit[1]])
                                : item[itemSplit[0]][itemSplit[1]]}
                        </td>
                    );
                }

                return (
                    <td key={idx}>
                        {colItem.format
                            ? colItem.format(item[`${colItem.selector}`])
                            : item[`${colItem.selector}`]}
                    </td>
                );
            })}
            {colAct && <td>{colAct(item, setDataId)}</td>}
        </tr>
    );
};

const MyTable = ({ columns, url, colNo, colAct, pathAdd, expExcel, nameColExcel }) => {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [btnSearch, setBtnSearch] = useState(true)
    const [dataId, setDataId] = useState("")
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(8)
    const [total, setTotal] = useState(1)

    const totalPage = Math.ceil(total / perPage)

    const getData = async () => {
        try {
            const response = await API.get(`${url}?page=${page}&perPage=${perPage}&search=${search}`)
            setData(response.data.data.data)
            setTotal(response.data.data.total);

        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = async () => {
        setPage(1)
        setSearch(searchValue)
        setBtnSearch(false)

    }

    const handleClear = () => {
        setSearchValue("")
        setSearch("")
        setBtnSearch(true)

    }

    const convertHeading = (data) => {
        let result = []
        for(let i = 0; i < data.length; i++){
            result.push(data[i]?.heading);
        }
        console.log(result);
        return result
    }

    const convertColumns = (data) => {
        let result = []
        for(let i = 0; i < data.length; i++){
             result.push(Object.values(data[i]));
        }
        console.log(result);
        return result
    }


    const dataSet = [
        {
            columns: convertHeading(columns),
            data: convertColumns(data)
        },
    ]


    useEffect(() => {
        getData()
    }, [search, dataId, page]);



    return (
        <div>
            {expExcel && <Excel dataSet={dataSet} element={<button>Download Data</button>} name={nameColExcel} />}


            <div className="d-flex justify-content-end mb-3 gap-3">
                <InputGroup style={{ width: "300px" }}>
                    <Form.Control
                        type="text"
                        placeholder="Cari Nama"
                        aria-describedby="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    {btnSearch ? (
                        <Button variant="primary" id="search" onClick={handleSearch}>
                            <RiSearch2Line />
                        </Button>
                    ) : (
                        <Button variant="danger" id="search" onClick={handleClear}>
                            <RiCloseLine />
                        </Button>
                    )}


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

            <div className='d-flex justify-content-end align-items-center'>

                <Pagination >

                    <Pagination.First disabled={page <= 1} onClick={() => setPage(1)} />
                    <Pagination.Prev disabled={page <= 1} onClick={() => setPage(current => current - 1)} />
                    <div className='d-flex justify-content-center align-items-center px-3'>{page}/{totalPage}</div>
                    <Pagination.Next disabled={page >= totalPage} onClick={() => setPage(current => current + 1)} />
                    <Pagination.Last disabled={page >= totalPage} onClick={() => setPage(totalPage)} />
                </Pagination>
            </div>
        </div>
    );
};

MyTable.prototype = {
    columns: PropTypes.array,
    data: PropTypes.array,
    colNo: PropTypes.bool,
    colAct: PropTypes.func,
    expExcel: PropTypes.bool,
};

MyTable.defaultProps = {
    colNo: true,
    expExcel: false
};

export default MyTable;
