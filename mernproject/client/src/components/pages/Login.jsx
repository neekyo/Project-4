import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

const Login = () => {
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
                  <strong>LOG IN</strong>
                </h3>
              </div>
              <MDBInput
                label='Username'
                group
                type='text'
                validate
                labelClass='white-text'
              />
              <MDBInput
                label='Password'
                group
                type='password'
                validate
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
                    Log in
                  </MDBBtn>
                </div>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default Login;

// import React, { Component } from 'react'
// import api from '../../api'

// export default class Login extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       username: '',
//       password: '',
//       message: null,
//     }
//     this.handleInputChange = this.handleInputChange.bind(this)
//   }

//   handleInputChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//   }

//   handleClick(e) {
//     e.preventDefault()
//     api
//       .login(this.state.username, this.state.password)
//       .then(result => {
//         console.log('SUCCESS!')
//         this.props.history.push('/profile') // Redirect to the profile
//       })
//       .catch(err => this.setState({ message: err.toString() }))
//   }

//   render() {
//     return (
//       <div className="Login">
//         <h2>Login</h2>
//         <form>
//           Username:{' '}
//           <input
//             type="text"
//             value={this.state.username}
//             name="username"
//             onChange={this.handleInputChange}
//           />{' '}
//           <br />
//           Password:{' '}
//           <input
//             type="password"
//             value={this.state.password}
//             name="password"
//             onChange={this.handleInputChange}
//           />{' '}
//           <br />
//           <button onClick={e => this.handleClick(e)}>Login</button>
//         </form>
//         {this.state.message && (
//           <div className="info info-danger">{this.state.message}</div>
//         )}
//       </div>
//     )
//   }
// }


  