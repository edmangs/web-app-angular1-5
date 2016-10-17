myApp.controller('animalsController', [
    '$scope', 'calls', '$timeout', 'localeStorage',
    function($scope, calls, $timeout, localeStorage) {
        localeStorage.saveData();
        
        $scope.animals = localeStorage.getData('animals');
    }
]);