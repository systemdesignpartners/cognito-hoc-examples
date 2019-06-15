/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {withCognitoHUI} from '@systemdesignpartners/cognito-hoc';

// Import our Amplify configuration file
import awsconfig from './config/aws-exports';

// Leave the .storage property undefined. We are using Amplify's default
// storage mechanism (Amplify for JS prefers the browser's localStorage)


// eslint-disable-next-line react/prefer-stateless-function
class AppButtonPlainStorage extends Component {
  render() {
    const { authStorageInfo, myProp1, myProp2 } = this.props;

    return (
      <div className='AppButtonPlainStorage'>
        <p>Hello! This App wants to use the Amplify default Auth storage mechanism.</p>
        <p>
          The actual storage used was
          {' '}
          {authStorageInfo}
          {'.'}
        </p>
        <p>We wrap this App in the HOC to put it behind the Authentication wall.</p>
        <p>
          Our wrapper is configured to use a Button which the user must click
          on to reach the Login screen.
        </p>
        <p>
          myProp1 of the wrapped component is:
          {' '}
          {myProp1}
        </p>
        <p>
          myProp2 of the wrapped component is:
          {' '}
          {myProp2}
        </p>
      </div>
    );
  }
}

// Export the App, wrapped by the Cognito HOC, using the 'button' configuration
export default withCognitoHUI(AppButtonPlainStorage, awsconfig, 'button');
