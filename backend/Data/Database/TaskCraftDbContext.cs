using backend.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Database
{
    public class TaskCraftDbContext : DbContext
    {
        public TaskCraftDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<WorkSpace> WorkSpaces { get; set; } //workspace table

        public DbSet<Todo> Todos { get; set; } //tasktable
    }
}
