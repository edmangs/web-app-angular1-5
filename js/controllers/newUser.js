myApp.controller('newUserController', [
    '$scope', 'calls', '$timeout', 'localeStorage', '$routeParams',
    function($scope, calls, $timeout, localeStorage, $routeParams) {
        localeStorage.saveData();
        
        $scope.user = {};
        $scope.users = localeStorage.getData('users');
        
        $scope.saveMessage = false;
        $scope.saveMessageError = false;
        
        $scope.save = function(user){
            if(Object.keys(user).length < 4){
                $scope.saveMessageError = true;
                
                return true;
            }
            
            user.id = $scope.users.length + 1;
            $scope.users.push(user);
            
            localeStorage.setData('users', $scope.users);
            
            $scope.saveMessage = true;
            $scope.saveMessageError = false;
            
            $scope.user = {};
        };
    }
]);