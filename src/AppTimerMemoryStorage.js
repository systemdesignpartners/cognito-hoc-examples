/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {AuthStorageMemory} from '@systemdesignpartners/cognito-auth-storage';
import {withCognitoHUI} from '@systemdesignpartners/cognito-hoc';

// Import our Amplify configuration file
import awsconfig from './config/aws-exports';

// Set its Auth.storage property to our customized In-memory Storage object
awsconfig.storage = new AuthStorageMemory();


// eslint-disable-next-line react/prefer-stateless-function
class AppTimerMemoryStorage extends Component {
  render() {
    const { userIsLoggedIn, authStorageInfo, myProp1, myProp2 } = this.props;

    return (
      <div className='AppTimerMemoryStorage'>
        {(userIsLoggedIn === 'true') ? (
          <div>
            <p>
              Hello! This App uses our AuthStorageMemory class for its Auth storage
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
        ) : null }
      </div>
    );
  }
}


// Export the App, wrapped by the Cognito HOC, using the 'timer' configuration
export default withCognitoHUI(AppTimerMemoryStorage, awsconfig, 'timer', 1300);
