using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swastha_App.Data;
using Swastha_App.Models;

namespace Swastha_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public readonly DataContext db;
        public UserController(DataContext db) { 
            this.db = db;
        
        }


        [HttpGet]
        public List<User> Get()
        {
            return db.Users.ToList();
        }

        [HttpPost("{username}/{password}")]
        public User Get(string username, string password)
        {
            return db.Users.FirstOrDefault(u => u.Username.Equals(username) && u.Password.Equals(password));
        }

        [HttpPost]
        public List<User> Post(User u)
        {
            db.Users.Add(u);
            db.SaveChanges();
            return db.Users.ToList() ;  
        }
    }
}
