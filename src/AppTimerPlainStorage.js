/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {withCognitoHUI} from '@systemdesignpartners/cognito-hoc';

// Import our Amplify configuration file
import awsconfig from './config/aws-exports';

// Leave the .storage property undefined. We are using Amplify's default
// storage mechanism (Amplify for JS prefers the browser's localStorage)


// eslint-disable-next-line react/prefer-stateless-function
class AppTimerPlainStorage extends Component {
  render() {
    const { userIsLoggedIn, authStorageInfo, myProp1, myProp2 } = this.props;

    // Note when NOT userIsLoggedIn === 'true', we return null. Since we are using
    // a Timer, preseumably there is no content to show when the user is not Logged In

    return (
      <div className='AppTimerPlainStorage'>
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
        ) : null }
      </div>
    );
  }
}


// Export the App, wrapped by the Cognito HOC, using the 'timer' configuration
export default withCognitoHUI(AppTimerPlainStorage, awsconfig, 'timer', 1300);
