# Current State

This is a **starter kit** for webapps **completely written in TypeScript**.

The starter kit is using the following technologies:

- **M**ySQL
- **E**xpressJS
- **A**ngular 6
- **N**odeJs

# Installation

## Prerequisits ##

- node (v6, v8 or v10) and npm
- git
- angular-cli (see https://github.com/angular/angular-cli)
- Docker (optional)

## Install ##

### Cloning the project
```
git clone https://github.com/girishdubey/gd-ts-mean.git your-project-name
cd your-project-name
```

### Installing all node modules
```
npm install
```

Under the hood [lerna](https://github.com/lerna/lerna) is used to install the multiple packages in backend, frontend and shared, but you don't need to be concerned with this too much for now.

# Backend

First `cd backend`, then:

- to spin up a REST-API server `npm start`. Check it out at http://localhost:4242
- To run the tests `npm test`


# Frontend
First `cd frontend`, then:

- to start the Angular app `npm start`. Check it out on http://localhost:4200
- you can develop all modules independently. For example, `cd src/app/user` and run `ng serve`.
This launches a minimal app only displaying the user module (i.e. without login etc).
You can test all modules using `ng test`.

More info available in [frontend docs](./frontend/README.md).
