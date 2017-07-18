var Promise = require("es6-promise").Promise;

/**
 *  * �ṩ���ֹ��߷���
 *   * @type {{*}}
 *    */
module.exports = {
	    /**
	     *      * ��ȡDefer����
	     *           * @return {[type]} [description]
	     *                */
	    getDefer: function (){
		            var deferred = {};
		            deferred.promise = new Promise(function(resolve, reject){
				                deferred.resolve = resolve;
				                deferred.reject = reject;
				            });
		            return deferred;
		        },
	    /**
	     *      * promise when����
	     *           * @param promises promise����
	     *                * @returns {[type]} [description]
	     *                     */
	    when: function(promises) {
		            var deffered = this.getDefer();
		            Promise.all(promises).then(function(data) {
				                deffered.resolve(data);
				            }, function(err) {
				                deffered.reject(err);
				            });
		            return deffered.promise;
		        }
}
