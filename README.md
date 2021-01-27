WiH Front End Developer Challenge
Using the API provided by TVMAZE, please create a LANDING PAGE for your favorite
television show (Note: if you do not have a favorite television show, just choose one).
The following rules apply:
1. There must be at least one call to the API in order to fetch the relevant
information about the show
2. Please use Create React App or Vanilla Javascript
3. Consider HTML5 Semantics when structuring your page (Avoid <div> overload)
4. Make sure the Site is Responsive
5. Most of all have fun and be CREATIVE
Submission requirements:
1. Please provide a link to the repo
2. Max turnaround for the completed project is 3 days from receipt of this document
a. Note: this task can be completed in 3 - 5 hours, but you are free to spend
as much time as you like
3. OPTIONAL: Provide a link to the live site
Technical starting point:
1. API Website: http://www.tvmaze.com/api
2. Create React App: https://create-react-app.dev/docs/getting-started/

3. Semantic Markup: https://developer.mozilla.org/en-
US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines

Initial thoughts to help get started:
1. Make a call to fetch the initial details for the show, example provided for Seinfeld
a. http://api.tvmaze.com/singlesearch/shows?q=seinfeld
2. From the response grab images and relevant details to create a page hero
3. Perhaps use the show id to make a secondary API call in order to fetch episodes
a. http://api.tvmaze.com/shows/530/episodes
4. Etc Etc Yada Yada Yada

Happy Coding and remember to have FUN!!!



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
