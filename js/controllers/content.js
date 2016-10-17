myApp.controller('contentController', [
    '$scope', 'calls', '$timeout', 'localeStorage',
    function($scope, calls, $timeout, localeStorage) {
        localeStorage.saveData();
        
        $scope.files = [
            {
                name: 'nombres-originales-perros-macho.jpg', type: 'Imagen', id: 1,
                url: 'http://www.significado-de-nombres.com/wp-content/uploads/2016/01/nombres-originales-perros-macho.jpg',
                app: 'http://www.significado-de-nombres.com'
            },
            {
                name: 'un-gato-bebe-433.jpg', type: 'Imagen', id: 2,
                url: 'http://www.fondox.net/wallpapers/un-gato-bebe-433.jpg',
                app: 'http://www.fondox.net'
            },
            {
                name: 'perros-Chihuahua_opt-compressor-1.jpg', type: 'Imagen', id: 3,
                url: 'http://mascotafiel.com/wp-content/uploads/2015/11/perros-Chihuahua_opt-compressor-1.jpg',
                app: 'http://mascotafiel.com/'
            },
            {
                name: 'donde-viven-los-loros.jpg', type: 'Imagen', id: 4,
                url: 'http://www.dondevive.org/wp-content/uploads/2015/12/donde-viven-los-loros.jpg',
                app: 'http://www.dondevive.org'
            },
            {
                name: 'pez-payaso4.jpg', type: 'Imagen', id: 5,
                url: 'http://www.bioenciclopedia.com/wp-content/uploads/2013/11/pez-payaso4.jpg',
                app: 'http://www.bioenciclopedia.com'
            },
            {
                name: 'mascotas.jpg', type: 'Imagen', id: 6,
                url: 'http://www.fengshui-mundo.com/fotos/fotos_sitio/mascotas.jpg',
                app: 'http://www.fengshui-mundo.com'
            },
            {
                name: 'mascotas.gif', type: 'Imagen', id: 7,
                url: 'http://paris.consulado.gov.co/sites/default/files/news/main_image/mascotas.gif',
                app: 'http://paris.consulado.gov.co'
            },
            {
                name: 'mascotas.jpg', type: 'Imagen', id: 8,
                url: 'http://qchic.net/wp-content/uploads/mascotas.jpg',
                app: 'http://qchic.net'
            },
            {
                name: 'cms-image-000043742.jpg', type: 'Imagen', id: 9,
                url: 'http://confidencialcolombia.com/images/cms-image-000043742.jpg',
                app: 'http://confidencialcolombia.com'
            }
        ];
    }
]);