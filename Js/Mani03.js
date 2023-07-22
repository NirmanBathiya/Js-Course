var conf = confirm("do you play rock paper scissors");
if(conf){

var game = prompt("Enter>>>>Rock,Paper or scissors");
if(game){
   let Player = game.trim().toLowerCase();
if(Player ==="rock" || Player ==="paper" || Player ==="scissors"){
  
  let computer = Math.floor(Math.random()*3 +1);
  
  let complyer = computer === 1 ?"rock"
  :computer === 2 ?"paper"
  :"scissors";

  let result = complyer ===Player ? "Tie game"
  : complyer === "rock" && Player ==="paper" ?"computer win.."
  : complyer === "paper" && Player ==="scissor" ?"computer win.."
  : complyer === "rock" && Player ==="scissor" ?"computer win.."
  :"plyer is winn...."
  alert(result);

  let playagain = confirm("do you play agin?....");
  playagain ? location.reload() : alert("ok.....");


}else{
    alert("nirman bathiya");
}                    
    }else{
        alert("Hmmmm......");
    }
}else{
    alert("HMMMM...OK>>>>");
}
const c = 40; // global scope
console.log(c);
{

    const c = 12; // local scope 
    console.log(c);
}

const MyArry = [];

MyArry[0] = "Nirman"; 

MyArry.push("Bathiya");

console.log(MyArry);

const Newone = MyArry.sh 




//same part with function

const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame ? playGame() : alert("Ok, maybe next time.");
  };
  
  // Game flow function
  const playGame = () => {
    while (true) {
      let playerChoice = getPlayerChoice();
      playerChoice = formatPlayerChoice(playerChoice);
      if (playerChoice === "") {
        invalidChoice();
        continue;
      }
      if (!playerChoice) {
        decidedNotToPlay();
        break;
      }
      playerChoice = evaluatePlayerChoice(playerChoice);
      if (!playerChoice) {
        invalidChoice();
        continue;
      }
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
      displayResult(result);
      if (askToPlayAgain()) {
        continue;
      } else {
        thanksForPlaying();
        break;
      }
    }
  };

  initGame(); // you mest call the each function ...

