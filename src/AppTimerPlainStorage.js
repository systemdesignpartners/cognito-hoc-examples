/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {withCognitoHUI} from '@systemdesignpartners/cognito-hoc';



// Import our Amplify configuration file
import awsmobile from './aws-exports';

// Leave the .storage property undefined. We are using Amplify's default
// storage mechanism (Amplify for JS prefers the browser's localStorage)


// eslint-disable-next-line react/prefer-stateless-function
class AppTimerPlainStorage extends Component {
  render() {
    const { authStorageInfo, myProp1, myProp2 } = this.props;

    return (
      <div>
        <p>Hello! This App wants to use the Amplify default Auth storage mechanism.</p>
        <p>
          The actual storage used was
          {' '}
          {authStorageInfo}
          {'.'}
        </p>
        <p>We wrap this App in the HOC to put it behind the Authentication wall.</p>
        <p>
          Our wrapper is configured to use a Timer to reach the Login screen,
          so the user does not have to click anything. But we must make sure that
          our Timer delay is suitable, to avoid infinitely looping to that screen.
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


// Export the App, wrapped by the Cognito HOC, using the 'timer' configuration
export default withCognitoHUI(AppTimerPlainStorage, awsmobile, 'timer', 1300);
