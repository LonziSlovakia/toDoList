export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    text 
  }
})
export const removeTodo = taskId => ({
  type: 'REMOVE_TODO',
  payload: {
    taskId 
  }
})
export const editTodo = (text,taskId) => ({
  type: 'EDIT_TODO',
  payload: {
    text,
    taskId
  }
})
export const softDeleteTodo = taskId => ({
  type: 'SOFTDELETE_TODO',
  payload: {
    taskId 
  }
})
export const completeTodo = taskId => ({
  type: 'COMPLETE_TODO',
  payload: {
    taskId 
  }
})