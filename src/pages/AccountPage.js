import react from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { Button } from "../components";

const AccountPage = () => {
    const [value, setValue] = useState(new Date());

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', margin: '5rem'}}>
        <h1>{value.toLocaleString()}</h1>
        <Calendar onChange={setValue} value={value} />
        <Button className='signUpBtn'>Submit appt.</Button>
      </div>
    );
  };

export default AccountPage

