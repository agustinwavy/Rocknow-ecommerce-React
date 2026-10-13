import { useState } from 'react';
import './Contador.css';

function ItemCount({ stock }) {
  const [cantidad, setCantidad] = useState(1);

  const cambiar = (num) => {
    setCantidad(prev => Math.min(stock, Math.max(1, prev + num)));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', border: '1px solid #c86414', borderRadius: '5px' , backgroundColor: '#c86414' , boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' ,}}>
      <button className="btn-count" onClick={() => cambiar(-1)}>-</button>
      <span>{cantidad}</span>
      <button className="btn-count" onClick={() => cambiar(1)}>+</button>
    </div>
  );
}

export default ItemCount;