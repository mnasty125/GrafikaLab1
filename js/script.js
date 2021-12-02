let yPos = 200;
let right = true;
let radius1 = 60;
let radius2 = 60;
let full = false;

function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  //Фон: создание кругов
  ctx.beginPath();
  ctx.arc(250, 250, radius2, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#FDD9B5";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(250, 250, radius1, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#FFA474";
  ctx.fill();

  //Создание анимации фона, последовательная смена
  if (full) {
    radius2++;
  } else {
    radius1++;
  }

  if (radius1 >= 360) {
    full = true;
    radius1 = 60;
  }
  if (radius2 > 360) {
    full = false;
    radius2 = 60;
  }

  //Создание простых элементов рисунка

  //Хвост
  ctx.beginPath();
  ctx.arc(270, 270, 150, (2 * Math.PI) / 3, (11 * Math.PI) / 6, true);
  ctx.fillStyle = "grey";
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(401, 195);
  ctx.lineTo(320, 272);
  ctx.stroke();

  //Тело кота
  ctx.beginPath();
  ctx.moveTo(370, 420);
  ctx.lineTo(320, 50);
  ctx.lineTo(270, 130);
  ctx.lineTo(220, 130);
  ctx.lineTo(170, 50);
  ctx.lineTo(120, 420);
  ctx.closePath();
  ctx.fillStyle = "grey";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.stroke();

  //Глаза
  ctx.beginPath();
  ctx.arc(215, 200, 30, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(275, 200, 30, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();

  //Рот
  ctx.beginPath();
  ctx.moveTo(245, 232);
  ctx.lineTo(245, 282);
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(246, 262, 20, (5 * Math.PI) / 6, Math.PI / 6, true);
  ctx.lineWidth = 3;
  ctx.stroke();

  //Нос
  ctx.beginPath();
  ctx.arc(245, 227, 10, 0, Math.PI * 2, true);
  ctx.fillStyle = "pink";
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.stroke();

  //Лапы
  ctx.beginPath();
  ctx.arc(215, 420, 40, 0, Math.PI * 2, true);
  ctx.fillStyle = "grey";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(215, 420, 40, 0, Math.PI, false);
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(275, 420, 40, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(275, 420, 40, 0, (47 * Math.PI) / 60, false);
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(245, 400);
  ctx.lineTo(245, 448);
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(175, 350);
  ctx.lineTo(175, 420);
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(315, 350);
  ctx.lineTo(315, 420);
  ctx.lineWidth = 2;
  ctx.stroke();

  //Зрачки
  ctx.beginPath();
  ctx.arc(220, yPos, 5, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(270, yPos, 5, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  // Анимация движения глаз
  if (right) {
    yPos += 0.5;
  } else {
    yPos -= 0.2;
  }

  if (yPos > 215) right = false;
  if (yPos < 200) right = true;

  requestAnimationFrame(draw);
}
