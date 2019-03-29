import React from 'react';
import React, { Component } from 'react';
import './style.css';
import Data from 'data';
import firebase from 'firebase';





export default class Hello extends Component{


constructor(props){
  super(props);
  this.state = {
   
     input:"",
      output:[],
      isloaded:false
     
   }
   this.getvalue = this.getvalue.bind(this);
  this.getapi = this.getapi.bind(this);
}

getvalue(event){
   this.setState({
      input:event.target.value,
    });
    
   
}
getapi(e){
 
  fetch('https://ifsc.razorpay.com/'+this.state.input)
.then(response =>  response.json())
.then((resData) => {

  this.setState({
        output:resData,
        isloaded:true
          });
  
})

 e.preventDefault();
}



render(){

   var items = this.state.output;

  return(
   
    <div className="container-fluid" id="heading">
       <div className="col-12">
       <form className="text-center p-5">
        <input onChange={this.getvalue} type="text" id="defaultContactFormName" className="form-control mb-4 text-center" placeholder="Enter IFSC code" />
        <button className="btn btn-info btn button p-1 " type="submit" onClick={(e)=> this.getapi(e)}>Submit</button>
        </form>
         
       </div>
        
       <Data name={this.state.output} isloaded={this.state.isloaded}/>
    </div>
  );
}
}
