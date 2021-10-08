import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registration = () => {

  const [form, setForm] = useState({
    login: '',
    password: ''
  })

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    console.log(form);
  }

  const registerHandler = async () => {
    try {
      await axios.post('/api/auth/registration', { ...form }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response)
        window.location.href = "/login"
      })
    } catch (error) {
      console.log("Ошибка во фронте - Регистрация");
    }
  }

  return (
    <div className="first-right-form first-right-form__registration">
      <div className="first-right-form-title">Регистрация</div>
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
        <div className="first-right-form-fields-pass_reset">
          <div className="first-right-form-fields-login-title">Repeat password:</div>
          <input
            type="password"
            name="rep_password"
            placeholder="Repeat password"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="first-right-form-button">
        <div className="common-button-top">
          <button
            type="button"
            className="common-button"
            onClick={registerHandler}
          >Зарегистрироваться</button>
        </div>
        <div className="common-button-bottom">
          <Link to="/login">
            <button
              type="button"
              className="common-button"
              onClick={() => { window.location.href = "/login" }}
            >Авторизоваться</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;