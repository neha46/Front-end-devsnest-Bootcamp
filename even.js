document.addEventListener("DOMContentLoaded",function()
{

      //1 way
function handleClick()
{
      alert("you have clicked on the button.")
}

document.getElementById("clickme").onclick=handleClick;
// 2  way
document.getElementById("submit me").onclick=handleClick;

// 3 way
document.getElementById("final").addEventListener("click", function handleClick()
{
      alert("ya i did")
})
// for stop and start mouse over

//event onject
//even object conatins the information about the event
function handlemouseover(event)
{
      console.log(event)
}

document.getElementById("start").addEventListener("click", function handleClick()
{
document.addEventListener("mouseover",handlemouseover)
})

// for stop as well
document.getElementById("stop").addEventListener("click", function handleClick()
{
document.removeEventListener("mouseover",handlemouseover)
}
)
// for key up down and key press even checking----------------------------------->
//key press
document.addEventListener("keypress",function(e)
{console.log("keypress")
      console.log(e)
      if(e.key==2)
            e.preventDefault();
})
//key down 
document.addEventListener("keydown",function(e)
{console.log("keydown")
      console.log(e)
      if(e.key==2)
            e.preventDefault();
})
//keyup event
document.addEventListener("keyup",function(e)
{console.log("keyup")
      console.log(e)
      if(e.key==2)
            e.preventDefault();
})

//notice point----> since here we got that actual value we got  inside label by keypress 

//for focus event----------------------------------------------------------->
document.getElementById("username").addEventListener("focus",function(e)
{
      console.log("focus even happened");
})

// for bluee event ---------------------------------------------------------->
document.getElementById("username").addEventListener("blurr",function(e)
{
      console.log(" blurr event happened");
})

//event captured----------------------------------------------->
//for parent
document.querySelector(".parent").addEventListener("click",function(e)
{
      console.log("parent clicked")
},true)
//for child
document.querySelector(".child").addEventListener("click",function(e)
{
      console.log("child clicked")
  
},true)
//for subchild

document.getElementById("subchild").addEventListener("click",function(e)
{
      console.log("subchild clicked")
      e.stopImmediatePropagation();
},true)
}
)