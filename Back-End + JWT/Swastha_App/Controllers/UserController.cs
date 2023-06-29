using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Swastha_App.Data;
using Swastha_App.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Runtime.Intrinsics.X86;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Swastha_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    
    public class UserController : ControllerBase
    {
        
        public readonly DataContext db;

        public UserController( DataContext db)
        {
            this.db = db;
           
        }



        [HttpGet]
        public List<User> Get()
        {
            return db.Users.ToList();
        }


        [AllowAnonymous]
        [HttpPost]
        public List<User> Post(User u)
        {
            db.Users.Add(u);
            db.SaveChanges();
            return db.Users.ToList();
        }

       
        
    }
}
