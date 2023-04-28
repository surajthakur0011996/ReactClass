import React,{Component} from "react";

class Login extends Component{
    constructor(){
        super();
        this.state={
            username:"anil"
        }
   }

   componentDidMount(){
    console.log("componentDidMount")
    setTimeout(()=>{
     this.setState({username:"kapoor"})
    },2000)
   }

   componentDidUpdate(){
    console.log("hello")
   }

   componentWillUnmount(){
    console.log("componentWillUnmount")
    setTimeout(()=>{
     this.setState({username:""})
    },5000)
   }


   render(){
    return(
        <>
        <h1>i am class components</h1>
        <p>{this.state.username}</p>
        <button onClick={()=>{this.setState({username:"John Doe"})}}>Update</button>
        </>
    )
} 
}

export default Login;


