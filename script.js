const factContainer = document.getElementById("fact");

//get elements to animate
const left = document.getElementById("left")
const right = document.getElementById("right")


function reqListener () {
  //remove onclick from pullcord
  pullcord.removeEventListener("click", onClick);
  
  //set fact text
  const res = JSON.parse(this.responseText);
  const fact = res["text"]
  let n = Math.floor(Math.random() * 16);  

  //call again if the fact is too short.
  if (fact.split(" ").length < 10) {
      console.log("fact too short");
      onClick();
  } else {
     //change the fact only if it cannot be seen
     if (left.classList.contains("left-open")){
     	setTimeout(()=> {
          factContainer.innerHTML = fact;
        }, 3000)        
     } else {
	factContainer.innerHTML = fact
	document.getElementById('center').style.backgroundImage = 'url("http://placekitten.com/g/800/800?image=' + n + '")';  
     }
  
    //add animation to curtains
    left.classList.toggle("left-open");
    right.classList.toggle("right-open");
    left.classList.toggle("left-close");
    right.classList.toggle("right-close"); 


    //setTimeout to add onclick back to pullcord
    setTimeout(()=> {
          pullcord.addEventListener("click", onClick);
        }, 3000) 
    } 
}


const pullcord = document.getElementById("pullcord");

function onClick(e){ 
  //const picReq = new XMLHttpRequest();
  //picReq.open("GET", "https://cataas.com/cat/gif?json=true");
  //picReq.addEventListener("load", reqListener);
  //picReq.send();  

  const factReq = new XMLHttpRequest();
  factReq.open("GET", "https://cat-fact.herokuapp.com/facts/random?amount=1");
  factReq.addEventListener("load", reqListener);
  factReq.send();
}

pullcord.addEventListener("click", onClick);
