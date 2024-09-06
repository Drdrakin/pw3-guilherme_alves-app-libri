import React from 'react'
import styles from './Container.module.css'

const Container = (props) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Container;