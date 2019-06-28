# cognito-hoc-examples
Examples using the withCognitoHUI Higher Order Component for ReactJS (from the https://www.npmjs.com/package/cognito-hoc package).


## Usage

You **must** have already configured the Cognito backend. See https://www.sdpartners.com/blog/cognito-hoc for instructions. After that, to setup the app and run the first example:
```
git clone <this repo>
npm install
<put your aws-exports.js into the src/config folder>
npm run start1
```

This project contains six different examples for using the cognito-hoc and cognito-auth-storage packages. There are two main ways to configure cognito-hoc (button or timer), and three different Auth storage possibilities (Memory, IndexedDB, and the default, i.e., localStorage), so altogether there are six different sample apps, representing the six different possible configurations. The examples are all configured as pre-eject create-react-app projects.

Since we do not want to eject, we have only the one entry point of src/index.js. To keep things as close as possible to an unejected create-react-app, and to show all six configurations without making six separate npm packages, we add six scripts to the package.json file. We retain the usual "start" script and you can run that if you want. It will run whatever is in the src/index.js file. But we also have a "start1", "start2", etc. up to "start6" script which you can run via e.g., "npm run start1." These will run the different examples by first copying the indicated script's corresponding src/indexN.js file into index.js (overwriting the old index.js). I.e., for "npm run start1" it will copy the src/index1.js script to src/index.js and then "npm run start." Hopefully this gives a good idea of how to use the withCognitoHUI HOC to wrap a ReactJS Component.

The wrapped App must be aware that it is being wrapped, via the **userIsLoggedIn** prop. Each of the six Apps checks the prop, and if it is 'true' it renders its protected content. If not, it renders its unprotected content (in the Button configurations), or null (in the Timer configurations, because only the "Loading..." screen is shown before automatically redirecting to the Hosted UI page).


## Notes
Don't forget to put your aws-exports.js file into the src/config folder.

App.css is used by all of the example apps. Same with index.css.

