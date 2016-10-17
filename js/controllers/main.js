myApp.controller('mainController', [
    '$scope', 'calls', '$timeout', 'localeStorage',
    function($scope, calls, $timeout, localeStorage) {
        localeStorage.saveData();

        $('.carousel.carousel-slider').carousel({full_width: true});
        
        $scope.autoplay = function() {
            setTimeout(function(){
                $('.carousel').carousel('next'); 
                $scope.autoplay();
            }, 8000);
        };
    }
]);