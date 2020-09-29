jQuery(document).ready(function($){
    $('#submit').on('click',function(){ 
        //For user Entry
        // var getEntry=$("#choice").val();
        // console.log(getEntry);
        // if(getEntry === "work" || getEntry === "Work"){
        //     newWorkQuote();
        // }
        // else{
        //     alert('No Input Found');
        // }
        var URL = "https://quotes15.p.rapidapi.com/quotes/random/?rapidapi-key=bf14de4011mshf307983845ff949p18ce5bjsnb8d439c092b5";
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "quotes15.p.rapidapi.com",
                "x-rapidapi-key": "bf14de4011mshf307983845ff949p18ce5bjsnb8d439c092b5"
            }
        }

        toggleShow();
        $.ajax(settings).done(function (response) {
            console.log(response);
            toggleHide();
            document.getElementById('shapeHolder').innerHTML = response.content + "- <b>" + response.originator.name + "</b>";
            
        });
    })

});

function toggleShow(){
    var doc = document.getElementById("loader");
    doc.classList.remove("hide");
}
function toggleHide(){
    var doc = document.getElementById("loader");
    doc.classList.add("hide");
}