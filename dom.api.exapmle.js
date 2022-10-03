// create paragraph tag by DOM object
const para=document.createElement("p");
para.textContent="this is created by DOM object function";
para.classList.add("one");
para.classList.add("second");

para.setAttribute("id","para-id");//to set an id into para
console.log(para.getAttribute("id"));//to get id name


document.body.appendChild(para);


//dom node
//create span tag inside paragraph tag
 const span =document.createElement("span");
 span.id="span_id";
 span.className="blue red";

 //span.textContent="this line is created by DOM node";
 span.innerHTML="this line is created by<i> DOM node</i>";
 span.style.backgroundColor="pink";//CSSDOM
 para.appendChild(span);

//to create a list-------->
const list=document.createElement("ul");
const hobbies=["coding","dancing","singing","teaching"];
for(let hobby of hobbies)
{
      list.innerHTML+="<li class='blue'>" + hobby + "</li>";
}
document.body.appendChild(list);

//get the element
console.log(document.getElementById("para-id").textContent);
console.log(document.getElementsByClassName("one"));
//too select where paragraph is present
console.log(document.querySelector("#para-id"));//for one 
console.log(document.querySelectorAll("p"));//for all where p is used
console.log(document.querySelector(".one"));//to find out class



