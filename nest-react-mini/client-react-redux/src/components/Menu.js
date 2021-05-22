import React from 'react';

import styles from './Menu.module.css';

function Menu(props) {
  return (
    <div className={styles.menu}>
      {props.children}
    </div>
  )
}

export default Menu;
