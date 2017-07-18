var utils = require("../lib/utils.js");
var expect = require("chai").expect;

describe('utils: tools test', function() {
	// defer¶ÔÏó²âÊÔ
	describe('utils.getDefer', function () {
		var deferred = utils.getDefer();

		it('defer succ', function () {
			deferred.resolve(true);
			return deferred.promise.then(function(data) {
				expect(data).to.be.equal(true)
			});
		});

		it('defer fail', function() {
			deferred.reject(true);
			return deferred.promise.then(function() {}, function(data) {
				expect(data).tobe.equal(true);
			});
		})
	});

	describe('utils.when', function() {
		var deferred1 = utils.getDefer();
		var deferred2 = utils.getDefer();
		var deferred3 = utils.getDefer();
		var deferred4 = utils.getDefer();

		it('when succ', function() {
			deferred1.resolve(true);
			deferred2.resolve(true);
			return utils.when([deferred1.promise, deferred2.promise]).then(function(data) {
				expect(data).to.be.deep.equal([true, true]);
			});
		});

		it('when fail', function() {
			deferred3.resolve(true);
			deferred4.reject(false);
			return utils.when([deferred3.promise, deferred4.promise]).then(function() {},function(data) {
				expect(data).to.be.equal(false);
			});
		});
       	});
});
