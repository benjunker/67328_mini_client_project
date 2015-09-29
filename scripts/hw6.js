// CLIENT ID: 664d2bbfa8ffabfce32a4435e0d40bad
// CLIENT SECRET: 877ea18bd6ad0f845cd7a4c6bcf44c35

var url = 'https://api.soundcloud.com/tracks?client_id=664d2bbfa8ffabfce32a4435e0d40bad&genres=hiphop';
	$.getJSON(url, function(tracks,error) {
		if(error!='success'){
			console.log(error);
		} else{
			//pick random track
			var random_num = Math.floor(Math.random() * tracks.length);
			console.log(tracks[random_num]);
	}
	});


SC.initialize({
  client_id: '664d2bbfa8ffabfce32a4435e0d40bad'
});

var track_url = 'http://soundcloud.com/forss/flickermood';
SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
  console.log('oEmbed response: ' + oEmbed);
});
