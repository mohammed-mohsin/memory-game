let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];


let userClickedPattern = [];

let started = false;

let level = 0;
$(".s-button").click(function(){
    if(!started){
        $("#level-title").text("Level-" + level);
        nextSequence();
        started = true;
    }


});


$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

});


function checkAnswer(currentLevel){

    
     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
  
       
        if (userClickedPattern.length === gamePattern.length){
  
         
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {

        playSound("wrong");

        $("body").addClass("game-over");
        
        $("#level-title").text("Well Done!!, The Score Is " +(level-1)+ " Try Again"   +" Click Start Button to Restart Game");

        if(level==0){
          $("#level-title").text("OOPS!!, The Score Is " +level+" Try Again" +" Click Start Button to Restart Game");

        }
        console.log(level);
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        startOver();

        
  
      }
}


function nextSequence() {

  $(".s-button").css( "display", "none" );

    userClickedPattern = [];

    result = level++;

    $("#level-title").text("Level-" + level);

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


    playSound(randomChosenColour);


};




function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3")
    audio.play();

}



function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {

      $("#" + currentColour).removeClass("pressed");

    }, 100);

}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
    $(".s-button").css( "display", "inline-block" );
}
