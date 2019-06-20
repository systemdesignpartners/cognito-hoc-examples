# cognito-hoc-examples
Examples using the withCognitoHUI Higher Order Component for ReactJS (from the cognito-hoc repo).


## Usage
This project contains six different examples for using the cognito-hoc and cognito-auth-storage components. There are two main ways to configure cognito-hoc (button or timer), and three different Auth storage possibilities (Memory, IndexedDB, and the default, i.e., localStorage), so altogether we want six different sample apps, representing the six different possible configurations.

But we do not want to eject, so we have only the one entry point of src/index.js. To keep things as close as possible to an unejected create-react-app, and to show all six configurations without making six separate npm projects, we add six scripts to the package.json file. We retain the usual "start" script and you can run that if you want. It will run whatever is in the src/index.js file. But we also have a "start1", "start2", etc. up to "start6" script which you can run via e.g., "npm run start1." These will run the different examples by first copying the indicated script's corresponding src/indexN.js file into index.js (overwriting the old index.js). I.e., for "npm run start1" it will copy the src/index1.js script to src/index.js and then run that. Hopefully this gives a good idea of how to use the withCognitoHUI HOC to wrap a typical ReactJS Component built with create-react-app.

Each of the six Apps checks the userIsLoggedIn prop, and if it is 'true' it renders its protected content. If not, it renders its unprotected content (in the Button configurations), or null (in the Timer configurations, because only the Loading... screen is shown before automatically redirecting to the Hosted UI page).


## Notes
Don't forget to put your aws-exports.js file into the src/config folder.

App.css is used by all of the example apps. Same with index.css.
