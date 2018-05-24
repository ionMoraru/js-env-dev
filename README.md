# js-env-dev
Javascript Development Environement
Boilerplate
Starter kit
Seed
Starter project

## Editors and configuration

http://editorconfig.org/

## Package management

https://gist.github.com/coryhouse/29bd1029b623beb4c7f79b748dcba844

### Package Security 
Node security package
Retire.js

## Development web server

I use express for setup a web server

### For sharing work-in-progress

Ngrok (secure)
Now
Localtunnel
Surge


## Automation
Gulp 
Bower
NPM

## Transpiling

Babel
Typescript
Elm

## Bundling

Require.js-
Browserify+
Rollup+++
JSPM
WEBPACK++

https://gist.github.com/coryhouse/d611e83e432f3ae65cc46ebb9b599930

## Linting

JSLint
JSHint
ESLint

### Decision 1: Config format
### Decision 2: Which rules
### Decision 3: Warnings or errors
### Decision 4: Plugins
eslint-react-plugin

### Decision 5: Preset

https://gist.github.com/coryhouse/61f866c7174220777899bcfff03dab7f
https://github.com/dustinspecker/awesome-eslint

## Testing and continuous integration
Unit - single function or module
Integration - interaction between modules
UI - Automate interaction with UI

### Testing Framework

Mocka
Jasmine
Jest
Tape
Ava
QUnit

### Assertion library

Chai
Should
Expect

### Helper Library

JSDOM - virtual dom
Cheerio - query virtual dom using jquery

### Where to run tests

Browser
  - Karma, Testem
Headless Browser
  - Phantom JS
In-memory DOM
  - JSDOM

### Where do test files
Centralized
Alongside

### When should test run

run upon save for unit testing

## Continuous Integration

Run automated build
Run yout tests
Check code coverage 
Automate deployement

Travis (linux)
Appveyeor (windows)
Jenkins
CircleCI
Semaphore
SnapCI


## HTTP Calls

### Browser
* XMLhttprequest
* jquery
* Framework-based (angular)
* fecth (polyfill)
* axios
### Node
* http
* request

### BN

* isomorphic-fetch
* xhr
* SuperAgent
* Axios

### Centralize API calls

### Polyfill
https://polyfill.io/v2/docs/

### Mock API

* Work offline;
* Start working without  API

#### How to mock API

* Nock
* Static JSON
* Create dev server
- api-mock
- JSON server
- JSON Schema faker
- Express

#### The plan

1. Declare our schema:
- JSON Schema faker

http://json-schema-faker.js.org/

2. Generate random data
- faker.js
- chance.js
- randexp.js

3. Serve data via API
- JSON server

https://gist.github.com/coryhouse/300ed803148caaf9d4f3f45d1a03874d



## Project Structure
- Organising by features
- Extract login in POJOs

## Production build
* Minification (dead code elimination)
* Sourcemaps
* Dynamic HTML
* Cache busting
* Bundle splitting
* Error logging
  Track.js
  Sentry
  New relic
  raygun

## Production deploy
* Separating the UI from the API
* Automated deployment
  Cloud Hosting:
  - AWS
  - M Azure
  - Heroku
  - G Cloud Platform
  - Firebase
  - Github (only static file)
  - Surge (only static file)
  - Netlify (only static file)
* Handling starter kit updates
  Update approaches:
  - yeoman
  - github
  - npm
* Inspiration
Angular 
https://github.com/gianarb/awesome-angularjs

Reactjs

https://www.javascriptstuff.com/react-starter-projects/









