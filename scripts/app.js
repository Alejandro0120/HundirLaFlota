document.querySelector('#enviar').addEventListener('click',imprimirTablero);


function disparar(e){
    if(e.target.className != 'tablero'){
        console.log('NO HAGAS CLICK')
    }else{
        console.log(e.target.className);
    }
    
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

    document.querySelector('table').addEventListener('click',disparar);

}