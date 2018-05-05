function clonesJS(section) {
  addHTML(section, `
    <div class="background"></div>
  `)
  addCSS(`
  #${section.id} {
    overflow: hidden;
    background-color: #a55eea;
    cursor: none;
  }
  #${section.id} .background {
    opacity: .2;
    width: 300vw;
    height: 300vh;
    background-image: url('assets/img/cursors2.svg');
    /* cursor: none; */
    transition: opacity .2s linear;
  }
  #${section.id} .background.on {
    opacity: .8;
  }
  `)

  const zone = section.getBoundingClientRect()
  
  const background = document.querySelector(`#${section.id} .background`)
  window.addEventListener('mousemove', event => {
    background.classList.toggle('on', hoverCheck(event.clientX, event.clientY, zone))
    
    background.style.transform =
    `translate(calc(${event.clientX + 32}px - 50%),
    calc(${event.clientY + 12}px - 50%))`
  })

}