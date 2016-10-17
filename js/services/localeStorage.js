myApp.factory('localeStorage', [
    function () {

        users = [
            {
                name: "Edwin Eduardo", lastName: "Gutierrez Cervera", years: 25, picture: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/12074885_10205655381959935_4706824195121020709_n.jpg?oh=cb4c9db223a05ae87b76a0a922eb8c13&oe=586DD744", 
                id: 1, email: "edwine.gutierrezc@utadeo.edu.co", phone: '', facebook: 'edmangs', twitter: 'edmangs',
                profile: "Soy un apasionado por la tecnología, amante de los videojuegos y el manga en otras palabras un friky"
            }
        ];

        animals = [
            {   
                id: 1, name: "Fido", type: "Perro", picture: "http://www.significado-de-nombres.com/wp-content/uploads/2016/01/nombres-originales-perros-macho.jpg", 
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
            },
            {
                id: 2, name: "Misy fu", type: "gato", picture: "http://www.fondox.net/wallpapers/un-gato-bebe-433.jpg", 
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
            },
            {
                id: 3, name: "Firulayz", type: "Perro", picture: "http://mascotafiel.com/wp-content/uploads/2015/11/perros-Chihuahua_opt-compressor-1.jpg", 
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
            },
            {
                id: 4, name: "Artemio", type: "Loro", picture: "http://www.dondevive.org/wp-content/uploads/2015/12/donde-viven-los-loros.jpg", 
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
            },
            {
                id: 5, name: "Flopy", type: "Pez", picture: "http://www.bioenciclopedia.com/wp-content/uploads/2013/11/pez-payaso4.jpg", 
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
            }
        ];

        function saveData() {
            var dataAnimals = getData('animals');
            var dataUsers = getData('users');
            
            if(!dataUsers){
                setData('users', users);
            }
            
            if(!dataAnimals){
                setData('animals', animals);
            }
        }

        function setData(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        function getData(value) {
            object = localStorage.getItem(value);

            return JSON.parse(object);
        }

        return {
            saveData: saveData,
            setData: setData,
            getData: getData
        };
    }
]);