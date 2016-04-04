juke.directive('songsTable', function (PlayerFactory) {
	return {
		restrict: 'E',
		templateUrl: '/js/templates/songs-table.html',
		scope: {
			songs: '='
		},
		link: function (scope) {
			angular.extend(scope, PlayerFactory);

			scope.toggle = function (song) {
				if (song !== PlayerFactory.getCurrentSong()) {
					PlayerFactory.start(song, scope.songs);
				} else if ( PlayerFactory.isPlaying() ) {
					PlayerFactory.pause();
				} else {
					PlayerFactory.resume();
				}
			};

			scope.getCurrentSong = function () {
				return PlayerFactory.getCurrentSong();
			};

			scope.isPlaying = function (song) {
				return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			};
		}
	};
});