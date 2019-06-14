# cognito-hoc-examples
Examples using the withCognitoHUI Higher Order Component for ReactJS (from the cognito-hoc repo).


## Usage
This project contains six different examples for using the cognito-hoc and cognito-auth-storage components. There are two main ways to configure cognito-hoc (button or timer), and three different Auth storage possibilities (Memory, IndexedDB, and the default, i.e. localStorage), so altogether we want to test six different configurations.

But we do not want to eject, and by default we have only the one entry point of src/index.js. So to keep things as close as possible to an unejected create-react-app, and to show all six configurations without making six separate npm projects, we use a minor sleight of hand in the package.json file. We retain the usual "start" script and you can run that if you want. It will run whatever is in the src/index.js file. But we also have a "start1", "start2", etc. up to "start6" script which you can run via e.g., "npm run start1" and these will run the different examples by first copying the indicated script's corresponding src/indexN.js file into index.js (overwriting the old index.js). I.e., for "npm run start1" it will run the src/index1.js script. Hopefully this gives a good idea of how to use the withCognitoHUI HOC to wrap a typical ReactJS Component built with create-react-app.

## Notes
Don't forget to put your aws-exports.js file into the src folder.
