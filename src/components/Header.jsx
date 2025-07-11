import React from 'react'

const Header = (props) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h1>My React App</h1>
      <p>Welcome (passing data from parent to child ) {props.userName}</p> 
      <b>=========================================================================</b>

      
    </div>
  )
}

export default Header
