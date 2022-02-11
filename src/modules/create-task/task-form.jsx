// import "./task-form.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import validator from "validator";

const AddUserForm = () => {
  return <Form className="p-5" >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="flex" >Name</Form.Label>
      <Form.Control required className="flex" type="text" placeholder="John Smith" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control required type="email" placeholder="Email" />
    </Form.Group>
    <Button style={{ marginRight: '16px' }} className="ml-3" variant="secondary" type="button" variant="outline-danger">
      Cancel
    </Button>
    <Button color="green" variant="success" type="submit">
      Submit
    </Button>
  </Form>
}

export default AddUserForm;
