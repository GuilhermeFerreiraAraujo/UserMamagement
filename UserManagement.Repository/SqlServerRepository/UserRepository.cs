using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UserManagement.Intefaces.IRepository;
using UserManagement.Models;


namespace UserManagement.Repository.SqlServerRepository
{
    public class UserRepository : IUserRepository
    {
        public bool Add(User user)
        {
            using (var db = new UserManagementDb())
            {
                var result = db.Users.Add(user);
                db.SaveChanges();
                return result != null ? true : false;
            }
        }

        public IEnumerable<User> GetUsers()
        {

            using (var db = new UserManagementDb())
            {
                var result = db.Users.ToList();
                return result;
            }
        }
    }
}