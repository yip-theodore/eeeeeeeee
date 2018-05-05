function somethingJS(section) {
  addHTML(section, `
    <div>
      ?
    </div>
  `)
  addCSS(`
    #${section.id} {
      background-color: hotpink;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: url('assets/cursors/something.png') 8 8, auto;
    }
    #${section.id} div {
      font-family: 'Helvetica Neue', sans-serif;
      color: white;
      font-size: 50px;
      font-weight: 900;
      animation: rotate 5s linear infinite;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
    }
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `)
}