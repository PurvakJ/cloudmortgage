import React, { useState } from "react";
import "./Admin.css";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwyW6LY1LQToiWC6JKl3ucL3ALtM1no0758Ayv2ZoGYsZoo8-80LfBxwNm582m3aTOD/exec";

function Admin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const [newPassword,setNewPassword] = useState("");
  const [updateMsg,setUpdateMsg] = useState("");

  /* LOGIN */

  const login = async (e) => {

    e.preventDefault();

    const res = await fetch(SCRIPT_URL,{
      method:"POST",
      body:JSON.stringify({
        action:"login",
        email:email,
        password:password
      })
    });

    const result = await res.json();

    if(result.success){
      setLoggedIn(true);
      setError("");
    }else{
      setError("Invalid credentials");
    }
  };


  /* LOAD CONTACT DATA */

  const fetchData = async ()=>{

    const res = await fetch(SCRIPT_URL,{
      method:"POST",
      body:JSON.stringify({
        action:"getContacts"
      })
    });

    const rows = await res.json();
    setData(rows.slice(1));

  };


  /* UPDATE PASSWORD */

  const updatePassword = async ()=>{

    const res = await fetch(SCRIPT_URL,{
      method:"POST",
      body:JSON.stringify({
        action:"updatePassword",
        email:email,
        newPassword:newPassword
      })
    });

    const result = await res.json();

    if(result.success){
      setUpdateMsg("Password Updated Successfully");
      setNewPassword("");
    }else{
      setUpdateMsg("Error updating password");
    }

  };


  if(!loggedIn){

    return(

      <div className="admin-login">

        <form className="login-card" onSubmit={login}>

          <h2>Admin Login</h2>

          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          />

          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>

        </form>

      </div>

    );
  }

  return(

    <div className="admin-dashboard">

      <h1>Admin Dashboard</h1>

      {/* CONTACT DATA */}

      <div className="section">

        <h2>Contact Submissions</h2>

        <button className="load-btn" onClick={fetchData}>
          Load Data
        </button>

        <table className="admin-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>

            {data.map((r,i)=>(
              <tr key={i}>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
                <td>{r[3]}</td>
                <td>{r[4]}</td>
                <td>{r[5]}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>


      {/* UPDATE PASSWORD */}

      <div className="section">

        <h2>Update Password</h2>

        <div className="update-box">

          <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e)=>setNewPassword(e.target.value)}
          />

          <button onClick={updatePassword}>
            Update Password
          </button>

        </div>

        {updateMsg && <p className="success">{updateMsg}</p>}

      </div>

    </div>

  );

}

export default Admin;