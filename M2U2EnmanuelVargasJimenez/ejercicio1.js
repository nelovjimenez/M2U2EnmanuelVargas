let nombre = document.getElementById('nombre')
const boton = document.getElementById('boton')
let papeleria = 20000
let carnet = 8000

boton.addEventListener('click', () => {
let materia = parseInt( document.getElementById('materia').value)
let valor = parseInt( document.getElementById('valor').value)
if(materia != "" && valor != ""){
    valormaterias = (materia * valor) + (papeleria + carnet)
    valordescuento = (valormaterias * 20)/100
    valortotalmaterias = valormaterias - valordescuento        
   
    coste.innerHTML = "Hola "+ nombre.value +", el coste total de matricula es de: " + valortotalmaterias
}else{
    alert("Error")
}


});

