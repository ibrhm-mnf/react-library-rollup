import React from 'react'
import Other from './Other'
import style from './style.css'

const DemoComponent = () => {
  return (
    <div className={style.container}>
      Hii, Demo Component <Other />
    </div>
  )
}

export default DemoComponent
