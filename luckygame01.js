function playGame(playerMove){
  const computerMove = computerDecision();
  let result = '';

  if (playerMove === 'Lion'){
    if (computerMove === 'Bear'){
      result = 'Oop! you loose';
    }else if(computerMove === 'Lion'){
      result = 'Ties';
    }else if(computerMove === 'Tiger'){
      result = 'congratulations you win';
    }
  }

  else if (playerMove === 'Tiger'){
    if (computerMove === 'Lion'){
      result = 'Oop! you loose';
    }else if(computerMove === 'Tiger'){
      result = 'Ties';
    }else if(computerMove === 'Bear'){
      result = 'congratulations you win';
    }
  }

  else if (playerMove === 'Bear'){
    if (computerMove === 'Lion'){
      result = 'Oop! you loose';
    }else if(computerMove === 'Tiger'){
      result = 'congratulations you win';
    }else if(computerMove === 'Bear'){
      result = ' Ties';
    }
  }

  alert(`you pick ${playerMove} computer picks ${computerMove}. ${result}`);
}


function computerDecision(){
  let computerMove = '';
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3){
      computerMove = 'Lion';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'Tiger';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1){
      computerMove = 'Bear';
  }
  return computerMove;
}