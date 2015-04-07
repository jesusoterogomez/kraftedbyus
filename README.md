# Krafted By Us Test


## Clone the repository
Clone the repository locally or clone your own fork of the repository.
```sh
$ git git@github.com:jesusoterogomez/kraftedbyus.git # or clone your own fork
$ cd kraftedbyus
```

## Installing dependencies

This application's dependencies are managed by [npm](https://www.npmjs.org/), before proceding with the cli commands below, make sure you have [node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed.


####Install project dependencies
You can check the list of dependencies in `package.json` in the project root

```sh
$ npm install 
```

## Running the application

[Gulp](http://gulpjs.com//), a javascript task manager handles tasks for testing, serving and building the application.
Use the code below to build a development version and run the application locally.
The tasks that are run are found in gulpfile.js in the repository root.  


####Development version
```sh
$ gulp serve
```

Your app should now be running on [localhost:8080](http://localhost:8080/).

####Monitored code changes
All code is being monitored by Gulp's `watch` task and will be reloaded in the browser automatically when a file within the project is edited locally.  


This task will generate a folder called `dist` where the compiled and optimized application is generated.

## Copy to Production

The `dist` folder contains all compiled code and images, and is ready to be served from a production server. 
Upload the contents of this folder to an accesible web directory using any deployment method of your choosing.
