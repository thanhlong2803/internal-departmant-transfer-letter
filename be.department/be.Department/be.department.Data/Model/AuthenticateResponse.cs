using be.Data;

namespace be.Data
{
    public class AuthenticateResponse
    {
        public long Id { get; set; }
        public string? FullName { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public Role Role { get; set; }
        public string Token { get; set; }
        public PositionType PostionId { get; set; }
        public string PostionName => PostionId.GetDescription();
        public long DepartmentId { get; set; }
        public string? DepartmentName { get; set; }
    }
}
