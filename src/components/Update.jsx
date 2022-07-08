import axios from 'axios';
import { FormGroup, Button, Input, Checkbox } from "@mui/material";
import { useState, useEffect } from "react";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckBox(localStorage.getItem("Checkbox Value"));
  }, []);

  const updateAPIData = () => {
    axios.put(`https://62c5797d134fa108c253480f.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        checkBox

    });
  }

  return (
    <div className="update bg-yellow-300 p-4 w-3/4">
      <h5>Update</h5>

      <FormGroup className="flex flex-col gap-1">
        <Input
          placeholder="first name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Checkbox
          aria-label="I agree to the Terms and Conditions"
          checked={checkBox}
          onChange={(e) => setCheckBox(!checkBox)}
        />
        <Button
          className="bg-stone-500"
          variant="contained"
          type="submit"
          onClick={updateAPIData}
          
        >
          Update
        </Button>
      </FormGroup>
    </div>
  );
};

export default Update;
