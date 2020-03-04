import React from 'react';
import KeypadRow from './KeypadRow';
import Button from '../../../components/Button';

const charactersArray = [['C', '←', '%', '/'], [9, 8, 7, '*'], [6, 5, 4, '-'], [3, 2, 1, '+'], [0, '.', '=']];

const generateKeyPadRows = (props) => charactersArray.map((row, index) => {
  return (
    <KeypadRow key={index}>
      {
        row.map(character => 
        <Button
          type={character === '=' ? 'large' : ''} 
          onClick={props.onButtonPress}
          key={character}
        >
          {character}
        </Button>)
      }
    </KeypadRow>
  )
});

const keypad = (props) => (
  <section className="keypad">
    {generateKeyPadRows(props)}
  </section>
);

export default keypad;