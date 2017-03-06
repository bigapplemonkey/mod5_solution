(function() {
    angular.module('public')
        .controller('MyInfoController', MyInfoController)
        .filter('capitalize', function() {
            return function(input) {
                return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
            }
        });

    function MyInfoController() {
        var myInfo = this;
        myInfo.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

        myInfo.logOut = function() {
            myInfo.user = null;
            localStorage.removeItem('user');
        };

        myInfo.validateFavoriteItem = function() {

        };
    }

})();
