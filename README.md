# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




                                          RESTAURANT LISTING  APP

            1. Create a new application : npx create-react-app (APP)
            2.Choosea theme using bootswatch -and import it into the index.js
            3.Copy and paste fontawesome cdnjs into the index.html
            4.copy and paste google fonts into the index.css
            5.Install react bootstrap -
            6.Component creation--->create a folder
                   ->Header
                      ->Header.js
                      ->Header.css
            7.Back end server creation
            8.API Fetching -Axios
             (Axios is a promise-based HTTP Client for node.js and the browser.On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests. )

            features:
             Make XMLHttpRequests from the browser
             Make http requests from node.js
             Supports the Promise API
             Intercept request and response
            Transform request and response data
             Cancel requests
             Timeouts

            Install :
               npm install axios

            useEffect
              the useEffect hook allows you to perform side effects in your components

            ->path setup
                ->React Router Dom - npm install react-router-dom
                ->Browser router - used to setup app routing
                ->Routes -> To hold more than on eroute (used to hold multiple components)
                ->Route -> Used to setup a component path

            useParams() -React Hook
            In our React app sometimes we want to access the parameters of the current route in this case useParams hook comes into action. The react-router-dom package has useParams hooks that let you access the parameters of the current route.
            