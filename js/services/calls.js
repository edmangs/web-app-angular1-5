myApp.factory('calls', [
    '$q', '$http',
    function ($q, $http) {

        function getAll($url) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: Routing.generate($url)
            }).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject([]);
            });

            return deferred.promise;
        }

        function getOneResult($url, $id) {
            var deferred = $q.defer();
            if (!$id) {
                deferred.reject([]);
            }

            $http({
                method: 'GET',
                url: Routing.generate($url, {id: $id})
            }).then(function successCallback(response) {
                deferred.resolve(response.data);
            }, function errorCallback(response) {
                deferred.reject([]);
            });

            return deferred.promise;
        }

        return {
            getAll: getAll,
            getOneResult: getOneResult
        };
    }
]);