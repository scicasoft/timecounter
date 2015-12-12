/*
* timecounter
* Cheikh Sidya CAMARA : scicasoft ( scicasoft@gmail.com )
* Ce plugin permet d'afficher l'equivalent d'un temps en secondes en francais comme le compteur de temps de facebook.
*/

(function($){
    $.fn.extend({ 
        timecounter: function(options) {
            var defauts={"intervalle": 1000};
            var params=$.extend(defauts, options);

            return this.each(function() {
                function recharger(e) {
                    var secs = parseInt(e.attr('dsesc'))+1;
                    var texte = "";
                    
                    if (secs < 60)
                        texte = "il y'a quelques secondes";
                    else if (secs < 2*60)
                        texte = "il y'a environ 1 minute";
                    else if (secs < 60*60)
                        texte = "il y'a environ "+parseInt(secs/60)+" minutes";
                    else if (secs < 2*60*60)
                        texte = "il y'a environ 1 heure";
                    else if (secs < 24*60*60)
                        texte = "il y'a environ "+parseInt(secs/(60*60))+" heures";
                    else if (secs < 2*24*60*60)
                        texte = "hier";
                    else
                        texte = "il y'a "+parseInt(secs/(24*60*60))+" jours";
                    e.attr('dsesc', secs);
                    e.html(texte);
                }

                var e = $(this);
                recharger(e);
                
                setInterval(function(){
                    recharger(e);
                },params.intervalle);
            });
        }
    });
})(jQuery);
