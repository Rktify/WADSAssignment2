import styles from "../styles/Add.module.css";
import React, {useState} from 'react';

function Add(props) {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault()
    props.addTask(message)
    setMessage("")
  };

  return (
    <form onSubmit = {handleClick}>
      
      <input value = {message} type="text" placeholder="WADS Assignment 2..." className={styles.search} onChange={handleChange} />

      <button type = "submit" className={styles.button}> Add Task </button>
      
    </form>
  )
}

export default Add