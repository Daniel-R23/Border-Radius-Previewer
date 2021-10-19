const box = document.getElementById("box")
const code = document.getElementById("code")
const btnSwitch = document.getElementById("switch")

setInterval(
    () => {
        let unidade = btnSwitch.checked?'%':'px'

        let topLeft = document.getElementById("topLeft").value
        box.style.borderTopLeftRadius = `${topLeft}${unidade}`

        let topRight = document.getElementById("topRight").value
        box.style.borderTopRightRadius = `${topRight}${unidade}`
 
        let bottomLeft = document.getElementById("bottomLeft").value
        box.style.borderBottomLeftRadius = `${bottomLeft}${unidade}`

        let bottomRight = document.getElementById("bottomRight").value
        box.style.borderBottomRightRadius = `${bottomRight}${unidade}`


        code.innerHTML = `
            border-top-left-radius:${topLeft}${unidade};
            <br>
            border-top-right-radius:${topRight}${unidade};
            <br>
            border-bottom-left-radius:${bottomLeft}${unidade};
            <br>
            border-bottom-right-radius:${bottomRight}${unidade};
        `
    })
    document.getElementById("copiar").addEventListener('click',()=>{
        let textoFormatado = code.innerHTML.replace(/<br>/g,' ')
        navigator.clipboard.writeText(textoFormatado)
    })
    