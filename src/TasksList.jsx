import "./style.css";

const TasksList = ({ tasks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3} className="titulo">LISTA DE TAREAS</th>
        </tr>
        <tr>
          <th>N°</th>
          <th>TAREA</th>
          <th>ESTADO</th>
        </tr>
      </thead>
      <tbody className="task-table">
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.id}</td>
            <td>{task.text}</td>
            <td className={task.completed ? "Completado" : "Pendiente"}>
              {task.completed ? "Completado" : "Pendiente"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TasksList;
