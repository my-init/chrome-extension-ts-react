import React from 'react';
import './index.scss';
import { sendMessage } from '../common/communication';
import { noop } from '../common/const';

const Popup = () => {
  const sayHi = () => {
    sendMessage({ type: 'notify', payload: 'hello from popup' });
  };
  return (
    <div className="Popup">
      <button onClick={sayHi}>click</button>
      <button onClick={noop}>noop</button>
    </div>
  );
};

export default Popup;
