function draw(section) {

  html(section, `
  <canvas id="canvas" width="0" height="0"></canvas>    
  `) 

  css(`
  #${section.id} {
    display: flex;
    cursor: url('img/draw2.png') 5 16, auto;
  }
  `)

  const canvas = document.querySelector(`#${section.id} #canvas`)

  canvas.setAttribute('width', canvas.parentElement.clientWidth)
  canvas.setAttribute('height', canvas.parentElement.clientHeight)  

  const ctx = canvas.getContext('2d')
  const canvRect = canvas.getBoundingClientRect()

  const mouse = {x: null, y: null}
  const line1 = []
  const line2 = []
  let binary = true
  let drawing = false


  ctx.lineCap="round";
  ctx.lineWidth = 4;
  ctx.lineJoin = "round"
  ctx.strokeStyle = '#fff'

  window.addEventListener('mousedown', () => {
    drawing = true
    line1.push([])
    line2.push([])
  })
  window.addEventListener('mouseup', () => {
    drawing = false
    line1.push([])
    line2.push([])
  })

  window.addEventListener('mousemove', event => {
    if (!drawing) {
      return
    }
    mouse.x = event.clientX - canvRect.x
    mouse.y = event.clientY - canvRect.y
    
    line1[line1.length-1].push({
      x: mouse.x - Math.floor(Math.random() * 3) - 1,
      y: mouse.y - Math.floor(Math.random() * 3) - 1,
    })
    line2[line2.length-1].push({
      x: mouse.x - Math.floor(Math.random() * 3) - 1,
      y: mouse.y - Math.floor(Math.random() * 3) - 1,
    })

    if (binary) {
      draw(line1)
    } else {
      draw(line2)
    }
  })


  window.setInterval(() => {
    binary = !binary
    if (binary) {
      draw(line1)
    } else {
      draw(line2)
    }
  }, 200)

  function draw(line) {
    clear()
    for (const stroke of line) {
      ctx.beginPath()
      for (const point of stroke) {
        ctx.lineTo(point.x, point.y)
        ctx.stroke()
      }
      ctx.closePath()    
    }
  }

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}