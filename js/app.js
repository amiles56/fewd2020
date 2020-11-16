function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       console.log(`vars = `)
       for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            console.log(`${pair[0]}=${pair[1]}`)
            if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var genre = getQueryVariable('genre');
console.log(`genre is ${genre}`);

var artist = getQueryVariable('artist');
console.log(`artist is ${artist}`);

var type = getQueryVariable('type');
console.log(`type is ${type}`);