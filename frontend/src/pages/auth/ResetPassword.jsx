import { useState } from "react";
import {
  resetPassword,
} from "../../services/authService";

const ResetPassword = () => {
  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response =
      await resetPassword({
        password,
      });

    setMessage(response.message);
  };

  return (
    <div>
      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button type="submit">
          Reset Password
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;