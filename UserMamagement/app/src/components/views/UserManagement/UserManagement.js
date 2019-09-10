import React, { Component } from 'react';
import ListView from 'Molecules/ListView';
import UserDetail from 'Molecules/UserDetail';
import UserApi from 'Api/UserApi';

import './UserManagement.css';

class UserManagement extends Component {

  componentWillMount() {
    this.setState({
      data: [],
      selectedUser: {},
    })
  }

  handleResponse = (response) => {
    if (response.status === 200) {
      this.setState({
        data: response.data,
        selectedUser: "",
        isAdd: true,
      });
    }
  }

  searchUsers = () => {
    const userApi = new UserApi();
    userApi.GetUsers(this.handleResponse);
  }

  componentDidMount() {
    this.searchUsers();
  }

  handleSelection = (selectedUser) => {
    this.setState({
      selectedUser,
      isAdd: false,
    });
  }

  handleAddNew = () => {
    this.setState({
      selectedUser: {},
      isAdd: true,
    });
  }

  render() {
    return (
      <div className="us-user-management container">

        <div className="maincomponent">
          <div className="leftside">
            <ListView data={this.state.data}
              handleSelection={this.handleSelection}
              addNew={this.handleAddNew}
              refresh={this.searchUsers} />
          </div>

          <div className="rightside">
            <UserDetail data={this.state.selectedUser}
              isAdd={this.state.isAdd}
              updateListView={this.searchUsers}
              refresh={this.searchUsers} />
          </div>
        </div>
      </div>
    );
  }
}
export default UserManagement;
