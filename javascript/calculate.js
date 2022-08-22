function playerExpensesTotalUpdate(elementId) {
    const calculateField = document.getElementById(elementId);
    const calculateString = calculateField.value;
    const previousCalculate = parseInt(calculateString);
    calculateField.value = ""
    return previousCalculate;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
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