var vaccinated = true;
var name = 'Michael';
var message = 'Hi '+ name +' your vaccination form has been recieved ';

var element = document.getElementById('corncurls');

element.textContent = message;

var vCard = {
name: 'Michael Reid',
vaccinationType: 'Pfizer',
sex: 'M',
Age: '27',
fullVacc: true,
dose2: new Date('Nov 5, 2021 10:00:00'),
 getDifference: function(){
 var today = new Date()
 var difference = today.getTime() - vCard.dose2.getTime();
 difference = Math.floor(difference/84600000);
 return difference;
 }
};

var date = vCard.getDifference();
var daysUntil = 14 - date;


if (vCard.fullVacc == true) {
 if (date >= 14) {
 var message = document.getElementById("message");
 message.textContent= "You're Vaccine has been Approved";
 } else {
   var message = document.getElementById("message");
    message.textContent= "You've got " + daysUntil + " days remaining before being fully vaccinated.";
 }
 } else { var message = document.getElementById("message");
    message.textContent= "You haven't been vaccinated. Entry Denied."
}
