# Readable app - overview
This app, while based on create-react-app, has been ejected to allow for minor webpack config.

## Overall structure
Standalone views or larger components are placed into the `continers` folder, while `components` contain all shared or non-standalone components.

## Comments on functionality

### Post and comment order
The user may cycle between ordering by tapping the sort button placed above each list. This will cycle all available order selections as a one-directional stepped cycle.

Defaut order is by votes.

### Filter by category
The user may filter posts by tapping the category icon to the upper left of the post list screen. This will expand a drawer from which to choose a category.

## Components and modules
In addition to custom built, components, the application derives on the following components:
- **React Foundation:** CSS framework, derived from Fondation Sites to offer React coponent based grid system. 
- **React Dates:** Airbnb date picker.
- **Moment:** Date handler component.

## Thougts architecural improvements.
I considered implementing both a ducks strategy to actions/reducers and also reselect however it seemed out of bounds of the assignment.

# Installation instructions
In order to run the application locally, you need both the frontend React application and a mock server running on your localhost.

To install and run the mock server locally
1. clone the app using `git clone https://github.com/terjeofnorway/readable.git`
2. In your terminal, run `npm install`
2. Then run `npm start`

To install and run frontend app locally:
1. clone the mock server repo using `git clone https://github.com/udacity/reactnd-project-readable-starter.git`
2. In your terminal, inside the folder `api-server` run `npm install`
2. Then run `node server`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run eslint`

Will lint your es6 code, adhering loosely to the airbnb standard.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
