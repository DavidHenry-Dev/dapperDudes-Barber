import react from "react";
import { useState } from "react";
import Calendar from "react-calendar";

const AccountPage = () => {
  const [value, setValue] = useState(new Date());
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch('/accountpage/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: value
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', margin: '5rem'}}>
      <h1>{value.toLocaleString()}</h1>
      <form onSubmit={handleSubmit}>
      <Calendar onChange={setValue} value={value} />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AccountPage
