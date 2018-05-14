function scratch(section) {

  html(section, `
  <div class="container">
    <canvas id="canvas" width="120" height="120"></canvas>
    <h1 class="h1">
      HELLO THERE ! <br>
      HELLO THERE ! <br>
      HELLO THERE ! <br>
      HELLO THERE ! <br>
      HELLO THERE ! <br>
      HELLO THERE ! <br>
      HELLO THERE ! <br>
      HELLO THERE ! <br>
    </h1>
  </div>
  `) 

  css(`
  #${section.id} {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: url('img/scratch2.png') 6 16, auto;
  }
  #${section.id} .container {
    position: relative;
  }
  #${section.id} canvas {
    background-color: white;
  }
  #${section.id} .h1 {
    font-size: 16px;
    position: absolute;
    top: -2.5%;
    left: 0;
  }
  `)

  const canvas = document.querySelector(`#${section.id} #canvas`)
  const ctx = canvas.getContext('2d')
  const canvRect = canvas.getBoundingClientRect()
  const mouse = {x: null, y: null}

  ctx.beginPath()
  ctx.lineCap="round";
  ctx.lineWidth = 1;
  ctx.lineJoin = "round"
  ctx.strokeStyle = '#F9DF4B'

  window.addEventListener('mousemove', event => {
    mouse.x = event.clientX - canvRect.x
    mouse.y = event.clientY - canvRect.y
    ctx.lineTo(mouse.x, mouse.y)
    ctx.stroke()
  })

}