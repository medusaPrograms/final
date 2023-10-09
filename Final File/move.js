var intervalID = 0;
var change = 100;

function intervalStart()
{
    var i = 0;
    intervalID = setInterval(function()
    {
        image.style.top = change+"px";
        document.getElementById("msg").innerHTML ="y = " +image.style.top;
        change +=2;
        if (change >500)
        {changeb= 10;}

    },50);


    var i = 0;
    var image = document.getElementById("imgMeme2"); 
    intervalID = setInterval(function()
    {
        image.style.left = change+"px";
        document.getElementById("msg").innerHTML = "x = " + image.style.left;
        change +=2;

    },50);


}


function intervalStop()
{
    clearInterval(intervalID);
} 
function returnhome()
{
    window.open("Starter page.html")
}