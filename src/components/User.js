import './User.css';
import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import ClipLoader from 'react-spinners/ClipLoader';
const customStyles = {
    headRow: {
        style: {
            backgroundColor: 'gainsboro',
            color: "gray"
        }
    },
    headCells: {
        style: {
            fontSize: '16px',
            fontWeight: 600,
            textTransform: 'uppercase',
        }
    }
}
const Users = () => {
    const [loading, setLoading] = useState(false)

    const [records, setRecords] = useState([]);
    const [filterRecords, setFilterRecords] = useState([]);
    const getUsers = async () => {

        const response = await fetch(
            "http://localhost:5000/api/users"
        ).then((response) => response.json());
        {
            setRecords(response)
            setFilterRecords(response)
        }
    };
    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
        getUsers()

    }, []);

    const column = [
        {
            name: "ID",
            selector: row => row._id,
            sortable: true
        },
        {
            name: "NAME",
            selector: row => row.name,
            sortable: true
        },
        {
            name: "EMAIL",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "DATE",
            selector: row => row.createdAt

        },

    ]
    const handleFilter = (event) => {
        const newData = filterRecords.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setRecords(newData);
    }
    return (
        <>

            <div >

                <div style={{ display: 'flex', justifyContent: 'right', backgroundColor: 'gainsboro' }} >
                    <input type='text' placeholder='Search...' onChange={handleFilter} style={{ padding: '6px 15px', border: 'none', margin: '4px 4px' }} />
                </div>
                {
                    loading ?
                        <ClipLoader color={'#D0021B'} loading={loading} size={100} />
                        :
                        <DataTable
                            columns={column}
                            data={records}
                            pagination
                            selectableRows
                            customStyles={customStyles}

                        >
                        </DataTable>
                }
            </div>

        </>
    )
}
export default Users;