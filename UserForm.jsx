// src/UserForm.jsx
import React, { useState } from 'react';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { name, email, age: Number(age) };
        console.log('Dữ liệu người dùng:', userData);
        setName('');
        setEmail('');
        setAge('');
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Thông Tin Người Dùng</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br /><br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br /><br />
                <input
                    type="number"
                    placeholder="Tuổi"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                /><br /><br />
                <button type="submit">Gửi</button>
            </form>
        </div>
    );
};

export default UserForm;
