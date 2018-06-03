import React, { Component } from 'react';
import './FormInput.css';



class FormInput extends Component {
    render() {
      return (
        <div className="us-user-management-form-input">
            <div> 
                <label> {this.props.label} </label>
            </div>
            
            <input
                className="us-form-input" 
                placeholder={this.props.placeholder} 
                value={this.props.value}   
                onChange={this.props.onChange}
                name={this.props.name}
                />
              <span className="error">{this.props.error}</span>
          
        </div>
      );
    }
  }
  export default FormInput;
  