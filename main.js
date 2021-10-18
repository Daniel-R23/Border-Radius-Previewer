const box = document.getElementById("box")

setInterval(
    () => {
        let topLeft = document.getElementById("topLeft").value
        box.style.borderTopLeftRadius = `${topLeft}px`
    })
setInterval(
    () => {
        let topRight = document.getElementById("topRight").value
        box.style.borderTopRightRadius = `${topRight}px`
    })
setInterval(
    () => {
        let bottomLeft = document.getElementById("bottomLeft").value
        box.style.borderBottomLeftRadius = `${bottomLeft}px`
    })
setInterval(
    () => {
        let bottomRight = document.getElementById("bottomRight").value
        box.style.borderBottomRightRadius = `${bottomRight}px`
    })