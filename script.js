
let request;

if(window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else if(window.ActiveXObject) {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.onreadystatechange = function() {
  if(request.readyState == 4) {
    let p = document.createElement("span");
    p.innerHTML = request.responseText;
    document.getElementById("contents").appendChild(p);
  }
};

request.open('GET','res/simpletext.txt', true);W
request.send(null);
