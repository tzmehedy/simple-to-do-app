import TaskCard from "@/components/ui/module/TaskCard";
import { TaskModal } from "@/components/ui/module/TaskModal";
import { selectTask } from "@/redux/features/tasks/tasks";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
    const tasks = useAppSelector(selectTask)
    return (
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <h1>Tasks</h1>
          <TaskModal></TaskModal>
        </div>

        <div>
          {tasks?.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    );
};

export default Tasks;