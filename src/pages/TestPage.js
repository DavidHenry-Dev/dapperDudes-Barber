import {useState, useEffect} from "react"

const TestPage = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/test")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
        <h1>Data from Backend</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default TestPage