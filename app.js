'use strict'

window.onload = init;

function init() {
    
    const selectList = document.getElementById('dropdownList');
    selectList.onchange = function () {
        const displayInfo = document.getElementById('displayInfo');
        displayInfo.innerHTML = '';
    }
    selectList.appendChild(new Option('Select A Team', ''))
    loadTeamSelected(teams);
    
    const submitForm = document.getElementById('submitForm');
    submitForm.onsubmit = function (event) {
        event.preventDefault();
        displayTeamInfo();
    }
    return false;
}
// stored data in an array of objects
let teams = [
    
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs",
    plays:"Kansas City, MO"},
];


//When this function is called it will load dropdown menu
function loadTeamSelected(_teams) {
    
    const selectList = document.getElementById('dropdownList');
    
    _teams.forEach((item) => {
        let teamOption = new Option(item.name, item.code);
        selectList.appendChild(teamOption)
    })
};
// Call this function to find the team object == selectedlist value
function findTeam(_teams, _code) {
    for (let i = 0; i < _teams.length; i++) {
        if (_teams[i].code == _code) {
            return _teams[i]
        } 
    }
}
// function to display chosen team name, code and plays
function displayTeamInfo() {

    const selectedTeam = document.getElementById('dropdownList').value;
    const displayInfo = document.getElementById('displayInfo');

    let teamInfo = findTeam(teams, selectedTeam); // returns the object in an array 
    
    displayInfo.innerHTML = `You selected the ${teamInfo.name} (${teamInfo.code}) who plays in ${teamInfo.plays} `

}








