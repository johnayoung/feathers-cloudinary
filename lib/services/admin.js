const Base = require('./base');

const errorHandler = require('../error-handler');
const normalizeQuery = require('../normalize-query');

module.exports = class Service extends Base {
  find(params) {
    const query = normalizeQuery(params);
    return this.cloudinary.api.resources(query).catch(errorHandler);
  }

  get(id) {
    return this.cloudinary.api.resource(id).catch(errorHandler);
  }

  create(data) {
    const { file, ...rest } = data;
    return this.cloudinary.uploader.upload(file, rest).catch(errorHandler);
  }

  async update(id, data, params) {
    return this.cloudinary.api.update(id, data).catch(errorHandler);
  }

  async patch(id, data, params) {
    return this.update(id, data, params);
  }

  async remove(id, params) {
    const query = normalizeQuery(params);
    return this.cloudinary.api.delete_resources(id, query).catch(errorHandler);
  }
};
