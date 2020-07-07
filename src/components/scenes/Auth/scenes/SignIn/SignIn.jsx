import React, { Component } from 'react';

import SignInGoogle from '../../molecules/SignInGoogle';
import SignInFacebook from '../../molecules/SignInFacebook';
import SignInTwitter from '../../molecules/SignInTwitter';
import SignInGithub from '../../molecules/SignInGithub';

class SignIn extends Component {
  render() {
    return (
      <div className="login">
        <div className="login__content">
          <div className="login__content__inner">
            
            <div className="login__content__login-form">
              <div className="login__content__providers">
                <div className="login__content__providers--left">
                  <SignInGoogle />
                  <SignInGithub />
                </div>
                <div className="login__content__providers--right">
                  <SignInTwitter />
                  <SignInFacebook />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
