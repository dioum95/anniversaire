

$(document).ready(function(){
    $(".titre").one("click",function(){
        $(".p1").prepend("<p>Happy Birthday To You</p>");
        $(".p1").on('mouseover', function(){
            $(".p1").text("Je te souhaite tout le bonheur du monde")  
        })

    });
    $(".p1").one("click", function(){
        $(".p2").prepend("<p>Happy Birthday To You</p>");
        $(".p2").on('mouseover', function(){
            $(".p2").text("Dounal werwl amal jam bou barry")  
        })
      });
    $(".p2").one("click", function(){
        $(".p3").prepend("<p>Happy Birthday To You</p>");
        $(".p3").on('mouseover', function(){
            $(".p3").text("Tu es une personne formidable vis bien et longtemps")  
        }) 
      });
  });