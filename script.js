let winningButton = Math.floor(Math.random() * (3 - 1 + 1) + 1);

function checkButton(buttonId) {
    if (buttonId === winningButton) {
        document.getElementById('btn' + buttonId).classList.add('winner');
    } else {
        document.getElementById('btn' + buttonId).classList.add('loser');
    }
}

function generateButtons() {
    const numButtons = parseInt(document.getElementById('myInput').value);

    winningButton = Math.floor(Math.random() * numButtons + 1);
    
    const container = document.getElementById('buttons-container');
    container.innerHTML = '';

    winningButton = Math.floor(Math.random() * numButtons) + 1;
    console.log("Noul câștigător este butonul: " + winningButton); 

    for (let i = 1; i <= numButtons; i++) {
        const button = document.createElement('button');
        button.id = 'btn' + i;
        button.innerText = 'Button ' + i;
        button.className = "btn btn-outline-secondary";
        button.onclick = function() { checkButton(i) };
        container.appendChild(button);
    }
}