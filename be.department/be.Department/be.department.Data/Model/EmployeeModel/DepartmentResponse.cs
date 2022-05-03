
namespace be.Data.Model
{
    public class DepartmentResponse
    {
        public long Id { get; set; }
        public string? DepartmentName { get; set; }
        public PositionType? PostionId { get; set; }
        public string? PostionName => PostionId?.GetDescription();
    }
}
