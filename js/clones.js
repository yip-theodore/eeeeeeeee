function clones(section) {
  html(section, `
    <div class="background"></div>
  `)
  css (`
  #${section.id} {
  }
  #${section.id} .background {
    width: 300vw;
    height: 300vh;
    background-image: url('img/clones.svg');
  }
  #${section.id} .background.on {
    background-image: url('img/clonesOn.svg');    
  }
  `)

  const zone = section.getBoundingClientRect()
  
  const background = document.querySelector(`#${section.id} .background`)
  window.addEventListener('mousemove', event => {
    // background.classList.toggle('on', hoverCheck(event.clientX, event.clientY, zone))
    
    background.style.transform =
    `translate(calc(${event.clientX + 32}px - 50%),
    calc(${event.clientY + 12}px - 50%))`
  })

  window.addEventListener('mousedown', () => {
    
    background.classList.add('on')
  })
  window.addEventListener('mouseup', () => {
    window.setTimeout(() => {
      background.classList.remove('on')
    }, 100)
  })


}