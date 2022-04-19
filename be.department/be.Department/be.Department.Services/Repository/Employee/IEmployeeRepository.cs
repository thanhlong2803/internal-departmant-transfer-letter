using be.Data;

namespace be.Services
{
    public interface IEmployeeRepository
    {
        Employee GetEmployeeById(long employeeId);
        Employee GetEmployeeByEmail(AuthenticateRequest authenticateRequest);
    }
}
