function getComputerChoice() {
    const a = Math.random();
    if (a < .33) {
        console.log("Rock");
        return "Rock";
    } else if (a > .66) {
        console.log("Scissor");
        return "Scissor";
    } else {
        console.log("Paper");
        return "Paper";
    };
}
getComputerChoice();