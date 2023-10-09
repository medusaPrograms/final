function attackalert()
{
    var enemy = Math.ceil(Math.random() * 100);
    document.getElementById("xlabel").innerHTML = enemy;
}

 function funalert()
 {
    var attack = Math.ceil(Math.random() * 100);// this is where the numbers are randomly genertaed
    document.getElementById("ylabel").innerHTML = attack



    var enemy = Math.ceil(Math.random() * 100);
    document.getElementById("xlabel").innerHTML = enemy
    


    if (attack>enemy ) {
        alert("you win");
    } else {
        alert("you lose");
    }
 }
//note i cant seem to get the Alert to work
function returnhome()
{
    window.open("Starter page.html")
}