
namespace be.Data.Model.EmployeeModel
{
    public class EmployeeResponse
    {
        public long Id { get; set; }
        public string? Email { get; set; }
        public string? Firstname { get; set; }
        public string? Lastname { get; set; }

        public PositionType PostionId { get; set; }
        public string PostionName => PostionId.GetDescription();
    }
}
