(function() {
    angular.module('public')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['MenuService', '$filter'];

    function RegistrationController(MenuService, $filter) {
        var reg = this;
        reg.favError = false;
        reg.submitSuccess = false;
        reg.selectedFavorite = {};

        reg.submit = function() {
            reg.user.selectedFavorite = reg.selectedFavorite;
            localStorage.setItem("user", JSON.stringify(reg.user));
            reg.submitSuccess = true;
        };

        reg.validateFavoriteItem = function() {
            if (reg.user && reg.user.favorite) {
                var favorite = $filter('uppercase')(reg.user.favorite);
                var promise = MenuService.getMenuItem(favorite);
                promise.then(function(response) {
                        reg.favError = false;
                        reg.selectedFavorite = response;
                    })
                    .catch(function(error) {
                        reg.favError = true;
                    })
            }
        };
    }

})();
