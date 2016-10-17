myApp.controller('editUserController', [
    '$scope', 'calls', '$timeout', 'localeStorage', '$routeParams',
    function($scope, calls, $timeout, localeStorage, $routeParams) {
        localeStorage.saveData();
        $scope.user = {};
        $scope.users = localeStorage.getData('users');

        $scope.users.forEach(function(item){
            if(item.id == $routeParams.id){
                $scope.user = item;
            }
        });
        
        $scope.saveMessage = false;
        
        $scope.save = function(user){
            $scope.users.forEach(function(item){
                if(user.id == item.id){
                    item = user;
                }                
            });
            
            localeStorage.setData('users', $scope.users);
            
            $scope.saveMessage = true;
        };
    }
]);