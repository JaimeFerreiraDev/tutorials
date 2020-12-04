var failCounter=0;
var passCounter=0;
var arrayOfStudents = [
    [{name:"Mathematics",grade:8.3,semester:3,ects:6},
    {name:"Literature",grade:11.2,semester:2,ects:6},
    {name:"Laws",grade:18.5,semester:1,ects:3},
    {name:"Informatics",grade:14.3,semester:1,ects:6},
    {name:"Cooking",grade:7.4,semester:2,ects:3}],

    [{name:"Mathematics",grade:8.3,semester:3,ects:6},
    {name:"Literature",grade:11.2,semester:2,ects:6},
    {name:"Laws",grade:18.5,semester:1,ects:3}],

    [{name:"Mathematics",grade:8.3,semester:3,ects:6},
    {name:"Literature",grade:11.2,semester:2,ects:6}]
]


window.onload=function(){

    let sindex = sessionStorage.getItem("sindex");
    let sname = sessionStorage.getItem("sname");

    let aux="";
    let sum=0;
    let aux2="";
    let divider=0;
    //this cycle creates every object visually through #returnObjectHtml
    for (let i=0; i < arrayOfStudents[sindex].length; i++) {
        aux+=returnObjectHtml(arrayOfStudents[sindex][i]);
        sum+=arrayOfStudents[sindex][i].grade;
        divider++;
    }    

    aux2+="<summary>Average: "+(sum/divider).toFixed(2)+"</summary>"
    aux2+="<p>"+failCounter+" Failed Units</p>"
    aux2+="<p>"+passCounter+" Passed Units</p>"
    document.getElementById("student").innerHTML = sname += " Grades";
    document.getElementById("grades").innerHTML = aux;
    document.getElementById("details").innerHTML = aux2;
}

function returnObjectHtml(unit){
    let aux ="";
    let aux2 ="";
    if (unit.grade<9.5) {
        aux2="failed";
        failCounter++;
       } else {
        aux2="unit";
        passCounter++;
       }
    aux+="<div class = '"+aux2+"'>";
    aux+="<div class = 'initials'>"+unit.name.substring(0,2)+"</div>";
    aux+="<div><h1 class =  'unitTitle'>"+unit.name+"</h1>";
    aux+="<h2 class = 'unitInfo'>"+unit.grade+"</h2>";
    aux+="<h2 class = 'unitInfo'>Semester: "+unit.semester+"</h2>"
    aux+="<h2 class = 'unitInfo'>ECTS: "+unit.ects+"</h2></div></div>"

    return aux;
}