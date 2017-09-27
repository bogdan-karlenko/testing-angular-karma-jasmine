(function() {
  'use strict';

  // Creating the module and factory we referenced in the beforeEach blocks in our test file
  angular.module('api.users', [])
    .factory('Users', function() {
      var Users = {
        a: "a",
        b: "b",
      };

      // Users.method = function() {};

      return Users;
    });
})();
