function text(section) {

  html(section, `
  <div class="container">
    <div class="box">
      <div class="pack"></div>
    </div>
    <div class="box">
      <div class="pack"></div>
    </div>
    <div class="box">
      <div class="pack"></div>
    </div>
  </div>
  `) 

  css(`
  #${section.id} {
    font-size: 50px;
    line-height: 80px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: url('img/text2.png') 8 8, auto;
    
  }
  #${section.id} .container {
  }
  #${section.id} .box {
    overflow: hidden;
    height: 60px;
    display: flex;
    align-items: center;
  }
  #${section.id} .pack {
    transform: translateY(0);
    transition: transform .2s linear;
  }
  `)

  const sentences = [
    ['DOES', 'ANYONE', 'CARE ?'],
    ['I DO', 'LIKE', 'YELLOW.'],
    ['DOES', 'ANYONE', 'CARE ?'],
  ]
  const zone = section.getBoundingClientRect()


  const boxes = document.querySelectorAll(`#${section.id} .box`)
  const packs = document.querySelectorAll(`#${section.id} .pack`)
  const packH = 80
  let offset = 0
  let moved = false
  let countPlus = 1
  let countMinus = sentences.length-2
  let timeoutID
  let cursor = 0
  let max = 1
  let min = -1



  addText()
  function addText() {
    for (const sentence of sentences) {
      for (let i = 0; i < sentence.length; i++) {
        let div = document.createElement('div')
        div.innerHTML = sentence[i]
        packs[i].appendChild(div)
      }
    }
  }
  document.addEventListener('wheel', event => {
    if (!hoverCheck(event.clientX, event.clientY, zone)) {
      return
    }
    
    window.clearTimeout(timeoutID)
    timeoutID = window.setTimeout(() => {
      for (const pack of packs) {
        pack.style.transform = `translateY(${-offset}px)`
      }
    }, 100)


    
    let delta = event.deltaY/2
    // console.log(delta);
    // if (delta>0 && delta>packH/2) {
    //   delta = packH/2
    // } else if (delta<0 && delta<-packH/2) {
    //   delta = -packH/2
    // }
    // console.log(offset + delta);
    
    for (const pack of packs) {
      pack.style.transform = `translateY(${-offset - delta}px)`
    }
    if (moved) {
      return
    }
    if (event.deltaY > packH/2) {
      moved = true
      offset += packH
      window.setTimeout(() => {
        moved = false
      }, 1000)
      cursor += 1
      if (cursor === max) {
        max += 1
        addLine()
        countPlus = countPlus<sentences.length-1 ? countPlus+1 : 1
        unshiftLine()
        countMinus = countMinus>0 ? countMinus-1 : sentences.length-2
      }
    } else
    if (event.deltaY < -packH/2) {
      moved = true
      offset -= packH
      window.setTimeout(() => {
        moved = false
      }, 1000)
      cursor -= 1
      if (cursor === min) {
        min -= 1
        addLine()
        countPlus = countPlus<sentences.length-1 ? countPlus+1 : 1
        unshiftLine()
        countMinus = countMinus>0 ? countMinus-1 : sentences.length-2
      }
    }
  })
  function addLine() {
    for (let i = 0; i < 3; i++) {
      let div = document.createElement('div')
      div.innerHTML = sentences[countPlus][i]
      packs[i].appendChild(div)
    }
  }
  function unshiftLine() {
    for (let i = 0; i < 3; i++) {
      let div = document.createElement('div')
      div.innerHTML = sentences[countMinus][i]
      packs[i].insertBefore(div, packs[i].firstChild)
    }
  }

}