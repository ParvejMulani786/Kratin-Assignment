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

        [HttpPost]
        public async Task<IActionResult> Post(User user)
        {
            if (user != null && user.Username != null && user.Password != null)
            {
                var userData = await GetUser(user.Username, user.Password);
                var jwt = _config.GetSection("Jwt").Get<Jwt>();
                Console.WriteLine(userData);

                if (userData != null)
                {
                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, jwt.Subject),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("Id", user.Id.ToString()),
                        new Claim("Username", user.Username),
                        new Claim("Password", user.Password)

                    };
                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(
                       jwt.Issuer,
                       jwt.Audience,
                        claims,
                        expires: DateTime.Now.AddMinutes(20),
                        signingCredentials: signIn
                    );
                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
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


        [HttpPost("{username}/{password}")]
        public User Get(string username, string password)
        {
            return db.Users.FirstOrDefault(u => u.Username.Equals(username) && u.Password.Equals(password));
        }

    }
}
  

