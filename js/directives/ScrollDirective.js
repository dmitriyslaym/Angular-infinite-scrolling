app.directive('scrollEvent', function() {
    return {
	    link: function(scope, element, attr) {
	    	scope.infiniteScroll = true;
	        var wrapper = element[0];
	        element.on('scroll', function() {
	            if (wrapper.scrollTop + wrapper.offsetHeight >= wrapper.scrollHeight && scope.infiniteScroll) {
	                scope.$apply(attr.scrollEvent);
	            }
	       	});
	    }  	
    };
});