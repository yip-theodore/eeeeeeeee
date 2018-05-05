function windJS(section) {
  addHTML(section, `
    <div></div>
    <span></span>
  `)
  addCSS(`
    #${section.id} {
      overflow: hidden;
      background-color: greenyellow;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: url('assets/cursors/wind.png') 8 8, auto;
    }
    #${section.id} div {
      width: 100px;
      height: 100px;
      background-image: url('assets/img/windmill3.svg');
      background-size: cover;
      /* background-color: red; */
      /* border-bottom: black 5px solid; */
      transform: rotate(0deg);
      
    }
    #${section.id} span {
      /*
      z-index: -1;
      position: relative;
      top: -100px;
      display: block; 
      background-color: white;
      width: 4px;
      height: 200px;
      */
    }
  `)

  const zone = section.getBoundingClientRect()

  const ventilo = document.querySelector(`#${section.id} div`)
  let d = 0
  let a = 0
  let v = 0
  let r = 0
  let prev = 0
  let timeout

  window.addEventListener('wheel', event => {

    if (!hoverCheck(event.clientX, event.clientY, zone)) {
      return
    }
    
    if (event.deltaY - prev > 0) {
      // console.log('oui');
      
      d = event.deltaY - prev
    }
    
    prev = d

    window.clearTimeout(timeout)
    timeout = window.setTimeout(clearRotation, 10)
  })

  function clearRotation() {
    prev = 0
    d = 0
    a = 0
  }

  window.setInterval(() => {

    a = d/100000 * 2

    v += a - (0.005 * v)

    r += v + (.5 * a)

    
    ventilo.style.transform = `rotate(${r*100}deg)`
  }, 10)
}