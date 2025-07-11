import React, { useState } from 'react'

//  

const DailyBills = () => {
    // Step 1: Create a state to remember the input value
    const [inputValue, setInputValue] = useState("");

    //Step 2 to hnadle the input change
    const handleSubmit = () => {
        setDisplayedValue(inputValue);
    };


    // Step 3: Create another state for showing the submitted value
  const [displayedValue, setDisplayedValue] = useState("");

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }} >
      <h3>Daily Bills</h3>
      <input type="text" 
      value={inputValue}// connect the state
      onChange={(e) => setInputValue(e.target.value)}
        // Update the state on typing change
      placeholder='Type Something '      
      />

        <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>Submit</button>


        {/* Show the DisplaqodValue state */}
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <strong>Submitted Value:</strong> {displayedValue}
      </div>
    </div>
  )
}

export default DailyBills
