'use strict'

window.onload = init; 

function init() {
    //run the stateSelected()
    loadteamSelected(teams);
    const submitForm = document.getElementById('selectForm');
    submitForm.onsubmit = function (event) {
        event.preventDefault();
        getTeamName();
    }
}

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

    const teamList = findTeam(teams, selectedTeam);
 
    teamList.forEach((item) => {
        document.getElementById('displayTeamInfo').textContent = 
        `The team ${item.name} plays for ${item.plays} ${item.code}` 
    })
};















