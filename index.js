angular.module('starter' ,['ngMaterial','angular-sortable-view'])
    .controller("homeController",function($scope)
    {
        $scope.modelArray=[ "Chicken Tikka","Zinger","Chicken Karahi","Chicken Jalfrezi" ];
        $scope.modelArray1=[ "Malai Boti" ];
        $scope.modelArray2=[ "Chicken Soup" ];
        $scope.modelArray3=[ "Chinese" ];
        console.log($scope.modelArray)
        console.log($scope.modelArray1)


    })
