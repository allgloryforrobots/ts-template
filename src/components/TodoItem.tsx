import {FC} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {

    const {id, title, completed} = todo

    return (
        <div>
            <input type="checkbox" checked={completed}/>
            {id}. {title}
        </div>
    );
};

export default TodoItem;