myApp.controller('newAnimalController', [
    '$scope', 'calls', '$timeout', 'localeStorage', '$routeParams',
    function($scope, calls, $timeout, localeStorage, $routeParams) {
        localeStorage.saveData();
        
        $scope.animal = {};
        $scope.animals = localeStorage.getData('animals');
        
        $scope.saveMessage = false;
        $scope.saveMessageError = false;
        
        $scope.save = function(animal){
            if(Object.keys(animal).length < 4){
                $scope.saveMessageError = true;
                
                return true;
            }
            
            animal.id = $scope.animal.length + 1;
            $scope.animals.push(animal);
            
            localeStorage.setData('animals', $scope.animals);
            
            $scope.saveMessage = true;
            $scope.saveMessageError = false;
            
            $scope.animal = {};
        };
        
        $scope.viewSelect = function(){
            $('select').material_select();
        };
    }
]);