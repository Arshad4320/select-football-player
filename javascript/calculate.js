//player expenses common function
function playerExpensesTotalUpdate(elementId) {
    const calculateField = document.getElementById(elementId);
    const calculateString = calculateField.value;
    const previousCalculate = parseInt(calculateString);
    calculateField.value = ""
    return previousCalculate;
}

document.getElementById('calculate-btn').addEventListener('click', function () {

    //player expenses
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const previousExpenses = parseInt(playerExpensesString);

    const listContent = document.getElementById('list-content');
    const listContentString = listContent.innerText;
    const listContentPrevious = parseFloat(listContentString)
    const totalPlayerBudget = listContent.childElementCount

    const totalExpenses = playerExpensesTotalUpdate('calculate-field') * totalPlayerBudget;
    playerExpenses.innerText = totalExpenses;

})
//player expenses calculate

document.getElementById('total-calculate').addEventListener('click', function () {
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const previousExpenses = parseInt(playerExpensesString);

    const managerCost = playerExpensesTotalUpdate('manager-cost')
    const coachCost = playerExpensesTotalUpdate('coach-cost')
    const totalCost = managerCost + coachCost + previousExpenses;

    const finalTotal = document.getElementById('total-calculator');
    const finalTotalString = finalTotal.innerText;
    const previousTotal = parseInt(finalTotalString);
    finalTotal.innerText = totalCost

})
//button select function
const listContent = document.getElementById('list-content');
function addPlayerList(player) {
    if (listContent.childElementCount < 5) {
        let addList = document.createElement('li');
        addList.appendChild(document.createAttribute(player.innerText));
        listContent.appendChild(addList);
    }
    else {
        alert("Can't add more than 5 players!")
        return;
    }
}

function disableBtn(playerID) {
    if (listContent.childElementCount < 5) {
        playerID.disabled = 'true';
        playerID.style.backgroundColor = 'white';
        playerID.style.color = 'black';
        playerID.innerText = "SELECTED";
    }
}


