class Tablero {
    constructor(tamallo){
        this.tamallo = Number(tamallo);
    }


    imprimirTablero(){
    
        let tablero = document.querySelector('#tablero');
        tablero.innerHTML = '';
        let tam = this.tamallo+2;
        console.log(tam);
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
}

class HundirFlota{
    constructor(){
        this.barcos = [];
    }
    /*generarBarco() */
    /*colocarBarco() */
    /*dispararBarco() */
    /*verificarDisparo()
    si disparas al tamblero es valido pero si dispara a los bordes no lo es, si toca agua o barco
    
    switch(disparo)
    
    agua / tablero
    barco

    
    return verificar;
    */
    /*verificarEspacio()
    si hay espacio te deja seguir generar mas barcos, si no hay espacios validos para mas barcos te muestra un mensaje que no 
    puedes generar mas barcos
    */
}


class Barco {
    constructor(tamallo, direccion){
        this.tamallo = tamallo;
        this.direccion = direccion;
    }
}




function contacto(e){
    console.log(document.querySelector('#direcion').value);
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
    crearBarco.textContent = '';
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

    let div3 = document.createElement('div');
    let label3 = document.createElement('label');
    label3.textContent = 'Vertical: ';
    let inputRadio1=document.createElement('input');
    inputRadio1.type = 'radio';
    inputRadio1.name = 'direccion';
    inputRadio1.id = 'direcion';
    inputRadio1.value = 'vertical'

    let label4 = document.createElement('label');
    label4.textContent = 'Horizontal: ';
    let inputRadio2=document.createElement('input');
    inputRadio2.type = 'radio';
    inputRadio2.name = 'direccion';
    inputRadio2.id = 'direcion';
    inputRadio2.id = 'horizontal';

    let inputButton = document.createElement('input');
    inputButton.type = 'button';
    inputButton.id = 'creacion';
    inputButton.value = 'Crear Barco';


    div3.append(label3, inputRadio1, label4, inputRadio2)
    div2.append(div3);
    div1.append(label1, inputNum);
    form.append(div1,div2, inputButton);
    fragmentBarco.append(h2,form);
    crearBarco.appendChild(fragmentBarco);


    creacion.addEventListener('click',contacto);

}





document.querySelector('#enviar').addEventListener('click',()=>{
    let tablero = new Tablero(document.querySelector('#tam').value);
    tablero.imprimirTablero();

    /*let hundirFlota= new HundirFlota();
    
    hundirFlota.c
    */

});
