/* GESTOR DE TAREAS */

//Paquete Prompt
const prompt = require("prompt-sync")({ sigint: true });

//Array para almacenar las tareas

let tareas = [];

//Funcion para agregar una nueva tarea al array

function agregarTarea(nombreRecibido, fechaLimiteRecibida = null){
    tareas.push({ nombre: nombreRecibido, completada : false, fechaLimite: fechaLimiteRecibida })
}

//agregarTarea("Pasear al perro", 28-12-24);

//Eliminar una tarea
function eliminarTarea(indice){

    if(indice >= 0 && indice < tareas.length){
        tareas.splice(indice,1);
        console.log("Tarea eliminada correctamente");
    }else {
        console.log("Indice de tarea invalido ")
    }

}

//Funcion para marcar una tarea como completada.
function completarTarea(indice){
    if(indice >= 0 && indice < tareas.length){
        tareas[indice].completada = true;
        console.log("Tarea marcada como correcta")
    }else{
        console.log("Indice invalido")
    }
}

//Función para modificar una tarea especifica
function modificarTarea (indice, nuevoNombre, nuevaFechaLimite = null){
    if (indice >= 0 && indice < tareas.length){
        tareas[indice] = nuevoNombre;
        if(nuevaFechaLimite !== null){
            tareas[indice].fechaLimite = nuevaFechaLimite;
        }
        console.log("Tarea Modificada con exito ");
    }else{
        console.log("Indice de tarea invalido");
    }
}

//Funcion para mostrar el menu de opciones
function mostrarMenu(){
    console.log(" --- Menu --- ");
    console.log("1 - Agregar tarea ");
    console.log("2 - Eliminar tarea ");
    console.log("3 - Marcar tarea como completada");
    console.log("4 - Modificar una tarea");
    console.log("5 - Mostrar todas la tareas");
    console.log("0 - Salir")
}

//Funcion para interactuar con el usuario
function interactuarconUsuario(){
    let opcion = -1;

    while(opcion != 0){
        mostrarMenu();
        opcion = parseInt(prompt("Ingrese la opcion seleccionada: "));

        switch (opcion) {
            case 1:
                let nombreTareaNueva = prompt("Ingrese el nombre de la tarea a cargar: ");
                agregarTarea(nombreTareaNueva);
                break;

            case 2:
                let indiceAEliminar = prompt("Ingrese el indice de la tarea a eliminar: ");
                eliminarTarea(indiceAEliminar);
                break;
        
            case 3:
                let indiceACompletar = parseInt(prompt("Ingrese el indice de la tarea a completar: "));
                completarTarea(indiceACompletar);
                break;
                
            case 4:
                let indice = parseInt(prompt("Ingrese el indice a modificar: "))
                let nuevoNombre = prompt("Ingrese el nuevo nombre de su tarea: ");
                modificarTarea(indice,nuevoNombre);
                break;
                
            case 5:
                console.log(" -- LISTA DE TAREAS --");
                console.log(tareas);
                break;

            default:
                console.log("Opcion Invalida")
                break;
        }
    }
}

interactuarconUsuario();