// Function to pull variables from query string
function getQueryVariable(variable)
{
     var query = window.location.search.substring(1);
     var vars = query.split("&");
     for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
     }
     return(false);
}

// Log query variables
var genre = getQueryVariable('genre');
console.log(`genre is ${genre}`);

var artist = getQueryVariable('artist');
console.log(`artist is ${artist}`);

var type = getQueryVariable('type');
console.log(`type is ${type}`);