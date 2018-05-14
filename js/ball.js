function ball(section) {

  html(section, `
  <canvas id="canvas" width="0" height="0"></canvas>    
  `) 

  css(`
  #${section.id} {
    display: flex;
    cursor: url('img/ball2.png') 1 1, auto;
  }
  #${section.id} canvas {
  }
  `)


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
    r: 15,
  }

  const mouse = {x: canvas.width/2, y: canvas.height/2}
  let dx, dy

  drawC()

  window.setInterval(() => {
      clear()

      dx = mouse.x - ball.x
      dy = mouse.y - ball.y

      ball.ax = dx/100
      ball.ay = dy/100

      ball.vx += ball.ax - .06*ball.vx
      ball.vy += ball.ay - .06*ball.vy

      ball.x += ball.vx + .5*ball.ax
      ball.y += ball.vy + .5*ball.ay

      limit()
      drawC()
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
      ball.vx *= .75
      ball.vx *= -1
    }
    if (ball.x > canvas.width - ball.r/2) {
      ball.x = canvas.width - ball.r/2
      ball.vx *= .75
      ball.vx *= -1
    }
    if (ball.y < ball.r + ball.r/2) {
      ball.y = ball.r + ball.r/2
      ball.vy *= .75
      ball.vy *= -1
    }
    if (ball.y > canvas.height - ball.r/2) {
      ball.y = canvas.height - ball.r/2
      ball.vy *= .75
      ball.vy *= -1
    }
  }

} 

