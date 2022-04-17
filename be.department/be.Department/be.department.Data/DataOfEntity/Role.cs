namespace be.Data
{
    public class Role : BaseEntity
    {
        public string? Name { get; set; }
        public int UserType { get; set; }
        public bool IsDefault { get; set; }

        public long CreatedById { get; set; }
        public long UpdatedById { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastTime { get; set; }
    }
}
