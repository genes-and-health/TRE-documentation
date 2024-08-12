# Documentation

This repo contains the code for the TRE Documentation Website (new, mid 2024-) which will 
be hosted on Cloudflare Pages, and is built with a custom Docusaurus theme. THIS IS THE DOCUMENTATION WEBSITE IN CURRENT USE !!!

## Getting Started
The website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. The easiest way to install Docusaurus is to use npm, which comes with [Node.js](https://nodejs.org/). Alternatively, you can use [Yarn](https://yarnpkg.com/).

### Prerequisites
1. Node.js
2. NPM or Yarn
3. Modern Browser

### Installation

```
$ git clone git@github.com:genes-and-health/new-docs.git

$ cd docs

$ npm install
```

### Local Development
Once you have installed the dependencies, you can start the development server by running:

```
# Using npm
$ npm run start
```

or 

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. You shouldn't need to run this command locally unless you want to test the production build locally. This might be necessary to debug issues that only occur in the production build.

### Deployment
The website is hosted on Cloudflare Pages. To deploy the website to a staging environment, push to a branch and create a pull request to the `main` branch. Cloudflare Pages will automatically build and deploy the website to a staging environment and comment on the pull request with the URL of the website. Once the changes are approved, merge the pull request to the `main` branch to deploy the changes to production.
