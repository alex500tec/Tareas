
const formulario = document.getElementById('formulario');
const cajaInformacion = document.getElementById('caja-informacion');
const datosDiv = document.getElementById('datos');
const btnCerrar = document.getElementById('btn-cerrar');


function validarFormulario(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const edad = parseInt(document.getElementById('edad').value.trim());

   
    if (!nombre) {
        alert("El nombre no puede estar vacío.");
        document.getElementById('nombre').focus();
        return;
    }

    if (!apellidos) {
        alert("Los apellidos no pueden estar vacíos.");
        document.getElementById('apellidos').focus();
        return;
    }

    if (isNaN(edad) || edad <= 0) {
        alert("La edad debe ser un número positivo mayor a 0.");
        document.getElementById('edad').focus();
        return;
    }

  
    datosDiv.innerHTML = `<strong>Nombre:</strong> ${nombre}<br><strong>Apellidos:</strong> ${apellidos}<br><strong>Edad:</strong> ${edad}`;
    cajaInformacion.style.display = 'block';
cajaInformacion.style.border = '2px dotted black';
cajaInformacion.style.display = 'inline-block';
cajaInformacion.style.padding = '10px';

}


function cerrarCaja() {
    cajaInformacion.style.display = 'none';
    formulario.reset();
    document.getElementById('nombre').focus();
}


formulario.addEventListener('submit', validarFormulario);


btnCerrar.addEventListener('click', cerrarCaja);
