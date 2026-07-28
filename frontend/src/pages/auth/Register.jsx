import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "admin",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(formData);

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>
          Create Account
        </h1>

        <p>
          Join the Intelligent
          Library Platform
        </p>
      </div>

      <div className="auth-card">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({
                ...formData,
                password:
                  e.target.value,
              })
            }
          />

          <button type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;