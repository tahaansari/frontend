import React, { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration">
      <h1>Register</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Name"
      />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button>Sign Up</button>
    </div>
  );
};

export default Signup;
