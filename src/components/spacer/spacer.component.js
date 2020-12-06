import React from 'react'


const SpacerComponent = ({ space }) => {
  space = space ?? 8
  return (
    <div style={{
        marginTop: `${space*2}px`,
        marginBottom: `${space*2}px`,
    }}>
            
    </div>
  )
}


export default SpacerComponent
