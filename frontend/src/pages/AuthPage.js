// src/components/AuthPage/AuthPage.js
import { useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import AuthForm from "../components/AuthForm";
import FormToggle from "../components/FormToggle";
import logo from "../assets/logo.png";
import "../styles/authPage.css";
import "../styles/background.css";

const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const onLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => {
        setLoading(false);
        props.onAuth({ ...r.data, secret });
      })
      .catch((e) => {
        setLoading(false);
        console.log(JSON.stringify(e.response.data));
      });
  };

  const onSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .then((r) => {
        setLoading(false);
        props.onAuth({ ...r.data, secret });
      })
      .catch((e) => {
        setLoading(false);
        console.log(JSON.stringify(e.response.data));
      });
  };

  return (
    <div className="background">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="auth-page">
        <div className="auth-card">
          {!loading && <img src={logo} alt="Logo" className="card-logo" />}
          {loading ? (
            <Loading />
          ) : (
            <>
              <FormToggle isLogin={isLogin} setIsLogin={setIsLogin} />
              <AuthForm
                isLogin={isLogin}
                username={username}
                setUsername={setUsername}
                secret={secret}
                setSecret={setSecret}
                email={email}
                setEmail={setEmail}
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                onLogin={onLogin}
                onSignup={onSignup}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
