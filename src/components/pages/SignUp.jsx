import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



  const signUpform = {
    marginLeft: '30%', 
    marginTop: '5%', 
    width: '500px',
  }

const SignUp = () => {
  return (
    <MDBContainer >
      <MDBRow style={ signUpform } >
        <MDBCol  md="12">
          <form>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
        </label>
            <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
        </label>
            <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Confirm your email
        </label>
            <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
              Your password
        </label>
            <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Register
                
          </MDBBtn>
            </div>
          </form>
          <p>Sorry. This is a Beta version.</p>
        </MDBCol>
        
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;