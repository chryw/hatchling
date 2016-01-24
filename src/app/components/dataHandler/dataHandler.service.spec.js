(function() {
  'use strict';

  describe('service dataHandler', function() {
    var dataHandler;

    beforeEach(module('hatchling'));
    beforeEach(inject(function(_dataHandler_) {
      dataHandler = _dataHandler_;
    }));

    it('should be registered', function() {
      expect(dataHandler).not.toEqual(null);
    });

    describe('getData function', function() {
      it('should exist', function() {
        expect(dataHandler.getData).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = dataHandler.getData();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
