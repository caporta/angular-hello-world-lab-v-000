const MainController = $scope => {
  $scope.name = 'Chris'
  $scope.email = 'chris@me.com'
  $scope.phone = '(555) 943-0090'
}

angular
  .module('app')
    .controller('MainController', MainController)
