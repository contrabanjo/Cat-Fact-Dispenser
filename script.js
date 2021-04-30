const fact = document.getElementById("fact");

function reqListener () {
  const res = JSON.parse(this.responseText);
  fact.innerHTML = res["text"];  
}

var oReq = new XMLHttpRequest();
oReq.open("GET", "https://cat-fact.herokuapp.com/facts/random?amount=1");
//oReq.responseType = 'blob'
oReq.addEventListener("load", reqListener);
//oReq.onreadystatechange = reqListener;
oReq.send()
//oReq.send("response_type=code&client_id=nlcq4Arz_XsiEms17PepnGbmjLjF1g4q_JIL8Xk2UDNJTkGj5h8_XI-VADEmVxP4&redirect_uri=http://localhost:3000");

