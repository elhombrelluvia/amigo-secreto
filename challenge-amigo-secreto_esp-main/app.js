
let listaNombres = []; 
function agregarAmigo() {
    
    let nombreAmigo = document.getElementById('amigo').value;
    
   
    if (nombreAmigo !== '') {
        
        listaNombres.push(nombreAmigo);


        document.getElementById('amigo').value = '';
        
     
        alert('Amigo agregado con éxito!');

        mostrarListaAmigos();
    } else {
        
        alert('El campo no puede estar vacío.');
    }
}


function mostrarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = ''; 

    
    listaNombres.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
   
    if (listaNombres.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * listaNombres.length);
    const amigoSecreto = listaNombres[indexAleatorio];

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
