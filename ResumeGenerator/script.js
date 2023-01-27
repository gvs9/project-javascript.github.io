const expField=()=>{

    let node=document.createElement('textarea');
    node.classList.add('form-control');
    node.classList.add('expfield');
    node.classList.add('mt-2');
    node.setAttribute('placeholder','Enter here');

    let weob=document.getElementById("we")
    let but=document.getElementById("expAddButton");
    weob.insertBefore(node,but);
    
}

const proj=()=>{
    
    let node=document.createElement('textarea');
    node.classList.add('form-control');
    node.classList.add('profield');
    node.classList.add('mt-2');
    node.setAttribute('placeholder','Enter here');

    let prob=document.getElementById("pr")
    let but=document.getElementById("proAddButton");
    prob.insertBefore(node,but);
}

const edu=()=>{
    
    let node=document.createElement('textarea');
    node.classList.add('form-control');
    node.classList.add('edufield');
    node.classList.add('mt-2');
    node.setAttribute('placeholder','Enter here');

    let edob=document.getElementById("ed")
    let but=document.getElementById("eduAddButton");
    edob.insertBefore(node,but);
}
//generating Resume
const generate=()=>{

    let nameob=document.getElementById("namefield").value;

let name=document.getElementById("nameT");

name.innerHTML=nameob;
//name
document.getElementById("nameT2").innerHTML=nameob;
//contact
document.getElementById("contT").innerHTML=document.getElementById("contactfield").value;
//email
document.getElementById("mailT").innerHTML=document.getElementById("emailfield").value;

//online links
document.getElementById("linkT").innerHTML=document.getElementById("linkfield").value;

document.getElementById("gitT").innerHTML=document.getElementById("gitfield").value;

document.getElementById("leetT").innerHTML=document.getElementById("leetfield").value;

//summarry

document.getElementById("sumT").innerHTML=document.getElementById("sumfield").value;

//experience
let exp=document.getElementsByClassName("expfield");

let str=''
for(let e of exp){
     str= str +`<li> ${e.value} </li>`;
}
document.getElementById("expT").innerHTML=str;

//projects

let pro=document.getElementsByClassName("profield");

let str1=''
for(let e of pro){
     str1= str1 +`<li> ${e.value} </li>`;
}
document.getElementById("proT").innerHTML=str1;


//education
let edu=document.getElementsByClassName("edufield");

let str2=''
for(let e of edu){
     str2= str2 +`<li> ${e.value} </li>`;
}
document.getElementById("edT").innerHTML=str2;

//setting image
let file=document.getElementById("imgfield").files[0];
console.log(file);
let reader=new FileReader();

reader.readAsDataURL(file);
 console.log(reader.result);
 reader.onloadend=function(){
 document.getElementById("imgtemplate").src=reader.result;
 }
document.getElementById("cv-form").style.display="none";

document.getElementById("cv-template").style.display="block";
}

const print=()=>{

    window.print();
}
