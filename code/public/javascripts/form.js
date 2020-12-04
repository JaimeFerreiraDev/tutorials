var students
var unit1 = {
  name:"Mathematics",
  semester:3,
  ects:6
};

var unit2 = {
  name:"Literature",
  semester:2,
  ects:6
};
var unit3 = {
  name:"Laws",
  semester:1,
  ects:3
};
var unit4 = {
  name:"Informatics",
  semester:1,
  ects:6
};
var unit5 = {
  name:"Cooking",
  semester:2,
  ects:3
};

var arrayOfUnits = [unit1, unit2, unit3, unit4, unit5];

var arrayOfStudents =[
  {name: "John", number: 50039473},
  {name: "Mary", number: 50027488},
  {name: "Anthony", number: 50094213},
]

function calculate() {
    let sposition = document.getElementById("sname").value; 
    let uposition = document.getElementById("uname").value;
    let pgrade = document.getElementById("pgrade").value;
    let ppercentage = document.getElementById("ppercentage").value;
    let tgrade = document.getElementById("tgrade").value;
    let tpercentage = document.getElementById("tpercentage").value;
    let grade= (pgrade*ppercentage)+(tgrade*tpercentage);

    //1st verification (grade)
    if(isGradeValid(pgrade)){
       //1st verification (percentage)
       if(isPercentageValid(ppercentage)){
        document.getElementById("error1").className = "hide";
      }else{
        document.getElementById("error1").className = "show";
        document.getElementById("error1").innerHTML = "Percentages are between 0 and 1";
      }
    }else{
      document.getElementById("error1").className = "show";
      document.getElementById("error1").innerHTML = "Grades are between 0 and 20";
     
    }
    
    
    
    //2nd verification (grade)
    if(isGradeValid(tgrade)){
      //2nd verification (percentage)
      if(isPercentageValid(tpercentage)){
        document.getElementById("error2").className = "hide";
      }else{
        document.getElementById("error2").className = "show";
        document.getElementById("error2").innerHTML = "Percentages are between 0 and 1";
      }
    }else{
      document.getElementById("error2").className = "show";
      document.getElementById("error2").innerHTML = "Grades are between 0 and 20";
    }
    //3rd verification (percentage)
    if(percentagesAddUp(ppercentage, tpercentage)){
      document.getElementById("error3").className = "hide";
    }else{
      document.getElementById("error3").className = "show";
      document.getElementById("error3").innerHTML = "Percentages must add to 1.0";
    }
    //if everything is ok, show page with verything
    if(percentagesAddUp(ppercentage, tpercentage) && isGradeValid(tgrade) && isPercentageValid(ppercentage) && isPercentageValid(tpercentage)&& isGradeValid(pgrade)){
      let obj={
        name:arrayOfStudents[sposition].name,
        unit:arrayOfUnits[uposition].name,
        pgrade:pgrade,
        ppercentage:ppercentage,
        tgrade:tgrade,
        tpercentage:tpercentage,
        finalgrade:grade
      }
      let json= JSON.stringify(obj);
      sessionStorage.setItem("graded",json);
      window.location = "graded.html";
    }
    
}

window.onload=function(){
  let stringAux = "";
  for (let i=0; i < arrayOfStudents.length; i++) {
    stringAux+="<option value="+i+">"+arrayOfStudents[i].name+"</option>";
  }    
  document.getElementById("sname").innerHTML = stringAux;

  stringAux = "";
  for (let i=0; i < arrayOfUnits.length; i++) {
    stringAux+="<option value="+i+">"+arrayOfUnits[i].name+"</option>";
  }    
  document.getElementById("uname").innerHTML = stringAux;
}

function isGradeValid(grade){
  if(grade<=20 && grade>=0){
    return true; 
  }else{
    return false;
  }
}

function percentagesAddUp(tpercent, ppercent){
  let x = parseFloat(tpercent);
  let y = parseFloat(ppercent);
  if((x+y)==1.0){
    return true;
  }else{
    return false;
  }
}

function isPercentageValid(percent){
  let x = parseFloat(percent);
  if(x<=1.0 && x>=0.0){
    return true;
  }
  return false;
}
