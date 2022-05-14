import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../../Assets/Styles/user.css'


const AdminLogin = () => {



    const [userName, setuserName] = useState("")
    const [email, setemail] = useState("madmin@gmail.com")
    const [password, setpassword] = useState("Donkavi2@")
    const [test, setTest] = useState(false)
    const [type, settype] = useState('')
    const [userId, setUserId] = useState('')


    function sendData(e) {
        e.preventDefault();
        const newUser = {
            //userName:userName,
            email: email,
            password,
            type

        };

        axios
            .post('http://localhost:8070/user/login', newUser)
            .then((res) => {
                if (res.status !== 200) {
                    console.log(res)

                }
                localStorage.setItem("user", JSON.stringify(res.data.user))
                localStorage.setItem("token", res.data.token)

                console.log(res.data.token)
                setUserId(res.data.user._id)
                setTest(!test)

                window.location.href = '/dashboard'

            })
            .catch((err) => {
                alert("Email or Password is worng");
                console.log(err)
            });
    }





    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <h2 className="text-center">Admin Login</h2>
                <br></br>
                <form onSubmit={sendData}>
                    <label>Movie Admin</label> <input type="radio" required value="ma" name="rad" onChange={(e) => { settype(e.target.value) }} /><br></br>
                    <label>System Admin</label> <input type="radio" required value="sa" name="rad" onChange={(e) => { settype(e.target.value) }} />
                    <div className="input-group mb-3">
                        <input type="email" className="form-control" value="123@gmail.com" placeholder="Email Address" onChange={(e) => { setemail(e.target.value) }} aria-label="Username" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" value="Donkavi2@" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} aria-label="Password" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary form-control">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AdminLogin;
