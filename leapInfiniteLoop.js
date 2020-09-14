var controllerOptions = {};
var x = window.innerWidth;
//set window height 1/2 as y
var y = window.innerHeight;
//var rawXMin = 1000;
//var rawXMax = -1000;
//var rawYMin = 1000;
//var rawYMax = -1000;
function HandleFinger(finger){
	var x = finger.tipPosition[0];
	var y=finger.tipPosition[1];
	var z=finger.tipPosition[2];
	//makes y value go up and down 
	newY=window.innerHeight-y;
	circle(x,newY,50);
	//checks wheather the current horizontal position of the tip is less than the value stored in rawXMin.
	//if (x <rawXMin){
	//	rawXMin=x;
	//}
	//if (x <rawXMax){
        //        rawXMax=x;
        //}
	//if (y <rawYMin){
         //       rawYMin=y;
        //}
	//if (y <rawYMax){
         //       rawYMax=y;
        //}
	//var NewValuex =((x-rawXMin)/(rawXMax-rawXMin))*(window.innerWidth-0)+0;
	//var NewValuey =((y-rawYMin)/(rawYMax-rawYMin))*(window.innerHeight-0)+0; 
	console.log(finger.tipPosition);
	//NewValuey=window.innerHeight-NewValuey;
	//circle(x,y,50);
	//circle(NewValuex,NewValuey,50);
}
function HandleHand(hand){
	 var fingers=hand.fingers;
        for (var i=0;i<fingers.length;i++){
        //console.log(fingers[i]);
        	if(fingers[i].type==1){
                	var finger = fingers[i];
			HandleFinger(finger);
        	}
        }
                //console.log(finger);


}
function Handleframe(frame){
	if(frame.hands.length==1){
        	//console.log(frame.hands);
                var hand = frame.hands[0];
		HandleHand(hand);
	}
}
Leap.loop(controllerOptions, function(frame){
	clear();
	//circle(x,y,50);
	//var randomX = Math.random();
	//x = x + randomX;
	//var randomY = Math.random(-1);
	//y = y +randomY
	//console.log(frame);
	Handleframe(frame);

});





