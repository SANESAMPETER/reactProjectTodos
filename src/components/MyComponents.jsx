import React from 'react'

const MyComponents = ({name}) => {
  return (
    <div style={{backgroundColor:'#000000FF', padding:'10px', color:'white', margin:'10px'}}>
      <h1>Hello {name}</h1>
    </div>
  )
}

export default MyComponents
