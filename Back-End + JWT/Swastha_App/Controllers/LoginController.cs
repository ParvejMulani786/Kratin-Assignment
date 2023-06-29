using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Swastha_App.Data;
using Swastha_App.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Swastha_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public IConfiguration _config;
        public readonly DataContext db;

        public LoginController(IConfiguration config, DataContext db)
        {
            this.db = db;
            this._config = config;

        }

        [HttpPost("{username}/{password}")]
        public async Task<IActionResult> Post(string username, string password)
        {
            if (username != null && password != null)
            {
                User userData = db.Users.FirstOrDefault(u => u.Username.Equals(username) && u.Password.Equals(password));
                var jwt = _config.GetSection("Jwt").Get<Jwt>();
                Console.WriteLine(userData);

                if (userData != null)
                {
                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, jwt.Subject),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("Id", userData.Id.ToString()),
                        new Claim("Username", userData.Username),
                        new Claim("Password", userData.Password),
                        //new Claim("FirstName", user.FirstName),
                        //new Claim("LastName", user.LastName),
                        //new Claim("Age", user.Age.ToString()),
                        //new Claim("Contact", user.Contact),
                        //new Claim("Gender", user.Gender),
                        //new Claim("Street", user.Street),
                        //new Claim("State", user.State),
                        //new Claim("City", user.City),
                        //new Claim("Pincode", user.Pincode),
                      


                    };
                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var u = userData;
                    var token = new JwtSecurityToken(
                       jwt.Issuer,
                       jwt.Audience,
                        claims,
                        expires: DateTime.Now.AddMinutes(20),
                        signingCredentials: signIn
                        

                    );
                    var token1 = new JwtSecurityTokenHandler().WriteToken(token);
                    return Ok(new { token1,userData});
                }
                else
                {
                    return BadRequest("Invalid Credentials");
                }
            }
            else
            {
                return BadRequest("Invalid Credentials");
            }
        }

        [HttpGet] 
        public async Task<User> GetUser(string username, string password)
        {
            return await db.Users.FirstOrDefaultAsync(u => u.Username == username && u.Password == password);
        }


        //[HttpPost("{username}/{password}")]
        //public User Get(string username, string password)
        //{
        //    return db.Users.FirstOrDefault(u => u.Username.Equals(username) && u.Password.Equals(password));
        //}

    }
}
  

