using be.Data;
using be.Data.Model.EmployeeModel;

namespace be.Services
{
    public interface IEmployeeService
    {
        //Create and Validate JWT Tokens + Use Custom JWT Middleware
        Employee GetEmployeeByEmail(AuthenticateRequest model);
        List<EmployeeResponse> GetEmployeeByDepartmentId(long employeeId, long departmentId);
    }
}
