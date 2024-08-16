//Primer ejercicio
const tareas = [
    {
        id: 12,
        nombre: "Tarea 1",
        completada: false,
    },
    {
        id: 1,
        nombre: "Tarea 2",
        completada: false,
    },
    {
        id: 122,
        nombre: "Tarea 3",
        completada: false,
    },
    {
        id: 123,
        nombre: "Tarea 4",
        completada: false,
    },
];


const completarTarea = (tareas) => {
    const result = tareas.filter((tarea) => tarea.id = true );
    if (tareas.completada === false){
        console.log(true);
    }
    return result
};

completarTarea(tareas, 1);


//Segundo ejercicio
const ciudades = [
    {
        nombre: "Brasil",
        poblacion: 120,
    },
    {
        nombre: "Colombia",
        poblacion: 1200,
    },
    {
        nombre: "Mexico",
        poblacion: 12023,
    },
    {
        nombre: "EE.UU",
        poblacion: 12045,
    },
];

const ciudadConMayorPoblacion = (ciudades) => {
    let counter = ciudades[0].poblacion;
    ciudades.forEach(ciudad => {
        if(counter.poblacion < ciudad.poblacion){
            
        }
    });
    return counter;
};

ciudadConMayorPoblacion(ciudades, 120);