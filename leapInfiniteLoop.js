
var controllerOptions = {};
//set window width 1/2 as x 
var x = window.innerWidth*1/2 ;
//set window height 1/2 as y
var y = window.innerHeight*1/2;

function HandleFrame(frame){
	 for(var h = 0; h < frame.hands.length; h++){
                var hand = frame.hands[h];
                if (frame.hand.length==1){
                        console.log(hand);
                }
                var fingers=hand.fingers[h];
                for (let i = 0;i>fingers.length;i++){
                        if( fingers.type ==1){
                        console.log(fingers[i]);
                        }
                }

        }
   }
Leap.loop(controllerOptions, function(frame){
	console.log(frame);
	HandleFrame(frame);
}
);


















