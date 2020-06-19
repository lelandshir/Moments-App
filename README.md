# MOMNT APP

### TO-DOS & Questions:

- In no particular order:

1. npm i moment for human readable dates
1. test routes with postman
1. user schema

### MOMNT Project Folder Set Up

1. .gitignore first
1. public, models, controllers, partials, server

### Server.js: Sub DB Configuration

- set up server; express()
- Dependencies & Requirements
- Middleware Stack
- Errors and Success Message
  -Mongoose Debug Mode
  -Call on Controller File (once config'd)
- Port

### Controllers & Models

- moments
- users
- sessions

### Public: HTML & CSS

- script and style tags
  -angular app configuration

### Javascript

- set up basic CRUD routes; 2 way-data binding for the moment schema/model/url

# Bugs:

### The form/ng-submit="ctrl.addMomnt()" - res.data returned empty string; logged no errors

### The Fix:

- I added -action="/momnt"- and -method="POST"- to the form tag in index.html; it worked, but cause a new issue. It went from posting nothing to posting the same data twice (with unique ID's).
- I fixed this by commenting out -url: "/momnt"- in app.js in the addMomnt function so that the form had all posting power; both were making a post req, only needed one of them to.
