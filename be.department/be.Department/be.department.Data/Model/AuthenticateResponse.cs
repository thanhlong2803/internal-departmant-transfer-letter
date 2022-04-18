using be.Data;

namespace be.Department.Models
{
    public class AuthenticateResponse
    {
        public long Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public Role Role { get; set; }
        public string Token { get; set; }
    }
}
