const INIT_STATE = [{ id: 1, task: 'Dokončiť react appku', completed: false, softDeleted: true },
{ id: 2, task: 'Naučiť sa react', completed: true, softDeleted: true },
{ id: 3, task: 'Nebyť perfekcionalista', completed: true, softDeleted: false },
{ id: 4, task: 'Deleted task', completed: false, softDeleted: false }
]

const todos = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let id = Math.max(...state.map((task2) => task2.id)) + 1;
      return [
        ...state,
        {
          id,
          task: action.payload.text,
          completed: false,
          softDeleted: false
        }
      ];
    case 'REMOVE_TODO':
      return state.filter(x => x.id !== action.payload.taskId);
    case 'EDIT_TODO':
      return state.map((task) => {
        if (task.id === action.payload.taskId) {
          return { ...task, task: action.payload.text };
        }
        return task;
      });
    case 'SOFTDELETE_TODO':
      return state.map((task) => {
        if (task.id === action.payload.taskId) {
          return { ...task, softDeleted: !task.softDeleted };
        }
        return task;
      });
    case 'COMPLETE_TODO':
      return state.map((task) => {
        if (task.id === action.payload.taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    default:
      return state
  }
}

export default todos;