import React, { useState, useEffect } from 'react';

const TodoApp = () => {
    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    const handleAdd = () => {
        if (!task.trim()) {
            alert('Vui lòng nhập công việc!');
            return;
        }

        const newTask = {
            id: Date.now(),
            name: task,
            completed: false,
        };

        const updatedList = [...todoList, newTask];
        setTodoList(updatedList);
        setTask('');
    };

    const toggleStatus = (id) => {
        const updated = todoList.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
        );
        setTodoList(updated);
    };

    const handleDelete = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xoá công việc này?')) {
            const updated = todoList.filter((item) => item.id !== id);
            setTodoList(updated);
        }
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
            <h2>Quản lý công việc</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Nhập công việc..."
                    style={{ flex: 1, padding: '8px' }}
                />
                <button onClick={handleAdd}>Thêm</button>
            </div>

            <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '20px' }}>
                {todoList.map((item) => (
                    <li key={item.id} style={{ marginBottom: '10px' }}>
                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => toggleStatus(item.id)}
                        />
                        <span
                            style={{
                                marginLeft: '10px',
                                textDecoration: item.completed ? 'line-through' : 'none',
                            }}
                        >
                            {item.name}
                        </span>
                        <button
                            onClick={() => handleDelete(item.id)}
                            style={{
                                marginLeft: '10px',
                                background: 'red',
                                color: 'white',
                                border: 'none',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            Xoá
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
