import React, { useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Create from './Create';
import Edit from './Edit';

const Restaurants = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    initData()
  }, []);

  const initData = async () => {
    var url = process.env.REACT_APP_API_URL;

    var requestOptions = {
      method: 'GET'
    }

    const response = await fetch(url, requestOptions);

    if (response.ok) {
      const json = await response.json()
      console.log(json);
      setData(json);
      setLoading(false);
    } else {
      alert('Error fetching data! Please contact support!')
      setLoading(false);
      setError(true);
    }

  }

  const handleEdit = (item) => {
    setEdit(true);
    setCurrent(item);
    console.log(item);
  }

  return (
    <div>

      <h1>Restaurant Finder 🔍</h1>

      <button
        onClick={() => setCreate(true)}>
        Add new restaurant
      </button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
            {loading ? <>Loading...</> : <>
              <TableBody>
                {data.map((item, i) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell
                      onClick={() => handleEdit(item) }>
                      ✏</TableCell>
                </TableRow>
                ))}
              </TableBody>
            </>}
        </Table>
      </TableContainer>
      <Create create={create}
              setCreate={setCreate}
              initData={initData}
      />
      <Edit
          current={current}
          edit={edit}
          setEdit={setEdit}
          refresh={initData}
          />

    </div>
  )
}

export default Restaurants
