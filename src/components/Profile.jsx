/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/LogIn.scss";

const Profile = () => {
  const [token, setToken] = useState(localStorage.getItem("myToken"));
  //console.log(token);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://staging-be-ecom.techserve4u.com/api/user/verify", //url

          {}, //paylode
          {
            //token
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        //console.log(response.data);
        setUserData(response?.data?.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);

  console.log("userData", userData);

  return (
    <div className="login-form-container">
      <div className="profile">
        <h2>Welcome to your Profile !</h2>
        <img src="../public/image/profile img.jpg" alt="profile img" />
        <h3>My Name : {userData?.name} </h3>
        <h3>Role: {userData?.role}</h3>
        <h3>Email : {userData?.email}</h3>
        <h3>Phone : 0987654321 </h3>
        <h3>Address : VA. USA </h3>
      </div>
    </div>
  );
};

export default Profile;
