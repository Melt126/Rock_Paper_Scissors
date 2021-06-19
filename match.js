const game= ()=> {
    let pScore= 0;
    let cScore=0;
    // Start the game
    const startGame= () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen= document.querySelector('.intro');
        const match= document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            console.log(match);
        })
    }
  const playMatch =() => {
      const options = document.querySelectorAll('.options button')
      const computerOptions=['rock', 'paper', 'scissors'];
      const playerHand= document.querySelector('.player-hand');
      const computerHand=document.querySelector('.computer-hand');

      options.forEach(option =>{
          option.addEventListener('click', function(){
            // The computer choice
            const computerNumber= Math.floor(Math.random()*3);
            const computerChoice= computerOptions[computerNumber];
            //here is where we compare hands
            compareHands(this.textContent,computerChoice);

            console.log(`hands/${computerChoice}.png`)
            console.log(`hands/${this.textContent}.png`)
            computerHand.src = `./hands/${computerChoice}.png`;
            playerHand.src = `./hands/${this.textContent}.png`;


            console.log(this.textContent, computerChoice);
            /*(const hands= document.querySelector(this.textContent);
            console.log(hands);
            hands.classList.add('fadeIn');*/
          })
      })
  }

  const updateScore= () =>{
      const playerScore= document.querySelector('.player-score p');
      const computerScore= document.querySelector('.computer-score p');
      playerScore.textContent = pScore;
      computerScore.textContent= cScore;
  }
    

  const compareHands = (playerChoice, computerChoice) =>{
      //update text
      const winner=document.querySelector('.winner');
      

      //checking for draw
      if(playerChoice===computerChoice){
          winner.textContent= 'It is a tie';
          return;
      }
      //checking for rock
      if(playerChoice==='rock'){
          if (computerChoice==='scissors'){
              winner.textContent = 'Player Wins';
              pScore++;
              updateScore();
              return;
          }else{
              winner.textContent = 'Computer Wins';
              cScore++;
              updateScore();
              return;
              
          }
      }
      //checking for paper
      if(playerChoice==='paper'){
        if (computerChoice==='rock'){
            winner.textContent = 'Player Wins'
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'Computer Wins'
            cScore++;
            updateScore();
            return;
        }
    }
    //checking for scissors
    if(playerChoice==='scissors'){
        if (computerChoice==='paper'){
            winner.textContent = 'Player Wins'
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'Computer Wins'
            cScore++;
            updateScore();
            return;
        }
    }


  }

  // Is call all the inner functions
  startGame();
  playMatch();
}
// start the game function
game();