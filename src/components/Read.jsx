import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get("https://62c5797d134fa108c253480f.mockapi.io/fakeData")
      .then((res) => {
        setAPIData(res.data);
      });
  }, []);

  const setData = (data) => {
    let { checkBox, firstName, id, lastName } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("CheckBox Value", checkBox);

    console.log(data);
  };

  const getData = () => axios
      .get("https://62c5797d134fa108c253480f.mockapi.io/fakeData")
      .then((res) => {
        setAPIData(res.data);
      });
  const onDelete = (id) => {
    axios.delete(`https://62c5797d134fa108c253480f.mockapi.io/fakeData/${id}`)
    .then(() => {getData()})
    
  }

  return (
    <div className="read bg-yellow-300 p-4 w-3/4 ">
      <h5>Read</h5>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="right">Checked</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {APIData.map((data, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {data.firstName}
                </TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell align="right">
                  {data.checkBox ? "Checked" : "Unchecked"}
                </TableCell>
                <TableCell>
                  <Button
                    className="bg-stone-500"
                    variant="contained"
                    type="submit"
                    onClick={() => setData(data)}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    className="bg-stone-500"
                    variant="contained"
                    type="submit"
                    onClick={() => onDelete(data.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Read;
