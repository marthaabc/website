<!DOCTYPE html>
<html>
<head>
<title>Cat and Mouse Game</title>
<style>
body{
  text-align:center;
  background:#222;
  color:white;
  font-family:Arial;
}

#game{
  width:500px;
  height:400px;
  background:#444;
  margin:auto;
  position:relative;
  border:3px solid white;
}

#mouse{
  width:40px;
  height:40px;
  background:gray;
  border-radius:50%;
  position:absolute;
  left:200px;
  top:150px;
}

#cat{
  width:40px;
  height:40px;
  background:orange;
  border-radius:50%;
  position:absolute;
  left:50px;
  top:50px;
}
</style>
</head>

<body>

<h2>🐱 Cat and Mouse Game 🐭</h2>
<p>Fata imbeba ukoresheje injangwe!</p>

<div id="game">
  <div id="cat"></div>
  <div id="mouse"></div>
</div>

<script>

let cat = document.getElementById("cat");
let mouse = document.getElementById("mouse");

document.addEventListener("keydown", moveCat);

let x = 50;
let y = 50;

function moveCat(e){

  if(e.key === "ArrowRight"){ x += 10; }
  if(e.key === "ArrowLeft"){ x -= 10; }
  if(e.key === "ArrowUp"){ y -= 10; }
  if(e.key === "ArrowDown"){ y += 10; }

  cat.style.left = x + "px";
  cat.style.top = y + "px";

  checkCatch();
}

function checkCatch(){

  let catRect = cat.getBoundingClientRect();
  let mouseRect = mouse.getBoundingClientRect();

  if(
    catRect.left < mouseRect.right &&
    catRect.right > mouseRect.left &&
    catRect.top < mouseRect.bottom &&
    catRect.bottom > mouseRect.top
  ){
    alert("🐱 Injangwe yafashe imbeba!");
    location.reload();
  }
}

</script>

</body>
</html>
