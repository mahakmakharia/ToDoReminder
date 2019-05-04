function data()
{
	var database=firebase.database();
    //alert("loc.js")
    //This is to get the user location and compare it with data present in firebase database
    var ref=firebase.database().ref('/data');
    ref.on('value',gotData,errData);
    //To get the data
    function gotData(data)
                  {
                      var l=data.val();

                      var loc=Object.keys(l);
                      for (var i = 0; i < loc.length; i++) 
                      {
                        var k=loc[i];
                        var lat=l[k].latitude;//to get latitude
                        var lng=l[k].longitude;//to get longitude
                        var stree=l[k].street;
                        var cit=l[k].city;
                        var stat=l[k].state;
                        var task=l[k].task;

                       
                        $.getJSON('https://ipapi.co/json/', function(data) { //

                             var x=data.latitude;
                             var y=data.longitude;
                             
                             //To calculate distance between two locations
                             var R = 6371; // km (change this constant to get miles)
                            
                             var dLat = (x-lat) * Math.PI / 180;
                             
                             var dLon = (y-lng) * Math.PI / 180;
                            
                             var a = Math.sin(dLat/2) * Math.sin(dLat/2)+Math.cos(x*Math.PI/180 )*Math.cos(lat * Math.PI / 180 )*Math.sin(dLon/2)*Math.sin(dLon/2);
                             
                             var c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
                             
                             var d=R*c;
                      
                             if (d<=1) 
                              {
                                if((d*1000)<=50)
                                  swal("Location Reached, You have to "+task,"Thank you!");
                                
                              }
                              else if(d<50)
                              {
                              	  swal("Location Reached,You have to "+task,"Thank you!");
                              	}
                              
                              

   
                        });
                        


                      }

                  }
                  function errData(err)
                  {
                    console.log("error");
                  }

                
         
             }
            /*Here it compares the data and returns if user is near his bookmarked location.We will add notification
            service over here to send notification to user's mobile device */