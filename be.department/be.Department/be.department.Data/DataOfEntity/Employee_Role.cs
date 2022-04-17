namespace be.Data
{
    public class Employee_Role : BaseEntity
    {
        public long EmployeeId { get; set; }
        public long RoleId { get; set; }

        public long CreatedById { get; set; }
        public long UpdatedById { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastTime { get; set; }
    }
}
