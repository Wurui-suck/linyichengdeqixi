let bb = document.querySelector('#b')
let aa = document.querySelector('#a')
let dragging = false
let X
let Y
let StartOrDown = ('ontouchstart' in window) ? 'touchstart' : 'mousedown'
bb.addEventListener(StartOrDown, (e) => {
    dragging = true
    X = e.clientX
    Y = e.clientY

})
let TouchmoveOrMousemove = ('ontouchmove' in window) ? 'touchmove' : 'mousemove'
document.body.addEventListener(TouchmoveOrMousemove, (e) => {
    if (dragging === true) {
        let moveX = e.clientX - X
        let moveY = e.clientY - Y
        bb.style.transform = bb.style.transform + `translate(${moveX}px,${moveY}px)`
        X = e.clientX
        Y = e.clientY
    }
    aaa = aa.getBoundingClientRect()
    bbb = bb.getBoundingClientRect()
    if (bbb.left < aaa.right
        && bbb.right > aaa.left
        && bbb.top < aaa.bottom
        && bbb.bottom > aaa.top

    ) {
        aa.style.background = 'green'

    } else {

        aa.style.background = 'transparent'

    }




}
)
let EndorUp = ('ontouchend' in window) ? 'touchend' : 'mouseup'
document.addEventListener(EndorUp, () => {
    dragging = false
})
