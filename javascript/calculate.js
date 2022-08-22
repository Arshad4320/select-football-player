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
    const listContentprvious = parseFloat(listContentString)

    const totalExpenses = playerExpensesTotalUpdate('calculate-field') * listContent.childElementCount;
    playerExpenses.innerText = totalExpenses;

})

document.getElementById('total-calculate').addEventListener('click', function () {
    const calculateField = document.getElementById('calculate-field');
    const calculateString = calculateField.value;
    const previousCalculate = parseInt(calculateString);
    calculateField.value = ""


    const managerCost = playerExpensesTotalUpdate('manager-cost')
    const coachCost = playerExpensesTotalUpdate('coach-cost')
    const totalCost = managerCost + coachCost;

    const finalTotal = document.getElementById('total-calculator');
    const finalTotalString = finalTotal.innerText;
    const previousTotal = parseInt(finalTotalString);
    finalTotal.innerText = totalCost


})