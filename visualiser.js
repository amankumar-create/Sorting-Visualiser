var speed=100;
var delay_time=30000/(Math.floor(n/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;


function update_height(a,hi, f){
 
 
	window.setTimeout(function(){
	    a.style.backgroundColor = ' #14fff3';  
	   a.style.height = hi+'px';
	    
	   
    }, c_delay+=delay_time/f);
}

 