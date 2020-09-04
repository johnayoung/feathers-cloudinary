const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    const { expression } = query;
    return this.cloudinary.search(expression).catch(errorHandler);
  }
};
