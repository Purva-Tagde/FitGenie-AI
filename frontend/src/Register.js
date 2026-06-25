import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    height: "",
    weight: "",
    goal: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/register",
        formData
      );

      alert(response.data.message);

      navigate("/");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card auth-card-wide">

        <div className="auth-icon">🏆</div>

        <h1 className="auth-title">
          Create Your Account
        </h1>

        <p className="auth-subtitle">
          Join FitGenie AI and start your fitness journey today
        </p>

        <div className="quote-box">
          💪 Your body can stand almost anything.
          It's your mind that you have to convince.
        </div>

        <form onSubmit={handleRegister}>

          <div className="field-row">

            <div className="field-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="field-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                placeholder="Age"
                className="field-input"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="field-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="field-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label>Password</label>

            <div className="field-input-wrap">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create Password"
                className="field-input"
                value={formData.password}
                onChange={handleChange}
                required
              />

              

            </div>
          </div>

          <div className="field-row">

            <div className="field-group">
              <label>Height (cm)</label>

              <input
                type="number"
                name="height"
                placeholder="170"
                className="field-input"
                value={formData.height}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field-group">
              <label>Weight (kg)</label>

              <input
                type="number"
                name="weight"
                placeholder="65"
                className="field-input"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="field-group">

            <label>Fitness Goal</label>

            <select
              name="goal"
              className="field-select"
              value={formData.goal}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Goal
              </option>

              <option value="weight_loss">
                Weight Loss
              </option>

              <option value="muscle_gain">
                Muscle Gain
              </option>

              <option value="maintenance">
                Maintenance
              </option>

            </select>

          </div>

          <button
            type="submit"
            className="register-btn"
          >
            🚀 Register Now
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{" "}

          <Link
            to="/"
            className="auth-link"
          >
            Login
          </Link>

        </p>

      </div>
    </main>
  );
}

export default Register;