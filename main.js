function getfile(file,callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

getfile("data.json", function(text) {
let data = JSON.parse(text);
console.log(data);
career(data.career);
education(data.education);
skill(data.skills);

})

var right=document.querySelector(".content");
function career(car){
  console.log(car.info);
var p=document.createElement("p");
p.textContent=car.info;
right.appendChild(p);
}
function education(edu){
  var heading=document.createElement("h1");
  heading.textContent="educational Qualificaions";
  right.appendChild(heading);
  var hr=document.createElement("hr")
  right.appendChild(hr);
var list=document.createElement("ul");
right.appendChild(list);
for(var i=0; i<edu.length; i++){
  console.log(edu[i].degree);
  var litem=document.createElement("li");
  litem.textContent=edu[i].degree;
  list.appendChild(litem);
  var inst=document.createElement("p");
  inst.textContent=edu[i].institute;
  list.appendChild(inst);
  var year=document.createElement("p");
  year.textContent=edu[i].data;
  list.appendChild(year);
}
}

function skill(sk){
  var heading=document.createElement("h1");
  heading.textContent="skills";
  right.appendChild(heading);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var table=document.createElement("table");
right.appendChild(table);
var table_date="";
for(var i=0; i<sk.length; i++){
  table_date+="<tr><td>"+sk[i].sname+"</td><td>"+sk[i].sdate+"</td></tr>";
}
table.innerHTML=table_date;
table.border="1";
}
