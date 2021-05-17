import React from 'react';
import '../../App.css';

export default function SignUp() {
  return <>
 
  <div className="container">
  <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group ">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile" className="input5"/>
    <p className="help-block"> Example block-level help text here.</p>
  </div>
  <div className="checkbox">
    <label>
      <input className="btnCheckbox" type="checkbox"/> Check me out
    </label>
  </div>
  <button type="submit" className="btn3">Submit</button>
</form>
</div>
  </>
  ;
}