function drawJS(section) {

  addHTML(section, `
    <canvas id="canvas" width="200" height="200"></canvas>    
  `)

  addCSS(`
    #${section.id} {
      background-color: yellow;
      cursor: url(assets/cursors/draw.png) 0 16, auto;
      
    }
  `)

  var canvas = document.querySelector(`#${section.id} #canvas`)

  canvas.setAttribute('width', canvas.parentElement.clientWidth)
  canvas.setAttribute('height', canvas.parentElement.clientHeight)

  const canvRect = canvas.getBoundingClientRect()
  

  var ctx = canvas.getContext('2d')
  ctx.beginPath()
  ctx.lineCap="round";
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'white'

  window.addEventListener('mousemove', function(event) {    
    ctx.lineTo(event.clientX - canvRect.x, event.clientY - canvRect.y);
    ctx.stroke();
  })
}