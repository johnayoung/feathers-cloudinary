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

// Initialize the application
const app = feathers();
```

in `upload.class.js`:

```js
/* eslint-disable no-unused-vars */
const { Upload } = require('feathers-cloudinary');

exports.Upload = Upload;
```

in `upload.service.js`:

```js
// Initializes the `upload` service on path `/upload`
const { Upload } = require('./upload.class');
const hooks = require('./upload.hooks');

module.exports = function(app) {
  const options = {
    paginate: app.get('paginate'),
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  };

  // Initialize our service with any options it requires
  app.use('/upload', new Upload(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('upload');

  service.hooks(hooks);
};
```

## Contributing

Run `npm run release:<type>`

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
