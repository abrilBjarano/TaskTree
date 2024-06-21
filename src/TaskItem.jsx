export const TaskItem = ({ task, onDeleteTask, onToggleTask }) => {

   const itemStyle = {
      backgroundColor: 'transparent', // Fondo transparente
      border: '1px solid rgba(0, 0, 0, 0.1)', // Borde suave
      width: '140%', // Ancho de cada elemento de la lista
      margin: '0 auto', // Centrando cada elemento
   };

   return (
      <li
         className="list-group-item d-flex justify-content-between"
         key={task.id}
         style={itemStyle}
      >
         <h6
            className={`align-self-center text-muted ${ (task.done) ? 'text-decoration-line-through' : '' }`}
            onClick={() => onToggleTask(task.id)}
         >
            * {task.desc}
         </h6>
         <button
            className="btn btn-danger"
            onClick={() => onDeleteTask(task.id)}
         >
            X
         </button>
      </li>
   );
}