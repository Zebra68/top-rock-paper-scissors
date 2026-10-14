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

function getHumanChoice() {
    let b = window.prompt("Choose (R)ock (P)aper or (S)cissors")
    if (b == "R") {
        console.log("Rock");
        return "Rock";
    } else if (b == "P") {
        console.log("Paper");
        return "Paper";
    } else if (b == "S") {
        console.log("Scissor");
        return "Scissor";
    } else {
        console.log("Oops");
    }
}
getHumanChoice();