document.querySelector('#enviar').addEventListener('click',imprimirTablero);

class Barco {
    constructor(tamallo, direccion){
        this.tamallo = tamallo;
        this.direccion = direccion;
    }
}










function disparar(e){
    if(e.target.className != 'tablero'){
        console.log('NO HAGAS CLICK')
    }else{
        console.log(e.target.className);
    }
    
}

function crearFormularioBarco(){
    let crearBarco = document.querySelector('#crearBarco');
    let fragmentBarco = document.createDocumentFragment();
    let h2 = document.createElement('h1');
    h2.textContent = 'Creación de Barcos';
    
    let form = document.createElement('form');
    let div1 = document.createElement('div');
    let label1 = document.createElement('label');
    label1.textContent = 'Tamaño del Barco: ';

    let inputNum=document.createElement('input')
    inputNum.type = 'number';
    inputNum.id = 'tamallo';
    inputNum.min = 1;
    inputNum.max = 4;
    inputNum.value = 1;

    let div2 = document.createElement('div');
    let label2 = document.createElement('label');
    label2.textContent = 'Direccion del barco: ';

    let inputRadio=document.createElement('input');
    inputRadio.value 

    div1.append(label1, inputNum);
    form.append(div1);
    fragmentBarco.append(h2,form);
    crearBarco.appendChild(fragmentBarco);

}


function imprimirTablero(){
    let tam = document.querySelector('#tam').value;
    let tablero = document.querySelector('#tablero');
    tablero.innerHTML = '';
    tam = Number(tam)+2;
    let table = document.createElement('table');
    let fragment = document.createDocumentFragment();
    for (let i = 0; i<tam; i++){
        let fila = document.createElement('tr');
        
        for (let j = 0; j<=tam; j++){

            if(j < tam){
                let column = document.createElement('td');
                if(i === 0 || i===tam-1){
                    if(j!=0 && j!=tam-1){
                        column.setAttribute('class','lleno');
                        column.textContent = j-1;
                    }else{
                        column.setAttribute('class','vacio');
                    }
                }else{
                    if(j===0 || j===tam-1){
                        
                        column.textContent = i-1;
                    }else{
                        column.setAttribute('class','tablero');
                    }
                    
                }
                fila.append(column);
            }
        }
        fragment.append(fila);
    }
    table.appendChild(fragment)
    tablero.appendChild(table)

    crearFormularioBarco();

    document.querySelector('table').addEventListener('click',disparar);

}
