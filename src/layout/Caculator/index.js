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
    let equation = this.state.equation;
    const pressedBtn = event.target.innerHTML;
    const operations = ['+', '-', '*', '/', '%'];

    if (pressedBtn === 'C') return this.clear();
    else if(((parseInt(pressedBtn) >= 0) && (parseInt(pressedBtn) <=9)) || pressedBtn === '.') {
      equation += parseInt(pressedBtn);
    } 
    else if (operations.includes(pressedBtn)) {
      equation += ' ' + pressedBtn + ' '; 
    } 
    else if (pressedBtn === '=') {
      debugger;
      try {
        // eslint-disable-next-line
        const evalResult = eval(equation);
        const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
        this.setState({ result });
      } catch(error) {
        console.log('Please avoid input invalid characters!');
      }
    }
    else {
      equation.trim();
      equation = equation.slice(0, equation.length - 2);
    }

    this.setState({ equation });
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
