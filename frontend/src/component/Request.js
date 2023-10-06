import axios from 'axios';
import React, {useState} from 'react';

export default function Request() {
    const[login,setLogin]=useState("");
    const[password,setPassword]=useState("");
    const[repassword,setRepassword]=useState("");
    const[message,setMessage]=useState("");
    const handelLogin= async()=> {
         try{
            const submit=await axios.post('http//localhost:8000/', {
                login,
                password,
            })
            setMessage(submit.data);
         }
         catch {
            console.log("error");
            setMessage("an error occured");
         }
    }
  return (
    <div>
      <h1>Login page</h1>
      <label>login:</label>
      <input type="text" value={login} onChange={(e)=> setLogin(e.target.value)} />
      <br />
      <label>password:</label>
      <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} />
      <br />
      <label>re-enter-password:</label>
      <input type="text" value={repassword} onChange={(e)=> setRepassword(e.target.value)} />
      <br />
      <button type="button" onClick={handelLogin}>login</button>
      <p>{message}</p>
    </div>

  )
}
