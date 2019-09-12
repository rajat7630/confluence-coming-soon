
		// Get elements
 var count= new Date("oct 12,2019 00:00:00").getTime();
        var x= setInterval(function(){
        var now= new Date().getTime();
        var d=count-now;
            var days = Math.floor(d/(1000*60*60*24)) ;
            var hours= Math.floor((d%(1000*60*60*24))/(1000*60*60)) ;
            var minutes= Math.floor((d%(1000*60*60))/(1000*60));
            var seconds= Math.floor((d%(1000*60))/1000);//kajskjas
            if(days<10)
                {
                    days= "0"+days;
                }
            if(hours<10)
                {
                    hours= "0"+hours;
                }
            if(minutes<10)
                {
                    minutes= "0"+minutes;
                }
            if(seconds<10)
                {
                    seconds= "0"+seconds;
                }
            document.getElementById("days").innerHTML= days+" DAYS TO GO";
            if(d<=0)
                {clearInterval(x);}
        },1000);
	