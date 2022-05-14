import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Profile({ setTest }) {
  const user = (localStorage.getItem("user"))

  const [currentUser, setcurrentUser] = useState("")

  const token = localStorage.getItem("token");
  const users = JSON.parse(localStorage.getItem("user"));
  console.log(users)
  const userId = users._id;





  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      axios({
        method: "get",
        baseURL: `http://localhost:8070/user/getuser/${userId}`,
        headers: {
          Authorization: "Bearer " + token
        },
      }).then(res => {
        setcurrentUser(res.data.user)
        console.log(res.data)
      })
    } catch (err) {
      throw err;
    }
  }, [])

  return (
    <div className='row justify-content-center'>
      <div className='col-6'>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Full Name" value={currentUser.name} aria-describedby="basic-addon1" readOnly />
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" value={currentUser.email} aria-describedby="basic-addon1" readOnly />
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" value={currentUser.userName} aria-describedby="basic-addon1" readOnly />
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" value={currentUser.password} aria-describedby="basic-addon1" readOnly />
        </div>
        <div className="text-right">
          <Link to={"/update/" + currentUser._id}> <button className='btn btn-primary'>Edit</button></Link>
        </div>
      </div>
    </div>

  )

}
export default Profile;