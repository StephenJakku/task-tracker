# Task-Tracker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and built upon it.

## Dependencies

You need to install the below packages in order to run the project:
- npx create-react-app task-tracker
- npm i react-icons
- npm i json-server
- npm i react-router-dom
- npm i -g serve

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

**run: serve -s build -p 8080** (Runs production build on local host port 8000)

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run server`

**Note: JSON Server needs to be installed prior to this**

To start the backend JSON server in the port 5000.
Open [http://localhost:5000/tasks](http://localhost:5000/tasks) to view the data in your browser.
