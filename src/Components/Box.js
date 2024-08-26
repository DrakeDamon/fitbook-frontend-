import React from 'react';

function Box({ title, content, date }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{date}</p>
    </div>
  );
}

export default Box;
