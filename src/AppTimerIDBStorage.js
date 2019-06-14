/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import AuthStorageIDB from './AuthStorageIDB';
import {withCognitoHUI} from '@systemdesignpartners/cognito-hoc';



// Import our Amplify configuration file
import awsmobile from './aws-exports';

// Set its Auth.storage property to our customized In-memory Storage object
awsmobile.storage = new AuthStorageIDB();


// eslint-disable-next-line react/prefer-stateless-function
class AppTimerIDBStorage extends Component {
  render() {
    const { authStorageInfo, myProp1, myProp2 } = this.props;

    return (
      <div className='AppTimerIDBStorage'>
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
export default withCognitoHUI(AppTimerIDBStorage, awsmobile, 'timer', 1300);
