import React, { Component } from 'react';
import {AuthStorageMemory} from '@systemdesignpartners/cognito-auth-storage';
import {withCognitoHUI} from '@systemdesignpartners/cognito-hoc';

// Import our Amplify configuration file
import awsconfig from './config/aws-exports';

// Set its Auth.storage property to our customized In-memory Storage object
awsconfig.storage = new AuthStorageMemory();


class AppButtonMemoryStorage extends Component {
  render() {
    const { userIsLoggedIn, authStorageInfo, myProp1, myProp2 } = this.props;

    return (
      <div className='AppButtonMemoryStorage'>
        {(userIsLoggedIn === 'true') ? (
          <div>
            <p>
              Hello! This App wants to use our AuthStorageMemory class for its Auth storage
              mechanism. This is an in-memory store, which means that Authentication
              is not preserved after the browser is closed.
            </p>
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


// Export the App, wrapped by the Cognito HOC, using the 'button' configuration
export default withCognitoHUI(AppButtonMemoryStorage, awsconfig, 'button');
