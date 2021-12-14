import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function App() {

  // state where the response coming from the api fetch is gonna be stored
  const [users, setUsers] = useState([]);

  

  // useEffect used to run when the component is mounting 
  useEffect(() => {
    fetchData();
  }, []);


  // fetch method using axios to fetch api and get the response from this api. The get method is used the read the api
  // then we receive a response that we are gonna store into a state using the setUsers method
  // the catch is here to display any error that we can encounter
  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };

  console.log(users);

  return (
    <>
    {/* // We map through our state to display information coming from each object */}
      {users.map((user) => <Card {...user} />)}
    </>
  );
}

export default App;
