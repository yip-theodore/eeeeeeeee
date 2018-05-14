function spin(section) {

  html(section, `
  <img class="handspinner" src="img/handspinner.svg" alt="">
  `) 

  css(`
  #${section.id} {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: url('img/spin2.png') 8 8, auto;
  }
  #${section.id} .handspinner {
    width: 12vw;
  }
  `)


  const zone = section.getBoundingClientRect()

  const ventilo = document.querySelector(`#${section.id} .handspinner`)
  let d = 0
  let a = 0
  let v = 0.01
  let r = 0
  let prev = 0
  let timeout

  window.addEventListener('wheel', event => {
    
    if (!hoverCheck(event.clientX, event.clientY, zone)) {
      return
    }
    
    if (event.deltaY > 0 && event.deltaY - prev > 0) {
      d = event.deltaY - prev
    }
    if (event.deltaY < 0 && event.deltaY - prev < 0) {
      d = event.deltaY + prev
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

    a = d/100000

    v += a - (0.002 * v)

    r += v + (.5 * a)

    
    ventilo.style.transform = `rotate(${r*100}deg)`
  }, 10)

}