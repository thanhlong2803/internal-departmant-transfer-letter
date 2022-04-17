namespace be.Data
{
    public class Role_Function : BaseEntity
    {
        public long RoleId { get; set; }
        public int SecurityOperation { get; set; }
        public int DocumentType { get; set; }

        public long CreatedById { get; set; }
        public long UpdatedById { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastTime { get; set; }
    }
}
