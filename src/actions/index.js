export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task,
    }
}

export const deleteTask = (deleteTask) => {
    return {
        type: 'DELETE_TASK',
        payload: deleteTask,
    }
}
 