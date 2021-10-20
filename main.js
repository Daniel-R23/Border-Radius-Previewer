const box = document.getElementById("box")
const code = document.getElementById("code")
const btnSwitch = document.getElementById("switch")
const checkAvancado = document.getElementById("avancado")

const basicInputs = [
   document.getElementById("topLeft"),
   document.getElementById("topRight"),
   document.getElementById("bottomLeft"),
   document.getElementById("bottomRight")
]

const advancedInputs = [
   document.getElementById("topLeftWidth"),
   document.getElementById("topLeftHeight"),
   document.getElementById("topRightWidth"),
   document.getElementById("topRightHeight"),
   document.getElementById("bottomRightWidth"),
   document.getElementById("bottomRightHeight"),
   document.getElementById("bottomLeftWidth"),
   document.getElementById("bottomLeftHeight"),

]

setInterval(
    () => {
        let unidade = btnSwitch.checked?'%':'px'

         if (checkAvancado.checked) {
         basicInputs.forEach((input)=>{
            input.style.display='none'
         })
         advancedInputs.forEach((input)=>{
            input.style.display='inline-block'
            
         })

         const advancedValue = `${advancedInputs[0].value}${unidade} ${advancedInputs[2].value}${unidade} ${advancedInputs[4].value}${unidade} ${advancedInputs[6].value}${unidade} / ${advancedInputs[1].value}${unidade} ${advancedInputs[3].value}${unidade} ${advancedInputs[5].value}${unidade} ${advancedInputs[7].value}${unidade}`

         code.innerHTML=`border-radius:<br>${advancedValue}`
         code.style.textAlign='center'
         box.style.borderRadius = advancedValue
         document.getElementById('edit').style.marginLeft='100px'
         
      }
      else if (!checkAvancado.checked) {
          document.getElementById('edit').style.marginLeft='0px'
          basicInputs.forEach((input)=>{
            input.style.display='inline-block'
         })
         advancedInputs.forEach((input)=>{
            input.style.display='none'
         })

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
      }
    })
    document.getElementById("copiar").addEventListener('click',()=>{
        let textoFormatado = code.innerHTML.replace(/<br>/g,' ')
        navigator.clipboard.writeText(textoFormatado)
    })
    