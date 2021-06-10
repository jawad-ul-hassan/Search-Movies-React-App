import React from 'react';
import classes from './Loader.module.css';

function Loader() {
  return (
    <div className={classes.mid}>
      <div className={classes['lds-dual-ring']}></div>
    </div>
  );
}

export default Loader;
