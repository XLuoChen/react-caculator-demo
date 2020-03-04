import React, {
  Component
} from 'react';
import Screen from './Screen';
import Keypad from './Keypad';

const caculator = () => 
  <div className='calculator' >
    <Screen />
    <Keypad />
  </div>;

export default caculator;