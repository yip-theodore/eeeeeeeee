function sliderJS(section) {

  addHTML(section, `
    <div class="box">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  `)

  addCSS(`
    #${section.id} {
      background-color: limegreen;
      overflow: hidden;
      /* overflow: scroll; */
      /* background-color: #FCFCFC; */
      /* display: flex; */
      /* align-items: center; */
      cursor: url('assets/cursors/slider.png') 8 8, auto;
    }
    
    #${section.id} .line {
      font-family: 'Roboto', sans-serif;
      font-weight: 900;
      line-height: 65px;
      font-size: 80px;
      /* color: #E8E8E8; */
      color: rgba(255, 255, 255, .6);
      text-transform: uppercase;
      margin: 0;
      /* border: .1px solid yellow; */
      height: 65px;
      display: flex;
    }
    /* .word:nth-child(20) {
      -webkit-box-shadow: 0px 0px 0px 5px rgba(0,0,0,1);
      -moz-box-shadow: 0px 0px 0px 5px rgba(0,0,0,1);
      box-shadow: 0px 0px 0px 5px rgba(0,0,0,1);
    } */
    #${section.id} .box {
      transform: translateY(-10%) skewY(-10deg);
    }
    #${section.id} .word {
      margin-top: auto;
      transition: color .1s linear;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
    }
    #${section.id} .word:hover {
      /* color: #353535; */
      color: rgba(255, 255, 255, 1);  
      /* cursor: pointer; */
    }
    #${section.id}[class*='uniqlo'] {
      width: 74px;
      height: 74px;
    }
    #${section.id} .uniqloJP {
      background-image: url('uniqloJP0.svg');
    }
    #${section.id} .uniqloJP:hover {
      background-image: url('uniqloJP1.svg');
    }
    #${section.id} .uniqloEN {
      background-image: url('uniqloEN0.svg');
    }
    #${section.id} .uniqloEN:hover {
      background-image: url('uniqloEN1.svg');
    }
    #${section.id} .zone {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 672px;
      height: 100vh;
      background-color: yellow;
      z-index: -1;
    }
  `)
  
  var linesDom = document.querySelectorAll('.line')
  // var places = ['uniqloJP', '&nbsp;tokyo', 'melbourne', 'london', 'paris', 'new&nbsp;york', 'beijing', 'shanghai', 'seoul', 'hong&nbsp;kong', 'uniqloEN' ,'&nbsp;san&nbsp;francisco', 'taipei', 'manila', 'bangkok', 'moscow', 'kuala', 'lumpur', 'singapore', 'jakarta']
  var places = ['tokyo', 'melbourne', 'london', 'paris', 'new&nbsp;york', 'beijing', 'shanghai', 'seoul', 'hong&nbsp;kong', 'san&nbsp;francisco', 'taipei', 'manila', 'bangkok', 'moscow', 'kuala', 'lumpur', 'singapore', 'jakarta']
  var lines = []

  for (var i = 0; i < linesDom.length; i++) {
    lines.push({
      dom: linesDom[i],
      motion: true,
      offset: 0,
      offsetBase: 0,
    })
    fill(lines[i])
  }

  var lineWidth = lines[0].dom.scrollWidth
  
  var offsetBase = -lineWidth

  for (var i = 0; i < lines.length; i++) {
    fill(lines[i])
    fill(lines[i])

    offsetInit(lines[i])
    move(lines[i], i)
    hover(lines[i])
  }

  function fill(line) {
    for (place of places) {
      var word = document.createElement('p')
      word.classList.add('word')
      if (place === 'uniqloJP') {
        word.classList.add('uniqloJP')
      } else if (place === 'uniqloEN') {
        word.classList.add('uniqloEN')
      } else {
        word.innerHTML = place+'&nbsp;'
      }
      line.dom.appendChild(word)
    }
  }
  function offsetInit(line) {
    line.offsetBase = offsetBase

    if (offsetBase > 0) {
      offsetBase = -(offsetBase + 1000)
    } else {
      offsetBase = -(offsetBase - 1000)
    }
  }
  function move(line, i) {
    window.setInterval(function() {

      if (line.motion) {
        line.offset += 1

        if (line.offset > lineWidth/2) {
          // console.log('back');
          line.offset -= lineWidth
        }
        if (i%2 === 0) {
          line.dom.style.transform = 'translateX(' + (line.offsetBase+line.offset) + 'px)'
        } else {
          line.dom.style.transform = 'translateX(' + -(line.offsetBase+line.offset) + 'px)'
        }
      }
    }, 10)
  }
  function hover(line) {
    line.dom.addEventListener('mouseover', function() {
      line.motion = false
    })
    line.dom.addEventListener('mouseout', function() {
      line.motion = true
    })
  }
}