
var arrayOfStudents=[
    {name:"John Smith", number: 201, id:12},
    {name:"Mary Jane", number: 512, id:31},
    {name:"Jane Dow", number: 45, id:3}
]

window.onload=function(){
    let aux=""
    for(let i=0; i<arrayOfStudents.length; i++){
        aux+="<div class='student' onclick='showStudent("+i+")'><h2>"+arrayOfStudents[i].name+"</h2><h3>number: "+arrayOfStudents[i].number+"</h3></div>";
    }
    
    document.getElementById("students").innerHTML = aux;
}

function showStudent(index){
    sessionStorage.setItem("sindex",index);
    sessionStorage.setItem("sname",arrayOfStudents[index].name);
    window.location = "studentGrades.html";
}