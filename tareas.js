class TareasManager {
    constructor() {
      this.tareas = [];
    }
  
    // Función para crear una tarea
    crearTarea(nombre) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const nuevaTarea = { nombre, completada: false };
          this.tareas.push(nuevaTarea);
          resolve(nuevaTarea);
        }, 1000); // Simulamos un proceso asíncrono con setTimeout
      });
    }
  
    // Función para eliminar una tarea
    eliminarTarea(indice) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (indice >= 0 && indice < this.tareas.length) {
            const tareaEliminada = this.tareas.splice(indice, 1)[0];
            resolve(tareaEliminada);
          } else {
            reject(new Error('Índice de tarea inválido'));
          }
        }, 1000); // Simulamos un proceso asíncrono con setTimeout
      });
    }
  
    // Función para completar una tarea
    completarTarea(indice) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (indice >= 0 && indice < this.tareas.length) {
            this.tareas[indice].completada = true;
            resolve(this.tareas[indice]);
          } else {
            reject(new Error('Índice de tarea inválido'));
          }
        }, 1000); // Simulamos un proceso asíncrono con setTimeout
      });
    }
  
    // Función para mostrar todas las tareas
    mostrarTareas() {
      console.log(this.tareas);
    }
  }
  
  // Uso de async/await
  async function ejecutarAsyncAwait() {
    const manager = new TareasManager();
    
    try {
      const tarea1 = await manager.crearTarea('Hacer la compra');
      console.log('Tarea creada:', tarea1);
  
      await manager.completarTarea(0);
      console.log('Tarea completada:', manager.tareas[0]);
  
      const tareaEliminada = await manager.eliminarTarea(0);
      console.log('Tarea eliminada:', tareaEliminada);
  
      manager.mostrarTareas();
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Uso del método then()
  function ejecutarThen() {
    const manager = new TareasManager();
  
    manager.crearTarea('Hacer la compra')
      .then(tarea1 => {
        console.log('Tarea creada:', tarea1);
        return manager.completarTarea(0);
      })
      .then(tareaCompletada => {
        console.log('Tarea completada:', tareaCompletada);
        return manager.eliminarTarea(0);
      })
      .then(tareaEliminada => {
        console.log('Tarea eliminada:', tareaEliminada);
        manager.mostrarTareas();
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }
  
  // Comentar o descomentar según la prueba que desees ejecutar
  // ejecutarAsyncAwait();
  // ejecutarThen();
  