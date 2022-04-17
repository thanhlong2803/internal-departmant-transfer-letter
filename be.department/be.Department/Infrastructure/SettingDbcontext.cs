using be.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class SettingDbcontext : DbContext
    {
        public SettingDbcontext(DbContextOptions<SettingDbcontext> options)
            : base(options)
        {
        }

        public DbSet<Department> Departments { get; set; }
    }
}
