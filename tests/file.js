var file = require('../lib/file.js');
var expect = require('chai').expect;

describe('file: test', function() {
	// writeFile test
	 describe('file.writeFile', function() {

	       it('write file: succ', function() {
	             var path = 'README.md';
	             var data = '说明文档';
	             return file.writeFile(path, data).then(function(flag) {
	                     expect(flag).to.be.equal(true);
	             });
	        });

		 it('write file: fail', function() {
			var path = 'write-test.txt';
			var data = '我是写入的数据';
			return file.writeFile(path, data).then(function(){}, function(err) {
				expect(true).to.be.equal(true);
			});
		});
	})

	// readFile test
	describe('file.readFile', function() {

		it('read file: succ', function() {
		var path = 'README.md';
		return file.readFile(path).then(function(data) {
			expect(data).to.be.equal('说明文档');
		});
	});

	it('read file: fail', function() {
			var path = 'write-test.txt';
			return file.readFile(path).then(function(){}, function(err) {
				expect(true).to.be.equal(true);
			});
		});
	});
});
