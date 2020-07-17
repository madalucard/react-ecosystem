import react from 'react';
import TodoListItem from '.TodoListItem';
import './TodoList';

const TodoList = ({ todos }) => (
	<div className="list-wraper">
		{todos.map((todo) => (
			<TodoListItem todo={todo} />
		))}
	</div>
);

export default TodoList;
