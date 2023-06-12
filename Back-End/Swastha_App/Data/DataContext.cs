using Microsoft.EntityFrameworkCore;
using Swastha_App.Models;

namespace Swastha_App.Data
{
    public class DataContext:DbContext
    {
        public DataContext( DbContextOptions <DataContext> options) : base(options){ }
        public DbSet<User> Users { get; set; }
    }
}
