'use client';

import { ITask } from "@/types/tasks";
import { useState } from "react";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import Modal from "./Modal";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
  
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
  const [openModal, setModal] = useState<boolean>(false)
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

  const handleSubmitEditTodo = (e) => {
    e.preventDefault()
    console.log(openModalEdit);
    
  }

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className="text-blue-500" size={25} />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className='font-bold text-lg'>Edit Task</h3>
            <div className='modal-action'>
            <input value={taskToEdit} onChange={(e) => setTaskToEdit(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
            <button type='submit' className='btn'>Submit</button>
            </div>
          </form>
        </Modal>
        <FiTrash2 cursor="pointer" className="text-red-500" size={25} />
      </td>
    </tr>
  );
};

export default Task;
