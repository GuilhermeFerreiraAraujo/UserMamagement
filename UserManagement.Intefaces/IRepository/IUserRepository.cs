using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserManagement.Models;

namespace UserManagement.Intefaces.IRepository
{
    public interface IUserRepository
    {
        IEnumerable<User> GetUsers();
        bool Add(User user);
    }
}
