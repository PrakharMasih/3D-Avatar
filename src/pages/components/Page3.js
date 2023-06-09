import React from 'react'
import styless from './css/page3.module.css'

function Page3() {
    
  return (
    <div style={{ height:"180vh", backgroundColor:"snow"}}>
        <div id={styless.righttext}>
                <h3>BE CREATIVE / UNLOCK YOURSELF</h3>
                <h1>BUILD
                    <br/>
                    WITH 
                    <br/>
                    NEXT.JS</h1>
            </div>
            <div id={styless.lefttext}>
                <h1>MADE FOR 
                    <br/>
                    EDUCATION &
                    <br/>
                    LEARNING PERSPECTIVE</h1>
                    <h3>.. </h3>
            </div>
    </div>
  )
}

export default Page3