namespace be.Data
{
    public class Employee : BaseEntity
    {
        public int DepartmentId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? FullName { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }
        public DateTime BirthDate { get; set; }
        public bool IsActive { get; set; }

        public long CreatedById { get; set; }
        public long UpdatedById { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastTime { get; set; }
    }
}
