// ---- Heart Animation ----
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawHeart(x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size, size);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -15, -25, -15);
  ctx.bezierCurveTo(-55, -15, -55, 22.5, -55, 22.5);
  ctx.bezierCurveTo(-55, 40, -35, 62, 0, 80);
  ctx.bezierCurveTo(35, 62, 55, 40, 55, 22.5);
  ctx.bezierCurveTo(55, 22.5, 55, -15, 25, -15);
  ctx.bezierCurveTo(10, -15, 0, -3, 0, 0);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

let scale = 1;
let growing = true;

function animateHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawHeart(canvas.width/2, canvas.height/2, scale*3, "red");

  if (growing) {
    scale += 0.01;
    if (scale >= 1.2) growing = false;
  } else {
    scale -= 0.01;
    if (scale <= 1) growing = true;
  }
  requestAnimationFrame(animateHeart);
}
animateHeart();

// ---- Flower Petals Falling ----
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerText = "🌸"; // bisa ganti jadi 💮 🌺
  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.fontSize = 15 + Math.random() * 25 + "px";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

setInterval(createFlower, 500);
