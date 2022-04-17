namespace be.Data
{
    public class Department : BaseEntity
    {
        public string? Name { get; set; }
        public int PositionType { get; set; }
        public long CreatedById { get; set; }
        public long UpdatedById { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastTime { get; set; }
    }
}
