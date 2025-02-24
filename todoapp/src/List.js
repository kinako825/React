//List.jsx
import Item from './Item';

const List = ({ todos, deleteTodo }) => {
    // 配列をもとに新しい配列を生成: mapメソッド
    console.log(todos);
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <Item
                        key={todo.id}
                        id={todo.id}
                        deleteTodo={deleteTodo}
                        content={todo.content}
                    />
                );
            })}
        </ul>
    );
};

export default List;