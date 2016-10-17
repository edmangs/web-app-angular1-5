myApp.controller('contactController', [
    '$scope', 'calls', '$timeout', 'localeStorage',
    function($scope, calls, $timeout, localeStorage) {
        localeStorage.saveData();
        
        $('select').material_select();
    }
]);