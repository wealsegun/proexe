// import "./task-form.css";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { createNewUser } from "../../redux/action-creator";

const AddUserForm = ({ ...props }) => {
  console.log(props);
  const { createNewUser } = props;
  useEffect(() => {
    // props
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    createNewUser({ name, email });
  };

  return (
    <Form className="p-5" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="flex">Name</Form.Label>
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          required
          className="flex"
          type="text"
          placeholder="John Smith"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          required
          type="email"
          placeholder="Email"
        />
      </Form.Group>
      <Button
        style={{ marginRight: "16px" }}
        className="ml-3"
        variant="secondary"
        type="button"
      >
        Cancel
      </Button>
      <Button color="green" variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (data) => dispatch(createNewUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
