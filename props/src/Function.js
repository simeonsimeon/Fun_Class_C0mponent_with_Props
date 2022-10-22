

// import React from 'react'
import { logDOM } from '@testing-library/react';
import React, { Component } from 'react'
function Class2(){
    return (
      <div>Class
        l
      </div>
    )
  }
  function Class3(ele){
    // console.log(ele.what);
    return (
      <div>Class3{ele.name}
      <button onClick={()=>ele.what("Good")}>Click</button>
          <Class2 />
      </div>
    )
  }

function Class(Nice){
    // console.log(Nice);
    const get = (e)=>{
           console.log(e);
    }
  return (
    <div>Class
        <Class3 name = {Nice.name} what = {get}/>
    </div>
  )
}
export default Class;



