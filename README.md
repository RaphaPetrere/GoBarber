# GoBarber

## Backend
It's a [NodeJS](https://nodejs.org/en/) *API REST*, making it easy to use multiple clients and being a performance oriented application.

### First things first
**DO NOT** forget to run `npm install` when downloading this project, so you can have node_modules folder and it'll run smoothly. 

I'd also recommend to run `yarn install`, _just in case._

### Frameworks/Libraries used on Backend
* ExpressJS
> Used for micro-services

* Nodemon
> Used as a DevDependencies to always listen without the need to restart the server everytime we change something.
> We are using a script so we don't need to use `yarn nodemon src/index.js`. By doing that, we changed the `main` in Package.json from `index.js` to `src/index.js`, so everytime we run `yarn dev`, it'll do a yarn nodemon main.

* UUID
> Library used to create an universal unique ID, so we can set an id for each entry.

* CORS
> We use CORS so our backend allows any frontend have access to our backend (if its params are empty).

## Frontend
Component oriented, the frontend is a ReactJS application.

### Concepts used on Frontend
* Components
> It's a smart way to reuse some code line. It's very encouraged to use in React and helps to create a clean and easy to understand code.

* Fragments
> You can't have more than 1 component in React without encapsulating them, but there are some times that you don't want a div, since it can bring you some problems, so, an easy way to work this around is by using Frangment. <></> works just like a div as a container but you don't create any visual effect on the DOM.

* Properties
> It's a piece of information that we can send through a parent component to a child component. It works just like a parameter, but you have things like {children}, where you can send a whole HTML as this parameter and just render the children props.

* State and Immutability
> By using `useState` you can create states. useState returns an array with 2 positions, the first one is a variable with your initial value, the later is a function to update this value. States are very UX-friendly, since it'll update the variable you are showing to the user in real time.
> Immutability is a concept that you can't mutate variables, alter its format nor delete/create informations. If you want to change its value, you need to recreate the information with the updates you want. 
> i.e.: `projects.push()` is mutating the variable since it's adding a new value to the array's initial value and not recreating the variable with a new value.
> However, if you use `setProjects()`, you can use the spread operator `...` to retrieve all the values from the variable and then add the new value after the comma. i.e.: `setProjects([...projects, 'New Project ${Date.now()}'`.

### Frameworks/Libraries used on Frontend
* BABEL
> Responsible for converting JS files in a way that the browsers will understand. It's a transpiler.

* WEBPACK
> Automatically identifies which extension is the file using (js, css) and activate a loader.

* WEBPACK-DEV-SERVER
> Live Reload development server from webpack (just like a nodemon on the backend). You can see it working by running `yarn webpack serve --mode development` if you are using webpack 4+.

* AXIOS
> Responsible for the API Request, it connects the frontend with the backend.

### Errors and its turnarounds
- #### regeneratorRuntime is not defined
> Babel itself with the _preset-env_ doesn't understand async functions, so we need to add another plugin called **plugin-transform-runtime** by running `@babel/plugin-transform-runtime`. By doing so, you need to restart the server and then it won't be a problem anymore.