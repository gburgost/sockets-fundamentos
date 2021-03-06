var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
})

// Escuchar (on)
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})

// Enviar informacion (emit)
socket.emit('enviarMensaje', {
    usuario: 'Gonzalo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})