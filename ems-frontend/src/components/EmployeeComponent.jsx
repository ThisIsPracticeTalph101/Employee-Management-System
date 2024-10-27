import React, { useState, useEffect } from "react";
import { createEmployee, getEmployee, updateEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";


function EmployeeComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const {id} = useParams();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })

  const navigator = useNavigate(); //helps navigate to path

  useEffect(()=> {
    if(id){
        getEmployee(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);

        }).catch.error(error);
    }
  },
[])
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  //add employee and update employee methods
  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if(validateForm()){

        const employee = { firstName, lastName, email };
        console.log(employee);

        if(id){
            updateEmployee(id, employee).then((response) => {
                console.log(response.data);
                navigator('/employees');
            }).catch(error => {
                console.error(error);
            });
        }else {
            //this is the add employee logic
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees')
                //try setting the state back to empty instead of navigating to new page
            }).catch(error => {
                console.error(error);
            })

        }
        
    
    }

  }

  function validateForm (){
    let valid = true;

    const errorsCopy = {...errors}

    if(firstName.trim()){
        errorsCopy.firstName = '';

    } else {
        errorsCopy.firstName = 'First name is required';
        valid = false;
    }

    if(lastName.trim()){
        errorsCopy.lastName = '';
    }else {
        errorsCopy.lastName = 'Last name is required';
        valid = false;
    }

    if(email.trim()){
        errorsCopy.email = '';
    }else {
        errorsCopy.email = 'Email is required';
    }

    setErrors(errorsCopy);

    return valid;
  }

  function pageTitle(){
    if(id){
        return <h2 class="text-center">Update Employee</h2>
    } else {
        <h2 class="text-center">Add Employee</h2>
    }
  }

  return (
    <div class="container">
      <br></br>
      <div class="row"></div>
      <div class="card col-md-6 offset-md-3 offset-md-3">
        {
            pageTitle()
        }
        <div class="card=body">
          <form>
            <div class="form-group mb-2">
              <label class="form-label">First Name:</label>
              <input
                type="text"
                placeholder="Enter Employee First Name"
                name="firstName"
                value={firstName}
                class={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
              {errors.firstName && <div class='invalid-feedback'>{errors.firstName}</div>}
            </div>
            <div class="form-group mb-2">
              <label class="form-label">Last Name:</label>
              <input
                type="text"
                placeholder="Enter Employee Last Name"
                name="lastName"
                value={lastName}
                class={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
              {errors.lastName && <div class='invalid-feedback'>{errors.lastName}</div>}
            </div>
            <div class="form-group mb-2">
              <label class="form-label">Email:</label>
              <input
                type="text"
                placeholder="Enter Employee Email"
                name="email"
                value={email}
                class={`form-control ${errors.email ? 'is-invalid' : ''}`}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              {errors.email && <div class='invalid-feedback'>{errors.email}</div>}
            </div>

            <button class="btn btn-success" onClick={saveOrUpdateEmployee}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmployeeComponent;
