import logo from './logo.svg';
import './App.css';
import ThirdComoponent,{SecondComoponent,FirstComoponent} from './components';
 
import Header from './components/header';
import Child1 from './components/child1';
import { createContext, useEffect, useState } from 'react';
import LearnUseeffect from './components/useEffect';
import Child2 from './components/child2';

import Formik1 from  './components/login/Formik1';
// import Login from './components/login/Login.js';
import LoginForm from './components/login/LoginForm';
import TernaryOperator from './components/ternaryOperator'
import { BrowserRouter} from 'react-router-dom'
 


const data1=createContext();
const data2=createContext();

function App() {

  // const [obj,setObj]=useState({
  //   name:"John doe",
  //   age:12
  // })
 
  // useEffect(()=>{
   
  //   setObj({name:"Ajay"})

  // },[obj])

  
  //  setTimeout(()=>{
  //   setObj({name:"Ajay"})
  //   },5000)

  // console.log(obj?.name)
  // const address="123,park street, California"

  return (
    <BrowserRouter>
    {/* <Formik1 /> */}
    <>
    {/* <LoginForm></LoginForm> */}

    <TernaryOperator></TernaryOperator>
      
      </>
      
     </BrowserRouter>
  );
}

export default App;

export {data1,data2}
