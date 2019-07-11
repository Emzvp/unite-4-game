

$(document).ready(() => {

   
    let randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $('#randNum').html(randNumber);

    
    let white = Math.floor(Math.random() * 17) + 1;
    let lightBlue = Math.floor(Math.random() * 17) + 1;
    let blue = Math.floor(Math.random() * 17) + 1;
    let purple = Math.floor(Math.random() * 17) + 1;

    
    let wins = 0; 
    let losses = 0;  

    let totalScore = 0;
    $('#totalScore').text(totalScore);

    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
    
        reset();
    }

    function lose() {
        losses = losses + 1;
        $('#losses').text(losses);
     
        reset();
    }

    $('#Crystal1').click(() => {
        totalScore = totalScore + white
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
         
        } else if (totalScore > randNumber) {
            lose();
            reset();
           
        }
    });

    $('#Crystal2').click(() => {
        totalScore = totalScore + lightBlue;
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
          
        } else if (totalScore > randNumber) {
            lose();
            reset();
            
        }
    });

    $('#Crystal3').click(() => {
        totalScore = totalScore + blue;
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
            
        } else if (totalScore > randNumber) {
            lose();
            reset();
            
        }
    });

    $('#Crystal4').click(() => {
        totalScore = totalScore + purple;
        $('#totalScore').text(totalScore);
        if (totalScore === randNumber) {
            win();
            reset();
           
        } else if (totalScore > randNumber) {
            lose();
            reset();
           
        }
    });
    function reset() {
        totalScore = 0;
        $('#totalScore').text(totalScore);
        if (totalScore===randNumber||totalScore>randNumber){
            white = Math.floor(Math.random() * 17) + 1;
            lightBlue = Math.floor(Math.random() * 17) + 1;
            blue = Math.floor(Math.random() * 17) + 1;
             purple = Math.floor(Math.random() * 17) + 1;

        }
         let randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
          $('#randNum').html(randNumber);

    }

});

//still need to debug the reset function so that total resets when the random number has been passed
