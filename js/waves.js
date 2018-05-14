function waves(section) {

  html(section, `
  <canvas id="canvas" width="0" height="0"></canvas>    
  `) 

  css(`
  #${section.id} {
    display: flex;
    cursor: url('img/waves2.png') 7 16, auto;
  }
  `)
  const canvas = document.querySelector(`#${section.id} #canvas`)
  
  canvas.setAttribute('width', canvas.parentElement.clientWidth)
  canvas.setAttribute('height', canvas.parentElement.clientHeight)

  const ctx = canvas.getContext('2d')
  const canvRect = canvas.getBoundingClientRect()

  const waves = []

  ctx.strokeStyle = '#fff'

  window.addEventListener('click', event => {
    
    let newWave = {
      cx: event.clientX - canvRect.x,
      cy: event.clientY - canvRect.y,
      r: 0,
    }
    drawC(newWave)
    waves.push(newWave)

    window.setTimeout(() => {
      
      waves.shift()
    }, 15000)
  })

  window.setInterval(() => {
    clear()
    for (let i = 0; i < waves.length; i++) {
      waves[i].r += 1
      drawC(waves[i])
    }
  }, 10)

  function drawC(wave) {
    ctx.lineWidth = '4'
    ctx.beginPath()
    ctx.arc(wave.cx, wave.cy, wave.r, 0, 2*Math.PI);
    ctx.stroke();

    ctx.lineWidth = '2'    
    ctx.beginPath()
    ctx.arc(wave.cx, wave.cy, wave.r*1.1, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath()
    ctx.arc(wave.cx, wave.cy, wave.r*.9>=0 ? wave.r*.9 : 0, 0, 2*Math.PI);
    ctx.stroke();

    ctx.lineWidth = '1'    
    ctx.beginPath()
    ctx.arc(wave.cx, wave.cy, wave.r*1.2, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath()
    ctx.arc(wave.cx, wave.cy, wave.r*.8>=0 ? wave.r*.8 : 0, 0, 2*Math.PI);
    ctx.stroke();
  }
  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}