import React, { Component } from 'react';
import {withCognitoHUI} from 'cognito-hoc';

// Import our Amplify configuration file
import awsconfig from './config/aws-exports';

// Leave the .storage property undefined. We are using Amplify's default
// storage mechanism (Amplify for JS prefers the browser's localStorage)


class AppButtonPlainStorage extends Component {
  render() {
    const { userIsLoggedIn, authStorageInfo, myProp1, myProp2 } = this.props;

    return (
      <div className='AppButtonPlainStorage'>
        {(userIsLoggedIn === 'true') ? (
          <div>
            <p>Hello! This App wants to use the Amplify default Auth storage mechanism.</p>
            <p>
              The actual storage used was
              {' '}
              <em>{authStorageInfo}</em>
              {'.'}
            </p>
            <p>
              myProp1 of the wrapped component is:
              {' '}
              <em>{myProp1}</em>
            </p>
            <p>
              myProp2 of the wrapped component is:
              {' '}
              <em>{myProp2}</em>
            </p>
          </div>
        ) : (
          <div style={{position: 'absolute', top: '50%', left: '50%', marginRight: '-50%', transform: 'translate(-50%, -50%)'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.6em'}}>
              <strong>The User is not signed in yet.</strong>
              <img src='./sdplogo300x300.png' alt='System Design Partners logo' style={{marginTop: '14px', marginBottom: '14px'}}/>
              <strong>Our Logo is publicly visible content.</strong>
            </div>
          </div>
        )}
      </div>
    );
  }
}
           // <img style={{position: 'absolute', top: '50%', left: '50%', marginRight: '-50%', transform: 'translate(-50%, -50%); scale(5.0)'}}

// Export the App, wrapped by the Cognito HOC, using the 'button' configuration
export default withCognitoHUI(AppButtonPlainStorage, awsconfig, 'button');
