using System.Web.Http;
using UserManagement.Models;
using UserManagement.Services;

namespace UserMamagement.Api
{
    public class UserController : ApiController
    {

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
            var _userService = new UserService();

            var result = _userService.Add(user);

            if (result)
            {
                return Ok(result);
            }
          
            return BadRequest("There was a problem with the request.");
        }

        [Route("Api/User/Edit")]
        [HttpPut]
        public IHttpActionResult EditUser([FromBody] User user)
        {
            var _userService = new UserService();
            _userService.UpdateUser(user);
            return Ok("");
        }

        [Route("Api/User/Delete")]
        [HttpPost]
        public IHttpActionResult DeleteUser([FromBody]User user)
        {
            var _userService = new UserService();
            var result = _userService.Delete(user.Id);
            return Ok(result);
        }
    }
}