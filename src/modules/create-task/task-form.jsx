import "./task-form.css";
import React, { useState } from "react";
import validator from "validator";
const TaskForm = () => {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
    //   setEmailError("Valid Email :)");
    } else {
      setEmailError("Email is required");
    }
  };

  return (
    <form>
      <div className="form__group">
        <label className="form__group-label" for="task">
          Name
        </label>
        <input
          className="form__group-text-input"
          id="task"
          name="task"
          placeholder="John Smith"
        />
      </div>
      <div className="form__group">
        <label className="form__group-label" for="task">
          Email
        </label>
        <input
          className="form__group-text-input"
          id="email"
          name="email"
          onChange={(e) => validateEmail(e)}
          placeholder="John Smith"
        />
        <span
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {emailError}
        </span>
        <div>
            <button>Cancel</button>
            <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
