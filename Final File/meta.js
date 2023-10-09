function checkinput()
{
    var alphaID = document.getElementById("Atrue").value;


    var omegaID = document.getElementById("Ofalse").value;
    

    var copilot = alphaID + " " + omegaID;

    var code = "you are now in the matrix";
    var failsafe = "failure in compliance"

    var len = copilot.length;
   

    var variant = document.getElementById("infinity").value;
    
   

    if (len >20)
    {
        document.getElementById("fileupload").innerHTML = "invalid copilot number";
        alert(failsafe)


    } else if ((variant=5))
    {
        document.getElementById("fileupload").innerHTML="valid copilot"
        alert(code)
       
    }
    else if ((variant>5) && (variant<5))
    {
        document.getElementById("fileupload").innerHTML="invalid copilot"
        alert(failsafe)
    }

}
function returnhome()
{
    window.open("Starter page.html")
}