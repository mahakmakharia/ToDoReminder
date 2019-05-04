             var config = {
            apiKey: "AIzaSyCXStQMNfUZH3iwy6R5ysRA-RetOLEhN1I",
            authDomain: "locationtracker-ec89a.firebaseapp.com",
            databaseURL: "https://locationtracker-ec89a.firebaseio.com",
            projectId: "locationtracker-ec89a",
            storageBucket: "locationtracker-ec89a.appspot.com",
            messagingSenderId: "557929837312"
          };

          firebase.initializeApp(config);
          var database=firebase.database();
             function addi()
             {
              /*This is to get location entered by user*/
             	var st=document.getElementById("st").value;
	            var ci=document.getElementById("ci").value;
	            var sta=document.getElementById("sta").value;
	            var task=document.getElementById("task").value;
                var database=firebase.database();


               /*This part is to get the latitude and longitude of the user's input location using MapQuest API*/
	            L.mapquest.key = 'CArggURMrkTf8hlY8Nm5F6sEODbJJSEv';
                function geocodingCallback(error, result) { console.log(result); }
                     L.mapquest.geocoding().geocode({
                        street: st,
                        city: ci,
                        state: sta,
          
                      }, createMap);
                  
                     function createMap(error, response) 
                     {
                          var location = response.results[0].locations[0];
                          x1 = location.latLng.lat;
                          y1 = location.latLng.lng;
                         //pushes the data in JSON format to the database
                         var data=
                         {
                             latitude:x1,
                             longitude:y1,
                             street:st,
                             city:ci,
                             state:sta,
                             task:task
                  }
                  var ref=firebase.database().ref('/data');
                  ref.push(data);

             }
           }