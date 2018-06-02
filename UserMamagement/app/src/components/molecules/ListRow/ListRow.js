
import React, { Component } from 'react';
import UserApi from 'Api/UserApi';


import './ListRow.css';



class ListRow extends Component {
    

    handleDeleteResponse = () => {
        this.props.refresh();
    }


    handleDelete = () =>{
        const userApi = new UserApi();
        userApi.DeleteUser(this.props.data.Id, this.handleDeleteResponse);
    }



    render() {

        if (this.props.isHeader){
            return (
                <div className="us-user-management-list-view-row-header container">
                    <div className="row header" >
                       <button onClick={this.props.addNew} className="btn btn-primary buttons"> Add <i class="fa fa-plus"> </i></button>
                    </div>
                    <hr/>
                </div>  

            );
        }
        
      return (
        <div className="us-user-management-list-view-row">
            <div className="row wrapper" onClick={this.props.handleClick}>

                <div className="first">
                    <img className="rounded-circle rounded-image" src={this.props.data.Image} alt="" />
                  
                </div>

                <div className="second">
                     <h6>{this.props.data.FullName}</h6>
                     <h6>{this.props.data.Description}</h6>
                </div>     
                
                <div className="third">
                    <i onClick={this.handleDelete} className="fa fa-trash"></i>
                </div>

            </div>
            
          
        </div>
      );
    }
  }
  export default ListRow;
  