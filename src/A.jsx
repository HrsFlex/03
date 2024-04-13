import React, { createContext } from 'react'
import B from './B'

const SayContext = createContext();

export default function A() {
    const say = 'Hello Ji';
  return (
    <div>
        <SayContext.Provider value={say}>
        <B  />
        </SayContext.Provider>        

      
    </div>
  )
}

export {SayContext};

