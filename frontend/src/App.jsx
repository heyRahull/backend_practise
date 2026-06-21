import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get("/api/user")
    .then((res)=>{
      setUsers(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, []);

  return (
    <div>
      <h1>Hello World React</h1>
      <p>Total users are : {users.length}</p>
      {users.map((user)=>(
        <div key={user.id}>
          Username is : {user.name} and email id is : {user.email}
        </div>
        ))}
    </div>
  )
}

export default App
