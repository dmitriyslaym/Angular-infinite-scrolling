app.controller('ScrollCtrl', function($scope) {
	$scope.items = [];
	
    var counter = 0;
    $scope.getImages = function(q) {
    	var q = +q;
        for (var i = 0; i < q; i++) {
            $scope.items.push({
                number: counter + 1
            });
            counter += 1;
        }
    };

    $scope.getImages(12);

    $scope.deleteImg = function(items, i) {
    	items.splice(items.indexOf(i), 1);
    }
});