import React from 'react';
import Key from '../Key';

function Keyboard() {
  const keys = 'qwertyuiopasdfghjklzxcvbnm'.split('').concat('enter', 'backspace');
  return (
    <section>
      {keys.map((char) => (
        <Key key={char} value={char} />
      ))}
    </section>
  );
}

export default Keyboard;
