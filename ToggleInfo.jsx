import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const ToggleInfo = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div style={styles.container}>
            <h2>Ẩn Hiển Thị Thông Tin</h2>
            <button onClick={handleToggle} style={styles.button}>
                {isVisible ? 'Ẩn thông tin' : 'Hiển thị thông tin'}
            </button>

            {isVisible && (
                <p style={styles.info}>
                    Chào mừng bạn đến với thế giới React! Đây là đoạn <br />
                    văn bản được điều khiển với state `useState`.
                </p>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '6px',
        backgroundColor: 'blue',
        color: '#fff',
        border: 'none',
        marginBottom: '15px',
    },
    info: {
        fontSize: '16px',
        color: '#333',
        marginTop: '10px',
    },
};

// Mount component trực tiếp nếu bạn đang dùng file này độc lập
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToggleInfo />);
