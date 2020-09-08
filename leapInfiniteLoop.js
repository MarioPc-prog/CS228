var controllerOptions = {};
var i = 0;
//set window width 1/2 as x 
var x = window.innerWidth*1/2 ;
//set window height 1/2 as y
var y = window.innerHeight*1/2;

Leap.loop(controllerOptions, function(frame){
	console.log(i);
	i++;

}
);


















