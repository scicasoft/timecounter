/*
* timecounter
* Cheikh Sidya CAMARA : scicasoft ( scicasoft@gmail.com )
* Ce plugin permet d'afficher l'equivalent d'un timestamp en francais comme le compteur de temps de facebook.
*/

(function($){
    $.fn.extend({ 
        timecounter: function() {
            return this.each(function() {
                var e = $(this);
                setInterval(function(){
                    var secs = parseInt(e.attr('timestamp'))+1;
                    var texte = "";
                    if (secs < 60)
                        texte = "il y'a quelques secondes";
                    else if (secs < 60*60)
                        texte = "il y'a "+parseInt(secs/60)+" minutes";
                    else if (secs < 24*60*60)
                        texte = "il y'a "+parseInt(secs/(60*60))+" heures";
                    else if (secs < 2*24*60*60)
                        texte = "hier";
                    else
                        texte = "il y'a "+parseInt(secs/(24*60*60))+" jours";
                    e.attr('timestamp', secs);
                    e.html(texte);
                },1000);
            });
        }
    });
})(jQuery);
