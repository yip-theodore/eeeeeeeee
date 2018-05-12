function html(container, html) {
  container.innerHTML += html
}
function css(css) {
  const style = document.createElement('style')
  style.innerHTML = css
  document.head.appendChild(style)
}
function hoverCheck(x, y, zone) {
  if ((x > zone.x && x < zone.x + zone.width) && (y > zone.y && y < zone.y + zone.height)) {
    return true
  }
  return false
}