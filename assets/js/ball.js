function ballJS(section) {

  addHTML(section,`
    <canvas id="canvas" width="100" height="100"></canvas>    
  `)

  addCSS(`
  #${section.id} {
    background-color: #ffaf40;
    cursor: url('assets/cursors/ball.png') 5 10, auto;    
  }
  #${section.id} canvas {
    /* background-color: white; */
  }`)

  const canvas = document.querySelector(`#${section.id} #canvas`)

  canvas.setAttribute('width', canvas.parentElement.clientWidth)
  canvas.setAttribute('height', canvas.parentElement.clientHeight)

  const ctx = canvas.getContext('2d')
  const canvRect = canvas.getBoundingClientRect()

  ctx.fillStyle = 'white'

  const ball = {
    x: canvas.width/2, y: canvas.height/2,
    vx: 0, vy: 0,
    ax: 0, ay: 0,
    r: 10,
  }
  const mouse = {x: canvas.width/2, y: canvas.height/2}
  let dx, dy

  drawC(ball)

  window.setInterval(() => {
    // if (ball.x < canvas.width) {
      clear()

      dx = mouse.x - ball.x
      dy = mouse.y - ball.y

      gx = canvas.width/2 - ball.x
      gy = canvas.height/2 - ball.y

      // if (dx != 0 && dy != 0) {
      //   ball.ax = 1 / dx
      //   ball.ay = 1 / dy
      // }

      ball.ax = dx/100
      ball.ay = dy/100

      // ball.ax = dx/100 + gx/50
      // ball.ay = dy/100 + gy/50

      // ball.ax = .2*(dx / Math.sqrt(Math.abs(dx)))
      // ball.ay = .2*(dy / Math.sqrt(Math.abs(dy)))

      ball.vx += ball.ax - .1*ball.vx
      ball.vy += ball.ay - .1*ball.vy

      ball.x += ball.vx + .5*ball.ax
      ball.y += ball.vy + .5*ball.ay

      // console.log(ball)
      limit()
      drawC()
    // }
  }, 10)

  window.addEventListener('mousemove', event => {
    mouse.x = event.clientX - canvRect.x
    mouse.y = event.clientY - canvRect.y
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
    if (ball.y > canvas.height - ball.r/2) {
      ball.y = canvas.height - ball.r/2
      ball.vy *= -1
    }
  }
} 