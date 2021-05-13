function onClick(e){
  //make pullcord unclickable while cat fact is updating
  pullcord.removeEventListener("click", onClick);
  
  updateCatFact();

  setTimeout(()=> {
        pullcord.addEventListener("click", onClick);
  }, 3000) 
}

function animateCurtains(){
  const left = document.getElementById("left")
  const right = document.getElementById("right")  

  left.classList.toggle("left-close");
  right.classList.toggle("right-close");

  left.classList.toggle("left-open");
  right.classList.toggle("right-open");  
}

function updateCatFact(){
   const factContainer = document.getElementById("fact");
   Promise.all([
     fetch("https://cat-fact.herokuapp.com/facts/random?amount=1").then(value => value.json()),
     fetch("https://cataas.com/cat/gif?json=true").then(value => value.json())
    ])
    .then(values => {
       if (!values[0]["status"].verified) {
          updateCatFact();  
       } else {
          if (!document.getElementById('left').classList.contains("left-open")){
            factContainer.innerHTML = values[0]["text"];
            document.getElementById('center').style.backgroundImage = 'url("' + "https://cataas.com/" + values[1]["url"] + '")';
          }
         animateCurtains();
       }
     }) 
}


const pullcord = document.getElementById("pullcord");
pullcord.addEventListener("click", onClick);
