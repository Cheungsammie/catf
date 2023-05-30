import React from 'react';

//export default function Hello() {}

//Declare a function 'Hello()'
const Hello = () => {     //we expect props to have a property called name     
const greeting = 'Hello Components';     
return <h1>{greeting}</h1>;   
}   
  
export default Hello; 
