import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import "./Auth.css";
import "./Login.css";
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://127.0.0.1:5000/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Credentials");

    }
  };

  return (
    <div className="auth-page">

      {/* Navbar */}

      <header className="navbar">

        <NavLink
          to="/"
          className="navbar-brand"
        >
          💪 FitGenie AI
        </NavLink>

        <div>

          <NavLink
            to="/register"
            className="btn-primary"
          >
            Get Started
          </NavLink>

        </div>

      </header>

      {/* Login Section */}

      <div className="auth-container">

        <div className="auth-left">

          <h1>
            Transform Your Fitness Journey
          </h1>

          <p>
            Track calories, BMI, workouts,
            water intake and achieve your
            fitness goals with AI.
          </p>

          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            alt="fitness"
          />

        </div>

        <div className="auth-card">

          <h2>Welcome Back 👋</h2>

          <p>
            Login to continue your fitness journey
          </p>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            onClick={handleLogin}
          >
            Login
          </button>

          <p>
            Don't have an account?
          </p>

          <button
            className="register-btn"
            onClick={() =>
              navigate("/register")
            }
          >
            Register
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;