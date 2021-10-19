const box = document.getElementById("box")
const code = document.getElementById("code")

setInterval(
    () => {
        let topLeft = document.getElementById("topLeft").value
        box.style.borderTopLeftRadius = `${topLeft}px`

        let topRight = document.getElementById("topRight").value
        box.style.borderTopRightRadius = `${topRight}px`
 
        let bottomLeft = document.getElementById("bottomLeft").value
        box.style.borderBottomLeftRadius = `${bottomLeft}px`

        let bottomRight = document.getElementById("bottomRight").value
        box.style.borderBottomRightRadius = `${bottomRight}px`


        code.innerHTML = `
            border-top-left-radius:${topLeft}px
            <br>
            border-top-right-radius:${topRight}px
            <br>
            border-bottom-left-radius:${bottomLeft}px
            <br>
            border-bottom-right-radius:${bottomRight}px
        `
    })
    document.getElementById("copiar").addEventListener('click',()=>{
        navigator.clipboard.writeText(code.innerHTML)
        alert("Copiado")
    })

    