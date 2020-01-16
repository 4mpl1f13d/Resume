var name = "Jeremy Peters";
var coName = name;
var jobTitle = 'IT Manager';
var desc = 'I love dogs!\n';

function displayPosition(coName, jobTitle, desc) {
    console.log('Name:', coName.toUpperCase());
    console.log('Career:', jobTitle);
    console.log('Description:', desc);
}

displayPosition(coName, jobTitle, desc);

var theInt = '* TV (The best) \n* Computers \n* Movies... especially any Marvel / DC ports\n * Music\n';
function myInterests() {
    console.log('My Interests: \n', theInt);
}

myInterests();

let prevExp = '* Carroll High School Graduate\n* Attended University of Alabama \n* Jan 2020 - Support.com - worked as Escalations Supervisor with Support HelpDesk for Central division \n* Jan 2017 - Alden Systems - worked as Software Support Analyst maintaining the external customer facing Help Desk \n* Jan 2010 - Code Red - Owned and operated my own electronic repair business \n* A+, Net+ experience'

function myPreviousExperience() {
    console.log('My Previous Experience: \n', prevExp);
}

myPreviousExperience();
console.log('My Skills: \n');
function displaySkill(skillName, isCool) {
    if (isCool === true) {
        console.log('BAM:' + skillName);
    }
    else {
        console.log('* ' + skillName)
    }
}

displaySkill('Spanish', false);
displaySkill('Trumpet', false);
displaySkill('Show Choir', false);
displaySkill('C++', false);
displaySkill('Computers', true);
displaySkill('Electronics', true);
