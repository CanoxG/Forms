import React, { useState } from "react";

const Submit = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    comments: "",
    isEmployee: false,
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

  return (
    <form>
      <fieldset>
        <legend>Fill The Form</legend>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={state.firstName}
          onChange={handleState}
        />
        <label htmlFor="lastName"></label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={state.lastName}
          onChange={handleState}
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={state.email}
          onChange={handleState}
        />
        <br/>
        <textarea
          value={state.comments}
          name="comments"
          placeholder="Comments"
          onChange={handleState}
        />
        <br/>
        {/* Checkbox has no value property use checked property */}
        <input
          className="checkbox"
          id='isEmployee'
          type="checkbox"
          checked={state.isEmployee}
          name="isEmployee"
          onChange={handleState}
        />
        <label className="employee" htmlFor="isEmployee">
          Are you Employee ?
        </label>
      </fieldset>
    </form>
  );
};

export default Submit;
