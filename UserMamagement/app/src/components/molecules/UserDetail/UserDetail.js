import React, { Component } from 'react';
import FormInput from 'Atoms/FormInput';
import UserImage from './business_user.png';
import UserApi from 'Api/UserApi';
import './UserDetail.css';


class UserDetail extends Component {

  cleanFields = () => {
    this.setState({
      FullName: '',
      Description: '',
      Hobbies: '',
      HomeTown: '',
      Motto: '',
      PersonalBlog: '',
      Image: undefined,
      errors: {
        FullName: '',
        Description: '',
        Hobbies: '',
        HomeTown: '',
        Motto: '',
        PersonalBlog: '',
      }

    })
  }

  validate() {

    let validated = true;
    if (this.state.FullName === '') {
      var FullNameError = 'Full name is required';
      validated = false;
    }

    if (this.state.Description === '') {
      var DescriptionError = 'Description is required';
      validated = false;
    }

    if (this.state.Hobbies === '') {
      var HobbiesError = 'Hobbies is required';
      validated = false;
    }

    if (this.state.HomeTown === '') {
      var HomeTownError = 'HomeTown is required';
      validated = false;
    }

    if (this.state.Motto === '') {
      var MottoError = 'Motto is required';
      validated = false;
    }
    if (this.state.PersonalBlog === '') {
      var PersonalBlogError = 'PersonalBlog is required';
      validated = false;
    }

    const errors = {
      FullName: FullNameError,
      Description: DescriptionError,
      Hobbies: HobbiesError,
      HomeTown: HomeTownError,
      Motto: MottoError,
      PersonalBlog: PersonalBlogError,
    }
    this.setState({
      errors: errors
    })
    return validated;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAdd) {
      this.cleanFields();
    } else {
      const { FullName,
        Description,
        Hobbies,
        HomeTown,
        Motto,
        PersonalBlog,
        Id,
        Image
      } = nextProps.data;
      this.setState({
        FullName,
        Description,
        Hobbies,
        HomeTown,
        Motto,
        PersonalBlog,
        Id,
        Image,
        errors: {
          FullName: '',
          Description: '',
          Hobbies: '',
          HomeTown: '',
          Motto: '',
          PersonalBlog: '',
        }

      })
    }
  }

  componentWillMount() {

    const { FullName,
      Description,
      Hobbies,
      HomeTown,
      Motto,
      PersonalBlog,
      Id,
      Image
    } = this.props.data;
    this.setState({
      FullName,
      Description,
      Hobbies,
      HomeTown,
      Motto,
      PersonalBlog,
      Id,
      Image,
      errors: {
        FullName: '',
        Description: '',
        Hobbies: '',
        HomeTown: '',
        Motto: '',
        PersonalBlog: '',
      },
    })
  }


  handleChange = (evt) => {
    const { target } = evt;
    const value = target.value;

    this.setState({
      [target.name]: value,
    });
  }

  handleAddResponse = (response) => {
    this.cleanFields();
    this.props.refresh();
  }

  handleEditResponse = (response) => {
    this.props.refresh();
  }

  handleAddUser = () => {
    if (!this.validate()) return;
    const userApi = new UserApi();
    const {
      FullName,
      Description,
      Hobbies,
      HomeTown,
      Motto,
      PersonalBlog,
      Image
    } = this.state;


    userApi.AddUser(
      FullName,
      Description,
      Hobbies,
      HomeTown,
      Motto,
      PersonalBlog,
      Image,
      this.handleAddResponse
    )
  }

  handleEditUser = () => {
    if (!this.validate()) return;
    const userApi = new UserApi();
    const {
      FullName,
      Description,
      Hobbies,
      HomeTown,
      Motto,
      PersonalBlog,
      Id,
      Image
    } = this.state;


    userApi.EditUser(
      FullName,
      Description,
      Hobbies,
      HomeTown,
      Motto,
      PersonalBlog,
      Id,
      Image,
      this.handleEditResponse
    )
  }

  renderAddEditButton() {
    if (!this.props.isAdd) {
      return (
        <button onClick={this.handleEditUser} className="edit btn btn-primary">Save</button>
      )
    } else {
      return (
        <button onClick={this.handleAddUser} className="add btn btn-primary">Add</button>
      )

    }

  }



  fileChangedHandler(event) {
    const file = event.target.files[0];

    if (file) {

      let reader = new FileReader();

      reader.onload = (e) => {

        this.setState({
          Image: e.target.result
        });
      }
      reader.readAsDataURL(event.target.files[0]);

    }

  }

  renderImage() {

    if (!this.state.Image) {
      return (
        <div className="text-center">
          <input className="selectFileI" type="file" onChange={this.fileChangedHandler.bind(this)} />

          <img className="rounded-circle rounded-image" src={UserImage} alt="" />


        </div>);
    } else {
      return (

        <div className="text-center">
          <input className="selectFileI" type="file" onChange={this.fileChangedHandler.bind(this)} />

          <img className="rounded-circle rounded-image" src={this.state.Image} alt="" />
        </div>

      );
    }
  }

  render() {
    return (
      <div className="us-user-management-list-view">
        {this.renderImage()}

        <hr />

        <FormInput label="Full Name"
          name="FullName"
          placeholder="Full Name"
          value={this.state.FullName}
          onChange={this.handleChange}
          error={this.state.errors.FullName} />

        <FormInput label="Description"
          name="Description"
          placeholder="Description"
          value={this.state.Description}
          onChange={this.handleChange}
          error={this.state.errors.Description} />

        <FormInput label="Hobbies"
          name="Hobbies"
          placeholder="Hobbies"
          value={this.state.Hobbies}
          onChange={this.handleChange}
          error={this.state.errors.Hobbies} />

        <FormInput label="Home Town"
          name="HomeTown"
          placeholder="Home Town"
          value={this.state.HomeTown}
          onChange={this.handleChange}
          error={this.state.errors.HomeTown} />

        <FormInput label="Motto"
          name="Motto"
          placeholder="Motto"
          value={this.state.Motto}
          onChange={this.handleChange}
          error={this.state.errors.Motto} />

        <FormInput label="Personal Blog"
          name="PersonalBlog"
          placeholder="Personal Blog"
          value={this.state.PersonalBlog}
          onChange={this.handleChange}
          error={this.state.errors.PersonalBlog} />

        {this.renderAddEditButton()}

      </div>
    );
  }
}
export default UserDetail;
