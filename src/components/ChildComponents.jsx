import React from 'react'

const ChildComponents = (props) => {
  return (
    <div>
      <button onClick={()=> props.sendMessage('Hi From Child')}>
        Send Message to Parents
      </button>
    </div>
  )
}

export default ChildComponents
