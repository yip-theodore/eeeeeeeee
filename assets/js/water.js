function waterJS(section) {
  addHTML(section, `
  <canvas width="200" height="200"></canvas>
  `)
  addCSS(`
  #${section.id} {
    background-color: dodgerblue;
    cursor: url('assets/cursors/water.png') 6 16, auto;
  }
  #${section.id} canvas {
  }
  `)

  const canvas = document.querySelector(`#${section.id} canvas`)
  
  canvas.setAttribute('width', canvas.parentElement.clientWidth)
  canvas.setAttribute('height', canvas.parentElement.clientHeight)

  const ctx = canvas.getContext('2d')
  const canvRect = canvas.getBoundingClientRect()
  const waves = []
  let hover = false

  // const mouse = {x: canvas.width/2, y: canvas.height/2}
  ctx.fillStyle = 'dodgerblue'
  ctx.lineWidth = 1.5;
  clear()

  // window.addEventListener('mousemove', event => {
  //   mouse.x = event.clientX - canvRect.x
  //   mouse.y = event.clientY - canvRect.y
  // })
  canvas.addEventListener('mouseover', () => { hover = true })
  canvas.addEventListener('mouseout', () => { hover = false })

  canvas.addEventListener('click', event => {
    let newWave = {
      cx: event.clientX - canvRect.x,
      cy: event.clientY - canvRect.y,
      r: 10,
      op: 1.5
    }
    drawC(newWave)
    waves.push(newWave)
  })

  window.setInterval(() => {
    clear()
    for (let i = 0; i < waves.length; i++) {
      waves[i].r += 1
      waves[i].op -= .005
      drawC(waves[i])
      
    }
  }, 10)

  window.setInterval(() => {
    if (hover) {
      return
    }
    if (Math.floor(Math.random() * 5) !== 0) {
      return
    }
    let newWave = {
      cx: Math.floor(Math.random() * canvas.width),
      cy: Math.floor(Math.random() * canvas.height),
      r: 10,
      op: 1
    }
    drawC(newWave)
    waves.push(newWave)
  }, 200)

  function drawC(wave) {
    
    ctx.beginPath()
    ctx.arc(wave.cx, wave.cy, wave.r, 0, 2*Math.PI);
    ctx.strokeStyle = `rgba(255,255,255,${wave.op})`
    ctx.stroke();
    // window.setTimeout(() => {
    //   ctx.fill()
    //   drawC(cx, cy, r+1, color)
    // }, 100)
  }
  function clear() {
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}