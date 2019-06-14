/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {AuthStorageMemory} from '@systemdesignpartners/cognito-auth-storage';
import {withCognitoHUI} from '@systemdesignpartners/cognito-hoc';



// Import our Amplify configuration file
import awsmobile from './aws-exports';

// Set its Auth.storage property to our customized In-memory Storage object
awsmobile.storage = new AuthStorageMemory();


// eslint-disable-next-line react/prefer-stateless-function
class AppButtonMemoryStorage extends Component {
  render() {
    const { authStorageInfo, myProp1, myProp2 } = this.props;

    return (
      <div className='AppButtonMemoryStorage'>
        <p>
          Hello! This App wants to use our AuthStorageMemory class for its Auth storage
          mechanism. This is an in-memory store, which means that Authentication
          is not preserved after the browser is closed.
        </p>
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
export default withCognitoHUI(AppButtonMemoryStorage, awsmobile, 'button');
