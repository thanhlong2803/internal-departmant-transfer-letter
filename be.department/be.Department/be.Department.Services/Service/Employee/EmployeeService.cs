using be.Data;
using be.Data.Model.EmployeeModel;
namespace be.Services
{
    //Create and Validate JWT Tokens + Use Custom JWT Middleware
    public class EmployeeService : IEmployeeService
    {
        public EmployeeService()
        {

        }

        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            throw new NotImplementedException();
        }

        public List<EmployeeResponse> GetEmployeeInDepartments(long departmentId)
        {
            throw new NotImplementedException();
        }
    }
}
