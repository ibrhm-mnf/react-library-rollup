import React, { useEffect } from 'react'

const DemoComponent = () => {
  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await response.json()
    console.log(json, 'hi')
  }

  useEffect(() => {
    getData()
  }, [])

  return <div>Hi, Demo Component</div>
}

export default DemoComponent
