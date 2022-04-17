
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace be.Data
{
    public class DepartmentMap : DepartmentEntityTypeConfiguration<Department>
    {
        public override void Configure(EntityTypeBuilder<Department> builder)
        {
            builder.ToTable(MappingDefaults.DepartmentTable);
            base.Configure(builder);
        }
    }
}
