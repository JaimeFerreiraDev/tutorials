var name = "John Smith";
var firstunit= "Mathematics";
var grades1 = 11.4;
var secondunit = "Literature";
var grades2 = 2.5;

window.onload=function(){
    let aux ="";
    let aux2 ="";
    if (grades1<9.5) {
        aux2="failed";
       } else {
        aux2="unit";
       }
    aux+="<div id='unit1' class = '"+aux2+"'>";
    aux+="<div id='initials1' class = 'initials'></div>";
    aux+="<div><h1 id='unitTitle1' class =  'unitTitle'></h1>";
    aux+="<h2 id='unitGrade1' class = 'unitGrade'></h2></div></div>";
    if (grades2<9.5) {
        aux2="failed";
       } else {
        aux2="unit";
       }
    aux+="<div id='unit2' class = '"+aux2+"'>";
    aux+="<div id='initials2' class = 'initials'></div>";
    aux+="<div><h1 id='unitTitle2' class =  'unitTitle'></h1>";
    aux+="<h2 id='unitGrade2' class = 'unitGrade'></h2></div></div>";


    document.getElementById("grades").innerHTML = aux;
    document.getElementById("student").innerHTML = name += " Grades";

    document.getElementById("initials1").innerHTML = firstunit.substring(0,2);
    document.getElementById("unitTitle1").innerHTML = firstunit;
    document.getElementById("unitGrade1").innerHTML = "Grade: "+grades1;

    document.getElementById("initials2").innerHTML = secondunit.substring(0,2);
    document.getElementById("unitTitle2").innerHTML = secondunit;
    document.getElementById("unitGrade2").innerHTML = "Grade: "+grades2;

}