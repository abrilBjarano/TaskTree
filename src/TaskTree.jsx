import { TaskAdd } from "./TaskAdd";
import { TaskList } from "./TaskList";
import { useTask } from "./hooks/useTask";

export const TaskTree = () => {

   const { tasks, onAddTask, onDeleteTask } = useTask();

   return (
      <>
         <h1>TaskTree</h1>

         <div className="row">

            <div className="col-7">
               <TaskList 
                  tasks={ tasks }
                  onDeleteTask={ onDeleteTask } 
               />
            </div>

            <div className="col-5">
               <TaskAdd onAddTask={ onAddTask } />
            </div>
         </div>
      </>
   )
}