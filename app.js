$(document).ready(function() {
    //votre code

    var counter = 0;
    var counterInfini = 0;
    var message = ["allez c'est bon!", "c'est bientôt fini?", "t'en n'a pas marre??", "retournes bosser!!", "çà suffit maintenant!"];

    $("img").click(function() {
        counterInfini++;
        counter++
        $("span").html(counterInfini);
        if (counterInfini == 20) {
            alert("N'as-tu rien d'autre à faire ??");
            counter = 0;
        } else if (counter == 20) {
            counter = 0;
            alert(message[Math.floor(Math.random() * 5)]);
        }
    });
});