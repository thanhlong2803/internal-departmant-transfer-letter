using be.Data;

namespace be.Service
{
    public interface IEmployeeRepository
    {
        Employee GetEmployeeById(long employeeId);
    }
}
