import React, { useState } from 'react';

const RandomNumber = () => {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 10) + 1;
    setNumber(random);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🎲 Tạo số ngẫu nhiên từ (1-10)</h2>
      <button onClick={generateRandomNumber} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Tạo số
      </button>

      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        {number === null ? 'Chưa có số nào được tạo' : `Số được tạo: ${number}`}
      </div>
    </div>
  );
};

export default RandomNumber;
