# feathers-cloudinary

[![Build Status](https://travis-ci.org/feathersjs/plugins.png?branch=master)](https://travis-ci.org/feathersjs/plugins)
[![Code Climate](https://codeclimate.com/github/feathersjs/plugins/badges/gpa.svg)](https://codeclimate.com/github/feathersjs/plugins)
[![Test Coverage](https://codeclimate.com/github/feathersjs/plugins/badges/coverage.svg)](https://codeclimate.com/github/feathersjs/plugins/coverage)
[![Dependency Status](https://img.shields.io/david/feathersjs/plugins.svg?style=flat-square)](https://david-dm.org/feathersjs/plugins)
[![Download Status](https://img.shields.io/npm/dm/cloudinary.svg?style=flat-square)](https://www.npmjs.com/package/cloudinary)

> Testing a description

## Installation

```
npm install feathers-cloudinary --save
```

## Documentation

TBD

## Complete Example

Here's an example of a Feathers server that uses `cloudinary`.

```js
const feathers = require("@feathersjs/feathers");
const plugin = require("feathers-cloudinary");

// Initialize the application
const app = feathers();

// Initialize the plugin
app.configure(plugin());
```

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
