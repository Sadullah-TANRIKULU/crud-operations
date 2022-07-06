import axios from 'axios';
import { FormGroup, Button, Input, Checkbox } from "@mui/material";
import { useState } from "react";

const Create = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState("");
    const [checkBox, setCheckBox] = useState(false);

    const postData = () => {

        axios.post("https://62c5797d134fa108c253480f.mockapi.io/fakeData", {
            firstName,
            lastName,
            checkBox
        });
    }


  return (
    <div className="create bg-yellow-300 p-4 w-3/4 ">
      <h5>Create</h5>
      
        <FormGroup className="flex flex-col gap-1">
          <Input placeholder="first name" required onChange={(e)=> setFirstName(e.target.value)} />
          <Input placeholder="last name" onChange={(e) => setLastName(e.target.value)} />
          <Checkbox aria-label="I agree to the Terms and Conditions" onChange={(e) => setCheckBox(!checkBox)} />
          <Button className="bg-stone-500" variant="contained" type="submit" onClick={postData} >
            Submit
          </Button>
        </FormGroup>
      
    </div>
  );
};

export default Create;
