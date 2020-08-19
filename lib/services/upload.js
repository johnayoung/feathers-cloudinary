const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    // TODO (EK): Handle pagination
    return [];
  }

  get(id) {
    return { id };
  }

  create(data) {
    const { file, ...rest } = data;
    return this.cloudinary.uploader.upload(file, rest).catch(errorHandler);
  }
};
