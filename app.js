$(document).ready(function() {
    //votre code

    var counter = 0;
    var counterInfini = 0;
    var message = ["allez c'est bon!", "c'est bientôt fini?", "t'en n'a pas marre??", "retournes bosser!!"];


    $("img").click(function() {
        counterInfini++;
        counter++
        $("span").html(counterInfini);
        if (counterInfini == 20) {
            alert("N'as-tu rien d'autre à faire ??");
            counter = 0;
            console.log(counter);
        } else(counterInfini == counterInfini + 20) {
            alert("pfff");

        }
    });

});