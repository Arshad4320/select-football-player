// click button add players name javascript code

document.getElementById('player-button-one').addEventListener('click', function () {
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Lionel Messi'
    listContent.append(li);
    addPlayerList('player-button-one')


})
document.getElementById('player-button-tow').addEventListener('click', function () {
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Neymar Jr'
    listContent.append(li);
    addPlayerList('player-button-tow')
})
document.getElementById('player-button-three').addEventListener('click', function () {
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Kylian Mbappé'
    listContent.append(li);
    addPlayerList('player-button-three')
})
document.getElementById('player-button-four').addEventListener('click', function () {
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Vítor Machado'
    listContent.append(li);
    addPlayerList('player-button-four')
})
document.getElementById('player-button-five').addEventListener('click', function () {
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Sergio Ramos'
    listContent.append(li);
    addPlayerList('player-button-five')
})
document.getElementById('player-button-six').addEventListener('click', function () {
    const listContent = document.getElementById('list-content');
    const li = document.createElement('li');
    li.innerText = 'Renato Sanches'
    listContent.append(li);
    addPlayerList('player-button-six');
    disableBtn('player-button-six')
})



