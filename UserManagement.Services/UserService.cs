using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserManagement.Intefaces.IRepository;
using UserManagement.Intefaces.IService;
using UserManagement.Models;
using UserManagement.Repository.SqlServerRepository;

namespace UserManagement.Services
{
    public class UserService : IUserService
    {
        public bool Add(User user)
        {
            IUserRepository userRepository = new UserRepository();


            string id = Guid.NewGuid().ToString();

            user.Id = id;

            var result = userRepository.Add(user);

            return result;
        }


        public User GetUserById(string id)
        {
            IUserRepository userRepository = new UserRepository();

            var result = userRepository.GetUserById(id);

            return result;

        }


        public IEnumerable<User> GetUsers()
        {
            IUserRepository userRepository = new UserRepository();

            var result = userRepository.GetUsers();

            return result;
        }

        public bool Delete(string userId)
        {
            IUserRepository userRepository = new UserRepository();

            var user = userRepository.GetUserById(userId);

            var result = userRepository.Delete(user);

            return result;
        }

        public bool UpdateUser(User user)
        {
            IUserRepository userRepository = new UserRepository();
            return userRepository.UpdateUser(user);


        }
    }
}