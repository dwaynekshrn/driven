import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Register = ({ handleSubmit, pristine, reset, submitting }) => {
    return(
        <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="input-field col s12">
        <Field
        name="username"
        component="input"
        type="text"
        placeholder="Username"
      />
          <label htmlFor="username">Username</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
        <Field
        name="email"
        component="input"
        type="email"
        placeholder="Email"
      />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
      <div className="input-field col s12">
      <Field
      name="password"
      component="input"
      type="password"
      placeholder="Password"
    />
        <label htmlFor="password">Password</label>
      </div>
      <a href="/login" className="btn-flat grey lighten-3 left">Login</a>
      <button type="submit" disabled={pristine || submitting} className="btn-flat blue white-text right">Register</button>
    </div>

    </form>
        </div>
    )
}

export default reduxForm({
  form: 'register'
})(Register);