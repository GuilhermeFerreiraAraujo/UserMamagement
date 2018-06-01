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

            var result = userRepository.Add(user);

            return result;
        }

        public IEnumerable<User> GetUsers()
        {
            IUserRepository userRepository = new UserRepository();

            var result = userRepository.GetUsers();

            return result;
        }

    
    }
}