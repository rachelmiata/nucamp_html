function rollDice() {
    let goldCoins = 0;
    for(let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll < 4) {
            continue;
        }
        if ((roll === 4) && (goldCoins === 0)) {
            continue;
        }
        if ((roll === 4) && (goldCoins > 0)) {
            alert('You lose one gold coin.'); 
            goldCoins -= 1;
            alert('You have a total of ' + goldCoins + ' gold coins!');
            continue;
        }
        alert('Congratulations, you win ' + roll + ' gold coins!'); 
        goldCoins += roll;
        alert('You have won a total of ' + goldCoins + ' gold coins!');
        }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}