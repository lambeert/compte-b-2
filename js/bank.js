// step-1: gget the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get user enter new withdraw 
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawValueNewString = withdrawAmount.value;
    const withdrawValueNew = parseFloat(withdrawValueNewString);
    if(isNaN(withdrawValueNew))
    {
       alert('Please enter number');
       withdrawAmount.value = '';
       return;

    }
    // update withdraw account balance
    const withdrawBalance = document.getElementById('withdraw-balance');
    const withdrawValuePreviousString = withdrawBalance.innerText;
    // update withdraw account balance
    const withdrawValuePrevious = parseFloat(withdrawValuePreviousString);
    const totalWithdraw = withdrawValuePrevious + withdrawValueNew;

    // get main account balance
    const mainBalance = document.getElementById('total-balance');
    const mainBalanceString = mainBalance.innerText;
    const previousMainBalance = parseFloat(mainBalanceString);
    // after withdraw update main account balance
    if (previousMainBalance >= withdrawValueNew) {
        withdrawBalance.innerText = totalWithdraw;
        const newMainBalance = previousMainBalance - withdrawValueNew;
        mainBalance.innerText = newMainBalance;
    }
    else {
        alert('You dont have enough money in your account');
    }
    withdrawAmount.value = '';

})

// step-2: gget the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //get user input deposit amount
    const depositAmount = document.getElementById('deposit-amount');
    const depositValueNewString = depositAmount.value;
    const depositValueNew = parseFloat(depositValueNewString);
    if (isNaN(depositValueNew)) {
        depositAmount.value = '';
        alert('Please enter number');
        return;
    }
    else {

        // get deposit account balance
        const depositBalance = document.getElementById('deposit-balance');
        const depositBalancePreviousString = depositBalance.innerText;
        const depositBalancePrevious = parseFloat(depositBalancePreviousString);
        // update deposit account balance
        const totalDeposit = depositBalancePrevious + depositValueNew;
        depositBalance.innerText = totalDeposit;
        //get main account balance
        const mainBalance = document.getElementById('total-balance');
        const mainBalanceString = mainBalance.innerText;
        const previousMainBalance = parseFloat(mainBalanceString);
        // after deposit update main account balance
        const newMainBalance = previousMainBalance + depositValueNew;
        mainBalance.innerText = newMainBalance;
        depositAmount.value = '';
    }


})
var dateGlobale = new Date();

var annee = dateGlobale.getFullYear();
var mois = dateGlobale.getMonth();
var jour = dateGlobale.getDate();
var jour_semaine = dateGlobale.getDay();

var heure = dateGlobale.getHours();
var minute = dateGlobale.getMinutes();
var seconde = dateGlobale.getSeconds();

if( heure < 10 ) { heure = "0" + heure; }
if( minute < 10 ) { minute = "0" + minute; }
if( seconde < 10 ) { seconde = "0" + seconde; }

var MOIS = [ "janvier", "février", "mars", "avril" ];
var JOUR_SEMAINE = [ "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi" ];

mois = MOIS[mois];
jour_semaine = JOUR_SEMAINE[jour_semaine];

document.getElementById("heure").innerHTML= jour_semaine + " " + jour + " " + mois + " " + annee + " - " + heure + ":" + minute + ":" + seconde;