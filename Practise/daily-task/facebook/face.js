
function myfunc() {
    let x = document.getElementById("modal");
    if (x.style.display === "none") {
        document.getElementById("modal").style.display = "block";
    } else {
        document.getElementById("modal").style.display = "none";
    }
}


let btn = document.querySelector(".checkbox");

let butt = document.querySelector(".toggle");


btn.addEventListener("change",()=>{

    if(document.body.classList.toggle('dark')){
       document.querySelector("body").style.backgroundColor = "black";
       document.getElementById("bsec1").style.color = "white";
       document.getElementById("bsec").style.color = "black";
         document.getElementById("postingsec").style.backgroundColor = "black";
         document.getElementById("postingsec").style.color = "white";
        document.getElementById("stories1").style.backgroundColor = "black";
        document.getElementById("stories1").style.color = "white";
        document.getElementById("eventsec").style.backgroundColor = "black";
        document.getElementById("eventsec").style.color = "white";
        document.getElementById("modal").style.backgroundColor = "black";
         document.getElementById("modal").style.color = "white";       
    }
    else{

        document.querySelector("body").style.backgroundColor = "white";
        document.getElementById("bsec1").style.color = "black";
        document.getElementById("postingsec").style.color = "black";
        document.getElementById("bsec").style.color = "white";
          document.getElementById("postingsec").style.backgroundColor = "white";
         document.getElementById("stories1").style.backgroundColor = "white";
         document.getElementById("stories1").style.color = "black";
         document.getElementById("eventsec").style.backgroundColor = "white";
         document.getElementById("eventsec").style.color = "black";
         document.getElementById("modal").style.backgroundColor = "white";
          document.getElementById("modal").style.color = "black";  
        
    }
});














