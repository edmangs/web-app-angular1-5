myApp.controller('usersController', [
    '$scope', 'calls', '$timeout', 'localeStorage',
    function($scope, calls, $timeout, localeStorage) {
        localeStorage.saveData();
        
        $scope.users = localeStorage.getData('users');
    }
]);