using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using UserMamagement.Models;
using UserManagement.Intefaces.IService;
using UserManagement.Models;
using UserManagement.Services;

namespace UserMamagement.Api
{
    public class UserController : ApiController
    {

        // GET: User
        [Route("Api/User/Get")]
        [HttpGet]
        public IHttpActionResult GetUsers([FromBody]User user)
        {
            UserService _userService = new UserService();
            var result = _userService.GetUsers();
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
            return Ok("Not implemented");
        }

        [Route("Api/User/Delete")]
        [HttpDelete]
        public IHttpActionResult DeleteUser([FromBody]User user)
        {
            return Ok("Not implemented");
        }


    }
}