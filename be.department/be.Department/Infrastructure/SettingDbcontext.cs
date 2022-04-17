using be.Data;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Infrastructure
{
    public class SettingDbcontext : DbContext
    {
        public SettingDbcontext(DbContextOptions<SettingDbcontext> options)
            : base(options)
        {
        }

        public DbSet<Department> Department { get; set; }
        public DbSet<be.Data.File> File { get; set; }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<Employee_File> Employee_File { get; set; }
        public DbSet<Employee_Role> Employee_Role { get; set; }
        public DbSet<FileBinary> FileBinary { get; set; }
        public DbSet<Role> Role { get; set; }
        public DbSet<Role_Function> Role_Function { get; set; }
        public DbSet<SettingTransferLetter> SettingTransferLetter { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    //dynamically load all entity and query type configurations
        //    var typeConfigurations = Assembly.GetExecutingAssembly().GetTypes().Where(type =>
        //        (type.BaseType?.IsGenericType ?? false)
        //        && type.BaseType.GetGenericTypeDefinition() == typeof(DepartmentEntityTypeConfiguration<>));

        //    foreach (var typeConfiguration in typeConfigurations)
        //    {
        //        dynamic configuration = Activator.CreateInstance(typeConfiguration);
        //        modelBuilder.ApplyConfiguration(configuration);
        //    }

        //    base.OnModelCreating(modelBuilder);
        //}
    }
}
