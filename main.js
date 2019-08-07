let bb = document.querySelector('#b')
let aa = document.querySelector('#a')
let dragging = false
let X
let Y
bb.addEventListener('mousedown', (e) => {
    dragging = true
    X = e.clientX
    Y = e.clientY

})

document.body.addEventListener('mousemove', (e) => {
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

document.addEventListener('mouseup', () => {
    dragging = false
})
