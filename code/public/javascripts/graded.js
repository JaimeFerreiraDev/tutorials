
window.onload=function(){
    let json = sessionStorage.getItem("graded");
    let obj = JSON.parse(json);
    document.getElementById("heading1").innerHTML = "Grades of "+obj.name+" at unit "+obj.unit;
    document.getElementById("heading2").innerHTML = "Grade of project: "+obj.pgrade;
    document.getElementById("heading3").innerHTML = "Grade of test: "+obj.tgrade;
    document.getElementById("heading4").innerHTML = "Final Grade: "+obj.finalgrade.toFixed(2)+" (project "+obj.ppercentage+"% + test "+obj.tpercentage+"%)"
}