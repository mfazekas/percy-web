# percy-web

[![Build status](https://badge.buildkite.com/c5a2ecb69c413ef1b2709d9c256edb4a17c1922b23f38bbefe.svg)](https://buildkite.com/percy/test-web)

[Percy](https://percy.io)'s frontend web application, built with Ember.

## Setup

First, install [yarn](https://yarnpkg.com).

Then, run:

```bash
yarn
bower install
```

## Run server

```bash
PERCY_DEV_MIRAGE=yes npm run start
```

Then, access [http://localhost:4200](http://localhost:4200)

### Using local API server

Edit `/etc/hosts` to add a local hostname (required):

```bash
# Add this to /etc/hosts:
127.0.0.1  dev.percy.local
```

### Using the production API

First, add the `dev.percy.local` hostname above. Then, two environment variables must be set:

```bash
export PERCY_WEB_AUTH_TOKEN=...
export PERCY_WEB_API_HOST=https://percy.io

npm run start
```

`PERCY_WEB_AUTH_TOKEN` is a full-access user token, different than the normal project `PERCY_TOKEN`.

Then, access [http://dev.percy.local:4200](http://dev.percy.local:4200)

## Run tests

```bash
npm test
````

Or, visit [http://dev.percy.local:4200/tests](http://dev.percy.local:4200/tests).

Or, to run in `ember test --server` mode:

```bash
npm run test:server
```

## Run tests locally with Percy enabled

```bash
PERCY_TOKEN=... PERCY_PROJECT=percy/percy-web npm test
```
