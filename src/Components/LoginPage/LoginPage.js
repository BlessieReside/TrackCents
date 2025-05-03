import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  // const Username = useState[username];
  // const Password = useState[password];

  return (
    <>
      <div className="form-group ">
        <h5>Sign Up</h5>
        <div className="label">Username</div>
        <input
          type="text"
          name="username"
          id="username"
          className="username"
          placeholder="Enter your username"
        />

        <div className="label">Password</div>
        <input
          type="text"
          name="password"
          id="password"
          className="password"
          placeholder="Enter your password"
        />

        <button>Sign Up</button>
      </div>
    </>
  );
}
export default LoginPage;
