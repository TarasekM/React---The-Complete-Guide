import React from 'react';
import styles from './Cockpit.module.css';


const Cockpit = (props) => {
  const textStyles = [];
  if (props.personList.length <= 2){
    textStyles.push(styles.TextRed);
  }
  if (props.personList.length <= 1){
    textStyles.push(styles.Bold);
  }

  const buttonStyles = [styles.Button]
  if (props.show === true){
    buttonStyles.push(styles.Red);

  }

  return (
    <div>
      <h1>First change on Page.</h1>
    <div>
      <p className={textStyles.join(' ')}>A list of people.</p>
      <p>And the second one.</p> 
    </div>
    <div>
      <button className={buttonStyles.join(' ')} onClick={props.toggle}>
        Toggle the Name
      </button>
    </div>
    </div>
  );
};

export default Cockpit;