import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODO,
} from "../actions/todo/action_types";

const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            status: "incomplete",
            cost: null,
          },
        ],
      };
    }

    case DELETE_TODO: {
      const newList = state.list.filter(
        (element) => element.id !== action.payload.todoId
      );
      return {
        ...state,
        list: newList,
      };
    }

    case COMPLETE_ALL_TODO: {
      const { todoCost } = action.payload;
      let todoName = "";
      state.list.map((item) => {
        if (item.status === "incomplete") todoName = todoName + item.data+",";
      });
      if(todoName.length == 0) return state;
      todoName = todoName.slice(0, -1);
      const newList = state.list.filter(
        (element) => element.status === "complete"
      );
      const updatedList = [
        ...newList,
        {
          id: new Date().getTime().toString(),
          data: todoName,
          status: "complete",
          cost: todoCost,
        },
      ];
      return {
        ...state,
        list: updatedList,
      };
    }

    case COMPLETE_TODO: {
      const { todoId, todoCost } = action.payload;
      const newList = state.list.map((element) => {
        if (element.id === todoId) {
          return {
            ...element,
            cost: todoCost,
            status: "complete",
          };
        }
        return element;
      });
      return {
        ...state,
        list: newList,
      };
    }

    default:
      return state;
  }
};

export default todoReducers;
