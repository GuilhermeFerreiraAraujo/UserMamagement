using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using UserMamagement.Models;

namespace UserMamagement.Api
{
    public class UserController : ApiController
    {
        // GET: User
        [Route("Api/User/Get")]
        [HttpGet]
        public IHttpActionResult GetUsers([FromBody]User user)
        {
            return Ok("Not implemented");
        }

        [Route("Api/User/Add")]
        [HttpPost]
        public IHttpActionResult AddUser([FromBody] User user)
        {
            return Ok("Not implemented");
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