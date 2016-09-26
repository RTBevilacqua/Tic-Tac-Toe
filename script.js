'use strict'
$(function(){
var count = 0
var score = [[0,0,0],[0,0,0],[0,0,0]];
var top = score[0];
var x = 'X';
var o = 'O';
/*---------------Makes X and O--------------------*/
$('div').click (function(){
	count++;
	count % 2 === 0 ?  $(this).html('<h1>O</h1>') : $(this).html('<h1>X</h1>');
	console.log($(this).attr('class'));
	var element = jQuery(this).attr('class').split(' ')[0];
	console.log(element);
	if(element === 'one'){
		score[0][0] = $(this).text();
	}
	if($(this).hasClass('top')){
		//score[0].push($(this).text());
	}
	else if($(this).hasClass('middle')){

		score[1].push($(this).text());
	}else{
		score[2].push($(this).text());
	}
	for (var i in score){
		console.log(score[i]);
		}
		/*-------------------FINDS WINNER------------------------*/
		//X horizontal
		if(score[0][0] === x && score[0][1] === x && score[0][2] === x){
			$('.winner').append('<h1 class="winner-text">PLAYER ONE WINS!</h1>');
			
		}else if(score[1][0] === x && score[1][1] === x && score[1][2] === x){
			console.log('PLAYER ONE WINS!');
		}else if(score[2][0] === x && score[2][1] === x && score[2][2] === x){
			console.log('PLAYER ONE WINS!');
		//X vertical
		}else if(score[0][0] === x && score[1][0] === x && score[2][0] === x){
			console.log('PLAYER ONE WINS!');
		}else if(score[0][1] === x && score[2][1] === x && score[2][1] === x){
			console.log('PLAYER ONE WINS!');
		}else if(score[0][2] === x && score[2][2] === x && score[2][2] === x){
			console.log('PLAYER ONE WINS!');
		//X diagonal (doesn't work)
		}else if(score[0][0] === x && score[1][1] === x && score[2][2] === x){
			console.log('PLAYER ONE WINS!');
		}else if(score[0][2] === x && score[1][1] === x && score[2][0] === x){
			console.log('PLAYER ONE WINS!');
		}else{};
		//O horizontal
		if(score[0][0] === o && score[0][1] === o && score[0][2] === o){
			console.log('PLAYER TWO WINS!');
		}else if(score[1][0] === o && score[1][1] === o && score[1][2] === o){
			console.log('PLAYER TWO WINS!');
		}else if(score[2][0] === o && score[2][1] === o && score[2][2] === o){
			console.log('PLAYER TWO WINS!');
		//o vertical
		}else if(score[0][0] === o && score[1][0] === o && score[2][0] === o){
			console.log('PLAYER TWO WINS!');
		}else if(score[0][1] === o && score[2][1] === o && score[2][1] === o){
			console.log('PLAYER TWO WINS!');
		}else if(score[0][2] === o && score[2][2] === o && score[2][2] === o){
			console.log('PLAYER TWO WINS!');
		//o diagonal (doesn't work)
		}else if(score[0][0] === o && score[1][1] === o && score[2][2] === o){
			console.log('PLAYER TWO WINS!');
		}else if(score[0][2] === o && score[1][1] === o && score[2][0] === o){
			console.log('PLAYER TWO WINS!');
		}else{};
	
	
});











});//end DR