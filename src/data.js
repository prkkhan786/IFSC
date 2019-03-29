
import React, { Component } from 'react';
import './style.css';


export default class Data extends Component{


constructor(props){
  super(props);

}

  render()
  {
    if(!this.props.isloaded){
      return(
        <div> 
          
         </div>
      )

    }
    else {
        return(
      <div className="mt-10 table1">
        <table className="table">
  
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>BANK</td>
      <td><b>{this.props.name.BANK}</b></td>
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>IFSC</td>
      <td><b>{this.props.name.IFSC}</b></td>
     
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>BRANCH</td>
      <td><b>{this.props.name.BRANCH}</b></td>
     
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>ADDRESS</td>
      <td><b>{this.props.name.ADDRESS}</b></td>
     
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>CONTACT</td>
      <td><b>{this.props.name.CONTACT}</b></td>
     
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>CITY</td>
      <td><b>{this.props.name.CITY}</b></td>
     
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>RTGS</td>
      <td><b>{('' + this.props.name.RTGS)}</b></td>
     
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>DISTRICT</td>
      <td><b>{this.props.name.DISTRICT}</b></td>
     
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>STATE</td>
      <td><b>{this.props.name.STATE}</b></td>
     
    </tr>
  </tbody>
</table>


      </div>

    )
    }
    
  }
}
