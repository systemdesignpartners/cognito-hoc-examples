/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import AuthStorageIDB from './AuthStorageIDB';
import {withCognitoHUI} from '@systemdesignpartners/cognito-hoc';


// Import our Amplify configuration file
import awsmobile from './aws-exports';

// Set its Auth.storage property to our customized In-memory Storage object
awsmobile.storage = new AuthStorageIDB();


// eslint-disable-next-line react/prefer-stateless-function
class AppButtonIDBStorage extends Component {
  render() {
    const { authStorageInfo, myProp1, myProp2 } = this.props;

    return (
      <div className='AppButtonIDBStorage'>
        <p>
          Hello! This App wants to use our AuthStorageIDB class for its Auth storage
          mechanism. This uses IndexedDb for Auth storage. It behaves similarly to
          localStorage, but is asynchronous. Also, Service Workers have access to it.
          Most browsers support it.
        </p>
        <p>
          The actual storage used was
          {' '}
          {authStorageInfo}
          {' '}
          (might not be what we asked for, if the browser cannot support it).
        </p>
        <p>We wrap this App in the HOC to put it behind the Authentication wall.</p>
        <p>
          Our wrapper is configured to use a Button which the user must click on
          to reach the Login screen.
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
export default withCognitoHUI(AppButtonIDBStorage, awsmobile, 'button');
