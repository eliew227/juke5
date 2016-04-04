juke.directive('doubleClick', function () {
	//  'doubleClick' refers to 4 different things!
	//  Be aware of which 'doubleClick' refers to which thing!
	return {
		restrict: 'A',
		scope: {
			doubleClick: '&'
		},
		link: function (scope, element) {
			element.on('dblclick', function () {
				scope.doubleClick();
			});
		}
	};
});