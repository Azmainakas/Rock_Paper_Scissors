let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score"); 
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    // console.log(Math.floor(Math.random() * 3));
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    
}


function game(userChoice){
    // console.log(userChoice);
    const computerChoice = getComputerChoice();
    // console.log("user choice => "+ userChoice);
    // console.log("comp choice => "+ computerChoice);
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            // console.log("User Wins");
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":        
        case "ps":
            // console.log("User Loses");
            loss(userChoice, computerChoice);
            break;
        case "ss":
        case "rr":        
        case "pp":
            // console.log("It's Draw");
            draw(userChoice, computerChoice);
            break;
    }

}
function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";

}
function win(userChoice , computerChoice){
    userScore++;
    // userScore_span.innerText = userScore; we can use innerText too 
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).fontcolor("black").sub();
    const smallCompWord = "comp".fontsize(3).fontcolor("black").sub();
    // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";

    // Use of templete literals 
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You win👌`;

    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'),1000);
}
function loss(userChoice, computerChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).fontcolor("black").sub();
    const smallCompWord = "comp".fontsize(3).fontcolor("black").sub();
    // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";

    // Use of templete literals 
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} . You loss....😢`;

    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'),1000);
}
function draw(userChoice, computerChoice){
    // userScore_span.innerHTML = userScore;
    // compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).fontcolor("black").sub();
    const smallCompWord = "comp".fontsize(3).fontcolor("black").sub();
    // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";

    // Use of templete literals 
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} . It's draw.`;

    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'),1000);
}


function main(){
    rock_div.addEventListener('click',() =>
        game("r")
    );
    paper_div.addEventListener('click',() =>
        game("p")
    );
    scissors_div.addEventListener('click',() =>
        game("s")
    );
}
main();
