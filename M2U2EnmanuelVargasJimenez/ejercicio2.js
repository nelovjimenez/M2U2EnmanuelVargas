let a = document.getElementById('a'),
        b = document.getElementById('b'),
        c = document.getElementById('c'),
        d = document.getElementById('d');     

    const boton = document.getElementById('boton')

    boton.addEventListener('click', () => {
        if(a.value == "" || b.value == "" || c.value == "" || d.value == "" ){
            alert('No pueden vacios')
        } else if(a.value == b.value || a.value == c.value ||a.value == d.value){
            alert('no pueden haber numeros iguales')
        }else if(b.value == a.value || b.value == c.value ||b.value == d.value){
            alert('no pueden haber numeros iguales')
        }else if(c.value == a.value || c.value == b.value ||c.value == d.value){
            alert('no pueden haber numeros iguales')
        }else if(d.value == a.value || d.value == c.value ||d.value == b.value){
            alert('no pueden haber numeros iguales')
        }else{
            let mayor = Math.max(a.value, b.value, c.value, d.value)
            let menor = Math.min(a.value, b.value, c.value, d.value)
            if((mayor == a.value || mayor == b.value ||  mayor == c.value ||  mayor == d.value ) ||
            (menor == a.value || menor == b.value ||  menor == c.value ||  menor == d.value)){
                msgmayor.innerHTML = 'el numero mayor es: ' + mayor
                msgmenor.innerHTML = 'el numero menor es: ' + menor
            }else{
                alert("Fatal Error")
            }
        }
        
    });