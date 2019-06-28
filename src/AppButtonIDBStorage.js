/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {AuthStorageIDB} from 'cognito-auth-storage';
import {withCognitoHUI} from 'cognito-hoc';

// Import our Amplify configuration file
import awsconfig from './config/aws-exports';

// Set its Auth.storage property to our customized In-memory Storage object
awsconfig.storage = new AuthStorageIDB();


// eslint-disable-next-line react/prefer-stateless-function
class AppButtonIDBStorage extends Component {
  render() {
    const { userIsLoggedIn, authStorageInfo, myProp1, myProp2 } = this.props;

    return (
      <div className='AppButtonIDBStorage'>
        {(userIsLoggedIn === 'true') ? (
          <div>
            <p>
              Hello! This App wants to use our AuthStorageIDB class for its Auth storage
              mechanism. This uses IndexedDb for Auth storage. It behaves similarly to
              localStorage, but is asynchronous. Also, Service Workers have access to it.
              Most browsers support it.
            </p>
            <p>
              The actual storage used was
              {' '}
              <em>{authStorageInfo}</em>
              {' '}
              (might not be what we asked for, if the browser cannot support it).
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


// Export the App, wrapped by the Cognito HOC, using the 'timer' configuration
export default withCognitoHUI(AppButtonIDBStorage, awsconfig, 'button');
