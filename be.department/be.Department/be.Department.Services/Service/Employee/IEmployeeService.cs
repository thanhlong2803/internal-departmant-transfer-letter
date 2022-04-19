using be.Data;
using be.Data.Model.EmployeeModel;

namespace be.Services
{
    public interface IEmployeeService
    {
        //Create and Validate JWT Tokens + Use Custom JWT Middleware
        AuthenticateResponse Authenticate(AuthenticateRequest model);
        List<EmployeeResponse> GetEmployeeInDepartments(long departmentId);    
    }
}
