# GoBarber

## Backend
It's a [NodeJS][https://nodejs.org/en/] *API REST*, making it easy to use multiple clients and being a performance oriented application.

### First things first
*DO NOT* forget to run `npm install` when downloading this project, so you can have node_modules folder and it'll run smoothly. 

I'd also recommend to run `yarn install`, _just in case._

### Frameworks/Libraries used on Backend
* ExpressJS
> Used for micro-services

* Nodemon
> Used as a DevDependencies to always listen without the need to restart the server everytime we change something.
> We are using a script so we don't need to use `yarn nodemon src/index.js`. By doing that, we changed the `main` in Package.json from `index.js` to `src/index.js`, so everytime we run `yarn dev`, it'll do a yarn nodemon main.

* UUID

> Library used to create an universal unique ID, so we can set an id for each entry.