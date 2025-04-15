import React, { useState } from 'react';

const CounText = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản tại đây..."
        rows="5"
        cols="40"
        style={{ padding: '10px' }}
      />
      <p>
        <strong>Số ký tự:</strong> {text.length}
      </p>
    </div>
  );
};

export default CounText;
