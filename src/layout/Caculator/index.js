import React, {
  Component
} from 'react';
import Screen from './Screen';
import Keypad from './Keypad';

export default class caculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: '',
      result: 0
    }
  }

  onButtonPress = event => {
    let { equation, result } = this.state;
    const pressedBtn = event.target.innerHTML;
    const operations = ['+', '-', '*', '/'];

    if (pressedBtn === 'C') return this.clear();
    else if(((parseInt(pressedBtn) >= 0) && (parseInt(pressedBtn) <=9)) || pressedBtn === '.') {
      equation += parseInt(pressedBtn);
    } 
    else if (operations.includes(pressedBtn)) {
      equation += ' ' + pressedBtn + ' '; 
    } 
    else if (pressedBtn === '%') {
      let hasOperation = false;
      const str = equation.split('').reverse();
      const firstOperation = str.find(item => operations.includes(item));
      
      if (firstOperation) {
        hasOperation = true;
        const index = str.indexOf(firstOperation);
        const percentVal = str.slice(0, index).reverse().join('');
        const slicedEquation = str.slice(index, str.length).reverse().join('');
        equation = slicedEquation + ' ' + this.toPoint(percentVal);
      }
      equation = hasOperation ? equation : this.toPoint(equation);
    }
    else if (pressedBtn === '=') {
      try {
        // eslint-disable-next-line
        const evalResult = eval(equation);
        result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
      } catch(error) {
        console.log('Please avoid input invalid characters!');
      }
    }
    else {
      equation.trim();
      equation = equation.slice(0, equation.length - 2);
    }

    this.setState({ equation, result });
  }

  toPoint = percent => {
    return (percent / 100).toFixed(2);
  }

  clear = () => {
    this.setState({
      equation: '',
      result: 0
    })
  }

  render() {
    const { equation, result } = this.state;
    return (
      <div className='calculator' >
        <Screen equation={equation} result={result} />
        <Keypad onButtonPress={this.onButtonPress} />
      </div>
    );
  }
}
