function ryuJS(section) {

  addHTML(section, `
    <img class="pikachu" src="assets/img/pikachu.gif" alt="" draggable="false">
  `)

  addCSS(`
    #${section.id} {
      position: absolute;
    }
    #${section.id} .pikachu {
      position: absolute;
      top: 20vh;
      /* width: 300px; */
      height: 20vh;
      left: -200px;
      cursor: -moz-grab; cursor: -webkit-grab; cursor: grab;
      /* pointer-events: none; */
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
    }
    #${section.id} .cursor {
      display: none;
      pointer-events: none;
      /* background-color: black; */
      position: absolute;
      top: -100px;
      left: -100px;
    }
    #${section.id} .dragging {
      cursor: -webkit-grabbing; cursor: -moz-grabbing;
      /* pointer-events: auto; */
    }
  `)

  var pikachu = document.querySelector('.pikachu')
  var cursor = document.querySelector('.cursor')

  let dragging = false

  var pos = 00
  window.setInterval(function() {
    // console.log(pos);
    
    if (dragging) {
      return
    }
    pos += 2
    // pikachu.style.left = pos + 'px'
    pikachu.style.left = `${pos+end.x}px`
    
    if (pos+end.x > document.body.clientWidth) {
      pos-= document.body.clientWidth + 500
    }
  }, 10)
  window.addEventListener('mousemove', function(event) {

    
    if (dragging) {
      
      end.x += event.clientX - start.x
      end.y += event.clientY - start.y

      // pos = end.x
      

      pikachu.style.top = `calc(20vh + ${end.y}px)`
      pikachu.style.left = `${pos+end.x}px`
      
      start.x = event.clientX
      start.y = event.clientY
      
    }
    
  })


  let start = {x: null, y: null}
  let end = {x: null, y: null}
  

  pikachu.addEventListener('mousedown', event => {
    dragging = true
    // console.log(dragging);
    
    start.x = event.clientX
    start.y = event.clientY
    pikachu.classList.add('dragging')
  })
  window.addEventListener('mouseup', event => {
    dragging = false
    // console.log(dragging);
    
    pikachu.classList.remove('dragging')
    // end.x = event.clientX - start.x
    // end.y = event.clientY - start.y

    // pos += end.x

    pikachu.style.top = `calc(20vh + ${end.y}px)`
    pikachu.style.left = `${pos+end.x}px`
    
    
  })

}