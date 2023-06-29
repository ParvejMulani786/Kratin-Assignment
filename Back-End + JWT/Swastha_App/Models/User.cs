using System.ComponentModel.DataAnnotations;

namespace Swastha_App.Models
{
    public class User
    {
        [Key]

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Contact { get; set; }
        public string Gender { get; set; }
        public string Street { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Pincode { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

     }

    public class Jwt
    {
        public string Key { get; set; }

        public string Issuer { get; set; }

        public string Audience { get; set; }

        public string Subject { get; set; }
    }
}
