import TasksList from "./TasksList";

const Table = () => {
    const tasks = [
      { id: 1, text: 'Hacer compra', completed: false },
      { id: 2, text: 'Limpiar casa', completed: true },
      { id: 3, text: 'Terminar Proyecto', completed: false },
      { id: 4, text: 'Pagar Matricula', completed: true },
      { id: 5, text: 'Revisar Pendientes', completed: false }
    ];

    return(
        <div>
            <TasksList tasks={tasks}/>
        </div>

    );
}

export default Table;