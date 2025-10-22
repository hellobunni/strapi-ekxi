'use strict';

/**
 * operating-hours service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::operating-hours.operating-hours');

