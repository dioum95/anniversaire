// Création d'une fonction qui empeche le code à l'interieur $(document).ready(function(){})
//de s'exécutera que lorsque la page Document Object Model (DOM) sera prête pour l'exécution du code JavaScript
$(document).ready(function(){
    //ça d'afficher le p1 en cliquant sur le titre
    $(".titre").one("click",function(){
        $(".p1").prepend("<p>Happy Birthday To You</p>");
         //On change le texte du paragraphe en surfant sur le paragraphe
        $(".p1").on('mouseover', function(){
            $(".p1").text("Je te souhaite tout le bonheur du monde")  
        })

    });
    //ça d'afficher le p2 en cliquant sur le p1
    $(".p1").one("click", function(){
        $(".p2").prepend("<p>Happy Birthday To You</p>");
        //On change le texte du paragraphe en surfant sur le paragraphe
        $(".p2").on('mouseover', function(){
            $(".p2").text("Dounal werwl amal jam bou barry")  
        })
      });
    //ça d'afficher le p3 en cliquant sur le p2
    $(".p2").one("click", function(){
        $(".p3").prepend("<p>Happy Birthday To You</p>");
        //On change le texte du paragraphe en surfant sur le paragraphe
        $(".p3").on('mouseover', function(){
            $(".p3").text("Tu es une personne formidable vis bien et longtemps")  
        }) 
      });
