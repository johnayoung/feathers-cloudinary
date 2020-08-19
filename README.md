# feathers-cloudinary

[![Build Status](https://travis-ci.org/feathersjs/plugins.png?branch=master)](https://travis-ci.org/feathersjs/plugins)
[![Download Status](https://img.shields.io/npm/dm/cloudinary.svg?style=flat-square)](https://www.npmjs.com/package/feathers-cloudinary)

> **Unofficial** Feathers plugin service for Cloudinary

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

## Contributing

Run `npm run release:<type>`

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
