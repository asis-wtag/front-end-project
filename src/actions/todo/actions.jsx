import { ADD_TODO, DELETE_TODO, COMPLETE_ALL_TODO, COMPLETE_TODO } from "./action_types"

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        payload: {
            todoId: todoId
        }
    }
}

export const completeAllTodo = (todoCost) => {
    return {
        type: COMPLETE_ALL_TODO,
        payload: {
            todoCost: todoCost
        }
    }
}

export const completeTodo = (todoId, todoCost) => {
    return {
        type: COMPLETE_TODO,
        payload: {
            todoId: todoId,
            todoCost: todoCost
        }
    }
}