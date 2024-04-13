import React from 'react'
import { SayContext } from './A'


export default function C() {
    console.log()
    
  return (
    <SayContext.Consumer>
        {
            (val)=>{
                return <h1>Say : {val}</h1>
            }
        }
    </SayContext.Consumer>
    
  )
}
