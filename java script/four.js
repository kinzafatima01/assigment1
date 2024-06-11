// Number 1.

document.write("Result:" + "</br>")
var a = 10;

document.write("The value of a is:" + a + "</br>" + "</br>" +"</br>" + "<hr>");

document.write("The value of ++a is:" + ++a + "</br>" + "</br>");
document.write("Now the value of is:" + a + "</br>" + "</br>")

document.write("The value of ++a is:" + a++ + "</br>" + "</br>");
document.write("Now the value of is:" + a + "</br>" + "</br>")


document.write("The value of --a is:" + --a + "</br>" + "</br>");
document.write("Now the value of is:" + a + "</br>" + "</br>")


document.write("The value of --a is:" + a-- + "</br>" + "</br>");
document.write("Now the value of is:" + a + "</br>" + "</br>")


// Number 2.

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

var result = --a;
var result = --a - --b;
var result = --a - --b + ++b;
var result = --a - --b + ++b + b--;

document.write(result ,"</br>" , "</br>");



// Number 3.

var userName = prompt("WhaT Is Your Name?");
alert("Hello!" + userName);


// Number 4.

var table = +prompt("Enter a number of table you want to print here...", "5");
var counter = 1;
var incr = 1;

document.write(table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++);



// Number 5.

document.write("<h1>" +"Subject Total Marks Obtained Marks Percentage:" + "</h1>")

var english = prompt("Enter 1ST Subject Name ");
var urdu = prompt("Enter 2ND Subject Name ");
var math = prompt("Enter 3RD Subject Name ");

var total = 100;
var sumOfTotal = (total + total+ total);
var obtMark1 = +prompt("Enter Your Number Of " + english);
var obtMark2 = +prompt("Enter Your Number Of " + urdu);
var obtMark3 = +prompt("Enter Your Number Of " + math);
var finalObtMark = (obtMark1+obtMark2+obtMark3);

var per1 = obtMark1 / total * 100
var per2 = obtMark2 / total * 100
var per3 = obtMark3 / total * 100
var finalPer = (per1+per2+per3)/100*100;

document.write("<table border = '5px'>" + "<tr>"+ "<th>"+ "Subjects" +"</th>" +
"<th>"+ "Total Marks" +"</th>"+ 
"<th>"+ "Obtained Marks" +"</th>"+  
"<th>"+ "Percentage" +"</th>"+ "</tr>" +
"<tr>" + "<td>" + english +"</td>" + "<td>" + total +"</td>" + "<td>" + obtMark1 + "</td>" + "<td>" + per1  + "%"+ "</td>" + "</tr>" +
"<tr>"+"<td>" + urdu +"</td>" +"<td>" + total +"</td>" + "<td>" + obtMark2 + "</td>" + "<td>" + per2 + "%" + "</td>" + "</tr>"  + 
"<tr>" +"<td>" + math +"</td>" +"<td>" + total +"</td>" + "<td>" + obtMark3 + "</td>" +"<td>" + per3 + "%" + "</td>" + "</tr>" +
"<tr>"+"<td>"+ " " +"</td>"+"<td>"+"<b>"+ sumOfTotal + "</b>"+"</td>" + "<td>"+"<b>"+ finalObtMark +"</b>"+"</td>"+"<td>"+ "<b>"+ finalPer + "%" +"</b>" + "</td>"+"</tr>"+
"</table>");
