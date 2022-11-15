import React, { useState } from "react";

const Submit = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinNewsletter: false,
  });

  console.log(state);

  function handleState(event) {
    // We destructure Input Properties
    const { name, value, type, checked } = event.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: type == "checkbox" ? checked : value,
      };
    });
  }

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password === state.passwordConfirm) {
      console.log("Successfully Signed up");
    } else console.log("Wrong Password or email");
    if (state.joinNewsletter) {
      console.log("Thanks for signing up for our Newsletter");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Sign Up</legend>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={state.email}
          onChange={handleState}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleState}
        />
        <br />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
          value={state.passwordConfirm}
          onChange={handleState}
        />
        <br />
        {/* Checkbox has no value property use checked property */}
        <input
          className="checkbox"
          id="joinNewsletter"
          type="checkbox"
          checked={state.joinNewsletter}
          name="joinNewsletter"
          onChange={handleState}
        />
        <label className="newsletter" htmlFor="joinNewsletter">
          I want to join the newsletter
        </label>
        <button onSubmit={handleSubmit}>Sign up</button>
      </fieldset>
    </form>
  );
};

export default Submit;
