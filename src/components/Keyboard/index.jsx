import React from 'react';
import Key from '../Key';

function Keyboard() {
  const row1 = 'qwertyuiop'.split('');
  const row2 = 'asdfghjkl'.split('').concat('backspace');
  const row3 = 'zxcvbnm'.split('').concat('enter');

  const getKeys = (keysArr) => (
    <div>
      {keysArr.map((keysArr) => (
        <Key key={keysArr} value={keysArr} />
      ))}
    </div>
  );

  return (
    <section>
      {getKeys(row1)}
      {getKeys(row2)}
      {getKeys(row3)}
    </section>
  );
}

export default Keyboard;
