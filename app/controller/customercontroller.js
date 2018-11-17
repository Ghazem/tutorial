//option 1
/*
app.controller("cont1",function($scope){

  $scope.customers=[{name:'hazem',city:'minya',ordertotal:2324,joined:'2010-4-7'},{name:'zyad',city:'aminya',ordertotal:2324,joined:'2014-4-7'}];
  $scope.dosort=function(propname){
  $scope.sortme=propname;
 $scope.reverse=!$scope.reverse;
};
});
*/
(function(){
var con =function($scope){
  $scope.customers=[{name:'hazem',city:'minya',ordertotal:2324,joined:'2010-4-7'},{name:'zyad',city:'aminya',ordertotal:2324,joined:'2014-4-7'},{name:'shady',city:'alex',ordertotal:2300.24,joined:'2000-10-3'},{name:'gamal',city:'luxor',ordertotal:900.23,joined:'1990-12-21'},{name:'basem',city:'matroh',ordertotal:999.678,joined:'2007-8-16'}];
  $scope.dosort=function(propname){
  $scope.sortme=propname;
 $scope.reverse=!$scope.reverse;
};

};
//con.$inject=['$scope'];
angular.module("mod",[])
       .controller("cont1",['$scope',con]);
})();
