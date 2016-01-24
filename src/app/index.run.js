(function() {
  'use strict';

  angular
    .module('hatchling')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
