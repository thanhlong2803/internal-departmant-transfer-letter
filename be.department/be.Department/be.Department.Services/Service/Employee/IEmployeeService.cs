using be.Data;
using be.Data.Model.EmployeeModel;

namespace be.Services.Service.Employee
{
    internal interface IEmployeeService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest model);
        List<EmployeeResponse> GetEmployeeInDepartments(long departmentId);    
    }
}
