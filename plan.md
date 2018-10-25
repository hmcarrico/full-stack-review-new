# Full stack auth review

# Front End

### Component Structure

* Nav Bar
* Home aka landing page
* login page
* Profile page
* Couch Browser
* Add couch
* Footer?
* Cart?

## Redux

* store
* reducer
    * reducer function
    * initial state
        * user: null
        * couches?
    * action creators
    * action types (strings/names)
* provider in index.js
* connect() in components

## Routing

* routes themselves
    * / (home)
    * /cool-couches
    * /profile
    * /cart?
* index.js BrowserRouter
* Links in nav bar
* Routes routes.js

# Back End

### Endpoints aka routes

* GET, POST /api/counches
* /api/me
* /auth/callback

### Controllers

* couches
* auth
* user

### Server

* index.js

# Database

## Tables

* couches
    * id serial primary key
    * name text
    * price int
    * image text
* users
    * id serial primary key
    * auth0_id text
    * location text
    * email text
    * name text
    * picture text

## Queries (function for massive)

* select all couches
* find user
* create user
* create couch?


### npm packages we'll use

* express
* body-parser
* axios
* massive
* react-router-dom
* react-redux
* redux
* dotenv
* http-proxy-middleware