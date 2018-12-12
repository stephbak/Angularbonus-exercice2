var myApp = angular.module('myApp', []);
       myApp.controller('myController', function ($scope, $window){
           $scope.DisplayAlert = function(){
               $window.alert('message');
           };
       });
