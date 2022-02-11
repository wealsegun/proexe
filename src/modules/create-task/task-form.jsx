// import "./task-form.css";
import React, { Component, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import validator from "validator";
import { connect } from "react-redux";


const AddUserForm = ({...props}) => {
  console.log(props);

  useEffect(()=> {
    // props
  });

   const  handleTextChanges =  ( (event ) => {
    const {target: {name, value}} =  event;
    this.setState({[name]: value});
    console.log(this.state);
  })

  const  handleOnSubmit = ( (event ) =>  {
    event.preventDefault();
  });

  return <Form className="p-5" >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="flex" >Name</Form.Label>
      <Form.Control onChange={handleTextChanges} value={this.state} required className="flex" type="text" placeholder="John Smith" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control onChange={handleTextChanges} value={this.state}  required type="email" placeholder="Email" />
    </Form.Group>
    <Button style={{ marginRight: '16px' }} className="ml-3" variant="secondary" type="button" variant="outline-danger">
      Cancel
    </Button>
    <Button color="green" variant="success" onClick={saveTask()} type="submit">
      Submit
    </Button>
  </Form>
}

function saveTask() {
const   {name, email} = this.state;
  console.log(this.state);

}

const mapStateToProps = (state) => {
  return{
     users: state.users
   }
 }
 
 const mapDispatchToProps = (dispatch) => {
  //  return {
  //    getAllUsers: () => dispatch(getAllUsers())
  //  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
