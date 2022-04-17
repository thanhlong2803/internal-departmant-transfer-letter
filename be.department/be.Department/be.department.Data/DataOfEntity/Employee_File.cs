namespace be.Data
{
    public class Employee_File : BaseEntity
    {
        public int FileId { get; set; }
        public int EmployeeId { get; set; }
        public long DisplayOrder { get; set; }

        public long CreatedById { get; set; }
        public long UpdatedById { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastTime { get; set; }
    }
}
