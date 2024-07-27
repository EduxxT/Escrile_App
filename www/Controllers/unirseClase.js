function unirseClase() {
    var codigoClase = document.getElementById('codigoClase').value;

    fetch(joinClass_route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ codigo: codigoClase })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('mensajeUnirseClase').innerText = data;
        mostrarClases();
    })
    .catch(error => {
        console.error('Error al unirse a la clase:', error);
        document.getElementById('mensajeUnirseClase').innerText = 'Error al unirse a la clase. Consulta la consola para más detalles.';
    });
}