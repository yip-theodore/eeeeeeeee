function fruits(section) {

  html(section, `
  <div class="box">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>

  </div>
  `) 

  css(`
  #${section.id} {
    position: relative;
    overflow: hidden;
  }
  #${section.id} .box {
    transform: skewY(-10deg);
  }
  #${section.id} .line {
    display: flex;
  }
  #${section.id} .word {
    color: #F9DF4B;
    font-size: 80px;
    -webkit-text-stroke: 1px #fff;
    transition: color .1s linear;
  }
  #${section.id} .word:hover {
    color: #fff;
  }
  `)


  const lines = document.querySelectorAll('.line')

  const fruits = ['BANANA', 'PINEAPPLE', 'LEMON', 'PASSION&nbsp;FRUIT', 'MANGO']


  fillLines()

  
  css(`
  #${section.id} .line {
    animation: slide 20s linear infinite;
  }
  #${section.id} .line:nth-child(2n) {
    animation: slide 20s linear reverse infinite;
  }
  #${section.id} .line:hover {
    animation-play-state: paused;
  }
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-${lines[0].scrollWidth}px);
    }
  }
  `)

  fillLines()


  function fillLines() {
    for (const line of lines) {
      for (const fruit of fruits) {
        let word = document.createElement('span')
        word.classList.add('word')
        word.innerHTML = fruit + '&nbsp;'
        line.appendChild(word)
      }
      fruits.push(fruits.shift())
    }
  }


}