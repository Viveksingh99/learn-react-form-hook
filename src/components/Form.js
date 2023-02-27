import React from "react";
import { useForm } from "react-hook-form";


function Form() {
  const {register, handleSubmit} = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className="container py--4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            name="name"
            ref={register({required:true})}
          />
        </div>
        <div className="form-group">
          <label>E-mail Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your E-mail Address"
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Phone"
            name="phone"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <div className="form-group">
          <label>Choose Your State</label>
          <select className="form-control" id="state" name="state">
            <option value="">-----Select Your State-----</option>
            <option value="Bihar">Bihar</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Up">Up</option>
            <option value="Mp">Mp</option>
            <option value="Panjab">Panjab</option>
          </select>
        </div>
        <div className="form-group">
          <label className="mr-4">Choose Your Gender</label>
          <input type="radio" className="form-check-input" name="gender" />
          <label className="form-check-label">male</label>
        </div>
        <div className="form-group">
          <label className="mr-4">Choose Your Gender</label>
          <input type="radio" className="form-check-input" name="gender" />
          <label className="form-check-label">female</label>
        </div>
        <div className="form-group">
          <label className="mr-4">Choose Your Gender</label>
          <input type="radio" className="form-check-input" name="gender" />
          <label className="form-check-label">other</label>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
