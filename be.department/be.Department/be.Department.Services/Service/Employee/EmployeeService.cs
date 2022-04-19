using be.Data;
using be.Data.Model.EmployeeModel;
using be.Service;

namespace be.Services
{
    //Create and Validate JWT Tokens + Use Custom JWT Middleware
    public class EmployeeService : IEmployeeService
    {
        public IEmployeeRepository _employeeRepository;
        

        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;        
        }

        public Employee GetEmployeeByEmail(AuthenticateRequest model)
        {
            var employee = _employeeRepository.GetEmployeeByEmail(model);
            return employee;
        }

        public List<EmployeeResponse> GetEmployeeInDepartments(long departmentId)
        {
            throw new NotImplementedException();
        }
    }
}
