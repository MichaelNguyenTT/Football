'use strict'

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
];   

// function to display dropdown items
function loadteamSelected(_teams) {
    
    const selectedTeam = document.getElementById('selectedList');
    let teamsLength = _teams.length;

    for (let i = 0; i < teamsLength; i++) {
        // creates the option element and sets the text and value
        let teamOption = new Option(teams[i].name, teams[i].code); 

        console.log(selectedTeam.appendChild(teamOption));
        selectedTeam.appendChild(teamOption);

        // output of this function:
        // name: "" and code: "" <- the stored value
    }
};

function findTeam(_teamList, _code) {
    let matchingList = [];

    for (let i = 0; i < _teamList.length; i++) {
        if (_teamList[i].code == _code) {
            matchingList.push(_teamList[i])
        }
    }
    return matchingList;
};

function getTeamName() {

    const selectedTeam = document.getElementById('selectedList').value;
    const displayInfo = document.getElementById('displayTeamInfo');
    // passed the teams array and selectedteam value to the function
    const teamList = findTeam(teams, selectedTeam); // returns the object in an array that contains selectedteam value
    
    // forEach loop to display each 
    teamList.forEach((item) => { 
        displayInfo.innerHTML = `You selected the ${item.name} (${item.code}) who plays in ${item.plays} ` 
    })
};

window.onload = init; 
    
function init() {
    //run the stateSelected()
    loadteamSelected(teams);
    const onSelectChange = document.getElementById('selectedList');
    onSelectChange.onchange = function () {
        const displayInfo = document.getElementById('displayTeamInfo');
        displayInfo.innerHTML = ''
    }

    const submitForm = document.getElementById('selectForm');
    submitForm.onsubmit = function (event) {
        event.preventDefault();
        getTeamName()
    }
}















