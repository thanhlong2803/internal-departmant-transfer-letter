namespace be.Data
{
    public class SettingTransferLetter : BaseEntity
    {
        public string? Value { get; set; }
        public string? Name { get; set; }
        public bool? IsActive { get; set; }

        public long CreatedById { get; set; }
        public long UpdatedById { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastTime { get; set; }
    }
}
