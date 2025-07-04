import { cn } from "@/lib/utils";
import type { ITask } from "@/types/types";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

interface  IProps {
    task: ITask
}
const TaskCard = ({task} : IProps) => {
    return (
      <div className="mt-10 border-b-2 py-5 px-2">
        <div className="flex">
          <div className="w-full flex justify-between items-center ">
            <div className="flex items-center space-x-3">
              <div className={cn("size-3 rounded-full", {
                "bg-red-500" : task.priority === "high",
                "bg-yellow-500" : task.priority === "medium",
                "bg-green-500" : task.priority === "low"
              })}></div>
              <h1>{task.title}</h1>
            </div>
            <div className="flex space-x-3">
              <MdDelete className="text-red-500"></MdDelete>
              <FaRegEdit className="text-yellow-500"></FaRegEdit>
            </div>
          </div>
        </div>

        <div>
          <p className="opacity-80">{task.description}</p>
        </div>
      </div>
    );
};

export default TaskCard;
