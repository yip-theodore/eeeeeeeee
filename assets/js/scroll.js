function scrollJS(section) {

  addHTML(section, `
    <div class="box">
      <div class="pack"></div>
    </div>
  `)

  addCSS(`
    #${section.id} {
      background-color: cyan;
      color: white;
      font-size: 150px;
      line-height: 200px;
      font-family: Poppins, sans-serif;
      font-weight: 700;
      overflow: hidden;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      cursor: url('assets/cursors/scroll.png') 8 8, auto;
    }
    #${section.id} .box {
      /* margin-top: 20vh; */
      /* margin-left: 10vw; */
      overflow: hidden;
      height: 200px;
      /* border: 1px solid white; */
      /* background-color: white; */
    }
    #${section.id} .pack {
      transition: transform .1s linear;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
    }
  `)

  // var words = 'Have fun|scrolling|down|to|the|bottom,|maybe|there\'s|something|down|the|road|?'.split('|')
  var words = 'caca prout'.split(' ')
  var pack = document.querySelector('.pack')
  var offset = 0
  var step = 0
  var i = 0
  var motion = true
  const zone = section.getBoundingClientRect()

  init()
  function init() {
    for (word of words) {
      var div = document.createElement('div')
      div.textContent = word
      pack.appendChild(div)
    }
  }
  document.addEventListener('wheel', wheel)


  function wheel(event) {
    if (!hoverCheck(event.clientX, event.clientY, zone)) {
      return
    }
    if (motion === true) {
      offset = -event.deltaY
      if (event.deltaY > 50) {
        step -= 200
        textGen()
        motionToggle()
      }
      pack.style.transform = 'translateY(' + (step + offset) + 'px)'
    } else {
      pack.style.transform = 'translateY(' + (step) + 'px)'
    }
  }
  function textGen() {
    var div = document.createElement('div')
    div.textContent = words[i]
    pack.appendChild(div)
    index()
  }
  function motionToggle() {
    motion = false
    window.setTimeout(function() {
      motion = true
    }, 150)
  }
  function index() {
    if (i < words.length-1) {
      i ++
    } else {
      i = 0
    }
  }
}