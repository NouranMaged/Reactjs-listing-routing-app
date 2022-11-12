import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  username?: string;
  password?: string;
}
const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<Props>({
    username: "",
    password: "",
  });
  //handle show and hide navbar in login page
  const navigate = useNavigate();

  useEffect(() => {
    handleNavBar("none");
  });
  const handleNavBar = (display: string) => {
    let navbar: any = document.getElementById("navBar");
    navbar.style.display = display;
  };
  //submit form function
  const handleLogin = (userName: string, password: string) => {
    if (password.length < 5) {
      setErrorMsg({ password: "Password should be more than 5 digits!" });
    } else if (userName === "") {
      setErrorMsg({ username: "User name can't be empty!" });
    } else {
      navigate("/PlanRadar");
      handleNavBar("block");
    }
  };

  //handle username and password
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let name = event.target.name;
    let value = event.target.value;
    setErrorMsg({});
    name === "username" ? setUserName(value) : setPassword(value);
  };
  return (
    <>
      <div className="container">
        <b>Username</b>

        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          value={userName}
          onChange={handleChange}
        />
        {errorMsg && <p style={{ color: "red" }}>{errorMsg.username}</p>}

        <b>Password</b>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          value={password}
          onChange={handleChange}
        />
        {errorMsg && <p style={{ color: "red" }}>{errorMsg.password}</p>}
        <button
          type="submit"
          className="login-button"
          onClick={() => handleLogin(userName, password)}
        >
          Login
        </button>
      </div>
    </>
  );
};
export default LoginPage;
