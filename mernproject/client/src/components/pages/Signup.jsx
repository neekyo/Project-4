import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import api from '../../api'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      name: '',
      password: '',
      message: null,
    }
}

handleClick = (e) => {
  console.log(this.state)
  e.preventDefault()
  api
    .signup({username:this.state.username, password: this.state.password})
    .then(result => {
      console.log('SUCCESS!', result)
      this.props.history.push('/login') // Redirect to the login
    })
    .catch(err => this.setState({ message: err.toString() }))
}

handleInputChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  })
}

render(){
  return (
    <div className="sign">
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image signup'
            style={{
              backgroundImage:
                'url(https://www.azutura.com/media/catalog/product/cache/47/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-45993_WP.jpg)',
              width: '28rem',
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='green mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN UP</strong>
                </h3>
              </div>
              <MDBInput
                label='Username'
                group
                name='username'
                type='text'
                validate
                onChange={this.handleInputChange}
                labelClass='white-text'
              />
              <MDBInput
                label='Password'
                group
                name='password'
                type='password'
                validate
                onChange={this.handleInputChange}
                labelClass='white-text'
              />
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                    onClick={e => this.handleClick(e)}
                  >
                    Sign up
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='/login' className='white-text ml-1 font-weight-bold white'>
                    Log in
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow> 
    </MDBContainer>
    </div>
  );
  }
};