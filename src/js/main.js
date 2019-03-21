
function initialize(event){

	    //event.target.playVideo();

	}
		function onYouTubeIframeAPIReady() {
		    player = new YT.Player('player', {
		        width: 800,
		        height: 500,
		        videoId: '7gjttGYeFlg',
		        playerVars: {
		            color: 'white'
		            //playlist: 'taJ60kskkns,FG0fTKAqZ5g'
		        },
		        events: {
		            onReady: initialize
		        }
		    });
		}

$( document ).ready(function() {

	var videos = ['7gjttGYeFlg','BdS1lDEFTgo', 'In2hoKBal6Q', 'iuC9ql0P4pc'];

	$('.overlay').hide();

	var hideOverlays = function() {
		$('.overlay').hide();
	}
	
    
    $('.rio').click(function(){
 
    	hideOverlays();
    	player.loadVideoById("7gjttGYeFlg", 0, "default");
    	player.playVideo();

    	$('.youtube').show(300);
    	$('.title').html('Olympic Opening Ceremony Rio 2016');
    	$('.copy').html('As creative consultant I wrote and developed characters, content, and other materials for the opening ceremonies.');
    });

    $('.bmg').click(function(){
 
    	hideOverlays();
    	player.loadVideoById("BdS1lDEFTgo", 0, "default");
    	player.playVideo();

    	$('.youtube').show(300);
    	$('.title').html('Blue Man Group Sizzle Reel');
    	$('.copy').html('As creative director, director, and writer for Blue Man group starting in the early 90s I was a part of almost every project the group undertook.');
    });

    $('.close').click(function(){
    	player.stopVideo();

		$('.overlay').hide(300);
    });
});