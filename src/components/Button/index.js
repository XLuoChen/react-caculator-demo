import React from 'react';

const button = (props) => {
  const classes = ['btn'];
  if (typeof props !== 'undefined' && typeof props.type !== 'undefined' && props.type !== '')
  classes.push('btn--' + props.type);

  return (<button className={classes.join(' ')} onClick={props.onClick}>
    {props.children}
  </button>)
};

export default button;
