import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [form, setForm] = useState({
    login: '',
    password: ''
  })

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    console.log(form);
  }

  const loginHandler = async () => {
    try {
      await axios.post('/api/auth/login', { ...form }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => console.log(response))
    } catch (error) {
      console.log("Ошибка во фронте - Логин");
    }
  }

  return (
    <div className="first-right-form first-right-form__login">
      <div className="first-right-form-title">Войти в систему</div>
      <div className="first-right-form-fields">
        <div className="first-right-form-fields-login">
          <div className="first-right-form-fields-login-title">Login:</div>
          <input
            type="text"
            name="login"
            placeholder="Login"
            onChange={changeHandler}
          />
        </div>
        <div className="first-right-form-fields-pass">
          <div className="first-right-form-fields-login-title">Password:</div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="first-right-form-button">
        <div className="common-button-top">
          <Link to="/techniques">
            <button
              type="button"
              className="common-button"
              onClick={loginHandler}
            >Войти</button>
          </Link>
        </div>
        <div className="common-button-bottom">
          <Link to="/registration">
            <button
              type="button"
              className="common-button"
              onClick={() => { window.location.href = "/registration" }}
            >Зарегистрироваться</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;