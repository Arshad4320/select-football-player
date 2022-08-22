// click button add players name javascript code
document.getElementById('player-button-one').addEventListener('click', function () {
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Lionel Messi'
    listContent.append(li);
    onClick = this.disabled = true;
})
document.getElementById('player-button-tow').addEventListener('click', function () {
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Neymar Jr'
    listContent.append(li);
})
document.getElementById('player-button-three').addEventListener('click', function () {
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Kylian Mbappé'
    listContent.append(li);
})
document.getElementById('player-button-four').addEventListener('click', function () {
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Vítor Machado'
    listContent.append(li);
})
document.getElementById('player-button-five').addEventListener('click', function () {
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Sergio Ramos'
    listContent.append(li);
})
document.getElementById('player-button-six').addEventListener('click', function () {
    const disableButton = disableBtn('player-button-six')
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Renato Sanches'
    listContent.append(li);

})
document.getElementById('player-button-six').addEventListener('click', function () {

})
const selectedPlayerList = document.getElementById('list-content');
function disableBtn(playerID) {
    if (selectedPlayerList.childElementCount < 5) {
        playerID.disabled = 'true';
        playerID.style.backgroundColor = 'white';
        playerID.style.color = 'black';
        playerID.innerText = "SELECTED";
    }
}





