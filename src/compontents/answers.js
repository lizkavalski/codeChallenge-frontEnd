import React, {useState, useEffect, Props } from 'react';
// import axios from 'axios';
import Challenge from './challenge';

function Answer ({challenge}){
  console.log ('in the child');
  return(
    <>
    <h1>Hello world</h1>
      {/* <h1>{challenge.title}</h1>
      <p>{challenge.algorthism}</p>
      <img src={challenge.pseudocode}/> */}
    </>
  );
}

export default Answer;