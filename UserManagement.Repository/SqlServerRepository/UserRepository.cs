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

        public bool Delete(User user)
        {
            using (var db = new UserManagementDb())
            {
                db.Configuration.ValidateOnSaveEnabled = false;
                db.Users.Attach(user);
                db.Users.Remove(user);
                db.SaveChanges();
                db.SaveChanges();
                return user != null ? true : false;
            }
        }

        public User GetUserById(string userId)
        {
            using (var db = new UserManagementDb())
            {
                var result = db.Users.Where(x => x.Id == userId).FirstOrDefault();
                return result;
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

        public bool UpdateUser(User user)
        {
            using (var db = new UserManagementDb())
            {
                var result = db.Users.Where(x => x.Id == user.Id).FirstOrDefault();
                result.Hobbies = user.Hobbies;
                result.HomeTown = user.HomeTown;
                result.FullName = user.FullName;
                result.Description = user.Description;
                result.Image = user.Image;
                result.Img = user.Img;
                result.PersonalBlog = user.PersonalBlog;
                db.SaveChanges();
                return true;
            }
        }
    }
}