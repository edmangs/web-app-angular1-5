myApp.controller('editAnimalController', [
    '$scope', 'calls', '$timeout', 'localeStorage', '$routeParams',
    function($scope, calls, $timeout, localeStorage, $routeParams) {
        
        localeStorage.saveData();
        $scope.animals = localeStorage.getData('animals');
        $scope.types = [
            {id: 1, name: 'Perro'},
            {id: 2, name: 'Gato'},
            {id: 3, name: 'Loro'},
            {id: 4, name: 'Cuadrupedo'},
            {id: 5, name: 'Volador'},
            {id: 6, name: 'Salvaje'}
        ];
        
        $scope.animals.forEach(function(item){
            if(item.id == $routeParams.id){
                $scope.animal = item;
            }
        });
        
        $scope.saveMessage = false;
        
        $scope.save = function(animal){
            $scope.animals.forEach(function(item){
                if(animal.id == item.id){
                    item = animal;
                }                
            });
            
            localeStorage.setData('animals', $scope.animals);
            
            $scope.saveMessage = true;
        };
        
        $scope.viewSelect = function(){
            $('select').material_select();
        };
    }
]);