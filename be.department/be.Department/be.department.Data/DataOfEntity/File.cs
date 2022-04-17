namespace be.Data
{
    public class File : BaseEntity
    {
        public string? MimeType { get; set; }
        public string? FileName { get; set; }
        public bool IsNew { get; set; }
        public string? Attribute { get; set; }
        public string? Path { get; set; }

        public long CreatedById { get; set; }
        public long UpdatedById { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastTime { get; set; }
    }
}
