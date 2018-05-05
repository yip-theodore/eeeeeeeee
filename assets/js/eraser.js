
function eraserJS(section) {

  addHTML(section, `
    <div class="main">
      <canvas id="canvas" width="100" height="100"></canvas>
      <h1 class="h1">
        Hello there! <br>
        Hello there! <br>
        Hello there! <br>
        Hello there! <br>
        Hello there! <br>
        Hello there! <br>
        Hello there! <br>
        Hello there! <br>
      </h1>
    </div>
  `)

  addCSS(`
    #${section.id} {
      background-color: tomato;
      /* cursor: none; */
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: url('assets/cursors/eraser.png') 7 11, auto;
      
    }
    #${section.id} canvas {
      background-color: white;
    }
    #${section.id} .main {
      position: relative;
      /* overflow: hidden; */
    }
    #${section.id} .h1 {
      font-size: 16px;
      color: white;
      font-family: 'Helvetica Neue', sans-serif;
      /* mix-blend-mode: multiply; */
      position: absolute;
      line-height: .9;
      top: -7%;
      /* right: 0; */
      left: 0;
      /* transform: rotateY(180deg); */
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
    }
  `)

  const canvas = document.querySelector(`#${section.id} #canvas`)
  const ctx = canvas.getContext('2d')
  const canvRect = canvas.getBoundingClientRect()

  const mouse = {x: canvas.width/2, y: canvas.height/2}
  let dx, dy

  ctx.beginPath()
  ctx.lineCap="round";
  ctx.lineWidth = 2;
  ctx.lineJoin = "round"
  ctx.strokeStyle = 'tomato'

  window.addEventListener('mousemove', event => {
    mouse.x = event.clientX - canvRect.x
    mouse.y = event.clientY - canvRect.y
    ctx.lineTo(mouse.x, mouse.y)
    ctx.stroke()
  })

  function drawC() {
    ctx.beginPath()
    ctx.arc(ball.x-ball.r/2, ball.y-ball.r/2, ball.r, 0, 2*Math.PI);
    ctx.fill();
  }
  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  function limit() {
    if (ball.x < ball.r + ball.r/2) {
      ball.x = ball.r + ball.r/2
      ball.vx *= -1
    }
    if (ball.x > canvas.width - ball.r/2) {
      ball.x = canvas.width - ball.r/2
      ball.vx *= -1
    }
    if (ball.y < ball.r + ball.r/2) {
      ball.y = ball.r + ball.r/2
      ball.vy *= -1
    }
    if (ball.y > canvas.width - ball.r/2) {
      ball.y = canvas.width - ball.r/2
      ball.vy *= -1
    }
  }

}