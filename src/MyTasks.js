import { CiEdit } from "react-icons/ci";
import { VscTrash } from "react-icons/vsc";

export const MyTasks = ({ text, updatingInInput, deleteTask }) => {
    return(
        <div className="taskDesign">
            <p>{text}</p>
            <div>
                <CiEdit onClick={updatingInInput} className="iconDesign raise"></CiEdit>
                <VscTrash onClick={deleteTask} className="iconDesign raise"></VscTrash>
            </div>
        </div>
    )
}