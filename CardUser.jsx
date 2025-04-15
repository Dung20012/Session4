import React from 'react';

const CardUser = () => {
    const users = [
        {
            name: 'Nguyễn Văn A',
            age: 25,
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
            name: 'Trần Thị B',
            age: 22,
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        {
            name: 'Lê Văn C',
            age: 30,
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
    ];
    

    return (
        <div style={styles.container}>
            {users.map((user, index) => (
                <div key={index} style={styles.card}>
                    <img src={user.avatar} alt={user.name} style={styles.avatar} />
                    <h3>{user.name}</h3>
                    <p>Tuổi: {user.age}</p>
                </div>
                
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '20px'
    },
    card: {
        width: '200px',
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    avatar: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '12px',
    }
};

export default CardUser;
