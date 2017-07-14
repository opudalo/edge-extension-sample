const pageCrasher = function (crash = false) {
  const iframe = document.createElement('iframe')
  document.body.appendChild(iframe)
  const win = iframe.contentWindow
  const doc = win.document

  const fn = function () {}
  Object.assign(fn, {
    internalFn: function () {}
  })

  iframe.contentWindow.fn = fn

  console.log(
    'Reaching fn will succeed',
    win.fn
  )
  console.log(
    'Reching internal fn will fail and crash the page :(',
    win.fn.internalFn
  )
}

const controls = `<div style="position: fixed; top: 0; left: 50%; transform: translateX(-50%); z-index: 100000">
  <button id="crash">Crash this page</button>
</div>`
const div = document.createElement('div')
div.innerHTML = controls
document.documentElement.appendChild(div)

const crash = div.querySelector('#crash')
crash.onclick = pageCrasher
