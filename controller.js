var myLeague = angular.module('myLeague', []);
  myLeague.controller('leagueCtrl', function($scope, $http) {
    $scope.submit = function(user) {
        return $http({
            method: 'GET',
            url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + user + '?api_key=RGAPI-1B2377EB-C510-41BA-BC25-4CE8A11B226C'
        }).success(function(res) {
            console.log(res);
            $scope.username = res;

        });

    }
  })