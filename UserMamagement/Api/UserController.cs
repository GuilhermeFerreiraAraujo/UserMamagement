﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using UserMamagement.Models;
using UserManagement.Intefaces.IService;
using UserManagement.Models;
using UserManagement.Services;
using static System.Web.HttpContext;

namespace UserMamagement.Api
{

    public class UserController : ApiController
    {

        // GET: User
        [AllowAnonymous]
        [Route("Api/User/Get")]
        [HttpGet]
 
        public IHttpActionResult GetUsers([FromBody]User user)
        {
            UserService _userService = new UserService();
            var result = _userService.GetUsers();

            //byte[] image = Path.Combine(Server.MapPath("~/Content/Images/business_user.png"));

            //string file = Current.Server.MapPath("~/Content/Images/business_user.png");
            //byte[] buffer = File.ReadAllBytes(file);


            //foreach (var item in result)
            //{
            //     item.Image = buffer;
            //}


            return Ok(result);
        }

        [Route("Api/User/Add")]
        [HttpPost]
        public IHttpActionResult AddUser([FromBody] User user)
        {
            UserService _userService = new UserService();

            var result = _userService.Add(user);

            if (result)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest("There was a problem with the request.");
            }
        }

        [Route("Api/User/Edit")]
        [HttpPut]
        public IHttpActionResult EditUser([FromBody] User user)
        {
            UserService _userService = new UserService();
            var result = _userService.UpdateUser(user);
            return Ok("");
        }

        [Route("Api/User/Delete")]
        [HttpPost]
        public IHttpActionResult DeleteUser([FromBody]User user)
        {
            UserService _userService = new UserService();
            var result = _userService.Delete(user.Id);
            return Ok(result);
        }


    }
}