var house = prompt("Do you want to buy a Villa or a Flat?");

while(house != 'Villa' && house !='Flat')
{
     house = prompt ("Do you want to buy a Villa or a Flat?");
}

var housetype = "";

if(house == "Villa")
{
   housetype = '<img src="villa.jpg" />';
}

else if(house == "Flat")

{
    housetype = '<img src="flat.png" />';
}
var numofRooms = prompt ("How many rooms do you want?");

var result = '';

for(var i = 0;i < numofRooms; i++)
{
    result = result + housetype;
}

document.write(result);







// function declaration
function alertFunction() {

    alert('Go down to see the available houses');
}
 alertFunction();
var printing = function () {
for (var i = 0; i <= 3; i++) {
document.write('Buy A House right now' + '<br>');
}
}
printing();


// function expression
function EFunction() {

    alert('Welcome again');
}
EFunction();
var againprint = function () {
for (var i = 0; i <= 3; i++) {
document.write('the best locations ' + '<br>');
}
}
againprint();