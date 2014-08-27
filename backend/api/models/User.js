'use strict';

/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
  schema: true,

  attributes: {
    username: {
      type: 'string',
      unique: true
    },
    email: {
      type: 'email',
      unique: true
    },

    // Passport configurations
    passports: {
      collection: 'Passport',
      via: 'user'
    },
    // Message objects that user has sent
    messages: {
      collection: 'message',
      via: 'user'
    },
    // Login objects that are attached to user
    logins: {
      collection: 'UserLogin',
      via:        'user'
    },
    // Roles objects that are attached to user
    roles: {
      collection: 'role',
      via:        'users'
    }
  }
};
