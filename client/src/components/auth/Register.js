import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errors: {}
    };

    this.onChange = this.onChange;
    this.onSubmit = this.onSubmit;
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };

    axios
    .post('/api/user/register', newUser)
    .then(res => console.log(res.data))
    .catch(err => this.setState({errors: err.response.data}));
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Couruscant Citizen account and join the trillion strong</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    className={classnames('form-control form-control-lg', {
                      'is-invalid' : errors.name
                    })}
                    placeholder="Name" 
                    name="name"  
                    value={this.state.name}
                    onChange={this.onChange} 
                   />
                   {errors.name &&  (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className="form-group">
                  <input 
                    type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid' : errors.email
                    })} 
                    placeholder="Email Address" 
                    value={this.state.email}
                    onChange={this.onChange}  
                    name="email" />
                    {errors.email &&  (<div className="invalid-feedback">{errors.email}</div>)}
                  <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    className={classnames('form-control form-control-lg', {
                      'is-invalid' : errors.password
                    })} 
                    placeholder="Password" 
                    value={this.state.password}
                    onChange={this.onChange}  
                    name="password" />
                    {errors.password &&  (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                  <input 
                    type="password" 
                    className={classnames('form-control form-control-lg', {
                      'is-invalid' : errors.passwordConfirm
                    })} 
                    placeholder="Confirm Password"  
                    value={this.state.passwordConfirm} 
                    onChange={this.onChange} 
                    name="passwordConfirm" />
                    {errors.passwordConfirm &&  (<div className="invalid-feedback">{errors.passwordConfirm}</div>)}
                </div>
                <input 
                  type="submit" 
                  className="btn btn-info btn-block mt-4" />
              </form>
            </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default Register;