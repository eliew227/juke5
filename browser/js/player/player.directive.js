'use strict';

juke.directive('player', function (PlayerFactory) {
	return {
		restrict: 'E',
		templateUrl: '/js/player/player.template.html',
		// can (& probably should) use controller function instead of link function - either one works though
		link: function (scope) {
		  angular.extend(scope, PlayerFactory); // copy props from param2 to param1

		  scope.toggle = function () {
		    if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
		    else PlayerFactory.resume();
		  };

		  scope.getPercent = function () {
		    return PlayerFactory.getProgress() * 100;
		  };
		}
	};
});


